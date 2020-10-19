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
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.            *
 ************************************************************************************/

const convertBaseDataType = {
  /**
   * convert the value obtained from gRPC according to the type of value
   * @param {object} value
   * @returns {mixed}
   */
  convertValueFromGRPC(value) {
    const { Value } = require('@adempiere/grpc-api/src/grpc/proto/base_data_type_pb.js');
    const { ValueType } = Value;
    const { isEmptyValue } = require('./convertValues.js');

    if (isEmptyValue(value)) {
      return undefined;
    }

    let returnValue;
    switch (value.getValueType()) {
      case ValueType.INTEGER:
        returnValue = convertBaseDataType.getIntegerFromGRPC(value);
        break;
      // data type Number (float)
      case ValueType.DECIMAL:
        // TODO: Test it returnValue = convertBaseDataType.getDecimalValueFromGRPC(value.getDecimalValue());
        returnValue = convertBaseDataType.getDecimalValueFromGRPC(value);
        break;
      // data type Boolean
      case ValueType.BOOLEAN:
        returnValue = convertBaseDataType.getBooleanFromGRPC(value);
        break;
      // data type String
      case ValueType.STRING:
        returnValue = convertBaseDataType.getStringFromGRPC(value);
        break;
      // data type Date
      case ValueType.DATE:
        returnValue = convertBaseDataType.getDateFromGRPC(value);
        break;
      // empty value
      default:
      case ValueType.UNKNOWN:
        returnValue = undefined;
        break;
    }
    return returnValue;
  },

  /**
   * Get Decimal from Value definition
   * @param Value.Decicimal
   * @return {number}
   */
  getDecimalValueFromGRPC(value) {
    const { isEmptyValue } = require('./convertValues.js');
    const decimalObject = value.getDecimalValue();

    if (isEmptyValue(decimalObject)) {
      return undefined;
    }

    // Convert it
    return convertBaseDataType.getDecimalFromGRPC(decimalObject);
  },

  /**
   * Get value from Decimal definition
   * @param Decimal definition
   * @return {number}
   */
  getDecimalFromGRPC(decimalToConvert) {
    const { isEmptyValue } = require('./convertValues.js');

    if (isEmptyValue(decimalToConvert)) {
      return undefined;
    }

    const value = decimalToConvert.getDecimalValue();
    if (isEmptyValue(value)) {
      return undefined;
    }

    // return number value
    return Number(value);
  },

  /**
   * Get Date from a grpc value
   * @param value value to convert
   * @return {date}
   */
  getDateFromGRPC(value) {
    const { isEmptyValue } = require('./convertValues.js');

    if (!isEmptyValue(value) && value.getLongValue() > 0) {
      return new Date(value.getLongValue());
    }
    return undefined;
  },

  /**
   * Get String from a grpc value
   * @param value
   * @param uppercase
   * @return {string}
   */
  getStringFromGRPC(value, uppercase = false) {
    const { isEmptyValue } = require('./convertValues.js');

    if (isEmptyValue(value)) {
      return undefined;
    }

    let stringValue = value.getStringValue();
    // To Upper case
    if (uppercase) {
      stringValue = stringValue.toUpperCase();
    }
    return stringValue;
  },

  /**
   * Get integer from a grpc value
   * @param value
   * @return {number}
   */
  getIntegerFromGRPC(value) {
    const { isEmptyValue } = require('./convertValues.js');

    if (isEmptyValue(value)) {
      return undefined;
    }
    return value.getIntValue();
  },

  /**
   * Get Boolean from a grpc value
   * @param value
   * @return
   */
  getBooleanFromGRPC(value) {
    const { isEmptyValue } = require('./convertValues.js');

    if (isEmptyValue(value)) {
      return false;
    }
    return value.getBooleanValue();
  },

  /**
   * Convert criteria to json structure
   * @param {Criteria} criteriaToConvert
   * TODO: Add convert condition from gRPC and order by column from gRPC
   */
  convertCriteriaFromGRPC(criteriaToConvert) {
    if (criteriaToConvert) {
      return {
        tableName: criteriaToConvert.getTableName(),
        query: criteriaToConvert.getQuery(),
        whereClause: criteriaToConvert.getWhereClause(),
        orderByClause: criteriaToConvert.getOrderByClause(),
        referenceUuid: criteriaToConvert.getReferenceUuid(),
        conditionsList: criteriaToConvert.getConditionsList().map(condition => {
          return condition;
        }),
        valuesList: criteriaToConvert.getValuesList().map(value => {
          return convertBaseDataType.convertValueFromGRPC(value);
        }),
        orderByColumnList: criteriaToConvert.getOrderByColumnList().map(orderBy => {
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
        columnName: orderByPropertyToConvert.getColumnName(),
        orderType: orderByPropertyToConvert.getOrderType(),
        orderTypeName: getOrderByProperty_OrderType({
          value: orderByPropertyToConvert.getOrderType()
        })
      };
    }
    return undefined;
  },

  convertRecordReferenceInfoFromGRPC(referenceInfo) {
    if (referenceInfo) {
      return {
        uuid: referenceInfo.getUuid(),
        window_uuid: referenceInfo.getWindowUuid(),
        display_name: referenceInfo.getDisplayName(),
        table_name: referenceInfo.getTableName(),
        where_clause: referenceInfo.getWhereClause(),
        record_count: referenceInfo.getRecordCount()
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
    let values = []
    context.forEach((value, key) => {
      values.push({
        key: key,
        value: convertBaseDataType.convertValueFromGRPC(value)
      })
    })
    return values
  },

  convertProcessLogFromGRPC(processLog) {
    if (processLog) {
      const { convertValuesMapFromGRPC } = require('./convertValues.js');

      return {
        uuid: processLog.getUuid(),
        instance_uuid: processLog.getInstanceUuid(),
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
        parameters: convertValuesMapFromGRPC({
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
      const { convertValuesMapFromGRPC } = require('./convertValues.js');

      return {
        language: translation.getLanguage(),
        translation_uuid: translation.getTranslationUuid(),
        values: convertValuesMapFromGRPC({
          mapToConvert: translation.getValuesMap(),
          returnType: 'object'
        })
      };
    }
    return undefined;
  },

  convertDashboardFromGRPC(dashboardToConvert) {
    if (dashboardToConvert) {
      return {
        windowUuid: dashboardToConvert.getWindowuuid(),
        browserUuid: dashboardToConvert.getBrowseruuid(),
        dashboardName: dashboardToConvert.getDashboardname(),
        dashboardDescription: dashboardToConvert.getDashboarddescription(),
        dashboardHtml: dashboardToConvert.getDashboardhtml(),
        columnNo: dashboardToConvert.getColumnno(),
        lineNo: dashboardToConvert.getLineno(),
        isCollapsible: dashboardToConvert.getIscollapsible(),
        isOpenByDefault: dashboardToConvert.getIsopenbydefault(),
        isEventRequired: dashboardToConvert.getIseventrequired(),
        fileName: dashboardToConvert.getFilename()
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
