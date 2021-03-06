package com.cassianetworks.fall.activities;

import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.BaseAdapter;
import android.widget.TextView;

import com.cassianetworks.fall.BaseActivity;
import com.cassianetworks.fall.R;
import com.cassianetworks.fall.domain.Device;
import com.cassianetworks.fall.domain.DeviceHandle;
import com.cassianetworks.fall.utils.DialogUtils;
import com.cassianetworks.fall.views.MyListView;
import com.cassianetworks.sdklibrary.Indicator;
import com.google.gson.Gson;
import com.google.gson.internal.LinkedTreeMap;

import org.xutils.common.util.LogUtil;
import org.xutils.view.annotation.ContentView;
import org.xutils.view.annotation.Event;
import org.xutils.view.annotation.ViewInject;
import org.xutils.x;

import java.util.ArrayList;
import java.util.HashMap;

import static com.cassianetworks.fall.BaseApplication.deviceManager;
import static com.cassianetworks.fall.BaseApplication.indicator;

@ContentView(R.layout.activity_device)
public class DeviceActivity extends BaseActivity {

    @ViewInject(R.id.tv_mac)
    TextView tvMac;
    @ViewInject(R.id.et_value)
    TextView etValue;
    @ViewInject(R.id.tv_service)
    TextView tvService;
    @ViewInject(R.id.tv_battery)
    TextView tvBattery;
    @ViewInject(R.id.lv_device_handle)
    MyListView lv_device_handle;

    private Device device;
    private String deviceBdaddr;
    private HandleAdapter adapter;

    @Event(value = {R.id.tv_battery, R.id.iv_left, R.id.iv_right, R.id.tv_del, R.id.tv_record, R.id.tv_service})
    private void getEvent(View v) {
        switch (v.getId()) {
            case R.id.tv_battery:
                connect();
                break;
            case R.id.iv_left:
                finish();
                break;
            case R.id.iv_right:
                getDeviceServices();
                break;
            case R.id.tv_del:
                DialogUtils.showDefaultYNTipDialog(this, getString(R.string.del_device_dialog_msg), new Runnable() {
                    @Override
                    public void run() {
                        showLoading();
                        indicator.disconnect(deviceBdaddr, new Indicator.Callback<String>() {
                            @Override
                            public void run(boolean success, String msg) {
                                if (success) {
                                    LogUtil.d("disconnect device success");
                                    deviceManager.delDevice(device);
                                    if (MainActivity.instance != null)
                                        MainActivity.instance.finish();
                                    startActivity(MainActivity.class);
                                    finish();
                                } else {
                                    LogUtil.d("disconnect device fail" + msg);
                                    showTips(msg);

                                }
                            }
                        });


                    }
                });
                break;
            case R.id.tv_record:
                showRecord();
                break;
            case R.id.tv_service:
                getDeviceServices();
                break;
            default:
                break;
        }
    }

    private void connect() {
        showLoading();
        try {
            indicator.connect(Indicator.CONNECT_TYPE_PUBLIC, deviceBdaddr, new Indicator.Callback<String>() {
                @Override
                public void run(boolean success, String msg) {
                    LogUtil.d("connect device value" + msg);
                    if (success) getDeviceServices();
                    else {
                        dismissLoading();
                        LogUtil.d("connect device fail " + msg);
                        showTips(msg);

                    }
                }
            });
        } catch (Exception e) {
            LogUtil.d("connect device value" + e.getMessage());
            showTips(e.getMessage());
        }
    }

    /**
     * 查看历史通知
     */
    private void showRecord() {
        Bundle bundle = new Bundle();
        bundle.putString("device_mac", device.getBdaddr());
        startActivity(RecordActivity.class, bundle);
    }

    @Override
    protected void init() {
        deviceBdaddr = getIntent().getStringExtra("device_bdaddr");
        device = deviceManager.getDevice(deviceBdaddr);
        if (device == null) {
            startActivity(SearchDeviceActivity.class);
            finish();
            return;
        }
        if (device.getHandleList().size() == 0) {
            tvService.setVisibility(View.VISIBLE);
        } else {
            tvService.setVisibility(View.GONE);
        }
        tvMac.setText(deviceBdaddr);
        adapter = new HandleAdapter();
        lv_device_handle.setAdapter(adapter);

        //将当前item的handle设置为输入框的美瞳
        lv_device_handle.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {

                indicator.writeHandle(device.getBdaddr(), adapter.getItem(position).handle, etValue.getText().toString().trim(), new Indicator.Callback<String>() {
                    @Override
                    public void run(boolean success, String msg) {
                        LogUtil.d("writeHandle value" + msg);
                        showTips(msg);
                    }
                });

            }
        });
    }


    private class HandleAdapter extends BaseAdapter {

        @Override
        public int getCount() {
            return device.getHandleList() == null ? 0 : device.getHandleList().size();

        }

        @Override
        public DeviceHandle getItem(int position) {
            return device.getHandleList().get(position);
        }

        @Override
        public long getItemId(int position) {
            return position;
        }


        @Override
        public View getView(final int position, View convertView, ViewGroup parent) {
            HandleViewHolder holder;

            LayoutInflater inflater = (LayoutInflater) getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            if (convertView == null) {
                convertView = inflater.inflate(R.layout.item_lv_device_handle_list, parent, false);
                holder = new HandleViewHolder();
                x.view().inject(holder, convertView);
                convertView.setTag(holder);
            } else {
                holder = (HandleViewHolder) convertView.getTag();
            }
            DeviceHandle device = getItem(position);
            holder.tv_uuid.setText(String.format(getString(R.string.uuid), device.uuid));
            holder.tv_handle.setText(String.format(getString(R.string.handle), device.handle));
            holder.tv_properties.setText(String.format(getString(R.string.properties), device.properties));
            holder.tv_valueHandle.setText(String.format(getString(R.string.valuehandle), device.valueHandle));
            return convertView;
        }


    }

    class HandleViewHolder {
        @ViewInject(R.id.tv_handle)
        private TextView tv_handle;
        @ViewInject(R.id.tv_uuid)
        private TextView tv_uuid;
        @ViewInject(R.id.tv_properties)
        private TextView tv_properties;
        @ViewInject(R.id.tv_valueHandle)
        private TextView tv_valueHandle;
    }

    /**
     * 发现所有的服务
     */
    private void getDeviceServices() {
        showLoading();
        final Device temDev = new Device(device.getName(), device.getBdaddr());

        indicator.discoverServices(device.getBdaddr(), new Indicator.Callback<String>() {
            @Override
            public void run(boolean success, String value) {
                dismissLoading();
                if (success) {
                    LogUtil.d("test discover service data " + value);
                    HashMap ret = new Gson().fromJson(value, HashMap.class);
                    ArrayList services = (ArrayList) ret.get("services");
                    for (int i = 0; i < services.size(); i++) {
                        LinkedTreeMap<String, Object> map = (LinkedTreeMap<String, Object>) services.get(i);
                        //暂时不用
//                        int startHandle = ((Double) map.get("startHandle")).intValue();
//                        int endHandle = ((Double) map.get("endHandle")).intValue();
//                        String uuid = (String) map.get("uuid");

                        ArrayList characteristics = (ArrayList) map.get("characteristics");
                        if (characteristics != null) {
                            for (int j = 0; j < characteristics.size(); j++) {
                                LinkedTreeMap<String, Object> c = (LinkedTreeMap<String, Object>) characteristics.get(j);
                                int cHandle = ((Double) c.get("handle")).intValue();
                                String cUuid = (String) c.get("uuid");
                                int properties = ((Double) c.get("properties")).intValue();
                                int valueHandle = ((Double) c.get("valueHandle")).intValue();
                                ArrayList descriptors = (ArrayList) c.get("descriptors");
                                if (descriptors != null) {
                                    for (int k = 0; k < descriptors.size(); k++) {
                                        LinkedTreeMap<String, Object> des = (LinkedTreeMap<String, Object>) descriptors.get(k);
                                        int dHandle = ((Double) des.get("handle")).intValue();
                                        String dUuid = (String) des.get("uuid");
                                        temDev.getHandleList().add(new DeviceHandle(dHandle, dUuid));
                                    }
                                }
                                temDev.getHandleList().add(new DeviceHandle(cHandle, cUuid, properties, valueHandle));
                            }
                        }
                        if (temDev.getHandleList().size() > 0) {
                            runOnUiThread(new Runnable() {
                                @Override
                                public void run() {
                                    deviceManager.updateDeviceList(device, temDev);
                                    device.setHandleList(temDev.getHandleList());
                                    tvService.setVisibility(View.GONE);
                                    adapter.notifyDataSetChanged();
                                }
                            });
                        }
                    }

                }

            }
        });
    }
}
