// source: hero.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.hero.Empty', null, global);
goog.exportSymbol('proto.hero.HeroTypeMaster', null, global);
goog.exportSymbol('proto.hero.Param', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hero.HeroTypeMaster = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.hero.HeroTypeMaster.repeatedFields_, null);
};
goog.inherits(proto.hero.HeroTypeMaster, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.hero.HeroTypeMaster.displayName = 'proto.hero.HeroTypeMaster';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hero.Param = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hero.Param, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.hero.Param.displayName = 'proto.hero.Param';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.hero.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.hero.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.hero.Empty.displayName = 'proto.hero.Empty';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.hero.HeroTypeMaster.repeatedFields_ = [16,17,18];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hero.HeroTypeMaster.prototype.toObject = function(opt_includeInstance) {
  return proto.hero.HeroTypeMaster.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hero.HeroTypeMaster} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hero.HeroTypeMaster.toObject = function(includeInstance, msg) {
  var f, obj = {
    heroType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    asset: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    rarity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    supply: jspb.Message.getFieldWithDefault(msg, 4, 0),
    param: (f = msg.getParam()) && proto.hero.Param.toObject(includeInstance, f),
    trend: (f = msg.getTrend()) && proto.hero.Param.toObject(includeInstance, f),
    active: jspb.Message.getFieldWithDefault(msg, 7, 0),
    passive: jspb.Message.getFieldWithDefault(msg, 8, 0),
    name: jspb.Message.getFieldWithDefault(msg, 9, ""),
    attributeList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f,
    attributeTypesList: (f = jspb.Message.getRepeatedField(msg, 17)) == null ? undefined : f,
    passiveV2List: (f = jspb.Message.getRepeatedField(msg, 18)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hero.HeroTypeMaster}
 */
proto.hero.HeroTypeMaster.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hero.HeroTypeMaster;
  return proto.hero.HeroTypeMaster.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hero.HeroTypeMaster} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hero.HeroTypeMaster}
 */
proto.hero.HeroTypeMaster.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeroType(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAsset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRarity(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSupply(value);
      break;
    case 5:
      var value = new proto.hero.Param;
      reader.readMessage(value,proto.hero.Param.deserializeBinaryFromReader);
      msg.setParam(value);
      break;
    case 6:
      var value = new proto.hero.Param;
      reader.readMessage(value,proto.hero.Param.deserializeBinaryFromReader);
      msg.setTrend(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setActive(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPassive(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.addAttribute(value);
      break;
    case 17:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAttributeTypes(values[i]);
      }
      break;
    case 18:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPassiveV2(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hero.HeroTypeMaster.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hero.HeroTypeMaster.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hero.HeroTypeMaster} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hero.HeroTypeMaster.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeroType();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAsset();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getRarity();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getSupply();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getParam();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.hero.Param.serializeBinaryToWriter
    );
  }
  f = message.getTrend();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.hero.Param.serializeBinaryToWriter
    );
  }
  f = message.getActive();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getPassive();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getAttributeList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      16,
      f
    );
  }
  f = message.getAttributeTypesList();
  if (f.length > 0) {
    writer.writePackedUint32(
      17,
      f
    );
  }
  f = message.getPassiveV2List();
  if (f.length > 0) {
    writer.writePackedUint32(
      18,
      f
    );
  }
};


/**
 * optional uint32 hero_type = 1;
 * @return {number}
 */
proto.hero.HeroTypeMaster.prototype.getHeroType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.hero.HeroTypeMaster} returns this
 */
proto.hero.HeroTypeMaster.prototype.setHeroType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool asset = 2;
 * @return {boolean}
 */
proto.hero.HeroTypeMaster.prototype.getAsset = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.hero.HeroTypeMaster} returns this
 */
proto.hero.HeroTypeMaster.prototype.setAsset = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int32 rarity = 3;
 * @return {number}
 */
proto.hero.HeroTypeMaster.prototype.getRarity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.hero.HeroTypeMaster} returns this
 */
proto.hero.HeroTypeMaster.prototype.setRarity = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 supply = 4;
 * @return {number}
 */
proto.hero.HeroTypeMaster.prototype.getSupply = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.hero.HeroTypeMaster} returns this
 */
proto.hero.HeroTypeMaster.prototype.setSupply = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional Param param = 5;
 * @return {?proto.hero.Param}
 */
proto.hero.HeroTypeMaster.prototype.getParam = function() {
  return /** @type{?proto.hero.Param} */ (
    jspb.Message.getWrapperField(this, proto.hero.Param, 5));
};


/**
 * @param {?proto.hero.Param|undefined} value
 * @return {!proto.hero.HeroTypeMaster} returns this
*/
proto.hero.HeroTypeMaster.prototype.setParam = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.hero.HeroTypeMaster} returns this
 */
proto.hero.HeroTypeMaster.prototype.clearParam = function() {
  return this.setParam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hero.HeroTypeMaster.prototype.hasParam = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Param trend = 6;
 * @return {?proto.hero.Param}
 */
proto.hero.HeroTypeMaster.prototype.getTrend = function() {
  return /** @type{?proto.hero.Param} */ (
    jspb.Message.getWrapperField(this, proto.hero.Param, 6));
};


/**
 * @param {?proto.hero.Param|undefined} value
 * @return {!proto.hero.HeroTypeMaster} returns this
*/
proto.hero.HeroTypeMaster.prototype.setTrend = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.hero.HeroTypeMaster} returns this
 */
proto.hero.HeroTypeMaster.prototype.clearTrend = function() {
  return this.setTrend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.hero.HeroTypeMaster.prototype.hasTrend = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 active = 7;
 * @return {number}
 */
proto.hero.HeroTypeMaster.prototype.getActive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.hero.HeroTypeMaster} returns this
 */
proto.hero.HeroTypeMaster.prototype.setActive = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 passive = 8;
 * @return {number}
 */
proto.hero.HeroTypeMaster.prototype.getPassive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.hero.HeroTypeMaster} returns this
 */
proto.hero.HeroTypeMaster.prototype.setPassive = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string name = 9;
 * @return {string}
 */
proto.hero.HeroTypeMaster.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.hero.HeroTypeMaster} returns this
 */
proto.hero.HeroTypeMaster.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated string attribute = 16;
 * @return {!Array<string>}
 */
proto.hero.HeroTypeMaster.prototype.getAttributeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.hero.HeroTypeMaster} returns this
 */
proto.hero.HeroTypeMaster.prototype.setAttributeList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.hero.HeroTypeMaster} returns this
 */
proto.hero.HeroTypeMaster.prototype.addAttribute = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.hero.HeroTypeMaster} returns this
 */
proto.hero.HeroTypeMaster.prototype.clearAttributeList = function() {
  return this.setAttributeList([]);
};


/**
 * repeated uint32 attribute_types = 17;
 * @return {!Array<number>}
 */
proto.hero.HeroTypeMaster.prototype.getAttributeTypesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 17));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.hero.HeroTypeMaster} returns this
 */
proto.hero.HeroTypeMaster.prototype.setAttributeTypesList = function(value) {
  return jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.hero.HeroTypeMaster} returns this
 */
proto.hero.HeroTypeMaster.prototype.addAttributeTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.hero.HeroTypeMaster} returns this
 */
proto.hero.HeroTypeMaster.prototype.clearAttributeTypesList = function() {
  return this.setAttributeTypesList([]);
};


/**
 * repeated uint32 passive_v2 = 18;
 * @return {!Array<number>}
 */
proto.hero.HeroTypeMaster.prototype.getPassiveV2List = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 18));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.hero.HeroTypeMaster} returns this
 */
proto.hero.HeroTypeMaster.prototype.setPassiveV2List = function(value) {
  return jspb.Message.setField(this, 18, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.hero.HeroTypeMaster} returns this
 */
proto.hero.HeroTypeMaster.prototype.addPassiveV2 = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 18, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.hero.HeroTypeMaster} returns this
 */
proto.hero.HeroTypeMaster.prototype.clearPassiveV2List = function() {
  return this.setPassiveV2List([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hero.Param.prototype.toObject = function(opt_includeInstance) {
  return proto.hero.Param.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hero.Param} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hero.Param.toObject = function(includeInstance, msg) {
  var f, obj = {
    hp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    phy: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pb_int: jspb.Message.getFieldWithDefault(msg, 3, 0),
    agi: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hero.Param}
 */
proto.hero.Param.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hero.Param;
  return proto.hero.Param.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hero.Param} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hero.Param}
 */
proto.hero.Param.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPhy(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInt(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAgi(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hero.Param.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hero.Param.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hero.Param} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hero.Param.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHp();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPhy();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getInt();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAgi();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 hp = 1;
 * @return {number}
 */
proto.hero.Param.prototype.getHp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.hero.Param} returns this
 */
proto.hero.Param.prototype.setHp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 phy = 2;
 * @return {number}
 */
proto.hero.Param.prototype.getPhy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.hero.Param} returns this
 */
proto.hero.Param.prototype.setPhy = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 int = 3;
 * @return {number}
 */
proto.hero.Param.prototype.getInt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.hero.Param} returns this
 */
proto.hero.Param.prototype.setInt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 agi = 4;
 * @return {number}
 */
proto.hero.Param.prototype.getAgi = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.hero.Param} returns this
 */
proto.hero.Param.prototype.setAgi = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.hero.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.hero.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.hero.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hero.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.hero.Empty}
 */
proto.hero.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.hero.Empty;
  return proto.hero.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.hero.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.hero.Empty}
 */
proto.hero.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.hero.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.hero.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.hero.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.hero.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.hero);
