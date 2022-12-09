/*************************************************************************************
 * Product: ADempiere gRPC Dashboardimg Client                                       *
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
    pageToken,
    language
  }, callback) {
    const { ListDashboardsRequest } = this.stubFile;
    const request = new ListDashboardsRequest();

    request.setRoleUuid(roleUuid);
    request.setRoleId(roleId);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    request.setClientRequest(
      createClientRequest({
        token,
        language
      })
    );

    this.getDashboardingService().listDashboards(request, callback);
  }

  //  List Document Statuses
  listFavorites({
    token,
    userUuid,
    userId,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListFavoritesRequest } = this.stubFile;
    const request = new ListFavoritesRequest()

    request.setUserUuid(userUuid);
    request.setUserId(userId);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    request.setClientRequest(
      createClientRequest({
        token,
        language
      })
    );

    this.getDashboardingService().listFavorites(request, callback);
  }

  //  List Document Statuses
  listPendingDocuments({
    token,
    userUuid,
    userId,
    roleUuid,
    roleId,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListPendingDocumentsRequest } = this.stubFile;
    const request = new ListPendingDocumentsRequest();

    request.setUserUuid(userUuid);
    request.setUserId(userId);
    request.setRoleUuid(roleUuid);
    request.setRoleId(roleId);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    request.setClientRequest(
      createClientRequest({
        token,
        language
      })
    );

    this.getDashboardingService().listPendingDocuments(request, callback);
  }

  //  Get Chart Data
  getChart({
    token,
    uuid,
    id,
    language
  }, callback) {
    const { GetChartRequest } = this.stubFile;
    const request = new GetChartRequest();

    request.setUuid(uuid);
    request.setId(id);

    request.setClientRequest(
      createClientRequest({
        token,
        language
      })
    );

    this.getDashboardingService().getChart(request, callback);
  }

}

module.exports = Dashboarding;
