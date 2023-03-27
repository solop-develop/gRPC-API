// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// ************************************************************************************
// Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                      *
// Contributor(s): Yamel Senih ysenih@erpya.com                                      *
// This program is free software: you can redistribute it and/or modify              *
// it under the terms of the GNU General Public License as published by              *
// the Free Software Foundation, either version 2 of the License, or                 *
// (at your option) any later version.                                               *
// This program is distributed in the hope that it will be useful,                   *
// but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                      *
// GNU General Public License for more details.                                      *
// You should have received a copy of the GNU General Public License                 *
// along with this program. If not, see <https://www.gnu.org/licenses/>.             *
// **********************************************************************************
'use strict';
var grpc = require('@grpc/grpc-js');
var proto_access_pb = require('../proto/access_pb.js');

function serialize_access_ChangeRoleRequest(arg) {
  if (!(arg instanceof proto_access_pb.ChangeRoleRequest)) {
    throw new Error('Expected argument of type access.ChangeRoleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_access_ChangeRoleRequest(buffer_arg) {
  return proto_access_pb.ChangeRoleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_access_ListRolesRequest(arg) {
  if (!(arg instanceof proto_access_pb.ListRolesRequest)) {
    throw new Error('Expected argument of type access.ListRolesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_access_ListRolesRequest(buffer_arg) {
  return proto_access_pb.ListRolesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_access_ListRolesResponse(arg) {
  if (!(arg instanceof proto_access_pb.ListRolesResponse)) {
    throw new Error('Expected argument of type access.ListRolesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_access_ListRolesResponse(buffer_arg) {
  return proto_access_pb.ListRolesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_access_LoginRequest(arg) {
  if (!(arg instanceof proto_access_pb.LoginRequest)) {
    throw new Error('Expected argument of type access.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_access_LoginRequest(buffer_arg) {
  return proto_access_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_access_LogoutRequest(arg) {
  if (!(arg instanceof proto_access_pb.LogoutRequest)) {
    throw new Error('Expected argument of type access.LogoutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_access_LogoutRequest(buffer_arg) {
  return proto_access_pb.LogoutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_access_Menu(arg) {
  if (!(arg instanceof proto_access_pb.Menu)) {
    throw new Error('Expected argument of type access.Menu');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_access_Menu(buffer_arg) {
  return proto_access_pb.Menu.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_access_MenuRequest(arg) {
  if (!(arg instanceof proto_access_pb.MenuRequest)) {
    throw new Error('Expected argument of type access.MenuRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_access_MenuRequest(buffer_arg) {
  return proto_access_pb.MenuRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_access_Session(arg) {
  if (!(arg instanceof proto_access_pb.Session)) {
    throw new Error('Expected argument of type access.Session');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_access_Session(buffer_arg) {
  return proto_access_pb.Session.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_access_SessionInfo(arg) {
  if (!(arg instanceof proto_access_pb.SessionInfo)) {
    throw new Error('Expected argument of type access.SessionInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_access_SessionInfo(buffer_arg) {
  return proto_access_pb.SessionInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_access_SessionInfoRequest(arg) {
  if (!(arg instanceof proto_access_pb.SessionInfoRequest)) {
    throw new Error('Expected argument of type access.SessionInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_access_SessionInfoRequest(buffer_arg) {
  return proto_access_pb.SessionInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_access_UserInfo(arg) {
  if (!(arg instanceof proto_access_pb.UserInfo)) {
    throw new Error('Expected argument of type access.UserInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_access_UserInfo(buffer_arg) {
  return proto_access_pb.UserInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_access_UserInfoRequest(arg) {
  if (!(arg instanceof proto_access_pb.UserInfoRequest)) {
    throw new Error('Expected argument of type access.UserInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_access_UserInfoRequest(buffer_arg) {
  return proto_access_pb.UserInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var SecurityService = exports.SecurityService = {
  // Request login from user
runLogin: {
    path: '/access.Security/RunLogin',
    requestStream: false,
    responseStream: false,
    requestType: proto_access_pb.LoginRequest,
    responseType: proto_access_pb.Session,
    requestSerialize: serialize_access_LoginRequest,
    requestDeserialize: deserialize_access_LoginRequest,
    responseSerialize: serialize_access_Session,
    responseDeserialize: deserialize_access_Session,
  },
  // Request a Role from uuid
runLogout: {
    path: '/access.Security/RunLogout',
    requestStream: false,
    responseStream: false,
    requestType: proto_access_pb.LogoutRequest,
    responseType: proto_access_pb.Session,
    requestSerialize: serialize_access_LogoutRequest,
    requestDeserialize: deserialize_access_LogoutRequest,
    responseSerialize: serialize_access_Session,
    responseDeserialize: deserialize_access_Session,
  },
  // Request user roles from SessionInfo
getUserInfo: {
    path: '/access.Security/GetUserInfo',
    requestStream: false,
    responseStream: false,
    requestType: proto_access_pb.UserInfoRequest,
    responseType: proto_access_pb.UserInfo,
    requestSerialize: serialize_access_UserInfoRequest,
    requestDeserialize: deserialize_access_UserInfoRequest,
    responseSerialize: serialize_access_UserInfo,
    responseDeserialize: deserialize_access_UserInfo,
  },
  // Request Menu from Parent UUID
getMenu: {
    path: '/access.Security/GetMenu',
    requestStream: false,
    responseStream: false,
    requestType: proto_access_pb.MenuRequest,
    responseType: proto_access_pb.Menu,
    requestSerialize: serialize_access_MenuRequest,
    requestDeserialize: deserialize_access_MenuRequest,
    responseSerialize: serialize_access_Menu,
    responseDeserialize: deserialize_access_Menu,
  },
  // Request change role
runChangeRole: {
    path: '/access.Security/RunChangeRole',
    requestStream: false,
    responseStream: false,
    requestType: proto_access_pb.ChangeRoleRequest,
    responseType: proto_access_pb.Session,
    requestSerialize: serialize_access_ChangeRoleRequest,
    requestDeserialize: deserialize_access_ChangeRoleRequest,
    responseSerialize: serialize_access_Session,
    responseDeserialize: deserialize_access_Session,
  },
  // Request session
getSessionInfo: {
    path: '/access.Security/GetSessionInfo',
    requestStream: false,
    responseStream: false,
    requestType: proto_access_pb.SessionInfoRequest,
    responseType: proto_access_pb.SessionInfo,
    requestSerialize: serialize_access_SessionInfoRequest,
    requestDeserialize: deserialize_access_SessionInfoRequest,
    responseSerialize: serialize_access_SessionInfo,
    responseDeserialize: deserialize_access_SessionInfo,
  },
  // List Roles
listRoles: {
    path: '/access.Security/ListRoles',
    requestStream: false,
    responseStream: false,
    requestType: proto_access_pb.ListRolesRequest,
    responseType: proto_access_pb.ListRolesResponse,
    requestSerialize: serialize_access_ListRolesRequest,
    requestDeserialize: deserialize_access_ListRolesRequest,
    responseSerialize: serialize_access_ListRolesResponse,
    responseDeserialize: deserialize_access_ListRolesResponse,
  },
};

exports.SecurityClient = grpc.makeGenericClientConstructor(SecurityService);
