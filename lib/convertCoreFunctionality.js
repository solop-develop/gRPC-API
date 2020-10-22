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
        printName: documentTypeToConvert.getPrintname(),
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
        documentNote: productToConvert.getDocumentnote(),
        uomName: productToConvert.getUomname(),
        productType: productToConvert.getProducttype(),
        isStocked: productToConvert.getIsstocked(),
        isDropShip: productToConvert.getIsdropship(),
        isPurchased: productToConvert.getIspurchased(),
        isSold: productToConvert.getIssold(),
        imageURL: productToConvert.getImageurl(),
        productCategoryName: productToConvert.getProductcategoryname(),
        productGroupName: productToConvert.getProductgroupname(),
        productClassName: productToConvert.getProductclassname(),
        productClassificationName: productToConvert.getProductclassificationname(),
        weight: getDecimalFromGRPC(
          productToConvert.getWeight()
        ),
        volume: getDecimalFromGRPC(
          productToConvert.getVolume()
        ),
        upc: productToConvert.getUpc(),
        sku: productToConvert.getSku(),
        shelfWidth: productToConvert.getShelfwidth(),
        shelfHeight: getDecimalFromGRPC(
          productToConvert.getShelfheight()
        ),
        shelfDepth: productToConvert.getShelfdepth(),
        unitsPerPack: productToConvert.getUnitsperpack(),
        unitsPerPallet: getDecimalFromGRPC(
          productToConvert.getUnitsperpallet()
        ),
        guaranteeDays: productToConvert.getGuaranteedays(),
        descriptionURL: productToConvert.getDescriptionurl(),
        versionNo: productToConvert.getVersionno(),
        taxCategory: productToConvert.getTaxcategory(),
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
        taxIndicator: taxRateToConvert.getTaxindicator(),
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
          productPriceToConvert.getTaxrate()
        ),
        product: convertCoreFunctionality.convertProductFromGRPC(
          productPriceToConvert.getProduct()
        ),
        priceList: getDecimalFromGRPC(
          productPriceToConvert.getPricelist()
        ),
        priceStd: getDecimalFromGRPC(productPriceToConvert.getPricestd()),
        priceLimit: getDecimalFromGRPC(productPriceToConvert.getPricelimit()),
        priceListName: productPriceToConvert.getPricelistname(),
        isTaxIncluded: productPriceToConvert.getIstaxincluded(),
        validFrom: productPriceToConvert.getValidfrom(),
        pricePrecision: productPriceToConvert.getPriceprecision(),
        quantityOnHand: getDecimalFromGRPC(
          productPriceToConvert.getQuantityonhand()
        ),
        quantityReserved: getDecimalFromGRPC(
          productPriceToConvert.getQuantityreserved()
        ),
        quantityOrdered: getDecimalFromGRPC(
          productPriceToConvert.getQuantityordered()
        ),
        quantityAvailable: getDecimalFromGRPC(
          productPriceToConvert.getQuantityavailable()
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
        isDefault: priceListToConvert.getIsdefault(),
        isTaxIncluded: priceListToConvert.getIstaxincluded(),
        isEnforcePriceLimit: priceListToConvert.getIsenforcepricelimit(),
        isNetPrice: priceListToConvert.getIsnetprice(),
        pricePrecision: priceListToConvert.getPriceprecision()
      };
    }
    return undefined;
  },

  convertBankAccountFromGRPC(bankAccountToConvert) {
    if (bankAccountToConvert) {
      const { getDecimalFromGRPC } = require('./convertBaseDataType.js');
      const { getBankAccount_BankAccountType } = require('./convertEnums.js');

      return {
        uuid: bankAccountToConvert.getUuid(),
        id: bankAccountToConvert.getId(),
        name: bankAccountToConvert.getName(),
        accountNo: bankAccountToConvert.getAccountno(),
        description: bankAccountToConvert.getDescription(),
        currency: convertCoreFunctionality.convertCurrencyFromGRPC(
          bankAccountToConvert.getCurrency()
        ),
        bban: bankAccountToConvert.getBban(),
        iban: bankAccountToConvert.getIban(),
        creditLimit: getDecimalFromGRPC(
          bankAccountToConvert.getCreditlimit()
        ),
        currentBalance: getDecimalFromGRPC(
          bankAccountToConvert.getCurrentbalance()
        ),
        isDefault: bankAccountToConvert.getIsdefault(),
        businessPartner: convertCoreFunctionality.convertBusinessPartnerFromGRPC(
          bankAccountToConvert.getBusinesspartner()
        ),
        bankAccountType: bankAccountToConvert.getBankaccounttype(),
        bankAccountTypeName: getBankAccount_BankAccountType({
          value: bankAccountToConvert.getBankaccounttype()
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
