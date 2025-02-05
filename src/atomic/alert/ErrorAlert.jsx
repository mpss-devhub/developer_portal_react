import React from 'react'

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
import { Info } from 'lucide-react';
const ErrorAlert = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Info size={20} className="ml-4 text-blue-700" />
            </AlertDialogTrigger>
            <AlertDialogContent className="max-h-[90vh] max-w-[100vh] overflow-y-auto">
                <AlertDialogHeader>
                    <div className="flex items-center justify-between">
                        <AlertDialogTitle>API Error ResCode and RespMesg Flow</AlertDialogTitle>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ErrorAlert