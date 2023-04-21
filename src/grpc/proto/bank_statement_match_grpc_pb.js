// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ***********************************************************************************
// Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                     *
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
var proto_bank_statement_match_pb = require('../proto/bank_statement_match_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
var proto_business_pb = require('../proto/business_pb.js');

function serialize_bank_statement_match_ListBankAccountsRequest(arg) {
  if (!(arg instanceof proto_bank_statement_match_pb.ListBankAccountsRequest)) {
    throw new Error('Expected argument of type bank_statement_match.ListBankAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bank_statement_match_ListBankAccountsRequest(buffer_arg) {
  return proto_bank_statement_match_pb.ListBankAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bank_statement_match_ListBusinessPartnersRequest(arg) {
  if (!(arg instanceof proto_bank_statement_match_pb.ListBusinessPartnersRequest)) {
    throw new Error('Expected argument of type bank_statement_match.ListBusinessPartnersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bank_statement_match_ListBusinessPartnersRequest(buffer_arg) {
  return proto_bank_statement_match_pb.ListBusinessPartnersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bank_statement_match_ListImportedBankMovementsRequest(arg) {
  if (!(arg instanceof proto_bank_statement_match_pb.ListImportedBankMovementsRequest)) {
    throw new Error('Expected argument of type bank_statement_match.ListImportedBankMovementsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bank_statement_match_ListImportedBankMovementsRequest(buffer_arg) {
  return proto_bank_statement_match_pb.ListImportedBankMovementsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bank_statement_match_ListImportedBankMovementsResponse(arg) {
  if (!(arg instanceof proto_bank_statement_match_pb.ListImportedBankMovementsResponse)) {
    throw new Error('Expected argument of type bank_statement_match.ListImportedBankMovementsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bank_statement_match_ListImportedBankMovementsResponse(buffer_arg) {
  return proto_bank_statement_match_pb.ListImportedBankMovementsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bank_statement_match_ListMatchingMovementsRequest(arg) {
  if (!(arg instanceof proto_bank_statement_match_pb.ListMatchingMovementsRequest)) {
    throw new Error('Expected argument of type bank_statement_match.ListMatchingMovementsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bank_statement_match_ListMatchingMovementsRequest(buffer_arg) {
  return proto_bank_statement_match_pb.ListMatchingMovementsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bank_statement_match_ListMatchingMovementsResponse(arg) {
  if (!(arg instanceof proto_bank_statement_match_pb.ListMatchingMovementsResponse)) {
    throw new Error('Expected argument of type bank_statement_match.ListMatchingMovementsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bank_statement_match_ListMatchingMovementsResponse(buffer_arg) {
  return proto_bank_statement_match_pb.ListMatchingMovementsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bank_statement_match_ListPaymentsRequest(arg) {
  if (!(arg instanceof proto_bank_statement_match_pb.ListPaymentsRequest)) {
    throw new Error('Expected argument of type bank_statement_match.ListPaymentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bank_statement_match_ListPaymentsRequest(buffer_arg) {
  return proto_bank_statement_match_pb.ListPaymentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bank_statement_match_ListPaymentsResponse(arg) {
  if (!(arg instanceof proto_bank_statement_match_pb.ListPaymentsResponse)) {
    throw new Error('Expected argument of type bank_statement_match.ListPaymentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bank_statement_match_ListPaymentsResponse(buffer_arg) {
  return proto_bank_statement_match_pb.ListPaymentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bank_statement_match_ListSearchModesRequest(arg) {
  if (!(arg instanceof proto_bank_statement_match_pb.ListSearchModesRequest)) {
    throw new Error('Expected argument of type bank_statement_match.ListSearchModesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bank_statement_match_ListSearchModesRequest(buffer_arg) {
  return proto_bank_statement_match_pb.ListSearchModesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bank_statement_match_ProcessMovementsRequest(arg) {
  if (!(arg instanceof proto_bank_statement_match_pb.ProcessMovementsRequest)) {
    throw new Error('Expected argument of type bank_statement_match.ProcessMovementsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bank_statement_match_ProcessMovementsRequest(buffer_arg) {
  return proto_bank_statement_match_pb.ProcessMovementsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_bank_statement_match_ProcessMovementsResponse(arg) {
  if (!(arg instanceof proto_bank_statement_match_pb.ProcessMovementsResponse)) {
    throw new Error('Expected argument of type bank_statement_match.ProcessMovementsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_bank_statement_match_ProcessMovementsResponse(buffer_arg) {
  return proto_bank_statement_match_pb.ProcessMovementsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// The Banck Statement Match form service definition.
// - org.spin.apps.form.BankStatementMatchController
// - org.spin.apps.form.VBankStatementMatch
// - org.spin.apps.form.WBankStatementMatch
var BankStatementMatchService = exports.BankStatementMatchService = {
  // lists criteria
listBankAccounts: {
    path: '/bank_statement_match.BankStatementMatch/ListBankAccounts',
    requestStream: false,
    responseStream: false,
    requestType: proto_bank_statement_match_pb.ListBankAccountsRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_bank_statement_match_ListBankAccountsRequest,
    requestDeserialize: deserialize_bank_statement_match_ListBankAccountsRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  listBusinessPartners: {
    path: '/bank_statement_match.BankStatementMatch/ListBusinessPartners',
    requestStream: false,
    responseStream: false,
    requestType: proto_bank_statement_match_pb.ListBusinessPartnersRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_bank_statement_match_ListBusinessPartnersRequest,
    requestDeserialize: deserialize_bank_statement_match_ListBusinessPartnersRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  listSearchModes: {
    path: '/bank_statement_match.BankStatementMatch/ListSearchModes',
    requestStream: false,
    responseStream: false,
    requestType: proto_bank_statement_match_pb.ListSearchModesRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_bank_statement_match_ListSearchModesRequest,
    requestDeserialize: deserialize_bank_statement_match_ListSearchModesRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  // results
listImportedBankMovements: {
    path: '/bank_statement_match.BankStatementMatch/ListImportedBankMovements',
    requestStream: false,
    responseStream: false,
    requestType: proto_bank_statement_match_pb.ListImportedBankMovementsRequest,
    responseType: proto_bank_statement_match_pb.ListImportedBankMovementsResponse,
    requestSerialize: serialize_bank_statement_match_ListImportedBankMovementsRequest,
    requestDeserialize: deserialize_bank_statement_match_ListImportedBankMovementsRequest,
    responseSerialize: serialize_bank_statement_match_ListImportedBankMovementsResponse,
    responseDeserialize: deserialize_bank_statement_match_ListImportedBankMovementsResponse,
  },
  listPayments: {
    path: '/bank_statement_match.BankStatementMatch/ListPayments',
    requestStream: false,
    responseStream: false,
    requestType: proto_bank_statement_match_pb.ListPaymentsRequest,
    responseType: proto_bank_statement_match_pb.ListPaymentsResponse,
    requestSerialize: serialize_bank_statement_match_ListPaymentsRequest,
    requestDeserialize: deserialize_bank_statement_match_ListPaymentsRequest,
    responseSerialize: serialize_bank_statement_match_ListPaymentsResponse,
    responseDeserialize: deserialize_bank_statement_match_ListPaymentsResponse,
  },
  listMatchingMovements: {
    path: '/bank_statement_match.BankStatementMatch/ListMatchingMovements',
    requestStream: false,
    responseStream: false,
    requestType: proto_bank_statement_match_pb.ListMatchingMovementsRequest,
    responseType: proto_bank_statement_match_pb.ListMatchingMovementsResponse,
    requestSerialize: serialize_bank_statement_match_ListMatchingMovementsRequest,
    requestDeserialize: deserialize_bank_statement_match_ListMatchingMovementsRequest,
    responseSerialize: serialize_bank_statement_match_ListMatchingMovementsResponse,
    responseDeserialize: deserialize_bank_statement_match_ListMatchingMovementsResponse,
  },
  // process
processMovements: {
    path: '/bank_statement_match.BankStatementMatch/ProcessMovements',
    requestStream: false,
    responseStream: false,
    requestType: proto_bank_statement_match_pb.ProcessMovementsRequest,
    responseType: proto_bank_statement_match_pb.ProcessMovementsResponse,
    requestSerialize: serialize_bank_statement_match_ProcessMovementsRequest,
    requestDeserialize: deserialize_bank_statement_match_ProcessMovementsRequest,
    responseSerialize: serialize_bank_statement_match_ProcessMovementsResponse,
    responseDeserialize: deserialize_bank_statement_match_ProcessMovementsResponse,
  },
};

exports.BankStatementMatchClient = grpc.makeGenericClientConstructor(BankStatementMatchService);
