/*************************************************************************************
 * Product: ADempiere gRPC Convert Values                                            *
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

 const convertValues = {

  /**
   * Get type of value
   * @deprecated replaced by getTypeOfValue into /src/utils/valueUtils.js
   * @param {mixed} value
   * @returns {string} Undefined, Boolean, String, Function...
   */
  typeOfValue(value) {
    const { getTypeOfValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
    return getTypeOfValue(value);
  },

  /**
   * @deprecated replaced by isEmptyValue into /src/utils/valueUtils.js
   * Checks if value is empty. Deep-checks arrays and objects
   * Note: isEmpty([]) == true, isEmpty({}) == true, isEmpty([{0:false},"",0]) == true, isEmpty({0:1}) == false
   * @param  {boolean|array|object|number|string|date|map|set|function} value
   * @returns {boolean}
   */
  isEmptyValue(value) {
    const { isEmptyValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

    return isEmptyValue(value);
  },

  /**
   * Return value converted, compatible with grpc
   * @param {mixed} value
   * @param {string} valueType
   * @returns {Value}
   */
  convertValueToGRPC({ value, valueType }) {
    if (!convertValues.isEmptyValue(valueType)) {
      return convertValues.convertValueToGRPCWithValueType({
        value,
        valueType
      });
    }

    return convertValues.convertValueToGRPCWithoutValueType({
      value
    });
  },

  /**
   * Return value converted, compatible with grpc
   * @param {mixed} value
   * @returns {Value}
   */
  convertValueToGRPCWithoutValueType({ value }) {
    let convertedValue;
    // evaluate type of value
    const { getTypeOfValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
    const typeOfValue = getTypeOfValue(value);
    switch (typeOfValue) {
      case 'Number':
        if (Number.isInteger(value)) {
          if (String(value).length >= 13 && value && value > 0) {
            convertedValue = convertValues.getValueFromDate(value);
          } else {
            convertedValue = convertValues.getValueFromInteger(value);
          }
          break;
        }
        convertedValue = convertValues.getValueFromDecimal(value);
        break;

      case 'Boolean':
        convertedValue = convertValues.getValueFromBoolean(value);
        break;

      case 'Date':
        convertedValue = convertValues.getValueFromDate(value);
        break;

      case 'String':
        let parsedValue = Date.parse(value)
        if (String(value).length >= 13 && parsedValue && parsedValue > 0) {
          convertedValue = convertValues.getValueFromDate(new Date(parsedValue));
        } else {
          convertedValue = convertValues.getValueFromString(value);
        }
        break;

      default:
        const { Value } = require('@adempiere/grpc-api/src/grpc/proto/base_data_type_pb.js');
        convertedValue = new Value();
        break;
    }
    return convertedValue;
  },

  /**
   * Convert value to grpc with value type
   * @author Edwin Betancourt <EdwinBetanc0urt@outlook.com>
   * @param {mixed} value
   * @param {string} valueType
   */
  convertValueToGRPCWithValueType({ value, valueType }) {
    const { Value } = require('@adempiere/grpc-api/src/grpc/proto/base_data_type_pb.js');
    const { ValueType } = Value;
    let convertedValue;

    switch (ValueType[valueType]) {
      // data type Number (integer)
      case ValueType.INTEGER:
        convertedValue = convertValues.getValueFromInteger(value);
        break;
      // data type Number (float)
      case ValueType.DECIMAL:
        convertedValue = convertValues.getValueFromDecimal(value);
        break;
      // data type Boolean
      case ValueType.BOOLEAN:
        convertedValue = convertValues.getValueFromBoolean(value);
        break;
      // data type String
      case ValueType.STRING:
        convertedValue = convertValues.getValueFromString(value);
        break;
      // data type Date
      case ValueType.DATE:
        convertedValue = convertValues.getValueFromDate(value);
        break;
      // determinate data type
      case ValueType.UNKNOWN:
      default:
        if (!convertValues.isEmptyValue(value)) {
          convertedValue = convertValues.convertValueToGRPCWithoutValueType({
            value
          });
        }
        break;
    }
    return convertedValue;
  },

  /**
   * Get value from integer to grpc
   * @param value
   * @return
   */
  getValueFromInteger(value) {
    const { Value } = require('@adempiere/grpc-api/src/grpc/proto/base_data_type_pb.js');
    const { ValueType } = Value;
    let convertedValue = new Value();

    convertedValue.setValueType(ValueType.INTEGER);
    if (!convertValues.isEmptyValue(value) && !Number.isNaN(value)) {
      convertedValue.setIntValue(Number(value));
    }
    return convertedValue;
  },

  /**
   * Get value from a string to grpc
   * @param value
   * @return
   */
  getValueFromString(value) {
    const { Value } = require('@adempiere/grpc-api/src/grpc/proto/base_data_type_pb.js');
    const { ValueType } = Value;
    const convertedValue = new Value();

    convertedValue.setValueType(ValueType.STRING);
    if (value) {
      convertedValue.setStringValue(String(value));
    }
    return convertedValue;
  },

  /**
   * Get value from a boolean value to grpc
   * @param value
   * @return
   */
  getValueFromBoolean(value) {
    const { Value } = require('@adempiere/grpc-api/src/grpc/proto/base_data_type_pb.js');
    const { ValueType } = Value;
    const convertedValue = new Value();
    convertedValue.setValueType(ValueType.BOOLEAN);
    if (typeof value === 'string') {
      value = value.trim();
      value = value !== 'N' && value !== '';
    }

    convertedValue.setBooleanValue(Boolean(value));
    return convertedValue;
  },

  /**
   * Get value from a date to grpc
   * @param value
   * @return
   */
  getValueFromDate(value) {
    const { Value } = require('@adempiere/grpc-api/src/grpc/proto/base_data_type_pb.js');
    const { ValueType } = Value;
    const convertedValue = new Value();
    convertedValue.setValueType(ValueType.DATE);

    const { getTimestamp } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
    const longValue = getTimestamp(value);
    convertedValue.setLongValue(longValue);

    return convertedValue;
  },

  /**
   * Get value from big decimal to grpc
   * @param value
   * @return
   */
  getValueFromDecimal(value) {
    const { Value } = require('@adempiere/grpc-api/src/grpc/proto/base_data_type_pb.js');
    const { ValueType } = Value;
    const convertedValue = new Value();
    convertedValue.setValueType(ValueType.DECIMAL);
    convertedValue.setDecimalValue(
      convertValues.getDecimalFromNumber(value)
    );

    return convertedValue;
  },

  /**
   * Get big decimal from number to grpc
   * @deprecated replaced by getDecimalToGRPC into /src/utils/baseDataTypeToGRPC.js
   * @param {number} numberValue
   * @return
   */
  getDecimalFromNumber(numberValue) {
    const { getDecimalToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');
    return getDecimalToGRPC(numberValue);
  },

  /**
   * Convert a parameter defined by columnName and value to Value Object
   * @deprecated replaced by getKeyValueToGRPC into /src/utils/baseDataTypeToGRPC.js
   * @param {string} columnName
   * @param {string}  valueType
   * @param {mixed}  value
   * @returns KeyValue Object
   */
  convertParameterToGRPC({ columnName, value, valueType }) {
    const { getKeyValueToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');

    const keyValue = getKeyValueToGRPC({
      columnName,
      value,
      valueType
    });

    // Return converted value
    return keyValue;
  },

  /**
   * Convert values map to compatible format
   * @param {map} mapToConvert
   * @param {string} returnType 'map', 'object', 'array'
   * @param {string} keyName, used in array pairs, default value is 'key'
   * @param {string} valueName, used in array pairs, default value is 'value'
   */
  convertValuesMapFromGRPC({ mapToConvert, returnType = 'map', keyName = 'key', valueName = 'value'}) {
    let returnValues;
    const { convertValueFromGRPC } = require('./convertBaseDataType.js');

    switch (returnType) {
      case 'object':
        returnValues = {};
        mapToConvert.forEach((value, key) => {
          returnValues[key] = convertValueFromGRPC(value);
        });
        break;

      case 'array':
        returnValues = [];
        mapToConvert.forEach((value, key) => {
          const item = {}
          item[keyName] = key;
          item[valueName] = convertValueFromGRPC(value);
          returnValues.push(item);
        });
        break;

      default:
      case 'map':
        returnValues = new Map();
        mapToConvert.forEach((value, key) => {
          returnValues.set(key, convertValueFromGRPC(value));
        });
        break;
    }

    return returnValues;
  },

  /**
   * @deprecated replaced by getCriteriaToGRPC into src/utils/baseDataTypeToGRPC.js
   * Get Criteria from Table Name
   * @param {string} tableName
   * @param {string} query
   * @param {string} whereClause
   * @param {string} referenceUuid
   * @param {mixed} value
   * @param {array}  valuesList mixed values
   * @param {array}  filters [{ columnName: String, value: Mixed, valueTo: Mixed, values: Array, operator: String}]
   * @param {array}  orderByColumnsList [{ columnName: String, orderType: Number }]
   * @param {string} orderByClause
   * @param {number} limit
   * @return {object} Criteria instance
   */
  convertCriteriaToGRPC({
    tableName,
    query,
    whereClause,
    referenceUuid,
    value,
    valuesList = [],
    filters = [],
    orderByClause,
    orderByColumnsList = [],
    limit
  }) {
    const { getCriteriaToGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeToGRPC.js');

    return getCriteriaToGRPC({
      tableName,
      query,
      whereClause,
      referenceUuid,
      value,
      valuesList,
      filters,
      orderByClause,
      orderByColumnsList,
      limit
    });
  }

};

module.exports = convertValues;
