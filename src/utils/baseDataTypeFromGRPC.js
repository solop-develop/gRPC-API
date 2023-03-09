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

const stubFile = require('@adempiere/grpc-api/src/grpc/proto/base_data_type_pb.js');

/**
 * Get integer from a grpc value
 * @param integerValueToConvert
 * @return {number}
 */
function getIntegerFromGRPC(integerValueToConvert) {
  const { isEmptyValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

  if (isEmptyValue(integerValueToConvert)) {
    return undefined;
  }
  return integerValueToConvert.getIntValue();
}

/**
 * Get value from Decimal definition
 * @param {Decimal} decimalToConvert
 * @return {number}
 */
function getDecimalFromGRPC(decimalToConvert) {
  const { isEmptyValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

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
 * Get Decimal from Value definition
 * @param Value.Decicimal
 * @return {number}
 */
function getDecimalValueFromGRPC(decimalValueToConvert) {
  const { isEmptyValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
  const decimalObject = decimalValueToConvert.getDecimalValue();

  if (isEmptyValue(decimalObject)) {
    return undefined;
  }

  // Convert it
  return getDecimalFromGRPC(decimalObject);
}

/**
 * Get Boolean from a grpc value
 * @param booleanValueToConvert
 * @return
 */
function getBooleanValueFromGRPC(booleanValueToConvert) {
  const { isEmptyValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

  if (isEmptyValue(booleanValueToConvert)) {
    return false;
  }
  return booleanValueToConvert.getBooleanValue();
}

/**
 * Get String from a grpc value
 * @param stringValueToConvert
 * @param uppercase
 * @return {string}
 */
function getStringValueFromGRPC(stringValueToConvert, uppercase = false) {
  const { isEmptyValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

  if (isEmptyValue(stringValueToConvert)) {
    return undefined;
  }

  let stringValue = stringValueToConvert.getStringValue();
  // To Upper case
  if (uppercase) {
    stringValue = stringValue.toUpperCase();
  }
  return stringValue;
}

/**
 * Get Date from a grpc value
 * @param dateValueToConvert value to convert
 * @return {date}
 */
function getDateValueFromGRPC(dateValueToConvert) {
  const { isEmptyValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

  if (!isEmptyValue(dateValueToConvert) && dateValueToConvert.getLongValue() > 0) {
    return new Date(dateValueToConvert.getLongValue());
  }
  return undefined;
}

function getValueFromGRPC(valueToConvert) {
  const { isEmptyValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

  if (isEmptyValue(valueToConvert)) {
    return undefined;
  }

  const { Value } = stubFile;
  const { ValueType } = Value;

  let returnValue;
  switch (valueToConvert.getValueType()) {
    case ValueType.INTEGER:
      returnValue = getIntegerFromGRPC(valueToConvert);
      break;
    // data type Number (float)
    case ValueType.DECIMAL:
      returnValue = getDecimalValueFromGRPC(valueToConvert);
      break;
    // data type Boolean
    case ValueType.BOOLEAN:
      returnValue = getBooleanValueFromGRPC(valueToConvert);
      break;
    // data type String
    case ValueType.STRING:
      returnValue = getStringValueFromGRPC(valueToConvert);
      break;
    // data type Date
    case ValueType.DATE:
      returnValue = getDateValueFromGRPC(valueToConvert);
      break;
    // empty value
    default:
    case ValueType.UNKNOWN:
      returnValue = undefined;
      break;
  }
  return returnValue; 
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

function getRecordReferenceInfoFromGRPC(referenceInfo) {
  if (!referenceInfo) {
    return undefined;
  }
  return {
    uuid: referenceInfo.getUuid(),
    window_uuid: referenceInfo.getWindowUuid(),
    tab_uuid: referenceInfo.getTabUuid(),
    table_name: referenceInfo.getTableName(),
    where_clause: referenceInfo.getWhereClause(),
    record_count: referenceInfo.getRecordCount(),
    column_name: referenceInfo.getColumnName(),
    display_name: referenceInfo.getDisplayName(),
    value: getValueFromGRPC(
      referenceInfo.getValue()
    )
  };
}

module.exports = {
  getBooleanValueFromGRPC,
  getDateValueFromGRPC,
  getDecimalFromGRPC,
  getDecimalValueFromGRPC,
  getIntegerFromGRPC,
  getStringValueFromGRPC,
  getValueFromGRPC,
  //
  getRecordReferenceInfoFromGRPC,
  getCondition_Operator,
  getBusinessPartnerFromGRPC,
  getReportOutputFromGRPC
};
