/*************************************************************************************
 * Product: ADempiere gRPC Issue Management Client Convert Util                      *
 * Copyright (C) 2012-2020 E.R.P. Consultores y Asociados, C.A.                      *
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

function getSalesRepresentativeFromGRPC(salesRepresentativeToConvert) {
  if (!salesRepresentativeToConvert) {
    return undefined;
  }
  return {
    id: salesRepresentativeToConvert.getId(),
    uuid: salesRepresentativeToConvert.getUuid(),
    name: salesRepresentativeToConvert.getName(),
    description: salesRepresentativeToConvert.getDescription()
  };
}

function getRequestTypeFromGRPC(requestTypeToConvert) {
  if (!requestTypeToConvert) {
    return undefined;
  }
  return {
    id: requestTypeToConvert.getId(),
    uuid: requestTypeToConvert.getUuid(),
    name: requestTypeToConvert.getName(),
    description: requestTypeToConvert.getDescription()
  };
}

function getPriorityFromGRPC(priorityToConvert) {
  if (!priorityToConvert) {
    return undefined;
  }
  return {
    id: priorityToConvert.getId(),
    uuid: priorityToConvert.getUuid(),
    value: priorityToConvert.getValue(),
    name: priorityToConvert.getName(),
    description: priorityToConvert.getDescription()
  };
}

function getStatusFromGRPC(statusToConvert) {
  if (!statusToConvert) {
    return undefined;
  }
  return {
    id: statusToConvert.getId(),
    uuid: statusToConvert.getUuid(),
    name: statusToConvert.getName(),
    description: statusToConvert.getDescription()
  };
}

function getIssueFromGRPC(issueToConvert) {
  if (!issueToConvert) {
    return undefined;
  }
  return {
    id: issueToConvert.getId(),
    uuid: issueToConvert.getUuid(),
    document_no: issueToConvert.getDocumentNo(),
    subject: issueToConvert.getSubject(),
    summary: issueToConvert.getSummary(),
    created: issueToConvert.getCreated(),
    last_updated: issueToConvert.getLastUpdated(),
    request_type: getRequestTypeFromGRPC(
      issueToConvert.getRequestType()
    ),
    user_id: issueToConvert.getUserId(),
    user_uuid: issueToConvert.getUserUuid(),
    user_name: issueToConvert.getUserName(),
    sales_representative: getSalesRepresentativeFromGRPC(
      issueToConvert.getSalesRepresentative()
    ),
    status: getStatusFromGRPC(
      issueToConvert.getStatus()
    ),
    priority: getPriorityFromGRPC(
      issueToConvert.getPriority()
    )
  };
}

function getIssueCommentFromGRPC(issueCommentToConvert) {
  if (!issueCommentToConvert) {
    return undefined;
  }
  return {
    id: issueCommentToConvert.getId(),
    uuid: issueCommentToConvert.getUuid(),
    result: issueCommentToConvert.getResult(),
    created: issueCommentToConvert.getCreated(),
    date_next_action: issueCommentToConvert.getDateNextAction(),
    user_id: issueCommentToConvert.getUserId(),
    user_uuid: issueCommentToConvert.getUserUuid(),
    user_name: issueCommentToConvert.getUserName()
  };
}

module.exports = {
  getSalesRepresentativeFromGRPC,
  getRequestTypeFromGRPC,
  getPriorityFromGRPC,
  getStatusFromGRPC,
  getIssueFromGRPC,
  getIssueCommentFromGRPC
};
