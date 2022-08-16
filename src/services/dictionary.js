/*************************************************************************************
 * Product: ADempiere gRPC Dictionary Client                                         *
 * Copyright (C) 2012-2022 E.R.P. Consultores y Asociados, C.A.                      *
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

class Dictionary {

  /**
  * Constructor, No authentication required
  * @param {string} host
  * @param {string} version
  * @param {string} language
  */
  constructor(config) {
    if (config) {
      const adempiereConfig = config.adempiereApi.api;
      this.dictionaryHost = adempiereConfig.dictionaryHost
      this.version = adempiereConfig.version;
      this.language = adempiereConfig.language;
      this.token = adempiereConfig.token;
    }

    this.initDictionaryService();
    console.log('ADempiere Dictionary Client Started');
  }

  // Init connection
  initDictionaryService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('../grpc/proto/dictionary_grpc_pb');
    this.dictionary = new services.DictionaryClient(
      this.dictionaryHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Dictionary Service
  getDictionaryService() {
    return this.dictionary;
  }

  //  Create Application request from token
  createApplicationRequest({ token, language }) {
    const { ApplicationRequest } = require('../grpc/proto/dictionary_pb');
    const application = new ApplicationRequest();
    application.setSessionUuid(token);
    application.setLanguage(language);
    return application;
  }

  getDictionaryRequest(
    token,
    id,
    uuid,
    language
  ) {
    const { EntityRequest } = require('../grpc/proto/dictionary_pb.js');
    const request = new EntityRequest();

    request.setId(id);
    request.setUuid(uuid);

    request.setApplicationRequest(
      this.createApplicationRequest({ token, language })
    );

    return request;
  }

  //  Get Window
  getWindow({
    token,
    id,
    uuid,
    language
  }, callback) {
    this.getDictionaryService().getWindow(this.getDictionaryRequest(token, id, uuid, language), callback)
  }

  //  Get Process
  getProcess({
    token,
    id,
    uuid,
    language
  }, callback) {
    this.getDictionaryService().getProcess(this.getDictionaryRequest(token, id, uuid, language), callback)
  }

  //  Get Browser
  getBrowser({
    token,
    id,
    uuid,
    language
  }, callback) {
    this.getDictionaryService().getBrowser(this.getDictionaryRequest(token, id, uuid, language), callback)
  }

  //  Get Form
  getForm({
    token,
    id,
    uuid,
    language
  }, callback) {
    this.getDictionaryService().getForm(this.getDictionaryRequest(token, id, uuid, language), callback)
  }

  //  Get Validation Rule
  getValidationRule({
    token,
    id,
    uuid,
    language
  }, callback) {
    this.getDictionaryService().getValidationRule(this.getDictionaryRequest(token, id, uuid, language), callback)
  }

  //  Get Field
  getField({
    token,
    uuid,
    columnUuid,
    elementUuid,
    fieldUuid,
    tableName,
    columnName,
    elementColumnName,
    language
  }, callback) {
    const { FieldRequest } = require('../grpc/proto/dictionary_pb.js')
    const request = new FieldRequest()

    request.setFieldUuid(uuid)
    request.setColumnUuid(columnUuid)
    request.setElementUuid(elementUuid)
    if(fieldUuid) {
      request.setFieldUuid(fieldUuid)
    }
    request.setColumnName(columnName)
    request.setTableName(tableName)
    request.setElementColumnName(elementColumnName)

    request.setApplicationRequest(
      this.createApplicationRequest({ token, language })
    );

    this.getDictionaryService().getField(request, callback)
  }

  //  Get Reference
  getReference({
    token,
    uuid,
    columnName,
    language
  }, callback) {
    const { ReferenceRequest } = require('../grpc/proto/dictionary_pb.js')
    const request = new ReferenceRequest()
    request.setReferenceUuid(uuid)
    request.setColumnName(columnName)

    request.setApplicationRequest(
      this.createApplicationRequest({ token, language })
    );

    this.getDictionaryService().getReference(request, callback)
  }

  //  List Identifiers Fields
  listIdentifiersFields({
    token,
    tableUuid,
    tableId,
    tableName,
    tabUuid,
    tabId,
    language
  }, callback) {
    const { ListFieldsRequest } = require('../grpc/proto/dictionary_pb.js');
    const request = new ListFieldsRequest();

    request.setTableUuid(tableUuid);
    request.setTableId(tableId);
    request.setTableName(tableName);

    request.setTabUuid(tabUuid);
    request.setTabId(tabId);

    request.setApplicationRequest(
      this.createApplicationRequest({ token, language })
    );

    this.getDictionaryService().listIdentifiersFields(request, callback);
  }

  //  List Table Search Fields
  listTableSearchFields({
    token,
    tableUuid,
    tableId,
    tableName,
    tabUuid,
    tabId,
    language
  }, callback) {
    const { ListFieldsRequest } = require('../grpc/proto/dictionary_pb.js');
    const request = new ListFieldsRequest();

    request.setTableUuid(tableUuid);
    request.setTableId(tableId);
    request.setTableName(tableName);

    request.setTabUuid(tabUuid);
    request.setTabId(tabId);

    request.setApplicationRequest(
      this.createApplicationRequest({ token, language })
    );

    this.getDictionaryService().listTableSearchFields(request, callback);
  }

}

module.exports = Dictionary;
