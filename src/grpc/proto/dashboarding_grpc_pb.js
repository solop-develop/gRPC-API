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
var proto_dashboarding_pb = require('../proto/dashboarding_pb.js');
var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
var proto_client_pb = require('../proto/client_pb.js');

function serialize_dashboarding_Chart(arg) {
  if (!(arg instanceof proto_dashboarding_pb.Chart)) {
    throw new Error('Expected argument of type dashboarding.Chart');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_Chart(buffer_arg) {
  return proto_dashboarding_pb.Chart.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_GetChartRequest(arg) {
  if (!(arg instanceof proto_dashboarding_pb.GetChartRequest)) {
    throw new Error('Expected argument of type dashboarding.GetChartRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_GetChartRequest(buffer_arg) {
  return proto_dashboarding_pb.GetChartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_ListDashboardsRequest(arg) {
  if (!(arg instanceof proto_dashboarding_pb.ListDashboardsRequest)) {
    throw new Error('Expected argument of type dashboarding.ListDashboardsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_ListDashboardsRequest(buffer_arg) {
  return proto_dashboarding_pb.ListDashboardsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_ListDashboardsResponse(arg) {
  if (!(arg instanceof proto_dashboarding_pb.ListDashboardsResponse)) {
    throw new Error('Expected argument of type dashboarding.ListDashboardsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_ListDashboardsResponse(buffer_arg) {
  return proto_dashboarding_pb.ListDashboardsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_ListFavoritesRequest(arg) {
  if (!(arg instanceof proto_dashboarding_pb.ListFavoritesRequest)) {
    throw new Error('Expected argument of type dashboarding.ListFavoritesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_ListFavoritesRequest(buffer_arg) {
  return proto_dashboarding_pb.ListFavoritesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_ListFavoritesResponse(arg) {
  if (!(arg instanceof proto_dashboarding_pb.ListFavoritesResponse)) {
    throw new Error('Expected argument of type dashboarding.ListFavoritesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_ListFavoritesResponse(buffer_arg) {
  return proto_dashboarding_pb.ListFavoritesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_ListPendingDocumentsRequest(arg) {
  if (!(arg instanceof proto_dashboarding_pb.ListPendingDocumentsRequest)) {
    throw new Error('Expected argument of type dashboarding.ListPendingDocumentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_ListPendingDocumentsRequest(buffer_arg) {
  return proto_dashboarding_pb.ListPendingDocumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dashboarding_ListPendingDocumentsResponse(arg) {
  if (!(arg instanceof proto_dashboarding_pb.ListPendingDocumentsResponse)) {
    throw new Error('Expected argument of type dashboarding.ListPendingDocumentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dashboarding_ListPendingDocumentsResponse(buffer_arg) {
  return proto_dashboarding_pb.ListPendingDocumentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// 	All related to Dashboarding
var DashboardingService = exports.DashboardingService = {
  // 	Request Dashboards Content Edit
listDashboards: {
    path: '/dashboarding.Dashboarding/ListDashboards',
    requestStream: false,
    responseStream: false,
    requestType: proto_dashboarding_pb.ListDashboardsRequest,
    responseType: proto_dashboarding_pb.ListDashboardsResponse,
    requestSerialize: serialize_dashboarding_ListDashboardsRequest,
    requestDeserialize: deserialize_dashboarding_ListDashboardsRequest,
    responseSerialize: serialize_dashboarding_ListDashboardsResponse,
    responseDeserialize: deserialize_dashboarding_ListDashboardsResponse,
  },
  // 	Request Favorites
listFavorites: {
    path: '/dashboarding.Dashboarding/ListFavorites',
    requestStream: false,
    responseStream: false,
    requestType: proto_dashboarding_pb.ListFavoritesRequest,
    responseType: proto_dashboarding_pb.ListFavoritesResponse,
    requestSerialize: serialize_dashboarding_ListFavoritesRequest,
    requestDeserialize: deserialize_dashboarding_ListFavoritesRequest,
    responseSerialize: serialize_dashboarding_ListFavoritesResponse,
    responseDeserialize: deserialize_dashboarding_ListFavoritesResponse,
  },
  // 	Request Document Statuses
listPendingDocuments: {
    path: '/dashboarding.Dashboarding/ListPendingDocuments',
    requestStream: false,
    responseStream: false,
    requestType: proto_dashboarding_pb.ListPendingDocumentsRequest,
    responseType: proto_dashboarding_pb.ListPendingDocumentsResponse,
    requestSerialize: serialize_dashboarding_ListPendingDocumentsRequest,
    requestDeserialize: deserialize_dashboarding_ListPendingDocumentsRequest,
    responseSerialize: serialize_dashboarding_ListPendingDocumentsResponse,
    responseDeserialize: deserialize_dashboarding_ListPendingDocumentsResponse,
  },
  // 	Get Chart
getChart: {
    path: '/dashboarding.Dashboarding/GetChart',
    requestStream: false,
    responseStream: false,
    requestType: proto_dashboarding_pb.GetChartRequest,
    responseType: proto_dashboarding_pb.Chart,
    requestSerialize: serialize_dashboarding_GetChartRequest,
    requestDeserialize: deserialize_dashboarding_GetChartRequest,
    responseSerialize: serialize_dashboarding_Chart,
    responseDeserialize: deserialize_dashboarding_Chart,
  },
};

exports.DashboardingClient = grpc.makeGenericClientConstructor(DashboardingService);