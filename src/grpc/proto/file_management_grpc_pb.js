// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ***********************************************************************************
// Copyright (C) 2012-2022 E.R.P. Consultores y Asociados, C.A.                     *
// Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                     *
// This program is free software: you can redistribute it and/or modify             *
// it under the terms of the GNU General Public License as published by             *
// the Free Software Foundation, either version 2 of the License, or                *
// (at your option) any later version.                                              *
// This program is distributed in the hope that it will be useful,                  *
// but WITHOUT ANY WARRANTY; without even the implied warranty of                   *
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.	See the                     *
// GNU General Public License for more details.                                     *
// You should have received a copy of the GNU General Public License                *
// along with this program. If not, see <https://www.gnu.org/licenses/>.            *
// **********************************************************************************
'use strict';
var grpc = require('@grpc/grpc-js');
var proto_file_management_pb = require('../proto/file_management_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
var proto_client_pb = require('../proto/client_pb.js');

function serialize_file_management_Attachment(arg) {
  if (!(arg instanceof proto_file_management_pb.Attachment)) {
    throw new Error('Expected argument of type file_management.Attachment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_Attachment(buffer_arg) {
  return proto_file_management_pb.Attachment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_GetAttachmentRequest(arg) {
  if (!(arg instanceof proto_file_management_pb.GetAttachmentRequest)) {
    throw new Error('Expected argument of type file_management.GetAttachmentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_GetAttachmentRequest(buffer_arg) {
  return proto_file_management_pb.GetAttachmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_GetResourceReferenceRequest(arg) {
  if (!(arg instanceof proto_file_management_pb.GetResourceReferenceRequest)) {
    throw new Error('Expected argument of type file_management.GetResourceReferenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_GetResourceReferenceRequest(buffer_arg) {
  return proto_file_management_pb.GetResourceReferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_GetResourceRequest(arg) {
  if (!(arg instanceof proto_file_management_pb.GetResourceRequest)) {
    throw new Error('Expected argument of type file_management.GetResourceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_GetResourceRequest(buffer_arg) {
  return proto_file_management_pb.GetResourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_LoadResourceRequest(arg) {
  if (!(arg instanceof proto_file_management_pb.LoadResourceRequest)) {
    throw new Error('Expected argument of type file_management.LoadResourceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_LoadResourceRequest(buffer_arg) {
  return proto_file_management_pb.LoadResourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_Resource(arg) {
  if (!(arg instanceof proto_file_management_pb.Resource)) {
    throw new Error('Expected argument of type file_management.Resource');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_Resource(buffer_arg) {
  return proto_file_management_pb.Resource.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_ResourceReference(arg) {
  if (!(arg instanceof proto_file_management_pb.ResourceReference)) {
    throw new Error('Expected argument of type file_management.ResourceReference');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_ResourceReference(buffer_arg) {
  return proto_file_management_pb.ResourceReference.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_file_management_SetResourceReferenceRequest(arg) {
  if (!(arg instanceof proto_file_management_pb.SetResourceReferenceRequest)) {
    throw new Error('Expected argument of type file_management.SetResourceReferenceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_file_management_SetResourceReferenceRequest(buffer_arg) {
  return proto_file_management_pb.SetResourceReferenceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The File Management service definition.
var FileManagementService = exports.FileManagementService = {
  // 	Service for get a resource from resource uuid
getResource: {
    path: '/file_management.FileManagement/GetResource',
    requestStream: false,
    responseStream: true,
    requestType: proto_file_management_pb.GetResourceRequest,
    responseType: proto_file_management_pb.Resource,
    requestSerialize: serialize_file_management_GetResourceRequest,
    requestDeserialize: deserialize_file_management_GetResourceRequest,
    responseSerialize: serialize_file_management_Resource,
    responseDeserialize: deserialize_file_management_Resource,
  },
  // 	Service for get a resource reference from image, attachment or archive
getResourceReference: {
    path: '/file_management.FileManagement/GetResourceReference',
    requestStream: false,
    responseStream: false,
    requestType: proto_file_management_pb.GetResourceReferenceRequest,
    responseType: proto_file_management_pb.ResourceReference,
    requestSerialize: serialize_file_management_GetResourceReferenceRequest,
    requestDeserialize: deserialize_file_management_GetResourceReferenceRequest,
    responseSerialize: serialize_file_management_ResourceReference,
    responseDeserialize: deserialize_file_management_ResourceReference,
  },
  // 	Service for get a attachment from table and record uuid
getAttachment: {
    path: '/file_management.FileManagement/GetAttachment',
    requestStream: false,
    responseStream: false,
    requestType: proto_file_management_pb.GetAttachmentRequest,
    responseType: proto_file_management_pb.Attachment,
    requestSerialize: serialize_file_management_GetAttachmentRequest,
    requestDeserialize: deserialize_file_management_GetAttachmentRequest,
    responseSerialize: serialize_file_management_Attachment,
    responseDeserialize: deserialize_file_management_Attachment,
  },
  // 	Service for set a resource reference from image, attachment or archive
setResourceReference: {
    path: '/file_management.FileManagement/SetResourceReference',
    requestStream: false,
    responseStream: false,
    requestType: proto_file_management_pb.SetResourceReferenceRequest,
    responseType: proto_file_management_pb.ResourceReference,
    requestSerialize: serialize_file_management_SetResourceReferenceRequest,
    requestDeserialize: deserialize_file_management_SetResourceReferenceRequest,
    responseSerialize: serialize_file_management_ResourceReference,
    responseDeserialize: deserialize_file_management_ResourceReference,
  },
  // 	Service for set a resource
loadResource: {
    path: '/file_management.FileManagement/loadResource',
    requestStream: true,
    responseStream: false,
    requestType: proto_file_management_pb.LoadResourceRequest,
    responseType: proto_file_management_pb.ResourceReference,
    requestSerialize: serialize_file_management_LoadResourceRequest,
    requestDeserialize: deserialize_file_management_LoadResourceRequest,
    responseSerialize: serialize_file_management_ResourceReference,
    responseDeserialize: deserialize_file_management_ResourceReference,
  },
};

exports.FileManagementClient = grpc.makeGenericClientConstructor(FileManagementService);
