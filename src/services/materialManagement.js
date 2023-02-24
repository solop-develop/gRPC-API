/*************************************************************************************
 * Product: ADempiere gRPC Material Management Client                                *
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
const { getClientRequestToGRPC } = require('@adempiere/grpc-api/src/utils/clientToGRPC');
const { isEmptyValue, getValidId } = require('@adempiere/grpc-api/src/utils/valueUtils.js')

class MaterialManagement {

  /**
   * File on generated stub
   */
  stubFile = require('@adempiere/grpc-api/src/grpc/proto/material_management_pb.js');

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

    this.initMaterialManagementService();
    console.log('ADempiere Material Management Client Started');
  }

  // Init connection
  initMaterialManagementService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('@adempiere/grpc-api/src/grpc/proto/material_management_grpc_pb');
    this.materialManagement = new services.MaterialManagementClient(
      this.businessHost, grpc.credentials.createInsecure()
    );
  }

  // Get Material Management Service
  getMaterialManagementService() {
    return this.materialManagement;
  }

  listProductStorage({
    token,
    // DSL
    tableName,
    recordId,
    recordUuid,
    // Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListProductStorageRequest } = this.stubFile;
    const request = new ListProductStorageRequest();

    request.setTableName(tableName);
    request.setRecordId(recordId);
    request.setRecordUuid(recordUuid);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getMaterialManagementService().listProductStorage(request, callback);
  }

  /**
   * Get Product Attribute Set
   * @param {number} id
   * @param {string} uuid
   * @param {number} productId
   * @param {string} productUuid
   * @param {number} productAttributeSetId
   * @param {string} productAttributeSetUuid
   * @param {function} callback
   */
  getProductAttributeSet({
    token,
    id,
    uuid,
    productId,
    productUuid,
    productAttributeSetInstanceId,
    productAttributeSetInstanceUuid,
    language
  }, callback) {
    const { GetProductAttributeSetRequest } = this.stubFile;
    const request = new GetProductAttributeSetRequest();

    request.setId(id);
    request.setUuid(uuid);
    request.setProductId(productId);
    request.setProductUuid(productUuid);
    request.setProductAttributeSetInstanceId(productAttributeSetInstanceId);
    request.setProductAttributeSetInstanceUuid(productAttributeSetInstanceUuid);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getMaterialManagementService().getProductAttributeSet(request, callback);
  }


  /**
   * Get Product Attribute Set Instance
   * @param {number} id
   * @param {string} uuid
   * @param {number} productId
   * @param {string} productUuid
   * @param {number} productAttributeSetId
   * @param {string} productAttributeSetUuid
   * @param {function} callback
   */
  getProductAttributeSetInstance({
    token,
    id,
    uuid,
    productId,
    productUuid,
    language
  }, callback) {
    const { GetProductAttributeSetInstanceRequest } = this.stubFile;
    const request = new GetProductAttributeSetInstanceRequest();

    request.setId(id);
    request.setUuid(uuid);
    request.setProductId(productId);
    request.setProductUuid(productUuid);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getMaterialManagementService().getProductAttributeSetInstance(request, callback);
  }

  /**
   * List Product Attribute Set Instances
   * @param {number} productId
   * @param {string} productUuid
   * @param {number} productAttributeSetId
   * @param {string} productAttributeSetUuid
   * @param {function} callback
   */
  listProductAttributeSetInstances({
    token,
    // DSL
    productId,
    productUuid,
    productAttributeSetId,
    productAttributeSetUuid,
    filters,
    // Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListProductAttributeSetInstancesRequest } = this.stubFile;
    const request = new ListProductAttributeSetInstancesRequest();

    request.setProductId(productId);
    request.setProductUuid(productUuid);
    request.setProductAttributeSetId(productAttributeSetId);
    request.setProductAttributeSetUuid(productAttributeSetUuid);

    if (!isEmptyValue(filters)) {
      const { convertCriteriaToGRPC } = require('@adempiere/grpc-api/lib/convertValues');
      request.setFilters(
        convertCriteriaToGRPC({
          filters
        })
      );
    }

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getMaterialManagementService().listProductAttributeSetInstances(request, callback);
  }

  /**
   * Save Product Attribute Set Instance
   * @param {number} id
   * @param {string} uuid
   * @param {number} productId
   * @param {string} productUuid
   * @param {number} productAttributeSetId
   * @param {string} productAttributeSetUuid
   * @param {array} attributes
   * @param {function} callback
   */
  saveProductAttributeSetInstance({
    token,
    // DSL
    id,
    uuid,
    productId,
    productUuid,
    productAttributeSetId,
    productAttributeSetUuid,
    attributes,
    language
  }, callback) {
    const { SaveProductAttributeSetInstanceRequest } = this.stubFile;
    const request = new SaveProductAttributeSetInstanceRequest();

    request.setId(id);
    request.setUuid(uuid);
    request.setProductId(productId);
    request.setProductUuid(productUuid);
    request.setProductAttributeSetId(productAttributeSetId);
    request.setProductAttributeSetUuid(productAttributeSetUuid);

    if (!isEmptyValue(attributes)) {
      const { convertParameterToGRPC } = require('@adempiere/grpc-api/lib/convertValues');

      attributes.forEach(attribute => {
        // parameter format = { columName, value }
        const convertedAttribute = convertParameterToGRPC({
          columnName: attribute.key,
          value: attribute.value
        });

        request.addAttributes(convertedAttribute);
      });
    }

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getMaterialManagementService().saveProductAttributeSetInstance(request, callback);
  }

  /**
   * List Available Warehouses
   * @param {number} warehouseId
   * @param {string} warehouseUuid
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {function} callback
   */
  listAvailableWarehouses({
    token,
    // DSL
    warehouseId,
    warehouseUuid,
    searchValue,
    // Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListAvailableWarehousesRequest } = this.stubFile;
    const request = new ListAvailableWarehousesRequest();

    request.setWarehouseId(
      getValidId(warehouseId)
    );
    request.setWarehouseUuid(warehouseUuid);

    request.setSearchValue(searchValue);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setClientRequest(
      getClientRequestToGRPC({ token, language })
    );

    this.getMaterialManagementService().listAvailableWarehouses(request, callback);
  }

  /**
   * List Locators
   * @param {number} warehouseId
   * @param {string} warehouseUuid
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   * @param {function} callback
   */
  listLocators({
    token,
    // DSL
    warehouseId,
    warehouseUuid,
    searchValue,
    contextAttributes,
    // references
    processParameterUuid,
    fieldUuid,
    browseFieldUuid,
    referenceUuid,
    columnUuid,
    tableName,
    columnName,
    // Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListLocatorsRequest } = this.stubFile;
    const request = new ListLocatorsRequest();

    request.setWarehouseId(
      getValidId(warehouseId)
    );
    request.setWarehouseUuid(warehouseUuid);

    request.setSearchValue(searchValue);

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

        // attributte format = { columName, value }
        const convertedAttribute = getKeyValueToGRPC({
          columnName: parsedAttribute.key,
          value: parsedAttribute.value
        });
        request.addContextAttributes(convertedAttribute);
      });
    }

    request.setFieldUuid(fieldUuid);
    request.setProcessParameterUuid(processParameterUuid);
    request.setBrowseFieldUuid(browseFieldUuid);
    request.setReferenceUuid(referenceUuid);
    request.setColumnUuid(columnUuid);
    request.setTableName(tableName);
    request.setColumnName(columnName);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setClientRequest(
      getClientRequestToGRPC({ token, language })
    );

    this.getMaterialManagementService().listLocators(request, callback);
  }

}

module.exports = MaterialManagement;
