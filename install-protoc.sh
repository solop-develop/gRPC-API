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


get_latest_release() {
    curl --silent "https://api.github.com/repos/$1/releases/latest" |
        grep -Po '"tag_name": "\K.*?(?=")' |
        sed -E 's|v||g'
}


###         PROTOC

installProtoC () {
    ARCHITECTURE=$(arch)
    PROTOC_ZIP=protoc-$1-linux-$ARCHITECTURE.zip

    # Download latest version
    URL="https://github.com/protocolbuffers/protobuf/releases/download/v$1/$PROTOC_ZIP"
    curl -OL $URL

    # Extract and overwrite into dir
    sudo unzip -o $PROTOC_ZIP -d /usr/local bin/protoc
    sudo unzip -o $PROTOC_ZIP -d /usr/local 'include/*'

    # Delete donwloaded file
    rm -f -v $PROTOC_ZIP

    # Assign read and execute permissions
    sudo chmod 755 /usr/local/bin/protoc
    sudo chmod 755 -R /usr/local/include/google/

    echo "The new version $1 of protoc has been installed."
}

VERSION_INSTALLED=""
# Proto C is installed SO
if hash -- "protoc" 2> /dev/null; then
    # Get thet installed version
    VERSION_INSTALLED=$(protoc --version | sed -e "s|libprotoc ||g")
    echo "the installed protoc version: $VERSION_INSTALLED"
else
    echo "protoc is not installed"
fi

# Get the latest version number of protoc
LATEST_VERSION=$(get_latest_release "protocolbuffers/protobuf")
echo "the latest protoc version: $LATEST_VERSION"

if [ -z "$VERSION_INSTALLED" ] || [ "$LATEST_VERSION" != "$VERSION_INSTALLED" ]; then
    installProtoC $LATEST_VERSION
else
    echo "The latest protoc version is installed"
fi


###         PROTOC-GEN-GRPC-WEB

installGrpcWeb() {
    FILE=protoc-gen-grpc-web

    # Download and install the file
    URL=https://github.com/grpc/grpc-web/releases/download/$1/$FILE-$1-linux-x86_64
    curl -L $URL -o $FILE

    # Extract and overwrite into dir
    sudo mv -f -v $FILE /usr/local/bin/

    # Assign read and execute permissions
    sudo chmod 755 /usr/local/bin/$FILE

    echo "The new version $1 of protoc-gen-grpc-web has been installed."
}

# Get the latest version number of protoc-gen-grpc-web
VERSION_GRPC_WEB=$(get_latest_release "grpc/grpc-web")

echo -n "Install 'protoc-gen-grpc-web' vesion $VERSION_GRPC_WEB (y/n)? "
old_stty_cfg=$(stty -g)
stty raw -echo
answer=$( while ! head -c 1 | grep -i '[ny]' ;do true ;done )
stty $old_stty_cfg
if echo "$answer" | grep -iq "^y" ;then
    echo "Yes"
    installGrpcWeb $VERSION_GRPC_WEB
else
    echo "No"
fi


###         GRPC-TOOLS-NODE-PROTOC

echo -n "Install 'grpc-tools (grpc_tools_node_protoc)' as global npm package (y/n)? "
old_stty_cfg=$(stty -g)
stty raw -echo
answer=$( while ! head -c 1 | grep -i '[ny]' ;do true ;done )
stty $old_stty_cfg
if echo "$answer" | grep -iq "^y" ;then
    echo "Yes"
    sudo npm install -g grpc-tools
    echo "The new version of grpc-tools has been installed."
else
    echo "No"
fi
