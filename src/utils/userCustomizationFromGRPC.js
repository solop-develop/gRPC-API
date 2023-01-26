/*************************************************************************************
 * Product: ADempiere gRPC Workflow Client Convert Utils                             *
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

const stubFile = require('@adempiere/grpc-api/src/grpc/proto/user_customization_pb.js');

/**
 * Get all moderation type or get key value type from value
 * @param {number} value
 * @param {string} key
    USER = 0;
    ROLE = 1;
    CLIENT = 2;
 */
function getLevel({ key, value }) {
  const { getValueOrKeyEnum } = require('@adempiere/grpc-api/src/utils/convertEnums.js');
  const { Level } = stubFile;

  return getValueOrKeyEnum({
    list: Level,
    key,
    value
  });
}

function getUserFromGRPC(userToConvert) {
  if (!userToConvert) {
    return undefined;
  }
  return {
    id: userToConvert.getId(),
    uuid: userToConvert.getUuid(),
    value: userToConvert.getValue(),
    name: userToConvert.getName(),
    description: userToConvert.getDescription()
  };
}

function getRoleFromGRPC(roleToConvert) {
  if (!roleToConvert) {
    return undefined;
  }
  return {
    id: roleToConvert.getId(),
    uuid: roleToConvert.getUuid(),
    value: roleToConvert.getValue(),
    name: roleToConvert.getName(),
    description: roleToConvert.getDescription()
  };
}

function getLevelCustomizationFromGRPC(levelCustomizationToConvert) {
  if (!levelCustomizationToConvert) {
    return undefined;
  }
  return {
    id: levelCustomizationToConvert.getId(),
    uuid: levelCustomizationToConvert.getUuid(),
    value: levelCustomizationToConvert.getValue(),
    name: levelCustomizationToConvert.getName(),
    description: levelCustomizationToConvert.getDescription()
  };
}

module.exports = {
  getLevel,
  getUserFromGRPC,
  getRoleFromGRPC,
  getLevelCustomizationFromGRPC
};
