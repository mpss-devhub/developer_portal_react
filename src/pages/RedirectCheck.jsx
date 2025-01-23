import React, { useState } from "react";
import { KeyRound, Send } from "lucide-react";
import encode from "jwt-encode";
import { jwtDecode } from "jwt-decode";
import CryptoJS from 'crypto-js';


import axios from "axios";

export default function RedirectCheck() {
    const [checkPayment, setCheckPayment] = useState({
        merchantID: "MPSSD0000000083",
        invoiceNo: "PKK00006",
    });
    const [encodedCheckPayment, setEncodedCheckPayment] = useState("");
    const [secretKey, setSecretKey] = useState("JHjRmhCyMAcVGXYuuWyyoy2m_Las8orNUhum60yThQI");
    const [apiResponse, setApiResponse] = useState(null);
    const [encryptedData, setEncryptedData] = useState("");
    const checkInputChange = (key, value) => {
        setCheckPayment((prev) => ({
            ...prev,
            [key]: isNaN(Number(value)) ? value : Number(value),
        }));
    };
    const checkPaymentEncodeToken = () => {
        const token = encode(checkPayment, secretKey);
        setEncodedCheckPayment(token);
    };
    const checkPaymentApiRequest = async () => {
        try {
            const response = await axios.post(
                "https://test.octoverse.com.mm/api/payment/auth/paymentInQuery",
                {
                    payData: encodedCheckPayment,
                }
            );

            setApiResponse(response.data);
            decryptAES();
        } catch (error) {
            console.error("API request failed:", error);
        }

    }
    const [decryptedCheckPayment, setDecryptedCheckPayment] = useState("")
    const decryptAES = () => {
        try {    
            const key = CryptoJS.enc.Utf8.parse("XBCENLKT0UC9MQKM"); // 16-byte key
            console.log('here');
            if(apiResponse.data){
                 const cyphertext = CryptoJS.AES.decrypt(apiResponse.data, key, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7,
            });
            console.log('Decrypted bytes:', cyphertext.toString(CryptoJS.enc.Utf8));
    
            const plaintext = cyphertext.toString(CryptoJS.enc.Utf8);
            const parsedData = JSON.parse(plaintext);
            setDecryptedCheckPayment(parsedData);
            return parsedData;
            }
            
        } catch (error) {
            console.error('Decryption failed:', error.message);
            return 'Decryption error';
        }
    };
    return (
        <div className="RequestPaymentTokenAPI">
            <div className="grid grid-cols-2 gap-4" id="requestPayment">
                {Object.entries(checkPayment).map(([key, value]) => (
                    <div key={key}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </label>
                        <input
                            type={key === "text"}
                            value={value}
                            onChange={(e) => checkInputChange(key, e.target.value)}
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
                    onClick={checkPaymentEncodeToken}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    <KeyRound className="w-4 h-4" />
                    Encode
                </button>
                <button
                    onClick={checkPaymentApiRequest}
                    disabled={!encodedCheckPayment}
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
                        value={encodedCheckPayment}
                        readOnly
                        className="w-full h-24 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                {apiResponse &&  (
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
                {decryptedCheckPayment &&  (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Decrypt
                        </label>
                        <textarea
                            value={JSON.stringify(decryptedCheckPayment, null, 2)}
                            readOnly
                            className="w-full h-48 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
                        />
                    </div>
                )}

            </div>

        </div>
    );

}