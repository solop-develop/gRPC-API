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
        order_uuid: orderLineToConvert.getOrderUuid(),
        line: orderLineToConvert.getLine(),
        product: convertProductFromGRPC(
          orderLineToConvert.getProduct()
        ),
        charge: convertChargeFromGRPC(
          orderLineToConvert.getCharge()
        ),
        description: orderLineToConvert.getDescription(),
        line_description: orderLineToConvert.getLineDescription(),
        quantity: getDecimalFromGRPC(
          orderLineToConvert.getQuantity()
        ),
        price: getDecimalFromGRPC(
          orderLineToConvert.getPrice()
        ),
        discount_rate: getDecimalFromGRPC(
          orderLineToConvert.getDiscountRate()
        ),
        line_net_amount: getDecimalFromGRPC(
          orderLineToConvert.getLineNetAmount()
        ),
        tax_rate: convertTaxRateFromGRPC(
          orderLineToConvert.getTaxRate()
        ),
        warehouse: convertWarehouseFromGRPC(
          orderLineToConvert.getWarehouse()
        )
      };
    }
    return undefined;
  },

  convertOrderFromGRPC(order) {
    if (order) {
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
        uuid: order.getUuid(),
        id: order.getId(),
        document_no: order.getDocumentNo(),
        document_type: convertDocumentTypeFromGRPC(
          order.getDocumentType(),
        ),
        sales_representative: convertSalesRepresentativeFromGRPC(
          order.getSalesRepresentative()
        ),
        document_status: convertDocumentStatusFromGRPC(
          order.getDocumentStatus()
        ),
        total_lines: getDecimalFromGRPC(
          order.getTotalLines()
        ),
        grand_total: getDecimalFromGRPC(
          order.getGrandTotal()
        ),
        date_ordered: new Date(order.getDateOrdered()),
        business_partner: convertBusinessPartnerFromGRPC(
          order.getBusinessPartner()
        )
      };
    }
    return undefined;
  },

  convertKeyFromGRPC(key) {
    if (key) {
      const {
        getDecimalFromGRPC,
        convertResourceReferenceFromGRPC
      } = require('./convertBaseDataType.js');

      return {
        uuid: key.getUuid(),
        id: key.getId(),
        name: key.getName(),
        description: key.getDescription(),
        sub_key_layout_uuid: key.getSubKeyLayoutUuid(),
        color: key.getColor(),
        sequence: key.getSequence(),
        span_x: key.getSpanX(),
        span_y: key.getSpanY(),
        product_uuid: key.getProductUuid(),
        quantity: getDecimalFromGRPC(
          key.getQuantity()
        ),
        resource_reference: convertResourceReferenceFromGRPC(
          key.getResourceReference()
        )
      };
    }
    return undefined;
  },

  convertKeyLayoutFromGRPC(keyLayout) {
    if (keyLayout) {
      return {
        uuid: keyLayout.getUuid(),
        id: keyLayout.getId(),
        name: keyLayout.getName(),
        description: keyLayout.getDescription(),
        help: keyLayout.getHelp(),
        layout_type: keyLayout.getLayoutType(),
        columns: keyLayout.getColumns(),
        color: keyLayout.getColor(),
        keys: keyLayout.getKeysList()
          .map(itemKey => {
            return convertUtils.convertKeyFromGRPC(itemKey)
          })
      };
    }
    return undefined;
  }

}

module.exports = convertUtils;
