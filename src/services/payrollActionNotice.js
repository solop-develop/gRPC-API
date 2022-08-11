/*************************************************************************************
 * Product: ADempiere gRPC Dictionary Client                                         *
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

const { createClientRequest } = require('../../lib/clientRequest');
const { isEmptyValue } = require('../../lib/convertValues.js');

class PayrollActionNotice {

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

    this.initPayrollActionNoticeService();
    console.log('ADempiere Payroll Action Notice Client Started');
  }

  // Init connection
  initPayrollActionNoticeService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('../grpc/proto/payroll_action_notice_grpc_pb');
    this.payrollActionNotice = new services.PayrollActionNoticeClient(this.businessHost, grpc.credentials.createInsecure());
  }

  // Get Payroll Action Notice Service
  getPayrollActionNoticeService() {
    return this.payrollActionNotice;
  }

  listPayrollProcess({
    token,
    //  DSL
    searchValue,
    contextAttributes,
    // Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListPayrollProcessRequest } = require('../grpc/proto/payroll_action_notice_pb');
    const request = new ListPayrollProcessRequest();

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

    this.getPayrollActionNoticeService().listPayrollProcess(request, callback);
  }

  listEmployeeValid({
    token,
    //  DSL
    searchValue,
    contextAttributes,
    // Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListEmployeeValidRequest } = require('../grpc/proto/payroll_action_notice_pb');
    const request = new ListEmployeeValidRequest();

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

    this.getPayrollActionNoticeService().listEmployeeValid(request, callback);
  }

  listPayrollConcepts({
    token,
    //  DSL
    searchValue,
    contextAttributes,
    // Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListPayrollConceptsRequest } = require('../grpc/proto/payroll_action_notice_pb');
    const request = new ListPayrollConceptsRequest();

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

    this.getPayrollActionNoticeService().listPayrollConcepts(request, callback);
  }

  getPayrollConceptDefinition({
    token,
    // DSL
    id,
    uuid,
    language
  }, callback) {
    const { GetPayrollConceptDefinitionRequest } = require('../grpc/proto/payroll_action_notice_pb');
    const request = new GetPayrollConceptDefinitionRequest();

    request.setId(id);
    request.setUuid(uuid);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getPayrollActionNoticeService().getPayrollConceptDefinition(request, callback);
  }

  listPayrollMovements({
    token,
    //  DSL
    filters = [],
    searchValue,
    contextAttributes,
    // Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListPayrollMovementsRequest } = require('../grpc/proto/payroll_action_notice_pb');
    const request = new ListPayrollMovementsRequest();
    const { convertCriteriaToGRPC } = require('../../lib/convertValues');

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

    this.getPayrollActionNoticeService().listPayrollMovements(request, callback);
  }

  savePayrollMovement({
    token,
    //  DSL
    id,
    uuid,
    contextAttributes,
    attributes,
    language
  }, callback) {
    const { SavePayrollMovementRequest } = require('../grpc/proto/payroll_action_notice_pb');
    const request = new SavePayrollMovementRequest();
    const { convertParameterToGRPC, typeOfValue } = require('../../lib/convertValues');

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

    this.getPayrollActionNoticeService().savePayrollMovement(request, callback);
  }

  deletePayrollMovements({
    token,
    //  DSL
    contextAttributes,
    ids = [],
    uuids = [],
    language
  }, callback) {
    const { DeletePayrollMovementsRequest } = require('../grpc/proto/payroll_action_notice_pb');
    const request = new DeletePayrollMovementsRequest();

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

    // selection list id
    if (!isEmptyValue(ids)) {
      request.setIdsList(ids);
    }

    // selection list uuid
    if (!isEmptyValue(uuids)) {
      request.setUuidsList(uuids);
    }

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getPayrollActionNoticeService().deletePayrollMovements(request, callback);
  }
}

module.exports = PayrollActionNotice;
