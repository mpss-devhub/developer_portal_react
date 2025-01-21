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
    name: "Accept format",
    description: "JSON",
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
