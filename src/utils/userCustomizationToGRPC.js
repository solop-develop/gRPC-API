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
 * Get Field Attributes
 * @param {string} columnName
 * @param {string} valueType
 * @param {mixed} value
 * @returns KeyValue Object
 */
function getFieldAttributesToGRPC({
  columnName, sequence, color,
  isDefaultDisplayed, displaySize,
  displayComponentType, componenTemplateCode
}) {
  const { FieldAttributes } = stubFile;
  const fieldAttributesInstance = new FieldAttributes();

  fieldAttributesInstance.setcolumnName(columnName);
  fieldAttributesInstance.setSequence(sequence);
  fieldAttributesInstance.setColor(color);
  fieldAttributesInstance.setIsDefaultDisplayed(isDefaultDisplayed);
  fieldAttributesInstance.setDisplaySize(displaySize);
  fieldAttributesInstance.setDisplayComponentType(displayComponentType);
  fieldAttributesInstance.setComponentTemplateCode(componenTemplateCode);

  // Return converted grpc value
  return fieldAttributesInstance;
}

module.exports = {
  getFieldAttributesToGRPC
};
