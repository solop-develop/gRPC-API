// source: proto/business.proto
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
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
goog.object.extend(proto, proto_base_data_type_pb);
var proto_client_pb = require('../proto/client_pb.js');
goog.object.extend(proto, proto_client_pb);
goog.exportSymbol('proto.data.Callout', null, global);
goog.exportSymbol('proto.data.Chart', null, global);
goog.exportSymbol('proto.data.ChartData', null, global);
goog.exportSymbol('proto.data.ChartSerie', null, global);
goog.exportSymbol('proto.data.ChatEntry', null, global);
goog.exportSymbol('proto.data.ChatEntry.ChatEntryType', null, global);
goog.exportSymbol('proto.data.ChatEntry.ConfidentialType', null, global);
goog.exportSymbol('proto.data.ChatEntry.ModeratorStatus', null, global);
goog.exportSymbol('proto.data.ColorSchema', null, global);
goog.exportSymbol('proto.data.ContextInfoValue', null, global);
goog.exportSymbol('proto.data.CreateChatEntryRequest', null, global);
goog.exportSymbol('proto.data.CreateEntityRequest', null, global);
goog.exportSymbol('proto.data.DefaultValue', null, global);
goog.exportSymbol('proto.data.DeleteEntityRequest', null, global);
goog.exportSymbol('proto.data.DeletePreferenceRequest', null, global);
goog.exportSymbol('proto.data.DeletePreferenceRequest.Type', null, global);
goog.exportSymbol('proto.data.Favorite', null, global);
goog.exportSymbol('proto.data.GetChartRequest', null, global);
goog.exportSymbol('proto.data.GetContextInfoValueRequest', null, global);
goog.exportSymbol('proto.data.GetDefaultValueRequest', null, global);
goog.exportSymbol('proto.data.GetEntityRequest', null, global);
goog.exportSymbol('proto.data.GetLookupItemRequest', null, global);
goog.exportSymbol('proto.data.GetPrivateAccessRequest', null, global);
goog.exportSymbol('proto.data.GetRecordAccessRequest', null, global);
goog.exportSymbol('proto.data.GetReportOutputRequest', null, global);
goog.exportSymbol('proto.data.GetTabEntityRequest', null, global);
goog.exportSymbol('proto.data.ListBrowserItemsRequest', null, global);
goog.exportSymbol('proto.data.ListBrowserItemsResponse', null, global);
goog.exportSymbol('proto.data.ListDashboardsRequest', null, global);
goog.exportSymbol('proto.data.ListDashboardsResponse', null, global);
goog.exportSymbol('proto.data.ListDrillTablesRequest', null, global);
goog.exportSymbol('proto.data.ListDrillTablesResponse', null, global);
goog.exportSymbol('proto.data.ListEntitiesRequest', null, global);
goog.exportSymbol('proto.data.ListEntitiesResponse', null, global);
goog.exportSymbol('proto.data.ListFavoritesRequest', null, global);
goog.exportSymbol('proto.data.ListFavoritesResponse', null, global);
goog.exportSymbol('proto.data.ListGeneralInfoRequest', null, global);
goog.exportSymbol('proto.data.ListLookupItemsRequest', null, global);
goog.exportSymbol('proto.data.ListLookupItemsResponse', null, global);
goog.exportSymbol('proto.data.ListPendingDocumentsRequest', null, global);
goog.exportSymbol('proto.data.ListPendingDocumentsResponse', null, global);
goog.exportSymbol('proto.data.ListPrintFormatsRequest', null, global);
goog.exportSymbol('proto.data.ListPrintFormatsResponse', null, global);
goog.exportSymbol('proto.data.ListReferencesRequest', null, global);
goog.exportSymbol('proto.data.ListReferencesResponse', null, global);
goog.exportSymbol('proto.data.ListReportViewsRequest', null, global);
goog.exportSymbol('proto.data.ListReportViewsResponse', null, global);
goog.exportSymbol('proto.data.ListTabEntitiesRequest', null, global);
goog.exportSymbol('proto.data.ListTabEntitiesResponse', null, global);
goog.exportSymbol('proto.data.ListTabSequencesRequest', null, global);
goog.exportSymbol('proto.data.ListTranslationsRequest', null, global);
goog.exportSymbol('proto.data.ListTranslationsResponse', null, global);
goog.exportSymbol('proto.data.LockPrivateAccessRequest', null, global);
goog.exportSymbol('proto.data.LookupItem', null, global);
goog.exportSymbol('proto.data.PendingDocument', null, global);
goog.exportSymbol('proto.data.Preference', null, global);
goog.exportSymbol('proto.data.Preference.Type', null, global);
goog.exportSymbol('proto.data.PrivateAccess', null, global);
goog.exportSymbol('proto.data.RecordAccess', null, global);
goog.exportSymbol('proto.data.RecordAccessRole', null, global);
goog.exportSymbol('proto.data.RollbackEntityRequest', null, global);
goog.exportSymbol('proto.data.RunBusinessProcessRequest', null, global);
goog.exportSymbol('proto.data.RunCalloutRequest', null, global);
goog.exportSymbol('proto.data.SaveTabSequencesRequest', null, global);
goog.exportSymbol('proto.data.SetPreferenceRequest', null, global);
goog.exportSymbol('proto.data.SetPreferenceRequest.Type', null, global);
goog.exportSymbol('proto.data.SetRecordAccessRequest', null, global);
goog.exportSymbol('proto.data.UnlockPrivateAccessRequest', null, global);
goog.exportSymbol('proto.data.UpdateBrowserEntityRequest', null, global);
goog.exportSymbol('proto.data.UpdateEntityRequest', null, global);
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
proto.data.GetRecordAccessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetRecordAccessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetRecordAccessRequest.displayName = 'proto.data.GetRecordAccessRequest';
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
proto.data.SetRecordAccessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.SetRecordAccessRequest.repeatedFields_, null);
};
goog.inherits(proto.data.SetRecordAccessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.SetRecordAccessRequest.displayName = 'proto.data.SetRecordAccessRequest';
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
proto.data.RecordAccess = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.RecordAccess.repeatedFields_, null);
};
goog.inherits(proto.data.RecordAccess, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.RecordAccess.displayName = 'proto.data.RecordAccess';
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
proto.data.RecordAccessRole = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.RecordAccessRole, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.RecordAccessRole.displayName = 'proto.data.RecordAccessRole';
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
proto.data.SetPreferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.SetPreferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.SetPreferenceRequest.displayName = 'proto.data.SetPreferenceRequest';
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
proto.data.DeletePreferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.DeletePreferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.DeletePreferenceRequest.displayName = 'proto.data.DeletePreferenceRequest';
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
proto.data.Preference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.Preference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.Preference.displayName = 'proto.data.Preference';
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
proto.data.GetReportOutputRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetReportOutputRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetReportOutputRequest.displayName = 'proto.data.GetReportOutputRequest';
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
proto.data.CreateEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.CreateEntityRequest.repeatedFields_, null);
};
goog.inherits(proto.data.CreateEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.CreateEntityRequest.displayName = 'proto.data.CreateEntityRequest';
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
proto.data.LockPrivateAccessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.LockPrivateAccessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.LockPrivateAccessRequest.displayName = 'proto.data.LockPrivateAccessRequest';
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
proto.data.GetEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetEntityRequest.displayName = 'proto.data.GetEntityRequest';
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
proto.data.GetPrivateAccessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetPrivateAccessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetPrivateAccessRequest.displayName = 'proto.data.GetPrivateAccessRequest';
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
proto.data.UnlockPrivateAccessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.UnlockPrivateAccessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.UnlockPrivateAccessRequest.displayName = 'proto.data.UnlockPrivateAccessRequest';
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
proto.data.PrivateAccess = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.PrivateAccess, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.PrivateAccess.displayName = 'proto.data.PrivateAccess';
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
proto.data.RollbackEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.RollbackEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.RollbackEntityRequest.displayName = 'proto.data.RollbackEntityRequest';
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
proto.data.UpdateEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.UpdateEntityRequest.repeatedFields_, null);
};
goog.inherits(proto.data.UpdateEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.UpdateEntityRequest.displayName = 'proto.data.UpdateEntityRequest';
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
proto.data.DeleteEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.DeleteEntityRequest.repeatedFields_, null);
};
goog.inherits(proto.data.DeleteEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.DeleteEntityRequest.displayName = 'proto.data.DeleteEntityRequest';
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
proto.data.ListBrowserItemsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListBrowserItemsRequest.repeatedFields_, null);
};
goog.inherits(proto.data.ListBrowserItemsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListBrowserItemsRequest.displayName = 'proto.data.ListBrowserItemsRequest';
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
proto.data.ListBrowserItemsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListBrowserItemsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListBrowserItemsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListBrowserItemsResponse.displayName = 'proto.data.ListBrowserItemsResponse';
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
proto.data.UpdateBrowserEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.UpdateBrowserEntityRequest.repeatedFields_, null);
};
goog.inherits(proto.data.UpdateBrowserEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.UpdateBrowserEntityRequest.displayName = 'proto.data.UpdateBrowserEntityRequest';
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
proto.data.ContextInfoValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ContextInfoValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ContextInfoValue.displayName = 'proto.data.ContextInfoValue';
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
proto.data.GetLookupItemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.GetLookupItemRequest.repeatedFields_, null);
};
goog.inherits(proto.data.GetLookupItemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetLookupItemRequest.displayName = 'proto.data.GetLookupItemRequest';
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
proto.data.GetDefaultValueRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.GetDefaultValueRequest.repeatedFields_, null);
};
goog.inherits(proto.data.GetDefaultValueRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetDefaultValueRequest.displayName = 'proto.data.GetDefaultValueRequest';
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
proto.data.DefaultValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.DefaultValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.DefaultValue.displayName = 'proto.data.DefaultValue';
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
proto.data.GetContextInfoValueRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetContextInfoValueRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetContextInfoValueRequest.displayName = 'proto.data.GetContextInfoValueRequest';
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
proto.data.LookupItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.LookupItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.LookupItem.displayName = 'proto.data.LookupItem';
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
proto.data.ListLookupItemsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListLookupItemsRequest.repeatedFields_, null);
};
goog.inherits(proto.data.ListLookupItemsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListLookupItemsRequest.displayName = 'proto.data.ListLookupItemsRequest';
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
proto.data.ListLookupItemsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListLookupItemsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListLookupItemsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListLookupItemsResponse.displayName = 'proto.data.ListLookupItemsResponse';
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
proto.data.GetTabEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.GetTabEntityRequest.repeatedFields_, null);
};
goog.inherits(proto.data.GetTabEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetTabEntityRequest.displayName = 'proto.data.GetTabEntityRequest';
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
proto.data.ListTabEntitiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListTabEntitiesRequest.repeatedFields_, null);
};
goog.inherits(proto.data.ListTabEntitiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListTabEntitiesRequest.displayName = 'proto.data.ListTabEntitiesRequest';
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
proto.data.ListTabEntitiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListTabEntitiesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListTabEntitiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListTabEntitiesResponse.displayName = 'proto.data.ListTabEntitiesResponse';
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
proto.data.ListEntitiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListEntitiesRequest.repeatedFields_, null);
};
goog.inherits(proto.data.ListEntitiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListEntitiesRequest.displayName = 'proto.data.ListEntitiesRequest';
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
proto.data.ListEntitiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListEntitiesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListEntitiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListEntitiesResponse.displayName = 'proto.data.ListEntitiesResponse';
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
proto.data.RunCalloutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.RunCalloutRequest.repeatedFields_, null);
};
goog.inherits(proto.data.RunCalloutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.RunCalloutRequest.displayName = 'proto.data.RunCalloutRequest';
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
proto.data.Callout = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.Callout, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.Callout.displayName = 'proto.data.Callout';
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
proto.data.RunBusinessProcessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.RunBusinessProcessRequest.repeatedFields_, null);
};
goog.inherits(proto.data.RunBusinessProcessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.RunBusinessProcessRequest.displayName = 'proto.data.RunBusinessProcessRequest';
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
proto.data.ListFavoritesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListFavoritesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListFavoritesRequest.displayName = 'proto.data.ListFavoritesRequest';
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
proto.data.Favorite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.Favorite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.Favorite.displayName = 'proto.data.Favorite';
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
proto.data.ListFavoritesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListFavoritesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListFavoritesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListFavoritesResponse.displayName = 'proto.data.ListFavoritesResponse';
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
proto.data.ListTranslationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListTranslationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListTranslationsRequest.displayName = 'proto.data.ListTranslationsRequest';
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
proto.data.ListTranslationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListTranslationsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListTranslationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListTranslationsResponse.displayName = 'proto.data.ListTranslationsResponse';
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
proto.data.ListPendingDocumentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListPendingDocumentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListPendingDocumentsRequest.displayName = 'proto.data.ListPendingDocumentsRequest';
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
proto.data.PendingDocument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.PendingDocument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.PendingDocument.displayName = 'proto.data.PendingDocument';
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
proto.data.ListPendingDocumentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListPendingDocumentsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListPendingDocumentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListPendingDocumentsResponse.displayName = 'proto.data.ListPendingDocumentsResponse';
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
proto.data.GetChartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetChartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetChartRequest.displayName = 'proto.data.GetChartRequest';
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
proto.data.Chart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.Chart.repeatedFields_, null);
};
goog.inherits(proto.data.Chart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.Chart.displayName = 'proto.data.Chart';
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
proto.data.ChartSerie = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ChartSerie.repeatedFields_, null);
};
goog.inherits(proto.data.ChartSerie, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ChartSerie.displayName = 'proto.data.ChartSerie';
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
proto.data.ChartData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ChartData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ChartData.displayName = 'proto.data.ChartData';
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
proto.data.ColorSchema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ColorSchema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ColorSchema.displayName = 'proto.data.ColorSchema';
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
proto.data.ListDashboardsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListDashboardsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDashboardsRequest.displayName = 'proto.data.ListDashboardsRequest';
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
proto.data.ListDashboardsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListDashboardsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListDashboardsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDashboardsResponse.displayName = 'proto.data.ListDashboardsResponse';
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
proto.data.ListPrintFormatsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListPrintFormatsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListPrintFormatsRequest.displayName = 'proto.data.ListPrintFormatsRequest';
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
proto.data.ListPrintFormatsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListPrintFormatsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListPrintFormatsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListPrintFormatsResponse.displayName = 'proto.data.ListPrintFormatsResponse';
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
proto.data.CreateChatEntryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.CreateChatEntryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.CreateChatEntryRequest.displayName = 'proto.data.CreateChatEntryRequest';
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
proto.data.ChatEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ChatEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ChatEntry.displayName = 'proto.data.ChatEntry';
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
proto.data.ListReportViewsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListReportViewsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListReportViewsRequest.displayName = 'proto.data.ListReportViewsRequest';
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
proto.data.ListReportViewsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListReportViewsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListReportViewsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListReportViewsResponse.displayName = 'proto.data.ListReportViewsResponse';
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
proto.data.ListDrillTablesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListDrillTablesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDrillTablesRequest.displayName = 'proto.data.ListDrillTablesRequest';
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
proto.data.ListDrillTablesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListDrillTablesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListDrillTablesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDrillTablesResponse.displayName = 'proto.data.ListDrillTablesResponse';
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
proto.data.ListReferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListReferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListReferencesRequest.displayName = 'proto.data.ListReferencesRequest';
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
proto.data.ListReferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListReferencesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListReferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListReferencesResponse.displayName = 'proto.data.ListReferencesResponse';
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
proto.data.ListGeneralInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListGeneralInfoRequest.repeatedFields_, null);
};
goog.inherits(proto.data.ListGeneralInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListGeneralInfoRequest.displayName = 'proto.data.ListGeneralInfoRequest';
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
proto.data.ListTabSequencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListTabSequencesRequest.repeatedFields_, null);
};
goog.inherits(proto.data.ListTabSequencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListTabSequencesRequest.displayName = 'proto.data.ListTabSequencesRequest';
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
proto.data.SaveTabSequencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.SaveTabSequencesRequest.repeatedFields_, null);
};
goog.inherits(proto.data.SaveTabSequencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.SaveTabSequencesRequest.displayName = 'proto.data.SaveTabSequencesRequest';
}



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
proto.data.GetRecordAccessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetRecordAccessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetRecordAccessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetRecordAccessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.data.GetRecordAccessRequest}
 */
proto.data.GetRecordAccessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetRecordAccessRequest;
  return proto.data.GetRecordAccessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetRecordAccessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetRecordAccessRequest}
 */
proto.data.GetRecordAccessRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
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
proto.data.GetRecordAccessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetRecordAccessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetRecordAccessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetRecordAccessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetRecordAccessRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetRecordAccessRequest} returns this
*/
proto.data.GetRecordAccessRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetRecordAccessRequest} returns this
 */
proto.data.GetRecordAccessRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetRecordAccessRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.GetRecordAccessRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetRecordAccessRequest} returns this
 */
proto.data.GetRecordAccessRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.GetRecordAccessRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetRecordAccessRequest} returns this
 */
proto.data.GetRecordAccessRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.GetRecordAccessRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetRecordAccessRequest} returns this
 */
proto.data.GetRecordAccessRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.SetRecordAccessRequest.repeatedFields_ = [5];



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
proto.data.SetRecordAccessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.SetRecordAccessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.SetRecordAccessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.SetRecordAccessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    recordAccessesList: jspb.Message.toObjectList(msg.getRecordAccessesList(),
    proto.data.RecordAccessRole.toObject, includeInstance)
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
 * @return {!proto.data.SetRecordAccessRequest}
 */
proto.data.SetRecordAccessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.SetRecordAccessRequest;
  return proto.data.SetRecordAccessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.SetRecordAccessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.SetRecordAccessRequest}
 */
proto.data.SetRecordAccessRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 5:
      var value = new proto.data.RecordAccessRole;
      reader.readMessage(value,proto.data.RecordAccessRole.deserializeBinaryFromReader);
      msg.addRecordAccesses(value);
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
proto.data.SetRecordAccessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.SetRecordAccessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.SetRecordAccessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.SetRecordAccessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRecordAccessesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.data.RecordAccessRole.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.SetRecordAccessRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.SetRecordAccessRequest} returns this
*/
proto.data.SetRecordAccessRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.SetRecordAccessRequest} returns this
 */
proto.data.SetRecordAccessRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.SetRecordAccessRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.SetRecordAccessRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.SetRecordAccessRequest} returns this
 */
proto.data.SetRecordAccessRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.SetRecordAccessRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.SetRecordAccessRequest} returns this
 */
proto.data.SetRecordAccessRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.SetRecordAccessRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.SetRecordAccessRequest} returns this
 */
proto.data.SetRecordAccessRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated RecordAccessRole record_accesses = 5;
 * @return {!Array<!proto.data.RecordAccessRole>}
 */
proto.data.SetRecordAccessRequest.prototype.getRecordAccessesList = function() {
  return /** @type{!Array<!proto.data.RecordAccessRole>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.RecordAccessRole, 5));
};


/**
 * @param {!Array<!proto.data.RecordAccessRole>} value
 * @return {!proto.data.SetRecordAccessRequest} returns this
*/
proto.data.SetRecordAccessRequest.prototype.setRecordAccessesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.data.RecordAccessRole=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.RecordAccessRole}
 */
proto.data.SetRecordAccessRequest.prototype.addRecordAccesses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.data.RecordAccessRole, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.SetRecordAccessRequest} returns this
 */
proto.data.SetRecordAccessRequest.prototype.clearRecordAccessesList = function() {
  return this.setRecordAccessesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.RecordAccess.repeatedFields_ = [5,6];



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
proto.data.RecordAccess.prototype.toObject = function(opt_includeInstance) {
  return proto.data.RecordAccess.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.RecordAccess} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RecordAccess.toObject = function(includeInstance, msg) {
  var f, obj = {
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    availableRolesList: jspb.Message.toObjectList(msg.getAvailableRolesList(),
    proto.data.RecordAccessRole.toObject, includeInstance),
    currentRolesList: jspb.Message.toObjectList(msg.getCurrentRolesList(),
    proto.data.RecordAccessRole.toObject, includeInstance)
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
 * @return {!proto.data.RecordAccess}
 */
proto.data.RecordAccess.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.RecordAccess;
  return proto.data.RecordAccess.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.RecordAccess} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.RecordAccess}
 */
proto.data.RecordAccess.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 5:
      var value = new proto.data.RecordAccessRole;
      reader.readMessage(value,proto.data.RecordAccessRole.deserializeBinaryFromReader);
      msg.addAvailableRoles(value);
      break;
    case 6:
      var value = new proto.data.RecordAccessRole;
      reader.readMessage(value,proto.data.RecordAccessRole.deserializeBinaryFromReader);
      msg.addCurrentRoles(value);
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
proto.data.RecordAccess.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.RecordAccess.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.RecordAccess} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RecordAccess.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAvailableRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.data.RecordAccessRole.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.data.RecordAccessRole.serializeBinaryToWriter
    );
  }
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.RecordAccess.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecordAccess} returns this
 */
proto.data.RecordAccess.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.RecordAccess.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RecordAccess} returns this
 */
proto.data.RecordAccess.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.RecordAccess.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecordAccess} returns this
 */
proto.data.RecordAccess.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated RecordAccessRole available_roles = 5;
 * @return {!Array<!proto.data.RecordAccessRole>}
 */
proto.data.RecordAccess.prototype.getAvailableRolesList = function() {
  return /** @type{!Array<!proto.data.RecordAccessRole>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.RecordAccessRole, 5));
};


/**
 * @param {!Array<!proto.data.RecordAccessRole>} value
 * @return {!proto.data.RecordAccess} returns this
*/
proto.data.RecordAccess.prototype.setAvailableRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.data.RecordAccessRole=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.RecordAccessRole}
 */
proto.data.RecordAccess.prototype.addAvailableRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.data.RecordAccessRole, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.RecordAccess} returns this
 */
proto.data.RecordAccess.prototype.clearAvailableRolesList = function() {
  return this.setAvailableRolesList([]);
};


/**
 * repeated RecordAccessRole current_roles = 6;
 * @return {!Array<!proto.data.RecordAccessRole>}
 */
proto.data.RecordAccess.prototype.getCurrentRolesList = function() {
  return /** @type{!Array<!proto.data.RecordAccessRole>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.RecordAccessRole, 6));
};


/**
 * @param {!Array<!proto.data.RecordAccessRole>} value
 * @return {!proto.data.RecordAccess} returns this
*/
proto.data.RecordAccess.prototype.setCurrentRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.data.RecordAccessRole=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.RecordAccessRole}
 */
proto.data.RecordAccess.prototype.addCurrentRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.data.RecordAccessRole, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.RecordAccess} returns this
 */
proto.data.RecordAccess.prototype.clearCurrentRolesList = function() {
  return this.setCurrentRolesList([]);
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
proto.data.RecordAccessRole.prototype.toObject = function(opt_includeInstance) {
  return proto.data.RecordAccessRole.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.RecordAccessRole} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RecordAccessRole.toObject = function(includeInstance, msg) {
  var f, obj = {
    roleId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roleUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roleName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isExclude: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    isReadOnly: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isDependentEntities: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.data.RecordAccessRole}
 */
proto.data.RecordAccessRole.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.RecordAccessRole;
  return proto.data.RecordAccessRole.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.RecordAccessRole} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.RecordAccessRole}
 */
proto.data.RecordAccessRole.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsExclude(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsReadOnly(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDependentEntities(value);
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
proto.data.RecordAccessRole.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.RecordAccessRole.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.RecordAccessRole} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RecordAccessRole.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoleId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRoleUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoleName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsExclude();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIsReadOnly();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIsDependentEntities();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional int32 role_id = 1;
 * @return {number}
 */
proto.data.RecordAccessRole.prototype.getRoleId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RecordAccessRole} returns this
 */
proto.data.RecordAccessRole.prototype.setRoleId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string role_uuid = 2;
 * @return {string}
 */
proto.data.RecordAccessRole.prototype.getRoleUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecordAccessRole} returns this
 */
proto.data.RecordAccessRole.prototype.setRoleUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string role_name = 3;
 * @return {string}
 */
proto.data.RecordAccessRole.prototype.getRoleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecordAccessRole} returns this
 */
proto.data.RecordAccessRole.prototype.setRoleName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_active = 4;
 * @return {boolean}
 */
proto.data.RecordAccessRole.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.RecordAccessRole} returns this
 */
proto.data.RecordAccessRole.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_exclude = 5;
 * @return {boolean}
 */
proto.data.RecordAccessRole.prototype.getIsExclude = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.RecordAccessRole} returns this
 */
proto.data.RecordAccessRole.prototype.setIsExclude = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool is_read_only = 6;
 * @return {boolean}
 */
proto.data.RecordAccessRole.prototype.getIsReadOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.RecordAccessRole} returns this
 */
proto.data.RecordAccessRole.prototype.setIsReadOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool is_dependent_entities = 7;
 * @return {boolean}
 */
proto.data.RecordAccessRole.prototype.getIsDependentEntities = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.RecordAccessRole} returns this
 */
proto.data.RecordAccessRole.prototype.setIsDependentEntities = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
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
proto.data.SetPreferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.SetPreferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.SetPreferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.SetPreferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    containerUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    columnName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isForCurrentUser: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isForCurrentClient: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    isForCurrentOrganization: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isForCurrentContainer: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    type: jspb.Message.getFieldWithDefault(msg, 8, 0),
    value: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.data.SetPreferenceRequest}
 */
proto.data.SetPreferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.SetPreferenceRequest;
  return proto.data.SetPreferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.SetPreferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.SetPreferenceRequest}
 */
proto.data.SetPreferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setContainerUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForCurrentUser(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForCurrentClient(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForCurrentOrganization(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForCurrentContainer(value);
      break;
    case 8:
      var value = /** @type {!proto.data.SetPreferenceRequest.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.data.SetPreferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.SetPreferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.SetPreferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.SetPreferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getContainerUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsForCurrentUser();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsForCurrentClient();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIsForCurrentOrganization();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIsForCurrentContainer();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.SetPreferenceRequest.Type = {
  WINDOW: 0,
  PROCESS: 1,
  SMART_BROWSER: 2
};

/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.SetPreferenceRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.SetPreferenceRequest} returns this
*/
proto.data.SetPreferenceRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.SetPreferenceRequest} returns this
 */
proto.data.SetPreferenceRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.SetPreferenceRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string container_uuid = 2;
 * @return {string}
 */
proto.data.SetPreferenceRequest.prototype.getContainerUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.SetPreferenceRequest} returns this
 */
proto.data.SetPreferenceRequest.prototype.setContainerUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string column_name = 3;
 * @return {string}
 */
proto.data.SetPreferenceRequest.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.SetPreferenceRequest} returns this
 */
proto.data.SetPreferenceRequest.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_for_current_user = 4;
 * @return {boolean}
 */
proto.data.SetPreferenceRequest.prototype.getIsForCurrentUser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.SetPreferenceRequest} returns this
 */
proto.data.SetPreferenceRequest.prototype.setIsForCurrentUser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_for_current_client = 5;
 * @return {boolean}
 */
proto.data.SetPreferenceRequest.prototype.getIsForCurrentClient = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.SetPreferenceRequest} returns this
 */
proto.data.SetPreferenceRequest.prototype.setIsForCurrentClient = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool is_for_current_organization = 6;
 * @return {boolean}
 */
proto.data.SetPreferenceRequest.prototype.getIsForCurrentOrganization = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.SetPreferenceRequest} returns this
 */
proto.data.SetPreferenceRequest.prototype.setIsForCurrentOrganization = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool is_for_current_container = 7;
 * @return {boolean}
 */
proto.data.SetPreferenceRequest.prototype.getIsForCurrentContainer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.SetPreferenceRequest} returns this
 */
proto.data.SetPreferenceRequest.prototype.setIsForCurrentContainer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional Type type = 8;
 * @return {!proto.data.SetPreferenceRequest.Type}
 */
proto.data.SetPreferenceRequest.prototype.getType = function() {
  return /** @type {!proto.data.SetPreferenceRequest.Type} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.data.SetPreferenceRequest.Type} value
 * @return {!proto.data.SetPreferenceRequest} returns this
 */
proto.data.SetPreferenceRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string value = 9;
 * @return {string}
 */
proto.data.SetPreferenceRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.SetPreferenceRequest} returns this
 */
proto.data.SetPreferenceRequest.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
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
proto.data.DeletePreferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.DeletePreferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.DeletePreferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DeletePreferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    containerUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    columnName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isForCurrentUser: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isForCurrentClient: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    isForCurrentOrganization: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isForCurrentContainer: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    type: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.data.DeletePreferenceRequest}
 */
proto.data.DeletePreferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.DeletePreferenceRequest;
  return proto.data.DeletePreferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.DeletePreferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.DeletePreferenceRequest}
 */
proto.data.DeletePreferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setContainerUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForCurrentUser(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForCurrentClient(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForCurrentOrganization(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForCurrentContainer(value);
      break;
    case 8:
      var value = /** @type {!proto.data.DeletePreferenceRequest.Type} */ (reader.readEnum());
      msg.setType(value);
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
proto.data.DeletePreferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.DeletePreferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.DeletePreferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DeletePreferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getContainerUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsForCurrentUser();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsForCurrentClient();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIsForCurrentOrganization();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIsForCurrentContainer();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.DeletePreferenceRequest.Type = {
  WINDOW: 0,
  PROCESS: 1,
  SMART_BROWSER: 2
};

/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.DeletePreferenceRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.DeletePreferenceRequest} returns this
*/
proto.data.DeletePreferenceRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.DeletePreferenceRequest} returns this
 */
proto.data.DeletePreferenceRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.DeletePreferenceRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string container_uuid = 2;
 * @return {string}
 */
proto.data.DeletePreferenceRequest.prototype.getContainerUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.DeletePreferenceRequest} returns this
 */
proto.data.DeletePreferenceRequest.prototype.setContainerUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string column_name = 3;
 * @return {string}
 */
proto.data.DeletePreferenceRequest.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.DeletePreferenceRequest} returns this
 */
proto.data.DeletePreferenceRequest.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_for_current_user = 4;
 * @return {boolean}
 */
proto.data.DeletePreferenceRequest.prototype.getIsForCurrentUser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.DeletePreferenceRequest} returns this
 */
proto.data.DeletePreferenceRequest.prototype.setIsForCurrentUser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_for_current_client = 5;
 * @return {boolean}
 */
proto.data.DeletePreferenceRequest.prototype.getIsForCurrentClient = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.DeletePreferenceRequest} returns this
 */
proto.data.DeletePreferenceRequest.prototype.setIsForCurrentClient = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool is_for_current_organization = 6;
 * @return {boolean}
 */
proto.data.DeletePreferenceRequest.prototype.getIsForCurrentOrganization = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.DeletePreferenceRequest} returns this
 */
proto.data.DeletePreferenceRequest.prototype.setIsForCurrentOrganization = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool is_for_current_container = 7;
 * @return {boolean}
 */
proto.data.DeletePreferenceRequest.prototype.getIsForCurrentContainer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.DeletePreferenceRequest} returns this
 */
proto.data.DeletePreferenceRequest.prototype.setIsForCurrentContainer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional Type type = 8;
 * @return {!proto.data.DeletePreferenceRequest.Type}
 */
proto.data.DeletePreferenceRequest.prototype.getType = function() {
  return /** @type {!proto.data.DeletePreferenceRequest.Type} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.data.DeletePreferenceRequest.Type} value
 * @return {!proto.data.DeletePreferenceRequest} returns this
 */
proto.data.DeletePreferenceRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
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
proto.data.Preference.prototype.toObject = function(opt_includeInstance) {
  return proto.data.Preference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.Preference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Preference.toObject = function(includeInstance, msg) {
  var f, obj = {
    containerUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    columnName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    value: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0),
    userUuid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    clientUuid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    organizationUuid: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.data.Preference}
 */
proto.data.Preference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.Preference;
  return proto.data.Preference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.Preference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.Preference}
 */
proto.data.Preference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContainerUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 5:
      var value = /** @type {!proto.data.Preference.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserUuid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientUuid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationUuid(value);
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
proto.data.Preference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.Preference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.Preference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Preference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContainerUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getUserUuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClientUuid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOrganizationUuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.Preference.Type = {
  WINDOW: 0,
  PROCESS: 1,
  SMART_BROWSER: 2
};

/**
 * optional string container_uuid = 2;
 * @return {string}
 */
proto.data.Preference.prototype.getContainerUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Preference} returns this
 */
proto.data.Preference.prototype.setContainerUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string column_name = 3;
 * @return {string}
 */
proto.data.Preference.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Preference} returns this
 */
proto.data.Preference.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string value = 4;
 * @return {string}
 */
proto.data.Preference.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Preference} returns this
 */
proto.data.Preference.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Type type = 5;
 * @return {!proto.data.Preference.Type}
 */
proto.data.Preference.prototype.getType = function() {
  return /** @type {!proto.data.Preference.Type} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.data.Preference.Type} value
 * @return {!proto.data.Preference} returns this
 */
proto.data.Preference.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string user_uuid = 6;
 * @return {string}
 */
proto.data.Preference.prototype.getUserUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Preference} returns this
 */
proto.data.Preference.prototype.setUserUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string client_uuid = 7;
 * @return {string}
 */
proto.data.Preference.prototype.getClientUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Preference} returns this
 */
proto.data.Preference.prototype.setClientUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string organization_uuid = 8;
 * @return {string}
 */
proto.data.Preference.prototype.getOrganizationUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Preference} returns this
 */
proto.data.Preference.prototype.setOrganizationUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
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
proto.data.GetReportOutputRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetReportOutputRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetReportOutputRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetReportOutputRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    printFormatUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reportViewUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isSummary: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    reportName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    reportType: jspb.Message.getFieldWithDefault(msg, 6, ""),
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f)
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
 * @return {!proto.data.GetReportOutputRequest}
 */
proto.data.GetReportOutputRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetReportOutputRequest;
  return proto.data.GetReportOutputRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetReportOutputRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetReportOutputRequest}
 */
proto.data.GetReportOutputRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrintFormatUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportViewUuid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSummary(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportType(value);
      break;
    case 7:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 8:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
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
proto.data.GetReportOutputRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetReportOutputRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetReportOutputRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetReportOutputRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrintFormatUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReportViewUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsSummary();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getReportName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getReportType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
};


/**
 * optional string print_format_uuid = 1;
 * @return {string}
 */
proto.data.GetReportOutputRequest.prototype.getPrintFormatUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.setPrintFormatUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string report_view_uuid = 2;
 * @return {string}
 */
proto.data.GetReportOutputRequest.prototype.getReportViewUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.setReportViewUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_summary = 3;
 * @return {boolean}
 */
proto.data.GetReportOutputRequest.prototype.getIsSummary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.setIsSummary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string report_name = 5;
 * @return {string}
 */
proto.data.GetReportOutputRequest.prototype.getReportName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.setReportName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string report_type = 6;
 * @return {string}
 */
proto.data.GetReportOutputRequest.prototype.getReportType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.setReportType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional ClientRequest client_request = 7;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetReportOutputRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 7));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetReportOutputRequest} returns this
*/
proto.data.GetReportOutputRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetReportOutputRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Criteria criteria = 8;
 * @return {?proto.data.Criteria}
 */
proto.data.GetReportOutputRequest.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 8));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.GetReportOutputRequest} returns this
*/
proto.data.GetReportOutputRequest.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetReportOutputRequest.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.CreateEntityRequest.repeatedFields_ = [3];



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
proto.data.CreateEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.CreateEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.CreateEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    attributesList: jspb.Message.toObjectList(msg.getAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance)
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
 * @return {!proto.data.CreateEntityRequest}
 */
proto.data.CreateEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.CreateEntityRequest;
  return proto.data.CreateEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.CreateEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.CreateEntityRequest}
 */
proto.data.CreateEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addAttributes(value);
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
proto.data.CreateEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.CreateEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.CreateEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.CreateEntityRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.CreateEntityRequest} returns this
*/
proto.data.CreateEntityRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.CreateEntityRequest} returns this
 */
proto.data.CreateEntityRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.CreateEntityRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.CreateEntityRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateEntityRequest} returns this
 */
proto.data.CreateEntityRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated KeyValue attributes = 3;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.CreateEntityRequest.prototype.getAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 3));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.CreateEntityRequest} returns this
*/
proto.data.CreateEntityRequest.prototype.setAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.CreateEntityRequest.prototype.addAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.CreateEntityRequest} returns this
 */
proto.data.CreateEntityRequest.prototype.clearAttributesList = function() {
  return this.setAttributesList([]);
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
proto.data.LockPrivateAccessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.LockPrivateAccessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.LockPrivateAccessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.LockPrivateAccessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.data.LockPrivateAccessRequest}
 */
proto.data.LockPrivateAccessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.LockPrivateAccessRequest;
  return proto.data.LockPrivateAccessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.LockPrivateAccessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.LockPrivateAccessRequest}
 */
proto.data.LockPrivateAccessRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
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
proto.data.LockPrivateAccessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.LockPrivateAccessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.LockPrivateAccessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.LockPrivateAccessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.LockPrivateAccessRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.LockPrivateAccessRequest} returns this
*/
proto.data.LockPrivateAccessRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.LockPrivateAccessRequest} returns this
 */
proto.data.LockPrivateAccessRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.LockPrivateAccessRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.LockPrivateAccessRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.LockPrivateAccessRequest} returns this
 */
proto.data.LockPrivateAccessRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.LockPrivateAccessRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.LockPrivateAccessRequest} returns this
 */
proto.data.LockPrivateAccessRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.LockPrivateAccessRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.LockPrivateAccessRequest} returns this
 */
proto.data.LockPrivateAccessRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.data.GetEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tableName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f)
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
 * @return {!proto.data.GetEntityRequest}
 */
proto.data.GetEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetEntityRequest;
  return proto.data.GetEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetEntityRequest}
 */
proto.data.GetEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 4:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 5:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
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
proto.data.GetEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.data.GetEntityRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetEntityRequest} returns this
 */
proto.data.GetEntityRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.GetEntityRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetEntityRequest} returns this
 */
proto.data.GetEntityRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string table_name = 3;
 * @return {string}
 */
proto.data.GetEntityRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetEntityRequest} returns this
 */
proto.data.GetEntityRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ClientRequest client_request = 4;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetEntityRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 4));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetEntityRequest} returns this
*/
proto.data.GetEntityRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetEntityRequest} returns this
 */
proto.data.GetEntityRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetEntityRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Criteria criteria = 5;
 * @return {?proto.data.Criteria}
 */
proto.data.GetEntityRequest.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 5));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.GetEntityRequest} returns this
*/
proto.data.GetEntityRequest.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetEntityRequest} returns this
 */
proto.data.GetEntityRequest.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetEntityRequest.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.data.GetPrivateAccessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetPrivateAccessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetPrivateAccessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetPrivateAccessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.data.GetPrivateAccessRequest}
 */
proto.data.GetPrivateAccessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetPrivateAccessRequest;
  return proto.data.GetPrivateAccessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetPrivateAccessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetPrivateAccessRequest}
 */
proto.data.GetPrivateAccessRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
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
proto.data.GetPrivateAccessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetPrivateAccessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetPrivateAccessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetPrivateAccessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetPrivateAccessRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetPrivateAccessRequest} returns this
*/
proto.data.GetPrivateAccessRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetPrivateAccessRequest} returns this
 */
proto.data.GetPrivateAccessRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetPrivateAccessRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.GetPrivateAccessRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetPrivateAccessRequest} returns this
 */
proto.data.GetPrivateAccessRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.GetPrivateAccessRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetPrivateAccessRequest} returns this
 */
proto.data.GetPrivateAccessRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.GetPrivateAccessRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetPrivateAccessRequest} returns this
 */
proto.data.GetPrivateAccessRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.data.UnlockPrivateAccessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.UnlockPrivateAccessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.UnlockPrivateAccessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UnlockPrivateAccessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.data.UnlockPrivateAccessRequest}
 */
proto.data.UnlockPrivateAccessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.UnlockPrivateAccessRequest;
  return proto.data.UnlockPrivateAccessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.UnlockPrivateAccessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.UnlockPrivateAccessRequest}
 */
proto.data.UnlockPrivateAccessRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
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
proto.data.UnlockPrivateAccessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.UnlockPrivateAccessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.UnlockPrivateAccessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UnlockPrivateAccessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.UnlockPrivateAccessRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.UnlockPrivateAccessRequest} returns this
*/
proto.data.UnlockPrivateAccessRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.UnlockPrivateAccessRequest} returns this
 */
proto.data.UnlockPrivateAccessRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.UnlockPrivateAccessRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.UnlockPrivateAccessRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UnlockPrivateAccessRequest} returns this
 */
proto.data.UnlockPrivateAccessRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.UnlockPrivateAccessRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.UnlockPrivateAccessRequest} returns this
 */
proto.data.UnlockPrivateAccessRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.UnlockPrivateAccessRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UnlockPrivateAccessRequest} returns this
 */
proto.data.UnlockPrivateAccessRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.data.PrivateAccess.prototype.toObject = function(opt_includeInstance) {
  return proto.data.PrivateAccess.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.PrivateAccess} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PrivateAccess.toObject = function(includeInstance, msg) {
  var f, obj = {
    tableName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isLocked: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.data.PrivateAccess}
 */
proto.data.PrivateAccess.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.PrivateAccess;
  return proto.data.PrivateAccess.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.PrivateAccess} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.PrivateAccess}
 */
proto.data.PrivateAccess.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLocked(value);
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
proto.data.PrivateAccess.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.PrivateAccess.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.PrivateAccess} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PrivateAccess.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsLocked();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string table_name = 1;
 * @return {string}
 */
proto.data.PrivateAccess.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PrivateAccess} returns this
 */
proto.data.PrivateAccess.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.PrivateAccess.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.PrivateAccess} returns this
 */
proto.data.PrivateAccess.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.PrivateAccess.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PrivateAccess} returns this
 */
proto.data.PrivateAccess.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_locked = 4;
 * @return {boolean}
 */
proto.data.PrivateAccess.prototype.getIsLocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.PrivateAccess} returns this
 */
proto.data.PrivateAccess.prototype.setIsLocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.data.RollbackEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.RollbackEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.RollbackEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RollbackEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    id: jspb.Message.getFieldWithDefault(msg, 4, 0),
    logId: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.data.RollbackEntityRequest}
 */
proto.data.RollbackEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.RollbackEntityRequest;
  return proto.data.RollbackEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.RollbackEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.RollbackEntityRequest}
 */
proto.data.RollbackEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLogId(value);
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
proto.data.RollbackEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.RollbackEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.RollbackEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RollbackEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLogId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.RollbackEntityRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.RollbackEntityRequest} returns this
*/
proto.data.RollbackEntityRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.RollbackEntityRequest} returns this
 */
proto.data.RollbackEntityRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.RollbackEntityRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.RollbackEntityRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RollbackEntityRequest} returns this
 */
proto.data.RollbackEntityRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.RollbackEntityRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RollbackEntityRequest} returns this
 */
proto.data.RollbackEntityRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 id = 4;
 * @return {number}
 */
proto.data.RollbackEntityRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RollbackEntityRequest} returns this
 */
proto.data.RollbackEntityRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 log_id = 5;
 * @return {number}
 */
proto.data.RollbackEntityRequest.prototype.getLogId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RollbackEntityRequest} returns this
 */
proto.data.RollbackEntityRequest.prototype.setLogId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.UpdateEntityRequest.repeatedFields_ = [5];



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
proto.data.UpdateEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.UpdateEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.UpdateEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdateEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    id: jspb.Message.getFieldWithDefault(msg, 4, 0),
    attributesList: jspb.Message.toObjectList(msg.getAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance)
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
 * @return {!proto.data.UpdateEntityRequest}
 */
proto.data.UpdateEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.UpdateEntityRequest;
  return proto.data.UpdateEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.UpdateEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.UpdateEntityRequest}
 */
proto.data.UpdateEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 5:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addAttributes(value);
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
proto.data.UpdateEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.UpdateEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.UpdateEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdateEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.UpdateEntityRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.UpdateEntityRequest} returns this
*/
proto.data.UpdateEntityRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.UpdateEntityRequest} returns this
 */
proto.data.UpdateEntityRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.UpdateEntityRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.UpdateEntityRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateEntityRequest} returns this
 */
proto.data.UpdateEntityRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.UpdateEntityRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateEntityRequest} returns this
 */
proto.data.UpdateEntityRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 id = 4;
 * @return {number}
 */
proto.data.UpdateEntityRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.UpdateEntityRequest} returns this
 */
proto.data.UpdateEntityRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated KeyValue attributes = 5;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.UpdateEntityRequest.prototype.getAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 5));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.UpdateEntityRequest} returns this
*/
proto.data.UpdateEntityRequest.prototype.setAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.UpdateEntityRequest.prototype.addAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.UpdateEntityRequest} returns this
 */
proto.data.UpdateEntityRequest.prototype.clearAttributesList = function() {
  return this.setAttributesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.DeleteEntityRequest.repeatedFields_ = [5,6];



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
proto.data.DeleteEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.DeleteEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.DeleteEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DeleteEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    id: jspb.Message.getFieldWithDefault(msg, 4, 0),
    uuidsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    idsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.data.DeleteEntityRequest}
 */
proto.data.DeleteEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.DeleteEntityRequest;
  return proto.data.DeleteEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.DeleteEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.DeleteEntityRequest}
 */
proto.data.DeleteEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addUuids(value);
      break;
    case 6:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addIds(values[i]);
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
proto.data.DeleteEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.DeleteEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.DeleteEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DeleteEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getUuidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      6,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.DeleteEntityRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.DeleteEntityRequest} returns this
*/
proto.data.DeleteEntityRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.DeleteEntityRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.DeleteEntityRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.DeleteEntityRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 id = 4;
 * @return {number}
 */
proto.data.DeleteEntityRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated string uuids = 5;
 * @return {!Array<string>}
 */
proto.data.DeleteEntityRequest.prototype.getUuidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.setUuidsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.addUuids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.clearUuidsList = function() {
  return this.setUuidsList([]);
};


/**
 * repeated int32 ids = 6;
 * @return {!Array<number>}
 */
proto.data.DeleteEntityRequest.prototype.getIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListBrowserItemsRequest.repeatedFields_ = [4];



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
proto.data.ListBrowserItemsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListBrowserItemsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListBrowserItemsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListBrowserItemsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f),
    contextAttributesList: jspb.Message.toObjectList(msg.getContextAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance),
    pageSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.data.ListBrowserItemsRequest}
 */
proto.data.ListBrowserItemsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListBrowserItemsRequest;
  return proto.data.ListBrowserItemsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListBrowserItemsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListBrowserItemsRequest}
 */
proto.data.ListBrowserItemsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 3:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
      break;
    case 4:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addContextAttributes(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.data.ListBrowserItemsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListBrowserItemsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListBrowserItemsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListBrowserItemsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
  f = message.getContextAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.data.ListBrowserItemsRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListBrowserItemsRequest} returns this
 */
proto.data.ListBrowserItemsRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ClientRequest client_request = 2;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListBrowserItemsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 2));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListBrowserItemsRequest} returns this
*/
proto.data.ListBrowserItemsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListBrowserItemsRequest} returns this
 */
proto.data.ListBrowserItemsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListBrowserItemsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Criteria criteria = 3;
 * @return {?proto.data.Criteria}
 */
proto.data.ListBrowserItemsRequest.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 3));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.ListBrowserItemsRequest} returns this
*/
proto.data.ListBrowserItemsRequest.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListBrowserItemsRequest} returns this
 */
proto.data.ListBrowserItemsRequest.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListBrowserItemsRequest.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated KeyValue context_attributes = 4;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.ListBrowserItemsRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 4));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.ListBrowserItemsRequest} returns this
*/
proto.data.ListBrowserItemsRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.ListBrowserItemsRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListBrowserItemsRequest} returns this
 */
proto.data.ListBrowserItemsRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
};


/**
 * optional int32 page_size = 5;
 * @return {number}
 */
proto.data.ListBrowserItemsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListBrowserItemsRequest} returns this
 */
proto.data.ListBrowserItemsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.data.ListBrowserItemsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListBrowserItemsRequest} returns this
 */
proto.data.ListBrowserItemsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListBrowserItemsResponse.repeatedFields_ = [2];



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
proto.data.ListBrowserItemsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListBrowserItemsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListBrowserItemsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListBrowserItemsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto_base_data_type_pb.Entity.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.data.ListBrowserItemsResponse}
 */
proto.data.ListBrowserItemsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListBrowserItemsResponse;
  return proto.data.ListBrowserItemsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListBrowserItemsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListBrowserItemsResponse}
 */
proto.data.ListBrowserItemsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.Entity;
      reader.readMessage(value,proto_base_data_type_pb.Entity.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.data.ListBrowserItemsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListBrowserItemsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListBrowserItemsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListBrowserItemsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.Entity.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListBrowserItemsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListBrowserItemsResponse} returns this
 */
proto.data.ListBrowserItemsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Entity records = 2;
 * @return {!Array<!proto.data.Entity>}
 */
proto.data.ListBrowserItemsResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.data.Entity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.Entity, 2));
};


/**
 * @param {!Array<!proto.data.Entity>} value
 * @return {!proto.data.ListBrowserItemsResponse} returns this
*/
proto.data.ListBrowserItemsResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Entity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Entity}
 */
proto.data.ListBrowserItemsResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Entity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListBrowserItemsResponse} returns this
 */
proto.data.ListBrowserItemsResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListBrowserItemsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListBrowserItemsResponse} returns this
 */
proto.data.ListBrowserItemsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.UpdateBrowserEntityRequest.repeatedFields_ = [5];



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
proto.data.UpdateBrowserEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.UpdateBrowserEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.UpdateBrowserEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdateBrowserEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    recordId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    attributesList: jspb.Message.toObjectList(msg.getAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance)
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
 * @return {!proto.data.UpdateBrowserEntityRequest}
 */
proto.data.UpdateBrowserEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.UpdateBrowserEntityRequest;
  return proto.data.UpdateBrowserEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.UpdateBrowserEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.UpdateBrowserEntityRequest}
 */
proto.data.UpdateBrowserEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordId(value);
      break;
    case 5:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addAttributes(value);
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
proto.data.UpdateBrowserEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.UpdateBrowserEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.UpdateBrowserEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdateBrowserEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRecordId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.UpdateBrowserEntityRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.UpdateBrowserEntityRequest} returns this
*/
proto.data.UpdateBrowserEntityRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.UpdateBrowserEntityRequest} returns this
 */
proto.data.UpdateBrowserEntityRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.UpdateBrowserEntityRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.UpdateBrowserEntityRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateBrowserEntityRequest} returns this
 */
proto.data.UpdateBrowserEntityRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.UpdateBrowserEntityRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.UpdateBrowserEntityRequest} returns this
 */
proto.data.UpdateBrowserEntityRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 record_id = 4;
 * @return {number}
 */
proto.data.UpdateBrowserEntityRequest.prototype.getRecordId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.UpdateBrowserEntityRequest} returns this
 */
proto.data.UpdateBrowserEntityRequest.prototype.setRecordId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated KeyValue attributes = 5;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.UpdateBrowserEntityRequest.prototype.getAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 5));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.UpdateBrowserEntityRequest} returns this
*/
proto.data.UpdateBrowserEntityRequest.prototype.setAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.UpdateBrowserEntityRequest.prototype.addAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.UpdateBrowserEntityRequest} returns this
 */
proto.data.UpdateBrowserEntityRequest.prototype.clearAttributesList = function() {
  return this.setAttributesList([]);
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
proto.data.ContextInfoValue.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ContextInfoValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ContextInfoValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ContextInfoValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageText: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messageTip: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.data.ContextInfoValue}
 */
proto.data.ContextInfoValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ContextInfoValue;
  return proto.data.ContextInfoValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ContextInfoValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ContextInfoValue}
 */
proto.data.ContextInfoValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageTip(value);
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
proto.data.ContextInfoValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ContextInfoValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ContextInfoValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ContextInfoValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessageTip();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string message_text = 1;
 * @return {string}
 */
proto.data.ContextInfoValue.prototype.getMessageText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ContextInfoValue} returns this
 */
proto.data.ContextInfoValue.prototype.setMessageText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message_tip = 2;
 * @return {string}
 */
proto.data.ContextInfoValue.prototype.getMessageTip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ContextInfoValue} returns this
 */
proto.data.ContextInfoValue.prototype.setMessageTip = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.GetLookupItemRequest.repeatedFields_ = [11];



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
proto.data.GetLookupItemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetLookupItemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetLookupItemRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetLookupItemRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    processParameterUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fieldUuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    browseFieldUuid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    referenceUuid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    columnUuid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    columnName: jspb.Message.getFieldWithDefault(msg, 9, ""),
    tableName: jspb.Message.getFieldWithDefault(msg, 10, ""),
    contextAttributesList: jspb.Message.toObjectList(msg.getContextAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance)
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
 * @return {!proto.data.GetLookupItemRequest}
 */
proto.data.GetLookupItemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetLookupItemRequest;
  return proto.data.GetLookupItemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetLookupItemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetLookupItemRequest}
 */
proto.data.GetLookupItemRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessParameterUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldUuid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrowseFieldUuid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceUuid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnUuid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 11:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addContextAttributes(value);
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
proto.data.GetLookupItemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetLookupItemRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetLookupItemRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetLookupItemRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getProcessParameterUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFieldUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBrowseFieldUuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getReferenceUuid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getColumnUuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getContextAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.data.GetLookupItemRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.GetLookupItemRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ClientRequest client_request = 3;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetLookupItemRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 3));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetLookupItemRequest} returns this
*/
proto.data.GetLookupItemRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetLookupItemRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string process_parameter_uuid = 4;
 * @return {string}
 */
proto.data.GetLookupItemRequest.prototype.getProcessParameterUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setProcessParameterUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string field_uuid = 5;
 * @return {string}
 */
proto.data.GetLookupItemRequest.prototype.getFieldUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setFieldUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string browse_field_uuid = 6;
 * @return {string}
 */
proto.data.GetLookupItemRequest.prototype.getBrowseFieldUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setBrowseFieldUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string reference_uuid = 7;
 * @return {string}
 */
proto.data.GetLookupItemRequest.prototype.getReferenceUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setReferenceUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string column_uuid = 8;
 * @return {string}
 */
proto.data.GetLookupItemRequest.prototype.getColumnUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setColumnUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string column_name = 9;
 * @return {string}
 */
proto.data.GetLookupItemRequest.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string table_name = 10;
 * @return {string}
 */
proto.data.GetLookupItemRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated KeyValue context_attributes = 11;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.GetLookupItemRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 11));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.GetLookupItemRequest} returns this
*/
proto.data.GetLookupItemRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.GetLookupItemRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.GetDefaultValueRequest.repeatedFields_ = [6];



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
proto.data.GetDefaultValueRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetDefaultValueRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetDefaultValueRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetDefaultValueRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    processParameterUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fieldUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    browseFieldUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    columnUuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    contextAttributesList: jspb.Message.toObjectList(msg.getContextAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance),
    value: (f = msg.getValue()) && proto_base_data_type_pb.Value.toObject(includeInstance, f)
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
 * @return {!proto.data.GetDefaultValueRequest}
 */
proto.data.GetDefaultValueRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetDefaultValueRequest;
  return proto.data.GetDefaultValueRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetDefaultValueRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetDefaultValueRequest}
 */
proto.data.GetDefaultValueRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessParameterUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrowseFieldUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnUuid(value);
      break;
    case 6:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addContextAttributes(value);
      break;
    case 7:
      var value = new proto_base_data_type_pb.Value;
      reader.readMessage(value,proto_base_data_type_pb.Value.deserializeBinaryFromReader);
      msg.setValue(value);
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
proto.data.GetDefaultValueRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetDefaultValueRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetDefaultValueRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetDefaultValueRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getProcessParameterUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFieldUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBrowseFieldUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getColumnUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getContextAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_base_data_type_pb.Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetDefaultValueRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetDefaultValueRequest} returns this
*/
proto.data.GetDefaultValueRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetDefaultValueRequest} returns this
 */
proto.data.GetDefaultValueRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetDefaultValueRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string process_parameter_uuid = 2;
 * @return {string}
 */
proto.data.GetDefaultValueRequest.prototype.getProcessParameterUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetDefaultValueRequest} returns this
 */
proto.data.GetDefaultValueRequest.prototype.setProcessParameterUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string field_uuid = 3;
 * @return {string}
 */
proto.data.GetDefaultValueRequest.prototype.getFieldUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetDefaultValueRequest} returns this
 */
proto.data.GetDefaultValueRequest.prototype.setFieldUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string browse_field_uuid = 4;
 * @return {string}
 */
proto.data.GetDefaultValueRequest.prototype.getBrowseFieldUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetDefaultValueRequest} returns this
 */
proto.data.GetDefaultValueRequest.prototype.setBrowseFieldUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string column_uuid = 5;
 * @return {string}
 */
proto.data.GetDefaultValueRequest.prototype.getColumnUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetDefaultValueRequest} returns this
 */
proto.data.GetDefaultValueRequest.prototype.setColumnUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated KeyValue context_attributes = 6;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.GetDefaultValueRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 6));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.GetDefaultValueRequest} returns this
*/
proto.data.GetDefaultValueRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.GetDefaultValueRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.GetDefaultValueRequest} returns this
 */
proto.data.GetDefaultValueRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
};


/**
 * optional Value value = 7;
 * @return {?proto.data.Value}
 */
proto.data.GetDefaultValueRequest.prototype.getValue = function() {
  return /** @type{?proto.data.Value} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Value, 7));
};


/**
 * @param {?proto.data.Value|undefined} value
 * @return {!proto.data.GetDefaultValueRequest} returns this
*/
proto.data.GetDefaultValueRequest.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetDefaultValueRequest} returns this
 */
proto.data.GetDefaultValueRequest.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetDefaultValueRequest.prototype.hasValue = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.data.DefaultValue.prototype.toObject = function(opt_includeInstance) {
  return proto.data.DefaultValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.DefaultValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DefaultValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    valuesMap: (f = msg.getValuesMap()) ? f.toObject(includeInstance, proto.data.Value.toObject) : []
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
 * @return {!proto.data.DefaultValue}
 */
proto.data.DefaultValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.DefaultValue;
  return proto.data.DefaultValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.DefaultValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.DefaultValue}
 */
proto.data.DefaultValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = msg.getValuesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.data.Value.deserializeBinaryFromReader, "", new proto.data.Value());
         });
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
proto.data.DefaultValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.DefaultValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.DefaultValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DefaultValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValuesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.data.Value.serializeBinaryToWriter);
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.data.DefaultValue.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.DefaultValue} returns this
 */
proto.data.DefaultValue.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.DefaultValue.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.DefaultValue} returns this
 */
proto.data.DefaultValue.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, Value> values = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.data.Value>}
 */
proto.data.DefaultValue.prototype.getValuesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.data.Value>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.data.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.data.DefaultValue} returns this
 */
proto.data.DefaultValue.prototype.clearValuesMap = function() {
  this.getValuesMap().clear();
  return this;};





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
proto.data.GetContextInfoValueRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetContextInfoValueRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetContextInfoValueRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetContextInfoValueRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    query: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.data.GetContextInfoValueRequest}
 */
proto.data.GetContextInfoValueRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetContextInfoValueRequest;
  return proto.data.GetContextInfoValueRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetContextInfoValueRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetContextInfoValueRequest}
 */
proto.data.GetContextInfoValueRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.data.GetContextInfoValueRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetContextInfoValueRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetContextInfoValueRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetContextInfoValueRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetContextInfoValueRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetContextInfoValueRequest} returns this
*/
proto.data.GetContextInfoValueRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetContextInfoValueRequest} returns this
 */
proto.data.GetContextInfoValueRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetContextInfoValueRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.GetContextInfoValueRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetContextInfoValueRequest} returns this
 */
proto.data.GetContextInfoValueRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.GetContextInfoValueRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetContextInfoValueRequest} returns this
 */
proto.data.GetContextInfoValueRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string query = 4;
 * @return {string}
 */
proto.data.GetContextInfoValueRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetContextInfoValueRequest} returns this
 */
proto.data.GetContextInfoValueRequest.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.data.LookupItem.prototype.toObject = function(opt_includeInstance) {
  return proto.data.LookupItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.LookupItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.LookupItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tableName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    valuesMap: (f = msg.getValuesMap()) ? f.toObject(includeInstance, proto.data.Value.toObject) : []
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
 * @return {!proto.data.LookupItem}
 */
proto.data.LookupItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.LookupItem;
  return proto.data.LookupItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.LookupItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.LookupItem}
 */
proto.data.LookupItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 4:
      var value = msg.getValuesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.data.Value.deserializeBinaryFromReader, "", new proto.data.Value());
         });
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
proto.data.LookupItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.LookupItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.LookupItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.LookupItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValuesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.data.Value.serializeBinaryToWriter);
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.data.LookupItem.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.LookupItem} returns this
 */
proto.data.LookupItem.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.LookupItem.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.LookupItem} returns this
 */
proto.data.LookupItem.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string table_name = 3;
 * @return {string}
 */
proto.data.LookupItem.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.LookupItem} returns this
 */
proto.data.LookupItem.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, Value> values = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.data.Value>}
 */
proto.data.LookupItem.prototype.getValuesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.data.Value>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.data.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.data.LookupItem} returns this
 */
proto.data.LookupItem.prototype.clearValuesMap = function() {
  this.getValuesMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListLookupItemsRequest.repeatedFields_ = [10];



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
proto.data.ListLookupItemsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListLookupItemsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListLookupItemsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListLookupItemsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    processParameterUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fieldUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    browseFieldUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    referenceUuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    columnUuid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    columnName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    tableName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    searchValue: jspb.Message.getFieldWithDefault(msg, 9, ""),
    contextAttributesList: jspb.Message.toObjectList(msg.getContextAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance),
    pageSize: jspb.Message.getFieldWithDefault(msg, 11, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.data.ListLookupItemsRequest}
 */
proto.data.ListLookupItemsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListLookupItemsRequest;
  return proto.data.ListLookupItemsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListLookupItemsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListLookupItemsRequest}
 */
proto.data.ListLookupItemsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessParameterUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrowseFieldUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceUuid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnUuid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchValue(value);
      break;
    case 10:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addContextAttributes(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.data.ListLookupItemsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListLookupItemsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListLookupItemsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListLookupItemsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getProcessParameterUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFieldUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBrowseFieldUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReferenceUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getColumnUuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSearchValue();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getContextAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListLookupItemsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
*/
proto.data.ListLookupItemsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListLookupItemsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string process_parameter_uuid = 2;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getProcessParameterUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setProcessParameterUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string field_uuid = 3;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getFieldUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setFieldUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string browse_field_uuid = 4;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getBrowseFieldUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setBrowseFieldUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string reference_uuid = 5;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getReferenceUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setReferenceUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string column_uuid = 6;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getColumnUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setColumnUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string column_name = 7;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string table_name = 8;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string search_value = 9;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getSearchValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setSearchValue = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated KeyValue context_attributes = 10;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.ListLookupItemsRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 10));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
*/
proto.data.ListLookupItemsRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.ListLookupItemsRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
};


/**
 * optional int32 page_size = 11;
 * @return {number}
 */
proto.data.ListLookupItemsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string page_token = 12;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListLookupItemsResponse.repeatedFields_ = [2];



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
proto.data.ListLookupItemsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListLookupItemsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListLookupItemsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListLookupItemsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto.data.LookupItem.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.data.ListLookupItemsResponse}
 */
proto.data.ListLookupItemsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListLookupItemsResponse;
  return proto.data.ListLookupItemsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListLookupItemsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListLookupItemsResponse}
 */
proto.data.ListLookupItemsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.LookupItem;
      reader.readMessage(value,proto.data.LookupItem.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.data.ListLookupItemsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListLookupItemsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListLookupItemsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListLookupItemsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.LookupItem.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListLookupItemsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListLookupItemsResponse} returns this
 */
proto.data.ListLookupItemsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated LookupItem records = 2;
 * @return {!Array<!proto.data.LookupItem>}
 */
proto.data.ListLookupItemsResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.data.LookupItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.LookupItem, 2));
};


/**
 * @param {!Array<!proto.data.LookupItem>} value
 * @return {!proto.data.ListLookupItemsResponse} returns this
*/
proto.data.ListLookupItemsResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.LookupItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.LookupItem}
 */
proto.data.ListLookupItemsResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.LookupItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListLookupItemsResponse} returns this
 */
proto.data.ListLookupItemsResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListLookupItemsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsResponse} returns this
 */
proto.data.ListLookupItemsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.GetTabEntityRequest.repeatedFields_ = [5];



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
proto.data.GetTabEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetTabEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetTabEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetTabEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    windowUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tabUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    windowNo: jspb.Message.getFieldWithDefault(msg, 4, 0),
    contextAttributesList: jspb.Message.toObjectList(msg.getContextAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance),
    uuid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    id: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.data.GetTabEntityRequest}
 */
proto.data.GetTabEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetTabEntityRequest;
  return proto.data.GetTabEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetTabEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetTabEntityRequest}
 */
proto.data.GetTabEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setWindowUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTabUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWindowNo(value);
      break;
    case 5:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addContextAttributes(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
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
proto.data.GetTabEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetTabEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetTabEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetTabEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getWindowUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTabUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWindowNo();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
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
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetTabEntityRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetTabEntityRequest} returns this
*/
proto.data.GetTabEntityRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetTabEntityRequest} returns this
 */
proto.data.GetTabEntityRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetTabEntityRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string window_uuid = 2;
 * @return {string}
 */
proto.data.GetTabEntityRequest.prototype.getWindowUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetTabEntityRequest} returns this
 */
proto.data.GetTabEntityRequest.prototype.setWindowUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tab_uuid = 3;
 * @return {string}
 */
proto.data.GetTabEntityRequest.prototype.getTabUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetTabEntityRequest} returns this
 */
proto.data.GetTabEntityRequest.prototype.setTabUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 window_no = 4;
 * @return {number}
 */
proto.data.GetTabEntityRequest.prototype.getWindowNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetTabEntityRequest} returns this
 */
proto.data.GetTabEntityRequest.prototype.setWindowNo = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated KeyValue context_attributes = 5;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.GetTabEntityRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 5));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.GetTabEntityRequest} returns this
*/
proto.data.GetTabEntityRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.GetTabEntityRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.GetTabEntityRequest} returns this
 */
proto.data.GetTabEntityRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
};


/**
 * optional string uuid = 6;
 * @return {string}
 */
proto.data.GetTabEntityRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetTabEntityRequest} returns this
 */
proto.data.GetTabEntityRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 id = 7;
 * @return {number}
 */
proto.data.GetTabEntityRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetTabEntityRequest} returns this
 */
proto.data.GetTabEntityRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListTabEntitiesRequest.repeatedFields_ = [6,7];



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
proto.data.ListTabEntitiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListTabEntitiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListTabEntitiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTabEntitiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    windowUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tabUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    windowNo: jspb.Message.getFieldWithDefault(msg, 4, 0),
    filters: (f = msg.getFilters()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f),
    contextAttributesList: jspb.Message.toObjectList(msg.getContextAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance),
    columnsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    searchValue: jspb.Message.getFieldWithDefault(msg, 8, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 9, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.data.ListTabEntitiesRequest}
 */
proto.data.ListTabEntitiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListTabEntitiesRequest;
  return proto.data.ListTabEntitiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListTabEntitiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListTabEntitiesRequest}
 */
proto.data.ListTabEntitiesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setWindowUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTabUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWindowNo(value);
      break;
    case 5:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setFilters(value);
      break;
    case 6:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addContextAttributes(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchValue(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.data.ListTabEntitiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListTabEntitiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListTabEntitiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTabEntitiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getWindowUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTabUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWindowNo();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getFilters();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
  f = message.getContextAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getSearchValue();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListTabEntitiesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
*/
proto.data.ListTabEntitiesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListTabEntitiesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string window_uuid = 2;
 * @return {string}
 */
proto.data.ListTabEntitiesRequest.prototype.getWindowUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.setWindowUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tab_uuid = 3;
 * @return {string}
 */
proto.data.ListTabEntitiesRequest.prototype.getTabUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.setTabUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 window_no = 4;
 * @return {number}
 */
proto.data.ListTabEntitiesRequest.prototype.getWindowNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.setWindowNo = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional Criteria filters = 5;
 * @return {?proto.data.Criteria}
 */
proto.data.ListTabEntitiesRequest.prototype.getFilters = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 5));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
*/
proto.data.ListTabEntitiesRequest.prototype.setFilters = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.clearFilters = function() {
  return this.setFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListTabEntitiesRequest.prototype.hasFilters = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated KeyValue context_attributes = 6;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.ListTabEntitiesRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 6));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
*/
proto.data.ListTabEntitiesRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.ListTabEntitiesRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
};


/**
 * repeated string columns = 7;
 * @return {!Array<string>}
 */
proto.data.ListTabEntitiesRequest.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.setColumnsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.addColumns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};


/**
 * optional string search_value = 8;
 * @return {string}
 */
proto.data.ListTabEntitiesRequest.prototype.getSearchValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.setSearchValue = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 page_size = 9;
 * @return {number}
 */
proto.data.ListTabEntitiesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string page_token = 10;
 * @return {string}
 */
proto.data.ListTabEntitiesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListTabEntitiesResponse.repeatedFields_ = [2];



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
proto.data.ListTabEntitiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListTabEntitiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListTabEntitiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTabEntitiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto_base_data_type_pb.Entity.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.data.ListTabEntitiesResponse}
 */
proto.data.ListTabEntitiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListTabEntitiesResponse;
  return proto.data.ListTabEntitiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListTabEntitiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListTabEntitiesResponse}
 */
proto.data.ListTabEntitiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.Entity;
      reader.readMessage(value,proto_base_data_type_pb.Entity.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.data.ListTabEntitiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListTabEntitiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListTabEntitiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTabEntitiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.Entity.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListTabEntitiesResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListTabEntitiesResponse} returns this
 */
proto.data.ListTabEntitiesResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Entity records = 2;
 * @return {!Array<!proto.data.Entity>}
 */
proto.data.ListTabEntitiesResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.data.Entity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.Entity, 2));
};


/**
 * @param {!Array<!proto.data.Entity>} value
 * @return {!proto.data.ListTabEntitiesResponse} returns this
*/
proto.data.ListTabEntitiesResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Entity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Entity}
 */
proto.data.ListTabEntitiesResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Entity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListTabEntitiesResponse} returns this
 */
proto.data.ListTabEntitiesResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListTabEntitiesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTabEntitiesResponse} returns this
 */
proto.data.ListTabEntitiesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListEntitiesRequest.repeatedFields_ = [3];



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
proto.data.ListEntitiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListEntitiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListEntitiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntitiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f),
    columnsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.data.ListEntitiesRequest}
 */
proto.data.ListEntitiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListEntitiesRequest;
  return proto.data.ListEntitiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListEntitiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListEntitiesRequest}
 */
proto.data.ListEntitiesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.data.ListEntitiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListEntitiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListEntitiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntitiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListEntitiesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListEntitiesRequest} returns this
*/
proto.data.ListEntitiesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListEntitiesRequest} returns this
 */
proto.data.ListEntitiesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListEntitiesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Criteria criteria = 2;
 * @return {?proto.data.Criteria}
 */
proto.data.ListEntitiesRequest.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 2));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.ListEntitiesRequest} returns this
*/
proto.data.ListEntitiesRequest.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListEntitiesRequest} returns this
 */
proto.data.ListEntitiesRequest.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListEntitiesRequest.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string columns = 3;
 * @return {!Array<string>}
 */
proto.data.ListEntitiesRequest.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.data.ListEntitiesRequest} returns this
 */
proto.data.ListEntitiesRequest.prototype.setColumnsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.data.ListEntitiesRequest} returns this
 */
proto.data.ListEntitiesRequest.prototype.addColumns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListEntitiesRequest} returns this
 */
proto.data.ListEntitiesRequest.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.data.ListEntitiesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListEntitiesRequest} returns this
 */
proto.data.ListEntitiesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.data.ListEntitiesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListEntitiesRequest} returns this
 */
proto.data.ListEntitiesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListEntitiesResponse.repeatedFields_ = [2];



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
proto.data.ListEntitiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListEntitiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListEntitiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntitiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto_base_data_type_pb.Entity.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.data.ListEntitiesResponse}
 */
proto.data.ListEntitiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListEntitiesResponse;
  return proto.data.ListEntitiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListEntitiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListEntitiesResponse}
 */
proto.data.ListEntitiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.Entity;
      reader.readMessage(value,proto_base_data_type_pb.Entity.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.data.ListEntitiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListEntitiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListEntitiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntitiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.Entity.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListEntitiesResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListEntitiesResponse} returns this
 */
proto.data.ListEntitiesResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Entity records = 2;
 * @return {!Array<!proto.data.Entity>}
 */
proto.data.ListEntitiesResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.data.Entity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.Entity, 2));
};


/**
 * @param {!Array<!proto.data.Entity>} value
 * @return {!proto.data.ListEntitiesResponse} returns this
*/
proto.data.ListEntitiesResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Entity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Entity}
 */
proto.data.ListEntitiesResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Entity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListEntitiesResponse} returns this
 */
proto.data.ListEntitiesResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListEntitiesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListEntitiesResponse} returns this
 */
proto.data.ListEntitiesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.RunCalloutRequest.repeatedFields_ = [10];



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
proto.data.RunCalloutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.RunCalloutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.RunCalloutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RunCalloutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    windowUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tabUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    callout: jspb.Message.getFieldWithDefault(msg, 5, ""),
    columnName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    oldValue: (f = msg.getOldValue()) && proto_base_data_type_pb.Value.toObject(includeInstance, f),
    value: (f = msg.getValue()) && proto_base_data_type_pb.Value.toObject(includeInstance, f),
    windowNo: jspb.Message.getFieldWithDefault(msg, 9, 0),
    contextAttributesList: jspb.Message.toObjectList(msg.getContextAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance)
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
 * @return {!proto.data.RunCalloutRequest}
 */
proto.data.RunCalloutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.RunCalloutRequest;
  return proto.data.RunCalloutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.RunCalloutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.RunCalloutRequest}
 */
proto.data.RunCalloutRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWindowUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTabUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallout(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    case 7:
      var value = new proto_base_data_type_pb.Value;
      reader.readMessage(value,proto_base_data_type_pb.Value.deserializeBinaryFromReader);
      msg.setOldValue(value);
      break;
    case 8:
      var value = new proto_base_data_type_pb.Value;
      reader.readMessage(value,proto_base_data_type_pb.Value.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWindowNo(value);
      break;
    case 10:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addContextAttributes(value);
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
proto.data.RunCalloutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.RunCalloutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.RunCalloutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RunCalloutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWindowUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTabUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCallout();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOldValue();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_base_data_type_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_base_data_type_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getWindowNo();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getContextAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.RunCalloutRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.RunCalloutRequest} returns this
*/
proto.data.RunCalloutRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.RunCalloutRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.RunCalloutRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string window_uuid = 3;
 * @return {string}
 */
proto.data.RunCalloutRequest.prototype.getWindowUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.setWindowUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string tab_uuid = 4;
 * @return {string}
 */
proto.data.RunCalloutRequest.prototype.getTabUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.setTabUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string callout = 5;
 * @return {string}
 */
proto.data.RunCalloutRequest.prototype.getCallout = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.setCallout = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string column_name = 6;
 * @return {string}
 */
proto.data.RunCalloutRequest.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Value old_value = 7;
 * @return {?proto.data.Value}
 */
proto.data.RunCalloutRequest.prototype.getOldValue = function() {
  return /** @type{?proto.data.Value} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Value, 7));
};


/**
 * @param {?proto.data.Value|undefined} value
 * @return {!proto.data.RunCalloutRequest} returns this
*/
proto.data.RunCalloutRequest.prototype.setOldValue = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.clearOldValue = function() {
  return this.setOldValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.RunCalloutRequest.prototype.hasOldValue = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Value value = 8;
 * @return {?proto.data.Value}
 */
proto.data.RunCalloutRequest.prototype.getValue = function() {
  return /** @type{?proto.data.Value} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Value, 8));
};


/**
 * @param {?proto.data.Value|undefined} value
 * @return {!proto.data.RunCalloutRequest} returns this
*/
proto.data.RunCalloutRequest.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.RunCalloutRequest.prototype.hasValue = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 window_no = 9;
 * @return {number}
 */
proto.data.RunCalloutRequest.prototype.getWindowNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.setWindowNo = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * repeated KeyValue context_attributes = 10;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.RunCalloutRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 10));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.RunCalloutRequest} returns this
*/
proto.data.RunCalloutRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.RunCalloutRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
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
proto.data.Callout.prototype.toObject = function(opt_includeInstance) {
  return proto.data.Callout.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.Callout} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Callout.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, ""),
    valuesMap: (f = msg.getValuesMap()) ? f.toObject(includeInstance, proto.data.Value.toObject) : []
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
 * @return {!proto.data.Callout}
 */
proto.data.Callout.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.Callout;
  return proto.data.Callout.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.Callout} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.Callout}
 */
proto.data.Callout.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    case 2:
      var value = msg.getValuesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.data.Value.deserializeBinaryFromReader, "", new proto.data.Value());
         });
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
proto.data.Callout.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.Callout.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.Callout} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Callout.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValuesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.data.Value.serializeBinaryToWriter);
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.data.Callout.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Callout} returns this
 */
proto.data.Callout.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, Value> values = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.data.Value>}
 */
proto.data.Callout.prototype.getValuesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.data.Value>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.data.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.data.Callout} returns this
 */
proto.data.Callout.prototype.clearValuesMap = function() {
  this.getValuesMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.RunBusinessProcessRequest.repeatedFields_ = [11,12];



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
proto.data.RunBusinessProcessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.RunBusinessProcessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.RunBusinessProcessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RunBusinessProcessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    processUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    id: jspb.Message.getFieldWithDefault(msg, 5, 0),
    tableSelectedId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    reportType: jspb.Message.getFieldWithDefault(msg, 7, ""),
    printFormatUuid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    reportViewUuid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    isSummary: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance),
    selectionsList: jspb.Message.toObjectList(msg.getSelectionsList(),
    proto_base_data_type_pb.KeyValueSelection.toObject, includeInstance)
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
 * @return {!proto.data.RunBusinessProcessRequest}
 */
proto.data.RunBusinessProcessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.RunBusinessProcessRequest;
  return proto.data.RunBusinessProcessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.RunBusinessProcessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.RunBusinessProcessRequest}
 */
proto.data.RunBusinessProcessRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTableSelectedId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportType(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrintFormatUuid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportViewUuid(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSummary(value);
      break;
    case 11:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addParameters(value);
      break;
    case 12:
      var value = new proto_base_data_type_pb.KeyValueSelection;
      reader.readMessage(value,proto_base_data_type_pb.KeyValueSelection.deserializeBinaryFromReader);
      msg.addSelections(value);
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
proto.data.RunBusinessProcessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.RunBusinessProcessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.RunBusinessProcessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RunBusinessProcessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProcessUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getTableSelectedId();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getReportType();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPrintFormatUuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getReportViewUuid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getIsSummary();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getSelectionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto_base_data_type_pb.KeyValueSelection.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.RunBusinessProcessRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
*/
proto.data.RunBusinessProcessRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.RunBusinessProcessRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.RunBusinessProcessRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string process_uuid = 3;
 * @return {string}
 */
proto.data.RunBusinessProcessRequest.prototype.getProcessUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setProcessUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.RunBusinessProcessRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 id = 5;
 * @return {number}
 */
proto.data.RunBusinessProcessRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 table_selected_id = 6;
 * @return {number}
 */
proto.data.RunBusinessProcessRequest.prototype.getTableSelectedId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setTableSelectedId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string report_type = 7;
 * @return {string}
 */
proto.data.RunBusinessProcessRequest.prototype.getReportType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setReportType = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string print_format_uuid = 8;
 * @return {string}
 */
proto.data.RunBusinessProcessRequest.prototype.getPrintFormatUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setPrintFormatUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string report_view_uuid = 9;
 * @return {string}
 */
proto.data.RunBusinessProcessRequest.prototype.getReportViewUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setReportViewUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool is_summary = 10;
 * @return {boolean}
 */
proto.data.RunBusinessProcessRequest.prototype.getIsSummary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setIsSummary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * repeated KeyValue parameters = 11;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.RunBusinessProcessRequest.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 11));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
*/
proto.data.RunBusinessProcessRequest.prototype.setParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.RunBusinessProcessRequest.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.clearParametersList = function() {
  return this.setParametersList([]);
};


/**
 * repeated KeyValueSelection selections = 12;
 * @return {!Array<!proto.data.KeyValueSelection>}
 */
proto.data.RunBusinessProcessRequest.prototype.getSelectionsList = function() {
  return /** @type{!Array<!proto.data.KeyValueSelection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValueSelection, 12));
};


/**
 * @param {!Array<!proto.data.KeyValueSelection>} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
*/
proto.data.RunBusinessProcessRequest.prototype.setSelectionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.data.KeyValueSelection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValueSelection}
 */
proto.data.RunBusinessProcessRequest.prototype.addSelections = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.data.KeyValueSelection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.clearSelectionsList = function() {
  return this.setSelectionsList([]);
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
proto.data.ListFavoritesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListFavoritesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListFavoritesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListFavoritesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    userUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.data.ListFavoritesRequest}
 */
proto.data.ListFavoritesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListFavoritesRequest;
  return proto.data.ListFavoritesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListFavoritesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListFavoritesRequest}
 */
proto.data.ListFavoritesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setUserUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.data.ListFavoritesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListFavoritesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListFavoritesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListFavoritesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUserUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListFavoritesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListFavoritesRequest} returns this
*/
proto.data.ListFavoritesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListFavoritesRequest} returns this
 */
proto.data.ListFavoritesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListFavoritesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string user_uuid = 2;
 * @return {string}
 */
proto.data.ListFavoritesRequest.prototype.getUserUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListFavoritesRequest} returns this
 */
proto.data.ListFavoritesRequest.prototype.setUserUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 user_id = 3;
 * @return {number}
 */
proto.data.ListFavoritesRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListFavoritesRequest} returns this
 */
proto.data.ListFavoritesRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.data.ListFavoritesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListFavoritesRequest} returns this
 */
proto.data.ListFavoritesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.data.ListFavoritesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListFavoritesRequest} returns this
 */
proto.data.ListFavoritesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.data.Favorite.prototype.toObject = function(opt_includeInstance) {
  return proto.data.Favorite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.Favorite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Favorite.toObject = function(includeInstance, msg) {
  var f, obj = {
    menuUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    menuName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    menuDescription: jspb.Message.getFieldWithDefault(msg, 3, ""),
    referenceUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    action: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.data.Favorite}
 */
proto.data.Favorite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.Favorite;
  return proto.data.Favorite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.Favorite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.Favorite}
 */
proto.data.Favorite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenuUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenuName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenuDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
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
proto.data.Favorite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.Favorite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.Favorite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Favorite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMenuUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMenuName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMenuDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReferenceUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string menu_uuid = 1;
 * @return {string}
 */
proto.data.Favorite.prototype.getMenuUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Favorite} returns this
 */
proto.data.Favorite.prototype.setMenuUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string menu_name = 2;
 * @return {string}
 */
proto.data.Favorite.prototype.getMenuName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Favorite} returns this
 */
proto.data.Favorite.prototype.setMenuName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string menu_description = 3;
 * @return {string}
 */
proto.data.Favorite.prototype.getMenuDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Favorite} returns this
 */
proto.data.Favorite.prototype.setMenuDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string reference_uuid = 4;
 * @return {string}
 */
proto.data.Favorite.prototype.getReferenceUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Favorite} returns this
 */
proto.data.Favorite.prototype.setReferenceUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string action = 5;
 * @return {string}
 */
proto.data.Favorite.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Favorite} returns this
 */
proto.data.Favorite.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListFavoritesResponse.repeatedFields_ = [2];



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
proto.data.ListFavoritesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListFavoritesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListFavoritesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListFavoritesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    favoritesList: jspb.Message.toObjectList(msg.getFavoritesList(),
    proto.data.Favorite.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.data.ListFavoritesResponse}
 */
proto.data.ListFavoritesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListFavoritesResponse;
  return proto.data.ListFavoritesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListFavoritesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListFavoritesResponse}
 */
proto.data.ListFavoritesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.Favorite;
      reader.readMessage(value,proto.data.Favorite.deserializeBinaryFromReader);
      msg.addFavorites(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.data.ListFavoritesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListFavoritesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListFavoritesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListFavoritesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFavoritesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.Favorite.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListFavoritesResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListFavoritesResponse} returns this
 */
proto.data.ListFavoritesResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Favorite favorites = 2;
 * @return {!Array<!proto.data.Favorite>}
 */
proto.data.ListFavoritesResponse.prototype.getFavoritesList = function() {
  return /** @type{!Array<!proto.data.Favorite>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.Favorite, 2));
};


/**
 * @param {!Array<!proto.data.Favorite>} value
 * @return {!proto.data.ListFavoritesResponse} returns this
*/
proto.data.ListFavoritesResponse.prototype.setFavoritesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Favorite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Favorite}
 */
proto.data.ListFavoritesResponse.prototype.addFavorites = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Favorite, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListFavoritesResponse} returns this
 */
proto.data.ListFavoritesResponse.prototype.clearFavoritesList = function() {
  return this.setFavoritesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListFavoritesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListFavoritesResponse} returns this
 */
proto.data.ListFavoritesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.data.ListTranslationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListTranslationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListTranslationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTranslationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    id: jspb.Message.getFieldWithDefault(msg, 4, 0),
    language: jspb.Message.getFieldWithDefault(msg, 5, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.data.ListTranslationsRequest}
 */
proto.data.ListTranslationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListTranslationsRequest;
  return proto.data.ListTranslationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListTranslationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListTranslationsRequest}
 */
proto.data.ListTranslationsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.data.ListTranslationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListTranslationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListTranslationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTranslationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListTranslationsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListTranslationsRequest} returns this
*/
proto.data.ListTranslationsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListTranslationsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.ListTranslationsRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.ListTranslationsRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 id = 4;
 * @return {number}
 */
proto.data.ListTranslationsRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string language = 5;
 * @return {string}
 */
proto.data.ListTranslationsRequest.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 page_size = 6;
 * @return {number}
 */
proto.data.ListTranslationsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string page_token = 7;
 * @return {string}
 */
proto.data.ListTranslationsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListTranslationsResponse.repeatedFields_ = [2];



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
proto.data.ListTranslationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListTranslationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListTranslationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTranslationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    translationsList: jspb.Message.toObjectList(msg.getTranslationsList(),
    proto_base_data_type_pb.Translation.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.data.ListTranslationsResponse}
 */
proto.data.ListTranslationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListTranslationsResponse;
  return proto.data.ListTranslationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListTranslationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListTranslationsResponse}
 */
proto.data.ListTranslationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.Translation;
      reader.readMessage(value,proto_base_data_type_pb.Translation.deserializeBinaryFromReader);
      msg.addTranslations(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.data.ListTranslationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListTranslationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListTranslationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTranslationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTranslationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.Translation.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListTranslationsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListTranslationsResponse} returns this
 */
proto.data.ListTranslationsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Translation translations = 2;
 * @return {!Array<!proto.data.Translation>}
 */
proto.data.ListTranslationsResponse.prototype.getTranslationsList = function() {
  return /** @type{!Array<!proto.data.Translation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.Translation, 2));
};


/**
 * @param {!Array<!proto.data.Translation>} value
 * @return {!proto.data.ListTranslationsResponse} returns this
*/
proto.data.ListTranslationsResponse.prototype.setTranslationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Translation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Translation}
 */
proto.data.ListTranslationsResponse.prototype.addTranslations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Translation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListTranslationsResponse} returns this
 */
proto.data.ListTranslationsResponse.prototype.clearTranslationsList = function() {
  return this.setTranslationsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListTranslationsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTranslationsResponse} returns this
 */
proto.data.ListTranslationsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.data.ListPendingDocumentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListPendingDocumentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListPendingDocumentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPendingDocumentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    userUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    roleUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    roleId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.data.ListPendingDocumentsRequest}
 */
proto.data.ListPendingDocumentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListPendingDocumentsRequest;
  return proto.data.ListPendingDocumentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListPendingDocumentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListPendingDocumentsRequest}
 */
proto.data.ListPendingDocumentsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setUserUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleUuid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.data.ListPendingDocumentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListPendingDocumentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListPendingDocumentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPendingDocumentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUserUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRoleUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRoleId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListPendingDocumentsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
*/
proto.data.ListPendingDocumentsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListPendingDocumentsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string user_uuid = 2;
 * @return {string}
 */
proto.data.ListPendingDocumentsRequest.prototype.getUserUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.setUserUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 user_id = 3;
 * @return {number}
 */
proto.data.ListPendingDocumentsRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string role_uuid = 4;
 * @return {string}
 */
proto.data.ListPendingDocumentsRequest.prototype.getRoleUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.setRoleUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 role_id = 5;
 * @return {number}
 */
proto.data.ListPendingDocumentsRequest.prototype.getRoleId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.setRoleId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 page_size = 6;
 * @return {number}
 */
proto.data.ListPendingDocumentsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string page_token = 7;
 * @return {string}
 */
proto.data.ListPendingDocumentsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
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
proto.data.PendingDocument.prototype.toObject = function(opt_includeInstance) {
  return proto.data.PendingDocument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.PendingDocument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PendingDocument.toObject = function(includeInstance, msg) {
  var f, obj = {
    windowUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    formUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    documentName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    documentDescription: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 5, 0),
    recordCount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f)
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
 * @return {!proto.data.PendingDocument}
 */
proto.data.PendingDocument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.PendingDocument;
  return proto.data.PendingDocument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.PendingDocument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.PendingDocument}
 */
proto.data.PendingDocument.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWindowUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentDescription(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequence(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 7:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
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
proto.data.PendingDocument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.PendingDocument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.PendingDocument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PendingDocument.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFormUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDocumentName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDocumentDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
};


/**
 * optional string window_uuid = 1;
 * @return {string}
 */
proto.data.PendingDocument.prototype.getWindowUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.setWindowUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string form_uuid = 2;
 * @return {string}
 */
proto.data.PendingDocument.prototype.getFormUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.setFormUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string document_name = 3;
 * @return {string}
 */
proto.data.PendingDocument.prototype.getDocumentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.setDocumentName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string document_description = 4;
 * @return {string}
 */
proto.data.PendingDocument.prototype.getDocumentDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.setDocumentDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 sequence = 5;
 * @return {number}
 */
proto.data.PendingDocument.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 record_count = 6;
 * @return {number}
 */
proto.data.PendingDocument.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional Criteria criteria = 7;
 * @return {?proto.data.Criteria}
 */
proto.data.PendingDocument.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 7));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.PendingDocument} returns this
*/
proto.data.PendingDocument.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.PendingDocument.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListPendingDocumentsResponse.repeatedFields_ = [2];



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
proto.data.ListPendingDocumentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListPendingDocumentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListPendingDocumentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPendingDocumentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pendingDocumentsList: jspb.Message.toObjectList(msg.getPendingDocumentsList(),
    proto.data.PendingDocument.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.data.ListPendingDocumentsResponse}
 */
proto.data.ListPendingDocumentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListPendingDocumentsResponse;
  return proto.data.ListPendingDocumentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListPendingDocumentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListPendingDocumentsResponse}
 */
proto.data.ListPendingDocumentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.PendingDocument;
      reader.readMessage(value,proto.data.PendingDocument.deserializeBinaryFromReader);
      msg.addPendingDocuments(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.data.ListPendingDocumentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListPendingDocumentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListPendingDocumentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPendingDocumentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPendingDocumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.PendingDocument.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListPendingDocumentsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPendingDocumentsResponse} returns this
 */
proto.data.ListPendingDocumentsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated PendingDocument pending_documents = 2;
 * @return {!Array<!proto.data.PendingDocument>}
 */
proto.data.ListPendingDocumentsResponse.prototype.getPendingDocumentsList = function() {
  return /** @type{!Array<!proto.data.PendingDocument>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.PendingDocument, 2));
};


/**
 * @param {!Array<!proto.data.PendingDocument>} value
 * @return {!proto.data.ListPendingDocumentsResponse} returns this
*/
proto.data.ListPendingDocumentsResponse.prototype.setPendingDocumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.PendingDocument=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.PendingDocument}
 */
proto.data.ListPendingDocumentsResponse.prototype.addPendingDocuments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.PendingDocument, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListPendingDocumentsResponse} returns this
 */
proto.data.ListPendingDocumentsResponse.prototype.clearPendingDocumentsList = function() {
  return this.setPendingDocumentsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListPendingDocumentsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPendingDocumentsResponse} returns this
 */
proto.data.ListPendingDocumentsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.data.GetChartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetChartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetChartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetChartRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.data.GetChartRequest}
 */
proto.data.GetChartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetChartRequest;
  return proto.data.GetChartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetChartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetChartRequest}
 */
proto.data.GetChartRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
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
proto.data.GetChartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetChartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetChartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetChartRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetChartRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetChartRequest} returns this
*/
proto.data.GetChartRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetChartRequest} returns this
 */
proto.data.GetChartRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetChartRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.GetChartRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetChartRequest} returns this
 */
proto.data.GetChartRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.GetChartRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetChartRequest} returns this
 */
proto.data.GetChartRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.Chart.repeatedFields_ = [8,9];



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
proto.data.Chart.prototype.toObject = function(opt_includeInstance) {
  return proto.data.Chart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.Chart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Chart.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    xAxisLabel: jspb.Message.getFieldWithDefault(msg, 5, ""),
    yAxisLabel: jspb.Message.getFieldWithDefault(msg, 6, ""),
    measureTarget: (f = msg.getMeasureTarget()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    colorSchemasList: jspb.Message.toObjectList(msg.getColorSchemasList(),
    proto.data.ColorSchema.toObject, includeInstance),
    seriesList: jspb.Message.toObjectList(msg.getSeriesList(),
    proto.data.ChartSerie.toObject, includeInstance)
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
 * @return {!proto.data.Chart}
 */
proto.data.Chart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.Chart;
  return proto.data.Chart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.Chart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.Chart}
 */
proto.data.Chart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setXAxisLabel(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setYAxisLabel(value);
      break;
    case 7:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setMeasureTarget(value);
      break;
    case 8:
      var value = new proto.data.ColorSchema;
      reader.readMessage(value,proto.data.ColorSchema.deserializeBinaryFromReader);
      msg.addColorSchemas(value);
      break;
    case 9:
      var value = new proto.data.ChartSerie;
      reader.readMessage(value,proto.data.ChartSerie.deserializeBinaryFromReader);
      msg.addSeries(value);
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
proto.data.Chart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.Chart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.Chart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Chart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getXAxisLabel();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getYAxisLabel();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMeasureTarget();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getColorSchemasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.data.ColorSchema.serializeBinaryToWriter
    );
  }
  f = message.getSeriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.data.ChartSerie.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.data.Chart.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Chart} returns this
 */
proto.data.Chart.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.Chart.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.Chart} returns this
 */
proto.data.Chart.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.data.Chart.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Chart} returns this
 */
proto.data.Chart.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.data.Chart.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Chart} returns this
 */
proto.data.Chart.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string x_axis_label = 5;
 * @return {string}
 */
proto.data.Chart.prototype.getXAxisLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Chart} returns this
 */
proto.data.Chart.prototype.setXAxisLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string y_axis_label = 6;
 * @return {string}
 */
proto.data.Chart.prototype.getYAxisLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Chart} returns this
 */
proto.data.Chart.prototype.setYAxisLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Decimal measure_target = 7;
 * @return {?proto.data.Decimal}
 */
proto.data.Chart.prototype.getMeasureTarget = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 7));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.Chart} returns this
*/
proto.data.Chart.prototype.setMeasureTarget = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.Chart} returns this
 */
proto.data.Chart.prototype.clearMeasureTarget = function() {
  return this.setMeasureTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.Chart.prototype.hasMeasureTarget = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated ColorSchema color_schemas = 8;
 * @return {!Array<!proto.data.ColorSchema>}
 */
proto.data.Chart.prototype.getColorSchemasList = function() {
  return /** @type{!Array<!proto.data.ColorSchema>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.ColorSchema, 8));
};


/**
 * @param {!Array<!proto.data.ColorSchema>} value
 * @return {!proto.data.Chart} returns this
*/
proto.data.Chart.prototype.setColorSchemasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.data.ColorSchema=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.ColorSchema}
 */
proto.data.Chart.prototype.addColorSchemas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.data.ColorSchema, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.Chart} returns this
 */
proto.data.Chart.prototype.clearColorSchemasList = function() {
  return this.setColorSchemasList([]);
};


/**
 * repeated ChartSerie series = 9;
 * @return {!Array<!proto.data.ChartSerie>}
 */
proto.data.Chart.prototype.getSeriesList = function() {
  return /** @type{!Array<!proto.data.ChartSerie>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.ChartSerie, 9));
};


/**
 * @param {!Array<!proto.data.ChartSerie>} value
 * @return {!proto.data.Chart} returns this
*/
proto.data.Chart.prototype.setSeriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.data.ChartSerie=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.ChartSerie}
 */
proto.data.Chart.prototype.addSeries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.data.ChartSerie, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.Chart} returns this
 */
proto.data.Chart.prototype.clearSeriesList = function() {
  return this.setSeriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ChartSerie.repeatedFields_ = [2];



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
proto.data.ChartSerie.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ChartSerie.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ChartSerie} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ChartSerie.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dataSetList: jspb.Message.toObjectList(msg.getDataSetList(),
    proto.data.ChartData.toObject, includeInstance)
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
 * @return {!proto.data.ChartSerie}
 */
proto.data.ChartSerie.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ChartSerie;
  return proto.data.ChartSerie.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ChartSerie} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ChartSerie}
 */
proto.data.ChartSerie.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.data.ChartData;
      reader.readMessage(value,proto.data.ChartData.deserializeBinaryFromReader);
      msg.addDataSet(value);
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
proto.data.ChartSerie.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ChartSerie.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ChartSerie} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ChartSerie.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataSetList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.ChartData.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.data.ChartSerie.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChartSerie} returns this
 */
proto.data.ChartSerie.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated ChartData data_set = 2;
 * @return {!Array<!proto.data.ChartData>}
 */
proto.data.ChartSerie.prototype.getDataSetList = function() {
  return /** @type{!Array<!proto.data.ChartData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.ChartData, 2));
};


/**
 * @param {!Array<!proto.data.ChartData>} value
 * @return {!proto.data.ChartSerie} returns this
*/
proto.data.ChartSerie.prototype.setDataSetList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.ChartData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.ChartData}
 */
proto.data.ChartSerie.prototype.addDataSet = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.ChartData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ChartSerie} returns this
 */
proto.data.ChartSerie.prototype.clearDataSetList = function() {
  return this.setDataSetList([]);
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
proto.data.ChartData.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ChartData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ChartData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ChartData.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: (f = msg.getValue()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f)
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
 * @return {!proto.data.ChartData}
 */
proto.data.ChartData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ChartData;
  return proto.data.ChartData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ChartData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ChartData}
 */
proto.data.ChartData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setValue(value);
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
proto.data.ChartData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ChartData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ChartData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ChartData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.data.ChartData.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChartData} returns this
 */
proto.data.ChartData.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Decimal value = 2;
 * @return {?proto.data.Decimal}
 */
proto.data.ChartData.prototype.getValue = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 2));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.ChartData} returns this
*/
proto.data.ChartData.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ChartData} returns this
 */
proto.data.ChartData.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ChartData.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.data.ColorSchema.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ColorSchema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ColorSchema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ColorSchema.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    color: jspb.Message.getFieldWithDefault(msg, 2, ""),
    percent: (f = msg.getPercent()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f)
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
 * @return {!proto.data.ColorSchema}
 */
proto.data.ColorSchema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ColorSchema;
  return proto.data.ColorSchema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ColorSchema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ColorSchema}
 */
proto.data.ColorSchema.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
      break;
    case 3:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setPercent(value);
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
proto.data.ColorSchema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ColorSchema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ColorSchema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ColorSchema.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPercent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.data.ColorSchema.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ColorSchema} returns this
 */
proto.data.ColorSchema.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string color = 2;
 * @return {string}
 */
proto.data.ColorSchema.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ColorSchema} returns this
 */
proto.data.ColorSchema.prototype.setColor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Decimal percent = 3;
 * @return {?proto.data.Decimal}
 */
proto.data.ColorSchema.prototype.getPercent = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 3));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.ColorSchema} returns this
*/
proto.data.ColorSchema.prototype.setPercent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ColorSchema} returns this
 */
proto.data.ColorSchema.prototype.clearPercent = function() {
  return this.setPercent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ColorSchema.prototype.hasPercent = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.data.ListDashboardsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDashboardsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDashboardsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDashboardsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    roleUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roleId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.data.ListDashboardsRequest}
 */
proto.data.ListDashboardsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDashboardsRequest;
  return proto.data.ListDashboardsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDashboardsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDashboardsRequest}
 */
proto.data.ListDashboardsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.data.ListDashboardsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDashboardsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDashboardsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDashboardsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getRoleUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoleId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListDashboardsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListDashboardsRequest} returns this
*/
proto.data.ListDashboardsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListDashboardsRequest} returns this
 */
proto.data.ListDashboardsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListDashboardsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string role_uuid = 2;
 * @return {string}
 */
proto.data.ListDashboardsRequest.prototype.getRoleUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDashboardsRequest} returns this
 */
proto.data.ListDashboardsRequest.prototype.setRoleUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 role_id = 3;
 * @return {number}
 */
proto.data.ListDashboardsRequest.prototype.getRoleId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDashboardsRequest} returns this
 */
proto.data.ListDashboardsRequest.prototype.setRoleId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.data.ListDashboardsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDashboardsRequest} returns this
 */
proto.data.ListDashboardsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.data.ListDashboardsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDashboardsRequest} returns this
 */
proto.data.ListDashboardsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListDashboardsResponse.repeatedFields_ = [2];



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
proto.data.ListDashboardsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDashboardsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDashboardsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDashboardsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dashboardsList: jspb.Message.toObjectList(msg.getDashboardsList(),
    proto_base_data_type_pb.Dashboard.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.data.ListDashboardsResponse}
 */
proto.data.ListDashboardsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDashboardsResponse;
  return proto.data.ListDashboardsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDashboardsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDashboardsResponse}
 */
proto.data.ListDashboardsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.Dashboard;
      reader.readMessage(value,proto_base_data_type_pb.Dashboard.deserializeBinaryFromReader);
      msg.addDashboards(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.data.ListDashboardsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDashboardsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDashboardsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDashboardsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDashboardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.Dashboard.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListDashboardsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDashboardsResponse} returns this
 */
proto.data.ListDashboardsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Dashboard dashboards = 2;
 * @return {!Array<!proto.data.Dashboard>}
 */
proto.data.ListDashboardsResponse.prototype.getDashboardsList = function() {
  return /** @type{!Array<!proto.data.Dashboard>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.Dashboard, 2));
};


/**
 * @param {!Array<!proto.data.Dashboard>} value
 * @return {!proto.data.ListDashboardsResponse} returns this
*/
proto.data.ListDashboardsResponse.prototype.setDashboardsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Dashboard=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Dashboard}
 */
proto.data.ListDashboardsResponse.prototype.addDashboards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Dashboard, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListDashboardsResponse} returns this
 */
proto.data.ListDashboardsResponse.prototype.clearDashboardsList = function() {
  return this.setDashboardsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListDashboardsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDashboardsResponse} returns this
 */
proto.data.ListDashboardsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.data.ListPrintFormatsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListPrintFormatsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListPrintFormatsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPrintFormatsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    reportViewUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    processUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.data.ListPrintFormatsRequest}
 */
proto.data.ListPrintFormatsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListPrintFormatsRequest;
  return proto.data.ListPrintFormatsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListPrintFormatsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListPrintFormatsRequest}
 */
proto.data.ListPrintFormatsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportViewUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessUuid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.data.ListPrintFormatsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListPrintFormatsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListPrintFormatsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPrintFormatsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReportViewUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProcessUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListPrintFormatsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListPrintFormatsRequest} returns this
*/
proto.data.ListPrintFormatsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListPrintFormatsRequest} returns this
 */
proto.data.ListPrintFormatsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListPrintFormatsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.ListPrintFormatsRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPrintFormatsRequest} returns this
 */
proto.data.ListPrintFormatsRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string report_view_uuid = 3;
 * @return {string}
 */
proto.data.ListPrintFormatsRequest.prototype.getReportViewUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPrintFormatsRequest} returns this
 */
proto.data.ListPrintFormatsRequest.prototype.setReportViewUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string process_uuid = 4;
 * @return {string}
 */
proto.data.ListPrintFormatsRequest.prototype.getProcessUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPrintFormatsRequest} returns this
 */
proto.data.ListPrintFormatsRequest.prototype.setProcessUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 page_size = 5;
 * @return {number}
 */
proto.data.ListPrintFormatsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPrintFormatsRequest} returns this
 */
proto.data.ListPrintFormatsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.data.ListPrintFormatsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPrintFormatsRequest} returns this
 */
proto.data.ListPrintFormatsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListPrintFormatsResponse.repeatedFields_ = [2];



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
proto.data.ListPrintFormatsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListPrintFormatsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListPrintFormatsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPrintFormatsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    printFormatsList: jspb.Message.toObjectList(msg.getPrintFormatsList(),
    proto_base_data_type_pb.PrintFormat.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.data.ListPrintFormatsResponse}
 */
proto.data.ListPrintFormatsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListPrintFormatsResponse;
  return proto.data.ListPrintFormatsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListPrintFormatsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListPrintFormatsResponse}
 */
proto.data.ListPrintFormatsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.PrintFormat;
      reader.readMessage(value,proto_base_data_type_pb.PrintFormat.deserializeBinaryFromReader);
      msg.addPrintFormats(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.data.ListPrintFormatsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListPrintFormatsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListPrintFormatsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPrintFormatsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPrintFormatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.PrintFormat.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListPrintFormatsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPrintFormatsResponse} returns this
 */
proto.data.ListPrintFormatsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated PrintFormat print_formats = 2;
 * @return {!Array<!proto.data.PrintFormat>}
 */
proto.data.ListPrintFormatsResponse.prototype.getPrintFormatsList = function() {
  return /** @type{!Array<!proto.data.PrintFormat>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.PrintFormat, 2));
};


/**
 * @param {!Array<!proto.data.PrintFormat>} value
 * @return {!proto.data.ListPrintFormatsResponse} returns this
*/
proto.data.ListPrintFormatsResponse.prototype.setPrintFormatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.PrintFormat=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.PrintFormat}
 */
proto.data.ListPrintFormatsResponse.prototype.addPrintFormats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.PrintFormat, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListPrintFormatsResponse} returns this
 */
proto.data.ListPrintFormatsResponse.prototype.clearPrintFormatsList = function() {
  return this.setPrintFormatsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListPrintFormatsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPrintFormatsResponse} returns this
 */
proto.data.ListPrintFormatsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.data.CreateChatEntryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.CreateChatEntryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.CreateChatEntryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateChatEntryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    comment: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.data.CreateChatEntryRequest}
 */
proto.data.CreateChatEntryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.CreateChatEntryRequest;
  return proto.data.CreateChatEntryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.CreateChatEntryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.CreateChatEntryRequest}
 */
proto.data.CreateChatEntryRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
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
proto.data.CreateChatEntryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.CreateChatEntryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.CreateChatEntryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateChatEntryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.CreateChatEntryRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.CreateChatEntryRequest} returns this
*/
proto.data.CreateChatEntryRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.CreateChatEntryRequest} returns this
 */
proto.data.CreateChatEntryRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.CreateChatEntryRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.CreateChatEntryRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateChatEntryRequest} returns this
 */
proto.data.CreateChatEntryRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.CreateChatEntryRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.CreateChatEntryRequest} returns this
 */
proto.data.CreateChatEntryRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.CreateChatEntryRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateChatEntryRequest} returns this
 */
proto.data.CreateChatEntryRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string comment = 5;
 * @return {string}
 */
proto.data.CreateChatEntryRequest.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateChatEntryRequest} returns this
 */
proto.data.CreateChatEntryRequest.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.data.ChatEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ChatEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ChatEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ChatEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    chatUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    subject: jspb.Message.getFieldWithDefault(msg, 4, ""),
    characterData: jspb.Message.getFieldWithDefault(msg, 5, ""),
    userUuid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    userName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    chatEntryType: jspb.Message.getFieldWithDefault(msg, 8, 0),
    confidentialType: jspb.Message.getFieldWithDefault(msg, 9, 0),
    moderatorStatus: jspb.Message.getFieldWithDefault(msg, 10, 0),
    logDate: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.data.ChatEntry}
 */
proto.data.ChatEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ChatEntry;
  return proto.data.ChatEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ChatEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ChatEntry}
 */
proto.data.ChatEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatUuid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCharacterData(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserUuid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 8:
      var value = /** @type {!proto.data.ChatEntry.ChatEntryType} */ (reader.readEnum());
      msg.setChatEntryType(value);
      break;
    case 9:
      var value = /** @type {!proto.data.ChatEntry.ConfidentialType} */ (reader.readEnum());
      msg.setConfidentialType(value);
      break;
    case 10:
      var value = /** @type {!proto.data.ChatEntry.ModeratorStatus} */ (reader.readEnum());
      msg.setModeratorStatus(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLogDate(value);
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
proto.data.ChatEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ChatEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ChatEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ChatEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChatUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCharacterData();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUserUuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getChatEntryType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getConfidentialType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getModeratorStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getLogDate();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.ChatEntry.ConfidentialType = {
  PUBLIC: 0,
  PARTER: 1,
  INTERNAL: 2
};

/**
 * @enum {number}
 */
proto.data.ChatEntry.ModeratorStatus = {
  NOT_DISPLAYED: 0,
  PUBLISHED: 1,
  SUSPICIUS: 2,
  TO_BE_REVIEWED: 3
};

/**
 * @enum {number}
 */
proto.data.ChatEntry.ChatEntryType = {
  NOTE_FLAT: 0,
  FORUM_THREADED: 1,
  WIKI: 2
};

/**
 * optional string chat_uuid = 1;
 * @return {string}
 */
proto.data.ChatEntry.prototype.getChatUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setChatUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.ChatEntry.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.ChatEntry.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string subject = 4;
 * @return {string}
 */
proto.data.ChatEntry.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string character_data = 5;
 * @return {string}
 */
proto.data.ChatEntry.prototype.getCharacterData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setCharacterData = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string user_uuid = 6;
 * @return {string}
 */
proto.data.ChatEntry.prototype.getUserUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setUserUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string user_name = 7;
 * @return {string}
 */
proto.data.ChatEntry.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional ChatEntryType chat_entry_type = 8;
 * @return {!proto.data.ChatEntry.ChatEntryType}
 */
proto.data.ChatEntry.prototype.getChatEntryType = function() {
  return /** @type {!proto.data.ChatEntry.ChatEntryType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.data.ChatEntry.ChatEntryType} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setChatEntryType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional ConfidentialType confidential_type = 9;
 * @return {!proto.data.ChatEntry.ConfidentialType}
 */
proto.data.ChatEntry.prototype.getConfidentialType = function() {
  return /** @type {!proto.data.ChatEntry.ConfidentialType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.data.ChatEntry.ConfidentialType} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setConfidentialType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional ModeratorStatus moderator_status = 10;
 * @return {!proto.data.ChatEntry.ModeratorStatus}
 */
proto.data.ChatEntry.prototype.getModeratorStatus = function() {
  return /** @type {!proto.data.ChatEntry.ModeratorStatus} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.data.ChatEntry.ModeratorStatus} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setModeratorStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional int64 log_date = 11;
 * @return {number}
 */
proto.data.ChatEntry.prototype.getLogDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setLogDate = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
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
proto.data.ListReportViewsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListReportViewsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListReportViewsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReportViewsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    processUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.data.ListReportViewsRequest}
 */
proto.data.ListReportViewsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListReportViewsRequest;
  return proto.data.ListReportViewsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListReportViewsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListReportViewsRequest}
 */
proto.data.ListReportViewsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.data.ListReportViewsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListReportViewsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListReportViewsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReportViewsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProcessUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListReportViewsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListReportViewsRequest} returns this
*/
proto.data.ListReportViewsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListReportViewsRequest} returns this
 */
proto.data.ListReportViewsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListReportViewsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.ListReportViewsRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReportViewsRequest} returns this
 */
proto.data.ListReportViewsRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string process_uuid = 3;
 * @return {string}
 */
proto.data.ListReportViewsRequest.prototype.getProcessUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReportViewsRequest} returns this
 */
proto.data.ListReportViewsRequest.prototype.setProcessUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.data.ListReportViewsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListReportViewsRequest} returns this
 */
proto.data.ListReportViewsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.data.ListReportViewsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReportViewsRequest} returns this
 */
proto.data.ListReportViewsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListReportViewsResponse.repeatedFields_ = [2];



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
proto.data.ListReportViewsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListReportViewsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListReportViewsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReportViewsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reportViewsList: jspb.Message.toObjectList(msg.getReportViewsList(),
    proto_base_data_type_pb.ReportView.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.data.ListReportViewsResponse}
 */
proto.data.ListReportViewsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListReportViewsResponse;
  return proto.data.ListReportViewsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListReportViewsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListReportViewsResponse}
 */
proto.data.ListReportViewsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.ReportView;
      reader.readMessage(value,proto_base_data_type_pb.ReportView.deserializeBinaryFromReader);
      msg.addReportViews(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.data.ListReportViewsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListReportViewsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListReportViewsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReportViewsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getReportViewsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.ReportView.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListReportViewsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListReportViewsResponse} returns this
 */
proto.data.ListReportViewsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ReportView report_views = 2;
 * @return {!Array<!proto.data.ReportView>}
 */
proto.data.ListReportViewsResponse.prototype.getReportViewsList = function() {
  return /** @type{!Array<!proto.data.ReportView>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.ReportView, 2));
};


/**
 * @param {!Array<!proto.data.ReportView>} value
 * @return {!proto.data.ListReportViewsResponse} returns this
*/
proto.data.ListReportViewsResponse.prototype.setReportViewsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.ReportView=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.ReportView}
 */
proto.data.ListReportViewsResponse.prototype.addReportViews = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.ReportView, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListReportViewsResponse} returns this
 */
proto.data.ListReportViewsResponse.prototype.clearReportViewsList = function() {
  return this.setReportViewsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListReportViewsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReportViewsResponse} returns this
 */
proto.data.ListReportViewsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.data.ListDrillTablesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDrillTablesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDrillTablesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDrillTablesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.data.ListDrillTablesRequest}
 */
proto.data.ListDrillTablesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDrillTablesRequest;
  return proto.data.ListDrillTablesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDrillTablesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDrillTablesRequest}
 */
proto.data.ListDrillTablesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.data.ListDrillTablesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDrillTablesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDrillTablesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDrillTablesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListDrillTablesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListDrillTablesRequest} returns this
*/
proto.data.ListDrillTablesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListDrillTablesRequest} returns this
 */
proto.data.ListDrillTablesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListDrillTablesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.ListDrillTablesRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDrillTablesRequest} returns this
 */
proto.data.ListDrillTablesRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.data.ListDrillTablesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDrillTablesRequest} returns this
 */
proto.data.ListDrillTablesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.data.ListDrillTablesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDrillTablesRequest} returns this
 */
proto.data.ListDrillTablesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListDrillTablesResponse.repeatedFields_ = [2];



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
proto.data.ListDrillTablesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDrillTablesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDrillTablesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDrillTablesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    drillTablesList: jspb.Message.toObjectList(msg.getDrillTablesList(),
    proto_base_data_type_pb.DrillTable.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.data.ListDrillTablesResponse}
 */
proto.data.ListDrillTablesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDrillTablesResponse;
  return proto.data.ListDrillTablesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDrillTablesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDrillTablesResponse}
 */
proto.data.ListDrillTablesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.DrillTable;
      reader.readMessage(value,proto_base_data_type_pb.DrillTable.deserializeBinaryFromReader);
      msg.addDrillTables(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.data.ListDrillTablesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDrillTablesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDrillTablesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDrillTablesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDrillTablesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.DrillTable.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListDrillTablesResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDrillTablesResponse} returns this
 */
proto.data.ListDrillTablesResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DrillTable drill_tables = 2;
 * @return {!Array<!proto.data.DrillTable>}
 */
proto.data.ListDrillTablesResponse.prototype.getDrillTablesList = function() {
  return /** @type{!Array<!proto.data.DrillTable>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.DrillTable, 2));
};


/**
 * @param {!Array<!proto.data.DrillTable>} value
 * @return {!proto.data.ListDrillTablesResponse} returns this
*/
proto.data.ListDrillTablesResponse.prototype.setDrillTablesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.DrillTable=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.DrillTable}
 */
proto.data.ListDrillTablesResponse.prototype.addDrillTables = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.DrillTable, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListDrillTablesResponse} returns this
 */
proto.data.ListDrillTablesResponse.prototype.clearDrillTablesList = function() {
  return this.setDrillTablesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListDrillTablesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDrillTablesResponse} returns this
 */
proto.data.ListDrillTablesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.data.ListReferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListReferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListReferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    windowUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.data.ListReferencesRequest}
 */
proto.data.ListReferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListReferencesRequest;
  return proto.data.ListReferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListReferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListReferencesRequest}
 */
proto.data.ListReferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWindowUuid(value);
      break;
    case 5:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
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
proto.data.ListReferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListReferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListReferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getWindowUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.data.ListReferencesRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.ListReferencesRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.ListReferencesRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string window_uuid = 4;
 * @return {string}
 */
proto.data.ListReferencesRequest.prototype.getWindowUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.setWindowUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional ClientRequest client_request = 5;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListReferencesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 5));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListReferencesRequest} returns this
*/
proto.data.ListReferencesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListReferencesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 page_size = 6;
 * @return {number}
 */
proto.data.ListReferencesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string page_token = 7;
 * @return {string}
 */
proto.data.ListReferencesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListReferencesResponse.repeatedFields_ = [2];



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
proto.data.ListReferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListReferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListReferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    referencesList: jspb.Message.toObjectList(msg.getReferencesList(),
    proto_base_data_type_pb.RecordReferenceInfo.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.data.ListReferencesResponse}
 */
proto.data.ListReferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListReferencesResponse;
  return proto.data.ListReferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListReferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListReferencesResponse}
 */
proto.data.ListReferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.RecordReferenceInfo;
      reader.readMessage(value,proto_base_data_type_pb.RecordReferenceInfo.deserializeBinaryFromReader);
      msg.addReferences(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
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
proto.data.ListReferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListReferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListReferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getReferencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.RecordReferenceInfo.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListReferencesResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListReferencesResponse} returns this
 */
proto.data.ListReferencesResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated RecordReferenceInfo references = 2;
 * @return {!Array<!proto.data.RecordReferenceInfo>}
 */
proto.data.ListReferencesResponse.prototype.getReferencesList = function() {
  return /** @type{!Array<!proto.data.RecordReferenceInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.RecordReferenceInfo, 2));
};


/**
 * @param {!Array<!proto.data.RecordReferenceInfo>} value
 * @return {!proto.data.ListReferencesResponse} returns this
*/
proto.data.ListReferencesResponse.prototype.setReferencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.RecordReferenceInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.RecordReferenceInfo}
 */
proto.data.ListReferencesResponse.prototype.addReferences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.RecordReferenceInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListReferencesResponse} returns this
 */
proto.data.ListReferencesResponse.prototype.clearReferencesList = function() {
  return this.setReferencesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListReferencesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReferencesResponse} returns this
 */
proto.data.ListReferencesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListGeneralInfoRequest.repeatedFields_ = [5];



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
proto.data.ListGeneralInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListGeneralInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListGeneralInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListGeneralInfoRequest.toObject = function(includeInstance, msg) {
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
    tableName: jspb.Message.getFieldWithDefault(msg, 12, ""),
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
 * @return {!proto.data.ListGeneralInfoRequest}
 */
proto.data.ListGeneralInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListGeneralInfoRequest;
  return proto.data.ListGeneralInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListGeneralInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListGeneralInfoRequest}
 */
proto.data.ListGeneralInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
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
proto.data.ListGeneralInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListGeneralInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListGeneralInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListGeneralInfoRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      12,
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
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListGeneralInfoRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
*/
proto.data.ListGeneralInfoRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListGeneralInfoRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.data.ListGeneralInfoRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.data.ListGeneralInfoRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Criteria filters = 4;
 * @return {?proto.data.Criteria}
 */
proto.data.ListGeneralInfoRequest.prototype.getFilters = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 4));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
*/
proto.data.ListGeneralInfoRequest.prototype.setFilters = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.clearFilters = function() {
  return this.setFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListGeneralInfoRequest.prototype.hasFilters = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated KeyValue context_attributes = 5;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.ListGeneralInfoRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 5));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
*/
proto.data.ListGeneralInfoRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.ListGeneralInfoRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
};


/**
 * optional string search_value = 6;
 * @return {string}
 */
proto.data.ListGeneralInfoRequest.prototype.getSearchValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setSearchValue = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string process_parameter_uuid = 7;
 * @return {string}
 */
proto.data.ListGeneralInfoRequest.prototype.getProcessParameterUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setProcessParameterUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string field_uuid = 8;
 * @return {string}
 */
proto.data.ListGeneralInfoRequest.prototype.getFieldUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setFieldUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string browse_field_uuid = 9;
 * @return {string}
 */
proto.data.ListGeneralInfoRequest.prototype.getBrowseFieldUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setBrowseFieldUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string reference_uuid = 10;
 * @return {string}
 */
proto.data.ListGeneralInfoRequest.prototype.getReferenceUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setReferenceUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string column_uuid = 11;
 * @return {string}
 */
proto.data.ListGeneralInfoRequest.prototype.getColumnUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setColumnUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string table_name = 12;
 * @return {string}
 */
proto.data.ListGeneralInfoRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string column_name = 13;
 * @return {string}
 */
proto.data.ListGeneralInfoRequest.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListTabSequencesRequest.repeatedFields_ = [6];



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
proto.data.ListTabSequencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListTabSequencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListTabSequencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTabSequencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    windowUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    tabUuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    contextAttributesList: jspb.Message.toObjectList(msg.getContextAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance)
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
 * @return {!proto.data.ListTabSequencesRequest}
 */
proto.data.ListTabSequencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListTabSequencesRequest;
  return proto.data.ListTabSequencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListTabSequencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListTabSequencesRequest}
 */
proto.data.ListTabSequencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setWindowUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTabUuid(value);
      break;
    case 6:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addContextAttributes(value);
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
proto.data.ListTabSequencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListTabSequencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListTabSequencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTabSequencesRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getWindowUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTabUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getContextAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListTabSequencesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListTabSequencesRequest} returns this
*/
proto.data.ListTabSequencesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListTabSequencesRequest} returns this
 */
proto.data.ListTabSequencesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListTabSequencesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.data.ListTabSequencesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListTabSequencesRequest} returns this
 */
proto.data.ListTabSequencesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.data.ListTabSequencesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTabSequencesRequest} returns this
 */
proto.data.ListTabSequencesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string window_uuid = 4;
 * @return {string}
 */
proto.data.ListTabSequencesRequest.prototype.getWindowUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTabSequencesRequest} returns this
 */
proto.data.ListTabSequencesRequest.prototype.setWindowUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string tab_uuid = 5;
 * @return {string}
 */
proto.data.ListTabSequencesRequest.prototype.getTabUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTabSequencesRequest} returns this
 */
proto.data.ListTabSequencesRequest.prototype.setTabUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated KeyValue context_attributes = 6;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.ListTabSequencesRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 6));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.ListTabSequencesRequest} returns this
*/
proto.data.ListTabSequencesRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.ListTabSequencesRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListTabSequencesRequest} returns this
 */
proto.data.ListTabSequencesRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.SaveTabSequencesRequest.repeatedFields_ = [3,4];



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
proto.data.SaveTabSequencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.SaveTabSequencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.SaveTabSequencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.SaveTabSequencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tabUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    contextAttributesList: jspb.Message.toObjectList(msg.getContextAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance),
    entitiesList: jspb.Message.toObjectList(msg.getEntitiesList(),
    proto_base_data_type_pb.KeyValueSelection.toObject, includeInstance)
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
 * @return {!proto.data.SaveTabSequencesRequest}
 */
proto.data.SaveTabSequencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.SaveTabSequencesRequest;
  return proto.data.SaveTabSequencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.SaveTabSequencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.SaveTabSequencesRequest}
 */
proto.data.SaveTabSequencesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTabUuid(value);
      break;
    case 3:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addContextAttributes(value);
      break;
    case 4:
      var value = new proto_base_data_type_pb.KeyValueSelection;
      reader.readMessage(value,proto_base_data_type_pb.KeyValueSelection.deserializeBinaryFromReader);
      msg.addEntities(value);
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
proto.data.SaveTabSequencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.SaveTabSequencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.SaveTabSequencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.SaveTabSequencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTabUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getContextAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getEntitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto_base_data_type_pb.KeyValueSelection.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.SaveTabSequencesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.SaveTabSequencesRequest} returns this
*/
proto.data.SaveTabSequencesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.SaveTabSequencesRequest} returns this
 */
proto.data.SaveTabSequencesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.SaveTabSequencesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string tab_uuid = 2;
 * @return {string}
 */
proto.data.SaveTabSequencesRequest.prototype.getTabUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.SaveTabSequencesRequest} returns this
 */
proto.data.SaveTabSequencesRequest.prototype.setTabUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated KeyValue context_attributes = 3;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.SaveTabSequencesRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 3));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.SaveTabSequencesRequest} returns this
*/
proto.data.SaveTabSequencesRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.SaveTabSequencesRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.SaveTabSequencesRequest} returns this
 */
proto.data.SaveTabSequencesRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
};


/**
 * repeated KeyValueSelection entities = 4;
 * @return {!Array<!proto.data.KeyValueSelection>}
 */
proto.data.SaveTabSequencesRequest.prototype.getEntitiesList = function() {
  return /** @type{!Array<!proto.data.KeyValueSelection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValueSelection, 4));
};


/**
 * @param {!Array<!proto.data.KeyValueSelection>} value
 * @return {!proto.data.SaveTabSequencesRequest} returns this
*/
proto.data.SaveTabSequencesRequest.prototype.setEntitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.data.KeyValueSelection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValueSelection}
 */
proto.data.SaveTabSequencesRequest.prototype.addEntities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.data.KeyValueSelection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.SaveTabSequencesRequest} returns this
 */
proto.data.SaveTabSequencesRequest.prototype.clearEntitiesList = function() {
  return this.setEntitiesList([]);
};


goog.object.extend(exports, proto.data);
