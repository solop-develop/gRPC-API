/*************************************************************************************
 * Product: ADempiere gRPC Time Control Client                                       *
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
const { isEmptyValue } = require('@adempiere/grpc-api/lib/convertValues.js');

class TimeControl {

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

    this.initTimeControlService();
    console.log('ADempiere Time Control Client Started');
  }

  // Init connection
  initTimeControlService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('@adempiere/grpc-api/src/grpc/proto/time_control_grpc_pb');
    this.timeControl = new services.TimeControlClient(
      this.businessHost, grpc.credentials.createInsecure()
    );
  }

  // Get Time Control Service
  getTimeControlService() {
    return this.timeControl;
  }

  createResourceAssignment({
    token,
    // DSL
    resourceTypeId,
    resourceTypeUuid,
    name,
    description,
    //
    language
  }, callback) {
    const {
      CreateResourceAssignmentRequest
    } = require('@adempiere/grpc-api/src/grpc/proto/time_control_pb.js');
    const request = new CreateResourceAssignmentRequest();

    if (!isEmptyValue(resourceTypeId) && !Number.isNaN(resourceTypeId)) {
      request.setResourceTypeId(Number(resourceTypeId));
    }
    request.setResourceTypeUuid(resourceTypeUuid);
    request.setName(name);
    request.setDescription(description);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getTimeControlService().createResourceAssignment(request, callback);
  }

  listResourcesAssignment({
    token,
    // DSL
    resourceTypeId,
    resourceTypeUuid,
    name,
    description,
    confirmed,
    isWaitingForOrdered = false,
    dateFrom,
    dateTo,
    // Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const {
      ListResourcesAssignmentRequest
    } = require('@adempiere/grpc-api/src/grpc/proto/time_control_pb.js');
    const request = new ListResourcesAssignmentRequest();

    if (!isEmptyValue(resourceTypeId) && !Number.isNaN(resourceTypeId)) {
      request.setResourceTypeId(Number(resourceTypeId));
    }

    request.setResourceTypeUuid(resourceTypeUuid);
    request.setName(name);
    request.setDescription(description);
    request.setConfirmed(confirmed);
    request.setIsWaitingForOrdered(isWaitingForOrdered);
    request.setDateFrom(dateFrom);
    request.setDateTo(dateTo);

    if (!isEmptyValue(pageSize) && !Number.isNaN(pageSize)) {
      request.setPageSize(Number(pageSize));
    }
    request.setPageToken(pageToken);
    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getTimeControlService().listResourcesAssignment(request, callback);
  }

  updateResourceAssignment({
    token,
    // DSL
    id,
    uuid,
    name,
    description,
    //
    language
  }, callback) {
    const {
      UpdateResourceAssignmentRequest
    } = require('@adempiere/grpc-api/src/grpc/proto/time_control_pb.js');
    const request = new UpdateResourceAssignmentRequest();

    if (!isEmptyValue(id) && !Number.isNaN(id)) {
      request.setId(Number(id));
    }
    request.setUuid(uuid);
    request.setName(name);
    request.setDescription(description);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getTimeControlService().updateResourceAssignment(request, callback);
  }

  deleteResourceAssignment({
    token,
    // DSL
    id,
    uuid,
    //
    language
  }, callback) {
    const {
      DeleteResourceAssignmentRequest
    } = require('@adempiere/grpc-api/src/grpc/proto/time_control_pb.js');
    const request = new DeleteResourceAssignmentRequest();

    if (!isEmptyValue(id) && !Number.isNaN(id)) {
      request.setId(Number(id));
    }
    request.setUuid(uuid);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getTimeControlService().deleteResourceAssignment(request, callback);
  }

  confirmResourceAssignment({
    token,
    // DSL
    id,
    uuid,
    //
    language
  }, callback) {
    const {
      ConfirmResourceAssignmentRequest
    } = require('@adempiere/grpc-api/src/grpc/proto/time_control_pb.js');
    const request = new ConfirmResourceAssignmentRequest();

    if (!isEmptyValue(id) && !Number.isNaN(id)) {
      request.setId(Number(id));
    }
    request.setUuid(uuid);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getTimeControlService().confirmResourceAssignment(request, callback);
  }

}

module.exports = TimeControl;