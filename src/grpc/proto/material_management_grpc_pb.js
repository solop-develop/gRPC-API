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
var proto_material_management_pb = require('../proto/material_management_pb.js');
var proto_client_pb = require('../proto/client_pb.js');
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

function serialize_material_management_ListProductStorageRequest(arg) {
  if (!(arg instanceof proto_material_management_pb.ListProductStorageRequest)) {
    throw new Error('Expected argument of type material_management.ListProductStorageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_material_management_ListProductStorageRequest(buffer_arg) {
  return proto_material_management_pb.ListProductStorageRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
};

exports.MaterialManagementClient = grpc.makeGenericClientConstructor(MaterialManagementService);
