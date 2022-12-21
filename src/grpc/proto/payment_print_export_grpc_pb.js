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
var proto_payment_print_export_pb = require('../proto/payment_print_export_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
var proto_business_pb = require('../proto/business_pb.js');
var proto_client_pb = require('../proto/client_pb.js');
var proto_core_functionality_pb = require('../proto/core_functionality_pb.js');

function serialize_data_ListLookupItemsResponse(arg) {
  if (!(arg instanceof proto_business_pb.ListLookupItemsResponse)) {
    throw new Error('Expected argument of type data.ListLookupItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ListLookupItemsResponse(buffer_arg) {
  return proto_business_pb.ListLookupItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_data_ProcessLog(arg) {
  if (!(arg instanceof proto_base_data_type_pb.ProcessLog)) {
    throw new Error('Expected argument of type data.ProcessLog');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_data_ProcessLog(buffer_arg) {
  return proto_base_data_type_pb.ProcessLog.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_ConfirmPrintRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.ConfirmPrintRequest)) {
    throw new Error('Expected argument of type payment_print_export.ConfirmPrintRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_ConfirmPrintRequest(buffer_arg) {
  return proto_payment_print_export_pb.ConfirmPrintRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_CreateEFTPaymentRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.CreateEFTPaymentRequest)) {
    throw new Error('Expected argument of type payment_print_export.CreateEFTPaymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_CreateEFTPaymentRequest(buffer_arg) {
  return proto_payment_print_export_pb.CreateEFTPaymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_ExportPaymentsRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.ExportPaymentsRequest)) {
    throw new Error('Expected argument of type payment_print_export.ExportPaymentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_ExportPaymentsRequest(buffer_arg) {
  return proto_payment_print_export_pb.ExportPaymentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_GetDocumentNoRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.GetDocumentNoRequest)) {
    throw new Error('Expected argument of type payment_print_export.GetDocumentNoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_GetDocumentNoRequest(buffer_arg) {
  return proto_payment_print_export_pb.GetDocumentNoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_GetDocumentNoResponse(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.GetDocumentNoResponse)) {
    throw new Error('Expected argument of type payment_print_export.GetDocumentNoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_GetDocumentNoResponse(buffer_arg) {
  return proto_payment_print_export_pb.GetDocumentNoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_GetPaymentSelectionRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.GetPaymentSelectionRequest)) {
    throw new Error('Expected argument of type payment_print_export.GetPaymentSelectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_GetPaymentSelectionRequest(buffer_arg) {
  return proto_payment_print_export_pb.GetPaymentSelectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_ListPaymentRulesRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.ListPaymentRulesRequest)) {
    throw new Error('Expected argument of type payment_print_export.ListPaymentRulesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_ListPaymentRulesRequest(buffer_arg) {
  return proto_payment_print_export_pb.ListPaymentRulesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_ListPaymentSelectionRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.ListPaymentSelectionRequest)) {
    throw new Error('Expected argument of type payment_print_export.ListPaymentSelectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_ListPaymentSelectionRequest(buffer_arg) {
  return proto_payment_print_export_pb.ListPaymentSelectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_PaymentSelection(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.PaymentSelection)) {
    throw new Error('Expected argument of type payment_print_export.PaymentSelection');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_PaymentSelection(buffer_arg) {
  return proto_payment_print_export_pb.PaymentSelection.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_PrintPaymentsRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.PrintPaymentsRequest)) {
    throw new Error('Expected argument of type payment_print_export.PrintPaymentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_PrintPaymentsRequest(buffer_arg) {
  return proto_payment_print_export_pb.PrintPaymentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_payment_print_export_PrintRemittanceRequest(arg) {
  if (!(arg instanceof proto_payment_print_export_pb.PrintRemittanceRequest)) {
    throw new Error('Expected argument of type payment_print_export.PrintRemittanceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_payment_print_export_PrintRemittanceRequest(buffer_arg) {
  return proto_payment_print_export_pb.PrintRemittanceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The Payment Print/Export form service definition.
// - org.compiere.apps.form.PayPrint
// - org.compiere.apps.form.VPayPrint
// - org.adempiere.webui.apps.form.WPayPrint
var PaymentPrintExportService = exports.PaymentPrintExportService = {
  // List Payment Selection
listPaymentSelection: {
    path: '/payment_print_export.PaymentPrintExport/ListPaymentSelection',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.ListPaymentSelectionRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_payment_print_export_ListPaymentSelectionRequest,
    requestDeserialize: deserialize_payment_print_export_ListPaymentSelectionRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  // Get a Payment Selection info
getPaymentSelection: {
    path: '/payment_print_export.PaymentPrintExport/GetPaymentSelection',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.GetPaymentSelectionRequest,
    responseType: proto_payment_print_export_pb.PaymentSelection,
    requestSerialize: serialize_payment_print_export_GetPaymentSelectionRequest,
    requestDeserialize: deserialize_payment_print_export_GetPaymentSelectionRequest,
    responseSerialize: serialize_payment_print_export_PaymentSelection,
    responseDeserialize: deserialize_payment_print_export_PaymentSelection,
  },
  // List Payment Rules
listPaymentRules: {
    path: '/payment_print_export.PaymentPrintExport/ListPaymentRules',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.ListPaymentRulesRequest,
    responseType: proto_business_pb.ListLookupItemsResponse,
    requestSerialize: serialize_payment_print_export_ListPaymentRulesRequest,
    requestDeserialize: deserialize_payment_print_export_ListPaymentRulesRequest,
    responseSerialize: serialize_data_ListLookupItemsResponse,
    responseDeserialize: deserialize_data_ListLookupItemsResponse,
  },
  // Get Document No
getDocumentNo: {
    path: '/payment_print_export.PaymentPrintExport/GetDocumentNo',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.GetDocumentNoRequest,
    responseType: proto_payment_print_export_pb.GetDocumentNoResponse,
    requestSerialize: serialize_payment_print_export_GetDocumentNoRequest,
    requestDeserialize: deserialize_payment_print_export_GetDocumentNoRequest,
    responseSerialize: serialize_payment_print_export_GetDocumentNoResponse,
    responseDeserialize: deserialize_payment_print_export_GetDocumentNoResponse,
  },
  // Create EFT Payment
createEFTPayment: {
    path: '/payment_print_export.PaymentPrintExport/CreateEFTPayment',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.CreateEFTPaymentRequest,
    responseType: proto_payment_print_export_pb.PaymentSelection,
    requestSerialize: serialize_payment_print_export_CreateEFTPaymentRequest,
    requestDeserialize: deserialize_payment_print_export_CreateEFTPaymentRequest,
    responseSerialize: serialize_payment_print_export_PaymentSelection,
    responseDeserialize: deserialize_payment_print_export_PaymentSelection,
  },
  // Export Payments
exportPayments: {
    path: '/payment_print_export.PaymentPrintExport/ExportPayments',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.ExportPaymentsRequest,
    responseType: proto_base_data_type_pb.ProcessLog,
    requestSerialize: serialize_payment_print_export_ExportPaymentsRequest,
    requestDeserialize: deserialize_payment_print_export_ExportPaymentsRequest,
    responseSerialize: serialize_data_ProcessLog,
    responseDeserialize: deserialize_data_ProcessLog,
  },
  // Print Payments
printPayments: {
    path: '/payment_print_export.PaymentPrintExport/PrintPayments',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.PrintPaymentsRequest,
    responseType: proto_base_data_type_pb.ProcessLog,
    requestSerialize: serialize_payment_print_export_PrintPaymentsRequest,
    requestDeserialize: deserialize_payment_print_export_PrintPaymentsRequest,
    responseSerialize: serialize_data_ProcessLog,
    responseDeserialize: deserialize_data_ProcessLog,
  },
  // Confirm Payment
confirmPrint: {
    path: '/payment_print_export.PaymentPrintExport/ConfirmPrint',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.ConfirmPrintRequest,
    responseType: proto_payment_print_export_pb.PaymentSelection,
    requestSerialize: serialize_payment_print_export_ConfirmPrintRequest,
    requestDeserialize: deserialize_payment_print_export_ConfirmPrintRequest,
    responseSerialize: serialize_payment_print_export_PaymentSelection,
    responseDeserialize: deserialize_payment_print_export_PaymentSelection,
  },
  // Print Remittance
printRemittance: {
    path: '/payment_print_export.PaymentPrintExport/PrintRemittance',
    requestStream: false,
    responseStream: false,
    requestType: proto_payment_print_export_pb.PrintRemittanceRequest,
    responseType: proto_base_data_type_pb.ProcessLog,
    requestSerialize: serialize_payment_print_export_PrintRemittanceRequest,
    requestDeserialize: deserialize_payment_print_export_PrintRemittanceRequest,
    responseSerialize: serialize_data_ProcessLog,
    responseDeserialize: deserialize_data_ProcessLog,
  },
};

exports.PaymentPrintExportClient = grpc.makeGenericClientConstructor(PaymentPrintExportService);
