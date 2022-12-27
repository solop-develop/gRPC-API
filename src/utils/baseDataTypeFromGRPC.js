/*************************************************************************************
 * Product: ADempiere gRPC Business Data Client Convert Utils                        *
 * Copyright (C) 2012-2020 E.R.P. Consultores y Asociados, C.A.                      *
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

/**
 * Get value from Decimal definition
 * @param {Decimal} decimalToConvert
 * @return {number}
 */
function getDecimalFromGRPC(decimalToConvert) {
  const { isEmptyValue } = require('./valueUtils');

  if (isEmptyValue(decimalToConvert)) {
    return undefined;
  }

  const value = decimalToConvert.getDecimalValue();
  if (isEmptyValue(value)) {
    return undefined;
  }

  // return number value
  return Number(value);
}

/**
 * Get all operator or get key value type from value
 * @param {string} key
 * @param {number} value
 * @returns {number|string|object}
    VOID = 0;
    EQUAL = 1;
    NOT_EQUAL = 2;
    LIKE = 3;
    NOT_LIKE = 4;
    GREATER = 5;
    GREATER_EQUAL = 6;
    LESS = 7;
    LESS_EQUAL = 8;
    BETWEEN = 9;
    NOT_NULL = 10;
    NULL = 11;
    IN = 12;
    NOT_IN = 13;
 */
function getCondition_Operator({ key, value }) {
  const { getValueOrKey } = require('@adempiere/grpc-api/src/utils/convertEnums.js')
  const { Condition } = require('@adempiere/grpc-api/src/grpc/proto/base_data_type_pb.js');
  const { Operator } = Condition;

  return getValueOrKey({
    list: Operator,
    key,
    value
  });
}

/**
 * Get Business Partner Convert From gRPC
 */
function getBusinessPartnerFromGRPC(businessPartnerToConvert) {
  if (!businessPartnerToConvert) {
    return undefined;
  }
  return {
    uuid: businessPartnerToConvert.getUuid(),
    id: businessPartnerToConvert.getId(),
    value: businessPartnerToConvert.getValue(),
    tax_id: businessPartnerToConvert.getTaxId(),
    duns: businessPartnerToConvert.getDuns(),
    naics: businessPartnerToConvert.getNaics(),
    name: businessPartnerToConvert.getName(),
    last_name: businessPartnerToConvert.getLastName(),
    description: businessPartnerToConvert.getDescription()
  };
}

function getReportOutputFromGRPC(reportOutputToConvert) {
  if (!reportOutputToConvert) {
    return undefined;
  }
  return {
    uuid: reportOutputToConvert.getUuid(),
    name: reportOutputToConvert.getName(),
    description: reportOutputToConvert.getDescription(),
    file_name: reportOutputToConvert.getFileName(),
    output: reportOutputToConvert.getOutput(),
    mime_type: reportOutputToConvert.getMimeType(),
    data_cols: reportOutputToConvert.getDataCols(),
    data_rows: reportOutputToConvert.getDataRows(),
    header_name: reportOutputToConvert.getHeaderName(),
    footer_name: reportOutputToConvert.getFooterName(),
    print_format_uuid: reportOutputToConvert.getPrintFormatUuid(),
    report_view_uuid: reportOutputToConvert.getReportViewUuid(),
    table_name: reportOutputToConvert.getTableName(),
    output_stream: reportOutputToConvert.getOutputStream(),
    output_stream_asB64: reportOutputToConvert.getOutputStream_asB64(),
    output_stream_asU8: reportOutputToConvert.getOutputStream_asU8(),
    report_type: reportOutputToConvert.getReportType()
  };
}

module.exports = {
  getDecimalFromGRPC,
  getCondition_Operator,
  getBusinessPartnerFromGRPC,
  getReportOutputFromGRPC
};
