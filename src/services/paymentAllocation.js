/*************************************************************************************
 * Product: ADempiere gRPC Payment Allocation Client                                 *
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
const { isEmptyValue, getValidInteger } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

class PaymentAllocation {

  /**
   * File on generated stub
   */
  stubFile = require('@adempiere/grpc-api/src/grpc/proto/payment_allocation_pb.js');

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

    this.initPaymentAllocationService();
    console.log('ADempiere Payment Allocation Client Started');
  }

  // Init connection
  initPaymentAllocationService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('@adempiere/grpc-api/src/grpc/proto/payment_allocation_grpc_pb.js');
    this.paymentAllocation = new services.PaymentAllocationClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Payment Allocation Service
  getPaymentAllocationService() {
    return this.paymentAllocation;
  }


  /**
   * Get List Business Partners
   * @param {string} token
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listBusinessPartners({
    token,
    // DSL
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListBusinessPartnersRequest } = this.stubFile;
    const request = new ListBusinessPartnersRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPaymentAllocationService().listBusinessPartners(
      request,
      metadata,
      callback
    );
  }


  /**
   * Get List Organizations
   * @param {string} token
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listOrganizations({
    token,
    // DSL
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListOrganizationsRequest } = this.stubFile;
    const request = new ListOrganizationsRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPaymentAllocationService().listOrganizations(
      request,
      metadata,
      callback
    );
  }


  /**
   * Get List Currencies
   * @param {string} token
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listCurrencies({
    token,
    // DSL
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListCurrenciesRequest } = this.stubFile;
    const request = new ListCurrenciesRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPaymentAllocationService().listCurrencies(
      request,
      metadata,
      callback
    );
  }


  /**
   * Get List Transaction Types
   * @param {string} token
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listTransactionTypes({
    token,
    // DSL
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListTransactionTypesRequest } = this.stubFile;
    const request = new ListTransactionTypesRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPaymentAllocationService().listTransactionTypes(
      request,
      metadata,
      callback
    );
  }


  /**
   * Get List Payments
   * @param {string} token
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listPayments({
    token,
    // DSL
    searchValue,
    businessPartnerId,
    businessPartnerUuid,
    date,
    organizationId,
    organizationUuid,
    currencyId,
    currencyUuid,
    isMultiCurrency,
    transactionType,
    isAutomaticWriteOff,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListPaymentsRequest } = this.stubFile;
    const request = new ListPaymentsRequest();

    request.setSearchValue(searchValue);

    request.setBusinessPartnerId(
      getValidInteger(businessPartnerId)
    );
    request.setBusinessPartnerUuid(businessPartnerUuid);

    const { getTimestamp } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
    request.setDate(
      getTimestamp(date)
    );

    request.setOrganizationId(
      getValidInteger(organizationId)
    );
    request.setOrganizationUuid(organizationUuid);

    request.setCurrencyId(
      getValidInteger(currencyId)
    );
    request.setCurrencyUuid(currencyUuid);

    request.setIsMultiCurrency(isMultiCurrency);
    request.setTransactionType(transactionType);
    request.setIsAutomaticWriteOff(isAutomaticWriteOff);

    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPaymentAllocationService().listPayments(
      request,
      metadata,
      callback
    );
  }


  /**
   * Get List Invoices
   * @param {string} token
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listInvoices({
    token,
    // DSL
    searchValue,
    businessPartnerId,
    businessPartnerUuid,
    date,
    organizationId,
    organizationUuid,
    currencyId,
    currencyUuid,
    isMultiCurrency,
    transactionType,
    isAutomaticWriteOff,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListInvoicesRequest } = this.stubFile;
    const request = new ListInvoicesRequest();

    request.setSearchValue(searchValue);

    request.setBusinessPartnerId(
      getValidInteger(businessPartnerId)
    );
    request.setBusinessPartnerUuid(businessPartnerUuid);

    const { getTimestamp } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
    request.setDate(
      getTimestamp(date)
    );

    request.setOrganizationId(
      getValidInteger(organizationId)
    );
    request.setOrganizationUuid(organizationUuid);

    request.setCurrencyId(
      getValidInteger(currencyId)
    );
    request.setCurrencyUuid(currencyUuid);

    request.setIsMultiCurrency(isMultiCurrency);
    request.setTransactionType(transactionType);
    request.setIsAutomaticWriteOff(isAutomaticWriteOff);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPaymentAllocationService().listInvoices(
      request,
      metadata,
      callback
    );
  }


  /**
   * Get List Charges
   * @param {string} token
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listCharges({
    token,
    // DSL
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListChargesRequest } = this.stubFile;
    const request = new ListChargesRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPaymentAllocationService().listCharges(
      request,
      metadata,
      callback
    );
  }


  /**
   * Get List Transaction Organizations
   * @param {string} token
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listTransactionOrganizations({
    token,
    // DSL
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListTransactionOrganizationsRequest } = this.stubFile;
    const request = new ListTransactionOrganizationsRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPaymentAllocationService().listTransactionOrganizations(
      request,
      metadata,
      callback
    );
  }


  /**
   * Calculate and Get Difference
   * @param {string} token
   * @param {Array} paymentSelectionsList
   * @param {Array} invoiceSelectionList
   */
  calculateDifference({
    token,
    // DSL
    paymentSelectionsList = [],
    invoiceSelectionList = []
  }, callback) {
    const { CalculateDifferenceRequest } = this.stubFile;
    const request = new CalculateDifferenceRequest();

    const { getKeyValueSelectionToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');
    // payment selections list
    paymentSelectionsList.forEach(payment => {
      // selection format = { selectionId: number, selectionValues: [{ columName, value, valueType }] }
      const convertedRecord = getKeyValueSelectionToGRPC({
        selectionId: payment.recordId,
        selectionUuid: payment.recordUuid,
        selectionValues: payment.attributesList
      });

      request.addPayments(convertedRecord);
    });

    // invoice selections list
    invoiceSelectionList.forEach(invoice => {
      // selection format = { selectionId: number, selectionValues: [{ columName, value, valueType }] }
      const convertedRecord = getKeyValueSelectionToGRPC({
        selectionId: invoice.recordId,
        selectionUuid: invoice.recordUuid,
        selectionValues: invoice.attributesList
      });

      request.addInvocies(convertedRecord);
    });

    const metadata = getMetadata({
      token
    });

    this.getPaymentAllocationService().getDifference(
      request,
      metadata,
      callback
    );
  }


  /**
   * Process Payment Allocation
   * @param {string} token
   * @param {number} businessPartnerId
   * @param {string} businessPartnerUuid
   * @param {number} currencyId
   * @param {string} currencyUuid
   * @param {number} chargeId
   * @param {string} chargeUuid
   * @param {number} transactionOrganizationId
   * @param {string} transactionOrganizationUuid
   * @param {Date} date
   * @param {Array} paymentSelectionsList
   * @param {Array} invoiceSelectionList
   */
  process({
    token,
    // DSL
    businessPartnerId,
    businessPartnerUuid,
    currencyId,
    currencyUuid,
    chargeId,
    chargeUuid,
    transactionOrganizationId,
    transactionOrganizationUuid,
    date,
    description,
    paymentSelectionsList = [],
    invoiceSelectionList = []
  }, callback) {
    const { ProcessRequest } = this.stubFile;
    const request = new ProcessRequest();

    request.setBusinessPartnerId(
      getValidInteger(businessPartnerId)
    );
    request.setBusinessPartnerUuid(businessPartnerUuid);

    request.setCurrencyId(
      getValidInteger(currencyId)
    );
    request.setCurrencyUuid(currencyUuid);

    request.setChargeId(
      getValidInteger(chargeId)
    );
    request.setChargeUuid(chargeUuid);

    request.setTransactionOrganizationId(
      getValidInteger(transactionOrganizationId)
    );
    request.setTransactionOrganizationUuid(transactionOrganizationUuid);
    
    if (!isEmptyValue(date)) {
      const { getTimestamp } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
      request.setDate(
        getTimestamp(date)
      );
    }

    request.setDescription(description);

    const { getKeyValueSelectionToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');
    // payment selections list
    paymentSelectionsList.forEach(payment => {
      // selection format = { selectionId: number, selectionValues: [{ columName, value, valueType }] }
      const convertedRecord = getKeyValueSelectionToGRPC({
        selectionId: payment.recordId,
        selectionUuid: payment.recordUuid,
        selectionValues: payment.attributesList
      });

      request.addPayments(convertedRecord);
    });

    // invoice selections list
    invoiceSelectionList.forEach(invoice => {
      // selection format = { selectionId: number, selectionValues: [{ columName, value, valueType }] }
      const convertedRecord = getKeyValueSelectionToGRPC({
        selectionId: invoice.recordId,
        selectionUuid: invoice.recordUuid,
        selectionValues: invoice.attributesList
      });

      request.addInvocies(convertedRecord);
    });

    const metadata = getMetadata({
      token
    });

    this.getPaymentAllocationService().process(
      request,
      metadata,
      callback
    );
  }

}

module.exports = PaymentAllocation;
