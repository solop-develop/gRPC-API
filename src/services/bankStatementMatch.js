/*************************************************************************************
 * Product: ADempiere gRPC Bank Statement Match Client                               *
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
const { getValidInteger } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

class BankStatementMatch {

  /**
   * File on generated stub
   */
  stubFile = require('@adempiere/grpc-api/src/grpc/proto/bank_statement_match_pb.js');

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

    this.initBankStatementMatchService();
    console.log('ADempiere Bank Statement Match Client Started');
  }

  // Init connection
  initBankStatementMatchService() {
    const grpc = require('@grpc/grpc-js');
    const { BankStatementMatchClient } = require('@adempiere/grpc-api/src/grpc/proto/bank_statement_match_grpc_pb.js');
    this.bankStatementMatchService = new BankStatementMatchClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Bank Statement Match Service
  getBankStatementMatchService() {
    return this.bankStatementMatchService;
  }


  /**
   * List Imported Bank Movements
   * @param {string} searchValue
   * @param {array} contextAttributes
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listImportedBankMovements({
    token,
    searchValue,
    pageSize,
    pageToken,
    bankAccountId,
    bankAccountUuid,
    businessPartnerId,
    businessPartnerUuid,
    paymentAmountFrom,
    paymentAmountTo,
    transactionDateFrom,
    transactionDateTo,
    matchMode
  }, callback) {
    const { ListImportedBankMovementsRequest } = this.stubFile;
    const request = new ListImportedBankMovementsRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    request.setBankAccountId(
      getValidInteger(bankAccountId)
    );
    request.setBankAccountUuid(bankAccountUuid);
    request.setBusinessPartnerId(
      getValidInteger(businessPartnerId)
    );
    request.setBusinessPartnerUuid(businessPartnerUuid);

    const { getDecimalToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');
    request.setPaymentAmountFrom(
      getDecimalToGRPC(paymentAmountFrom)
    );
    request.setPaymentAmountTo(
      getDecimalToGRPC(paymentAmountTo)
    );

    const { getTimestamp } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
    request.setTransactionDateFrom(
      getTimestamp(transactionDateFrom)
    );
    request.setTransactionDateTo(
      getTimestamp(transactionDateTo)
    );

    request.setMatchMode(matchMode);

    const metadata = getMetadata({
      token
    });

    this.getBankStatementMatchService().listImportedBankMovements(
      request,
      metadata,
      callback
    );
  }


  /**
   * List Payments
   * @param {string} searchValue
   * @param {array} contextAttributes
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listPayments({
    token,
    searchValue,
    pageSize,
    pageToken,
    bankAccountId,
    bankAccountUuid,
    businessPartnerId,
    businessPartnerUuid,
    paymentAmountFrom,
    paymentAmountTo,
    transactionDateFrom,
    transactionDateTo,
    matchMode
  }, callback) {
    const { ListPaymentsRequest } = this.stubFile;
    const request = new ListPaymentsRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    request.setBankAccountId(
      getValidInteger(bankAccountId)
    );
    request.setBankAccountUuid(bankAccountUuid);
    request.setBusinessPartnerId(
      getValidInteger(businessPartnerId)
    );
    request.setBusinessPartnerUuid(businessPartnerUuid);

    const { getDecimalToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');
    request.setPaymentAmountFrom(
      getDecimalToGRPC(paymentAmountFrom)
    );
    request.setPaymentAmountTo(
      getDecimalToGRPC(paymentAmountTo)
    );

    const { getTimestamp } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
    request.setTransactionDateFrom(
      getTimestamp(transactionDateFrom)
    );
    request.setTransactionDateTo(
      getTimestamp(transactionDateTo)
    );

    request.setMatchMode(matchMode);

    const metadata = getMetadata({
      token
    });

    this.getBankStatementMatchService().listPayments(
      request,
      metadata,
      callback
    );
  }


  /**
   * List Matching Movements
   * @param {string} searchValue
   * @param {array} contextAttributes
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listMatchingMovements({
    token,
    searchValue,
    pageSize,
    pageToken,
    bankAccountId,
    bankAccountUuid,
    businessPartnerId,
    businessPartnerUuid,
    paymentAmountFrom,
    paymentAmountTo,
    transactionDateFrom,
    transactionDateTo,
    matchMode
  }, callback) {
    const { ListMatchingMovementsRequest } = this.stubFile;
    const request = new ListMatchingMovementsRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    request.setBankAccountId(
      getValidInteger(bankAccountId)
    );
    request.setBankAccountUuid(bankAccountUuid);
    request.setBusinessPartnerId(
      getValidInteger(businessPartnerId)
    );
    request.setBusinessPartnerUuid(businessPartnerUuid);

    const { getDecimalToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');
    request.setPaymentAmountFrom(
      getDecimalToGRPC(paymentAmountFrom)
    );
    request.setPaymentAmountTo(
      getDecimalToGRPC(paymentAmountTo)
    );

    const { getTimestamp } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
    request.setTransactionDateFrom(
      getTimestamp(transactionDateFrom)
    );
    request.setTransactionDateTo(
      getTimestamp(transactionDateTo)
    );

    request.setMatchMode(matchMode);

    const metadata = getMetadata({
      token
    });

    this.getBankStatementMatchService().listMatchingMovements(
      request,
      metadata,
      callback
    );
  }


  /**
   * Process Movements
   * @param {string} searchValue
   * @param {array} contextAttributes
   * @param {number} pageSize
   * @param {string} pageToken
   */
  processMovements({
    token,
    bankAccountId,
    bankAccountUuid,
    businessPartnerId,
    businessPartnerUuid,
    paymentAmountFrom,
    paymentAmountTo,
    transactionDateFrom,
    transactionDateTo,
    matchMode
  }, callback) {
    const { ListMatchingMovementsRequest } = this.stubFile;
    const request = new ListMatchingMovementsRequest();

    request.setBankAccountId(
      getValidInteger(bankAccountId)
    );
    request.setBankAccountUuid(bankAccountUuid);
    request.setBusinessPartnerId(
      getValidInteger(businessPartnerId)
    );
    request.setBusinessPartnerUuid(businessPartnerUuid);

    const { getDecimalToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');
    request.setPaymentAmountFrom(
      getDecimalToGRPC(paymentAmountFrom)
    );
    request.setPaymentAmountTo(
      getDecimalToGRPC(paymentAmountTo)
    );

    const { getTimestamp } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
    request.setTransactionDateFrom(
      getTimestamp(transactionDateFrom)
    );
    request.setTransactionDateTo(
      getTimestamp(transactionDateTo)
    );

    request.setMatchMode(matchMode);

    const metadata = getMetadata({
      token
    });

    this.getBankStatementMatchService().processMovements(
      request,
      metadata,
      callback
    );
  }

}

module.exports = BankStatementMatch;
