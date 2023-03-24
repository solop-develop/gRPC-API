/*************************************************************************************
 * Product: ADempiere gRPC General Ledger Client                                     *
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
const { isEmptyValue, getTypeOfValue, getValidId } = require('@adempiere/grpc-api/lib/convertValues.js');

class GeneralLedger {

  /**
   * File on generated stub
   */
  stubFile = require('@adempiere/grpc-api/src/grpc/proto/general_ledger_pb.js');

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
      this.businessHost,
      grpc.credentials.createInsecure()
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
    pageToken
  }, callback) {
    const {
      ListAccountingCombinationsRequest
    } = this.stubFile
    const request = new ListAccountingCombinationsRequest();

    if (!isEmptyValue(contextAttributes)) {
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

    if (!isEmptyValue(filters)) {
      const { getCriteriaToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');

      request.setFilters(
        getCriteriaToGRPC({
          filters
        })
      );
    }

    request.setSearchValue(searchValue);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getGeneralLedgerService().listAccountingCombinations(
      request,
      metadata,
      callback
    );
  }

  getAccountingCombination({
    token,
    // DSL
    id,
    uuid,
    value
  }, callback) {
    const { GetAccountingCombinationRequest } = this.stubFile
    const request = new GetAccountingCombinationRequest();

    request.setId(
      getValidId(id)
    );
    request.setUuid(uuid);
    request.setValue(value);

    const metadata = getMetadata({
      token
    });

    this.getGeneralLedgerService().getAccountingCombination(
      request,
      metadata,
      callback
    );
  }

  saveAccountingCombination({
    token,
    // DSL
    contextAttributes = [],
    id,
    uuid,
    attributes = []
  }, callback) {
    const {
      SaveAccountingCombinationRequest
    } = this.stubFile
    const {
      getKeyValueToGRPC
    } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');
    const request = new SaveAccountingCombinationRequest();

    request.setId(
      getValidId(id)
    );
    request.setUuid(uuid);

    if (!isEmptyValue(attributes)) {
      if (getTypeOfValue(attributes) === 'String') {
        attributes = JSON.parse(attributes);
      }
      attributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (getTypeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }
        request.addAttributes(
          getKeyValueToGRPC({
            columnName: parsedAttribute.key,
            value: parsedAttribute.value
          })
        );
      });
    }

    if (!isEmptyValue(contextAttributes)) {
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

    const metadata = getMetadata({
      token
    });

    this.getGeneralLedgerService().saveAccountingCombination(
      request,
      metadata,
      callback
    );
  }

  srartRePost({
    token,
    tableName,
    recordId,
    recordUuid,
    isForce = false
  }, callback) {
    const { StartRePostRequest } = this.stubFile
    const request = new StartRePostRequest();

    request.setTableName(tableName);
    request.setRecordId(
      getValidId(recordId)
    );
    request.setRecordUuid(recordUuid);
    request.setIsForce(isForce);

    const metadata = getMetadata({
      token
    });

    this.getGeneralLedgerService().startRePost(
      request,
      metadata,
      callback
    );
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
    pageToken
  }, callback) {
    const {
      ListAccoutingFactsRequest
    } = this.stubFile
    const request = new ListAccoutingFactsRequest();

    request.setTableName(tableName);
    request.setRecordId(
      getValidId(recordId)
    );
    request.setRecordUuid(recordUuid);

    if (!isEmptyValue(filters)) {
      const { getCriteriaToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');

      request.setFilters(
        getCriteriaToGRPC({
          filters
        })
      );
    }

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getGeneralLedgerService().listAccoutingFacts(
      request,
      metadata,
      callback
    );
  }

}

module.exports = GeneralLedger;
