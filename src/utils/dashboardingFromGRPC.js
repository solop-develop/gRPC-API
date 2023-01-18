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

const dashboardingFromGRPC = {

  convertDashboardFromGRPC(dashboard) {
    if (dashboard) {
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
    return undefined;
  },

  convertChartSerieFromGRPC(serie) {
    if (serie) {
      const { getDecimalFromGRPC } = require('@adempiere/grpc-api/lib/convertBaseDataType.js');

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
    return undefined;
  },

  convertChartFromGRPC(chart) {
    if (chart) {
      const {
        getDecimalFromGRPC
      } = require('@adempiere/grpc-api/lib/convertBaseDataType.js');

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
          return dashboardingFromGRPC.convertChartSerieFromGRPC(serie);
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
    return undefined;
  },

  convertPendingDocumentFromGRPC(pendingDocumentToConvert) {
    if (pendingDocumentToConvert) {
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
    return undefined;
  },

  convertFavoriteFromGRPC(favorite) {
    if (favorite) {
      return {
        menu_uuid: favorite.getMenuUuid(),
        menu_name: favorite.getMenuName(),
        menu_description: favorite.getMenuDescription(),
        reference_uuid: favorite.getReferenceUuid(),
        action: favorite.getAction()
      };
    }
    return undefined;
  }

};

module.exports = dashboardingFromGRPC;
