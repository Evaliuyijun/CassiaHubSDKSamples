//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
AuthInfo = module.exports.AuthInfo = function(args) {
  this.userId = null;
  this.name = null;
  this.secret = null;
  if (args) {
    if (args.userId !== undefined) {
      this.userId = args.userId;
    }
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.secret !== undefined) {
      this.secret = args.secret;
    }
  }
};
AuthInfo.prototype = {};
AuthInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.userId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.secret = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AuthInfo.prototype.write = function(output) {
  output.writeStructBegin('AuthInfo');
  if (this.userId !== null && this.userId !== undefined) {
    output.writeFieldBegin('userId', Thrift.Type.STRING, 1);
    output.writeString(this.userId);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.secret !== null && this.secret !== undefined) {
    output.writeFieldBegin('secret', Thrift.Type.STRING, 3);
    output.writeString(this.secret);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Device = module.exports.Device = function(args) {
  this.id = null;
  this.name = null;
  this.chipId = null;
  this.type = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    }
    if (args.name !== undefined) {
      this.name = args.name;
    }
    if (args.chipId !== undefined) {
      this.chipId = args.chipId;
    }
    if (args.type !== undefined) {
      this.type = args.type;
    }
  }
};
Device.prototype = {};
Device.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.chipId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.type = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Device.prototype.write = function(output) {
  output.writeStructBegin('Device');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.chipId !== null && this.chipId !== undefined) {
    output.writeFieldBegin('chipId', Thrift.Type.STRING, 3);
    output.writeString(this.chipId);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.STRING, 4);
    output.writeString(this.type);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

GattService = module.exports.GattService = function(args) {
  this.uuid = null;
  this.desc = null;
  this.startHandle = null;
  this.endHandle = null;
  this.chars = null;
  if (args) {
    if (args.uuid !== undefined) {
      this.uuid = args.uuid;
    }
    if (args.desc !== undefined) {
      this.desc = args.desc;
    }
    if (args.startHandle !== undefined) {
      this.startHandle = args.startHandle;
    }
    if (args.endHandle !== undefined) {
      this.endHandle = args.endHandle;
    }
    if (args.chars !== undefined) {
      this.chars = args.chars;
    }
  }
};
GattService.prototype = {};
GattService.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.uuid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.desc = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.startHandle = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.endHandle = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.chars = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.Characteristic();
          elem6.read(input);
          this.chars.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

GattService.prototype.write = function(output) {
  output.writeStructBegin('GattService');
  if (this.uuid !== null && this.uuid !== undefined) {
    output.writeFieldBegin('uuid', Thrift.Type.STRING, 1);
    output.writeString(this.uuid);
    output.writeFieldEnd();
  }
  if (this.desc !== null && this.desc !== undefined) {
    output.writeFieldBegin('desc', Thrift.Type.STRING, 2);
    output.writeString(this.desc);
    output.writeFieldEnd();
  }
  if (this.startHandle !== null && this.startHandle !== undefined) {
    output.writeFieldBegin('startHandle', Thrift.Type.I32, 3);
    output.writeI32(this.startHandle);
    output.writeFieldEnd();
  }
  if (this.endHandle !== null && this.endHandle !== undefined) {
    output.writeFieldBegin('endHandle', Thrift.Type.I32, 4);
    output.writeI32(this.endHandle);
    output.writeFieldEnd();
  }
  if (this.chars !== null && this.chars !== undefined) {
    output.writeFieldBegin('chars', Thrift.Type.LIST, 5);
    output.writeListBegin(Thrift.Type.STRUCT, this.chars.length);
    for (var iter7 in this.chars)
    {
      if (this.chars.hasOwnProperty(iter7))
      {
        iter7 = this.chars[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Characteristic = module.exports.Characteristic = function(args) {
  this.uuid = null;
  this.desc = null;
  this.writeType = null;
  this.property = null;
  this.permission = null;
  this.handle = null;
  this.valueHandle = null;
  this.descriptors = null;
  if (args) {
    if (args.uuid !== undefined) {
      this.uuid = args.uuid;
    }
    if (args.desc !== undefined) {
      this.desc = args.desc;
    }
    if (args.writeType !== undefined) {
      this.writeType = args.writeType;
    }
    if (args.property !== undefined) {
      this.property = args.property;
    }
    if (args.permission !== undefined) {
      this.permission = args.permission;
    }
    if (args.handle !== undefined) {
      this.handle = args.handle;
    }
    if (args.valueHandle !== undefined) {
      this.valueHandle = args.valueHandle;
    }
    if (args.descriptors !== undefined) {
      this.descriptors = args.descriptors;
    }
  }
};
Characteristic.prototype = {};
Characteristic.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.uuid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.desc = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.writeType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.property = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.permission = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.handle = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.valueHandle = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.descriptors = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = new ttypes.Descriptor();
          elem14.read(input);
          this.descriptors.push(elem14);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Characteristic.prototype.write = function(output) {
  output.writeStructBegin('Characteristic');
  if (this.uuid !== null && this.uuid !== undefined) {
    output.writeFieldBegin('uuid', Thrift.Type.STRING, 1);
    output.writeString(this.uuid);
    output.writeFieldEnd();
  }
  if (this.desc !== null && this.desc !== undefined) {
    output.writeFieldBegin('desc', Thrift.Type.STRING, 2);
    output.writeString(this.desc);
    output.writeFieldEnd();
  }
  if (this.writeType !== null && this.writeType !== undefined) {
    output.writeFieldBegin('writeType', Thrift.Type.I32, 3);
    output.writeI32(this.writeType);
    output.writeFieldEnd();
  }
  if (this.property !== null && this.property !== undefined) {
    output.writeFieldBegin('property', Thrift.Type.I32, 4);
    output.writeI32(this.property);
    output.writeFieldEnd();
  }
  if (this.permission !== null && this.permission !== undefined) {
    output.writeFieldBegin('permission', Thrift.Type.I32, 5);
    output.writeI32(this.permission);
    output.writeFieldEnd();
  }
  if (this.handle !== null && this.handle !== undefined) {
    output.writeFieldBegin('handle', Thrift.Type.I32, 6);
    output.writeI32(this.handle);
    output.writeFieldEnd();
  }
  if (this.valueHandle !== null && this.valueHandle !== undefined) {
    output.writeFieldBegin('valueHandle', Thrift.Type.I32, 7);
    output.writeI32(this.valueHandle);
    output.writeFieldEnd();
  }
  if (this.descriptors !== null && this.descriptors !== undefined) {
    output.writeFieldBegin('descriptors', Thrift.Type.LIST, 8);
    output.writeListBegin(Thrift.Type.STRUCT, this.descriptors.length);
    for (var iter15 in this.descriptors)
    {
      if (this.descriptors.hasOwnProperty(iter15))
      {
        iter15 = this.descriptors[iter15];
        iter15.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Descriptor = module.exports.Descriptor = function(args) {
  this.uuid = null;
  this.permission = null;
  this.handle = null;
  if (args) {
    if (args.uuid !== undefined) {
      this.uuid = args.uuid;
    }
    if (args.permission !== undefined) {
      this.permission = args.permission;
    }
    if (args.handle !== undefined) {
      this.handle = args.handle;
    }
  }
};
Descriptor.prototype = {};
Descriptor.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.uuid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.permission = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.handle = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Descriptor.prototype.write = function(output) {
  output.writeStructBegin('Descriptor');
  if (this.uuid !== null && this.uuid !== undefined) {
    output.writeFieldBegin('uuid', Thrift.Type.STRING, 1);
    output.writeString(this.uuid);
    output.writeFieldEnd();
  }
  if (this.permission !== null && this.permission !== undefined) {
    output.writeFieldBegin('permission', Thrift.Type.I32, 2);
    output.writeI32(this.permission);
    output.writeFieldEnd();
  }
  if (this.handle !== null && this.handle !== undefined) {
    output.writeFieldBegin('handle', Thrift.Type.I32, 3);
    output.writeI32(this.handle);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

