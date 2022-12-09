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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                     *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program. If not, see <https://www.gnu.org/licenses/>.             *
 ************************************************************************************/

const logsFromGRPC = {

  convertRecentItemFromGRPC(recentItem) {
    if (recentItem) {
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
    return undefined;
  }

};

module.exports = logsFromGRPC;
