import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CryptoJS from "crypto-js";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import encode from "jwt-encode";
import axios from "axios";
import DirectAvailableAlert from "../../../atomic/alert/DirectAvailableAlert";

const DirectInQuery = () => {
  const [payload, setPayload] = useState({
    merchantID: "MPSSD0000000084",
    invoiceNo: "MPSS00000001",
  });
  const [secretKey, setSecretKey] = useState(
    "qTGInMWK8QULop8YbBlBBOLB85K6Q9vp33sRd8cufvY"
  );
  const [dataKey, setDataKey] = useState("X3RZ1WKA6K84BUW2");
  const [encodedToken, setEncodedToken] = useState("");
  const [apiResponse, setApiResponse] = useState(null);
  const [decodedData, setDecodedData] = useState("");
  const encodeToken = () => {
    const token = encode(payload, secretKey);
    setEncodedToken(token);
  };

  const decrypted = () => {
    if (apiResponse && apiResponse.respCode === "0000") {
      try {
        const encryptedData = apiResponse.data; // Extract encrypted data from response
        const decryptedBytes = CryptoJS.AES.decrypt(
          encryptedData,
          CryptoJS.enc.Utf8.parse(dataKey),
          {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
          }
        );
        const decryptedString = decryptedBytes.toString(CryptoJS.enc.Utf8);
        setDecodedData(decryptedString);
      } catch (error) {
        console.error("Decryption failed:", error);
      }
    } else {
      console.error("Invalid API response or response code.");
    }
  };

  const makeApiRequest = async () => {
    try {
      const response = await axios.post(
        "https://test.octoverse.com.mm/api/payment/auth/paymentInQuery",
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
            Check Payment Status API
            <DirectAvailableAlert />
          </div>
        </CardTitle>
        <CardDescription>
          This API is used to check the payment status manually whether the
          transaction is a success or not after payment completed by the end
          user.
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
              {decodedData && (
                <div>
                  <Label>Decoded Access Token & Payment Token</Label>
                  <Textarea
                    value={JSON.stringify(decodedData, null, 2)}
                    readOnly
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-4">
        <Button onClick={encodeToken}>JWT Encode</Button>
        <Button onClick={makeApiRequest}>Send Request</Button>
        <Button onClick={decrypted}>AES ECB Decrypt</Button>
      </CardFooter>
    </Card>
  );
};

export default DirectInQuery;
