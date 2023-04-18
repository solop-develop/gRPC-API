/*************************************************************************************
 * Product: ADempiere gRPC Dashboardimg Client                                       *
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

const { getMetadata } = require('@adempiere/grpc-api/src/utils/metadata.js');
const { isEmptyValue, getValidInteger } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

class Dashboarding {

  /**
   * File on generated stub
   */
  stubFile = require('@adempiere/grpc-api/src/grpc/proto/dashboarding_pb.js');

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

    this.initDashboardingService();
    console.log('ADempiere Dashboarding Client Started');
  }

  // Init connection
  initDashboardingService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('@adempiere/grpc-api/src/grpc/proto/dashboarding_grpc_pb');
    this.dashboarding = new services.DashboardingClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Dashboarding Service
  getDashboardingService() {
    return this.dashboarding;
  }

  // List Document Statuses
  listDashboards({
    token,
    roleUuid,
    roleId,
    pageSize,
    pageToken
  }, callback) {
    const { ListDashboardsRequest } = this.stubFile;
    const request = new ListDashboardsRequest();

    request.setRoleUuid(roleUuid);
    request.setRoleId(roleId);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getDashboardingService().listDashboards(
      request,
      metadata,
      callback
    );
  }

  //  List Document Statuses
  listFavorites({
    token,
    userUuid,
    userId,
    pageSize,
    pageToken
  }, callback) {
    const { ListFavoritesRequest } = this.stubFile;
    const request = new ListFavoritesRequest()

    request.setUserUuid(userUuid);
    request.setUserId(userId);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getDashboardingService().listFavorites(
      request,
      metadata,
      callback
    );
  }

  //  List Document Statuses
  listPendingDocuments({
    token,
    userUuid,
    userId,
    roleUuid,
    roleId,
    pageSize,
    pageToken
  }, callback) {
    const { ListPendingDocumentsRequest } = this.stubFile;
    const request = new ListPendingDocumentsRequest();

    request.setUserUuid(userUuid);
    request.setUserId(userId);
    request.setRoleUuid(roleUuid);
    request.setRoleId(roleId);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getDashboardingService().listPendingDocuments(
      request,
      metadata,
      callback
    );
  }

  //  Get Chart Data
  getChart({
    token,
    uuid,
    id
  }, callback) {
    const { GetChartRequest } = this.stubFile;
    const request = new GetChartRequest();

    request.setUuid(uuid);
    request.setId(id);

    const metadata = getMetadata({
      token
    });

    this.getDashboardingService().getChart(
      request,
      metadata,
      callback
    );
  }

  /**
   * List notification
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listNotifications({
    token,
    searchValue,
    pageSize,
    pageToken
  }, callback) {
    const { ListNotificationsRequest } = this.stubFile;
    const request = new ListNotificationsRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getDashboardingService().listNotifications(
      request,
      metadata,
      callback
    );
  }


  /**
   * List Window Charts
   * @param {string} token Json Web Token
   * @param {number} windowId window identifier
   * @param {string} windowUuid window uuid
   * @param {number} tabId tab identifier
   * @param {string} token window uuid
   */
  listWindowCharts({
    token,
    windowId,
    windowUuid,
    tabId,
    tabUuid,
    searchValue,
    pageSize,
    pageToken
  }, callback) {
    const { ListWindowChartsRequest } = this.stubFile;
    const request = new ListWindowChartsRequest();

    request.setWindowId(
      getValidInteger(windowId)
    );
    request.setWindowUuid(windowUuid);
    request.setTabId(
      getValidInteger(tabId)
    );
    request.setTabUuid(tabUuid);

    request.setSearchValue(searchValue);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getDashboardingService().listWindowCharts(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Window Charts
   * @param {string} token Json Web Token
   * @param {number} id chart id
   * @param {string} uuid chart uuid
   * @param {string} tableName table name
   * @param {number} recordId record id
   * @param {string} recordUuid record uuid
   * @param {Array} contextAttributes context attributes to set
   */
  getWindowMetrics({
    token,
    uuid,
    id,
    tableName,
    recordId,
    recordUuid,
    contextAttributes
  }, callback) {
    const { GetWindowMetricsRequest } = this.stubFile;
    const request = new GetWindowMetricsRequest();

    request.setUuid(uuid);
    request.setId(
      getValidInteger(id)
    );

    request.setTableName(tableName);
    request.setRecordId(
      getValidInteger(recordId)
    );
    request.setRecordUuid(recordUuid);

    if (!isEmptyValue(contextAttributes)) {
      const { getTypeOfValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
      const { getKeyValueToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');

      if (getTypeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }
        request.addContextAttributes(
          getKeyValueToGRPC({
            columnName: parsedAttribute.key,
            value: parsedAttribute.value
          })
        );
      });
    }

    const metadata = getMetadata({
      token
    });

    this.getDashboardingService().getWindowMetrics(
      request,
      metadata,
      callback
    );
  }

}

module.exports = Dashboarding;
