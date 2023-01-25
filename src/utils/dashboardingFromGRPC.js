/*************************************************************************************
 * Product: ADempiere gRPC Dashboarding Client Convert Utils                         *
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

function getDashboardFromGRPC(dashboard) {
  if (!dashboard) {
    return undefined;
  }
  return {
    id: dashboard.getId(),
    uuid: dashboard.getUuid(),
    window_uuid: dashboard.getWindowUuid(),
    browser_uuid: dashboard.getBrowserUuid(),
    name: dashboard.getName(),
    description: dashboard.getDescription(),
    html: dashboard.getHtml(),
    column_no: dashboard.getColumnNo(),
    line_no: dashboard.getLineNo(),
    is_collapsible: dashboard.getIsCollapsible(),
    is_open_by_default: dashboard.getIsOpenByDefault(),
    is_event_required: dashboard.getIsEventRequired(),
    file_name: dashboard.getFileName(),
    dashboard_type: dashboard.getDashboardType(),
    chart_type: dashboard.getChartType()
  };
}

function getChartSerieFromGRPC(serie) {
  if (!serie) {
    return undefined;
  }
  const {
    getDecimalFromGRPC
  } = require('@adempiere/grpc-api/src/utils/baseDataTypeFromGRPC.js');

  return {
    name: serie.getName(),
    data_set: serie.getDataSetList().map(dataSet => {
      return {
        name: dataSet.getName(),
        value: getDecimalFromGRPC(
          dataSet.getValue()
        ),
      }
    })
  };
}

function getChartFromGRPC(chart) {
  if (!chart) {
    return undefined;
  }
  const {
    getDecimalFromGRPC
  } = require('@adempiere/grpc-api/src/utils/baseDataTypeFromGRPC.js');

  return {
    uuid: chart.getUuid(),
    id: chart.getId(),
    name: chart.getName(),
    description: chart.getDescription(),
    x_axis_label: chart.getXAxisLabel(),
    y_axis_label: chart.getYAxisLabel(),
    measure_target: getDecimalFromGRPC(
      chart.getMeasureTarget()
    ),
    series: chart.getSeriesList().map(serie => {
      return getChartSerieFromGRPC(serie);
    }),
    color_schemas: chart.getColorSchemasList().map(colorSchema => {
      return {
        name: undefined,
        color: colorSchema.getColor(),
        percent: getDecimalFromGRPC(
          colorSchema.getPercent()
        )
      }
    })
  };
}

function getPendingDocumentFromGRPC(pendingDocumentToConvert) {
  if (!pendingDocumentToConvert) {
    return undefined;
  }
  const {
    convertCriteriaFromGRPC
  } = require('@adempiere/grpc-api/lib/convertBaseDataType.js');

  return {
    window_uuid: pendingDocumentToConvert.getWindowUuid(),
    form_uuid: pendingDocumentToConvert.getFormUuid(),
    document_name: pendingDocumentToConvert.getDocumentName(),
    document_description: pendingDocumentToConvert.getDocumentDescription(),
    sequence: pendingDocumentToConvert.getSequence(),
    record_count: pendingDocumentToConvert.getRecordCount(),
    criteria: convertCriteriaFromGRPC(
      pendingDocumentToConvert.getCriteria()
    )
  };
}

function getFavoriteFromGRPC(favorite) {
  if (!favorite) {
    return undefined;
  }
  return {
    menu_uuid: favorite.getMenuUuid(),
    menu_name: favorite.getMenuName(),
    menu_description: favorite.getMenuDescription(),
    reference_uuid: favorite.getReferenceUuid(),
    action: favorite.getAction()
  };
}


/**
 * Get all moderation type or get key value type from value
 * @param {number} value
 * @param {string} key
      WINDOW = 0;
      PROCESS = 1;
      REPORT = 2;
      BROWSER = 3;
      FORM = 4;
      WORKFLOW = 5;
 */
function getAction({ key, value }) {
  const { getValueOrKeyEnum } = require('@adempiere/grpc-api/src/utils/convertEnums.js');
  const { Action } = require('@adempiere/grpc-api/src/grpc/proto/dashboarding_pb.js');

  return getValueOrKeyEnum({
    list: Action,
    key,
    value
  });
}

function getNotificationFromGRPC(notificationToConvert) {
  if (!notificationToConvert) {
    return undefined;
  }

  return {
    name: notificationToConvert.getName(),
    description: notificationToConvert.getDescription(),
    quantity: notificationToConvert.getQuantity(),
    action: notificationToConvert.getAction(),
    action_name: getAction({
      value: notificationToConvert.getAction()
    }),
    action_uuid: notificationToConvert.getActionUuid()
  };
}

module.exports = {
  getAction,
  getDashboardFromGRPC,
  getChartSerieFromGRPC,
  getChartFromGRPC,
  getPendingDocumentFromGRPC,
  getFavoriteFromGRPC,
  getNotificationFromGRPC
};
