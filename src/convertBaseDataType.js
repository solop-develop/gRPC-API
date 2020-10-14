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
    const { Value } = require('./grpc/proto/base_data_type_pb.js');
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

  convertRecordReferenceInfoFromGRPC(recordReferenceInfoToConvert) {
    if (recordReferenceInfoToConvert) {
      return {
        uuid: recordReferenceInfoToConvert.getUuid(),
        windowUuid: recordReferenceInfoToConvert.getWindowuuid(),
        displayName: recordReferenceInfoToConvert.getDisplayName(),
        tableName: recordReferenceInfoToConvert.getTableName(),
        whereClause: recordReferenceInfoToConvert.getWhereClause(),
        recordCount: recordReferenceInfoToConvert.getRecordCount()
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

  convertEntityFromGRPC({ entityToConvert, formatToConvert = 'array' }) {
    if (entityToConvert) {
      const { convertValuesMapFromGRPC } = require('./convertValues.js');

      return {
        id: entityToConvert.getId(),
        uuid: entityToConvert.getUuid(),
        tableName: entityToConvert.getTableName(),
        values: convertValuesMapFromGRPC({
          mapToConvert: entityToConvert.getValuesMap(),
          returnType: formatToConvert,
          keyName: 'columnName',
          valueName: 'value'
        })
      };
    }
    return undefined;
  },

  convertProcessLogFromGRPC(processLogToConvert) {
    if (processLogToConvert) {
      const { convertValuesMapFromGRPC } = require('./convertValues.js');

      return {
        uuid: processLogToConvert.getUuid(),
        instance_uuid: processLogToConvert.getInstanceUuid(),
        is_error: processLogToConvert.getIsError(),
        summary: processLogToConvert.getSummary(),
        result_table_name: processLogToConvert.getResultTableName(),
        is_processing: processLogToConvert.getIsProcessing(),
        last_run: processLogToConvert.getLastRun(),
        logs_list: processLogToConvert.getLogsList().map(log => {
          return convertBaseDataType.convertProcessInfoLogFromGRPC(
            log
          );
        }),
        parameter: convertValuesMapFromGRPC({
          mapToConvert: processLogToConvert.getParametersMap(),
          returnType: 'object'
        }),
        output: convertBaseDataType.convertReportOutputFromGRPC(
          processLogToConvert.getOutput()
        )
      };
    }
    return undefined;
  },

  convertProcessInfoLogFromGRPC(processInfoLogToConvert) {
    if (processInfoLogToConvert) {
      return {
        recordId: processInfoLogToConvert.getRecordId(),
        log: processInfoLogToConvert.getLog()
      };
    }
    return undefined;
  },

  convertTranslationFromGRPC(translationToConvert) {
    if (translationToConvert) {
      const { convertValuesMapFromGRPC } = require('./convertValues.js');

      return {
        language: translationToConvert.getLanguage(),
        translationUuid: translationToConvert.getTranslationuuid(),
        values: convertValuesMapFromGRPC({
          mapToConvert: translationToConvert.getValuesMap(),
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
        printFormatUuid: printFromatToConvert.getUuid(),
        name: printFromatToConvert.getName(),
        description: printFromatToConvert.getDescription(),
        tableName: printFromatToConvert.getTableName(),
        isDefault: printFromatToConvert.getIsdefault(),
        reportViewUuid: printFromatToConvert.getReportviewuuid()
      };
    }
    return undefined;
  },

  convertRecordLogFromGRPC(recordLogToConvert) {
    if (recordLogToConvert) {
      const { getRecordLog_EventType } = require('./convertEnums.js');

      return {
        logId: recordLogToConvert.getLogid(),
        recordId: recordLogToConvert.getRecordId(),
        tableName: recordLogToConvert.getTableName(),
        sessionUuid: recordLogToConvert.getSessionuuid(),
        userUuid: recordLogToConvert.getUseruuid(),
        userName: recordLogToConvert.getUsername(),
        transactionName: recordLogToConvert.getTransactionname(),
        eventType: recordLogToConvert.getEventtype(),
        eventTypeName: getRecordLog_EventType({
          value: recordLogToConvert.getEventtype()
        }),
        logDate: new Date(recordLogToConvert.getLogdate()),
        changeLogsList: recordLogToConvert.getChangelogsList().map(changeLog => {
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
        columnName: changeLogToConvert.getColumnName(),
        displayColumnName: changeLogToConvert.getDisplaycolumnname(),
        oldValue: changeLogToConvert.getOldvalue(),
        newValue: changeLogToConvert.getNewvalue(),
        oldDisplayValue: changeLogToConvert.getOlddisplayvalue(),
        newDisplayValue: changeLogToConvert.getNewdisplayvalue(),
        description: changeLogToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertReportViewFromGRPC(reportViewToConvert) {
    if (reportViewToConvert) {
      return {
        reportViewUuid: reportViewToConvert.getUuid(),
        name: reportViewToConvert.getName(),
        description: reportViewToConvert.getDescription(),
        tableName: reportViewToConvert.getTableName()
      };
    }
    return undefined;
  },

  convertDrillTableFromGRPC(drillTableToConvert) {
    if (drillTableToConvert) {
      return {
        tableName: drillTableToConvert.getTableName(),
        printName: drillTableToConvert.getPrintname()
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
        attachmentUuid: attachmentToConvert.getAttachmentuuid(),
        title: attachmentToConvert.getTitle(),
        textMsg: attachmentToConvert.getTextmsg(),
        resourceReferencesList: attachmentToConvert.getResourcereferencesList().map(itemResourceReference => {
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
        resourceUuid: resourceReferenceToConvert.getResourceuuid(),
        fileName: resourceReferenceToConvert.getFilename(),
        fileSize: convertBaseDataType.getDecimalFromGRPC(
          resourceReferenceToConvert.getFilesize()
        ),
        description: resourceReferenceToConvert.getDescription(),
        textMsg: resourceReferenceToConvert.getTextmsg(),
        contentType: resourceReferenceToConvert.getContenttype()
      }
    }
    return undefined;
  }

};

module.exports = convertBaseDataType;
