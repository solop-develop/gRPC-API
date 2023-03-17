/*************************************************************************************
 * Product: ADempiere gRPC Time Record Client                                        *
 * Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                      *
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
const { getMetadata } = require('@adempiere/grpc-api/src/utils/metadata.js');
const { isEmptyValue, getValidId } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

class TimeRecord {

  /**
   * File on generated stub
   */
  stubFile = require('@adempiere/grpc-api/src/grpc/proto/time_record_pb.js');

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

    this.initTimeRecordService();
    console.log('ADempiere Time Record Client Started');
  }

  // Init connection
  initTimeRecordService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('@adempiere/grpc-api/src/grpc/proto/time_record_grpc_pb');
    this.timeRecord = new services.TimeRecordClient(
      this.businessHost, grpc.credentials.createInsecure()
    );
  }

  // Get Time Record Service
  getTimeRecordService() {
    return this.timeRecord;
  }

  /**
   * List Issues (As Requests)
   * @param {string} searhValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listIssues({
    token,
    // DSL
    searhValue,
    // Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const {
      ListIssuesRequest
    } = this.stubFile;
    const request = new ListIssuesRequest();

    request.setSearchValue(searhValue);
    if (!isEmptyValue(pageSize) && !Number.isNaN(pageSize)) {
      request.setPageSize(Number(pageSize));
    }
    request.setPageToken(pageToken);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    const metadata = getMetadata({
      token
    });

    this.getTimeRecordService().listIssues(
      request,
      metadata,
      callback
    );
  }


  /**
   * List Projects
   * @param {string} searhValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listProjects({
    token,
    // DSL
    searhValue,
    // Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const {
      ListProjectsRequest
    } = this.stubFile;
    const request = new ListProjectsRequest();

    request.setSearchValue(searhValue);
    if (!isEmptyValue(pageSize) && !Number.isNaN(pageSize)) {
      request.setPageSize(Number(pageSize));
    }
    request.setPageToken(pageToken);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    const metadata = getMetadata({
      token
    });

    this.getTimeRecordService().listProjects(
      request,
      metadata,
      callback
    );
  }


  /**
   * Create Time Record
   */
  createTimeRecord({
    token,
    // DSL
    requestId,
    requestUuid,
    projectId,
    projectUuid,
    quantity,
    name,
    description,
    date,
    //
    language
  }, callback) {
    const {
      CreateTimeRecordRequest
    } = this.stubFile;
    const request = new CreateTimeRecordRequest();

    request.setRequestId(
      getValidId(requestId)
    );
    request.setRequestUuid(requestUuid)

    request.setProjectId(
      getValidId(projectId)
    );
    request.setProjectUuid(projectUuid);

    request.setName(name);
    request.setDescription(description);

    if (isEmptyValue(date)) {
      const { getTimestamp } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
      request.setDate(
        getTimestamp(date)
      );
    }

    const { getDecimalToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');
    request.setQuantity(
      getDecimalToGRPC(quantity)
    );

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    const metadata = getMetadata({
      token
    });

    this.getTimeRecordService().createTimeRecord(
      request,
      metadata,
      callback
    );
  }

  listTimeRecord({
    token,
    // DSL
    searhValue,
    quantity,
    dateFrom,
    dateTo,
    // Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const {
      ListTimeRecordRequest
    } = this.stubFile;
    const request = new ListTimeRecordRequest();

    request.setSearchValue(searhValue);

    const { getDecimalToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');
    request.setQuantity(
      getDecimalToGRPC(quantity)
    );

    const { getTimestamp } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
    if (isEmptyValue(dateFrom)) {
      request.setDateFrom(
        getTimestamp(dateFrom)
      );
    }
    if (isEmptyValue(dateTo)) {
      request.setDateTo(
        getTimestamp(dateTo)
      );
    }

    if (!isEmptyValue(pageSize) && !Number.isNaN(pageSize)) {
      request.setPageSize(Number(pageSize));
    }
    request.setPageToken(pageToken);
    request.setClientRequest(
      createClientRequest({ token, language })
    );

    const metadata = getMetadata({
      token
    });

    this.getTimeRecordService(token).listTimeRecord(
      request,
      metadata,
      callback
    );
  }

}

module.exports = TimeRecord;
