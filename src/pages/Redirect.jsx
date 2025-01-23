import React, { useState } from "react";
import encode from "jwt-encode";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import RedirectdialogComponent from "./RedirectDialog";
import RedirectToken from "./RedirectToken";
import Layout from "./layout/layouts";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import RedirectCheck from "./RedirectCheck";
function Redirect() {
  
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <Tabs defaultValue="account" className="w-full ">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="paymentToken">Payment Token</TabsTrigger>
              <TabsTrigger value="checkPayment">Check Payment Query</TabsTrigger>
            </TabsList>
            <TabsContent value="paymentToken">
              <Card>
                <CardHeader>
                  <CardTitle>Request payment token API <RedirectdialogComponent /></CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <RedirectToken />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="checkPayment">
              <Card>
                <CardHeader>
                  <CardTitle>Check Payment Query API <RedirectdialogComponent /></CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <RedirectCheck />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

export default Redirect;
