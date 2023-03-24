/*************************************************************************************
 * Product: ADempiere gRPC Payment Print/Export Client                               *
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
const { getValidId } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

class PaymentPrintExport {

  /**
   * File on generated stub
   */
  stubFile = require('@adempiere/grpc-api/src/grpc/proto/payment_print_export_pb.js');

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

    this.initPaymentPrintExportService();
    console.log('ADempiere Payment Print/Export Client Started');
  }

  // Init connection
  initPaymentPrintExportService() {
    const grpc = require('@grpc/grpc-js');
    const { PaymentPrintExportClient } = require('@adempiere/grpc-api/src/grpc/proto/payment_print_export_grpc_pb');
    this.paymentPrintExport = new PaymentPrintExportClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Payment Print/Export Service
  getPaymentPrintExport() {
    return this.paymentPrintExport;
  }

  /**
   * List Payment Selection
   * @param {string} searchValue
   * @param {array} contextAttributes
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listPaymentSelections({
    token,
    searchValue,
    pageSize,
    pageToken
  }, callback) {
    const { ListPaymentSelectionsRequest } = this.stubFile;
    const request = new ListPaymentSelectionsRequest();
    request.setSearchValue(searchValue);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().listPaymentSelections(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get Payment Selection
   * @param {number} id
   * @param {string} uuid
   */
  getPaymentSelection({
    token,
    id,
    uuid
  }, callback) {
    const { GetPaymentSelectionRequest } = this.stubFile;
    const request = new GetPaymentSelectionRequest();

    request.setUuid(uuid);
    request.setId(
      getValidId(id)
    );

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().getPaymentSelection(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Payment Rules
   * @param {string} searchValue
   * @param {number} paymentSelectionId
   * @param {string} paymentSelectionUuid
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listPaymentRules({
    token,
    searchValue,
    paymentSelectionId,
    paymentSelectionUuid,
    pageSize,
    pageToken
  }, callback) {
    const { ListPaymentRulesRequest } = this.stubFile;
    const request = new ListPaymentRulesRequest();

    request.setSearchValue(searchValue);

    request.setPaymentSelectionId(
      getValidId(paymentSelectionId)
    );
    request.setPaymentSelectionUuid(paymentSelectionUuid);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().listPaymentRules(
      request,
      metadata,
      callback
    );
  }

  /**
   * List Payments
   * @param {string} searchValue
   * @param {number} paymentSelectionId
   * @param {string} paymentSelectionUuid
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listPayments({
    token,
    searchValue,
    paymentSelectionId,
    paymentSelectionUuid,
    paymentRuleId,
    paymentRuleUuid,
    pageSize,
    pageToken
  }, callback) {
    const { ListPaymentsRequest } = this.stubFile;
    const request = new ListPaymentsRequest();

    request.setSearchValue(searchValue);

    request.setPaymentSelectionId(
      getValidId(paymentSelectionId)
    );
    request.setPaymentSelectionUuid(paymentSelectionUuid);

    request.setPaymentRuleId(
      getValidId(paymentRuleId)
    );
    request.setPaymentRuleUuid(paymentRuleUuid);

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().listPayments(
      request,
      metadata,
      callback
    );
  }

  /**
   * Get Document No
   * @param {string} searchValue
   * @param {number} paymentSelectionId
   * @param {string} paymentSelectionUuid
   * @param {number} pageSize
   * @param {string} pageToken
   */
  getDocumentNo({
    token,
    bankAccountId,
    bankAccountUuid,
    paymentRuleId,
    paymentRuleUuid
  }, callback) {
    const { GetDocumentNoRequest } = this.stubFile;
    const request = new GetDocumentNoRequest();

    request.setBankAccountId(
      getValidId(bankAccountId)
    );
    request.setBankAccountUuid(bankAccountUuid);

    request.setPaymentRuleId(
      getValidId(paymentRuleId)
    );
    request.setPaymentRuleUuid(paymentRuleUuid);

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().getDocumentNo(
      request,
      metadata,
      callback
    );
  }

  /**
   * Process and Create EFT Payment
   * @param {number} paymentSelectionId
   * @param {string} paymentSelectionUuid
   * @param {number} paymentRuleId
   * @param {string} paymentRuleUuid
   * @param {string} documentNo
   */
  process({
    token,
    paymentSelectionId,
    paymentSelectionUuid,
    paymentRuleId,
    paymentRuleUuid,
    documentNo
  }, callback) {
    const { ProcessRequest } = this.stubFile;
    const request = new ProcessRequest();

    request.setPaymentSelectionId(
      getValidId(paymentSelectionId)
    );
    request.setPaymentSelectionUuid(paymentSelectionUuid);

    request.setPaymentRuleId(
      getValidId(paymentRuleId)
    );
    request.setPaymentRuleUuid(paymentRuleUuid);

    request.setDocumentNo(documentNo);

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().process(
      request,
      metadata,
      callback
    );
  }

  /**
   * Process and Create EFT Payment
   * @param {number} paymentSelectionId
   * @param {string} paymentSelectionUuid
   * @param {number} paymentRuleId
   * @param {string} paymentRuleUuid
   * @param {string} documentNo
   */
  export({
    token,
    paymentSelectionId,
    paymentSelectionUuid,
    paymentRuleId,
    paymentRuleUuid,
    documentNo
  }, callback) {
    const { ExportRequest } = this.stubFile;
    const request = new ExportRequest();

    request.setPaymentSelectionId(
      getValidId(paymentSelectionId)
    );
    request.setPaymentSelectionUuid(paymentSelectionUuid);

    request.setPaymentRuleId(
      getValidId(paymentRuleId)
    );
    request.setPaymentRuleUuid(paymentRuleUuid);

    request.setDocumentNo(documentNo);

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().export(
      request,
      metadata,
      callback
    );
  }

  /**
   * Print Payments
   * @param {number} paymentSelectionId
   * @param {string} paymentSelectionUuid
   * @param {number} paymentRuleId
   * @param {string} paymentRuleUuid
   * @param {string} documentNo
   */
  print({
    token,
    paymentSelectionId,
    paymentSelectionUuid,
    paymentRuleId,
    paymentRuleUuid,
    documentNo
  }, callback) {
    const { PrintRequest } = this.stubFile;
    const request = new PrintRequest();

    request.setPaymentSelectionId(
      getValidId(paymentSelectionId)
    );
    request.setPaymentSelectionUuid(paymentSelectionUuid);

    request.setPaymentRuleId(
      getValidId(paymentRuleId)
    );
    request.setPaymentRuleUuid(paymentRuleUuid);

    request.setDocumentNo(documentNo);

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().print(
      request,
      metadata,
      callback
    );
  }

  /**
   * Confirm Print
   * @param {number} paymentSelectionId
   * @param {string} paymentSelectionUuid
   * @param {number} paymentRuleId
   * @param {string} paymentRuleUuid
   * @param {string} documentNo
   */
  confirmPrint({
    token,
    paymentSelectionId,
    paymentSelectionUuid,
    paymentRuleId,
    paymentRuleUuid,
    documentNo
  }, callback) {
    const { ConfirmPrintRequest } = this.stubFile;
    const request = new ConfirmPrintRequest();

    request.setPaymentSelectionId(
      getValidId(paymentSelectionId)
    );
    request.setPaymentSelectionUuid(paymentSelectionUuid);

    request.setPaymentRuleId(
      getValidId(paymentRuleId)
    );
    request.setPaymentRuleUuid(paymentRuleUuid);

    request.setDocumentNo(documentNo);

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().confirmPrint(
      request,
      metadata,
      callback
    );
  }

  /**
   * Print Remittance
   * @param {number} paymentSelectionId
   * @param {string} paymentSelectionUuid
   * @param {number} paymentRuleId
   * @param {string} paymentRuleUuid
   * @param {string} documentNo
   */
  printRemittance({
    token,
    paymentSelectionId,
    paymentSelectionUuid,
    paymentRuleId,
    paymentRuleUuid,
    documentNo
  }, callback) {
    const { PrintRemittanceRequest } = this.stubFile;
    const request = new PrintRemittanceRequest();

    request.setPaymentSelectionId(
      getValidId(paymentSelectionId)
    );
    request.setPaymentSelectionUuid(paymentSelectionUuid);

    request.setPaymentRuleId(
      getValidId(paymentRuleId)
    );
    request.setPaymentRuleUuid(paymentRuleUuid);

    request.setDocumentNo(documentNo);

    const metadata = getMetadata({
      token
    });

    this.getPaymentPrintExport().printRemittance(
      request,
      metadata,
      callback
    );
  }

}

module.exports = PaymentPrintExport;
