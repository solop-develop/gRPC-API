/*************************************************************************************
 * Product: ADempiere gRPC Issue Management Client                                   *
 * Copyright (C) 2012-2022 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                      *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.             *
 ************************************************************************************/

const { createClientRequest } = require('@adempiere/grpc-api/lib/clientRequest');
const { getValidId } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

class IssueManagement {

  /**
   * File on generated stub
   */
  stubFile = require('@adempiere/grpc-api/src/grpc/proto/issue_management_pb.js');

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

    this.initIssueManagementService();
    console.log('ADempiere IssueManagement Client Started');
  }

  // Init connection
  initIssueManagementService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('@adempiere/grpc-api/src/grpc/proto/issue_management_grpc_pb');
    this.issue_management = new services.IssueManagementClient(this.businessHost, grpc.credentials.createInsecure());
  }

  // Get IssueManagement Service
  getIssueManagementService() {
    return this.issue_management;
  }

  /**
   * List Request Types
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {string} language
   * @param {string} token
   */
  listRequestTypes({
    token,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListRequestTypesRequest } = this.stubFile;
    const request = new ListRequestTypesRequest();

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getIssueManagementService().listRequestTypes(request, callback);
  }


  /**
   * List Request Types
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {string} language
   * @param {string} token
   */
  listSalesRepresentatives({
    token,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListSalesRepresentativesRequest } = this.stubFile;
    const request = new ListSalesRepresentativesRequest();

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getIssueManagementService().listSalesRepresentatives(request, callback);
  }


  /**
   * Exists Chat Entries
   * @param {string} tableName
   * @param {number} recordId
   * @param {string} recordUuid
   * @param {string} language
   * @param {string} token
   */
  existsIssues({
    token,
    // DSL
    tableName,
    recordId,
    recordUuid,
    language
  }, callback) {
    const { ExistsIssuesRequest } = this.stubFile;
    const request = new ExistsIssuesRequest();

    request.setTableName(tableName);
    request.setRecordId(
      getValidId(recordId)
    );
    request.setRecordUuid(recordUuid);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getIssueManagementService().existsIssues(request, callback);
  }

  /**
   * List Issues
   * @param {string} tableName
   * @param {number} recordId
   * @param {string} recordUuid
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {string} language
   * @param {string} token
   */
  listIssues({
    token,
    tableName,
    recordId,
    recordUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListIssuesRequest } = this.stubFile;
    const request = new ListIssuesRequest();

    request.setTableName(tableName);
    request.setRecordId(
      getValidId(recordId)
    );
    request.setRecordUuid(recordUuid);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getIssueManagementService().listIssues(request, callback);
  }

  /**
   * Create Issue
   * @param {string} tableName
   * @param {number} recordId
   * @param {string} recordUuid
   * @param {string} subject
   * @param {string} summary
   * @param {number} requestTypeId
   * @param {string} requestTypeUuid
   * @param {string} language
   * @param {string} token
   */
  createIssue({
    token,
    tableName,
    recordId,
    recordUuid,
    subject,
    summary,
    requestTypeId,
    requestTypeUuid,
    salesRepresentativeId,
    salesRepresentativeUuid,
    language
  }, callback) {
    const { CreateIssueRequest } = this.stubFile;
    const request = new CreateIssueRequest()

    request.setTableName(tableName);
    request.setRecordId(
      getValidId(recordId)
    );
    request.setRecordUuid(recordUuid);

    request.setSubject(subject);
    request.setSummary(summary);
    request.setRequestTypeId(
      getValidId(requestTypeId)
    );
    request.setRequestTypeUuid(requestTypeUuid);
    request.setSalesRepresentativeId(
      getValidId(salesRepresentativeId)
    );
    request.setSalesRepresentativeUuid(salesRepresentativeUuid);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getIssueManagementService().createIssue(request, callback);
  }

  /**
   * Update Issue
   * @param {number} id
   * @param {string} uuid
   * @param {string} subject
   * @param {string} summary
   * @param {number} requestTypeId
   * @param {string} requestTypeUuid
   * @param {string} language
   * @param {string} token
   */
  updateIssue({
    token,
    id,
    uuid,
    subject,
    summary,
    requestTypeId,
    requestTypeUuid,
    language
  }, callback) {
    const { UpdateIssueRequest } = this.stubFile;
    const request = new UpdateIssueRequest()

    request.setUuid(uuid);
    request.setId(
      getValidId(id)
    );
    
    request.setSubject(subject);
    request.setSummary(summary);
    request.setRequestTypeId(
      getValidId(requestTypeId)
    );
    request.setRequestTypeUuid(requestTypeUuid);
    request.setSalesRepresentativeId(
      getValidId(salesRepresentativeId)
    );
    request.setSalesRepresentativeUuid(salesRepresentativeUuid);

    request.setClientRequest(
      createClientRequest({ token, language })
    )

    this.getIssueManagementService().updateIssue(request, callback)
  }

  /**
   * Delete Issue
   * @param {number} id
   * @param {string} uuid
   * @param {string} language
   * @param {string} token
   */
  deleteIssue({
    token,
    id,
    uuid,
    language
  }, callback) {
    const { DeleteIssueRequest } = this.stubFile;
    const request = new DeleteIssueRequest()

    request.setUuid(uuid);
    request.setId(
      getValidId(id)
    );

    request.setClientRequest(
      createClientRequest({ token, language })
    )

    this.getIssueManagementService().deleteIssue(request, callback)
  }


  /**
   * List Issue Comments
   * @param {number} issueId
   * @param {string} issueUuid
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {string} language
   * @param {string} token
   */
  listIssueComments({
    token,
    issueId,
    issueUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListIssueCommentsRequest } = this.stubFile;
    const request = new ListIssueCommentsRequest();

    request.setIssueId(
      getValidId(issueId)
    );
    request.setIssueUuid(issueUuid);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getIssueManagementService().listIssueComments(request, callback);
  }

  /**
   * Create Issue Comment
   * @param {number} issueId
   * @param {string} issueUuid
   * @param {string} result
   * @param {date} dateNextAction
   */
  createIssueComment({
    token,
    issueId,
    issueUuid,
    result,
    dateNextAction,
    language
  }, callback) {
    const { CreateIssueCommentRequest } = this.stubFile;
    const request = new CreateIssueCommentRequest();

    request.setIssueId(
      getValidId(issueId)
    );
    request.setIssuedUuid(issueUuid);

    request.setDateNextAction(dateNextAction);
    request.setResult(result);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getIssueManagementService().createIssueComment(request, callback);
  }

  /**
   * Update Issue Comment
   * @param {number} id
   * @param {string} uuid
   * @param {string} result
   * @param {date} dateNextAction
   * @param {string} language
   * @param {string} token
   */
  updateIssueComment({
    token,
    id,
    uuid,
    result,
    dateNextAction,
    language
  }, callback) {
    const { UpdateIssueCommentRequest } = this.stubFile;
    const request = new UpdateIssueCommentRequest();

    request.setUuid(uuid);
    request.setId(
      getValidId(id)
    );

    request.setResult(result);
    request.setDateNextAction(dateNextAction);

    request.setClientRequest(
      createClientRequest({ token, language })
    )

    this.getIssueManagementService().updateIssueComment(request, callback)
  }

  /**
   * Delete Issue Comment
   * @param {number} id
   * @param {string} uuid
   * @param {string} language
   * @param {string} token
   */
  deleteIssueComment({
    token,
    id,
    uuid,
    language
  }, callback) {
    const { DeleteIssueCommentRequest } = this.stubFile;
    const request = new DeleteIssueCommentRequest();

    request.setUuid(uuid);
    request.setId(
      getValidId(id)
    );

    request.setClientRequest(
      createClientRequest({ token, language })
    )

    this.getIssueManagementService().deleteIssueComment(request, callback)
  }

}

module.exports = IssueManagement;
