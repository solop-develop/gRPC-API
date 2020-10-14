/*************************************************************************************
 * Product: ADempiere gRPC Dictionary Client                       		               *
 * Copyright (C) 2012-2018 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Yamel Senih ysenih@erpya.com				  		                         *
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

class Api {

  /**
   * Constructor, No authentication required
   * @param {string} host
   * @param {string} version
   * @param {string} language
   */
  constructor(config) {
    if(config) {
      const adempiereConfig = config.adempiereApi.api
      this.accessHost = adempiereConfig.accessHost
      this.businessHost = adempiereConfig.businessHost
      this.dictionaryHost = adempiereConfig.dictionaryHost
      this.version = adempiereConfig.version
      this.language = adempiereConfig.language
      this.user = adempiereConfig.user
      this.password = adempiereConfig.password
    }
    this.initAccessService()
    this.initUIService()
    this.initBusinessService()
    this.initDictionaryService()
  }

  //  Init service
  initService() {
    if(this.clientContext) {
      return
    }
    const current = this
    const language = this.language
    this.login({
      user: this.user,
      password: this.password
    }, function(err, response) {
      if(response) {
        const { ClientRequest } = require('./src/grpc/proto/client_pb.js')
        const client = new ClientRequest()
        client.setSessionUuid(response.getUuid())
        client.setLanguage(language)
        current.setClientContext(client)
        console.log('ADempiere Api Client Started')
      } else if(err) {
        console.log(err)
      }
    })
  }

  //  Create Client request from token
  createClientRequest(token, language) {
    const { ClientRequest } = require('./src/grpc/proto/client_pb.js')
    const client = new ClientRequest()
    client.setSessionUuid(token)
    client.setLanguage(language)
    return client
  }

  // Init connection
  initAccessService() {
    var grpc = require('grpc');
    var services = require('./src/grpc/proto/access_grpc_pb');
    this.access = new services.SecurityClient(this.accessHost, grpc.credentials.createInsecure());
  }

  // Init connection
  initDictionaryService() {
    var grpc = require('grpc');
    var services = require('./src/grpc/proto/dictionary_grpc_pb');
    this.dictionary = new services.DictionaryClient(this.dictionaryHost, grpc.credentials.createInsecure());
  }

  // Init connection
  initUIService() {
    var grpc = require('grpc');
    var services = require('./src/grpc/proto/business_grpc_pb');
    this.ui = new services.UserInterfaceClient(this.businessHost, grpc.credentials.createInsecure());
  }

  // Init connection
  initBusinessService() {
    var grpc = require('grpc');
    var services = require('./src/grpc/proto/business_grpc_pb');
    this.business = new services.BusinessDataClient(this.businessHost, grpc.credentials.createInsecure());
  }

  //  Get Access Service
  getAccessService() {
    return this.access
  }

  //  Get UI Service
  getUIService() {
    return this.ui
  }

  //  Get Business Service
  getBusinessService() {
    return this.business
  }

  //  Get Dictionary Service
  getDictionaryService() {
    return this.dictionary
  }

  //  Get Client Context
  getClientContext() {
    return this.clientContext
  }

  //  Set client context
  setClientContext(context) {
    this.clientContext = context
  }

  //  Login with a user
  login({
    user,
    password,
    roleUuid,
    organizationUuid,
    language
  }, callback) {
    const { LoginRequest } = require('./src/grpc/proto/access_pb.js')
    const request = new LoginRequest()
    request.setUserName(user)
    request.setUserPass(password)
    request.setRoleUuid(roleUuid)
    request.setOrganizationUuid(organizationUuid)
    request.setLanguage(language)
    request.setClientVersion(this.version)
    this.getAccessService().runLogin(request, callback)
  }

  //  Get User Information
  getUserInfo({
    token,
    language
  }, callback) {
    const { UserInfoRequest } = require('./src/grpc/proto/access_pb.js')
    const request = new UserInfoRequest()
    request.setSessionUuid(token)
    request.setLanguage(language)
    request.setClientVersion(this.version)
    this.getAccessService().getUserInfo(request, callback)
  }

  //  Get User Information
  getUserRoles({
    token,
    language
  }, callback) {
    const { ListRolesRequest } = require('./src/grpc/proto/access_pb.js')
    const request = new ListRolesRequest()
    request.setSessionUuid(token)
    request.setLanguage(language)
    request.setClientVersion(this.version)
    this.getAccessService().listRoles(request, callback)
  }

  //  Get User Menu
  getMenu({
    token,
    language
  }, callback) {
    const { MenuRequest } = require('./src/grpc/proto/access_pb.js')
    const request = new MenuRequest()
    request.setSessionUuid(token)
    request.setLanguage(language)
    request.setClientVersion(this.version)
    this.getAccessService().getMenu(request, callback)
  }

  //  Get User Menu
  getSessionInfo({
    token,
    language
  }, callback) {
    const { SessionRequest } = require('./src/grpc/proto/access_pb.js')
    const request = new SessionRequest()
    request.setSessionUuid(token)
    request.setLanguage(language)
    request.setClientVersion(this.version)
    this.getAccessService().getSession(request, callback)
  }

  //  Change role
  changeRole({
    token,
    role,
    organization,
    warehouse,
    language
  }, callback) {
    const { ChangeRoleRequest } = require('./src/grpc/proto/access_pb.js')
    const request = new ChangeRoleRequest()
    request.setSessionUuid(token)
    request.setRoleUuid(role)
    request.setOrganizationUuid(organization)
    request.setWarehouseUuid(warehouse)
    request.setLanguage(language)
    request.setClientVersion(this.version)
    this.getAccessService().runChangeRole(request, callback)
  }

  //  Login with a user
  logout({
    token,
    language
  }, callback) {
    const { LogoutRequest } = require('./src/grpc/proto/access_pb.js')
    const request = new LogoutRequest()
    request.setSessionUuid(token)
    request.setLanguage(language)
    request.setClientVersion(this.version)
    this.getAccessService().runLogout(request, callback)
  }

  //  Get Resource Image from name
  getResource({
    resourceName,
    resourceUuid,
    language
  }, callback) {
    const { GetResourceRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new GetResourceRequest()
    request.setClientRequest(this.getClientContext())
    request.setResourceName(resourceName)
    request.setResourceUuid(resourceUuid)
    const stream = this.getUIService().getResource(request)
    let result = new Uint8Array()
    stream.on('data', (response) => {
      result = this.mergeByteArray(result, response.getData())
    })
    stream.on('status', (status) => {
      if (status && status.code === 13) {
        callback(status, undefined)
      }
    })
    stream.on('end', (end) => {
      callback(undefined, result)
    })
  }

  // Merge two arrays and return merged array
  mergeByteArray(currentArray, arrayToMerge) {
    const mergedArray = new currentArray.constructor(currentArray.length + arrayToMerge.length)
    mergedArray.set(currentArray)
    mergedArray.set(arrayToMerge, currentArray.length)
    return mergedArray
  }

  // Build a base 64 image from array
  buildImageFromArray(resource, byteArray) {
    return 'data:' + resource.contentType + ';base64,' + btoa(
      byteArray.reduce(
        (data, byte) => data + String.fromCharCode(byte), ''
      )
    )
  }

  //  Convert value from gRPC
  convertAccessValuesFromGRPC(value) {
    const { ContextValue } = require('./src/grpc/proto/access_pb.js')
    const { ValueType } = ContextValue

    if (!value) {
      return undefined
    }
    let returnValue
    switch (value.getValueType()) {
      case ValueType.INTEGER:
        returnValue = value.getIntValue()
        break
      // data type Boolean
      case ValueType.BOOLEAN:
        returnValue = value.getBooleanValue()
        break
      // data type Boolean
      case ValueType.DATE:
        returnValue = new Date(value.getLongValue())
        break
      // data type String
      case ValueType.STRING:
        returnValue = value.getStringValue()
        break
      case ValueType.UNKNOWN:
        returnValue = undefined;
        break
    }
    return returnValue
  }

  //  Dictionary
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

  //  Get Form
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
    elementNolumnName,
    language
  }, callback) {
    const { FieldRequest, ApplicationRequest } = require('./src/grpc/proto/dictionary_pb.js')
    const request = new FieldRequest()
    const applicationRequest = new ApplicationRequest()
    request.setFieldUuid(uuid)
    request.setColumnUuid(columnUuid)
    request.setElementUuid(elementUuid)
    request.setFieldUuid(fieldUuid)
    request.setColumnName(columnName)
    request.setTableName(tableName)
    request.setElementColumnName(elementNolumnName)
    applicationRequest.setSessionUuid(token)
    applicationRequest.setLanguage(language)
    request.setApplicationRequest(applicationRequest)
    this.getDictionaryService().getField(request, callback)
  }

  //  Get Reference
  getReference({
    token,
    uuid,
    columnName,
    language
  }, callback) {
    const { ReferenceRequest, ApplicationRequest } = require('./src/grpc/proto/dictionary_pb.js')
    const request = new ReferenceRequest()
    const applicationRequest = new ApplicationRequest()
    request.setReferenceUuid(uuid)
    request.setColumnName(columnName)
    applicationRequest.setSessionUuid(token)
    applicationRequest.setLanguage(language)
    request.setApplicationRequest(applicationRequest)
    this.getDictionaryService().getReference(request, callback)
  }

  //  Get Process
  getDictionaryRequest(
    token,
    id,
    uuid,
    language) {
    const { EntityRequest, ApplicationRequest } = require('./src/grpc/proto/dictionary_pb.js')
    const request = new EntityRequest()
    const applicationRequest = new ApplicationRequest()
    request.setId(id)
    request.setUuid(uuid)
    applicationRequest.setSessionUuid(token)
    applicationRequest.setLanguage(language)
    request.setApplicationRequest(applicationRequest)
    return request
  }

  //  Business CRUD
  //  Get a Entity
  getEntity({
    token,
    id,
    uuid,
    tableName,
    language
  }, callback) {
    const { GetEntityRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new GetEntityRequest()
    request.setRecordId(id)
    request.setUuid(uuid)
    request.setTableName(tableName)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getBusinessService().getEntity(request, callback)
  }

  //  Create a Entity
  createEntity({
    token,
    tableName,
    attributes,
    language
  }, callback) {
    const { CreateEntityRequest } = require('./src/grpc/proto/business_pb.js')
    const { convertParameterToGRPC } = require('./src/convertValues.js');
    const request = new CreateEntityRequest()
    request.setTableName(tableName)
    if(attributes) {
      attributes.forEach(attribute => {
        request.addAttributes(convertParameterToGRPC({
          columnName: attribute.key,
          value: attribute.value
        }))
      })
    }
    request.setClientRequest(this.createClientRequest(token, language))
    this.getBusinessService().createEntity(request, callback)
  }

  //  Create a Entity
  updateEntity({
    token,
    tableName,
    id,
    uuid,
    attributes,
    language
  }, callback) {
    const { UpdateEntityRequest } = require('./src/grpc/proto/business_pb.js')
    const { convertParameterToGRPC } = require('./src/convertValues.js');
    const request = new UpdateEntityRequest()
    request.setTableName(tableName)
    request.setRecordId(id)
    request.setUuid(uuid)
    if(attributes) {
      attributes.forEach(attribute => {
        request.addAttributes(convertParameterToGRPC({
          columnName: attribute.key,
          value: attribute.value
        }))
      })
    }
    request.setClientRequest(this.createClientRequest(token, language))
    this.getBusinessService().updateEntity(request, callback)
  }

  //  Create a Entity
  createEntity({
    token,
    tableName,
    attributes,
    language
  }, callback) {
    const { CreateEntityRequest } = require('./src/grpc/proto/business_pb.js')
    const { convertParameterToGRPC } = require('./src/convertValues.js');
    const request = new CreateEntityRequest()
    request.setTableName(tableName)
    if(attributes) {
      attributes.forEach(attribute => {
        request.addAttributes(convertParameterToGRPC({
          columnName: attribute.key,
          value: attribute.value
        }))
      })
    }
    request.setClientRequest(this.createClientRequest(token, language))
    this.getBusinessService().createEntity(request, callback)
  }

  // //  Convert business values from gRPC
  // convertBusinessValuesFromGRPC(value) {
  //   const { convertValueFromGRPC } = require('./src/convertBaseDataType.js');
  //   return convertValueFromGRPC(value)
  // }

  //  Delete a Entity
  deleteEntity({
    token,
    id,
    uuid,
    tableName,
    language
  }, callback) {
    const { DeleteEntityRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new DeleteEntityRequest()
    request.setRecordId(id)
    request.setUuid(uuid)
    request.setTableName(tableName)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getBusinessService().deleteEntity(request, callback)
  }

  //  List Entities
  listEntities({
    token,
    tableName,
    //  DSL
    filters,
    columns,
    //  Custom Query
    query,
    whereClause,
    orderByClause,
    limit,
    //  Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListEntitiesRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListEntitiesRequest()
    const { convertCriteriaToGRPC } = require('./src/convertValues.js');
    //  TODO: Add support to all parameters
    request.setCriteria(convertCriteriaToGRPC({
      tableName,
      filters,
      query,
      whereClause,
      orderByClause,
      limit
    }))
    //  For columns
    if(columns) {
      request.setColumns(columns)
    }
    //  TODO: Add Criteria
    request.setClientRequest(this.createClientRequest(token, language))
    this.getBusinessService().listEntities(request, callback)
  }

  //  Run a business process
  runProcess({
    token,
    tableName,
    processUuid,
    id,
    uuid,
    tableSelectedId,
    reportType,
    printFormatUuid,
    reportViewUuid,
    isSummary,
    parameters,
    selections,
    language
  }, callback) {
    const { RunBusinessProcessRequest } = require('./src/grpc/proto/business_pb.js')
    const { convertParameterToGRPC } = require('./src/convertValues.js');
    const request = new RunBusinessProcessRequest()
    request.setTableName(tableName)
    request.setId(id)
    request.setUuid(uuid)
    request.setProcessUuid(processUuid)
    request.setTableSelectedId(tableSelectedId)
    request.setReportType(reportType)
    request.setPrintFormatUuid(printFormatUuid)
    request.setReportViewUuid(reportViewUuid)
    request.setIsSummary(isSummary)
    // selections
    if(parameters) {
      parameters.forEach(parameter => {
        request.addParameters(convertParameterToGRPC({
          columnName: parameter.key,
          value: parameter.value
        }))
      })
    }
    request.setClientRequest(this.createClientRequest(token, language))
    this.getBusinessService().runBusinessProcess(request, callback)
  }
}
module.exports = Api;
