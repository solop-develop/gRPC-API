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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                      *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.             *
 ************************************************************************************/

const stubFile = require('@adempiere/grpc-api/src/grpc/proto/base_data_type_pb.js');

/**
 * Get big decimal from number to grpc
 * @param {number} numberValue
 * @return {Decimal}
 */
function getDecimalToGRPC(numberValue) {
  const { Decimal } = require('@adempiere/grpc-api/src/grpc/proto/base_data_type_pb.js');
  const convertedDecimalValue = new Decimal();

  const { isEmptyValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
  if (!isEmptyValue(numberValue)) {
    if (Number.isInteger(numberValue)) {
      numberValue = numberValue.toFixed(2);
    }
    convertedDecimalValue.setDecimalValue(numberValue.toString());
    // get scale
    const scale = getScaleFromDecimal(numberValue)
    convertedDecimalValue.setScale(scale);
  }
  return convertedDecimalValue;
}

/**
 * Get scale to decimal
 * @param {number} numberValue 
 * @returns {number}
 */
function getScaleFromDecimal(numberValue) {
  const index = numberValue
    .toString()
    .indexOf('.');

  let scale = 0;
  if (index !== -1) {
    scale = numberValue.toString().length - index - 1;
  }
  return scale
}

/**
 * Convert a parameter defined by columnName and value to Value Object
 * @param {string} columnName
 * @param {string} valueType
 * @param {mixed} value
 * @returns KeyValue Object
 */
function getKeyValueToGRPC({ columnName, value, valueType }) {
  const { KeyValue } = stubFile;
  const keyValue = new KeyValue();
  keyValue.setKey(columnName);

  const { convertValueToGRPC } = require('@adempiere/grpc-api/lib/convertValues.js');
  const convertedValue = convertValueToGRPC({
    value,
    valueType
  });
  keyValue.setValue(convertedValue);

  // Return converted value
  return keyValue;
}

/**
 * Convert a list of parameter defined by columnName and value to Value Object
 * @param {number} selectionId keyColumn Value
 * @param {string} selectionUuid
 * @param {array}  selectionValues [{ columName: String, value: Mixed }]
 * @param {KeyValue} KeyValue Object
 */
function getKeyValueSelectionToGRPC({ selectionId, selectionUuid, selectionValues = [] }) {
  const { KeyValueSelection } = stubFile;
  const selectionInstance = new KeyValueSelection();

  const { isEmptyValue, getTypeOfValue, getValidId } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

  // set selection id from record
  selectionInstance.setSelectionId(
    getValidId(selectionId)
  );

  // set selection uuid from record
  if (!isEmptyValue(selectionUuid)) {
    selectionInstance.setSelectionUuid(selectionUuid);
  }

  // convert attributes values to selection
  if (getTypeOfValue(selectionValues) === 'String') {
    selectionValues = JSON.parse(selectionValues);
  }

  selectionValues.forEach(selectionItem => {
    if (getTypeOfValue(selectionItem) === 'String') {
      selectionItem = JSON.parse(selectionItem);
    }

    const convertedSelection = getKeyValueToGRPC({
      columnName: selectionItem.columnName,
      valueType: selectionItem.valueType,
      value: selectionItem.value
    });

    selectionInstance.addValues(convertedSelection);
  });

  return selectionInstance;
}

/**
 * Convert a parameter defined by columnName and value to Value Object
 * @param {string} columnName
 * @param {mixed}  value
 * @param {mixed}  valueTo
 * @param {array}  values
 * @param {string} operator
 * @returns Object
 */
function getConditionToGRPC({ columnName, value, valueTo, values = [], operator = 'VOID' }) {
  const { convertValueToGRPC } = require('@adempiere/grpc-api/lib/convertValues.js');
  const { Condition } = stubFile;
  const { Operator } = Condition;
  const conditionInstance = new Condition();
  conditionInstance.setColumnName(columnName);

  // set operator
  conditionInstance.setOperator(Operator.VOID); // 0
  if (operator) {
    conditionInstance.setOperator(Operator[operator]);
  }

  const { isEmptyValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
  // set value and value to
  if (!isEmptyValue(value)) {
    conditionInstance.setValue(
      convertValueToGRPC({ value })
    );
  }
  if (!isEmptyValue(valueTo)) {
    conditionInstance.setValueTo(
      convertValueToGRPC({
        value: valueTo
      })
    );
  }
  // set values
  if (!isEmptyValue(values)) {
    values.forEach(itemValue => {
      const convertedValue = convertValueToGRPC({
        value: itemValue
      });
      conditionInstance.addValues(convertedValue);
    });
  }
  //  Return converted condition
  return conditionInstance;
}

/**
 * Get order by property converted to gRPC
 * @param {string} columnName
 * @param {string} orderType 'ASCENDING' or 'DESCENDING'
 */
function getOrderByPropertyToGRPC({ columnName, orderType }) {
  const { OrderByProperty } = stubFile;
  const { OrderType } = OrderByProperty;
  const orderByInstance = new OrderByProperty;

  orderByInstance.setColumnName(columnName);
  // set order type, default is 0
  orderByInstance.setOrderType(OrderType.ASCENDING);
  if (orderType) {
    orderByInstance.setOrderType(OrderType[orderType]);
  }
  return orderByInstance;
}

/**
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
function getCriteriaToGRPC({
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
  const { Criteria } = stubFile;
  const criteria = new Criteria();

  const { isEmptyValue, getTypeOfValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');
  if (!isEmptyValue(tableName)) {
    criteria.setTableName(tableName);
  }
  if (!isEmptyValue(query)) {
    criteria.setQuery(query);
  }
  if (!isEmptyValue(whereClause)) {
    criteria.setWhereClause(whereClause);
  }

  criteria.setReferenceUuid(referenceUuid);

  const { convertValueToGRPC } = require('@adempiere/grpc-api/lib/convertValues.js')
  // add value
  if (!isEmptyValue(value)) {
    const valueGrpc = convertValueToGRPC({
      value
    });
    criteria.addValues(valueGrpc);
  }

  // add values list
  if (!isEmptyValue(valuesList)) {
    valuesList.forEach(itemValue => {
      const valueGrpc = convertValueToGRPC({
        value: itemValue
      });
      criteria.addValues(valueGrpc);
    });
  }

  // add conditions
  if (!isEmptyValue(filters)) {
    if (getTypeOfValue(filters) === 'String') {
      filters = JSON.parse(filters);
    }

    filters.forEach(condition => {
      let parsedCondition = condition;
      // set with get method is string value
      if (getTypeOfValue(condition) === 'String') {
        parsedCondition = JSON.parse(condition);
      }

      const criteriaGrpc = getConditionToGRPC({
        columnName: parsedCondition.column_name,
        value: parsedCondition.value,
        valueTo: parsedCondition.value_to,
        values: parsedCondition.values,
        operator: parsedCondition.operator
      });
      criteria.addConditions(criteriaGrpc);
    });
  }

  // set order by clause
  if (!isEmptyValue(orderByColumnsList)) {
    orderByColumnsList.forEach(itemOrderBy => {
      const orderBy = getOrderByPropertyToGRPC({
        columnName: itemOrderBy.column_name,
        orderType: itemOrderBy.order_type
      });
      criteria.addOrderByColumn(orderBy);
    });
  }
  if (!isEmptyValue(orderByClause)) {
    criteria.setOrderByClause(orderByClause);
  }

  if (!isEmptyValue(limit)) {
    criteria.setLimit(limit);
  }

  // return criteria
  return criteria;
}

module.exports = {
  // data type,
  getDecimalToGRPC,
  getScaleFromDecimal,
  //
  getConditionToGRPC,
  getCriteriaToGRPC,
  getKeyValueToGRPC,
  getKeyValueSelectionToGRPC,
  getOrderByPropertyToGRPC
};
