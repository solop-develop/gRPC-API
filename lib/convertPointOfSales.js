/*************************************************************************************
 * Product: ADempiere gRPC Point Of Sales Client Convert Utils                       *
 * Copyright (C) 2012-2020 E.R.P. Consultores y Asociados, C.A.                      *
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
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.            *
 ************************************************************************************/

const convertUtils = {
  convertPointOfSalesFromGRPC(pointOfSales) {
    if (pointOfSales) {
      const {
        convertBankAccountFromGRPC,
        convertBusinessPartnerFromGRPC,
        convertDocumentTypeFromGRPC,
        convertSalesRepresentativeFromGRPC,
        convertPriceListFromGRPC
      } = require('./convertCoreFunctionality.js');

      return {
        uuid: pointOfSales.getUuid(),
        id: pointOfSales.getId(),
        name: pointOfSales.getName(),
        description: pointOfSales.getDescription(),
        help: pointOfSales.getHelp(),
        is_modify_price: pointOfSales.getIsModifyPrice(),
        is_pos_required_pin: pointOfSales.getIsPosRequiredPin(),
        is_aisle_seller: pointOfSales.getIsAisleSeller(),
        is_shared_pos: pointOfSales.getIsSharedPos(),
        document_type: convertDocumentTypeFromGRPC(
          pointOfSales.getDocumentType()
        ),
        cash_bank_account: convertBankAccountFromGRPC(
          pointOfSales.getCashBankAccount()
        ),
        cash_transfer_bank_account: convertBankAccountFromGRPC(
          pointOfSales.getCashTransferBankAccount()
        ),
        sales_representative: convertSalesRepresentativeFromGRPC(
          pointOfSales.getSalesRepresentative()
        ),
        template_business_partner: convertBusinessPartnerFromGRPC(
          pointOfSales.getTemplateBusinessPartner()
        ),
        price_list: convertPriceListFromGRPC(
          pointOfSales.getPriceList()
        ),
        conversion_type_uuid: pointOfSales.getConversionTypeUuid(),
        key_layout_uuid: pointOfSales.getKeyLayoutUuid()
      };
    }
    return undefined;
  },

  convertOrderLineFromGRPC(orderLineToConvert) {
    if (orderLineToConvert) {
      const {
        convertChargeFromGRPC,
        convertProductFromGRPC,
        convertTaxRateFromGRPC,
        convertWarehouseFromGRPC
      } = require('./convertCoreFunctionality.js');
      const { getDecimalFromGRPC } = require('./convertBaseDataType.js');

      return {
        uuid: orderLineToConvert.getUuid(),
        orderUuid: orderLineToConvert.getOrderuuid(),
        line: orderLineToConvert.getLine(),
        product: convertProductFromGRPC(
          orderLineToConvert.getProduct()
        ),
        charge: convertChargeFromGRPC(
          orderLineToConvert.getCharge()
        ),
        description: orderLineToConvert.getDescription(),
        lineDescription: orderLineToConvert.getLinedescription(),
        quantity: getDecimalFromGRPC(
          orderLineToConvert.getQuantity()
        ),
        price: getDecimalFromGRPC(
          orderLineToConvert.getPrice()
        ),
        discountRate: getDecimalFromGRPC(
          orderLineToConvert.getDiscountrate()
        ),
        lineNetAmount: getDecimalFromGRPC(
          orderLineToConvert.getLinenetamount()
        ),
        taxRate: convertTaxRateFromGRPC(
          orderLineToConvert.getTaxrate()
        ),
        warehouse: convertWarehouseFromGRPC(
          orderLineToConvert.getWarehouse()
        )
      };
    }
    return undefined;
  },

  convertOrderFromGRPC(orderToConvert) {
    if (orderToConvert) {
      const {
        convertDocumentStatusFromGRPC,
        getDecimalFromGRPC
      } = require('./convertBaseDataType.js');
      const {
        convertBusinessPartnerFromGRPC,
        convertDocumentTypeFromGRPC,
        convertSalesRepresentativeFromGRPC
      } = require('./convertCoreFunctionality.js');

      return {
        uuid: orderToConvert.getUuid(),
        id: orderToConvert.getId(),
        documentNo: orderToConvert.getDocumentno(),
        documentType: convertDocumentTypeFromGRPC(
          orderToConvert.getDocumenttype(),
        ),
        salesRepresentative: convertSalesRepresentativeFromGRPC(
          orderToConvert.getSalesrepresentative()
        ),
        documentStatus: convertDocumentStatusFromGRPC(
          orderToConvert.getDocumentstatus()
        ),
        totalLines: getDecimalFromGRPC(
          orderToConvert.getTotallines()
        ),
        grandTotal: getDecimalFromGRPC(
          orderToConvert.getGrandtotal()
        ),
        dateOrdered: new Date(orderToConvert.getDateordered()),
        businessPartner: convertBusinessPartnerFromGRPC(
          orderToConvert.getBusinesspartner()
        )
      };
    }
    return undefined;
  },

  convertKeyFromGRPC(keyToConvert) {
    if (keyToConvert) {
      const {
        getDecimalFromGRPC,
        convertResourceReferenceFromGRPC
      } = require('./convertBaseDataType.js');

      return {
        uuid: keyToConvert.getUuid(),
        id: keyToConvert.getId(),
        name: keyToConvert.getName(),
        description: keyToConvert.getDescription(),
        subKeyLayoutUuid: keyToConvert.getSubkeylayoutuuid(),
        color: keyToConvert.getColor(),
        sequence: keyToConvert.getSequence(),
        spanX: keyToConvert.getSpanx(),
        spanY: keyToConvert.getSpany(),
        productUuid: keyToConvert.getProductuuid(),
        quantity: getDecimalFromGRPC(
          keyToConvert.getQuantity()
        ),
        resourceReference: convertResourceReferenceFromGRPC(
          keyToConvert.getResourcereference()
        )
      };
    }
    return undefined;
  },

  convertKeyLayoutFromGRPC(keyLayoutToConvert) {
    if (keyLayoutToConvert) {
      return {
        uuid: keyLayoutToConvert.getUuid(),
        id: keyLayoutToConvert.getId(),
        name: keyLayoutToConvert.getName(),
        description: keyLayoutToConvert.getDescription(),
        help: keyLayoutToConvert.getHelp(),
        layoutType: keyLayoutToConvert.getLayouttype(),
        columns: keyLayoutToConvert.getColumns(),
        color: keyLayoutToConvert.getColor(),
        keysList: keyLayoutToConvert.getKeysList()
          .map(itemKey => {
            return convertUtils.convertKeyFromGRPC(itemKey)
          })
      };
    }
    return undefined;
  }

}

module.exports = convertUtils;
