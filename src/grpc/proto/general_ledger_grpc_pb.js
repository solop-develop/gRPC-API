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
var proto_general_ledger_pb = require('../proto/general_ledger_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
var proto_client_pb = require('../proto/client_pb.js');
var proto_business_pb = require('../proto/business_pb.js');

function serialize_data_Entity(arg) {
  if (!(arg instanceof proto_base_data_type_pb.Entity)) {
    throw new Error('Expected argument of type data.Entity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_Entity(buffer_arg) {
  return proto_base_data_type_pb.Entity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ListEntitiesResponse(arg) {
  if (!(arg instanceof proto_business_pb.ListEntitiesResponse)) {
    throw new Error('Expected argument of type data.ListEntitiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListEntitiesResponse(buffer_arg) {
  return proto_business_pb.ListEntitiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_general_ledger_GetAccountingCombinationRequest(arg) {
  if (!(arg instanceof proto_general_ledger_pb.GetAccountingCombinationRequest)) {
    throw new Error('Expected argument of type general_ledger.GetAccountingCombinationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_general_ledger_GetAccountingCombinationRequest(buffer_arg) {
  return proto_general_ledger_pb.GetAccountingCombinationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_general_ledger_ListAccountingCombinationsRequest(arg) {
  if (!(arg instanceof proto_general_ledger_pb.ListAccountingCombinationsRequest)) {
    throw new Error('Expected argument of type general_ledger.ListAccountingCombinationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_general_ledger_ListAccountingCombinationsRequest(buffer_arg) {
  return proto_general_ledger_pb.ListAccountingCombinationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_general_ledger_SaveAccountingCombinationRequest(arg) {
  if (!(arg instanceof proto_general_ledger_pb.SaveAccountingCombinationRequest)) {
    throw new Error('Expected argument of type general_ledger.SaveAccountingCombinationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_general_ledger_SaveAccountingCombinationRequest(buffer_arg) {
  return proto_general_ledger_pb.SaveAccountingCombinationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The General Ledger service definition.
var GeneralLedgerService = exports.GeneralLedgerService = {
  // Load Accounting Combination
getAccountingCombination: {
    path: '/general_ledger.GeneralLedger/getAccountingCombination',
    requestStream: false,
    responseStream: false,
    requestType: proto_general_ledger_pb.GetAccountingCombinationRequest,
    responseType: proto_base_data_type_pb.Entity,
    requestSerialize: serialize_general_ledger_GetAccountingCombinationRequest,
    requestDeserialize: deserialize_general_ledger_GetAccountingCombinationRequest,
    responseSerialize: serialize_data_Entity,
    responseDeserialize: deserialize_data_Entity,
  },
  // List Accounting Combinations
listAccountingCombinations: {
    path: '/general_ledger.GeneralLedger/ListAccountingCombinations',
    requestStream: false,
    responseStream: false,
    requestType: proto_general_ledger_pb.ListAccountingCombinationsRequest,
    responseType: proto_business_pb.ListEntitiesResponse,
    requestSerialize: serialize_general_ledger_ListAccountingCombinationsRequest,
    requestDeserialize: deserialize_general_ledger_ListAccountingCombinationsRequest,
    responseSerialize: serialize_data_ListEntitiesResponse,
    responseDeserialize: deserialize_data_ListEntitiesResponse,
  },
  // Save Accounting Combination
saveAccountingCombination: {
    path: '/general_ledger.GeneralLedger/SaveAccountingCombination',
    requestStream: false,
    responseStream: false,
    requestType: proto_general_ledger_pb.SaveAccountingCombinationRequest,
    responseType: proto_base_data_type_pb.Entity,
    requestSerialize: serialize_general_ledger_SaveAccountingCombinationRequest,
    requestDeserialize: deserialize_general_ledger_SaveAccountingCombinationRequest,
    responseSerialize: serialize_data_Entity,
    responseDeserialize: deserialize_data_Entity,
  },
};

exports.GeneralLedgerClient = grpc.makeGenericClientConstructor(GeneralLedgerService);
