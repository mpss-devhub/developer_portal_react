export const invoices = [
  {
    name: "URL",
    description: "{base_url}/auth/token",
  },
  {
    name: "Method",
    description: "POST",
  },
  {
    name: "Header",
    description: "Content-Type: application/json",
  },
  {
    name: "Authorization",
    description: "Bearer { access token from request token API }",
  },
  {
    name: "Accept format",
    description: "JSON",
  },
];

export const paymentInQueryRequest = [
  {
    name: "payData",
    type: "char",
    required: "Y",
    description:
      "Two payload data required to encode with JWT method.Eg, { 'merchantID': 'MID00001', 'invoiceNo': 'INV202210261020' }  ",
  },
];

export const invoicesWithoutToken = [
  {
    name: "URL",
    description: "{base_url}/auth/paymentInQuery",
  },
  {
    name: "Method",
    description: "POST",
  },
  {
    name: "Header",
    description: "Content-Type: application/json",
  },
  {
    name: "Accept format",
    description: "JSON",
  },
];

export const responseParameterQuery = [
  {
    name: "respCode",
    DataType: "char",
    description: "Response code. Eg, 0000, 0001 ..",
  },
  {
    name: "respMsg",
    DataType: "char",
    description: "Response message description",
  },
  {
    name: "data",
    DataType: "char",
    description:
      "Use AES-128-ECB encryption algorithm to get the detail of payment transaction parameters",
  },
];

export const headers = [
  {
    name: "URL",
    description: "{base_url}/getAvailablePaymentsList",
  },
  {
    name: "Method",
    description: "POST",
  },
  {
    name: "Header",
    description: "Content-Type: application/json",
  },
  {
    name: "Accept format",
    description: "JSON",
  },
];

export const headerDoPay = [
  {
    name: "URL",
    description: "{base_url}/dopay",
  },
  {
    name: "Method",
    description: "POST",
  },
  {
    name: "Header",
    description: "Content-Type: application/json",
  },
  {
    name: "Accept format",
    description: "JSON",
  },
];

export const doPayRequestBody = [
  {
    name: "paymentCode",
    type: "char",
    required: "Y",
    description:
      "Unique payment code which is provided by Octoverse system. It can review from available payment api.",
  },
  {
    name: "paymentToken",
    type: "char",
    required: "Y",
    description:
      "Payment token which is received from request payment token API",
  },
  {
    name: "payData",
    type: "char",
    required: "Y",
    description: "Payload data. See detail in below section 6.3.4",
  },
];

export const availableRequestBody = [
  {
    name: "paymentToken",
    type: "char",
    required: "Y",
    description:
      "Payment token which is received from request payment token API.",
  },
];

export const requestParameter = [
  {
    name: "merchantID",
    type: "char",
    length: "20",
    required: "Y",
    description: "Merchant ID which is provided by Octoverse system",
  },
  {
    name: "invoiceNo",
    type: "char",
    length: "20",
    required: "Y",
    description: "Unique invoice number",
  },
  {
    name: "amount",
    type: "num",
    length: "15",
    required: "Y",
    description: "Transaction Amount",
  },
  {
    name: "currencyCode",
    type: "char",
    length: "5",
    required: "Y",
    description: "Currency Codes (MMK and USD)",
  },
  {
    name: "frontendUrl",
    type: "char",
    length: "255",
    required: "N",
    description: "Redirect frontend url after transaction completed",
  },
  {
    name: "backendUrl",
    type: "char",
    length: "255",
    required: "N",
    description: "Server to server notification after transaction completed.",
  },
  {
    name: "userDefination1",
    type: "char",
    length: "150",
    required: "N",
    description: "Optional define information",
  },
  {
    name: "userDefination2",
    type: "char",
    length: "150",
    required: "N",
    description: "Optional define information",
  },
  {
    name: "userDefination3",
    type: "char",
    length: "150",
    required: "N",
    description: "Optional define information",
  },
];

export const responseParameter = [
  {
    name: "respCode",
    DataType: "char",
    description: "Response code. Eg, 0000, 0001 ..",
  },
  {
    name: "respMsg",
    DataType: "char",
    description: "Response message description",
  },
  {
    name: "data",
    DataType: "char",
    description: "Response jwt encoded data as payload request data",
  },
];

export const responseAvailableParameter = [
  {
    name: "respCode",
    DataType: "char",
    description: "Response code. Eg, 0000, 0001 ..",
  },
  {
    name: "respMsg",
    DataType: "char",
    description: "Response message description: Success or Failed",
  },
  {
    name: "data",
    DataType: "char",
    description:
      "Data of merchant information and available payment subscribe listing for each payment type",
  },
];
export const responseDoPayParameter = [
  {
    name: "respCode",
    DataType: "char",
    description: "Response code. Eg, 0000, 0001 ..",
  },
  {
    name: "respMsg",
    DataType: "char",
    description: "Response message description",
  },
  {
    name: "data",
    DataType: "char",
    description:
      "Payment information for your next step to proceed. Here is a sample,redirectUrl : for web payment redirection ,qrImg : for scan QR,deeplink : for CB pin verification,Text message for push notification pay request",
  },
];

export const environmentUrl = [
  {
    name: "UAT",
    description: "https://test.octoverse.com.mm/api/payment",
  }
]

export const directInformation = [
  {
    name: "merchantID",
    value: "MPSSD0000000084"
  },
  {
    name: "secretKey",
    value: "XXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  },
  {
    name: "dataKey",
    value: "XXXXXXXXXXXXXXXX"
  }
]

export const redirectInformation = [
  {
    name: "merchantID",
    value: "MPSSD0000000083"
  },
  {
    name: "secretKey",
    value: "XXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  },
  {
    name: "dataKey",
    value: "XXXXXXXXXXXXXXXX"
  }
]

export const doPayDataParameter = [
  {
    name: "phoneNo",
    type: "int",
    length: "20",
    required: "Y",
    description: "Wallet/Pay registration mobile number",
  },
  {
    name: "name",
    type: "char",
    length: "20",
    required: "N",
    description: "Wallet/Pay register name",
  },
  {
    name: "email",
    type: "char",
    length: "15",
    required: "N",
    description: "Wallet/Pay register email address",
  },
  {
    name: "number",
    type: "int",
    length: "5",
    required: "N",
    description: "Card number is required (for Visa/Master global payment)",
  },
  {
    name: "expiryMonth",
    type: "int",
    length: "255",
    required: "N",
    description:
      "Card expiry month is required (for Visa/Master global payment)",
  },
  {
    name: "expiryYear",
    type: "int",
    length: "255",
    required: "N",
    description:
      "Card expiry year is required (for Visa/Master global payment)",
  },
  {
    name: "securityCode",
    type: "int",
    length: "150",
    required: "N",
    description:
      "Card security code is required (for Visa/Master global payment)",
  },
];
