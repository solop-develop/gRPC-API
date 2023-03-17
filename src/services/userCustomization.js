/*************************************************************************************
 * Product: ADempiere gRPC User Customization Client                                 *
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
const { isEmptyValue, getValidId } = require('@adempiere/grpc-api/lib/convertValues.js');

class UserCustomization {

  /**
   * File on generated stub
   */
  stubFile = require('@adempiere/grpc-api/src/grpc/proto/user_customization_pb.js');

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

    this.initUserCustomizationService();
    console.log('ADempiere User Customization Client Started');
  }

  // Init connection
  initUserCustomizationService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('@adempiere/grpc-api/src/grpc/proto/user_customization_grpc_pb');
    this.userCustomization = new services.UserCustomizationClient(
      this.businessHost, grpc.credentials.createInsecure()
    );
  }

  // Get User Customization Service
  getUserCustomizationService() {
    return this.userCustomization;
  }


  /**
   * List Users
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listUsers({
    token,
    searchValue,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListUsersRequest } = this.stubFile;
    const request = new ListUsersRequest();

    request.setSearchValue(searchValue);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    const metadata = getMetadata({
      token
    });

    this.getUserCustomizationService().listUsers(
      request,
      metadata,
      callback
    );
  }


  /**
   * List Roles
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listRoles({
    token,
    searchValue,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListRolesRequest } = this.stubFile;
    const request = new ListRolesRequest();

    request.setSearchValue(searchValue);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    const metadata = getMetadata({
      token
    });

    this.getUserCustomizationService().listRoles(
      request,
      metadata,
      callback
    );
  }


  /**
   * List Customizations Level
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listCustomizationsLevel({
    token,
    searchValue,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListCustomizationsLevelRequest } = this.stubFile;
    const request = new ListCustomizationsLevelRequest();

    request.setSearchValue(searchValue);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    const metadata = getMetadata({
      token
    });

    this.getUserCustomizationService().listCustomizationsLevel(
      request,
      metadata,
      callback
    );
  }


  /**
   * Save Window Customization
   * @param {string} tabUuid
   * @param {number} level
   * @param {number} levelId
   * @param {string} levelUuid
   * @param {array} fieldAttributes
   *  [{
   *    columnName, sequence, color, isDefaultDisplayed,
   *    displaySize, displayComponentType, componenTemplateCode
   *  }]
   */
  saveWindowCustomization({
    token,
    tabUuid,
    level,
    levelId,
    levelUuid,
    fieldAttributes,
    language
  }, callback) {
    const { SaveWindowCustomizationRequest } = this.stubFile;
    const request = new SaveWindowCustomizationRequest();

    request.setTabUuid(tabUuid);

    request.setLevel(level);
    request.setLevelId(
      getValidId(levelId)
    );
    request.setLevelUuid(levelUuid);

    if (!isEmptyValue(fieldAttributes)) {
      const { getTypeOfValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

      if (getTypeOfValue(fieldAttributes) === 'String') {
        fieldAttributes = JSON.parse(fieldAttributes);
      }

      const { getFieldAttributesToGRPC } = require('@adempiere/grpc-api/src/utils/userCustomizationToGRPC.js');
      fieldAttributes.forEach(fieldAttribute => {
        let parsedFieldAttribute = fieldAttribute;
        if (getTypeOfValue(fieldAttribute) === 'String') {
          parsedFieldAttribute = JSON.parse(fieldAttribute);
        }

        const convertedFieldAttribute = getFieldAttributesToGRPC(parsedFieldAttribute);
        request.addFieldAttributes(convertedFieldAttribute);
      });
    }

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    const metadata = getMetadata({
      token
    });

    this.getUserCustomizationService().saveWindowCustomization(
      request,
      metadata,
      callback
    );
  }


  /**
   * Save Browse Customization
   * @param {string} browseUuid
   * @param {number} level
   * @param {number} levelId
   * @param {string} levelUuid
   * @param {array} fieldAttributes
   *  [{
   *    columnName, sequence, color, isDefaultDisplayed,
   *    displaySize, displayComponentType, componenTemplateCode
   *  }]
   */
  saveBrowseCustomization({
    token,
    browseUuid,
    level,
    levelId,
    levelUuid,
    fieldAttributes,
    language
  }, callback) {
    const { SaveBrowseCustomizationRequest } = this.stubFile;
    const request = new SaveBrowseCustomizationRequest();

    request.setBrowseUuid(browseUuid);

    request.setLevel(level);
    request.setLevelId(
      getValidId(levelId)
    );
    request.setLevelUuid(levelUuid);

    if (!isEmptyValue(fieldAttributes)) {
      const { getTypeOfValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

      if (getTypeOfValue(fieldAttributes) === 'String') {
        fieldAttributes = JSON.parse(fieldAttributes);
      }

      const { getFieldAttributesToGRPC } = require('@adempiere/grpc-api/src/utils/userCustomizationToGRPC.js');
      fieldAttributes.forEach(fieldAttribute => {
        let parsedFieldAttribute = fieldAttribute;
        if (getTypeOfValue(fieldAttribute) === 'String') {
          parsedFieldAttribute = JSON.parse(fieldAttribute);
        }

        const convertedFieldAttribute = getFieldAttributesToGRPC(parsedFieldAttribute);
        request.addFieldAttributes(convertedFieldAttribute);
      });
    }

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    const metadata = getMetadata({
      token
    });

    this.getUserCustomizationService().saveBrowseCustomization(
      request,
      metadata,
      callback
    );
  }


  /**
   * Save Process Customization
   * @param {string} processUuid
   * @param {number} level
   * @param {number} levelId
   * @param {string} levelUuid
   * @param {array} fieldAttributes
   *  [{
   *    columnName, sequence, color, isDefaultDisplayed,
   *    displaySize, displayComponentType, componenTemplateCode
   *  }]
   */
  saveProcessCustomization({
    token,
    processUuid,
    level,
    levelId,
    levelUuid,
    fieldAttributes,
    language
  }, callback) {
    const { SaveProcessCustomizationRequest } = this.stubFile;
    const request = new SaveProcessCustomizationRequest();

    request.setProcessUuid(processUuid);

    request.setLevel(level);
    request.setLevelId(
      getValidId(levelId)
    );
    request.setLevelUuid(levelUuid);

    if (!isEmptyValue(fieldAttributes)) {
      const { getTypeOfValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

      if (getTypeOfValue(fieldAttributes) === 'String') {
        fieldAttributes = JSON.parse(fieldAttributes);
      }

      const { getFieldAttributesToGRPC } = require('@adempiere/grpc-api/src/utils/userCustomizationToGRPC.js');
      fieldAttributes.forEach(fieldAttribute => {
        let parsedFieldAttribute = fieldAttribute;
        if (getTypeOfValue(fieldAttribute) === 'String') {
          parsedFieldAttribute = JSON.parse(fieldAttribute);
        }

        const convertedFieldAttribute = getFieldAttributesToGRPC(parsedFieldAttribute);
        request.addFieldAttributes(convertedFieldAttribute);
      });
    }

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    const metadata = getMetadata({
      token
    });

    this.getUserCustomizationService().saveProcessCustomization(
      request,
      metadata,
      callback
    );
  }

}

module.exports = UserCustomization;
