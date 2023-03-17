/*************************************************************************************
 * Product: ADempiere gRPC Client                                                    *
 * Copyright (C) 2012-2023 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Yamel Senih ysenih@erpya.com                                      *
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
    const grpc = require('@grpc/grpc-js');
    const services = require('./src/grpc/proto/business_grpc_pb');
    this.ui = new services.UserInterfaceClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Init connection
  initBusinessService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('./src/grpc/proto/business_grpc_pb');
    this.business = new services.BusinessDataClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  //  Get UI Service
  getUIService() {
    return this.ui
  }

  //  Get Business Service
  getBusinessService() {
    return this.business
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
    
    const metadata = getMetadata({
      token
    });

    this.getBusinessService().getEntity(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getBusinessService().createEntity(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getBusinessService().updateEntity(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getBusinessService().createEntity(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getBusinessService().deleteEntity(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getBusinessService().listEntities(
      request,
      metadata,
      callback
    );
  }


  //  User Interface

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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().createChatEntry(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().getReportOutput(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().listDrillTables(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().listPrintFormats(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().listPrintFormats(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().listReportViews(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().unlockPrivateAccess(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().lockPrivateAccess(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().getPrivateAccess(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().getRecordAccess(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().setRecordAccess(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().setPreference(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().deletePreference(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().getContextInfoValue(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().listReferences(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().listBrowserItems(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().updateBrowserEntity(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().listLookupItems(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().getLookupItem(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().listTranslations(
      request,
      metadata,
      callback
    );
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
    
    const metadata = getMetadata({
      token
    });

    this.getUIService().rollbackEntity(
      request,
      metadata,
      callback
    );
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

    
    const metadata = getMetadata({
      token
    });

    this.getUIService().listGeneralInfo(
      request,
      metadata,
      callback
    );
  }

  isEmptyValue(value) {
    const { isEmptyValue } = require('./lib/convertValues.js');
    return isEmptyValue(value);
  }
}

module.exports = Api;
