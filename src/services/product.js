/*************************************************************************************
 * Product: ADempiere gRPC Product Client                                            *
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
const { isEmptyValue } = require('@adempiere/grpc-api/lib/convertValues.js');

class Product {

  /**
   * File on generated stub
   */
  stubFile = require('@adempiere/grpc-api/src/grpc/proto/product_pb.js');

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

    this.initProductService();
    console.log('ADempiere Product Client Started');
  }

  // Init connection
  initProductService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('@adempiere/grpc-api/src/grpc/proto/product_grpc_pb');
    this.product = new services.ProductClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Product Service
  getProductService() {
    return this.product;
  }

  listProductInfo({
    token,
    //  DSL
    filters = [],
    searchValue,
    contextAttributes,
    // references
    processParameterUuid,
    fieldUuid,
    browseFieldUuid,
    columnUuid,
    columnName,
    referenceUuid,
    // Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListProductInfo } = this.stubFile;
    const request = new ListProductInfo();

    request.setFieldUuid(fieldUuid);
    request.setProcessParameterUuid(processParameterUuid);
    request.setBrowseFieldUuid(browseFieldUuid);
    request.setColumnUuid(columnUuid);
    request.setColumnName(columnName);
    request.setReferenceUuid(referenceUuid);

    request.setSearchValue(searchValue);
    if (!isEmptyValue(filters)) {
      const { getCriteriaToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');
      request.setFilters(
        getCriteriaToGRPC({
          filters
        })
      );
    }

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

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setClientRequest(
      createClientRequest({ token, language })
    );

    const metadata = getMetadata({
      token
    });

    this.getProductService().listProductInfo(
      request,
      metadata,
      callback
    );
  }

}

module.exports = Product;
