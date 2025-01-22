import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import CryptoJS from "crypto-js";
import { banks } from "./array/DirectDoPayArray";
import DirectDoPayAlert from "../../../atomic/alert/DirectDoPayAlert";

const DirectDoPay = ({
  paymentToken: initialPaymentToken,
  accessToken: initialAccessToken,
}) => {
  const [paymentToken, setPaymentToken] = useState(initialPaymentToken);
  const [accessToken, setAccessToken] = useState(initialAccessToken);
  const [paymentCode, setPaymentCode] = useState("");
  const [encryptedString, setEncryptedString] = useState("");
  const [dataKey, setDataKey] = useState("X3RZ1WKA6K84BUW2");
  const [payData, setPayData] = useState({
    phoneNo: "09882551255",
    name: "Developer Testing",
    email: "test@gmail.com",
  });
  const [apiResponse, setApiResponse] = useState(null);

  const encryptPayData = () => {
    const payDataString = JSON.stringify(payData);

    const ciphertext = CryptoJS.AES.encrypt(
      payDataString,
      CryptoJS.enc.Utf8.parse(dataKey),
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      }
    ).toString();

    setEncryptedString(ciphertext);
  };

  const handleInputChange = (key, value) => {
    setPayData((prev) => ({
      ...prev,
      [key]: key === "amount" ? Number(value) : value,
    }));
  };

  const makeApiRequest = async () => {
    try {
      const encryptedData = encryptedString;
      const response = await axios.post(
        "https://test.octoverse.com.mm/api/payment/dopay",
        {
          paymentToken: paymentToken,
          payData: encryptedData,
          paymentCode: paymentCode,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setApiResponse(response.data);
    } catch (error) {
      console.error("API request failed:", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center">
            Do Payment API
            <DirectDoPayAlert />
          </div>
        </CardTitle>
        <CardDescription>
          Merchant can use this API to make payment request transactions between
          MPSS and Merchant system after receiving the access and payment token
          data from the request payment token API.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-wrap w-full gap-4">
            <div className="w-full md:w-1/3 flex flex-col space-y-4">
              {Object.entries(payData).map(([key, value]) => (
                <div key={key} className="flex flex-col space-y-1.5">
                  <Label>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                  <Input
                    type={key === "amount" ? "number" : "text"}
                    value={value}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                  />
                </div>
              ))}
              <div className="flex flex-col space-y-1.5">
                <Label>Access Token</Label>
                <Input
                  value={accessToken}
                  onChange={(e) => setAccessToken(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>PayData</Label>
                <Input value={encryptedString} readOnly />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Payment Token</Label>
                <Input
                  value={paymentToken}
                  onChange={(e) => setPaymentToken(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Payment Code:</Label>
                <Select
                  value={paymentCode}
                  onValueChange={(value) => setPaymentCode(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose Payment Code" />
                  </SelectTrigger>
                  <SelectContent>
                    {banks.map((code) => (
                      <SelectItem key={code.value} value={code.value}>
                        {code.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div>
                <Label>API Response</Label>
                <Textarea
                  value={JSON.stringify(apiResponse, null, 2)}
                  readOnly
                  className="min-h-40"
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-4">
        <Button onClick={encryptPayData}>AES-128 ECB Encrypt</Button>
        <Button
          onClick={makeApiRequest}
          disabled={!accessToken || !paymentToken || !encryptedString}
        >
          Send Request
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DirectDoPay;
