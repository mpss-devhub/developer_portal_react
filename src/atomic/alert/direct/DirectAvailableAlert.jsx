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
  headers,
  availableRequestBody,
  responseAvailableParameter,
} from "../../../pages/direct/include/array/DirectTokenArray";

const DirectAvailableAlert = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Info size={20} className="ml-4" />
      </AlertDialogTrigger>
      <AlertDialogContent className="max-h-[90vh] max-w-[100vh] overflow-y-auto">
        <AlertDialogHeader>
          <div className="flex items-center justify-between">
            <AlertDialogTitle>Get Available Payment List API</AlertDialogTitle>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <p className="text-sm">
          After receiving the payment token data from the request token API, the
          merchant can call this API to review the merchant subscribed payment
          list and related payment code.
        </p>{" "}
        <Table className="min-w-full text-xs sm:text-sm md:text-base">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {headers.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.name}</TableCell>
                <TableCell>{invoice.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-base mt-4 font-medium">
          <span className="mr-2">6.2.1</span>
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
            {availableRequestBody.map((parameter, index) => (
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
          <span className="mr-2">6.2.2</span>
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
            {responseAvailableParameter.map((parameter, index) => (
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

export default DirectAvailableAlert;
