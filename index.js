/*************************************************************************************
 * Product: ADempiere gRPC Dictionary Client                                         *
 * Copyright (C) 2012-2018 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Yamel Senih ysenih@erpya.com                                       *
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
      this.token = adempiereConfig.token
    }
    this.initAccessService()
    this.initEnrollmentService()
    this.initUIService()
    this.initBusinessService()
    this.initDictionaryService()
    this.initLogService()
    this.initWorkflowService()
    this.initDashboardService()
    this.initCoreService()
    this.initPosService()
    console.log('ADempiere Api Client Started')
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
    var grpc = require('@grpc/grpc-js');
    var services = require('./src/grpc/proto/access_grpc_pb');
    this.access = new services.SecurityClient(this.accessHost, grpc.credentials.createInsecure());
  }

  //  Init Enrollment
  initEnrollmentService() {
    var grpc = require('@grpc/grpc-js');
    var services = require('./src/grpc/proto/enrollment_grpc_pb');
    this.enrollment = new services.RegisterClient(this.accessHost, grpc.credentials.createInsecure());
  }

  // Init connection
  initDictionaryService() {
    var grpc = require('@grpc/grpc-js');
    var services = require('./src/grpc/proto/dictionary_grpc_pb');
    this.dictionary = new services.DictionaryClient(this.dictionaryHost, grpc.credentials.createInsecure());
  }

  // Init connection
  initUIService() {
    var grpc = require('@grpc/grpc-js');
    var services = require('./src/grpc/proto/business_grpc_pb');
    this.ui = new services.UserInterfaceClient(this.businessHost, grpc.credentials.createInsecure());
  }

  // Init connection
  initLogService() {
    var grpc = require('@grpc/grpc-js');
    var services = require('./src/grpc/proto/business_grpc_pb');
    this.entityLog = new services.LogsClient(this.businessHost, grpc.credentials.createInsecure());
  }

  // Init connection
  initBusinessService() {
    var grpc = require('@grpc/grpc-js');
    var services = require('./src/grpc/proto/business_grpc_pb');
    this.business = new services.BusinessDataClient(this.businessHost, grpc.credentials.createInsecure());
  }

  // Init connection
  initWorkflowService() {
    var grpc = require('@grpc/grpc-js');
    var services = require('./src/grpc/proto/business_grpc_pb');
    this.workflow = new services.WorkflowClient(this.businessHost, grpc.credentials.createInsecure());
  }

  // Init connection
  initDashboardService() {
    var grpc = require('@grpc/grpc-js');
    var services = require('./src/grpc/proto/business_grpc_pb');
    this.dashboard = new services.DashboardingClient(this.businessHost, grpc.credentials.createInsecure());
  }

  // Init connection
  initCoreService() {
    var grpc = require('@grpc/grpc-js');
    var services = require('./src/grpc/proto/core_functionality_grpc_pb');
    this.core = new services.CoreFunctionalityClient(this.businessHost, grpc.credentials.createInsecure());
  }

  // Init connection
  initPosService() {
    var grpc = require('@grpc/grpc-js');
    var services = require('./src/grpc/proto/point_of_sales_grpc_pb');
    this.pos = new services.StoreClient(this.businessHost, grpc.credentials.createInsecure());
  }

  //  Get Access Service
  getAccessService() {
    return this.access
  }

  //  Get Enrollment Service
  getEnrollmentService() {
    return this.enrollment
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

  //  Get POS
  getPosService() {
    return this.pos
  }

  //  Get Business Service
  getBusinessService() {
    return this.business
  }

  //  Get Dictionary Service
  getDictionaryService() {
    return this.dictionary
  }

  //  Login with a user
  login({
    user,
    password,
    token,
    roleUuid,
    organizationUuid,
    warehouseUuid,
    language
  }, callback) {
    const { LoginRequest } = require('./src/grpc/proto/access_pb.js')
    const request = new LoginRequest()
    request.setUserName(user)
    request.setUserPass(password)
    request.setToken(token)
    request.setRoleUuid(roleUuid)
    request.setOrganizationUuid(organizationUuid)
    request.setWarehouseUuid(warehouseUuid)
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
    request.setClientRequest(this.createClientRequest(token, language))
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
    elementColumnName,
    language
  }, callback) {
    const { FieldRequest, ApplicationRequest } = require('./src/grpc/proto/dictionary_pb.js')
    const request = new FieldRequest()
    const applicationRequest = new ApplicationRequest()
    if(uuid) {
      request.setFieldUuid(uuid)
    }
    request.setColumnUuid(columnUuid)
    request.setElementUuid(elementUuid)
    if(fieldUuid) {
      request.setFieldUuid(fieldUuid)
    }
    request.setColumnName(columnName)
    request.setTableName(tableName)
    request.setElementColumnName(elementColumnName)
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

  /**
   * Run a business process
   */
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
    const { RunBusinessProcessRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new RunBusinessProcessRequest();

    request.setTableName(tableName);
    request.setId(id);
    request.setUuid(uuid);
    request.setProcessUuid(processUuid);
    request.setTableSelectedId(tableSelectedId);
    request.setReportType(reportType);
    request.setPrintFormatUuid(printFormatUuid);
    request.setReportViewUuid(reportViewUuid);
    request.setIsSummary(isSummary);

    // set process parameters list
    if (parameters && parameters.length) {
      const { convertParameterToGRPC } = require('./lib/convertValues.js');
      parameters.forEach(parameter => {
        // parameter format = { columName, value }
        request.addParameters(
          convertParameterToGRPC({
            columnName: parameter.key,
            value: parameter.value
          })
        );
      });
    }

    // browser records selections list
    if (selections && selections.length) {
      const { convertSelectionToGRPC } = require('./lib/convertValues.js');

      selections.forEach(record => {
        // selection format = { selectionId: number, selectionValues: [{ columName, value }] }
        const convertedRecord = convertSelectionToGRPC(record);
        processRequest.addSelections(convertedRecord);
      });
    }

    request.setClientRequest(this.createClientRequest(token, language));
    this.getBusinessService().runBusinessProcess(request, callback);
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

  //  Get Record Access for current role
  getRecordAccess({
    token,
    tableName,
    id,
    uuid,
    language
  }, callback) {
    const { GetRecordAccessRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new GetRecordAccessRequest()
    request.setTableName(tableName)
    request.setId(id)
    request.setUuid(uuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().getRecordAccess(request, callback)
  }

  // Set Record Access for current role
  setRecordAccess({
    token,
    tableName,
    id,
    uuid,
    recordAccesses,
    language
  }, callback) {
    const { SetRecordAccessRequest, RecordAccessRole } = require('./src/grpc/proto/business_pb.js')
    const request = new SetRecordAccessRequest()
    request.setTableName(tableName)
    request.setId(id)
    request.setUuid(uuid)
    //  Set access for role
    if(recordAccesses) {
      recordAccesses.forEach(record => {
        const recordAccessRole = new RecordAccessRole()
        recordAccessRole.setRoleId(record.roleId)
        if(record.roleUuid) {
          recordAccessRole.setRoleUuid(record.roleUuid)
        }
        if(record.roleName) {
          recordAccessRole.setRoleName(record.roleName)
        }
        recordAccessRole.setIsActive(record.isActive)
        recordAccessRole.setIsExclude(record.isExclude)
        recordAccessRole.setIsReadOnly(record.isReadOnly)
        recordAccessRole.setIsDependentEntities(record.isDependentEntities)
        request.addRecordAccesses(recordAccessRole)
      })
    }
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().setRecordAccess(request, callback)
  }

  // Set preference value for a attribute
  setPreference({
    token,
    containerUuid,
    columnName,
    isForCurrentUser,
    isForCurrentClient,
    isForCurrentOrganization,
    isForCurrentContainer,
    value,
    language
  }, callback) {
    const { SetPreferenceRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new SetPreferenceRequest()
    if(containerUuid) {
      request.setContainerUuid(containerUuid)
    }
    request.setColumnName(columnName)
    request.setValue(value)
    request.setIsForCurrentUser(isForCurrentUser)
    request.setIsForCurrentClient(isForCurrentClient)
    request.setIsForCurrentOrganization(isForCurrentOrganization)
    request.setIsForCurrentContainer(isForCurrentContainer)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().setPreference(request, callback)
  }

  // Delete preference based on criteria for it
  deletePreference({
    token,
    containerUuid,
    columnName,
    isForCurrentUser,
    isForCurrentClient,
    isForCurrentOrganization,
    isForCurrentContainer,
    value,
    language
  }, callback) {
    const { DeletePreferenceRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new DeletePreferenceRequest()
    if(containerUuid) {
      request.setContainerUuid(containerUuid)
    }
    request.setColumnName(columnName)
    request.setIsForCurrentUser(isForCurrentUser)
    request.setIsForCurrentClient(isForCurrentClient)
    request.setIsForCurrentOrganization(isForCurrentOrganization)
    request.setIsForCurrentContainer(isForCurrentContainer)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().deletePreference(request, callback)
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
    tableName,
    //  DSL
    filters,
    contextAttributes,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListBrowserItemsRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new ListBrowserItemsRequest();
    const { convertCriteriaToGRPC } = require('./lib/convertValues.js');

    const criteriaGrpc = convertCriteriaToGRPC({
      tableName,
      filters
    });
    request.setCriteria(criteriaGrpc);
    if(contextAttributes) {
      contextAttributes.forEach(attribute => {
        request.addContextAttributes(convertParameterToGRPC({
          columnName: attribute.key,
          value: attribute.value
        }))
      })
    }
    request.setUuid(uuid);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setClientRequest(this.createClientRequest(token, language));
    this.getUIService().listBrowserItems(request, callback);
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
    language
  }, callback) {
    const { GetLookupItemRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new GetLookupItemRequest();
    const { convertCriteriaToGRPC } = require('./lib/convertValues.js');

    const criteriaGrpc = convertCriteriaToGRPC({
      tableName,
      filters,
      query
    });

    request.setCriteria(criteriaGrpc);
    request.setClientRequest(this.createClientRequest(token, language));
    this.getUIService().getLookupItem(request, callback);
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
    contextAttributes
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
    if(contextAttributes) {
      contextAttributes.forEach(attribute => {
        request.addContextAttributes(convertParameterToGRPC({
          columnName: attribute.key,
          value: attribute.value
        }))
      })
    }
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().runCallout(request, callback)
  }

    //  List Tab Entities
  listTabEntities({
    token,
    windowUuid,
    tabUuid,
    windowNo,
    //  DSL
    filters,
    columns,
    contextAttributes,
    sorting,
    //  Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListTabEntitiesRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListTabEntitiesRequest()
    const { convertCriteriaToGRPC } = require('./lib/convertValues.js');
    const { convertParameterToGRPC } = require('./lib/convertValues.js');
    //  TODO: Add support to all parameters
    request.setFilters(convertCriteriaToGRPC({
      filters,
      orderByClause: sorting
    }))
    request.setWindowNo(windowNo)
    if(windowUuid) {
      request.setWindowUuid(windowUuid)
    }
    if(tabUuid) {
      request.setTabUuid(tabUuid)
    }
    if(contextAttributes) {
      contextAttributes.forEach(attribute => {
        request.addContextAttributes(convertParameterToGRPC({
          columnName: attribute.key,
          value: attribute.value
        }))
      })
    }
    //  For columns
    if(columns) {
      columns.forEach(column => request.addColumns(column))
    }
    if(pageSize) {
      request.setPageSize(pageSize)
    }
    if(pageToken) {
      request.setPageToken(pageToken)
    }
    request.setClientRequest(this.createClientRequest(token, language))
    this.getUIService().listTabEntities(request, callback)
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

  //  List workflow Activities
  listWorkflowActivities({
    token,
    userUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListWorkflowActivitiesRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new ListWorkflowActivitiesRequest()
    request.setUserUuid(userUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getWorkflowService().listWorkflowActivities(request, callback)
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

    //  Get Chart Data
    getChart({
      token,
      uuid,
      id,
      language
    }, callback) {
      const { GetChartRequest } = require('./src/grpc/proto/business_pb.js')
      const request = new GetChartRequest()
      request.setUuid(uuid)
      request.setId(id)
      request.setClientRequest(this.createClientRequest(token, language))
      this.getDashboardService().getChart(request, callback)
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
    if (conversionDate) {
      request.setConversionDate(conversionDate)
    }
    request.setClientRequest(this.createClientRequest(token, language))
    this.getCoreService().getConversionRate(request, callback)
  }

  //  POS Service
  //  List Point of Sales
  listPointOfSales({
    token,
    userUuid,
    //  Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListPointOfSalesRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new ListPointOfSalesRequest()
    request.setUserUuid(userUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().listPointOfSales(request, callback)
  }

  //  Get Point of Sales
  getPointOfSales({
    token,
    pointOfSalesUuid,
    language
  }, callback) {
    const { PointOfSalesRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new PointOfSalesRequest()
    request.setPointOfSalesUuid(pointOfSalesUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().getPointOfSales(request, callback)
  }

  //  Get Point of Sales
  getPointOfSales({
    token,
    posUuid,
    language
  }, callback) {
    const { PointOfSalesRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new PointOfSalesRequest()
    request.setPosUuid(posUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().getPointOfSales(request, callback)
  }

  //  Get Product Price
  getProductPrice({
    token,
    searchValue,
    upc,
    value,
    name,
    posUuid,
    businessPartnerUuid,
    validFrom,
    priceListUuid,
    warehouseUuid,
    language
  }, callback) {
    const { GetProductPriceRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new GetProductPriceRequest()
    request.setSearchValue(searchValue)
    request.setUpc(upc)
    request.setValue(value)
    request.setName(name)
    request.setPosUuid(posUuid)
    request.setBusinessPartnerUuid(businessPartnerUuid)
    request.setPriceListUuid(priceListUuid)
    request.setWarehouseUuid(warehouseUuid)
    request.setValidFrom(validFrom)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().getProductPrice(request, callback)
  }

  //  List Product Price
  listProductPrice({
    token,
    searchValue,
    posUuid,
    businessPartnerUuid,
    priceListUuid,
    warehouseUuid,
    validFrom,
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
    const { ListProductPriceRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new ListProductPriceRequest()
    request.setSearchValue(searchValue)
    request.setPosUuid(posUuid)
    request.setBusinessPartnerUuid(businessPartnerUuid)
    request.setPriceListUuid(priceListUuid)
    request.setWarehouseUuid(warehouseUuid)
    request.setValidFrom(validFrom)
    //
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
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().listProductPrice(request, callback)
  }

  //  Create Sales Order
  createOrder({
    token,
    posUuid,
    customerUuid,
    documentTypeUuid,
    warehouseUuid,
    priceListUuid,
    salesRepresentativeUuid,
    campaignUuid,
    language
  }, callback) {
    const { CreateOrderRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new CreateOrderRequest()
    request.setPosUuid(posUuid)
    request.setCampaignUuid(campaignUuid)
    request.setCustomerUuid(customerUuid)
    request.setDocumentTypeUuid(documentTypeUuid)
    request.setSalesRepresentativeUuid(salesRepresentativeUuid)
    if(warehouseUuid) {
      request.setWarehouseUuid(warehouseUuid)
    }
    if(priceListUuid) {
      request.setPriceListUuid(priceListUuid)
    }
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().createOrder(request, callback)
  }

  //  Release Sales Order
  releaseOrder({
    token,
    posUuid,
    orderUuid,
    salesRepresentativeUuid,
    language
  }, callback) {
    const { ReleaseOrderRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new ReleaseOrderRequest()
    request.setPosUuid(posUuid)
    request.setOrderUuid(orderUuid)
    request.setSalesRepresentativeUuid(salesRepresentativeUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().releaseOrder(request, callback)
  }

  //  Hold Sales Order
  holdOrder({
    token,
    posUuid,
    orderUuid,
    salesRepresentativeUuid,
    language
  }, callback) {
    const { HoldOrderRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new HoldOrderRequest()
    request.setPosUuid(posUuid)
    request.setOrderUuid(orderUuid)
    request.setSalesRepresentativeUuid(salesRepresentativeUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().holdOrder(request, callback)
  }

  //  Delete Sales Order
  deleteOrder({
    token,
    orderUuid,
    language
  }, callback) {
    const { DeleteOrderRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new DeleteOrderRequest()
    request.setOrderUuid(orderUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().deleteOrder(request, callback)
  }

  //  Create Sales Order Line
  createOrderLine({
    token,
    orderUuid,
    productUuid,
    chargeUuid,
    description,
    quantity,
    price,
    discountRate,
    warehouseUuid,
    language
  }, callback) {
    const { CreateOrderLineRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new CreateOrderLineRequest()
    const { getDecimalFromNumber } = require('./lib/convertValues.js')
    request.setOrderUuid(orderUuid)
    request.setProductUuid(productUuid)
    request.setChargeUuid(chargeUuid)
    request.setDescription(description)
    if(quantity) {
      request.setQuantity(getDecimalFromNumber(quantity))
    }
    if(price) {
      request.setPrice(getDecimalFromNumber(price))
    }
    if(discountRate) {
      request.setDiscountRate(getDecimalFromNumber(discountRate))
    }
    if(warehouseUuid) {
      request.setWarehouseUuid(warehouseUuid)
    }
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().createOrderLine(request, callback)
  }

  //  Delete Sales Order Line
  deleteOrderLine({
    token,
    orderLineUuid,
    language
  }, callback) {
    const { DeleteOrderLineRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new DeleteOrderLineRequest()
    request.setOrderLineUuid(orderLineUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().deleteOrderLine(request, callback)
  }

  //  Update Sales Order
  updateOrder({
    token,
    orderUuid,
    posUuid,
    customerUuid,
    documentTypeUuid,
    warehouseUuid,
    priceListUuid,
    description,
    campaignUuid,
    language
  }, callback) {
    const { UpdateOrderRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new UpdateOrderRequest()
    request.setOrderUuid(orderUuid)
    request.setCampaignUuid(campaignUuid)
    request.setPosUuid(posUuid)
    request.setCustomerUuid(customerUuid)
    request.setDocumentTypeUuid(documentTypeUuid)
    request.setDescription(description)
    if(warehouseUuid) {
      request.setWarehouseUuid(warehouseUuid)
    }
    if(priceListUuid) {
      request.setPriceListUuid(priceListUuid)
    }
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().updateOrder(request, callback)
  }

  //  Update Sales Order Line
  updateOrderLine({
    token,
    orderLineUuid,
    description,
    quantity,
    price,
    discountRate,
    isAddQuantity,
    warehouseUuid,
    language
  }, callback) {
    const { UpdateOrderLineRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new UpdateOrderLineRequest()
    const { getDecimalFromNumber } = require('./lib/convertValues.js')
    request.setOrderLineUuid(orderLineUuid)
    request.setDescription(description)
    request.setQuantity(getDecimalFromNumber(quantity))
    request.setPrice(getDecimalFromNumber(price))
    request.setDiscountRate(getDecimalFromNumber(discountRate))
    request.setWarehouseUuid(warehouseUuid)
    request.setIsAddQuantity(isAddQuantity)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().updateOrderLine(request, callback)
  }

  //  Get Sales Order
  getOrder({
    token,
    orderUuid,
    language
  }, callback) {
    const { GetOrderRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new GetOrderRequest()
    request.setOrderUuid(orderUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().getOrder(request, callback)
  }

  //  List Orders
  listOrders({
    token,
    posUuid,
    documentNo,
    businessPartnerUuid,
    grandTotal,
    openAmount,
    isWaitingForPay,
    isOnlyProcessed,
    isOnlyAisleSeller,
    isWaitingForInvoice,
    isWaitingForShipment,
    dateOrderedFrom,
    dateOrderedTo,
    salesRepresentativeUuid,
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
    const { ListOrdersRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new ListOrdersRequest()
    const { convertCriteriaToGRPC, getDecimalFromNumber } = require('./lib/convertValues.js')
    request.setCriteria(convertCriteriaToGRPC({
      tableName,
      filters,
      query,
      whereClause,
      orderByClause,
      limit
    }))
    request.setPosUuid(posUuid)
    request.setDocumentNo(documentNo)
    request.setBusinessPartnerUuid(businessPartnerUuid)
    if(grandTotal) {
      request.setGrandTotal(getDecimalFromNumber(grandTotal))
    }
    if(openAmount) {
      request.setOpenAmount(getDecimalFromNumber(openAmount))
    }
    //  Date Order From
    if (dateOrderedFrom) {
      request.setDateOrderedFrom(dateOrderedFrom)
    }
    //  Date Order To
    if (dateOrderedTo) {
      request.setDateOrderedTo(dateOrderedTo)
    }
    request.setIsWaitingForPay(isWaitingForPay)
    request.setIsOnlyProcessed(isOnlyProcessed)
    request.setIsOnlyAisleSeller(isOnlyAisleSeller)
    request.setIsWaitingForInvoice(isWaitingForInvoice)
    request.setIsWaitingForShipment(isWaitingForShipment)
    request.setSalesRepresentativeUuid(salesRepresentativeUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().listOrders(request, callback)
  }

  //  List Sales Order Lines
  listOrderLines({
    token,
    orderUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListOrderLinesRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new ListOrderLinesRequest()
    request.setOrderUuid(orderUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().listOrderLines(request, callback)
  }

  //  Create Shipment
  createShipment({
    token,
    orderUuid,
    salesRepresentativeUuid,
    language
  }, callback) {
    const { CreateShipmentRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new CreateShipmentRequest()
    request.setOrderUuid(orderUuid)
    request.setSalesRepresentativeUuid(salesRepresentativeUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().createShipment(request, callback)
  }

    //  Create Shipment Line
  createShipmentLine({
    token,
    shipmentUuid,
    orderLineUuid,
    description,
    quantity,
    language
  }, callback) {
    const { CreateShipmentLineRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new CreateShipmentLineRequest()
    const { getDecimalFromNumber } = require('./lib/convertValues.js')
    request.setShipmentUuid(shipmentUuid)
    request.setOrderLineUuid(orderLineUuid)
    request.setDescription(description)
    if(quantity) {
      request.setQuantity(getDecimalFromNumber(quantity))
    }
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().createShipmentLine(request, callback)
  }

  //  Delete Shipment Line
  deleteShipmentLine({
    token,
    shipmentLineUuid,
    language
  }, callback) {
    const { DeleteShipmentLineRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new DeleteShipmentLineRequest()
    request.setShipmentLineUuid(shipmentLineUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().deleteShipmentLine(request, callback)
  }

  //  List Shipment Lines
  listShipmentLines({
    token,
    shipmentUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListShipmentLinesRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new ListShipmentLinesRequest()
    request.setShipmentUuid(shipmentUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().listShipmentLines(request, callback)
  }

  //  Process Shipment
  processShipment({
    token,
    shipmentUuid,
    description, 
    documentAction,
    language
  }, callback) {
    const { ProcessShipmentRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new ProcessShipmentRequest()
    request.setShipmentUuid(shipmentUuid)
    request.setDescription(description)
    request.setDocumentAction(documentAction)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().processShipment(request, callback)
  }

  //  Reverse Sales transaction
  reverseSales({
    token,
    posUuid,
    orderUuid,
    description, 
    language
  }, callback) {
    const { ReverseSalesRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new ReverseSalesRequest()
    request.setOrderUuid(orderUuid)
    request.setPosUuid(posUuid)
    request.setDescription(description)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().reverseSales(request, callback)
  }

  //  Payments
  //  Create Payment
  createPayment({
    token,
    posUuid,
    orderUuid,
    chargeUuid,
    collectingAgentUuid,
    invoiceUuid,
    bankUuid,
    referenceNo,
    description,
    amount,
    paymentDate,
    paymentAccountDate,
    tenderTypeCode,
    currencyUuid,
    paymentMethodUuid,
    isRefund,
    language
  }, callback) {
    const { CreatePaymentRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const { getDecimalFromNumber } = require('./lib/convertValues.js')
    const request = new CreatePaymentRequest()
    request.setPosUuid(posUuid)
    if(orderUuid) {
      request.setOrderUuid(orderUuid)
    }
    if(chargeUuid) {
      request.setChargeUuid(chargeUuid)
    }
    if(collectingAgentUuid) {
      request.setCollectingAgentUuid(collectingAgentUuid)
    }
    if (bankUuid) {
      request.setBankUuid(bankUuid)
    }
    if (invoiceUuid) {
      request.setInvoiceUuid(invoiceUuid)
    }
    if (referenceNo) {
      request.setReferenceNo(referenceNo)
    }
    if (description) {
      request.setDescription(description)
    }
    if (tenderTypeCode) {
      request.setTenderTypeCode(tenderTypeCode)
    }
    if(paymentMethodUuid) {
      request.setPaymentMethodUuid(paymentMethodUuid)
    }
    if (currencyUuid) {
      request.setCurrencyUuid(currencyUuid)
    }
    if(amount) {
      request.setAmount(getDecimalFromNumber(amount))
    }
    //  Date of Payment
    if (paymentDate) {
      request.setPaymentDate(paymentDate)
    }
    request.setIsRefund(isRefund)
    if (paymentAccountDate) {
      request.setPaymentAccountDate(paymentAccountDate)
    }
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().createPayment(request, callback)
  }

  //  Create Payment Refund Reference
  createRefundReference({
    token,
    posUuid,
    orderUuid,
    salesRepresentativeUuid,
    customerBankAccountUuid,
    description,
    amount,
    paymentDate,
    paymentAccountDate,
    tenderTypeCode,
    currencyUuid,
    conversionTypeUuid,
    paymentMethodUuid,
    language
  }, callback) {
    const { CreateRefundReferenceRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const { getDecimalFromNumber } = require('./lib/convertValues.js')
    const request = new CreateRefundReferenceRequest()
    request.setPosUuid(posUuid)
    request.setOrderUuid(orderUuid)
    if(salesRepresentativeUuid) {
      request.setSalesRepresentativeUuid(salesRepresentativeUuid)
    }
    if(customerBankAccountUuid) {
      request.setCustomerBankAccountUuid(customerBankAccountUuid)
    }
    if (description) {
      request.setDescription(description)
    }
    if (tenderTypeCode) {
      request.setTenderTypeCode(tenderTypeCode)
    }
    if(paymentMethodUuid) {
      request.setPaymentMethodUuid(paymentMethodUuid)
    }
    if(conversionTypeUuid) {
      request.setConversionTypeUuid(conversionTypeUuid)
    }
    if (currencyUuid) {
      request.setCurrencyUuid(currencyUuid)
    }
    if(amount) {
      request.setAmount(getDecimalFromNumber(amount))
    }
    //  Date of Payment
    if (paymentDate) {
      request.setPaymentDate(paymentDate)
    }
    if (paymentAccountDate) {
      request.setPaymentAccountDate(paymentAccountDate)
    }
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().createRefundReference(request, callback)
  }

  //  Update Payment
  updatePayment({
    token,
    paymentUuid,
    bankUuid,
    referenceNo,
    description,
    amount,
    paymentDate,
    tenderTypeCode,
    paymentMethodUuid,
    paymentAccountDate,
    language
  }, callback) {
    const { UpdatePaymentRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const { getDecimalFromNumber } = require('./lib/convertValues.js')
    const request = new UpdatePaymentRequest()
    request.setPaymentUuid(paymentUuid)
    if (bankUuid) {
      request.setBankUuid(bankUuid)
    }
    if (referenceNo) {
      request.setReferenceNo(referenceNo)
    }
    if (description) {
      request.setDescription(description)
    }
    if (tenderTypeCode) {
      request.setTenderTypeCode(tenderTypeCode)
    }
    if(paymentMethodUuid) {
      request.setPaymentMethodUuid(paymentMethodUuid)
    }
    if(amount) {
      request.setAmount(getDecimalFromNumber(amount))
    }
    //  Date of Payment
    if (paymentDate) {
      request.setPaymentDate(paymentDate)
    }
    if (paymentAccountDate) {
      request.setPaymentAccountDate(paymentAccountDate)
    }
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().updatePayment(request, callback)
  }

  //  List Cash summary movements
  listCashSummaryMovements({
    token,
    posUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListCashSummaryMovementsRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new ListCashSummaryMovementsRequest()
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().listCashSummaryMovements(request, callback)
  }

  //  Cash Closing
  processCashClosing({
    token,
    posUuid,
    uuid,
    id,
    language
  }, callback) {
    const { CashClosingRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new CashClosingRequest()
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    if (uuid) {
      request.setUuid(uuid)
    }
    request.setId(id)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().processCashClosing(request, callback)
  }

  //  Cash Opening service
  processCashOpening({
    token,
    posUuid,
    collectingAgentUuid,
    description,
    payments,
    language
  }, callback) {
    const { CashOpeningRequest, CreatePaymentRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const { convertValueToGRPC, getDecimalFromNumber } = require('./lib/convertValues.js')
    const request = new CashOpeningRequest()
    request.setPosUuid(posUuid)
    request.setCollectingAgentUuid(collectingAgentUuid)
    request.setDescription(description)
      //  Set payment data
    payments.forEach(payment => {
      const paymentRequest = new CreatePaymentRequest()
      if (payment.uuid) {
        paymentRequest.setUuid(payment.uuid)
      }
      paymentRequest.setId(payment.id)
      if(payment.chargeUuid) {
        paymentRequest.setChargeUuid(payment.chargeUuid)
      }
      if (payment.bankUuid) {
        paymentRequest.setBankUuid(payment.bankUuid)
      }
      if (payment.collectingAgentUuid) {
        paymentRequest.setCollectingAgentUuid(payment.collectingAgentUuid)
      }
      paymentRequest.setIsRefund(false)
      if (payment.invoiceUuid) {
        paymentRequest.setInvoiceUuid(payment.invoiceUuid)
      }
      if (payment.referenceNo) {
        paymentRequest.setReferenceNo(payment.referenceNo)
      }
      if (payment.description) {
        paymentRequest.setDescription(payment.description)
      }
      if (payment.tenderTypeCode) {
        paymentRequest.setTenderTypeCode(payment.tenderTypeCode)
      }
      if (payment.currencyUuid) {
        paymentRequest.setCurrencyUuid(payment.currencyUuid)
      }
      if(payment.amount) {
        paymentRequest.setAmount(getDecimalFromNumber(payment.amount))
      }
      if (payment.paymentDate) {
        paymentRequest.setPaymentDate(convertValueToGRPC({
          value: payment.paymentDate
        }))
      }
      request.addPayments(paymentRequest)
    })
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().processCashOpening(request, callback)
  }

    //  Cash Withdrawal service
  processCashWithdrawal({
    token,
    posUuid,
    collectingAgentUuid,
    description,
    payments,
    language
  }, callback) {
    const { CashWithdrawalRequest, CreatePaymentRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const { convertValueToGRPC, getDecimalFromNumber } = require('./lib/convertValues.js')
    const request = new CashWithdrawalRequest()
    request.setPosUuid(posUuid)
    request.setCollectingAgentUuid(collectingAgentUuid)
    request.setDescription(description)
      //  Set payment data
    payments.forEach(payment => {
      const paymentRequest = new CreatePaymentRequest()
      if (payment.uuid) {
        paymentRequest.setUuid(payment.uuid)
      }
      paymentRequest.setId(payment.id)
      if(payment.chargeUuid) {
        paymentRequest.setChargeUuid(payment.chargeUuid)
      }
      if (payment.bankUuid) {
        paymentRequest.setBankUuid(payment.bankUuid)
      }
      if (payment.collectingAgentUuid) {
        paymentRequest.setCollectingAgentUuid(payment.collectingAgentUuid)
      }
      paymentRequest.setIsRefund(true)
      if (payment.invoiceUuid) {
        paymentRequest.setInvoiceUuid(payment.invoiceUuid)
      }
      if (payment.referenceNo) {
        paymentRequest.setReferenceNo(payment.referenceNo)
      }
      if (payment.description) {
        paymentRequest.setDescription(payment.description)
      }
      if (payment.tenderTypeCode) {
        paymentRequest.setTenderTypeCode(payment.tenderTypeCode)
      }
      if (payment.currencyUuid) {
        paymentRequest.setCurrencyUuid(payment.currencyUuid)
      }
      if(payment.amount) {
        paymentRequest.setAmount(getDecimalFromNumber(payment.amount))
      }
      if (payment.paymentDate) {
        paymentRequest.setPaymentDate(convertValueToGRPC({
          value: payment.paymentDate
        }))
      }
      request.addPayments(paymentRequest)
    })
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().processCashWithdrawal(request, callback)
  }

  //  allocate Seller
  allocateSeller({
    token,
    posUuid,
    salesRepresentativeUuid,
    language
  }, callback) {
    const { AllocateSellerRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new AllocateSellerRequest()
    request.setPosUuid(posUuid)
    request.setSalesRepresentativeUuid(salesRepresentativeUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().allocateSeller(request, callback)
  }

  //  Delete Payment
  deletePayment({
    token,
    paymentUuid,
    language
  }, callback) {
    const { DeletePaymentRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new DeletePaymentRequest()
    request.setPaymentUuid(paymentUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().deletePayment(request, callback)
  }

  //  Delete Refund Reference
  deleteRefundReference({
    token,
    uuid,
    id,
    language
  }, callback) {
    const { DeleteRefundReferenceRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new DeleteRefundReferenceRequest()
    request.setUuid(uuid)
    request.setId(id)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().deleteRefundReference(request, callback)
  }

  //  List Payments
  listPayments({
    token,
    posUuid,
    orderUuid,
    isOnlyRefund,
    isOnlyReceipt,
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
    const { ListPaymentsRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const { convertCriteriaToGRPC } = require('./lib/convertValues.js')
    const request = new ListPaymentsRequest()
    request.setCriteria(convertCriteriaToGRPC({
      tableName,
      filters,
      query,
      whereClause,
      orderByClause,
      limit
    }))
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    if (orderUuid) {
      request.setOrderUuid(orderUuid)
    }
    request.setIsOnlyRefund(isOnlyRefund)
    request.setIsOnlyReceipt(isOnlyReceipt)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().listPayments(request, callback)
  }

  //  Create Payment
  processOrder({
    token,
    posUuid,
    orderUuid,
    isOpenRefund,
    payments,
    language
  }, callback) {
    const { CreatePaymentRequest, ProcessOrderRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const { convertValueToGRPC, getDecimalFromNumber } = require('./lib/convertValues.js')
    const request = new ProcessOrderRequest()
    request.setPosUuid(posUuid)
    request.setOrderUuid(orderUuid)
    request.setIsOpenRefund(isOpenRefund)
    //  Set payment data
    payments.forEach(payment => {
      const paymentRequest = new CreatePaymentRequest()
      if (payment.uuid) {
        paymentRequest.setUuid(payment.uuid)
      }
      paymentRequest.setId(payment.id)
      if (payment.orderUuid) {
        paymentRequest.setOrderUuid(payment.orderUuid)
      }
      if (payment.bankUuid) {
        paymentRequest.setBankUuid(payment.bankUuid)
      }
      paymentRequest.setIsRefund(payment.isRefund)
      if (payment.collectingAgentUuid) {
        paymentRequest.setCollectingAgentUuid(payment.collectingAgentUuid)
      }
      if (payment.invoiceUuid) {
        paymentRequest.setInvoiceUuid(payment.invoiceUuid)
      }
      if (payment.referenceNo) {
        paymentRequest.setReferenceNo(payment.referenceNo)
      }
      if (payment.description) {
        paymentRequest.setDescription(payment.description)
      }
      if (payment.tenderTypeCode) {
        paymentRequest.setTenderTypeCode(payment.tenderTypeCode)
      }
      if (payment.currencyUuid) {
        paymentRequest.setCurrencyUuid(payment.currencyUuid)
      }
      if(payment.amount) {
        paymentRequest.setAmount(getDecimalFromNumber(payment.amount))
      }
      if (payment.paymentDate) {
        paymentRequest.setPaymentDate(convertValueToGRPC({
          value: payment.paymentDate
        }))
      }
      request.addPayments(paymentRequest)
    })
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().processOrder(request, callback)
  }

  //  Get Sales Order
  getKeyLayout({
    token,
    keyLayoutUuid,
    language
  }, callback) {
    const { GetKeyLayoutRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new GetKeyLayoutRequest()
    request.setKeyLayoutUuid(keyLayoutUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().getKeyLayout(request, callback)
  }

  //  Validate User PIN
  validatePIN({
    token,
    posUuid,
    pin,
    language
  }, callback) {
    const { ValidatePINRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new ValidatePINRequest()
    request.setPin(pin)
    request.setPosUuid(posUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().validatePIN(request, callback)
  }

  //  List Available Warehouses
  listAvailableWarehouses({
    token,
    posUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListAvailableWarehousesRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new ListAvailableWarehousesRequest()
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().listAvailableWarehouses(request, callback)
  }

  //  List Available Tender Types
  listAvailablePaymentMethods({
    token,
    posUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListAvailablePaymentMethodsRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new ListAvailablePaymentMethodsRequest()
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().listAvailablePaymentMethods(request, callback)
  }
  
  //  List Available Price List
  listAvailablePriceList({
    token,
    posUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListAvailablePriceListRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new ListAvailablePriceListRequest()
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().listAvailablePriceList(request, callback)
  }

  //  List Available Price List
  listAvailableCurrencies({
    token,
    posUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListAvailableCurrenciesRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new ListAvailableCurrenciesRequest()
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().listAvailableCurrencies(request, callback)
  }

  //  List Available Document Types
  listAvailableDocumentTypes({
    token,
    posUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListAvailableDocumentTypesRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new ListAvailableDocumentTypesRequest()
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().listAvailableDocumentTypes(request, callback)
  }

  //  Create Customer from POS
  createCustomer({
    token,
    value,
    taxId,
    duns,
    naics,
    name,
    lastName,
    description,
    posUuid,
    businessPartnerGroupUuid,
    addresses,
    language
  }, callback) {
    const { CreateCustomerRequest, AddressRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new CreateCustomerRequest()
    request.setValue(value)
    request.setTaxId(taxId)
    request.setDuns(duns)
    request.setNaics(naics)
    request.setName(name)
    request.setLastName(lastName)
    request.setDescription(description)
    request.setPosUuid(posUuid)
    request.setBusinessPartnerGroupUuid(businessPartnerGroupUuid)
    if(addresses) {
      addresses.forEach(address => {
        const addressRequest = new AddressRequest()
        addressRequest.setFirstName(address.firstName)
        addressRequest.setLastName(address.lastName)
        addressRequest.setDescription(address.description)
        addressRequest.setContactName(address.contactName)
        addressRequest.setEmail(address.email)
        addressRequest.setPhone(address.phone)
        addressRequest.setAddress1(address.address1)
        addressRequest.setAddress2(address.address2)
        addressRequest.setAddress3(address.address3)
        addressRequest.setAddress4(address.address4)
        addressRequest.setCityUuid(address.cityUuid)
        addressRequest.setCityName(address.cityName)
        addressRequest.setPostalCode(address.postalCode)
        addressRequest.setRegionUuid(address.regionUuid)
        addressRequest.setRegionName(address.regionName)
        addressRequest.setCountryUuid(address.countryUuid)
        addressRequest.setIsDefaultBilling(address.isDefaultBilling)
        addressRequest.setIsDefaultShipping(address.isDefaultShipping)
        request.addAddresses(addressRequest)
      })
    }
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().createCustomer(request, callback)
  }

  //  Update Customer from POS
  updateCustomer({
    uuid,
    token,
    value,
    taxId,
    duns,
    naics,
    name,
    lastName,
    description,
    addresses,
    language
  }, callback) {
    const { UpdateCustomerRequest, AddressRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new UpdateCustomerRequest()
    request.setUuid(uuid)
    request.setValue(value)
    request.setTaxId(taxId)
    request.setDuns(duns)
    request.setNaics(naics)
    request.setName(name)
    request.setLastName(lastName)
    request.setDescription(description)
    if(addresses) {
      addresses.forEach(address => {
        const addressRequest = new AddressRequest()
        addressRequest.setFirstName(address.firstName)
        addressRequest.setLastName(address.lastName)
        addressRequest.setDescription(address.description)
        addressRequest.setContactName(address.contactName)
        addressRequest.setEmail(address.email)
        addressRequest.setPhone(address.phone)
        addressRequest.setAddress1(address.address1)
        addressRequest.setAddress2(address.address2)
        addressRequest.setAddress3(address.address3)
        addressRequest.setAddress4(address.address4)
        addressRequest.setCityUuid(address.cityUuid)
        addressRequest.setCityName(address.cityName)
        addressRequest.setPostalCode(address.postalCode)
        addressRequest.setRegionUuid(address.regionUuid)
        addressRequest.setRegionName(address.regionName)
        addressRequest.setCountryUuid(address.countryUuid)
        addressRequest.setIsDefaultBilling(address.isDefaultBilling)
        addressRequest.setIsDefaultShipping(address.isDefaultShipping)
        addressRequest.setUuid(address.uuid)
        request.addAddresses(addressRequest)
      })
    }
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().updateCustomer(request, callback)
  }

  //  Get Customer
  getCustomer({
    token,
    searchValue,
    value,
    name,
    contactName,
    email,
    postalCode,
    phone,
    language
  }, callback) {
    const { GetCustomerRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new GetCustomerRequest()
    request.setSearchValue(searchValue)
    request.setValue(value)
    request.setName(name)
    request.setContactName(contactName)
    request.setEmail(email)
    request.setPostalCode(postalCode)
    request.setPhone(phone)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().getCustomer(request, callback)
  }
  
  //  Get Customer Bank Account
  getCustomerBankAccount({
    token,
    customerBankAccountUuid,
    language
  }, callback) {
    const { GetCustomerBankAccountRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new GetCustomerBankAccountRequest()
    request.setCustomerBankAccountUuid(customerBankAccountUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().getCustomerBankAccount(request, callback)
  }

  //  Create Customer Bank Account
  createCustomerBankAccount({
    token,
    customerUuid,
    posUuid,
    city,
    country,
    email,
    driverLicense,
    socialSecurityNumber,
    name,
    state,
    street,
    zip,
    bankAccountType,
    bankUuid,
    isAch,
    addressVerified,
    zipVerified,
    routingNo,
    iban,
    isPayrollAccount,
    accountNo,
    language
  }, callback) {
    const { CreateCustomerBankAccountRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new CreateCustomerBankAccountRequest()
    request.setCustomerUuid(customerUuid)
    request.setPosUuid(posUuid)
    request.setCity(city)
    request.setCountry(country)
    request.setDriverLicense(driverLicense)
    request.setSocialSecurityNumber(socialSecurityNumber)
    request.setName(name)
    request.setState(state)
    request.setStreet(street)
    request.setZip(zip)
    request.setBankAccountType(bankAccountType)
    request.setBankUuid(bankUuid)
    request.setIsAch(isAch)
    request.setAddressVerified(addressVerified)
    request.setZipVerified(zipVerified)
    request.setRoutingNo(routingNo)
    request.setIban(iban)
    request.setIsPayrollAccount(isPayrollAccount)
    request.setEmail(email)
    request.setAccountNo(accountNo)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().createCustomerBankAccount(request, callback)
  }

  //  Update Customer Bank Account
  updateCustomerBankAccount({
    token,
    customerBankAccountUuid,
    posUuid,
    city,
    country,
    email,
    driverLicense,
    socialSecurityNumber,
    name,
    state,
    street,
    zip,
    bankAccountType,
    bankUuid,
    isAch,
    addressVerified,
    zipVerified,
    routingNo,
    iban,
    isPayrollAccount,
    accountNo,
    language
  }, callback) {
    const { UpdateCustomerBankAccountRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new UpdateCustomerBankAccountRequest()
    request.setCustomerBankAccountUuid(customerBankAccountUuid)
    request.setPosUuid(posUuid)
    request.setCity(city)
    request.setCountry(country)
    request.setDriverLicense(driverLicense)
    request.setSocialSecurityNumber(socialSecurityNumber)
    request.setName(name)
    request.setState(state)
    request.setStreet(street)
    request.setZip(zip)
    request.setBankAccountType(bankAccountType)
    request.setBankUuid(bankUuid)
    request.setIsAch(isAch)
    request.setAddressVerified(addressVerified)
    request.setZipVerified(zipVerified)
    request.setRoutingNo(routingNo)
    request.setIban(iban)
    request.setIsPayrollAccount(isPayrollAccount)
    request.setEmail(email)
    request.setAccountNo(accountNo)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().updateCustomerBankAccount(request, callback)
  }

  //  Get Customer Bank Accoount
  getCustomerBankAccount({
    token,
    customerBankAccountUuid,
    language
  }, callback) {
    const { GetCustomerBankAccountRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new GetCustomerBankAccountRequest()
    request.setCustomerBankAccountUuid(customerBankAccountUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().getCustomerBankAccount(request, callback)
  }

  //  Delete Customer Bank Accoount
  deleteCustomerBankAccount({
    token,
    customerBankAccountUuid,
    language
  }, callback) {
    const { DeleteCustomerBankAccountRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new DeleteCustomerBankAccountRequest()
    request.setCustomerBankAccountUuid(customerBankAccountUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().deleteCustomerBankAccount(request, callback)
  }

  //  List Customer Bank Accounts
  listCustomerBankAccounts({
    token,
    customerUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListCustomerBankAccountsRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new ListCustomerBankAccountsRequest()
    request.setCustomerUuid(customerUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().listCustomerBankAccounts(request, callback)
  }

  //  List Customer Refund References
  listRefundReferences({
    token,
    posUuid,
    orderUuid,
    customerUuid,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListRefundReferencesRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new ListRefundReferencesRequest()
    request.setCustomerUuid(customerUuid)
    request.setPosUuid(posUuid)
    request.setOrderUuid(orderUuid)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().listRefundReferences(request, callback)
  }

  //  Get Available Refund
  getAvailableRefund({
    token,
    posUuid,
    date,
    language
  }, callback) {
    const { GetAvailableRefundRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new GetAvailableRefundRequest()
    if (date) {
      request.setDate(date)
    }
    request.setPosUuid(posUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().getAvailableRefund(request, callback)
  }

  //  List Available Sellers
  listAvailableSellers({
    token,
    posUuid,
    isOnlyAllocated,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListAvailableSellersRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new ListAvailableSellersRequest()
    if (posUuid) {
      request.setPosUuid(posUuid)
    }
    request.setIsOnlyAllocated(isOnlyAllocated)
    request.setPageSize(pageSize)
    request.setPageToken(pageToken)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().listAvailableSellers(request, callback)
  }

  //  Print Ticket
  printTicket({
    token,
    posUuid,
    orderUuid,
    language
  }, callback) {
    const { PrintTicketRequest } = require('./src/grpc/proto/point_of_sales_pb.js')
    const request = new PrintTicketRequest()
    request.setPosUuid(posUuid)
    request.setOrderUuid(orderUuid)
    request.setClientRequest(this.createClientRequest(token, language))
    this.getPosService().printTicket(request, callback)
  }

  //  Enrollment service
  //  Enroll User
  enrollUser({
    userName,
    name,
    email,
    clientVersion,
    applicationType,
    password
  }, callback) {
    const { EnrollUserRequest } = require('./src/grpc/proto/enrollment_pb.js')
    const request = new EnrollUserRequest()
    request.setUserName(userName)
    request.setName(name)
    request.setEmail(email)
    request.setClientVersion(clientVersion)
    request.setApplicationType(applicationType)
    request.setPassword(password)
    this.getEnrollmentService().enrollUser(request, callback)
  }

  //  Reset Password
  resetPassword({
    userName,
    email,
    clientVersion
  }, callback) {
    const { ResetPasswordRequest } = require('./src/grpc/proto/enrollment_pb.js')
    const request = new ResetPasswordRequest()
    request.setUserName(userName)
    request.setEmail(email)
    request.setClientVersion(clientVersion)
    this.getEnrollmentService().resetPassword(request, callback)
  }

  //  Reset Password from Token
  resetPasswordFromToken({
    token,
    password,
    clientVersion
  }, callback) {
    const { ResetPasswordTokenRequest } = require('./src/grpc/proto/enrollment_pb.js')
    const request = new ResetPasswordTokenRequest()
    request.setToken(token)
    request.setPassword(password)
    request.setClientVersion(clientVersion)
    this.getEnrollmentService().resetPasswordFromToken(request, callback)
  }

  //  Activate User
  activateUser({
    token,
    clientVersion
  }, callback) {
    const { ActivateUserRequest } = require('./src/grpc/proto/enrollment_pb.js')
    const request = new ActivateUserRequest()
    request.setToken(token)
    request.setClientVersion(clientVersion)
    this.getEnrollmentService().activateUser(request, callback)
  }

  isEmptyValue(value) {
    const { isEmptyValue } = require('./lib/convertValues.js');
    return isEmptyValue(value);
  }
}

module.exports = Api;
