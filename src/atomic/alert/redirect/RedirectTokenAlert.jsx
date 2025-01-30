import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Info } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  invoicesWithoutToken,
  requestParameter,
  responseParameter,
} from "../../../pages/direct/include/array/DirectTokenArray";

const RedirectTokenAlert = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        
        <Info size={20} className="ml-4 text-blue-700" />
      </AlertDialogTrigger>
      <AlertDialogContent className="max-h-[90vh] max-w-[100vh] overflow-y-auto">
        <AlertDialogHeader>
          <div className="flex items-center justify-between">
            <AlertDialogTitle>Request payment token API</AlertDialogTitle>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <p className="text-sm">
          Merchant users must request this token API to get authorization token
          and payment URL.
        </p>
        <Table className="min-w-full text-xs sm:text-sm md:text-base">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoicesWithoutToken.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.name}</TableCell>
                <TableCell>{invoice.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-base mt-4 font-medium">
          <span className="mr-2">6.1.1</span>
          Request Parameter
        </p>
        <p className="text-sm">
          Below are the parameters to get the encoded pay data with a secret key
          for your token API request.
        </p>
        <Table className="min-w-full text-xs sm:text-sm md:text-base">
          <TableHeader>
            <TableRow>
              <TableHead>Field Name</TableHead>
              <TableHead>Data Type</TableHead>
              <TableHead>Mandatory</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requestParameter.map((parameter, index) => (
              <TableRow key={index}>
                <TableCell>{parameter.name}</TableCell>
                <TableCell>{parameter.type}</TableCell>
                <TableCell>{parameter.required}</TableCell>
                <TableCell>{parameter.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-base mt-4 font-medium">
          <span className="mr-2">6.1.1</span>
          Response Parameter
        </p>
        <Table className="min-w-full text-xs sm:text-sm md:text-base">
          <TableHeader>
            <TableRow>
              <TableHead>Field Name</TableHead>
              <TableHead>Data Type</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {responseParameter.map((parameter, index) => (
              <TableRow key={index}>
                <TableCell>{parameter.name}</TableCell>
                <TableCell>{parameter.DataType}</TableCell>
                <TableCell>{parameter.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-base mt-4 font-medium">
          <span className="mr-2">6.1.1</span>
          Sample JSON Request and Response
        </p>
        <p className="text-base font-medium">Request</p>
        <div className="max-w-lg mx-auto bg-black text-white shadow-xl py-2 px-4 rounded-md font-mono text-xs sm:text-sm md:text-base">
          <p className="py-2 text-sm">
            {"{"} <span className="text-yellow-400">"PayData"</span>:
            <span className="whitespace-pre-wrap break-words">
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjaGFudElEIjoiTUlEMDAwMDEiLCJpb
              nZvaWNlTm8iOiJJTlYwMDAwMjM2MCIsImFtb3VudCI6IjI1MDAiLCJjdXJyZW5jeUNvZ
              GUiOiJNTUsifQ.TcPg2RoF5YiRbO6YYJYQCxuZoNmeblNj8nqnX_JTVO8"
            </span>
            <br />
            {"}"}
          </p>
        </div>
        <p>
          PayData :{" "}
          <a href="https://jwt.io/" className="text-blue-600 underline">
            JWT
          </a>{" "}
          encoded data with secret key
        </p>
        <p className="text-base font-medium">Response</p>
        <div className="max-w-lg mx-auto bg-black text-white shadow-xl py-2 px-4 rounded-md font-mono text-xs sm:text-sm md:text-base">
          <p className="py-2 text-sm">
            {"{"}
            <br />
            <span className="text-yellow-400">"respCode"</span>: "0000",
            <br />
            <span className="text-yellow-400">"respMsg"</span>: "Success",
            <br />
            <span className="text-yellow-400">"data"</span>:{" "}
            <span className="whitespace-pre-wrap break-words">
              "eyJhbGciOiJIUzI1NiJ9.eyJwYXltZW50dXJsIjoiaHR0cHM6Ly90ZXN0Lm9jdG92ZXJzZS5
              jb20ubW0vcGF5bWVudD9pdG9rZW49ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKcGMzT
              WlPaUp3WVhsdFpXNTBMV0Z3YVMxbmR5MXplWE4wWlcwaUxDSnpkV0lpT2lKVlNV
              UXdNREF3TVNJc0ltVjRjQ0k2TVRZMk1UWTJOVGsyTTMwLkdScy1pYk16cTgtYlhIUE
              VBWjVIS0pHVE9JQVhXRU1udTEyLWRTVFFzZVUmcHRva2VuPVlobHdHd04yUyUyRj
              MyanhGVmVqZUJTRlgwaHZiOEpaSFpybktROXlOalVNOCUzRCJ9.dNT8NgTjNJJVgeNec
              rmC-kZ4raxr2mwp2EojgahT-tE"
            </span>
            ,<br />
            {"}"}
          </p>
        </div>
        <p>
          You need to decode data to get payment url to proceed your payment{" "}
          <a href="https://jwt.io/" className="text-blue-600 underline">
            JWT
          </a>
          .
        </p>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RedirectTokenAlert;
