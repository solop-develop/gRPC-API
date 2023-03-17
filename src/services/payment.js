/*************************************************************************************
 * Product: ADempiere gRPC Payment Client                                            *
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

class Payment {

  /**
   * File on generated stub
   */
  stubFile = require('@adempiere/grpc-api/src/grpc/proto/payment_pb.js');

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

    this.initPaymentService();
    console.log('ADempiere Payment Client Started');
  }

  // Init connection
  initPaymentService() {
    var grpc = require('@grpc/grpc-js');
    var services = require('@adempiere/grpc-api/src/grpc/proto/payment_grpc_pb.js');
    this.payment = new services.PaymentClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Payment Service
  getPaymentService() {
    return this.payment;
  }

  listPaymentInfo({
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
    const { ListPaymentInfo } = require('../grpc/proto/payment_grpc_pb');
    const request = new ListPaymentInfo();
    const { convertCriteriaToGRPC } = require('../../lib/convertValues');

    request.setFieldUuid(fieldUuid);
    request.setProcessParameterUuid(processParameterUuid);
    request.setBrowseFieldUuid(browseFieldUuid);
    request.setColumnUuid(columnUuid);
    request.setColumnName(columnName);
    request.setReferenceUuid(referenceUuid);

    request.setFilters(
      convertCriteriaToGRPC({
        filters
      })
    );

    request.setSearchValue(searchValue);
    if (!isEmptyValue(contextAttributes)) {
      const { convertParameterToGRPC, typeOfValue } = require('../../lib/convertValues.js');

      if (typeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (typeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }
        request.addContextAttributes(
          convertParameterToGRPC({
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

    this.getPaymentService().listPaymentInfo(request, callback);
  }

}

module.exports = Payment;
