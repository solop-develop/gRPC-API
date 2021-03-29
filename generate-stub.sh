#!/bin/sh
#####################################################################################
# Product: ADempiere Install protoc                                                 #
# Copyright (C) 2012-2021 E.R.P. Consultores y Asociados, C.A.                      #
# Author: Edwin Betancourt EdwinBetanc0urt@outlook.com                              #
# This program is free software: you can redistribute it and/or modify              #
# it under the terms of the GNU General Public License as published by              #
# the Free Software Foundation, either version 3 of the License, or                 #
# (at your option) any later version.                                               #
# This program is distributed in the hope that it will be useful,                   #
# but WITHOUT ANY WARRANTY; without even the implied warranty of                    #
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                     #
# GNU General Public License for more details.                                      #
# You should have received a copy of the GNU General Public License                 #
# along with this program.  If not, see <https://www.gnu.org/licenses/>.            #
#####################################################################################

OUT_DIR=src/grpc/
# create directory if it does not exist
if [ -d "$OUT_DIR" ]; then
    mkdir -p "OUT_DIR"
fi


# Generate stub to access.proto file
grpc_tools_node_protoc \
    proto/access.proto \
    --js_out=import_style=commonjs,binary:$OUT_DIR  \
    --grpc_out=grpc_js:$OUT_DIR
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR

# Generate stub to base_data_type.proto file
grpc_tools_node_protoc \
    proto/base_data_type.proto \
    --js_out=import_style=commonjs,binary:$OUT_DIR  \
    --grpc_out=grpc_js:$OUT_DIR
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR

# Generate stub to business.proto file
grpc_tools_node_protoc \
    proto/business.proto \
    --js_out=import_style=commonjs,binary:$OUT_DIR  \
    --grpc_out=grpc_js:$OUT_DIR
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR

# Generate stub to client.proto file
grpc_tools_node_protoc \
    proto/client.proto \
    --js_out=import_style=commonjs,binary:$OUT_DIR  \
    --grpc_out=grpc_js:$OUT_DIR
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR

# Generate stub to core_functionality.proto file
grpc_tools_node_protoc \
    proto/core_functionality.proto \
    --js_out=import_style=commonjs,binary:$OUT_DIR  \
    --grpc_out=grpc_js:$OUT_DIR
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR

# Generate stub to dictionary.proto file
grpc_tools_node_protoc \
    proto/dictionary.proto \
    --js_out=import_style=commonjs,binary:$OUT_DIR  \
    --grpc_out=grpc_js:$OUT_DIR
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR

# Generate stub to enrollment.proto file
grpc_tools_node_protoc \
    proto/enrollment.proto \
    --js_out=import_style=commonjs,binary:$OUT_DIR  \
    --grpc_out=grpc_js:$OUT_DIR
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR

# Generate stub to point_of_sales.proto file
grpc_tools_node_protoc \
    proto/point_of_sales.proto \
    --js_out=import_style=commonjs,binary:$OUT_DIR  \
    --grpc_out=grpc_js:$OUT_DIR
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
