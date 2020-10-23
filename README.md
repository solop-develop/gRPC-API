# ADempiere Web backend API for gRPC
[![npm version](https://img.shields.io/npm/v/@adempiere/grpc-api.svg)](https://www.npmjs.com/package/@adempiere/grpc-api)
[![License](https://img.shields.io/npm/l/@adempiere/grpc-api.svg)](https://github.com/erpcya/adempiere-web-store/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/@adempiere/grpc-api.svg)](https://www.npmjs.com/package/@adempiere/grpc-api)
[![Dependencies](https://img.shields.io/librariesio/github/erpcya/grpc-api.svg)](https://www.npmjs.com/package/@adempiere/grpc-api)

ADempiere Client write in Javascript for gRPC service, use it for connect with

[ADempiere-gRPC-Server](https://github.com/erpcya/adempiere-gRPC-Server).
## Requirements
- [ADempiere-gRPC-Server](https://github.com/erpcya/adempiere-gRPC-Server)

## See also:
You can get a image from Backend using it: https://hub.docker.com/repository/docker/erpya/adempiere-grpc-all-in-one
[Docker](https://www.docker.io/) file for trusted builds of [ADempiere gRPC Deploy](http://erpya.com/) on https://hub.docker.com/r/erpya/adempiere-grpc-all-in-one.

You will need use a file with a structure like it: [all_in_one_connection.yaml](all_in_one_connection.yaml)

```yaml
server:
    port: 50059
    services:
       -   access
       -   business
       -   core
       -   dashboarding
       -   dictionary
       -   enrollment
       -   log
       -   ui
       -   workflow
       -   store
       -   pos
database:
    host: localhost
    port: 5432
    name: adempiere
    user: adempiere
    password: adempiere
    type: PostgreSQL
```

Run the latest container with:
```shell
    docker pull erpya/adempiere-grpc-all-in-one
```

```shell
docker run --name adempiere-grpc-all-in-one -it \
	-p 50059:50059 \
	-v $(pwd)/all_in_one_connection.yaml:/opt/Apps/ADempiere-gRPC-Server/bin/all_in_one_connection.yaml \
	erpya/adempiere-grpc-all-in-one
```
## Using it

``` bash
# installing via NPM
npm install @adempiere/grpc-api --save
```
``` bash
# installing via Yarn
yarn add @adempiere/grpc-api
```

## A Example
Here a example for it using from Proxy of ADempiere API: https://github.com/adempiere/proxy-adempiere-api/blob/master/src/modules/adempiere-api/index.ts#L17

## Recreate proto stub class (only for contribute to project)
For recreate stub class you must have follow:
- [protobuf](https://github.com/protocolbuffers/protobuf/releases)
- [protoc](https://github.com/grpc/grpc-web/releases)
- Also you can see it: [gRPC-web](https://github.com/grpc/grpc-web)
- [gRPC](https://grpc.io/docs/tutorials/basic/web.html)

Note: You can also install `protoc` and `protoc-gen-grpc-web` by going to the repository directory and run the command:

After installed it just go to source code folder an run it:

Run Access gRPC
```sh
cd ../../protos
yarn global add grpc-tools
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:src/grpc --grpc_out=src/grpc --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` proto/access.proto proto/client.proto proto/base_data_type.proto proto/core_functionality.proto proto/dictionary.proto proto/business.proto proto/point_of_sales.proto
```

The result is generated on: src/grpc folder
- `access_grpc_web_pb.js`
- `access_pb.js`
- `client_pb.js`
- `client_grpc_pb.js`
- `base_data_type_pb.js`
- `base_data_type_grpc_pb.js`
- `core_functionality_pb.js`
- `core_functionality_grpc_pb.js`
- `dictionary_pb.js`
- `dictionary_grpc_pb.js`
- `business_pb.js`
- `business_grpc_pb.js`
- `point_of_sales_pb.js`
- `point_of_sales_grpc_pb.js`

## Sponsors

Become a sponsor and get your logo on our README on GitHub with a link to your site. [Become a sponsor](https://www.paypal.com/paypalme/YamelSenih)

<a href="http://erpya.com/"><img width="250px" src="https://erpya.com/wp-content/uploads/2017/11/ERP-logotipo-H-color.png" /></a>
