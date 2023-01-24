/*************************************************************************************
 * Product: ADempiere gRPC Workflow Client                                           *
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
 * along with this program. If not, see <https://www.gnu.org/licenses/>.             *
 ************************************************************************************/

const { createClientRequest } = require('@adempiere/grpc-api/lib/clientRequest');
const { getValidId } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

class Workflow {

  /**
   * File on generated stub
   */
  stubFile = require('@adempiere/grpc-api/src/grpc/proto/workflow_pb.js');

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

    this.initWorkflowService();
    console.log('ADempiere Workflow Client Started');
  }

  // Init connection
  initWorkflowService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('@adempiere/grpc-api/src/grpc/proto/workflow_grpc_pb.js');
    this.workflow = new services.WorkflowClient(this.businessHost, grpc.credentials.createInsecure());
  }

  // Get Workflow Service
  getWorkflowService() {
    return this.workflow;
  }

  // Get Workflow
  getWorkflow({
    token,
    id,
    uuid,
    language
  }, callback) {
    const { WorkflowDefinitionRequest } = this.stubFile;
    const request = new WorkflowDefinitionRequest();

    request.setId(id);
    request.setUuid(uuid);
    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getWorkflowService().getWorkflow(request, callback);
  }

  //  List workflow
  listWorkflows({
    token,
    tableName,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListWorkflowsRequest } = this.stubFile
    const request = new ListWorkflowsRequest()
    request.setTableName(tableName)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(
      createClientRequest({ token, language })
    );
    this.getWorkflowService().listWorkflows(request, callback)
  }

  //  List workflow
  listDocumentActions({
    token,
    tableName,
    id,
    uuid,
    documentStatus,
    documentAction,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListDocumentActionsRequest } = this.stubFile
    const request = new ListDocumentActionsRequest()
    request.setTableName(tableName)
    request.setId(id)
    request.setUuid(uuid)
    request.setDocumentStatus(documentStatus)
    request.setDocumentAction(documentAction)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(
      createClientRequest({ token, language })
    );
    this.getWorkflowService().listDocumentActions(request, callback)
  }

  //  List Document Statuses
  listDocumentStatuses({
    token,
    tableName,
    id,
    uuid,
    documentStatus,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListDocumentStatusesRequest } = this.stubFile
    const request = new ListDocumentStatusesRequest()
    request.setTableName(tableName)
    request.setId(id)
    request.setUuid(uuid)
    request.setDocumentStatus(documentStatus)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(
      createClientRequest({ token, language })
    )
    this.getWorkflowService().listDocumentStatuses(request, callback)
  }

  //  List workflow Activities
  listWorkflowActivities({
    token,
    userUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListWorkflowActivitiesRequest } = this.stubFile
    const request = new ListWorkflowActivitiesRequest()

    request.setUserUuid(userUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(
      createClientRequest({ token, language })
    );
    this.getWorkflowService().listWorkflowActivities(request, callback)
  }

  // Run Document Action
  runDocumentAction({
    token,
    id,
    uuid,
    tableName,
    documentAction,
    language
  }, callback) {
    const { RunDocumentActionRequest } = this.stubFile
    const request = new RunDocumentActionRequest();

    request.setId(id);
    request.setUuid(uuid);
    request.setTableName(tableName);
    request.setDocumentAction(documentAction);
    request.setClientRequest(
      createClientRequest({ token, language })
    );
    this.getWorkflowService().runDocumentAction(request, callback)
  }

  /**
   * Process workflow activity
   * @param {number} id
   * @param {string} uuid
   * @param {string} message
   * @param {boolean} isApproved
   */
  process({
    token,
    id,
    uuid,
    message,
    isApproved,
    language
  }, callback) {
    const { ProcessRequest } = this.stubFile
    const request = new ProcessRequest();

    request.setId(
      getValidId(id)
    );
    request.setUuid(uuid);
    request.setMessage(message);
    request.setIsApproved(isApproved);

    request.setClientRequest(
      createClientRequest({ token, language })
    );
    this.getWorkflowService().process(request, callback)
  }

  /**
   * Forward workflow activity
   * @param {number} id
   * @param {string} uuid
   * @param {string} message
   * @param {boolean} isApproved
   */
  forward({
    token,
    id,
    uuid,
    message,
    userId,
    userUuid,
    language
  }, callback) {
    const { ForwardRequest } = this.stubFile
    const request = new ForwardRequest();

    request.setId(
      getValidId(id)
    );
    request.setUuid(uuid);
    request.setMessage(message);
    request.setUserId(
      getValidId(userId)
    );
    request.setUserUuid(userUuid);

    request.setClientRequest(
      createClientRequest({ token, language })
    );
    this.getWorkflowService().forward(request, callback)
  }
}

module.exports = Workflow;
