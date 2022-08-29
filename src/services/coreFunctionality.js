/*************************************************************************************
 * Product: ADempiere gRPC Core Functionality Client                                 *
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

const { createClientRequest } = require('@adempiere/grpc-api/lib/clientRequest')

class CoreFunctionality {

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

    this.initCoreFunctionalityService();
    console.log('ADempiere Core Functionality Client Started');
  }

  // Init connection
  initCoreFunctionalityService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('@adempiere/grpc-api/src/grpc/proto/core_functionality_grpc_pb');
    this.coreFunctionality = new services.CoreFunctionalityClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get CoreFunctionality Service
  getCoreFunctionalityService() {
    return this.coreFunctionality;
  }

  //  List Product Conversion UOM
  listProductConversion({
    token,
    productId,
    productUuid,
    //  Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListProductConversionRequest } = require('@adempiere/grpc-api/src/grpc/proto/core_functionality_pb.js');
    const request = new ListProductConversionRequest();

    request.setProductId(productId);
    request.setProductUuid(productUuid);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getCoreFunctionalityService().listProductConversion(request, callback);
  }

}

module.exports = CoreFunctionality;
