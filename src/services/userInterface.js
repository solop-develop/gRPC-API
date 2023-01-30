/*************************************************************************************
 * Product: ADempiere gRPC User Interface Client                                     *
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
const { isEmptyValue, getValidId } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

class UserInterface {

  /**
   * File on generated stub
   */
  stubFile = require('@adempiere/grpc-api/src/grpc/proto/business_pb.js');

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

    this.initUserInterfaceService();
    console.log('ADempiere User Interface Client Started');
  }

  // Init connection
  initUserInterfaceService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('@adempiere/grpc-api/src/grpc/proto/business_grpc_pb');
    this.userInterface = new services.UserInterfaceClient(this.businessHost, grpc.credentials.createInsecure());
  }

  // Get UserInterface Service
  getUserInterfaceService() {
    return this.userInterface;
  }

  /**
   * Get a Tab Entity
   * @param {string} token session uuid
   * @param {string} language
   * @param {string} tabUuid
   * @param {number} id record id
   * @param {string} uuid record uuid
   */
  getTabEntity({
    token,
    tabUuid,
    id,
    uuid,
    language
  }, callback) {
    const { GetTabEntityRequest } = this.stubFile;
    const request = new GetTabEntityRequest();

    request.setTabUuid(tabUuid);
    request.setUuid(uuid);
    request.setId(
      getValidId(id)
    );

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getUserInterfaceService().getTabEntity(request, callback);
  }

  // Create a Tab Entity
  createTabEntity({
    token,
    tabUuid,
    attributes,
    language
  }, callback) {
    const { CreateTabEntityRequest } = this.stubFile;
    const request = new CreateTabEntityRequest();

    request.setTabUuid(tabUuid);

    if (!isEmptyValue(attributes)) {
      const { getTypeOfValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
      if (getTypeOfValue(attributes) === 'String') {
        attributes = JSON.parse(attributes);
      }

      const { getKeyValueToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');
      attributes.forEach(attribute => {
        let parsedAttribute = attribute
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }

        // attributte format = { columName, value }
        const convertedAttribute = getKeyValueToGRPC({
          columnName: parsedAttribute.key,
          value: parsedAttribute.value
        });

        request.addAttributes(convertedAttribute);
      })
    }

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getUserInterfaceService().createTabEntity(request, callback);
  }

  // Update a Tab Entity
  updateTabEntity({
    token,
    tabUuid,
    id,
    uuid,
    attributes,
    language
  }, callback) {
    const { UpdateTabEntityRequest } = this.stubFile;
    const request = new UpdateTabEntityRequest();

    request.setTabUuid(tabUuid);
    request.setId(id);
    request.setUuid(uuid);

    if (!isEmptyValue(attributes)) {
      const { getTypeOfValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
      if (getTypeOfValue(attributes) === 'String') {
        attributes = JSON.parse(attributes);
      }

      const { getKeyValueToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');
      attributes.forEach(attribute => {
        let parsedAttribute = attribute
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }

        // attributte format = { columName, value }
        const convertedAttribute = getKeyValueToGRPC({
          columnName: parsedAttribute.key,
          value: parsedAttribute.value
        });

        request.addAttributes(convertedAttribute);
      })
    }

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getUserInterfaceService().updateTabEntity(request, callback)
  }

  existsReferences({
    token,
    language,
    tabId,
    tabUuid,
    recordId,
    recordUuid
  }, callback) {
    const { ExistsReferencesRequest } = this.stubFile;
    const request = new ExistsReferencesRequest();

    request.setTabId(
      getValidId(tabId)
    );
    request.setTabUuid(tabUuid);

    request.setRecordId(
      getValidId(recordId)
    );
    request.setRecordUuid(recordUuid);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getUserInterfaceService().existsReferences(request, callback);
  }

  // Tab Sequences (Is Sort Tab)
  listTabSequences({
    token,
    tabUuid,
    contextAttributes,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListTabSequencesRequest } = this.stubFile;
    const request = new ListTabSequencesRequest();

    request.setTabUuid(tabUuid);

    if (!isEmptyValue(contextAttributes)) {
      const { getTypeOfValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

      if (getTypeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }

      const { getKeyValueToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }

        // attributte format = { columName, value }
        const convertedAttribute = getKeyValueToGRPC({
          columnName: parsedAttribute.key,
          value: parsedAttribute.value
        });
        request.addContextAttributes(convertedAttribute);
      });
    }

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setClientRequest(
      createClientRequest({ token, language })
    );
  
    this.getUserInterfaceService().listTabSequences(request, callback);
  }

  // Tab Sequences (Is Sort Tab)
  saveTabSequences({
    token,
    tabUuid,
    contextAttributes,
    entitiesList,
    language
  }, callback) {
    const { SaveTabSequencesRequest } = this.stubFile;
    const request = new SaveTabSequencesRequest();

    request.setTabUuid(tabUuid);

    if (!isEmptyValue(contextAttributes)) {
      const { getTypeOfValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
      if (getTypeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }

      const { getKeyValueToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }

        // attributte format = { columName, value }
        const convertedAttribute = getKeyValueToGRPC({
          columnName: parsedAttribute.key,
          value: parsedAttribute.value
        });

        request.addContextAttributes(convertedAttribute);
      });
    }

    // entities records selections list
    if (!isEmptyValue(entitiesList)) {
      const { convertSelectionToGRPC } = require('@adempiere/grpc-api/lib/convertValues.js');

      entitiesList.forEach(entity => {
        // selection format = { selectionId: number, selectionValues: [{ columName, value }] }
        const convertedRecord = convertSelectionToGRPC({
          selectionId: entity.recordId,
          selectionUuid: entity.recordUuid,
          selectionValues: entity.attributesList
        });

        request.addEntities(convertedRecord);
      });
    }

    request.setClientRequest(
      createClientRequest({ token, language })
    );
  
    this.getUserInterfaceService().saveTabSequences(request, callback);
  }

  // Run a callout to server
  runCallout({
    token,
    language,
    tableName,
    windowUuid,
    tabUuid,
    callout,
    columnName,
    valueType,
    oldValue,
    value,
    windowNo,
    contextAttributes
  }, callback) {
    const { RunCalloutRequest } = this.stubFile;
    const { convertValueToGRPC } = require('@adempiere/grpc-api/lib/convertValues.js');
    const request = new RunCalloutRequest();

    request.setWindowNo(windowNo);
    request.setTableName(tableName);
    request.setWindowUuid(windowUuid);
    request.setTabUuid(tabUuid);
    request.setCallout(callout);
    request.setColumnName(columnName);

    request.setOldValue(
      convertValueToGRPC({
        value: oldValue,
        valueType
      })
    );
    request.setValue(
      convertValueToGRPC({
        value,
        valueType
      })
    );

    if (!isEmptyValue(contextAttributes)) {
      const { getTypeOfValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
      if (getTypeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }

      const { getKeyValueToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }

        let value = parsedAttribute.value
        let valueType = ''
        if (!isEmptyValue(parsedAttribute.value) && getTypeOfValue(parsedAttribute.value) === 'Object') {
          value = parsedAttribute.value.value
          if (!isEmptyValue(parsedAttribute.value.valueType)) {
            valueType = parsedAttribute.value.valueType
          }
        }

        // parameter format = { columName, value }
        const convertedParameter = getKeyValueToGRPC({
          columnName: parsedAttribute.key,
          valueType,
          value
        });

        request.addContextAttributes(convertedParameter);
      });
    }

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getUserInterfaceService().runCallout(request, callback);
  }

  listTreeNodes({
    token,
    tableName,
    id,
    uuid,
    elementId,
    elementUuid,
    language
  }, callback) {
    const { ListTreeNodesRequest } = this.stubFile;
    const request = new ListTreeNodesRequest();

    request.setTableName(tableName);
    request.setUuid(uuid);
    request.setId(
      getValidId(id)
    );
    request.setElementUuid(elementUuid);
    request.setElementId(
      getValidId(elementId)
    );

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getUserInterfaceService().listTreeNodes(request, callback);
  }

  /**
   * List Mail Templates
   * @param {string} token session
   * @param {string} searchValue filter records
   * @param {number} pageSize records per page
   * @param {string} pageToken
   * @param {string} language to translation
   */
  listMailTemplates({
    token,
    searchValue,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListMailTemplatesRequest } = this.stubFile;
    const request = new ListMailTemplatesRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setClientRequest(
      createClientRequest({ token, language })
    );
  
    this.getUserInterfaceService().listMailTemplates(request, callback);
  }

}

module.exports = UserInterface;
