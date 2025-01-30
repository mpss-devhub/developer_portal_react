import * as React from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import encode from "jwt-encode";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
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
import { useState } from "react";
import DirectTokenAlert from "../../../atomic/alert/direct/DirectTokenAlert";
const RedirectToken = () => {
  const [payload, setPayload] = useState({
    merchantID: "MPSSD0000000083",
    invoiceNo: "MPSSPKK000001",
    amount: 1500,
    currencyCode: "MMK",
    frontendUrl: "https://mpss.com.mm",
    backendUrl: "https://mpssuat.glitch.me/octoverse/result",
  });

  const [secretKey, setSecretKey] = useState(
    "JHjRmhCyMAcVGXYuuWyyoy2m_Las8orNUhum60yThQI"
  );
  const [encodedToken, setEncodedToken] = useState("");
  const [apiResponse, setApiResponse] = useState(null);
  const [decodedUrl, setDecodedUrl] = useState("");

  const handleInputChange = (key, value) => {
    setPayload((prev) => ({
      ...prev,
      [key]: key === "amount" ? Number(value) : value,
    }));
  };
  const encodeToken = () => {
    const token = encode(payload, secretKey);
    setEncodedToken(token);
  };

  const decodeToken = () => {
    if (apiResponse.respCode === "0000") {
      const decodedData = jwtDecode(apiResponse.data);
      if (
        typeof decodedData === "object" &&
        decodedData !== null &&
        "paymenturl" in decodedData
      ) {
        setDecodedUrl(decodedData.paymenturl);
      }
    }
  };

  const clear = () => {
    setEncodedToken("");
    setApiResponse(null);
    setDecodedUrl("");
  };

  const goToRedirectOctoverse = () => {
    window.open(decodedUrl, "_blank");
  };

  const makeApiRequest = async () => {
    try {
      const response = await axios.post(
        "https://test.octoverse.com.mm/api/payment/auth/token",
        {
          payData: encodedToken,
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
            Request Payment Token API
            <DirectTokenAlert />
          </div>
        </CardTitle>
        <CardDescription>
          Merchant users must request this token API to get authorization token
          and payment URL.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-wrap w-full gap-4">
            <div className="w-full md:w-1/3 flex flex-col space-y-4">
              {Object.entries(payload).map(([key, value]) => (
                <div key={key} className="flex flex-col space-y-1.5">
                  <Label>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                  <Input
                    type={key === "amount" ? "number" : "text"}
                    value={value}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                  />
                </div>
              ))}
            </div>

            <div className="w-full md:w-1/2">
              <div className="flex flex-col space-y-1.5">
                <Label>Encoded String</Label>
                <Textarea value={encodedToken} readOnly />
              </div>
              {apiResponse && (
                <div>
                  <Label>API Response</Label>
                  <Textarea
                    value={JSON.stringify(apiResponse, null, 2)}
                    readOnly
                  />
                </div>
              )}
              {decodedUrl && (
                <div>
                  <Label>Decoded Payment Url</Label>
                  <Textarea
                    value={JSON.stringify(decodedUrl, null, 2)}
                    readOnly
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-4">
        <Button variant="secondary" onClick={clear}>
          Clear
        </Button>
        <Button onClick={encodeToken}>JWT Encode</Button>
        <Button onClick={makeApiRequest} disabled={!encodedToken}>
          Send Request
        </Button>
        <Button
          onClick={decodeToken}
          disabled={apiResponse?.respCode !== "0000"}
        >
          JWT Decode
        </Button>
        <Button onClick={goToRedirectOctoverse} disabled={!decodedUrl}>
          Go to Octoverse
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RedirectToken;
