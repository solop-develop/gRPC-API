/*************************************************************************************
 * Product: ADempiere gRPC Logs Client Convert Utils                                 *
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

function getRecentItemFromGRPC(recentItem) {
  if (!recentItem) {
    return undefined;
  }

  return {
    menu_uuid: recentItem.getMenuUuid(),
    menu_name: recentItem.getMenuName(),
    menu_description: recentItem.getMenuDescription(),
    window_uuid: recentItem.getWindowUuid(),
    tab_uuid: recentItem.getTabUuid(),
    table_id: recentItem.getTableId(),
    table_name: recentItem.getTableName(),
    id: recentItem.getId(),
    uuid: recentItem.getUuid(),
    display_name: recentItem.getDisplayName(),
    updated: new Date(recentItem.getUpdated()),
    reference_uuid: recentItem.getReferenceUuid(),
    action: recentItem.getAction()
  };
}

/**
 * Get all confidential type or get key value type from value
 * @param {number} value
 * @param {string} key
      PUBLIC: 0,
      PARTER: 1,
      INTERNAL: 2,
  */
function getEntityChat_ConfidentialType({ key, value }) {
  const { getValueOrKey } = require('@adempiere/grpc-api/src/utils/convertEnums.js')
  const { EntityChat } = require('@adempiere/grpc-api/src/grpc/proto/logs_pb.js');
  const { ConfidentialType } = EntityChat;

  return getValueOrKey({
    list: ConfidentialType,
    key,
    value
  });
}

/**
 * Get all moderation type or get key value type from value
 * @param {number} value
 * @param {string} key
      NOT_MODERATED: 0,
      BEFORE_PUBLISHING: 1,
      AFTER_PUBLISHING: 2,
  */
function getEntityChat_ModerationType({ key, value }) {
  const { getValueOrKey } = require('@adempiere/grpc-api/src/utils/convertEnums.js')
  const { EntityChat } = require('@adempiere/grpc-api/src/grpc/proto/logs_pb.js');
  const { ModerationType } = EntityChat;

  return getValueOrKey({
    list: ModerationType,
    key,
    value
  });
}

function getEntityChatsFromGRPC(entityChat) {
  if (!entityChat) {
    return undefined;
  }

  return {
    chat_uuid: entityChat.getChatUuid(),
    id: entityChat.getId(),
    uuid: entityChat.getUuid(),
    table_name: entityChat.getTableName(),
    chat_type_uuid: entityChat.getChatTypeUuid(),
    description: entityChat.getDescription(),
    confidential_type: entityChat.getConfidentialType(),
    confidential_type_name: getEntityChat_ConfidentialType({
      value: entityChat.getConfidentialType()
    }),
    moderation_type: entityChat.getModerationType(),
    moderation_type_name: getEntityChat_ModerationType({
      value: entityChat.getModerationType()
    }),
    log_date: new Date(entityChat.getLogDate()),
    user_id: entityChat.getUserId(),
    user_uuid: entityChat.getUserUuid(),
    user_name: entityChat.getUserName()
  };
};

module.exports = {
  getEntityChatsFromGRPC,
  getRecentItemFromGRPC
};
