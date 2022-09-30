/*************************************************************************************
 * Product: ADempiere gRPC General Ledger Client                                     *
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

class GeneralLedger {

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

    this.initGeneralLedgerService();
    console.log('ADempiere General Ledger Client Started');
  }

  // Init connection
  initGeneralLedgerService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('@adempiere/grpc-api/src/grpc/proto/general_ledger_grpc_pb');
    this.generalLedger = new services.GeneralLedgerClient(
      this.businessHost, grpc.credentials.createInsecure()
    );
  }

  // Get General Ledger Service
  getGeneralLedgerService() {
    return this.generalLedger;
  }

  listAccountingCombinations({
    token,
    // DSL
    contextAttributes = [],
    filters = [],
    searchValue,
    // Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const {
      ListAccountingCombinationsRequest
    } = require('@adempiere/grpc-api/src/grpc/proto/general_ledger_pb.js');
    const request = new ListAccountingCombinationsRequest();

    if (!isEmptyValue(contextAttributes)) {
      const {
        convertParameterToGRPC,
        typeOfValue
      } = require('@adempiere/grpc-api/lib/convertValues.js');

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

    if (!isEmptyValue(filters)) {
      const {
        convertCriteriaToGRPC
      } = require('@adempiere/grpc-api/lib/convertValues');
      request.setFilters(
        convertCriteriaToGRPC({
          filters
        })
      );
    }

    request.setSearchValue(searchValue);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getGeneralLedgerService().listAccountingCombinations(request, callback);
  }

  getAccountingCombination({
    token,
    // DSL
    id,
    uuid,
    value,
    language
  }, callback) {
    const { GetAccountingCombinationRequest } = require('@adempiere/grpc-api/src/grpc/proto/general_ledger_pb.js');
    const request = new GetAccountingCombinationRequest();

    request.setId(id);
    request.setUuid(uuid);
    request.setValue(value);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getGeneralLedgerService().getAccountingCombination(request, callback);
  }

  saveAccountingCombination({
    token,
    // DSL
    contextAttributes = [],
    id,
    uuid,
    attributes = [],
    language
  }, callback) {
    const {
      SaveAccountingCombinationRequest
    } = require('@adempiere/grpc-api/src/grpc/proto/general_ledger_pb.js');
    const {
      convertParameterToGRPC, typeOfValue
    } = require('@adempiere/grpc-api/lib/convertValues.js');
    const request = new SaveAccountingCombinationRequest();

    request.setId(id);
    request.setUuid(uuid);

    if (!isEmptyValue(attributes)) {
      if (typeOfValue(attributes) === 'String') {
        attributes = JSON.parse(attributes);
      }
      attributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (typeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }
        request.addAttributes(
          convertParameterToGRPC({
            columnName: parsedAttribute.key,
            value: parsedAttribute.value
          })
        );
      });
    }

    if (!isEmptyValue(contextAttributes)) {
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

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getGeneralLedgerService().saveAccountingCombination(request, callback);
  }

  srartRePost({
    token,
    tableName,
    recordId,
    recordUuid,
    isForce = false,
    language
  }, callback) {
    const { StartRePostRequest } = require('@/adempiere/grpc-api/src/grpc/proto/general_ledger_pb.js');
    const request = new StartRePostRequest();

    request.setTableName(tableName);
    request.setRecordId(recordId);
    request.setRecordUuid(recordUuid);
    request.setIsForce(isForce);

    request.setClientRequest(
      createClientRequest({
        token,
        language
      })
    );

    this.getGeneralLedgerService().srartRePost(request, callback);
  }

  listAccoutingFacts({
    token,
    // DSL
    tableName,
    recordId,
    recordUuid,
    filters = [],
    // Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const {
      ListAccoutingFactsRequest
    } = require('@adempiere/grpc-api/src/grpc/proto/general_ledger_pb.js');
    const request = new ListAccoutingFactsRequest();

    request.setTableName(tableName);
    request.setRecordId(recordId);
    request.setRecordUuid(recordUuid);

    if (!isEmptyValue(filters)) {
      const {
        convertCriteriaToGRPC
      } = require('@adempiere/grpc-api/lib/convertValues');
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

    this.getGeneralLedgerService().listAccoutingFacts(request, callback);
  }

}

module.exports = GeneralLedger;
