/*************************************************************************************
 * Product: ADempiere gRPC General Value Utils Convert                               *
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

/**
 * Convert values map to compatible format
 * @param {map} mapToConvert
 * @param {string} returnType 'map', 'object', 'array'
 * @param {string} keyName, used in array pairs, default value is 'key'
 * @param {string} valueName, used in array pairs, default value is 'value'
 */
function getValuesMapFromGRPC({ mapToConvert, returnType = 'map', keyName = 'key', valueName = 'value' }) {
  let returnValues;
  const { getValueFromGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeFromGRPC.js');

  switch (returnType) {
    case 'object':
      returnValues = {};
      mapToConvert.forEach((value, key) => {
        returnValues[key] = getValueFromGRPC(value);
      });
      break;

    case 'array':
      returnValues = [];
      mapToConvert.forEach((value, key) => {
        const item = {}
        item[keyName] = key;
        item[valueName] = getValueFromGRPC(value);
        returnValues.push(item);
      });
      break;

    default:
    case 'map':
      returnValues = new Map();
      mapToConvert.forEach((value, key) => {
        returnValues.set(key, getValueFromGRPC(value));
      });
      break;
  }

  return returnValues;
}

module.exports = {
  getValuesMapFromGRPC
};
