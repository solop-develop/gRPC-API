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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                     *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.            *
 ************************************************************************************/

const { createClientRequest } = require('@adempiere/grpc-api/lib/clientRequest');
const { isEmptyValue } = require('@adempiere/grpc-api/lib/convertValues.js');

class MaterialManagement {

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
    const {
      ListProductStorageRequest
    } = require('@adempiere/grpc-api/src/grpc/proto/material_management_pb.js');
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
    const {
      GetProductAttributeSetRequest
    } = require('@adempiere/grpc-api/src/grpc/proto/material_management_pb.js');
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
    const { isEmptyValue } = require('@adempiere/grpc-api/lib/convertValues');
    const {
      ListProductAttributeSetInstancesRequest
    } = require('@adempiere/grpc-api/src/grpc/proto/material_management_pb.js');
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

}

module.exports = MaterialManagement;
