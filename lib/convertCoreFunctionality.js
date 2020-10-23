/*************************************************************************************
 * Product: ADempiere gRPC Business Data Client Convert Utils                        *
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
 * along with this program. If not, see <https://www.gnu.org/licenses/>.             *
 ************************************************************************************/

const convertCoreFunctionality = {
  convertCountryFromGRPC(countryToConvert) {
    if (countryToConvert) {
      return {
        id: countryToConvert.getId(),
        uuid: countryToConvert.getUuid(),
        country_code: countryToConvert.getCountryCode(),
        name: countryToConvert.getName(),
        description: countryToConvert.getDescription(),
        has_region: countryToConvert.getHasRegion(),
        region_name: countryToConvert.getRegionName(),
        display_sequence: countryToConvert.getDisplaySequence(),
        is_address_lines_reverse: countryToConvert.getIsAddressLinesReverse(),
        capture_sequence: countryToConvert.getCaptureSequence(),
        display_sequence_local: countryToConvert.getDisplaySequenceLocal(),
        is_address_lines_local_reverse: countryToConvert.getIsAddressLinesLocalReverse(),
        expression_postal: countryToConvert.getExpressionPostal(),
        has_postal_add: countryToConvert.getHasPostalAdd(),
        expression_phone: countryToConvert.getExpressionPhone(),
        media_size: countryToConvert.getMediaSize(),
        expression_bank_routing_no: countryToConvert.getExpressionBankRoutingNo(),
        expression_bank_account_no: countryToConvert.getExpressionBankAccountNo(),
        language: countryToConvert.getLanguage(),
        allow_cities_out_of_list: countryToConvert.getAllowCitiesOutOfList(),
        is_postcode_lookup: countryToConvert.getIsPostcodeLookup(),
        currency: convertCoreFunctionality.convertCurrencyFromGRPC(
          countryToConvert.getCurrency()
        )
      };
    }
    return undefined;
  },

  convertCurrencyFromGRPC(currency) {
    if(currency) {
      return {
        id: currency.getId(),
        uuid: currency.getUuid(),
        iso_code: currency.getIsoCode(),
        currency_symbol: currency.getCurSymbol(),
        description: currency.getDescription(),
        standard_precision: currency.getStandardPrecision(),
        costing_precision: currency.getCostingPrecision()
      };
    }
    return undefined;
  },

  convertOrganizationFromGRPC(organization) {
    if (organization) {
      return {
        id: organization.getId(),
        uuid: organization.getUuid(),
        name: organization.getName(),
        description: organization.getDescription(),
        is_read_only: organization.getIsReadOnly(),
        duns: organization.getDuns(),
        tax_id: organization.getTaxId(),
        phone: organization.getPhone(),
        phone2: organization.getPhone2(),
        fax: organization.getFax()
      };
    }
    return undefined;
  },

  convertWarehouseFromGRPC(warehouseToConvert) {
    if (warehouseToConvert) {
      return {
        id: warehouseToConvert.getId(),
        uuid: warehouseToConvert.getUuid(),
        name: warehouseToConvert.getName(),
        description: warehouseToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertUnitOfMeasureFromGRPC(unitOfMeasureToConvert) {
    if (unitOfMeasureToConvert) {
      return {
        uuid: unitOfMeasureToConvert.getUuid(),
        id: unitOfMeasureToConvert.getId(),
        code: unitOfMeasureToConvert.getCode(),
        symbol: unitOfMeasureToConvert.getSymbol(),
        name: unitOfMeasureToConvert.getName(),
        description: unitOfMeasureToConvert.getDescription(),
        stdPrecision: unitOfMeasureToConvert.getStdprecision(),
        costingPrecision: unitOfMeasureToConvert.getCostingprecision()
      };
    }
    return undefined;
  },

  convertChargeFromGRPC(chargeToConvert) {
    if (chargeToConvert) {
      return {
        uuid: chargeToConvert.getUuid(),
        id: chargeToConvert.getId(),
        name: chargeToConvert.getName(),
        description: chargeToConvert.getDescription()
      };
    }
    return undefined;
  },

  // Business Partner
  convertBusinessPartnerFromGRPC(businessPartnerToConvert) {
    if (businessPartnerToConvert) {
      return {
        uuid: businessPartnerToConvert.getUuid(),
        id: businessPartnerToConvert.getId(),
        value: businessPartnerToConvert.getValue(),
        tax_id: businessPartnerToConvert.getTaxId(),
        duns: businessPartnerToConvert.getDuns(),
        naics: businessPartnerToConvert.getNaics(),
        name: businessPartnerToConvert.getName(),
        last_name: businessPartnerToConvert.getLastName(),
        description: businessPartnerToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertDocumentTypeFromGRPC(documentTypeToConvert) {
    if (documentTypeToConvert) {
      return {
        uuid: documentTypeToConvert.getUuid(),
        id: documentTypeToConvert.getId(),
        name: documentTypeToConvert.getName(),
        printName: documentTypeToConvert.getPrintName(),
        description: documentTypeToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertSalesRepresentativeFromGRPC(salesRepresentativeToConvert) {
    if (salesRepresentativeToConvert) {
      return {
        uuid: salesRepresentativeToConvert.getUuid(),
        id: salesRepresentativeToConvert.getId(),
        name: salesRepresentativeToConvert.getName(),
        description: salesRepresentativeToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertProductFromGRPC(productToConvert) {
    if (productToConvert) {
      const { getDecimalFromGRPC } = require('./convertBaseDataType.js');

      return {
        uuid: productToConvert.getUuid(),
        id: productToConvert.getId(),
        value: productToConvert.getValue(),
        name: productToConvert.getName(),
        help: productToConvert.getHelp(),
        document_note: productToConvert.getDocumentNote(),
        uom_name: productToConvert.getUomName(),
        product_type: productToConvert.getProductType(),
        is_stocked: productToConvert.getIsStocked(),
        is_drop_ship: productToConvert.getIsDropShip(),
        is_purchased: productToConvert.getIsPurchased(),
        is_sold: productToConvert.getIsSold(),
        image_url: productToConvert.getImageUrl(),
        product_category_name: productToConvert.getProductCategoryName(),
        product_group_name: productToConvert.getProductGroupName(),
        product_class_name: productToConvert.getProductClassName(),
        product_classification_name: productToConvert.getProductClassificationName(),
        weight: getDecimalFromGRPC(
          productToConvert.getWeight()
        ),
        volume: getDecimalFromGRPC(
          productToConvert.getVolume()
        ),
        upc: productToConvert.getUpc(),
        sku: productToConvert.getSku(),
        shelf_width: productToConvert.getShelfWidth(),
        shelf_height: getDecimalFromGRPC(
          productToConvert.getShelfHeight()
        ),
        shelf_depth: productToConvert.getShelfDepth(),
        units_per_pack: productToConvert.getUnitsPerPack(),
        units_per_pallet: getDecimalFromGRPC(
          productToConvert.getUnitsPerPallet()
        ),
        guarantee_days: productToConvert.getGuaranteeDays(),
        description_url: productToConvert.getDescriptionUrl(),
        version_no: productToConvert.getVersionNo(),
        tax_category: productToConvert.getTaxCategory(),
        description: productToConvert.getDescription()
      };
    }
    return undefined;
  },

  convertTaxRateFromGRPC(taxRateToConvert) {
    //  Tax rate
    if (taxRateToConvert) {
      const { getDecimalFromGRPC } = require('./convertBaseDataType.js');

      return {
        name: taxRateToConvert.getName(),
        description: taxRateToConvert.getDescription(),
        tax_indicator: taxRateToConvert.getTaxindicator(),
        rate: getDecimalFromGRPC(
          taxRateToConvert.getRate()
        )
      };
    }
    return undefined;
  },

  convertProductPriceFromGRPC(productPriceToConvert) {
    if (productPriceToConvert) {
      const { getDecimalFromGRPC } = require('./convertBaseDataType.js');

      return {
        currency: convertCoreFunctionality.convertCurrencyFromGRPC(
          productPriceToConvert.getCurrency()
        ),
        taxRate: convertCoreFunctionality.convertTaxRateFromGRPC(
          productPriceToConvert.getTaxRate()
        ),
        product: convertCoreFunctionality.convertProductFromGRPC(
          productPriceToConvert.getProduct()
        ),
        price_list: getDecimalFromGRPC(
          productPriceToConvert.getPriceList()
        ),
        price_standard: getDecimalFromGRPC(productPriceToConvert.getPriceStandard()),
        price_limit: getDecimalFromGRPC(productPriceToConvert.getPriceLimit()),
        price_list_name: productPriceToConvert.getPriceListName(),
        is_tax_included: productPriceToConvert.getIsTaxIncluded(),
        valid_from: productPriceToConvert.getValidFrom(),
        price_precision: productPriceToConvert.getPricePrecision(),
        quantity_on_hand: getDecimalFromGRPC(
          productPriceToConvert.getQuantityOnHand()
        ),
        quantity_reserved: getDecimalFromGRPC(
          productPriceToConvert.getQuantityReserved()
        ),
        quantity_ordered: getDecimalFromGRPC(
          productPriceToConvert.getQuantityOrdered()
        ),
        quantity_available: getDecimalFromGRPC(
          productPriceToConvert.getQuantityAvailable()
        )
      };
    }
    return undefined;
  },

  convertLanguageFromGRPC(language) {
    if (language) {
      return {
        language: language.getLanguage(),
        language_name: language.getLanguageName(),
        language_iso: language.getLanguageIso(),
        country_code: language.getCountryCode(),
        is_base_language: language.getIsBaseLanguage(),
        is_system_language: language.getIsSystemLanguage(),
        is_decimal_point: language.getIsDecimalPoint(),
        date_pattern: language.getDatePattern(),
        time_pattern: language.getTimePattern()
      };
    }
    return undefined;
  },

  convertPriceListFromGRPC(priceListToConvert) {
    if (priceListToConvert) {
      return {
        uuid: priceListToConvert.getUuid(),
        id: priceListToConvert.getId(),
        name: priceListToConvert.getName(),
        description: priceListToConvert.getDescription(),
        currency: convertCoreFunctionality.convertCurrencyFromGRPC(
          priceListToConvert.getCurrency()
        ),
        is_default: priceListToConvert.getIsDefault(),
        is_tax_included: priceListToConvert.getIsTaxIncluded(),
        is_enforce_price_limit: priceListToConvert.getIsEnforcePriceLimit(),
        is_net_price: priceListToConvert.getIsNetPrice(),
        price_precision: priceListToConvert.getPricePrecision()
      };
    }
    return undefined;
  },

  convertBankAccountFromGRPC(bankAccount) {
    if (bankAccount) {
      const { getDecimalFromGRPC } = require('./convertBaseDataType.js');
      const { getBankAccount_BankAccountType } = require('./convertEnums.js');

      return {
        uuid: bankAccount.getUuid(),
        id: bankAccount.getId(),
        name: bankAccount.getName(),
        account_no: bankAccount.getAccountNo(),
        description: bankAccount.getDescription(),
        currency: convertCoreFunctionality.convertCurrencyFromGRPC(
          bankAccount.getCurrency()
        ),
        bban: bankAccount.getBban(),
        iban: bankAccount.getIban(),
        credit_limit: getDecimalFromGRPC(
          bankAccount.getCreditLimit()
        ),
        current_balance: getDecimalFromGRPC(
          bankAccount.getCurrentBalance()
        ),
        is_default: bankAccount.getIsDefault(),
        business_partner: convertCoreFunctionality.convertBusinessPartnerFromGRPC(
          bankAccount.getBusinessPartner()
        ),
        bank_account_type: bankAccount.getBankAccountType(),
        bank_account_type_name: getBankAccount_BankAccountType({
          value: bankAccount.getBankAccountType()
        })
      };
    }
    return undefined;
  },

  convertConversionRateFromGRPC(conversionRate) {
    if (conversionRate) {
      const { getDecimalFromGRPC } = require('./convertBaseDataType.js');

      return {
        uuid: conversionRate.getUuid(),
        id: conversionRate.getId(),
        conversion_type_uuid: conversionRate.getConversionTypeUuid(),
        valid_from: conversionRate.getValidFrom(),
        valid_to: conversionRate.getValidTo(),
        currency_from: convertCoreFunctionality.convertCurrencyFromGRPC(
          conversionRate.getCurrencyFrom()
        ),
        currency_to: convertCoreFunctionality.convertCurrencyFromGRPC(
          conversionRate.getCurrencyTo()
        ),
        multiply_rate: getDecimalFromGRPC(
          conversionRate.getMultiplyRate()
        ),
        divide_rate: getDecimalFromGRPC(
          conversionRate.getDivideRate()
        )
      };
    }
    return undefined;
  }

};

module.exports = convertCoreFunctionality;
