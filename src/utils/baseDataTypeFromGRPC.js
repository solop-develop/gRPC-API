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

const baseDataTypeFromGRPC = {

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
  getCondition_Operator({ key, value }) {
    const { getValueOrKey } = require('@adempiere/grpc-api/src/utils/convertEnums.js')
    const { Condition } = require('@adempiere/grpc-api/src/grpc/proto/base_data_type_pb.js');
    const { Operator } = Condition;

    return getValueOrKey({
      list: Operator,
      key,
      value
    });
  }
}

module.exports = baseDataTypeFromGRPC;
