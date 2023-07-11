// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ***********************************************************************************
// Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                     *
// Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                     *
// This program is free software: you can redistribute it and/or modify             *
// it under the terms of the GNU General Public License as published by             *
// the Free Software Foundation, either version 2 of the License, or                *
// (at your option) any later version.                                              *
// This program is distributed in the hope that it will be useful,                  *
// but WITHOUT ANY WARRANTY; without even the implied warranty of                   *
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                     *
// GNU General Public License for more details.                                     *
// You should have received a copy of the GNU General Public License                *
// along with this program. If not, see <https://www.gnu.org/licenses/>.            *
// **********************************************************************************
'use strict';
var grpc = require('@grpc/grpc-js');
var proto_import_file_loader_pb = require('../proto/import_file_loader_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
var proto_business_pb = require('../proto/business_pb.js');

function serialize_data_ListEntitiesResponse(arg) {
  if (!(arg instanceof proto_business_pb.ListEntitiesResponse)) {
    throw new Error('Expected argument of type data.ListEntitiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListEntitiesResponse(buffer_arg) {
  return proto_business_pb.ListEntitiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListLookupItemsResponse(arg) {
  if (!(arg instanceof proto_business_pb.ListLookupItemsResponse)) {
    throw new Error('Expected argument of type data.ListLookupItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListLookupItemsResponse(buffer_arg) {
  return proto_business_pb.ListLookupItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_GetImportFromatRequest(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.GetImportFromatRequest)) {
    throw new Error('Expected argument of type import_file_loader.GetImportFromatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_GetImportFromatRequest(buffer_arg) {
  return proto_import_file_loader_pb.GetImportFromatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_ImportFormat(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.ImportFormat)) {
    throw new Error('Expected argument of type import_file_loader.ImportFormat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_ImportFormat(buffer_arg) {
  return proto_import_file_loader_pb.ImportFormat.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_ListCharsetsRequest(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.ListCharsetsRequest)) {
    throw new Error('Expected argument of type import_file_loader.ListCharsetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_ListCharsetsRequest(buffer_arg) {
  return proto_import_file_loader_pb.ListCharsetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_ListFilePreviewRequest(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.ListFilePreviewRequest)) {
    throw new Error('Expected argument of type import_file_loader.ListFilePreviewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_ListFilePreviewRequest(buffer_arg) {
  return proto_import_file_loader_pb.ListFilePreviewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_ListImportFormatsRequest(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.ListImportFormatsRequest)) {
    throw new Error('Expected argument of type import_file_loader.ListImportFormatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_ListImportFormatsRequest(buffer_arg) {
  return proto_import_file_loader_pb.ListImportFormatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_LoadImportFileRequest(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.LoadImportFileRequest)) {
    throw new Error('Expected argument of type import_file_loader.LoadImportFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_LoadImportFileRequest(buffer_arg) {
  return proto_import_file_loader_pb.LoadImportFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_ProcessImportRequest(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.ProcessImportRequest)) {
    throw new Error('Expected argument of type import_file_loader.ProcessImportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_ProcessImportRequest(buffer_arg) {
  return proto_import_file_loader_pb.ProcessImportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_ProcessImportResponse(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.ProcessImportResponse)) {
    throw new Error('Expected argument of type import_file_loader.ProcessImportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_ProcessImportResponse(buffer_arg) {
  return proto_import_file_loader_pb.ProcessImportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_import_file_loader_ResourceReference(arg) {
  if (!(arg instanceof proto_import_file_loader_pb.ResourceReference)) {
    throw new Error('Expected argument of type import_file_loader.ResourceReference');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_import_file_loader_ResourceReference(buffer_arg) {
  return proto_import_file_loader_pb.ResourceReference.deserializeBinary(new Uint8Array(buffer_arg));
}


var ImportFileLoaderService = exports.ImportFileLoaderService = {
  listCharsets: {
    path: '/import_file_loader.ImportFileLoader/ListCharsets',
    requestStream: false,
    responseStream: false,
    requestType: proto_import_file_loader_pb.ListCharsetsRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_import_file_loader_ListCharsetsRequest,
    requestDeserialize: deserialize_import_file_loader_ListCharsetsRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  listImportFormats: {
    path: '/import_file_loader.ImportFileLoader/ListImportFormats',
    requestStream: false,
    responseStream: false,
    requestType: proto_import_file_loader_pb.ListImportFormatsRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_import_file_loader_ListImportFormatsRequest,
    requestDeserialize: deserialize_import_file_loader_ListImportFormatsRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  getImportFromat: {
    path: '/import_file_loader.ImportFileLoader/GetImportFromat',
    requestStream: false,
    responseStream: false,
    requestType: proto_import_file_loader_pb.GetImportFromatRequest,
    responseType: proto_import_file_loader_pb.ImportFormat,
    requestSerialize: serialize_import_file_loader_GetImportFromatRequest,
    requestDeserialize: deserialize_import_file_loader_GetImportFromatRequest,
    responseSerialize: serialize_import_file_loader_ImportFormat,
    responseDeserialize: deserialize_import_file_loader_ImportFormat,
  },
  loadImportFile: {
    path: '/import_file_loader.ImportFileLoader/LoadImportFile',
    requestStream: true,
    responseStream: false,
    requestType: proto_import_file_loader_pb.LoadImportFileRequest,
    responseType: proto_import_file_loader_pb.ResourceReference,
    requestSerialize: serialize_import_file_loader_LoadImportFileRequest,
    requestDeserialize: deserialize_import_file_loader_LoadImportFileRequest,
    responseSerialize: serialize_import_file_loader_ResourceReference,
    responseDeserialize: deserialize_import_file_loader_ResourceReference,
  },
  listFilePreview: {
    path: '/import_file_loader.ImportFileLoader/ListFilePreview',
    requestStream: false,
    responseStream: false,
    requestType: proto_import_file_loader_pb.ListFilePreviewRequest,
    responseType: proto_business_pb.ListEntitiesResponse,
    requestSerialize: serialize_import_file_loader_ListFilePreviewRequest,
    requestDeserialize: deserialize_import_file_loader_ListFilePreviewRequest,
    responseSerialize: serialize_data_ListEntitiesResponse,
    responseDeserialize: deserialize_data_ListEntitiesResponse,
  },
  processImport: {
    path: '/import_file_loader.ImportFileLoader/ProcessImport',
    requestStream: false,
    responseStream: false,
    requestType: proto_import_file_loader_pb.ProcessImportRequest,
    responseType: proto_import_file_loader_pb.ProcessImportResponse,
    requestSerialize: serialize_import_file_loader_ProcessImportRequest,
    requestDeserialize: deserialize_import_file_loader_ProcessImportRequest,
    responseSerialize: serialize_import_file_loader_ProcessImportResponse,
    responseDeserialize: deserialize_import_file_loader_ProcessImportResponse,
  },
};

exports.ImportFileLoaderClient = grpc.makeGenericClientConstructor(ImportFileLoaderService);
