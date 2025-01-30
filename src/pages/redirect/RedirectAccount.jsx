import React from "react";
import Layout from "../layout/Layouts";
import { MermaidDiagram } from "@lightenna/react-mermaid-diagram";
const RedirectAccount = () => {
  const diagram_text = `sequenceDiagram
  actor Customer
  actor Merchant
  actor OctoverseSystem as Octoverse System
  actor Bank
  Customer->>Merchant: Customer Checkout
  Merchant->>+OctoverseSystem: Request Payment Token API
  OctoverseSystem->>-Merchant: Respond with access token and payment token
  Merchant->>+OctoverseSystem: Request Get Available Payment List API
  OctoverseSystem->>-Merchant: Respond with payment info details
  Merchant->>Customer: Show available payment list
  Customer->>Merchant: Customer chooses payment and submits
  Merchant->>+OctoverseSystem: Request Do Pay API
  OctoverseSystem->>Bank: Send pay request
  Bank->>OctoverseSystem: Respond with payment data
  OctoverseSystem->>-Merchant: Respond with payment data
  Bank->>Customer: Push notification: pay request sent to customer wallet
  Customer->>Bank: Confirm payment via related app
  Bank->>OctoverseSystem: Notify payment status
  OctoverseSystem->>Merchant: Backend callback response
  Merchant->>Customer: Display payment result
  Merchant->>+OctoverseSystem: Send Payment Query API
  OctoverseSystem->>-Merchant: Respond with payment status
  `;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto border p-8 sm:p-0">
        <MermaidDiagram>{diagram_text}</MermaidDiagram>
      </div>
    </Layout>
  );
};

export default RedirectAccount;
