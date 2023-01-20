/*************************************************************************************
 * Product: ADempiere gRPC File Management Client                                    *
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
 * along with this program. If not, see <https://www.gnu.org/licenses/>.             *
 ************************************************************************************/

const { createClientRequest } = require('@adempiere/grpc-api/lib/clientRequest');
const { isEmptyValue } = require('@adempiere/grpc-api/lib/convertValues.js');

class FileManagement {

  /**
   * File on generated stub
   */
  stubFile = require('@adempiere/grpc-api/src/grpc/proto/file_management_pb.js');

  /**
   * Constructor, No authentication required
   * @param {string} host
   * @param {string} version
   * @param {string} language
   */
  constructor(config) {
    if (config) {
      const adempiereConfig = config.adempiereApi.api;
      this.businessHost = adempiereConfig.businessHost;
      this.version = adempiereConfig.version;
      this.language = adempiereConfig.language;
      this.token = adempiereConfig.token;
    }

    this.initFileManagementService();
    console.log('ADempiere File Management Client Started');
  }

  // Init connection
  initFileManagementService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('@adempiere/grpc-api/src/grpc/proto/file_management_grpc_pb');
    this.fileManagement = new services.FileManagementClient(
      this.businessHost, grpc.credentials.createInsecure()
    );
  }

  // Get File Management Service
  getFileManagementService() {
    return this.fileManagement;
  }

  /**
   * Exists Attachment On Record
   * @param {string} tableName
   * @param {number} recordId
   * @param {string} recordUuid
   * @param {string} language
   * @param {string} token
   */
  existsAttachment({
    token,
    // DSL
    tableName,
    recordId,
    recordUuid,
    language
  }, callback) {
    const { ExistsAttachmentRequest } = this.stubFile;
    const request = new ExistsAttachmentRequest();

    request.setTableName(tableName);
    if (!isEmptyValue(recordId) && !Number.isNaN(recordId)) {
      request.setRecordId(Number(recordId));
    }
    request.setRecordUuid(recordUuid);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getFileManagementService().existsAttachment(request, callback);
  }

  /**
   * Get Attachment Information
   * @param {*} param0 
   * @param {*} callback 
   */
  getAttachment({
    token,
    // DSL
    tableName,
    id,
    uuid,
    language
  }, callback) {
    const { GetAttachmentRequest } = this.stubFile;
    const request = new GetAttachmentRequest();

    request.setTableName(tableName);
    if (!isEmptyValue(id) && !Number.isNaN(id)) {
      request.setId(Number(id));
    }
    request.setUuid(uuid);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getFileManagementService().getAttachment(request, callback);
  }

  /**
   * Get Resource Image from name
   * @param {string} resourceName
   * @param {string} resourceUuid
   * @param {string} language
   * @param {string} token
   */
  getResource({
    resourceName,
    resourceUuid,
    language,
    token
  }, callback) {
    const { GetResourceRequest } = this.stubFile;
    const request = new GetResourceRequest();

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    request.setResourceName(resourceName);
    request.setResourceUuid(resourceUuid);

    const stream = this.getFileManagementService().getResource(request)
    let result = new Uint8Array()
    stream.on('data', (response) => {
      result = this.mergeByteArray(result, response.getData());
    });
    stream.on('status', (status) => {
      if (status && status.code === 13) {
        callback(status, undefined);
      }
    });
    stream.on('end', (end) => {
      callback(undefined, result);
    });
  }

  /**
   * Get Resource Image from name
   * @param {string} fileName
   * @param {string} resourceUuid
   * @param {Blob} file
   * @param {string} token
   */
  loadResource({
    fileName,
    resourceUuid,
    language,
    token
  }, callback) {
    return this.getFileManagementService().loadResource(callback);
  }

  /**
   * Merge two arrays and return merged array
   * 
   */
  mergeByteArray(currentArray, arrayToMerge) {
    const mergedArray = new currentArray.constructor(currentArray.length + arrayToMerge.length)
    mergedArray.set(currentArray)
    mergedArray.set(arrayToMerge, currentArray.length)
    return mergedArray
  }

  setResourceReference({
    token,
    tableName,
    recordId,
    recordUuid,
    textMessage,
    fileName,
    fileSize,
    language
  }, callback) {
    const { SetResourceReferenceRequest } = this.stubFile;
    const request = new SetResourceReferenceRequest();

    request.setTableName(tableName);
    if (!isEmptyValue(recordId) && !Number.isNaN(recordId)) {
      request.setRecordId(Number(recordId));
    }

    request.setRecordUuid(recordUuid);
    request.setTextMessage(textMessage);
    request.setFileName(fileName);
    request.setFileSize(fileSize);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getFileManagementService().setResourceReference(request, callback);
  }

  /**
   * Get Resource information
   * @param {number} id
   * @param {string} uuid
   * @param {number} productId
   * @param {string} productUuid
   * @param {number} productAttributeSetId
   * @param {string} productAttributeSetUuid
   * @param {function} callback
   */
   getResourceReference({
    token,
    imageId,
    language
  }, callback) {
    const { GetResourceReferenceRequest } = this.stubFile;
    const request = new GetResourceReferenceRequest();

    request.setImageId(imageId);

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getFileManagementService().getResourceReference(request, callback);
  }

  /**
   * Delete Resource information
   * @param {string} resourceName
   * @param {string} resourceUuid
   * @param {number} resourceId
   * @param {string} language
   * @param {string} token
   * @param {function} callback
   */
  deleteResourceReference({
    token,
    resourceId,
    resourceUuid,
    resourceName,
    language
  }, callback) {
    const { DeleteResourceReferenceRequest } = this.stubFile;
    const request = new DeleteResourceReferenceRequest();

    request.setResourceName(resourceName);
    request.setResourceUuid(resourceUuid);
    if (!isEmptyValue(resourceId) && !Number.isNaN(resourceId)) {
      request.setResourceId(Number(resourceId));
    }

    request.setClientRequest(
      createClientRequest({ token, language })
    );

    this.getFileManagementService().deleteResourceReference(request, callback);
  }
}

module.exports = FileManagement;