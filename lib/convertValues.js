/*************************************************************************************
 * Product: ADempiere gRPC Convert Values                                            *
 * Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                      *
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
  }

};

module.exports = convertValues;
