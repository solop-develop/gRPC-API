/*************************************************************************************
 * Product: ADempiere gRPC Value Utils                                               *
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

/**
 * Get type of value
 * @param {mixed} value
 * @returns {string} Undefined, Boolean, String, Function...
 */
function getTypeOfValue(value) {
  // '[object typeValue]'
  const typeValue = Object.prototype
    .toString
    .call(value)
    .match(/^\[object\s(.*)\]$/)[1];
  return typeValue;
}

/**
 * Checks if value is empty. Deep-checks arrays and objects
 * Note: isEmpty([]) == true, isEmpty({}) == true, isEmpty([{0:false},"",0]) == true, isEmpty({0:1}) == false
 * @param  {boolean|array|object|number|string|date|map|set|function} value
 * @returns {boolean}
 */
function isEmptyValue(value) {
  const typeValue = getTypeOfValue(value);
  let isEmpty = true;

  switch (typeValue) {
    case 'Boolean':
    case 'Date':
    case 'Function': // Or class
    case 'Math': // TODO: Evaluate as number
    case 'RegExp':
      isEmpty = false;
      break;

    case 'String':
      isEmpty = Boolean(!value.trim().length);
      break;

    case 'Number':
      isEmpty = false;
      if (Number.isNaN(value)) {
        isEmpty = true;
      }
      break;

    case 'JSON':
      isEmpty = true;
      if (value.trim().length) {
        isEmpty = Boolean(value.trim() === '{}');
      }
      break;

    case 'Object':
      isEmpty = Boolean(!Object.keys(value).length);
      break;

    case 'Arguments':
    case 'Array':
      isEmpty = Boolean(!value.length);
      break;

    case 'Map':
    case 'Set':
      isEmpty = Boolean(!value.size);
      break;

    case 'Undefined':
    case 'Error':
    case 'Null':
    default:
      isEmpty = true;
      break;
  }

  return isEmpty;
}

/**
 * Get Valid Identifier
 * @param {string|numner} id
 * @param {number}
 * @deprecated Use {@link #getValidInteger(id)} instead
 */
function getValidId(id) {
  return getValidInteger(id)
}

/**
 * Get Valid Integer
 * @param {string|numner} id
 * @param {number}
 */
function getValidInteger(id) {
  if (!isEmptyValue(id) && !Number.isNaN(id)) {
    return Number.parseInt(id, 10);
  }

  return 0;
}

/**
 * Get long (timestamp) from value
 * @param {String|Number|Date} dateValue
 * @returns {Number} number of milliseconds
 */
function getTimestamp(dateValue) {
  let value = 0;
  if (isEmptyValue(dateValue)) {
    return value;
  }

  const typeOfValue = getTypeOfValue(dateValue);
  if (typeOfValue === 'Date') {
    return dateValue.getTime();
  }
  else if (typeOfValue === 'String' || typeOfValue == 'Number') {
    value = Date.parse(dateValue);
    // value = new Date(dateValue)
  }
  if (isNaN(value)) {
    value = 0
  }

  return value;
}

module.exports = {
  getTypeOfValue,
  isEmptyValue,
  getTimestamp,
  getValidId,
  getValidInteger
};
