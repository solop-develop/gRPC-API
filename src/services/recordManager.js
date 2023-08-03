/*************************************************************************************
 * Product: ADempiere gRPC Payment Client                                            *
 * Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                      *
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

const { getMetadata } = require('@adempiere/grpc-api/src/utils/metadata.js');
const { isEmptyValue, getValidInteger } = require('@adempiere/grpc-api/src/utils/valueUtils.js')

class RecordManager {

  /**
   * File on generated stub
   */
  stubFile = require('@adempiere/grpc-api/src/grpc/proto/record_manager_pb.js');

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

    this.initRecordManagerService();
    console.log('ADempiere Record Manager Client Started');
  }

  // Init connection
  initRecordManagerService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('@adempiere/grpc-api/src/grpc/proto/record_manager_grpc_pb.js');
    this.recordManager = new services.RecordManagerClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Record Manager Service
  getRecordManager() {
    return this.recordManager;
  }

  toggleIsActiveRecords({
    token,
    //  DSL
    tableName,
    recordId,
    recordIUuid,
    recordsIdsList = [],
    recordsUuidsList = []
  }, callback) {
    const { ToggleIsActiveRecordsRequest } = this.stubFile;
    const request = new ToggleIsActiveRecordsRequest();

    request.setTableName(tableName);

    request.setRecordId(
      getValidInteger(recordId)
    );
    request.setRecordUuid(recordIUuid);

    const { getTypeOfValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
    // selection list ids
    if (!isEmptyValue(recordsIdsList)) {
      if (getTypeOfValue(recordsIdsList) === 'String') {
        recordsIdsList = JSON.parse(recordsIdsList);
      }
      recordsIdsList.forEach(idItem => {
        request.addRecordIds(
          getValidInteger(idItem)
        );
      });
    }
    // selection list uuids
    if (!isEmptyValue(recordsUuidsList)) {
      if (getTypeOfValue(recordsUuidsList) === 'String') {
        recordsUuidsList = JSON.parse(recordsUuidsList);
      }
      recordsUuidsList.forEach(uuidItem => {
        request.addRecordUuids(uuidItem );
      });
    }

    const metadata = getMetadata({
      token
    });

    this.getRecordManager().toggleIsActiveRecords(
      request,
      metadata,
      callback
    );
  }

}

module.exports = RecordManager;
