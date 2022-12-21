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

/**
 * Get Bank Account Type from gRPC
 */
function getBanckAccountTypeFromGRPC(bankAccountTypeToConvert) {
  if (!bankAccountTypeToConvert) {
    return undefined
  }
  return {
    id: bankAccountTypeToConvert.getId(),
    uuid: bankAccountTypeToConvert.getUuid(),
    value: bankAccountTypeToConvert.getValue(),
    name: bankAccountTypeToConvert.getName(),
    description: bankAccountTypeToConvert.getDescription()
  }
}

function getBankAccountFromGRPC(bankAccountToConvert) {
  if (!bankAccountToConvert) {
    return undefined
  }
  const { getBusinessPartnerFromGRPC, getDecimalFromGRPC } = require('./baseDataTypeFromGRPC');
  const { getCurrencyFromGRPC } = require('./coreFunctionalityFromGRPC');
  return {
    id: bankAccountToConvert.getId(),
    uuid: bankAccountToConvert.getUuid(),
    account_no: bankAccountToConvert.getAccountNo(),
    bban: bankAccountToConvert.getBban(),
    iban: bankAccountToConvert.getIban(),
    description: bankAccountToConvert.getDescription(),
    is_default: bankAccountToConvert.getIsDefault(),
    currency: getCurrencyFromGRPC(
      bankAccountToConvert.getCurrency()
    ),
    bank_account_type: getBanckAccountTypeFromGRPC(
      bankAccountToConvert.getBankAccountType()
    ),
    credit_limit: getDecimalFromGRPC(
      bankAccountToConvert.getCreditLimit()
    ),
    current_balance: getDecimalFromGRPC(
      bankAccountToConvert.getCurrentBalance()
    ),
    is_sales_transaction: bankAccountToConvert.getIsSalesTransaction(),
    business_partner:getBusinessPartnerFromGRPC(
      bankAccountToConvert.getBusinessPartner()
    )
  };
}

function getPaymentRuleFromGRPC(paymentRuleToConvert) {
  if (!paymentRuleToConvert) {
    return undefined
  }
  return {
    id: paymentRuleToConvert.getId(),
    uuid: paymentRuleToConvert.getUuid(),
    value: paymentRuleToConvert.getValue(),
    name: paymentRuleToConvert.getName(),
    description: paymentRuleToConvert.getDescription(),
  }
}

function getPaymentSelectionFromGRPC(paymentSelectionToConvert) {
  if (!paymentSelectionToConvert) {
    return undefined
  }

  return {
    id: paymentSelectionToConvert.getId(),
    uuid: paymentSelectionToConvert.getUuid(),
    document_no: paymentSelectionToConvert.getDocumentNo(),
    bank_account: getBankAccountFromGRPC(
      paymentSelectionToConvert.getBankAccount()
    ),
    payment_rules: paymentSelectionToConvert.getPaymentRulesList().map(paymentRule => {
      return getPaymentRuleFromGRPC(
        paymentRule
      );
    }),
    number_payments: paymentSelectionToConvert.getNumberPayments()
  }
}

module.exports = {
  getBanckAccountTypeFromGRPC,
  getBankAccountFromGRPC,
  getPaymentRuleFromGRPC,
  getPaymentSelectionFromGRPC
};
