import React, { useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
const StartAlert = ({ open, onOpenChange }) => {
    const [accepted, setAccepted] = useState(false);
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange} className="md:max-w-96">
            <AlertDialogHeader>
            </AlertDialogHeader>
            <AlertDialogContent>
                <h2 className="text-lg md:text-3xl font-semibold">Try free for 14-days</h2>
                <hr className="bg-pink-500" />
                <p>You are about to start a new project.aaa</p>
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" checked={accepted}
                        onCheckedChange={(checked) => setAccepted(checked)} />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Accept terms and conditions
                    </label>
                </div>
                <AlertDialogCancel className="w-1/3 bg-pink-600 md:text-md text-white hover:border-pink-600"  disabled={!accepted}>
                        Start Free Trial
                </AlertDialogCancel>

            </AlertDialogContent>
        </AlertDialog>
    );
};

export default StartAlert;