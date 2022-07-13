ADempiere gRPC-API library to Node.js
==============

<div align="center">
	<img src="https://camo.githubusercontent.com/911c5d54ded447403e56de3f96f332c06bceb8bd/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f622f62312f4164656d70696572652d6c6f676f2e706e67" style="text-align:center;" width="400" />
</div>

![node version](https://img.shields.io/badge/node-v10.x-blue.svg)
[![npm version](https://img.shields.io/npm/v/@adempiere/grpc-api.svg)](https://www.npmjs.com/package/@adempiere/grpc-api)
[![License](https://img.shields.io/npm/l/@adempiere/grpc-api.svg)](https://github.com/adempiere/gRPC-API/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/@adempiere/grpc-api.svg)](https://www.npmjs.com/package/@adempiere/grpc-api)

ADempiere node.js write in JavaScript for gRPC service, currently is used as library of proxy ADempiere service and is published as NPM

- [ADempiere-gRPC-Server](https://github.com/adempiere/adempiere-gRPC-Server), docker image [erpya/adempiere-grpc-all-in-one](https://hub.docker.com/r/erpya/adempiere-grpc-all-in-one).

See also:
- [ADempiere-Vue](https://github.com/adempiere/adempiere-vue), docker image [erpya/adempiere-vue](https://hub.docker.com/r/erpya/adempiere-vue).
 service, use it for connect with:
- [Proxy-Adempiere-API](https://github.com/adempiere/proxy-adempiere-api), docker image [erpya/proxy-adempiere-api](https://hub.docker.com/r/erpya/proxy-adempiere-api).


## Using it

```shell
# installing via NPM
npm install @adempiere/grpc-api --save
```
```shell
# installing via Yarn
yarn add @adempiere/grpc-api
```

### A Example
Here a example for it using from Proxy of ADempiere API: https://github.com/adempiere/proxy-adempiere-api/blob/master/src/modules/adempiere-api/index.ts#L17


## Recreate proto stub class (only for contribute to project)
For recreate stub class you must have follow:
- [protobuf](https://github.com/protocolbuffers/protobuf/releases)
- [protoc](https://github.com/grpc/grpc-web/releases)
- Also you can see it: [gRPC-web](https://github.com/grpc/grpc-web)
- [gRPC](https://grpc.io/docs/tutorials/basic/web.html)
- [gRPC-Node](https://github.com/grpc/grpc-node)


## Install prerequisites for proto stub generation

### Install gRPC Tools (Node Proto C)
It can be installed as a global dependency although it is already managed as a project dependency.

Via npm:
```shell
sudo npm install -g grpc-tools
```

Via yarn:
```shell
yarn global add grpc-tools
```

## Generate Proto Stub:

### Generate with npm (Recommended):
Via npm:
```shell
# install dependecies and dev dependencies
npm ci

# generate all stub
npm run stub
```

Via yarn:
```shell
# install dependecies and dev dependencies
yarn ci

# generate all stub
yarn stub
```

Note to generate specific proto definition:
* To access: `npm run stub:access`
* To base data type: `npm run stub:base_data_type`
* To business: `npm run stub:business`
* To client: `npm run stub:client`
* To core functionality: `npm run stub:core_functionality`
* To dictionary: `npm run stub:dictionary`
* To enrollment: `npm run stub:enrollment`
* To point of sales: `npm run stub:point_of_sales`

### Generate directly with grpc-tools:

Generate all stub:
```shell
grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:src/grpc \
    --grpc_out=src/grpc \
    proto/access.proto proto/base_data_type.proto proto/business.proto proto/client.proto proto/core_functionality.proto proto/dictionary.proto proto/enrollment.proto proto/point_of_sales.proto
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```

* To access:
```shell
# Generate stub to access.proto file
grpc_tools_node_protoc \
    proto/access.proto \
    --js_out=import_style=commonjs,binary:src/grpc/ \
    --grpc_out=grpc_js:src/grpc/
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```

* To base data type:
```shell
# Generate stub to base_data_type.proto file
grpc_tools_node_protoc \
    proto/base_data_type.proto \
    --js_out=import_style=commonjs,binary:src/grpc/ \
    --grpc_out=grpc_js:src/grpc/
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```

* To business:
```shell
# Generate stub to business.proto file
grpc_tools_node_protoc \
    proto/business.proto \
    --js_out=import_style=commonjs,binary:src/grpc/ \
    --grpc_out=grpc_js:src/grpc/
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```

* To client:
```shell
# Generate stub to client.proto file
grpc_tools_node_protoc \
    proto/access.proto \
    --js_out=import_style=commonjs,binary:src/grpc/ \
    --grpc_out=grpc_js:src/grpc/
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```

* To core functionality:
```shell
# Generate stub to access.proto file
grpc_tools_node_protoc \
    proto/core_functionality.proto \
    --js_out=import_style=commonjs,binary:src/grpc/ \
    --grpc_out=grpc_js:src/grpc/
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```

* To dictionary:
```shell
# Generate stub to access.proto file
grpc_tools_node_protoc \
    proto/dictionary.proto \
    --js_out=import_style=commonjs,binary:src/grpc/ \
    --grpc_out=grpc_js:src/grpc/
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```

* To enrollment:
```shell
# Generate stub to access.proto file
grpc_tools_node_protoc \
    proto/enrollment.proto \
    --js_out=import_style=commonjs,binary:src/grpc/ \
    --grpc_out=grpc_js:src/grpc/
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```

* To point of sales:
```shell
# Generate stub to access.proto file
grpc_tools_node_protoc \
    proto/point_of_sales.proto \
    --js_out=import_style=commonjs,binary:src/grpc/ \
    --grpc_out=grpc_js:src/grpc/
    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
```


### Output proto stub
The result is generated on: `src/grpc/proto/` folder
- `access_grpc_pb.js`
- `access_pb.js`
- `base_data_type_grpc_pb.js`
- `base_data_type_pb.js`
- `business_grpc_pb.js`
- `business_pb.js`
- `client_grpc_pb.js`
- `client_pb.js`
- `core_functionality_grpc_pb.js`
- `core_functionality_pb.js`
- `dictionary_grpc_pb.js`
- `dictionary_pb.js`
- `enrollment_grpc_pb.js`
- `enrollment_pb.js`
- `point_of_sales_grpc_pb.js`
- `point_of_sales_pb.js`


## Sponsors

Become a sponsor and get your logo on our README on GitHub with a link to your site. [Become a sponsor](https://www.paypal.com/paypalme/YamelSenih)

<a href="http://erpya.com/"><img width="250px" src="https://erpya.com/wp-content/uploads/2017/11/ERP-logotipo-H-color.png" /></a>
