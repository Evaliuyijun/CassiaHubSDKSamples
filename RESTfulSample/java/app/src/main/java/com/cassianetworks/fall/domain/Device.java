package com.cassianetworks.fall.domain;

import com.google.gson.Gson;

import java.util.ArrayList;

/**
 * Created by ZhangMin on 2016/8/23.
 */
public class Device {
    private String bdaddr;
    private String scanData;
    private String name;
    private double rssi;

    public ArrayList<DeviceHandle> getHandleList() {
        return handleList == null ? new ArrayList<DeviceHandle>() : handleList;
    }

    public void setHandleList(ArrayList<DeviceHandle> handleList) {
        this.handleList = handleList;
    }

    private ArrayList<DeviceHandle> handleList = new ArrayList<>();

    public double getRssi() {
        return rssi;
    }

    public Device() {
    }

    /**
     * @param name   name
     * @param bdaddr mac
     */
    public Device(String name, String bdaddr) {
        this.bdaddr = bdaddr;
        this.name = name;
    }


    public Device(String name, String bdaddr, double rssi, String scanData) {
        this.bdaddr = bdaddr;
        this.scanData = scanData;
        this.name = name;
        this.rssi = rssi;
    }

    public void setRssi(double rssi) {
        this.rssi = rssi;
    }

    private String alarmStatus;
    private String battery;//0 正常 1 不足

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Device)) return false;

        Device device = (Device) o;

        return getBdaddr() != null ? getBdaddr().equals(device.getBdaddr()) : device.getBdaddr() == null;

    }

    @Override
    public int hashCode() {
        return getBdaddr() != null ? getBdaddr().hashCode() : 0;
    }

    public String getBdaddr() {
        return bdaddr;
    }

    public void setBdaddr(String bdaddr) {
        this.bdaddr = bdaddr;
    }

    public String getScanData() {
        return scanData;
    }

    public void setScanData(String scanData) {
        this.scanData = scanData;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String toString() {
        return new Gson().toJson(this);
    }


}
