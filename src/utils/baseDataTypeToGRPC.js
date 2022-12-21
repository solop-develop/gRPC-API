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
 * Convert a parameter defined by columnName and value to Value Object
 * @param {string} columnName
 * @param {mixed}  value
 * @param {mixed}  valueTo
 * @param {array}  values
 * @param {string} operator
 * @returns Object
 */
function convertConditionToGRPC({ columnName, value, valueTo, values = [], operator = 'VOID' }) {
  const { isEmptyValue, convertValueToGRPC } = require('@adempiere/grpc-api/lib/convertValues.js');
  const { Condition } = require('@adempiere/grpc-api/src/grpc/proto/base_data_type_pb.js');
  const { Operator } = Condition;
  const conditionInstance = new Condition();
  conditionInstance.setColumnName(columnName);

  // set operator
  conditionInstance.setOperator(Operator.VOID); // 0
  if (operator) {
    conditionInstance.setOperator(Operator[operator]);
  }

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

module.exports = {
  convertConditionToGRPC
};
