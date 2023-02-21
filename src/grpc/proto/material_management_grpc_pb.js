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
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                     *
// GNU General Public License for more details.                                     *
// You should have received a copy of the GNU General Public License                *
// along with this program. If not, see <https://www.gnu.org/licenses/>.            *
// **********************************************************************************
'use strict';
var grpc = require('@grpc/grpc-js');
var proto_material_management_pb = require('../proto/material_management_pb.js');
var proto_client_pb = require('../proto/client_pb.js');
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

function serialize_material_management_GetProductAttributeSetInstanceRequest(arg) {
  if (!(arg instanceof proto_material_management_pb.GetProductAttributeSetInstanceRequest)) {
    throw new Error('Expected argument of type material_management.GetProductAttributeSetInstanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_material_management_GetProductAttributeSetInstanceRequest(buffer_arg) {
  return proto_material_management_pb.GetProductAttributeSetInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_material_management_GetProductAttributeSetRequest(arg) {
  if (!(arg instanceof proto_material_management_pb.GetProductAttributeSetRequest)) {
    throw new Error('Expected argument of type material_management.GetProductAttributeSetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_material_management_GetProductAttributeSetRequest(buffer_arg) {
  return proto_material_management_pb.GetProductAttributeSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_material_management_ListProductAttributeSetInstancesRequest(arg) {
  if (!(arg instanceof proto_material_management_pb.ListProductAttributeSetInstancesRequest)) {
    throw new Error('Expected argument of type material_management.ListProductAttributeSetInstancesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_material_management_ListProductAttributeSetInstancesRequest(buffer_arg) {
  return proto_material_management_pb.ListProductAttributeSetInstancesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_material_management_ListProductAttributeSetInstancesResponse(arg) {
  if (!(arg instanceof proto_material_management_pb.ListProductAttributeSetInstancesResponse)) {
    throw new Error('Expected argument of type material_management.ListProductAttributeSetInstancesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_material_management_ListProductAttributeSetInstancesResponse(buffer_arg) {
  return proto_material_management_pb.ListProductAttributeSetInstancesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_material_management_ListProductAttributeValuesRequest(arg) {
  if (!(arg instanceof proto_material_management_pb.ListProductAttributeValuesRequest)) {
    throw new Error('Expected argument of type material_management.ListProductAttributeValuesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_material_management_ListProductAttributeValuesRequest(buffer_arg) {
  return proto_material_management_pb.ListProductAttributeValuesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_material_management_ListProductAttributesRequest(arg) {
  if (!(arg instanceof proto_material_management_pb.ListProductAttributesRequest)) {
    throw new Error('Expected argument of type material_management.ListProductAttributesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_material_management_ListProductAttributesRequest(buffer_arg) {
  return proto_material_management_pb.ListProductAttributesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_material_management_ListProductStorageRequest(arg) {
  if (!(arg instanceof proto_material_management_pb.ListProductStorageRequest)) {
    throw new Error('Expected argument of type material_management.ListProductStorageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_material_management_ListProductStorageRequest(buffer_arg) {
  return proto_material_management_pb.ListProductStorageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_material_management_ProductAttributeSet(arg) {
  if (!(arg instanceof proto_material_management_pb.ProductAttributeSet)) {
    throw new Error('Expected argument of type material_management.ProductAttributeSet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_material_management_ProductAttributeSet(buffer_arg) {
  return proto_material_management_pb.ProductAttributeSet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_material_management_ProductAttributeSetInstance(arg) {
  if (!(arg instanceof proto_material_management_pb.ProductAttributeSetInstance)) {
    throw new Error('Expected argument of type material_management.ProductAttributeSetInstance');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_material_management_ProductAttributeSetInstance(buffer_arg) {
  return proto_material_management_pb.ProductAttributeSetInstance.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_material_management_SaveProductAttributeSetInstanceRequest(arg) {
  if (!(arg instanceof proto_material_management_pb.SaveProductAttributeSetInstanceRequest)) {
    throw new Error('Expected argument of type material_management.SaveProductAttributeSetInstanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_material_management_SaveProductAttributeSetInstanceRequest(buffer_arg) {
  return proto_material_management_pb.SaveProductAttributeSetInstanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Material Management service definition.
var MaterialManagementService = exports.MaterialManagementService = {
  // List Product Storage
listProductStorage: {
    path: '/material_management.MaterialManagement/ListProductStorage',
    requestStream: false,
    responseStream: false,
    requestType: proto_material_management_pb.ListProductStorageRequest,
    responseType: proto_business_pb.ListEntitiesResponse,
    requestSerialize: serialize_material_management_ListProductStorageRequest,
    requestDeserialize: deserialize_material_management_ListProductStorageRequest,
    responseSerialize: serialize_data_ListEntitiesResponse,
    responseDeserialize: deserialize_data_ListEntitiesResponse,
  },
  // List Product Attribute Values
listProductAttributeValues: {
    path: '/material_management.MaterialManagement/ListProductAttributeValues',
    requestStream: false,
    responseStream: false,
    requestType: proto_material_management_pb.ListProductAttributeValuesRequest,
    responseType: proto_business_pb.ListEntitiesResponse,
    requestSerialize: serialize_material_management_ListProductAttributeValuesRequest,
    requestDeserialize: deserialize_material_management_ListProductAttributeValuesRequest,
    responseSerialize: serialize_data_ListEntitiesResponse,
    responseDeserialize: deserialize_data_ListEntitiesResponse,
  },
  // List Product Attributes
listProductAttributes: {
    path: '/material_management.MaterialManagement/ListProductAttributes',
    requestStream: false,
    responseStream: false,
    requestType: proto_material_management_pb.ListProductAttributesRequest,
    responseType: proto_business_pb.ListEntitiesResponse,
    requestSerialize: serialize_material_management_ListProductAttributesRequest,
    requestDeserialize: deserialize_material_management_ListProductAttributesRequest,
    responseSerialize: serialize_data_ListEntitiesResponse,
    responseDeserialize: deserialize_data_ListEntitiesResponse,
  },
  // Get Product Attribute Set
getProductAttributeSet: {
    path: '/material_management.MaterialManagement/GetProductAttributeSet',
    requestStream: false,
    responseStream: false,
    requestType: proto_material_management_pb.GetProductAttributeSetRequest,
    responseType: proto_material_management_pb.ProductAttributeSet,
    requestSerialize: serialize_material_management_GetProductAttributeSetRequest,
    requestDeserialize: deserialize_material_management_GetProductAttributeSetRequest,
    responseSerialize: serialize_material_management_ProductAttributeSet,
    responseDeserialize: deserialize_material_management_ProductAttributeSet,
  },
  // Get Product Set Attribute Instance
getProductAttributeSetInstance: {
    path: '/material_management.MaterialManagement/GetProductAttributeSetInstance',
    requestStream: false,
    responseStream: false,
    requestType: proto_material_management_pb.GetProductAttributeSetInstanceRequest,
    responseType: proto_material_management_pb.ProductAttributeSetInstance,
    requestSerialize: serialize_material_management_GetProductAttributeSetInstanceRequest,
    requestDeserialize: deserialize_material_management_GetProductAttributeSetInstanceRequest,
    responseSerialize: serialize_material_management_ProductAttributeSetInstance,
    responseDeserialize: deserialize_material_management_ProductAttributeSetInstance,
  },
  // List Product Atribute Set Instance
listProductAttributeSetInstances: {
    path: '/material_management.MaterialManagement/ListProductAttributeSetInstances',
    requestStream: false,
    responseStream: false,
    requestType: proto_material_management_pb.ListProductAttributeSetInstancesRequest,
    responseType: proto_material_management_pb.ListProductAttributeSetInstancesResponse,
    requestSerialize: serialize_material_management_ListProductAttributeSetInstancesRequest,
    requestDeserialize: deserialize_material_management_ListProductAttributeSetInstancesRequest,
    responseSerialize: serialize_material_management_ListProductAttributeSetInstancesResponse,
    responseDeserialize: deserialize_material_management_ListProductAttributeSetInstancesResponse,
  },
  // Create/Update Attribute Product Set Instance
saveProductAttributeSetInstance: {
    path: '/material_management.MaterialManagement/SaveProductAttributeSetInstance',
    requestStream: false,
    responseStream: false,
    requestType: proto_material_management_pb.SaveProductAttributeSetInstanceRequest,
    responseType: proto_material_management_pb.ProductAttributeSetInstance,
    requestSerialize: serialize_material_management_SaveProductAttributeSetInstanceRequest,
    requestDeserialize: deserialize_material_management_SaveProductAttributeSetInstanceRequest,
    responseSerialize: serialize_material_management_ProductAttributeSetInstance,
    responseDeserialize: deserialize_material_management_ProductAttributeSetInstance,
  },
};

exports.MaterialManagementClient = grpc.makeGenericClientConstructor(MaterialManagementService);
