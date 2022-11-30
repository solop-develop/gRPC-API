/*************************************************************************************
 * Product: ADempiere gRPC Client                                                    *
 * Copyright (C) 2012-2018 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Yamel Senih ysenih@erpya.com                                      *
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
      this.businessHost = adempiereConfig.businessHost
      this.version = adempiereConfig.version
      this.language = adempiereConfig.language
      this.token = adempiereConfig.token
    }

    this.initUIService()
    this.initBusinessService()
    this.initDashboardService()
    this.initCoreService()
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
  initUIService() {
    var grpc = require('@grpc/grpc-js');
    var services = require('./src/grpc/proto/business_grpc_pb');
    this.ui = new services.UserInterfaceClient(this.businessHost, grpc.credentials.createInsecure());
  }

  // Init connection
  initBusinessService() {
    var grpc = require('@grpc/grpc-js');
    var services = require('./src/grpc/proto/business_grpc_pb');
    this.business = new services.BusinessDataClient(this.businessHost, grpc.credentials.createInsecure());
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

  //  Get UI Service
  getUIService() {
    return this.ui
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

  /**
   * Get a Tab Entity
   * @param {string} token session uuid
   * @param {string} language
   * @param {string} tabUuid
   * @param {number} id record id
   * @param {string} uuid record uuid
   */
  getTabEntity({
    token,
    tabUuid,
    id,
    uuid,
    language
  }, callback) {
    const { GetTabEntityRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new GetTabEntityRequest();

    request.setTabUuid(tabUuid);
    request.setUuid(uuid);
    if (!this.isEmptyValue(id) && !Number.isNaN(id)) {
      const parsedId = parseInt(id, 10);
      request.setId(parsedId);
    }

    request.setClientRequest(this.createClientRequest(token, language));

    this.getUIService().getTabEntity(request, callback);
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
    ids = [],
    tableName,
    language
  }, callback) {
    const { DeleteEntityRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new DeleteEntityRequest();

    request.setId(id);
    request.setUuid(uuid);
    request.setTableName(tableName);

    // selection list id
    if (!this.isEmptyValue(ids)) {
      request.setIdsList(ids);
    }

    request.setClientRequest(this.createClientRequest(token, language));
    this.getBusinessService().deleteEntity(request, callback);
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
    processUuid,
    tableName,
    id,
    uuid,
    reportType,
    printFormatUuid,
    reportViewUuid,
    isSummary,
    parameters,
    tableSelectedId,
    selections,
    language
  }, callback) {
    const { RunBusinessProcessRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new RunBusinessProcessRequest();

    // record of window
    request.setTableName(tableName);
    request.setId(id);
    request.setUuid(uuid);

    // report values
    request.setReportType(reportType);
    request.setPrintFormatUuid(printFormatUuid);
    request.setReportViewUuid(reportViewUuid);
    request.setIsSummary(isSummary);

    request.setProcessUuid(processUuid);
    // set process parameters list
    if (parameters && parameters.length) {
      const { convertParameterToGRPC } = require('./lib/convertValues.js');
      parameters.forEach(parameter => {
        // parameter format = { columName, value }
        const convertedParameter = convertParameterToGRPC({
          columnName: parameter.key,
          value: parameter.value
        });

        request.addParameters(convertedParameter);
      });
    }

    request.setTableSelectedId(tableSelectedId);
    // browser records selections list
    if (!this.isEmptyValue(selections)) {
      const { convertSelectionToGRPC } = require('./lib/convertValues.js');

      selections.forEach(selection => {
        // selection format = { selectionId: number, selectionValues: [{ columName, value }] }
        const convertedRecord = convertSelectionToGRPC(selection);

        request.addSelections(convertedRecord);
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
    const { GetReportOutputRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new GetReportOutputRequest();
    const { convertCriteriaToGRPC } = require('./lib/convertValues.js');

    request.setCriteria(
      convertCriteriaToGRPC({
        tableName,
        filters,
        query,
        whereClause,
        orderByClause,
        limit
      })
    );

    //
    if (!this.isEmptyValue(printFormatUuid)) {
      request.setPrintFormatUuid(printFormatUuid);
    }
    if (!this.isEmptyValue(reportViewUuid)) {
      request.setReportViewUuid(reportViewUuid);
    }
    request.setIsSummary(isSummary);
    request.setReportName(reportName);
    request.setReportType(reportType);
    request.setClientRequest(this.createClientRequest(token, language));
    this.getUIService().getReportOutput(request, callback);
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

    if (!this.isEmptyValue(contextAttributes)) {
      const { convertParameterToGRPC, typeOfValue } = require('./lib/convertValues.js');

      if (typeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }

      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (typeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }
        request.addContextAttributes(
          convertParameterToGRPC({
            columnName: parsedAttribute.key,
            value: parsedAttribute.value
          })
        );
      })
    }

    request.setUuid(uuid);
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setClientRequest(this.createClientRequest(token, language));
    this.getUIService().listBrowserItems(request, callback);
  }

  /**
   * Update Browser Entity
   * @param {string} token session uuid
   * @param {number} id identifier of smart browser
   * @param {string} id universally unique identifier of smart browser
   * @param {object} 
   */
  updateBrowserEntity({
    token,
    id,
    uuid,
    recordId,
    attributes,
    language
  }, callback) {
    const { UpdateBrowserEntityRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new UpdateBrowserEntityRequest();

    request.setId(id);
    request.setUuid(uuid);
    request.setRecordId(recordId);

    // browser records selections list
    if (!this.isEmptyValue(attributes)) {
      const { convertParameterToGRPC, typeOfValue } = require('./lib/convertValues.js');
  
      if (typeOfValue(attributes) === 'String') {
        attributes = JSON.parse(attributes);
      }

      attributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (typeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }
  
        const attributeConverted = convertParameterToGRPC({
          columnName: parsedAttribute.key,
          value: parsedAttribute.value
        });

        request.addAttributes(attributeConverted);
      });
    }

    request.setClientRequest(this.createClientRequest(token, language));
    this.getUIService().updateBrowserEntity(request, callback);
  }

  //  List Lookup Items
  listLookupItems({
    token,
    processParameterUuid,
    fieldUuid,
    browseFieldUuid,
    referenceUuid,
    columnUuid,
    columnName,
    tableName,
    searchValue,
    contextAttributes,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListLookupItemsRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new ListLookupItemsRequest();

    request.setProcessParameterUuid(processParameterUuid);
    request.setFieldUuid(fieldUuid);
    request.setBrowseFieldUuid(browseFieldUuid);
    //
    request.setReferenceUuid(referenceUuid);
    request.setTableName(tableName);
    request.setColumnUuid(columnUuid);
    request.setColumnName(columnName);
    request.setSearchValue(searchValue);
    if (!this.isEmptyValue(contextAttributes)) {
      const { convertParameterToGRPC, typeOfValue } = require('./lib/convertValues.js');

      if (typeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (typeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }
        request.addContextAttributes(
          convertParameterToGRPC({
            columnName: parsedAttribute.key,
            value: parsedAttribute.value
          })
        );
      })
    }
    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setClientRequest(this.createClientRequest(token, language));
    this.getUIService().listLookupItems(request, callback);
  }

  //  Get Lookup
  getLookupItem({
    token,
    processParameterUuid,
    fieldUuid,
    browseFieldUuid,
    referenceUuid,
    columnUuid,
    columnName,
    tableName,
    contextAttributes,
    id,
    uuid,
    language
  }, callback) {
    const { GetLookupItemRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new GetLookupItemRequest();
    request.setUuid(uuid);
    request.setId(id);
    request.setProcessParameterUuid(processParameterUuid);
    request.setFieldUuid(fieldUuid);
    request.setBrowseFieldUuid(browseFieldUuid);
    //
    request.setReferenceUuid(referenceUuid);
    request.setTableName(tableName);
    request.setColumnUuid(columnUuid);
    request.setColumnName(columnName);
    if (!this.isEmptyValue(contextAttributes)) {
      const { convertParameterToGRPC, typeOfValue } = require('./lib/convertValues.js');

      if (typeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (typeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }
        request.addContextAttributes(
          convertParameterToGRPC({
            columnName: parsedAttribute.key,
            value: parsedAttribute.value
          })
        );
      })
    }
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
    processParameterUuid,
    fieldUuid,
    browseFieldUuid,
    columnUuid,
    value,
    contextAttributes,
    language
  }, callback) {
    const { GetDefaultValueRequest } = require('./src/grpc/proto/business_pb.js')
    const request = new GetDefaultValueRequest();
    request.setProcessParameterUuid(processParameterUuid);
    request.setFieldUuid(fieldUuid);
    request.setBrowseFieldUuid(browseFieldUuid);
    request.setColumnUuid(columnUuid);
    if (!this.isEmptyValue(contextAttributes)) {
      const { convertParameterToGRPC, typeOfValue } = require('./lib/convertValues.js');
      if (typeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }

      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (typeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }

        request.addContextAttributes(
          convertParameterToGRPC({
            columnName: parsedAttribute.key,
            value: parsedAttribute.value
          })
        );
      });
    }

    // set value as default value
    if (!this.isEmptyValue(value)) {
      const { convertValueToGRPC } = require('./lib/convertValues.js');
      const convertedValue = convertValueToGRPC({
        value
      });
      request.setValue(convertedValue);
    }

    request.setClientRequest(this.createClientRequest(token, language));
    this.getUIService().getDefaultValue(request, callback);
  }

  // List Tab Entities
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
    searchValue,
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListTabEntitiesRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new ListTabEntitiesRequest();
    const { convertCriteriaToGRPC } = require('./lib/convertValues.js');

    // TODO: Add support to all parameters
    request.setFilters(
      convertCriteriaToGRPC({
        filters,
        orderByClause: sorting
      })
    );
    request.setWindowNo(windowNo);
    if (windowUuid) {
      request.setWindowUuid(windowUuid);
    }
    if (tabUuid) {
      request.setTabUuid(tabUuid);
    }
    request.setSearchValue(searchValue);
    if (!this.isEmptyValue(contextAttributes)) {
      const { convertParameterToGRPC, typeOfValue } = require('./lib/convertValues.js');

      if (typeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (typeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }
        request.addContextAttributes(
          convertParameterToGRPC({
            columnName: parsedAttribute.key,
            value: parsedAttribute.value
          })
        );
      });
    }

    //  For columns
    if (!this.isEmptyValue(columns)) {
      request.setColumnsList(columns);
    }
    if (pageSize) {
      request.setPageSize(pageSize);
    }
    if (pageToken) {
      request.setPageToken(pageToken);
    }
    request.setClientRequest(this.createClientRequest(token, language));
    this.getUIService().listTabEntities(request, callback);
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

  // List General Info
  listGeneralInfo({
    token,
    //  DSL
    filters = [],
    searchValue,
    contextAttributes,
    // references
    processParameterUuid,
    fieldUuid,
    browseFieldUuid,
    columnUuid,
    tableName,
    columnName,
    referenceUuid,
    // Page Data
    pageSize,
    pageToken,
    language
  }, callback) {
    const { ListGeneralInfoRequest } = require('./src/grpc/proto/business_pb.js');
    const request = new ListGeneralInfoRequest();
    const { convertCriteriaToGRPC } = require('./lib/convertValues.js');

    request.setFieldUuid(fieldUuid);
    request.setProcessParameterUuid(processParameterUuid);
    request.setBrowseFieldUuid(browseFieldUuid);
    request.setColumnUuid(columnUuid);
    request.setTableName(tableName);
    request.setColumnName(columnName);
    request.setReferenceUuid(referenceUuid);

    request.setFilters(
      convertCriteriaToGRPC({
        tableName,
        filters
      })
    );

    request.setSearchValue(searchValue);
    if (!this.isEmptyValue(contextAttributes)) {
      const { convertParameterToGRPC, typeOfValue } = require('./lib/convertValues.js');

      if (typeOfValue(contextAttributes) === 'String') {
        contextAttributes = JSON.parse(contextAttributes);
      }
      contextAttributes.forEach(attribute => {
        let parsedAttribute = attribute;
        if (typeOfValue(attribute) === 'String') {
          parsedAttribute = JSON.parse(attribute);
        }
        request.addContextAttributes(
          convertParameterToGRPC({
            columnName: parsedAttribute.key,
            value: parsedAttribute.value
          })
        );
      });
    }

    request.setPageSize(pageSize);
    request.setPageToken(pageToken);
    request.setClientRequest(this.createClientRequest(token, language));

    this.getUIService().listGeneralInfo(request, callback);
  }

  //  Dashboard service

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

  isEmptyValue(value) {
    const { isEmptyValue } = require('./lib/convertValues.js');
    return isEmptyValue(value);
  }
}

module.exports = Api;
