import React, { useState } from "react";
import Layout from "../layout/layouts";
import DirectToken from "./include/DirectToken";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DirectAvailable from "./include/DirectAvailable";
import DirectDoPay from "./include/DirectDoPay";

export default function Direct() {
  const [activeTab, setActiveTab] = useState("requestToken");
  const [paymentToken, setPaymentToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [paymentList, setPaymentList] = useState(null);

  const requestToken = ({ accessToken, paymentToken }) => {
    setAccessToken(accessToken);
    setPaymentToken(paymentToken);
    setActiveTab("available");
  };

  const getAvailablePaymentsList = ({ paymentList }) => {
    setPaymentList(paymentList);
    setActiveTab("doPay");
  };

  return (
    <Layout>
      <div className="px-6 mt-2">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="requestToken">Request Token</TabsTrigger>
            <TabsTrigger value="available">Available Payment List</TabsTrigger>
            <TabsTrigger value="doPay">Do Pay</TabsTrigger>
            <TabsTrigger value="paymentInQuery">Payment In Query</TabsTrigger>
          </TabsList>

          <TabsContent value="requestToken" className="w-full">
            <DirectToken requestToken={requestToken} />
          </TabsContent>

          <TabsContent value="available" className="w-full">
            <DirectAvailable
              getAvailablePaymentsList={getAvailablePaymentsList}
              paymentToken={paymentToken}
              accessToken={accessToken}
            />
          </TabsContent>

          <TabsContent value="doPay" className="w-full">
            <DirectDoPay
              paymentCodes={paymentList}
              paymentToken={paymentToken}
              accessToken={accessToken}
            />
          </TabsContent>

          <TabsContent value="paymentInQuery" className="w-full">
            <p>Payment In Query functionality will go here.</p>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
