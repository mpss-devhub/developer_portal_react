export const directWallet = `sequenceDiagram
    actor Customer
    actor Merchant
    actor OctoverseSystem as Octoverse System
    Customer->>Merchant: Customer Checkout
    Merchant->>+OctoverseSystem: Request Payment Token API
    OctoverseSystem->>-Merchant: Respond with access token and payment token
    Merchant->>+OctoverseSystem: Request Get Available Payment List API
    OctoverseSystem->>-Merchant: Respond with payment info details
    Merchant->>Customer: Show available payment list
    Customer->>Merchant: Customer chooses payment and submits
    Merchant->>+OctoverseSystem: Request Do Pay API
    OctoverseSystem->>-Merchant: Respond with payment data
    Customer->>OctoverseSystem: Confirm payment via related app
    OctoverseSystem->>Merchant: Backend callback response
    Merchant->>Customer: Display payment result
    Merchant->>+OctoverseSystem: Send Payment Query API
    OctoverseSystem->>-Merchant: Respond with payment status
    `;

// export const directWeb = `sequenceDiagram
//     actor Customer
//     actor Merchant
//     actor OctoverseSystem as Octoverse System
//     Customer->>Merchant: Customer Checkout
//     Merchant->>+OctoverseSystem: Request Payment Token API
//     OctoverseSystem->>-Merchant: Respond with access token and payment token
//     Merchant->>+OctoverseSystem: Request Get Available Payment List API
//     OctoverseSystem->>-Merchant: Respond with payment info details
//     Merchant->>Customer: Show available payment list
//     Customer->>Merchant: Customer chooses payment and submits
//     Merchant->>+OctoverseSystem: Request Do Pay API
//     OctoverseSystem->>Bank: Send pay request
//     Merchant->>Customer:Redirect to payment hosted page
//     Customer->>Bank:Confirm payment from related payment page
//     OctoverseSystem->>Merchant: Backend callback response
//     Merchant->>Customer: Display payment result
//     Merchant->>+OctoverseSystem: Send Payment Query API
//     OctoverseSystem->>-Merchant: Respond with payment status
//     `;


// export const directQR = `sequenceDiagram
// actor Customer
// actor Merchant
// actor OctoverseSystem as Octoverse System
// Customer->>Merchant: Customer Checkout
// Merchant->>+OctoverseSystem: Request Payment Token API
// OctoverseSystem->>-Merchant: Respond with access token and payment token
// Merchant->>+OctoverseSystem: Request Get Available Payment List API
// OctoverseSystem->>-Merchant: Respond with payment info details
// Merchant->>Customer: Show available payment list
// Customer->>Merchant: Customer chooses payment and submits
// Merchant->>+OctoverseSystem: Request Do Pay API
// OctoverseSystem->>Bank: Send pay request
// Merchant->>Customer:Display QR code
// Customer->>Bank:Scan QR and confirm payment via related app
// OctoverseSystem->>Merchant: Backend callback response
// Merchant->>Customer: Display payment result
// Merchant->>+OctoverseSystem: Send Payment Query API
// OctoverseSystem->>-Merchant: Respond with payment status
// `;

export const redirect = `sequenceDiagram
actor Customer
actor Merchant
actor OctoverseSystem as Octoverse System
Customer->>Merchant: Customer Checkout
Merchant->>+OctoverseSystem: Request Payment Token API
OctoverseSystem->>-Merchant: Respond with payment token with paymentUrl
Merchant->>Merchant: Open the paymentUrl
Merchant->>Customer:Redirect to Octoverse payment hosted page
Customer->>OctoverseSystem:Customer chose payment,enter information and submit
OctoverseSystem->>Customer: Landing to related payment web page
Customer->>OctoverseSystem:Confirm payment via related app
OctoverseSystem->>Customer: Display payment result
OctoverseSystem->>Merchant: Backend callback response
Customer->>OctoverseSystem: Click "Back to Merchant"
OctoverseSystem->>Customer: Frontend redirection
Merchant->>+OctoverseSystem: Send Payment Query API
OctoverseSystem->>-Merchant: Respond with payment status`;
