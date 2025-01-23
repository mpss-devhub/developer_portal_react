import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(faInfoCircle, faXmark);
import {
    Table,
    TableBody,
    TableCell,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
export default function RedirectdialogComponent() {
    const apiHeaders = [
        {
            name: "URL",
            desc: "{base_url}/auth/token",
        },
        {
            name: "Method",
            desc: "POST"
        },
        {
            name: "Header",
            desc: "Content-Type: application/json"
        },
        {
            name: "Accepted Format",
            desc: "JSON"
        },
    ]
    const requiresParameters = [
        {
            fieldName: "merchantID",
            dataType: "char",
            mandatory: "Y",
            description: "Merchant ID which is provided by Octoverse system",
        },
        {
            fieldName: "invoiceNo",
            dataType: "char",
            mandatory: "Y",
            description: "Unique invoice number",
        },
        {
            fieldName: "amount",
            dataType: "num",
            mandatory: "Y",
            description: "Transaction Amount",
        },
        {
            fieldName: "currencyCode",
            dataType: "char",
            mandatory: "Y",
            description: "Currency Codes (MMK and USD)",
        },
        {
            fieldName: "frontendUrl",
            dataType: "char",
            mandatory: "N",
            description: "Redirect frontend url after transaction completed",
        },
        {
            fieldName: "backendUrl",
            dataType: "char",
            mandatory: "N",
            description: "Server to server notification after transaction completed.",
        },
        {
            fieldName: "userDefination1",
            dataType: "char",
            mandatory: "N",
            description: "Optional define information.",
        },
        {
            fieldName: "userDefination2",
            dataType: "char",
            mandatory: "N",
            description: "Optional define information.",
        },
        {
            fieldName: "userDefination3",
            dataType: "char",
            mandatory: "N",
            description: "Optional define information.",
        },

    ]
    const responseAPI = [
        {
            fieldName: "respCode",
            dataType: "char",
            description: "Response code. Eg, 0000, 0001 ..",
        },
        {
            fieldName: "respMsg",
            dataType: "char",
            description: "Response message description.",
        },
        {
            fieldName: "Data",
            dataType: "num",
            description: "Response jwt encoded data as payload request data.",
        },

    ]
    return (
        <AlertDialog className="w-3/4">
            <AlertDialogTrigger asChild>
                <button className="outline-button">
                    <FontAwesomeIcon icon="info-circle" className="cursor-pointer text-lg ml-2" />
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-4/5 max-w-[70%] max-h-[calc(100vh-4rem)] overflow-y-auto">
                <AlertDialogHeader>
                    <AlertDialogCancel className="w-8 border-none ml-auto">
                        <FontAwesomeIcon icon={faXmark} className="cursor-pointer text-red-500" />
                    </AlertDialogCancel>
                    <AlertDialogTitle className="text-xl font-bold">Request Payment Token API</AlertDialogTitle>
                    <AlertDialogDescription>
                        <div className="mt-5">
                            <Table className="w-3/4 mx-auto">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px] text-center text-black text-lg">Name</TableHead>
                                        <TableHead className="text-center text-black text-lg">Description</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {apiHeaders.map((apiHeader) => (
                                        <TableRow key={apiHeader.apiHeader}>
                                            <TableCell className="text-left w-1/2">{apiHeader.name}</TableCell>
                                            <TableCell className="">{apiHeader.desc}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <h2 className="text-xl text-black font-bold text-left mt-5">Request Parameter</h2>
                            <Table className="mt-8 w-3/4 mx-auto">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px] text-center text-black text-lg">Field Name</TableHead>
                                        <TableHead className="w-[150px] text-center text-black text-lg">Data Type</TableHead>
                                        <TableHead className="text-center text-black text-lg">Mandatory</TableHead>
                                        <TableHead className="text-center text-black text-lg">Description</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {requiresParameters.map((requireParam) => (
                                        <TableRow key={requireParam.requireParam}>
                                            <TableCell className="text-left">{requireParam.fieldName}</TableCell>
                                            <TableCell className="text-center">{requireParam.dataType}</TableCell>
                                            <TableCell className="text-center">{requireParam.mandatory}</TableCell>
                                            <TableCell className="">{requireParam.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <h2 className="text-xl text-black font-bold text-left mt-5">Response API</h2>
                            <Table className="mt-8 w-3/4 mx-auto">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[150px] text-center text-black text-lg">Field Name</TableHead>
                                        <TableHead className="w-[150px] text-center text-black text-lg">Data Type</TableHead>
                                        <TableHead className="text-center text-black text-lg">Description</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {responseAPI.map((responseAPI) => (
                                        <TableRow key={responseAPI.responseAPI}>
                                            <TableCell className="text-left">{responseAPI.fieldName}</TableCell>
                                            <TableCell className="text-center">{responseAPI.dataType}</TableCell>
                                            <TableCell className="">{responseAPI.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <h2 className="text-xl text-black font-bold text-left mt-5">Request </h2>
                        <div className="w-3/4 mx-auto bg-black text-white px-5 py-4 mt-5 rounded-lg">
                            &#123; <br />
                            <span className="text-yellow-400">"PayData"</span>:
                            <span className="break-all">
                                "eyJhbGciOiJIUzI1NiJ9.eyJtZXJjaGFudElEIjoiS0hJTlMwMDAwMDAwMTczIiwiaW52b2ljZU5vIjoiSU5WMDAwMDQzMzAiLCJhbW91bnQiOiIxMDAwIiwiY3VycmVuY3lDb2RlIjoiTU1LIiwiYmFja2VuZFVybCI6Imh0dHBzOi8vbXBzc3VhdC5nbGl0Y2gubWUvb2N0b3ZlcnNlL3Jlc3VsdCJ9.RX9j47Vox0RptenFAUg_UQ9gUE5sw2uc1MNAB7KvuAM"
                            </span> <br />
                            &#125;
                        </div>
                        <p className="text-red-600 mt-3 ml-28">PayData : JWT encoded data with secret key</p>
                        <h2 className="text-xl text-black font-bold text-left mt-5">Response </h2>
                        <div className="w-3/4 mx-auto bg-black text-white px-5 py-4 mt-5 rounded-lg">
                            &#123; <br />
                            <span className="text-yellow-400">"respCode"</span>:
                            <span className="break-all">
                                "0000",
                            </span> <br />
                            <span className="text-yellow-400">"respMsg"</span>:
                            <span className="break-all">
                                "Success",
                            </span> <br />
                            <span className="text-yellow-400">"data"</span>:
                            <span className="break-all">
                                "eyJhbGciOiJIUzI1NiJ9.eyJwYXltZW50VG9rZW4iOiJ4OE96dUlCQklnWWJ6NHY1OVJhOGVEKzliQW5PTFZaK0s0aDVRWEM0VEdJPSIsImFjY2Vzc1Rva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKcGMzTWlPaUp3WVhsdFpXNTBMV0Z3YVMxbmR5MXplWE4wWlcwaUxDSnpkV0lpT2lKTFNFbE9VekF3TURBd01EQXhOek1pTENKbGVIQWlPakUzTXpNNE9UTTFNVEY5LnVnNllYSUViaDgxTWdhSEQ2UVliZnZuNXg1R2pZelduS21wbnBCa282MzQifQ.l7R9pZOaD2fcsFjMO1mdRm2oZwyWEg8Hwqz4l6jibtk"
                            </span> <br />
                            &#125;
                        </div>
                        <p className="text-red-600 mt-3 ml-28">You need decode data to get payment token and access token in JWT.</p>
                    </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog >
    );
}
