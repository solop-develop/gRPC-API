/*************************************************************************************
 * Product: ADempiere gRPC Base Data Type Client Convert Utils                       *
 * Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                      *
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

 const convertBaseDataType = {

  /**
   * Convert criteria to json structure
   * @param {Criteria} criteriaToConvert
   * TODO: Add convert condition from gRPC and order by column from gRPC
   */
  convertCriteriaFromGRPC(criteriaToConvert) {
    if (criteriaToConvert) {
      const { getValueFromGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeFromGRPC.js');

      return {
        table_name: criteriaToConvert.getTableName(),
        query: criteriaToConvert.getQuery(),
        where_clause: criteriaToConvert.getWhereClause(),
        order_by_clause: criteriaToConvert.getOrderByClause(),
        reference_uuid: criteriaToConvert.getReferenceUuid(),
        filters: criteriaToConvert.getConditionsList().map(condition => {
          return {
            column_name: condition.getColumnName(),
            value: condition.getValue(),
            value_to: condition.getvValueTo(),
            values: condition.getValues(),
            operator: condition.getOperator()
          }
        }),
        values: criteriaToConvert.getValuesList().map(value => {
          return getValueFromGRPC(value);
        }),
        order_by_columns: criteriaToConvert.getOrderByColumnList().map(orderBy => {
          return convertBaseDataType.convertOrderByPropertyFromGRPC(orderBy);
        }),
        limit: criteriaToConvert.getLimit()
      };
    }
    return undefined;
  },

  convertOrderByPropertyFromGRPC(orderByPropertyToConvert) {
    if (orderByPropertyToConvert) {
      const { getOrderByProperty_OrderType } = require('./convertEnums.js');

      return {
        column_name: orderByPropertyToConvert.getColumnName(),
        order_type: orderByPropertyToConvert.getOrderType(),
        order_type_name: getOrderByProperty_OrderType({
          value: orderByPropertyToConvert.getOrderType()
        })
      };
    }
    return undefined;
  },

  convertDocumentStatusFromGRPC(documentStatusToConvert) {
    if (documentStatusToConvert) {
      return {
        value: documentStatusToConvert.getValue(),
        name: documentStatusToConvert.getName(),
        description: documentStatusToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertDocumentActionFromGRPC(documentActionToConvert) {
    if (documentActionToConvert) {
      return {
        value: documentActionToConvert.getValue(),
        name: documentActionToConvert.getName(),
        description: documentActionToConvert.getDescription()
      };
    }
    return undefined;
  },

  //  Convert Entity
  convertEntityFromGRPC (entity) {
    if (!entity) {
      return undefined
    }
    return {
      id: entity.getId(),
      uuid: entity.getUuid(),
      table_name: entity.getTableName(),
      attributes: convertBaseDataType.convertAttributes(entity.getValuesMap())
    }
  },

  //  get Context
  convertAttributes (context) {
    const { getValueFromGRPC } = require('@adempiere/grpc-api/src/utils/baseDataTypeFromGRPC.js');
    const { isEmptyValue } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

    const values = []
    context.forEach((value, key) => {
      const convertedValue = getValueFromGRPC(value);
      const currentValue = isEmptyValue(convertedValue) ? null : convertedValue;

      values.push({
        key: key,
        value: currentValue
      });
    });

    return values;
  },

  convertProcessLogFromGRPC(processLog) {
    if (processLog) {
      const { getValuesMapFromGRPC } = require('@adempiere/grpc-api/src/utils/valueUtilsFromGRPC.js');

      return {
        uuid: processLog.getUuid(),
        instance_uuid: processLog.getInstanceUuid(),
        name: processLog.getName(),
        description: processLog.getDescription(),
        is_error: processLog.getIsError(),
        summary: processLog.getSummary(),
        result_table_name: processLog.getResultTableName(),
        is_processing: processLog.getIsProcessing(),
        last_run: processLog.getLastRun(),
        logs_list: processLog.getLogsList().map(log => {
          return convertBaseDataType.convertProcessInfoLogFromGRPC(
            log
          );
        }),
        parameters: getValuesMapFromGRPC({
          mapToConvert: processLog.getParametersMap(),
          returnType: 'object'
        }),
        output: convertBaseDataType.convertReportOutputFromGRPC(
          processLog.getOutput()
        )
      };
    }
    return undefined;
  },

  convertProcessInfoLogFromGRPC(processInfoLog) {
    if (processInfoLog) {
      return {
        id: processInfoLog.getRecordId(),
        log: processInfoLog.getLog()
      };
    }
    return undefined;
  },

  convertTranslationFromGRPC(translation) {
    if (translation) {
    const { getValuesMapFromGRPC } = require('@adempiere/grpc-api/src/utils/valueUtilsFromGRPC.js');

      return {
        language: translation.getLanguage(),
        uuid: translation.getUuid(),
        values: getValuesMapFromGRPC({
          mapToConvert: translation.getValuesMap(),
          returnType: 'object'
        })
      };
    }
    return undefined;
  },

  convertPrintFromatFromGRPC(printFromatToConvert) {
    if (printFromatToConvert) {
      return {
        print_format_uuid: printFromatToConvert.getUuid(),
        name: printFromatToConvert.getName(),
        description: printFromatToConvert.getDescription(),
        table_name: printFromatToConvert.getTableName(),
        is_default: printFromatToConvert.getIsDefault(),
        report_view_uuid: printFromatToConvert.getReportViewUuid()
      };
    }
    return undefined;
  },

  convertEntityLogFromGRPC(entityLog) {
    if (entityLog) {
      const { getEntityLog_EventType } = require('./convertEnums.js');
      return {
        log_id: entityLog.getLogId(),
        id: entityLog.getId(),
        uuid: entityLog.getUuid(),
        table_name: entityLog.getTableName(),
        session_uuid: entityLog.getSessionUuid(),
        user_uuid: entityLog.getUserUuid(),
        user_name: entityLog.getUserName(),
        transaction_name: entityLog.getTransactionName(),
        event_type: entityLog.getEventType(),
        event_type_name: getEntityLog_EventType({
          value: entityLog.getEventType()
        }),
        log_date: new Date(entityLog.getLogDate()),
        change_logs: entityLog.getChangeLogsList().map(changeLog => {
          return convertBaseDataType.convertChangeLogFromGRPC(
            changeLog
          );
        })
      };
    }
    return undefined;
  },

  convertChangeLogFromGRPC(changeLogToConvert) {
    if (changeLogToConvert) {
      return {
        column_name: changeLogToConvert.getColumnName(),
        display_column_name: changeLogToConvert.getDisplayColumnName(),
        old_value: changeLogToConvert.getOldValue(),
        new_value: changeLogToConvert.getNewValue(),
        old_display_value: changeLogToConvert.getOldDisplayValue(),
        new_display_value: changeLogToConvert.getNewDisplayValue(),
        description: changeLogToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertReportViewFromGRPC(reportView) {
    if (reportView) {
      return {
        report_view_uuid: reportView.getUuid(),
        name: reportView.getName(),
        description: reportView.getDescription(),
        table_name: reportView.getTableName()
      };
    }
    return undefined;
  },

  convertDrillTableFromGRPC(drillTable) {
    if (drillTable) {
      return {
        table_name: drillTable.getTableName(),
        print_name: drillTable.getPrintName()
      };
    }
    return undefined;
  },

  convertReportOutputFromGRPC(reportOutputToConvert) {
    if (reportOutputToConvert) {
      return {
        uuid: reportOutputToConvert.getUuid(),
        name: reportOutputToConvert.getName(),
        description: reportOutputToConvert.getDescription(),
        file_name: reportOutputToConvert.getFileName(),
        output: reportOutputToConvert.getOutput(),
        mime_type: reportOutputToConvert.getMimeType(),
        data_cols: reportOutputToConvert.getDataCols(),
        data_rows: reportOutputToConvert.getDataRows(),
        header_name: reportOutputToConvert.getHeaderName(),
        footer_name: reportOutputToConvert.getFooterName(),
        print_format_uuid: reportOutputToConvert.getPrintFormatUuid(),
        report_view_uuid: reportOutputToConvert.getReportViewUuid(),
        table_name: reportOutputToConvert.getTableName(),
        output_stream: reportOutputToConvert.getOutputStream(),
        output_stream_asB64: reportOutputToConvert.getOutputStream_asB64(),
        output_stream_asU8: reportOutputToConvert.getOutputStream_asU8(),
        report_type: reportOutputToConvert.getReportType()
      };
    }
    return undefined;
  },

  convertResourceFromGRPC(resourceToConvert) {
    if (resourceToConvert) {
      return resourceToConvert.getData();
    }
    return undefined;
  },

  convertAttachmentFromGRPC(attachmentToConvert) {
    if (attachmentToConvert) {
      return {
        attachment_uuid: attachmentToConvert.getAttachmentUuid(),
        title: attachmentToConvert.getTitle(),
        text_msg: attachmentToConvert.getTextMsg(),
        resource_references_list: attachmentToConvert.getResourceReferencesList().map(itemResourceReference => {
          return convertBaseDataType.convertResourceReferenceFromGRPC(
            itemResourceReference
          );
        })
      };
    }
    return undefined;
  },

  convertResourceReferenceFromGRPC(resourceReferenceToConvert) {
    if (resourceReferenceToConvert) {
      return {
        resource_uuid: resourceReferenceToConvert.getResourceUuid(),
        file_name: resourceReferenceToConvert.getFileName(),
        file_size: convertBaseDataType.getDecimalFromGRPC(
          resourceReferenceToConvert.getFileSize()
        ),
        description: resourceReferenceToConvert.getDescription(),
        text_msg: resourceReferenceToConvert.getTextMsg(),
        content_type: resourceReferenceToConvert.getContentType()
      }
    }
    return undefined;
  }

};

module.exports = convertBaseDataType;
