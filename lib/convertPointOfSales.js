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
        convertPriceListFromGRPC,
        convertCurrencyFromGRPC,
        convertWarehouseFromGRPC
      } = require('./convertCoreFunctionality.js');
      const { getDecimalFromGRPC } = require('./convertBaseDataType.js');
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
        display_currency: convertCurrencyFromGRPC(
          pointOfSales.getDisplayCurrency()
        ),
        warehouse: convertWarehouseFromGRPC(
          pointOfSales.getWarehouse()
        ),
        refund_reference_currency: convertCurrencyFromGRPC(
          pointOfSales.getRefundReferenceCurrency()
        ),
        conversion_type_uuid: pointOfSales.getConversionTypeUuid(),
        key_layout_uuid: pointOfSales.getKeyLayoutUuid(),
        is_allows_modify_quantity: pointOfSales.getIsAllowsModifyQuantity(),
        is_allows_return_order: pointOfSales.getIsAllowsReturnOrder(),
        is_allows_collect_order: pointOfSales.getIsAllowsCollectOrder(),
        is_allows_create_order: pointOfSales.getIsAllowsCreateOrder(),
        is_display_discount: pointOfSales.getIsDisplayDiscount(),
        is_display_tax_amount: pointOfSales.getIsDisplayTaxAmount(),
        maximum_refund_allowed: getDecimalFromGRPC(
          pointOfSales.getMaximumRefundAllowed()
        ),
        maximum_daily_refund_allowed: getDecimalFromGRPC(
          pointOfSales.getMaximumRefundAllowed()
        )
      };
    }
    return undefined;
  },

  // Customer
  convertCustomerFromGRPC(customer) {
    if (customer) {
      return {
        uuid: customer.getUuid(),
        id: customer.getId(),
        value: customer.getValue(),
        tax_id: customer.getTaxId(),
        duns: customer.getDuns(),
        naics: customer.getNaics(),
        name: customer.getName(),
        last_name: customer.getLastName(),
        description: customer.getDescription(),
        addresses: customer.getAddressesList()
          .map(address => {
            return convertUtils.convertCustomerAddressFromGRPC(address)
          })
      };
    }
    return undefined;
  },

  // Customer Bank Account
  convertCustomerBankAccountFromGRPC(customerBankAccount) {
    if (customerBankAccount) {
      return {
        customer_uuid: customerBankAccount.getCustomerUuid(),
        customer_bank_account_uuid: customerBankAccount.getCustomerBankAccountUuid(),
        city: customerBankAccount.getCity(),
        country: customerBankAccount.getCountry(),
        email: customerBankAccount.getEmail(),
        driver_license: customerBankAccount.getDriverLicense(),
        social_security_number: customerBankAccount.getSocialSecurityNumber(),
        name: customerBankAccount.getName(),
        state: customerBankAccount.getState(),
        street: customerBankAccount.getStreet(),
        zip: customerBankAccount.getZip(),
        bank_account_type: customerBankAccount.getBankAccountType(),
        bank_uuid: customerBankAccount.getBankUuid(),
        is_ach: customerBankAccount.getIsAch(),
        address_verified: customerBankAccount.getAddressVerified(),
        zip_verified: customerBankAccount.getZipVerified(),
        routing_no: customerBankAccount.getRoutingNo(),
        iban: customerBankAccount.getIban(),
        is_payroll_account: customerBankAccount.getIsPayrollAccount()
      }
    }
    return undefined;
  },

  convertCustomerAddressFromGRPC(address) {
    if (address) {
      let region
      let city
      if(address.getRegion()) {
        region = {
          id: address.getRegion().getId(),
          uuid: address.getRegion().getUuid(),
          name: address.getRegion().getName()
        }
      }
      if(address.getCity()) {
        city = {
          id: address.getCity().getId(),
          uuid: address.getCity().getUuid(),
          name: address.getCity().getName()
        }
      }
      return {
        id: address.getId(),
        uuid: address.getUuid(),
        region,
        country_code: address.getCountryCode(),
        address_1: address.getAddress1(),
        address_2: address.getAddress2(),
        address_3: address.getAddress3(),
        address_4: address.getAddress4(),
        phone: address.getPhone(),
        postal_code: address.getPostalCode(),
        city,
        is_default_shipping: address.getIsDefaultShipping(),
        is_default_billing: address.getIsDefaultBilling(),
        contact_name: address.getIsDefaultBilling(),
        email: address.getEmail(),
        description: address.getDescription(),
        first_name: address.getFirstName(),
        last_name: address.getLastName()
      }
    }
    return undefined;
  },

  // Convert available warehouse from gRPC to JSON
  convertAvailableWarehouse(availableWarehouse) {
    if(availableWarehouse) {
      return {
        id: availableWarehouse.getId(),
        uuid: availableWarehouse.getUuid(),
        key: availableWarehouse.getKey(),
        name: availableWarehouse.getName(),
        is_pos_required_pin: availableWarehouse.getIsPosRequiredPin()
      }
    }
    return undefined;
  },

  // Convert available price list from gRPC to JSON
  convertAvailablePriceList(availablePriceList) {
    if(availablePriceList) {
      return {
        id: availablePriceList.getId(),
        uuid: availablePriceList.getUuid(),
        key: availablePriceList.getKey(),
        name: availablePriceList.getName(),
        is_pos_required_pin: availablePriceList.getIsPosRequiredPin()
      }
    }
    return undefined;
  },

  // Convert available currency from gRPC to JSON
  convertAvailableCurrency(currency) {
    const {
      convertCurrencyFromGRPC
    } = require('./convertCoreFunctionality.js');
    return convertCurrencyFromGRPC(currency);
  },

  // Convert available document type from gRPC to JSON
  convertAvailableDocumentType(availableDocumentType) {
    if(availableDocumentType) {
      return {
        id: availableDocumentType.getId(),
        uuid: availableDocumentType.getUuid(),
        key: availableDocumentType.getKey(),
        name: availableDocumentType.getName(),
        is_pos_required_pin: availableDocumentType.getIsPosRequiredPin()
      }
    }
    return undefined;
  },

  // Convert available tender type from gRPC to JSON
  convertAvailablePaymentMethod(availablePaymentMethod) {
    if(availablePaymentMethod) {
      const { convertCurrencyFromGRPC } = require('./convertCoreFunctionality.js');
      const { getDecimalFromGRPC } = require('./convertBaseDataType.js');
      return {
        id: availablePaymentMethod.getId(),
        uuid: availablePaymentMethod.getUuid(),
        key: availablePaymentMethod.getKey(),
        name: availablePaymentMethod.getName(),
        tender_type: availablePaymentMethod.getTenderType(),
        is_pos_required_pin: availablePaymentMethod.getIsPosRequiredPin(),
        is_allowed_to_refund: availablePaymentMethod.getIsAllowedToRefund(),
        is_allowed_to_refund_open: availablePaymentMethod.getIsAllowedToRefundOpen(),
        maximum_refund_allowed: getDecimalFromGRPC(
          availablePaymentMethod.getMaximumRefundAllowed()
        ),
        maximum_daily_refund_allowed: getDecimalFromGRPC(
          availablePaymentMethod.getMaximumDailyRefundAllowed()
        ),
        refund_reference_currency: convertCurrencyFromGRPC(
          availablePaymentMethod.getRefundReferenceCurrency()
        ),
        reference_currency: convertCurrencyFromGRPC(
          availablePaymentMethod.getReferenceCurrency()
        )
      }
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
        price_list: getDecimalFromGRPC(
          orderLineToConvert.getPriceList()
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
        customer: convertUtils.convertCustomerFromGRPC(
          order.getCustomer()
        )
      };
    }
    return undefined;
  },

  convertPaymentFromGRPC(payment) {
    if (payment) {
      const {
        convertDocumentStatusFromGRPC,
        getDecimalFromGRPC
      } = require('./convertBaseDataType.js');
      const {
        convertSalesRepresentativeFromGRPC
      } = require('./convertCoreFunctionality.js');

      return {
        uuid: payment.getUuid(),
        id: payment.getId(),
        document_no: payment.getDocumentNo(),
        collecting_agent: convertSalesRepresentativeFromGRPC(
          payment.getCollectingAgent()
        ),
        document_status: convertDocumentStatusFromGRPC(
          payment.getDocumentStatus()
        ),
        amount: getDecimalFromGRPC(
          payment.getAmount()
        ),
        tender_type_code: payment.getTenderTypeCode(),
        currency_uuid: payment.getCurrencyUuid(),
        description: payment.getDescription(),
        reference_no: payment.getReferenceNo(),
        order_uuid: payment.getOrderUuid(),
        bank_uuid: payment.getBankUuid(),
        payment_date: new Date(payment.getPaymentDate()),
        payment_account_date: new Date(payment.getPaymentAccountDate()),
        is_refund: payment.getIsRefund(),
        customer: convertUtils.convertCustomerFromGRPC(
          payment.getCustomer()
        ),
        payment_method_uuid: payment.getPaymentMethodUuid()
      };
    }
    return undefined;
  },

  convertAvailableRefundGRPC(availableRefund) {
    if (availableRefund) {
      const {
        getDecimalFromGRPC
      } = require('./convertBaseDataType.js');

      return {
        refund: getDecimalFromGRPC(
          availableRefund.getRefund()
        ),
        tender_type_refunds: availableRefund.getTenderTypeRefundsList()
          .map(tenderTypeRefund => {
            return {
              tender_type: tenderTypeRefund.getTenderType(),
              refund: getDecimalFromGRPC(
                tenderTypeRefund.getRefund()
              )
            }
          })
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
        product_value: key.getProductValue(),
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
