/*************************************************************************************
 * Logs: ADempiere gRPC Dictionary Client                                         *
 * Copyright (C) 2012-2022 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                     *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.            *
 ************************************************************************************/

const { createClientRequest } = require('../../lib/clientRequest')

class Logs {

  /**
   * Constructor, No authentication required
   * @param {string} host
   * @param {string} version
   * @param {string} language
   */
  constructor(config) {
    if (config) {
      const adempiereConfig = config.adempiereApi.api;
      this.businessHost = adempiereConfig.businessHost;
      this.version = adempiereConfig.version;
      this.language = adempiereConfig.language;
      this.token = adempiereConfig.token;
    }

    this.initLogsService();
    console.log('ADempiere Logs Client Started');
  }

  // Init connection
  initLogsService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('../grpc/proto/logs_grpc_pb');
    this.logs = new services.LogsClient(this.businessHost, grpc.credentials.createInsecure());
  }

  // Get Logs Service
  getLogsService() {
    return this.logs;
  }

  //  List logs
  listLogs({
    token,
    tableName,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListLogsRequest } = require('../grpc/proto/logs_pb.js')
    const request = new ListLogsRequest()
    request.setTableName(tableName)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(
      this.createClientRequest({ token, language })
    );
    this.getLogsService().listLogs(request, callback)
  }

  //  List process logs
  listProcessLogs({
    token,
    tableName,
    uuid,
    id,
    userUuid,
    instanceUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListProcessLogsRequest } = require('../grpc/proto/logs_pb.js')
    const request = new ListProcessLogsRequest()

    request.setTableName(tableName)
    request.setUuid(uuid)
    request.setId(id)
    request.setUserUuid(userUuid)
    request.setInstanceUuid(instanceUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(
      createClientRequest({ token, language })
    )

    this.getLogService().listProcessLogs(request, callback)
  }

  //  List record logs
  listEntityLogs({
    token,
    tableName,
    uuid,
    id,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListEntityLogsRequest } = require('../grpc/proto/logs_pb.js')
    const request = new ListEntityLogsRequest()

    request.setTableName(tableName)
    request.setUuid(uuid)
    request.setId(id)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(
      createClientRequest({ token, language })
    )

    this.getLogService().listEntityLogs(request, callback)
  }

  //  List entity chats
  listEntityChats({
    token,
    tableName,
    uuid,
    id,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListEntityChatsRequest } = require('../grpc/proto/logs_pb.js')
    const request = new ListEntityChatsRequest()

    request.setTableName(tableName)
    request.setUuid(uuid)
    request.setId(id)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(
      createClientRequest({ token, language })
    )

    this.getLogService().listEntityChats(request, callback)
  }

  //  List chats entries
  listChatEntries({
    token,
    id,
    uuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListChatEntriesRequest } = require('../grpc/proto/logs_pb.js')
    const request = new ListChatEntriesRequest()

    request.setUuid(uuid)
    request.setId(id)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(
      createClientRequest({ token, language })
    )

    this.getLogService().listChatEntries(request, callback)
  }

  //  List workflow logs
  listWorkflowLogs({
    token,
    tableName,
    uuid,
    id,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListWorkflowLogsRequest } = require('../grpc/proto/logs_pb.js')
    const request = new ListWorkflowLogsRequest()

    request.setTableName(tableName)
    request.setUuid(uuid)
    request.setId(id)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(
      createClientRequest({ token, language })
    )

    this.getLogService().listWorkflowLogs(request, callback)
  }

  //  List recent items
  listRecentItems({
    token,
    userUuid,
    roleUuid,
    currentSession,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListRecentItemsRequest } = require('../grpc/proto/logs_pb.js')
    const request = new ListRecentItemsRequest()

    request.setUserUuid(userUuid)
    request.setRoleUuid(roleUuid)
    request.setCurrentSession(currentSession)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(
      createClientRequest({ token, language })
    )

    this.getLogService().listRecentItems(request, callback)
  }

}

module.exports = Logs;
