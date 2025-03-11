import React from "react";

import {
  AlertDialog,
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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  headerDoPay,
  doPayRequestBody,
  responseDoPayParameter,
  doPayDataParameter,
} from "../../../pages/direct/include/array/DirectTokenArray";
const DirectDoPayAlert = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        
        <Info size={20} className="ml-4 text-blue-700 animate-bounce" />
      </AlertDialogTrigger>
      <AlertDialogContent className="max-h-[90vh] max-w-[100vh] overflow-y-auto">
        <AlertDialogHeader>
          <div className="flex items-center justify-between">
            <AlertDialogTitle>Do Payment API</AlertDialogTitle>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <p className="text-sm">
          Merchant can use this API to make payment request transactions between
          MPSS and Merchant system after receiving the access and payment token
          data from the request payment token API.
        </p>{" "}
        <Table className="min-w-full text-xs sm:text-sm md:text-base">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {headerDoPay.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.name}</TableCell>
                <TableCell>{invoice.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-base mt-4 font-medium">
          <span className="mr-2">6.3.1</span>
          Request Parameter
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
            {doPayRequestBody.map((parameter, index) => (
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
          <span className="mr-2">6.3.2</span>
          Response Parameter
        </p>
        <p className="text-sm">
          Below is the requirement of payload data with AES-128-ECB encryption
          algorithm. The encryption key will be provided by Octoverse system.
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
            {doPayDataParameter.map((parameter, index) => (
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
          <span className="mr-2">6.3.4</span>
          Payload to get payData
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
            {responseDoPayParameter.map((parameter, index) => (
              <TableRow key={index}>
                <TableCell>{parameter.name}</TableCell>
                <TableCell>{parameter.DataType}</TableCell>
                <TableCell>{parameter.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DirectDoPayAlert;
