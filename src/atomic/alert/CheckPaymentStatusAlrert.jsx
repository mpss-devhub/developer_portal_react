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
  paymentInQueryRequest,
  responseParameterQuery,
} from "../../pages/direct/include/array/DirectTokenArray";

const CheckPaymentStatusAlrert = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Info size={20} className="ml-4 text-blue-700" />
      </AlertDialogTrigger>
      <AlertDialogContent className="max-h-[90vh] max-w-[100vh] overflow-y-auto">
        <AlertDialogHeader>
          <div className="flex items-center justify-between">
            <AlertDialogTitle>Check Payment Status API</AlertDialogTitle>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <p className="text-sm">
          This API is used to check the payment status manually whether the
          transaction is success or not after payment completed by the end user.
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
          <span className="mr-2">7.2.1</span>
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
            {paymentInQueryRequest.map((parameter, index) => (
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
          <span className="mr-2">7.2.2</span>
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
            {responseParameterQuery.map((parameter, index) => (
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

export default CheckPaymentStatusAlrert;
