/*************************************************************************************
 * Product: ADempiere gRPC Access Client                                             *
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

class Access {

  /**
   * File on generated stub
   */
  stubFile = require('@adempiere/grpc-api/src/grpc/proto/access_pb.js');

  /**
   * Constructor, No authentication required
   * @param {string} host
   * @param {string} version
   * @param {string} language
   */
  constructor(config) {
    if (config) {
      const adempiereConfig = config.adempiereApi.api;
      this.accessHost = adempiereConfig.accessHost;
      this.version = adempiereConfig.version;
      this.language = adempiereConfig.language;
      this.token = adempiereConfig.token;
    }

    this.initAccessService();
    console.log('ADempiere Access Client Started');
  }

  // Init connection
  initAccessService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('@adempiere/grpc-api/src/grpc/proto/access_grpc_pb');
    this.access = new services.SecurityClient(
      this.accessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Access Service
  getAccessService() {
    return this.access;
  }

  // Login with a user
  login({
    user,
    password,
    token, // token as password
    roleUuid,
    organizationUuid,
    warehouseUuid,
    language
  }, callback) {
    const { LoginRequest } = this.stubFile;
    const request = new LoginRequest();

    request.setUserName(user);
    request.setUserPass(password);
    request.setToken(token);
    request.setRoleUuid(roleUuid);
    request.setOrganizationUuid(organizationUuid);
    request.setWarehouseUuid(warehouseUuid);
    request.setLanguage(language);
    // request.setClientVersion(this.version);

    this.getAccessService().runLogin(
      request,
      callback
    );
  }

  // Get User Information
  getUserInfo({
    token
  }, callback) {
    const { UserInfoRequest } = this.stubFile;
    const request = new UserInfoRequest();

    const metadata = getMetadata({
      token
    });

    this.getAccessService().getUserInfo(
      request,
      metadata,
      callback
    );
  }

  // Get User Information
  getUserRoles({
    token,
    pageSize,
    pageToken
  }, callback) {
    const { ListRolesRequest } = this.stubFile;
    const request = new ListRolesRequest();

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getAccessService().listRoles(
      request,
      metadata,
      callback
    );
  }

  // Get User Menu
  getMenu({
    token
  }, callback) {
    const { MenuRequest } = this.stubFile;
    const request = new MenuRequest();

    const metadata = getMetadata({
      token
    });

    this.getAccessService().getMenu(
      request,
      metadata,
      callback
    );
  }

  // Get User Session
  getSessionInfo({
    token,
  }, callback) {
    const { SessionInfoRequest } = this.stubFile;
    const request = new SessionInfoRequest();

    const metadata = getMetadata({
      token
    });

    this.getAccessService().getSessionInfo(
      request,
      metadata,
      callback
    );
  }

  // Change role
  changeRole({
    token,
    roleUuid,
    organizationUuid,
    warehouseUuid,
    language
  }, callback) {
    const { ChangeRoleRequest } = this.stubFile;
    const request = new ChangeRoleRequest();

    request.setRoleUuid(roleUuid);
    request.setOrganizationUuid(organizationUuid);
    request.setWarehouseUuid(warehouseUuid);
    request.setLanguage(language);

    const metadata = getMetadata({
      token
    });

    this.getAccessService().runChangeRole(
      request,
      metadata,
      callback
    );
  }

  /**
   * Logout with current session
   * @param {String} token
   */
  logout({
    token,
  }, callback) {
    const { LogoutRequest } = this.stubFile;
    const request = new LogoutRequest();

    const metadata = getMetadata({
      token
    });

    this.getAccessService().runLogout(
      request,
      metadata,
      callback
    );
  }

}

module.exports = Access;
