import React, { useState } from "react";
import Layout from "../layout/Layouts";
import RedirectInQuery from "./include/RedirectInQuery";
import RedirectToken from "./include/RedirectToken";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RedirectAlert from "../../atomic/alert/redirect/RedirectAlert";

function Redirect() {
  const [activeTab, setActiveTab] = useState("requestToken");
  return (
    <Layout>
      <div className="px-6 my-4">
        <div className="flex items-center">
          <h3 className="text-2xl font-semibold mb-5">Redirect Payment API Integration<RedirectAlert /></h3>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="requestToken">Request Token</TabsTrigger>
            <TabsTrigger value="paymentInQuery">Payment In Query</TabsTrigger>
          </TabsList>
          <TabsContent value="requestToken" className="w-full">
            <RedirectToken />
          </TabsContent>

          <TabsContent value="paymentInQuery" className="w-full">
            <RedirectInQuery />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}

export default Redirect;
