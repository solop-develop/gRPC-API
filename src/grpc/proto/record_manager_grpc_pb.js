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
var proto_record_manager_pb = require('../proto/record_manager_pb.js');

function serialize_record_manager_ToggleIsActiveRecordsRequest(arg) {
  if (!(arg instanceof proto_record_manager_pb.ToggleIsActiveRecordsRequest)) {
    throw new Error('Expected argument of type record_manager.ToggleIsActiveRecordsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_record_manager_ToggleIsActiveRecordsRequest(buffer_arg) {
  return proto_record_manager_pb.ToggleIsActiveRecordsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_record_manager_ToggleIsActiveRecordsResponse(arg) {
  if (!(arg instanceof proto_record_manager_pb.ToggleIsActiveRecordsResponse)) {
    throw new Error('Expected argument of type record_manager.ToggleIsActiveRecordsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_record_manager_ToggleIsActiveRecordsResponse(buffer_arg) {
  return proto_record_manager_pb.ToggleIsActiveRecordsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RecordManagerService = exports.RecordManagerService = {
  toggleIsActiveRecords: {
    path: '/record_manager.RecordManager/ToggleIsActiveRecords',
    requestStream: false,
    responseStream: false,
    requestType: proto_record_manager_pb.ToggleIsActiveRecordsRequest,
    responseType: proto_record_manager_pb.ToggleIsActiveRecordsResponse,
    requestSerialize: serialize_record_manager_ToggleIsActiveRecordsRequest,
    requestDeserialize: deserialize_record_manager_ToggleIsActiveRecordsRequest,
    responseSerialize: serialize_record_manager_ToggleIsActiveRecordsResponse,
    responseDeserialize: deserialize_record_manager_ToggleIsActiveRecordsResponse,
  },
};

exports.RecordManagerClient = grpc.makeGenericClientConstructor(RecordManagerService);
