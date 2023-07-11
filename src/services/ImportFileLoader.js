/*************************************************************************************
 * Product: ADempiere gRPC Express Receipt Client                                    *
 * Copyright (C) 2018-2023 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Elsio Sanchez elsiosanchez15@outlook.com                          *
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

const { getMetadata } = require('@adempiere/grpc-api/src/utils/metadata.js');
const { getValidInteger } = require('@adempiere/grpc-api/src/utils/valueUtils.js');

class ImportFileLoader {

  /**
   * File on generated stub
   */
  stubFile = require('@adempiere/grpc-api/src/grpc/proto/import_file_loader_pb.js');

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

    this.initImportFileLoaderService();
    console.log('ADempiere Import File Loader Client Started');
  }

  // Init connection
  initImportFileLoaderService() {
    const grpc = require('@grpc/grpc-js');
    const services = require('@adempiere/grpc-api/src/grpc/proto/import_file_loader_grpc_pb');
    this.importFileLoader = new services.ImportFileLoaderClient(
      this.businessHost,
      grpc.credentials.createInsecure()
    );
  }

  // Get Express Receipt Service
  getImportFileLoaderService() {
    return this.importFileLoader;
  }


  /**
   * Get List Business Partners
   * @param {string} token
   * @param {string} searchValue
   * @param {number} pageSize
   * @param {string} pageToken
   */
  listCharsets({
    token,
    // DSL
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListCharsetsRequest } = this.stubFile;
    const request = new ListCharsetsRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getImportFileLoaderService().listCharsets(
      request,
      metadata,
      callback
    );
  }

  listImportFormats({
    token,
    // DSL
    searchValue,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListImportFormatsRequest } = this.stubFile;
    const request = new ListImportFormatsRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getImportFileLoaderService().listImportFormats(
      request,
      metadata,
      callback
    );
  }

  getImportFromat({
    token,
    // DSL
    id
  }, callback) {
    const { GetImportFromatRequest } = this.stubFile;
    const request = new GetImportFromatRequest();

    // request.setSearchValue(searchValue);
    request.setId(
      getValidInteger(id)
    );
    request.setPageToken(pageToken);

    const metadata = getMetadata({
      token
    });

    this.getImportFileLoaderService().getImportFromat(
      request,
      metadata,
      callback
    );
  }

  loadImportFile({
    token,
    // DSL
    data,
    resourceUuid,
    fileSize
  }, callback) {
    const { LoadImportFileRequest } = this.stubFile;
    const request = new LoadImportFileRequest();

    request.setFileSize(
      getValidInteger(fileSize)
    );

    request.setData(data);

    request.setResourceUuid(resourceUuid);

    const metadata = getMetadata({
      token
    });

    this.getImportFileLoaderService().getImportFromat(
      request,
      metadata,
      callback
    );
  }

  listFilePreview({
    token,
    // DSL
    searchValue,
    importFormatId,
    resourceReferenceId,
    // Page Data
    pageSize,
    pageToken
  }, callback) {
    const { ListCharsetsRequest } = this.stubFile;
    const request = new ListCharsetsRequest();

    request.setSearchValue(searchValue);
    request.setPageSize(
      getValidInteger(pageSize)
    );
    request.setPageToken(pageToken);

    request.setImportFormatId(importFormatId);

    request.setResourceReferenceId(resourceReferenceId);

    const metadata = getMetadata({
      token
    });

    this.getImportFileLoaderService().listCharsets(
      request,
      metadata,
      callback
    );
  }

  processImport({
    token,
    // DSL
    importFormatId
  }, callback) {
    const { ListCharsetsRequest } = this.stubFile;
    const request = new ListCharsetsRequest();

    request.setImportFormatId(
      getValidInteger(importFormatId)
    );

    const metadata = getMetadata({
      token
    });

    this.getImportFileLoaderService().listCharsets(
      request,
      metadata,
      callback
    );
  }
}

module.exports = ImportFileLoader;
