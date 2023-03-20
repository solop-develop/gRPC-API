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
    token,
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
    request.setClientVersion(this.version);

    this.getAccessService().runLogin(request, callback);
  }

  // Get User Information
  getUserInfo({
    token,
    language
  }, callback) {
    const { UserInfoRequest } = this.stubFile;
    const request = new UserInfoRequest();

    request.setSessionUuid(token);
    request.setLanguage(language);
    request.setClientVersion(this.version);

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
    language
  }, callback) {
    const { ListRolesRequest } = this.stubFile;
    const request = new ListRolesRequest();

    request.setSessionUuid(token);
    request.setLanguage(language);
    request.setClientVersion(this.version);

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
    token,
    language
  }, callback) {
    const { MenuRequest } = this.stubFile;
    const request = new MenuRequest();

    request.setSessionUuid(token);
    request.setLanguage(language);
    request.setClientVersion(this.version);

    const metadata = getMetadata({
      token
    });

    this.getAccessService().getMenu(
      request,
      metadata,
      callback
    );
  }

  // Get User Menu
  getSessionInfo({
    token,
    language
  }, callback) {
    const { SessionRequest } = this.stubFile;
    const request = new SessionRequest();

    request.setSessionUuid(token);
    request.setLanguage(language);
    request.setClientVersion(this.version);

    const metadata = getMetadata({
      token
    });

    this.getAccessService().getSession(
      request,
      metadata,
      callback
    );
  }

  // Change role
  changeRole({
    token,
    sessionUuid,
    role,
    organization,
    warehouse,
    language
  }, callback) {
    const { ChangeRoleRequest } = this.stubFile;
    const request = new ChangeRoleRequest();

    request.setSessionUuid(sessionUuid);
    request.setRoleUuid(role);
    request.setOrganizationUuid(organization);
    request.setWarehouseUuid(warehouse);
    request.setLanguage(language);
    request.setClientVersion(this.version);

    const metadata = getMetadata({
      token
    });

    this.getAccessService().runChangeRole(request, metadata, callback)
  }

  /**
   * Logout with current session
   * @param {String} sessionUuid
   * @param {String} token
   * @param {String} language
   */
  logout({
    sessionUuid,
    token,
    language
  }, callback) {
    const { LogoutRequest } = this.stubFile;
    const request = new LogoutRequest();

    request.setSessionUuid(sessionUuid);
    request.setLanguage(language);
    request.setClientVersion(this.version);

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
