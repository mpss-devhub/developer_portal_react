import React, { useState } from "react";
import { KeyRound, Send } from "lucide-react";
import encode from "jwt-encode";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function Redirect() {
  const [payload, setPayload] = useState({
    merchantID: "MPSSD0000000083",
    frontendUrl: "https://mpss.com.mm",
    backendUrl: "https://glitch.com/mpssuat",
    currencyCode: "MMK",
    amount: 1500,
    invoiceNo: "PKK00006",
  });
  const [secretKey, setSecretKey] = useState("JHjRmhCyMAcVGXYuuWyyoy2m_Las8orNUhum60yThQI");
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

  const makeApiRequest = async () => {
    try {
      const response = await axios.post(
        "https://test.octoverse.com.mm/api/payment/auth/token",
        {
          payData: encodedToken,
        }
      );

      setApiResponse(response.data);

      if (response.data.respCode === "0000") {
        const decodedData = jwtDecode(response.data.data);
        if (
          typeof decodedData === "object" &&
          decodedData !== null &&
          "paymenturl" in decodedData
        ) {
          setDecodedUrl(decodedData.paymenturl);
          window.open(decodedData.paymenturl, "_blank");
        }
      }
    } catch (error) {
      console.error("API request failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-2 mb-6">
          <KeyRound className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">
            JWT Encoder/Decoder
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {Object.entries(payload).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                type={key === "amount" ? "number" : "text"}
                value={value}
                onChange={(e) => handleInputChange(key, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          ))}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Secret Key
          </label>
          <input
            type="text"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={encodeToken}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <KeyRound className="w-4 h-4" />
            Encode
          </button>
          <button
            onClick={makeApiRequest}
            disabled={!encodedToken}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400"
          >
            <Send className="w-4 h-4" />
            Send Request
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Encoded Token
            </label>
            <textarea
              value={encodedToken}
              readOnly
              className="w-full h-24 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {apiResponse && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                API Response
              </label>
              <textarea
                value={JSON.stringify(apiResponse, null, 2)}
                readOnly
                className="w-full h-48 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
              />
            </div>
          )}

          {decodedUrl && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Decoded Payment URL
              </label>
              <textarea
                value={decodedUrl}
                readOnly
                className="w-full h-24 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Redirect;
