// source: proto/product.proto
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
var global = Function('return this')();

var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
goog.object.extend(proto, proto_base_data_type_pb);
var proto_client_pb = require('../proto/client_pb.js');
goog.object.extend(proto, proto_client_pb);
var proto_business_pb = require('../proto/business_pb.js');
goog.object.extend(proto, proto_business_pb);
goog.exportSymbol('proto.product.ListProductInfoRequest', null, global);
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
proto.product.ListProductInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.product.ListProductInfoRequest.repeatedFields_, null);
};
goog.inherits(proto.product.ListProductInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.product.ListProductInfoRequest.displayName = 'proto.product.ListProductInfoRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.product.ListProductInfoRequest.repeatedFields_ = [5];



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
proto.product.ListProductInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.product.ListProductInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.product.ListProductInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.product.ListProductInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    filters: (f = msg.getFilters()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f),
    contextAttributesList: jspb.Message.toObjectList(msg.getContextAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance),
    searchValue: jspb.Message.getFieldWithDefault(msg, 6, ""),
    processParameterUuid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    fieldUuid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    browseFieldUuid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    referenceUuid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    columnUuid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    columnName: jspb.Message.getFieldWithDefault(msg, 13, "")
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
 * @return {!proto.product.ListProductInfoRequest}
 */
proto.product.ListProductInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.product.ListProductInfoRequest;
  return proto.product.ListProductInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.product.ListProductInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.product.ListProductInfoRequest}
 */
proto.product.ListProductInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 4:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setFilters(value);
      break;
    case 5:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addContextAttributes(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchValue(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessParameterUuid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldUuid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrowseFieldUuid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceUuid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnUuid(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
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
proto.product.ListProductInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.product.ListProductInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.product.ListProductInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.product.ListProductInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFilters();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
  f = message.getContextAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getSearchValue();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getProcessParameterUuid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getFieldUuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getBrowseFieldUuid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getReferenceUuid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getColumnUuid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional data.ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.product.ListProductInfoRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.product.ListProductInfoRequest} returns this
*/
proto.product.ListProductInfoRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.product.ListProductInfoRequest} returns this
 */
proto.product.ListProductInfoRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.product.ListProductInfoRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.product.ListProductInfoRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.product.ListProductInfoRequest} returns this
 */
proto.product.ListProductInfoRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.product.ListProductInfoRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.ListProductInfoRequest} returns this
 */
proto.product.ListProductInfoRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional data.Criteria filters = 4;
 * @return {?proto.data.Criteria}
 */
proto.product.ListProductInfoRequest.prototype.getFilters = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 4));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.product.ListProductInfoRequest} returns this
*/
proto.product.ListProductInfoRequest.prototype.setFilters = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.product.ListProductInfoRequest} returns this
 */
proto.product.ListProductInfoRequest.prototype.clearFilters = function() {
  return this.setFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.product.ListProductInfoRequest.prototype.hasFilters = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated data.KeyValue context_attributes = 5;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.product.ListProductInfoRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 5));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.product.ListProductInfoRequest} returns this
*/
proto.product.ListProductInfoRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.product.ListProductInfoRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.product.ListProductInfoRequest} returns this
 */
proto.product.ListProductInfoRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
};


/**
 * optional string search_value = 6;
 * @return {string}
 */
proto.product.ListProductInfoRequest.prototype.getSearchValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.ListProductInfoRequest} returns this
 */
proto.product.ListProductInfoRequest.prototype.setSearchValue = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string process_parameter_uuid = 7;
 * @return {string}
 */
proto.product.ListProductInfoRequest.prototype.getProcessParameterUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.ListProductInfoRequest} returns this
 */
proto.product.ListProductInfoRequest.prototype.setProcessParameterUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string field_uuid = 8;
 * @return {string}
 */
proto.product.ListProductInfoRequest.prototype.getFieldUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.ListProductInfoRequest} returns this
 */
proto.product.ListProductInfoRequest.prototype.setFieldUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string browse_field_uuid = 9;
 * @return {string}
 */
proto.product.ListProductInfoRequest.prototype.getBrowseFieldUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.ListProductInfoRequest} returns this
 */
proto.product.ListProductInfoRequest.prototype.setBrowseFieldUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string reference_uuid = 10;
 * @return {string}
 */
proto.product.ListProductInfoRequest.prototype.getReferenceUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.ListProductInfoRequest} returns this
 */
proto.product.ListProductInfoRequest.prototype.setReferenceUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string column_uuid = 11;
 * @return {string}
 */
proto.product.ListProductInfoRequest.prototype.getColumnUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.ListProductInfoRequest} returns this
 */
proto.product.ListProductInfoRequest.prototype.setColumnUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string column_name = 13;
 * @return {string}
 */
proto.product.ListProductInfoRequest.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.product.ListProductInfoRequest} returns this
 */
proto.product.ListProductInfoRequest.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


goog.object.extend(exports, proto.product);
