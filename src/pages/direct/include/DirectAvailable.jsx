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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import DirectAvailableAlert from "../../../atomic/alert/DirectAvailableAlert";

const DirectAvailable = ({
  getAvailablePaymentsList,
  paymentToken: initialPaymentToken,
  accessToken: initialAccessToken,
}) => {
  const [paymentToken, setPaymentToken] = useState(initialPaymentToken);
  const [accessToken, setAccessToken] = useState(initialAccessToken);

  const [apiResponse, setApiResponse] = useState(null);
  const makeApiRequest = async () => {
    try {
      const response = await axios.post(
        "https://test.octoverse.com.mm/api/payment/getAvailablePaymentsList",
        {
          paymentToken: paymentToken,
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
            Get Available Payment List API
            <DirectAvailableAlert />
          </div>
        </CardTitle>
        <CardDescription>
          After receiving the payment token data from the request token API, the
          merchant can call this API to review the merchant subscribed payment
          list and related payment code.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-wrap w-full gap-4">
            <div className="w-full md:w-1/3 flex flex-col space-y-4">
              <div className="flex flex-col space-y-1.5">
                <Label>Access Token</Label>
                <Input
                  value={accessToken}
                  onChange={(e) => setAccessToken(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Payment Token</Label>
                <Input
                  value={paymentToken}
                  onChange={(e) => setPaymentToken(e.target.value)}
                />
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
        <Button
          onClick={makeApiRequest}
          disabled={!accessToken && !paymentToken}
        >
          Send Request
        </Button>
        <Button
          onClick={() => {
            getAvailablePaymentsList({ paymentList: apiResponse });
          }}
          disabled={!apiResponse}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DirectAvailable;
