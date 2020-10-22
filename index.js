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
    this.initLogService()
    this.initWorkflowService()
    this.initDashboardService()
    this.initCoreService()
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
  initLogService() {
    var grpc = require('grpc');
    var services = require('./src/grpc/proto/business_grpc_pb');
    this.entityLog = new services.LogsClient(this.businessHost, grpc.credentials.createInsecure());
  }

  // Init connection
  initBusinessService() {
    var grpc = require('grpc');
    var services = require('./src/grpc/proto/business_grpc_pb');
    this.business = new services.BusinessDataClient(this.businessHost, grpc.credentials.createInsecure());
  }

  // Init connection
  initWorkflowService() {
    var grpc = require('grpc');
    var services = require('./src/grpc/proto/business_grpc_pb');
    this.workflow = new services.WorkflowClient(this.businessHost, grpc.credentials.createInsecure());
  }

  // Init connection
  initDashboardService() {
    var grpc = require('grpc');
    var services = require('./src/grpc/proto/business_grpc_pb');
    this.dashboard = new services.DashboardingClient(this.businessHost, grpc.credentials.createInsecure());
  }

  // Init connection
  initCoreService() {
    var grpc = require('grpc');
    var services = require('./src/grpc/proto/core_functionality_grpc_pb');
    this.core = new services.CoreFunctionalityClient(this.businessHost, grpc.credentials.createInsecure());
  }

  //  Get Access Service
  getAccessService() {
    return this.access
  }

  //  Get UI Service
  getUIService() {
    return this.ui
  }

  //  Get Log Service
  getLogService() {
    return this.entityLog
  }

  //  Get Workflow
  getWorkflowService() {
    return this.workflow
  }

  //  Get Dashboard
  getDashboardService() {
    return this.dashboard
  }

  //  Get Core
  getCoreService() {
    return this.core
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
    language,
    token
  }, callback) {
    const { GetResourceRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new GetResourceRequest()
    if(token) {
      request.setClientRequest(this.createClientRequest(token, language))
    } else {
      request.setClientRequest(this.getClientContext())
    }
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

  // //  Convert value from gRPC
  // convertAccessValuesFromGRPC(value) {
  //   const { ContextValue } = require('./src/grpc/proto/access_pb.js')
  //   const { ValueType } = ContextValue
  //
  //   if (!value) {
  //     return undefined
  //   }
  //   let returnValue
  //   switch (value.getValueType()) {
  //     case ValueType.INTEGER:
  //       returnValue = value.getIntValue()
  //       break
  //     // data type Boolean
  //     case ValueType.BOOLEAN:
  //       returnValue = value.getBooleanValue()
  //       break
  //     // data type Boolean
  //     case ValueType.DATE:
  //       returnValue = new Date(value.getLongValue())
  //       break
  //     // data type String
  //     case ValueType.STRING:
  //       returnValue = value.getStringValue()
  //       break
  //     case ValueType.UNKNOWN:
  //       returnValue = undefined;
  //       break
  //   }
  //   return returnValue
  // }

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
    request.setId(id)
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
    const { convertParameterToGRPC } = require('./lib/convertValues.js');
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
    const { convertParameterToGRPC } = require('./lib/convertValues.js');
    const request = new UpdateEntityRequest()
    request.setTableName(tableName)
    request.setId(id)
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
    const { convertParameterToGRPC } = require('./lib/convertValues.js');
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
    request.setId(id)
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
    const { convertCriteriaToGRPC } = require('./lib/convertValues.js');
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
      columns.forEach(column => request.addColumns(column))
    }
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
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
    const { convertParameterToGRPC } = require('./lib/convertValues.js');
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

  //  User Interface
  //  Get Attachment information
  getAttachment({
    token,
    id,
    uuid,
    tableName,
    language
  }, callback) {
    const { GetAttachmentRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new GetAttachmentRequest()
    request.setId(id)
    request.setUuid(uuid)
    request.setTableName(tableName)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().getAttachment(request, callback)
  }

  //  Get Resource information
  getResourceReference({
    token,
    imageId,
    language
  }, callback) {
    const { GetResourceReferenceRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new GetResourceReferenceRequest()
    request.setImageId(imageId)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().getResourceReference(request, callback)
  }

  //  Create Chat Entry
  createChatEntry({
    token,
    language,
    tableName,
    id,
    uuid,
    comment
  }, callback) {
    const { CreateChatEntryRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new CreateChatEntryRequest()
    request.setTableName(tableName)
    request.setId(id)
    request.setUuid(uuid)
    request.setComment(comment)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().createChatEntry(request, callback)
  }

  //  Get Report Output
  getReportOutput({
    token,
    tableName,
    //  Reference
    printFormatUuid,
    reportViewUuid,
    isSummary,
    reportName,
    reportType,
    //  DSL
    filters,
    //  Custom Query
    query,
    whereClause,
    orderByClause,
    limit,
    language
  }, callback) {
    const { GetReportOutputRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new GetReportOutputRequest()
    const { convertCriteriaToGRPC } = require('./lib/convertValues.js');
    //  TODO: Add support to all parameters
    request.setCriteria(convertCriteriaToGRPC({
      tableName,
      filters,
      query,
      whereClause,
      orderByClause,
      limit
    }))
    //
    request.setPrintFormatUuid(printFormatUuid)
    request.setReportViewUuid(reportViewUuid)
    request.setIsSummary(isSummary)
    request.setReportName(reportName)
    request.setReportType(reportType)
    request.setTableName(tableName)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().getReportOutput(request, callback)
  }

  //  List Drill Tables
  listDrillTables({
    token,
    tableName,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListDrillTablesRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListDrillTablesRequest()
    request.setTableName(tableName)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().listDrillTables(request, callback)
  }

  //  List Print Formats
  listPrintFormats({
    token,
    tableName,
    reportViewUuid,
    processUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListPrintFormatsRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListPrintFormatsRequest()
    request.setTableName(tableName)
    request.setReportViewUuid(reportViewUuid)
    request.setProcessUuid(processUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().listPrintFormats(request, callback)
  }

  //  List Print Formats
  listPrintFormats({
    token,
    tableName,
    reportViewUuid,
    processUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListPrintFormatsRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListPrintFormatsRequest()
    request.setTableName(tableName)
    request.setReportViewUuid(reportViewUuid)
    request.setProcessUuid(processUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().listPrintFormats(request, callback)
  }

  //  List Report Views
  listReportViews({
    token,
    tableName,
    processUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListReportViewsRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListReportViewsRequest()
    request.setTableName(tableName)
    request.setProcessUuid(processUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().listReportViews(request, callback)
  }

  //  Unlock Private Access
  unlockPrivateAccess({
    token,
    tableName,
    id,
    uuid,
    language
  }, callback) {
    const { UnlockPrivateAccessRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new UnlockPrivateAccessRequest()
    request.setTableName(tableName)
    request.setId(id)
    request.setUuid(uuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().unlockPrivateAccess(request, callback)
  }

  //  Lock Private Access
  lockPrivateAccess({
    token,
    tableName,
    id,
    uuid,
    language
  }, callback) {
    const { LockPrivateAccessRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new LockPrivateAccessRequest()
    request.setTableName(tableName)
    request.setId(id)
    request.setUuid(uuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().lockPrivateAccess(request, callback)
  }

  //  Get Private Access
  getPrivateAccess({
    token,
    tableName,
    id,
    uuid,
    language
  }, callback) {
    const { GetPrivateAccessRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new GetPrivateAccessRequest()
    request.setTableName(tableName)
    request.setId(id)
    request.setUuid(uuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().getPrivateAccess(request, callback)
  }

  //  Get Context Information Value
  getContextInfoValue({
    token,
    query,
    uuid,
    id,
    language
  }, callback) {
    const { GetContextInfoValueRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new GetContextInfoValueRequest()
    request.setQuery(query)
    request.setUuid(uuid)
    request.setId(id)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().getContextInfoValue(request, callback)
  }

  //  List references of record
  listReferences({
    token,
    tableName,
    windowUuid,
    id,
    uuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListReferencesRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListReferencesRequest()
    request.setTableName(tableName)
    request.setUuid(uuid)
    request.setId(id)
    request.setWindowUuid(windowUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().listReferences(request, callback)
  }

  //  List Browser Items
  listBrowserItems({
    token,
    uuid,
    parameters,
    tableName,
    //  DSL
    filters,
    //  Custom Query
    query,
    whereClause,
    orderByClause,
    limit,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListBrowserItemsRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListBrowserItemsRequest()
    const { convertCriteriaToGRPC } = require('./lib/convertValues.js');
    request.setCriteria(convertCriteriaToGRPC({
      tableName,
      filters,
      query,
      whereClause,
      orderByClause,
      limit
    }))
    // selections
    if(parameters) {
      parameters.forEach(parameter => {
        request.addParameters(convertParameterToGRPC({
          columnName: parameter.key,
          value: parameter.value
        }))
      })
    }
    request.setUuid(uuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().listBrowserItems(request, callback)
  }

  //  List Lookup Items
  listLookupItems({
    token,
    tableName,
    //  DSL
    filters,
    //  Custom Query
    query,
    whereClause,
    orderByClause,
    limit,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListLookupItemsRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListLookupItemsRequest()
    const { convertCriteriaToGRPC } = require('./lib/convertValues.js');
    request.setCriteria(convertCriteriaToGRPC({
      tableName,
      filters,
      query,
      whereClause,
      orderByClause,
      limit
    }))
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().listLookupItems(request, callback)
  }

  //  Get Lookup
  getLookupItem({
    token,
    tableName,
    //  DSL
    filters,
    //  Custom Query
    query,
    whereClause,
    orderByClause,
    limit,
    language
  }, callback) {
    const { GetLookupItemRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new GetLookupItemRequest()
    const { convertCriteriaToGRPC } = require('./lib/convertValues.js');
    request.setCriteria(convertCriteriaToGRPC({
      tableName,
      filters,
      query,
      whereClause,
      orderByClause,
      limit
    }))
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().getLookupItem(request, callback)
  }

  //  List translations
  listTranslations({
    token,
    tableName,
    uuid,
    id,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListTranslationsRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListTranslationsRequest()
    request.setTableName(tableName)
    request.setUuid(uuid)
    request.setId(id)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().listTranslations(request, callback)
  }

  //  Get Default Value
  getDefaultValue({
    token,
    query,
    language
  }, callback) {
    const { GetDefaultValueRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new GetDefaultValueRequest()
    request.setQuery(query)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().getDefaultValue(request, callback)
  }

  //  Run a callout to server
  runCallout({
    token,
    language,
    tableName,
    windowUuid,
    tabUuid,
    callout,
    columnName,
    oldValue,
    value,
    windowNo,
    attributes
  }, callback) {
    const { RunCalloutRequest } = require('./src/grpc/proto/business_pb.js')
    const { convertParameterToGRPC, convertValueToGRPC } = require('./lib/convertValues.js');
    const request = new RunCalloutRequest()
    request.setTableName(tableName)
    request.setWindowUuid(windowUuid)
    request.setTabUuid(tabUuid)
    request.setCallout(callout)
    request.setColumnName(columnName)
    request.setOldValue(convertValueToGRPC({
      value: oldValue
    }))
    request.setValue(convertValueToGRPC({
      value
    }))
    request.setWindowNo(windowNo)
    if(attributes) {
      attributes.forEach(attribute => {
        request.addAttributes(convertParameterToGRPC({
          columnName: attribute.key,
          value: attribute.value
        }))
      })
    }
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().runCallout(request, callback)
  }

  //  Rollback a value from entity
  rollbackEntity({
    token,
    language,
    tableName,
    id,
    uuid,
    logId
  }, callback) {
    const { RollbackEntityRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new RollbackEntityRequest()
    request.setTableName(tableName)
    request.setId(id)
    request.setUuid(uuid)
    request.setLogId(logId)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().rollbackEntity(request, callback)
  }

  //  Logs
  //  List process logs
  listProcessLogs({
    token,
    tableName,
    uuid,
    id,
    userUuid,
    instanceUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListProcessLogsRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListProcessLogsRequest()
    request.setTableName(tableName)
    request.setUuid(uuid)
    request.setId(id)
    request.setUserUuid(userUuid)
    request.setInstanceUuid(instanceUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getLogService().listProcessLogs(request, callback)
  }

  //  List record logs
  listEntityLogs({
    token,
    tableName,
    uuid,
    id,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListEntityLogsRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListEntityLogsRequest()
    request.setTableName(tableName)
    request.setUuid(uuid)
    request.setId(id)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getLogService().listEntityLogs(request, callback)
  }

  //  List entity chats
  listEntityChats({
    token,
    tableName,
    uuid,
    id,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListEntityChatsRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListEntityChatsRequest()
    request.setTableName(tableName)
    request.setUuid(uuid)
    request.setId(id)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getLogService().listEntityChats(request, callback)
  }

  //  List chats entries
  listChatEntries({
    token,
    id,
    uuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListChatEntriesRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListChatEntriesRequest()
    request.setUuid(uuid)
    request.setId(id)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getLogService().listChatEntries(request, callback)
  }

  //  List workflow logs
  listWorkflowLogs({
    token,
    tableName,
    uuid,
    id,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListWorkflowLogsRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListWorkflowLogsRequest()
    request.setTableName(tableName)
    request.setUuid(uuid)
    request.setId(id)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getLogService().listWorkflowLogs(request, callback)
  }

  //  List recent items
  listRecentItems({
    token,
    userUuid,
    roleUuid,
    currentSession,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListRecentItemsRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListRecentItemsRequest()
    request.setUserUuid(userUuid)
    request.setRoleUuid(roleUuid)
    request.setCurrentSession(currentSession)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getLogService().listRecentItems(request, callback)
  }

  //  Workflow service
  //  List workflow
  listWorkflows({
    token,
    tableName,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListWorkflowsRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListWorkflowsRequest()
    request.setTableName(tableName)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getWorkflowService().listWorkflows(request, callback)
  }

  //  List workflow
  listDocumentActions({
    token,
    tableName,
    id,
    uuid,
    documentStatus,
    documentAction,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListDocumentActionsRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListDocumentActionsRequest()
    request.setTableName(tableName)
    request.setId(id)
    request.setUuid(uuid)
    request.setDocumentStatus(documentStatus)
    request.setDocumentAction(documentAction)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getWorkflowService().listDocumentActions(request, callback)
  }

  //  List Document Statuses
  listDocumentStatuses({
    token,
    tableName,
    id,
    uuid,
    documentStatus,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListDocumentStatusesRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListDocumentStatusesRequest()
    request.setTableName(tableName)
    request.setId(id)
    request.setUuid(uuid)
    request.setDocumentStatus(documentStatus)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getWorkflowService().listDocumentStatuses(request, callback)
  }

  //  List Document Statuses
  listDashboards({
    token,
    roleUuid,
    roleId,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListDashboardsRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListDashboardsRequest()
    request.setRoleUuid(roleUuid)
    request.setRoleId(roleId)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getDashboardService().listDashboards(request, callback)
  }

  //  List Document Statuses
  listFavorites({
    token,
    userUuid,
    userId,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListFavoritesRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListFavoritesRequest()
    request.setUserUuid(userUuid)
    request.setUserId(userId)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getDashboardService().listFavorites(request, callback)
  }

  //  List Document Statuses
  listPendingDocuments({
    token,
    userUuid,
    userId,
    roleUuid,
    roleId,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListPendingDocumentsRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListPendingDocumentsRequest()
    request.setUserUuid(userUuid)
    request.setUserId(userId)
    request.setRoleUuid(roleUuid)
    request.setRoleId(roleId)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getDashboardService().listPendingDocuments(request, callback)
  }

  //  Core Functionality
  //  Get Country
  getCountry({
    token,
    uuid,
    id,
    language
  }, callback) {
    const { GetCountryRequest } = require('./src/grpc/proto/core_functionality_pb.js')
    const request = new GetCountryRequest()
    request.setUuid(uuid)
    request.setId(id)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getCoreService().getCountry(request, callback)
  }

  //  List Organizations
  listOrganizations({
    token,
    roleUuid,
    roleId,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListOrganizationsRequest } = require('./src/grpc/proto/core_functionality_pb.js')
    const request = new ListOrganizationsRequest()
    request.setRoleUuid(roleUuid)
    request.setRoleId(roleId)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getCoreService().listOrganizations(request, callback)
  }

  //  List Warehouses
  listWarehouses({
    token,
    organizationUuid,
    organizationId,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListWarehousesRequest } = require('./src/grpc/proto/core_functionality_pb.js')
    const request = new ListWarehousesRequest()
    request.setOrganizationUuid(organizationUuid)
    request.setOrganizationId(organizationId)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getCoreService().listWarehouses(request, callback)
  }

  //  List Languages
  listLanguages({
    token,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListLanguagesRequest } = require('./src/grpc/proto/core_functionality_pb.js')
    const request = new ListLanguagesRequest()
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getCoreService().listLanguages(request, callback)
  }

  //  Get Business Partner
  getBusinessPartner({
    token,
    searchValue,
    value,
    name,
    contactName,
    email,
    postalCode,
    phone,
    tableName,
    //  DSL
    filters,
    //  Custom Query
    query,
    whereClause,
    orderByClause,
    limit,
    language
  }, callback) {
    const { GetBusinessPartnerRequest } = require('./src/grpc/proto/core_functionality_pb.js')
    const request = new GetBusinessPartnerRequest()
    const { convertCriteriaToGRPC } = require('./lib/convertValues.js');
    //  TODO: Add support to all parameters
    request.setCriteria(convertCriteriaToGRPC({
      tableName,
      filters,
      query,
      whereClause,
      orderByClause,
      limit
    }))
    request.setSearchValue(searchValue)
    request.setValue(value)
    request.setName(name)
    request.setContactName(contactName)
    request.setEmail(email)
    request.setPostalCode(postalCode)
    request.setPhone(phone)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getCoreService().getBusinessPartner(request, callback)
  }

  //  Create Business Partner
  createBusinessPartner({
    token,
    value,
    taxId,
    duns,
    naics,
    name,
    lastName,
    description,
    contactName,
    email,
    phone,
    businessPartnerGroupUuid,
    address1,
    address2,
    address3,
    address4,
    cityUuid,
    cityName,
    postalCode,
    regionUuid,
    regionName,
    countryUuid,
    posUuid,
    language
  }, callback) {
    const { CreateBusinessPartnerRequest } = require('./src/grpc/proto/core_functionality_pb.js')
    const request = new CreateBusinessPartnerRequest()
    request.setValue(value)
    request.setTaxId(taxId)
    request.setDuns(duns)
    request.setNaics(naics)
    request.setName(name)
    request.setLastName(lastName)
    request.setDescription(description)
    request.setContactName(contactName)
    request.setEmail(email)
    request.setPhone(phone)
    request.setBusinessPartnerGroupUuid(businessPartnerGroupUuid)
    request.setAddress1(address1)
    request.setAddress2(address2)
    request.setAddress3(address3)
    request.setAddress4(address4)
    request.setCityUuid(cityUuid)
    request.setCityName(cityName)
    request.setPostalCode(postalCode)
    request.setRegionUuid(regionUuid)
    request.setRegionName(regionName)
    request.setCountryUuid(countryUuid)
    request.setPosUuid(posUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getCoreService().createBusinessPartner(request, callback)
  }

  //  List Business Partner
  listBusinessPartners({
    token,
    searchValue,
    value,
    name,
    contactName,
    email,
    postalCode,
    phone,
    tableName,
    //  DSL
    filters,
    //  Custom Query
    query,
    whereClause,
    orderByClause,
    limit,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListBusinessPartnersRequest } = require('./src/grpc/proto/core_functionality_pb.js')
    const request = new ListBusinessPartnersRequest()
    const { convertCriteriaToGRPC } = require('./lib/convertValues.js');
    //  TODO: Add support to all parameters
    request.setCriteria(convertCriteriaToGRPC({
      tableName,
      filters,
      query,
      whereClause,
      orderByClause,
      limit
    }))
    request.setSearchValue(searchValue)
    request.setValue(value)
    request.setName(name)
    request.setContactName(contactName)
    request.setEmail(email)
    request.setPostalCode(postalCode)
    request.setPhone(phone)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getCoreService().listBusinessPartners(request, callback)
  }

  //  Get Conversion Rate
  getConversionRate({
    token,
    conversionTypeUuid,
    currencyFromUuid,
    currencyToUuid,
    conversionDate,
    language
  }, callback) {
    const { GetConversionRateRequest } = require('./src/grpc/proto/core_functionality_pb.js')
    const request = new GetConversionRateRequest()
    request.setConversionTypeUuid(conversionTypeUuid)
    request.setCurrencyFromUuid(currencyFromUuid)
    request.setCurrencyToUuid(currencyToUuid)
    request.setConversionDate(conversionDate)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getCoreService().getConversionRate(request, callback)
  }
}
module.exports = Api;
