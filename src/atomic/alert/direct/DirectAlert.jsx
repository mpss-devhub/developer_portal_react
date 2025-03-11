import React from 'react'
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Info } from 'lucide-react';
import { MermaidDiagram } from '@lightenna/react-mermaid-diagram';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { directInformation, environmentUrl } from '../../../pages/direct/include/array/DirectTokenArray';
import { directWallet, directQR, directWeb } from '../../diagramText/diagramText';

const DirectAlert = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Info size={20} className="ml-4 text-blue-700 animate-bounce" />
            </AlertDialogTrigger>
            <AlertDialogContent className="max-h-[90vh] max-w-[100vh] overflow-y-auto">
                <AlertDialogHeader>
                    <div className="flex items-center justify-between">
                        <AlertDialogTitle>Direct Payment API</AlertDialogTitle>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </div>
                </AlertDialogHeader>
                <p className="text-base mt-4 font-medium">
                    Environment URL
                </p>
                <p className="text-sm">
                    Merchants can use the described base URL for their UAT integration. Once the UAT integration is done,
                    you can switch to the Production environment with the described URL. Production merchant account
                    credentials will be shared by Octoverse Team after the setup configuration is completed.
                </p>
                <Table className="min-w-full text-xs sm:text-sm md:text-base">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Environment</TableHead>
                            <TableHead>Base URL</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {environmentUrl.map((value) => (
                            <TableRow key={value.value}>
                                <TableCell className="font-medium">{value.name}</TableCell>
                                <TableCell>{value.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <hr className='border border-[#ED2668]' />
                <p className="text-base mt-4 font-medium">
                    Merchant Information
                </p>
                <p className="text-sm">
                    Merchant id,secret key and data key which are provided from Octover Payment Gateway system to integrate payment gateway in your project.
                </p>
                <Table className="min-w-full text-xs sm:text-sm md:text-base">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Environment</TableHead>
                            <TableHead>Base URL</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {directInformation.map((value) => (
                            <TableRow key={value.value}>
                                <TableCell className="font-medium">{value.name}</TableCell>
                                <TableCell>{value.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <hr className='border border-[#ED2668]' />
                <p className="text-base mt-4 font-medium">
                    E-wallet/Pin workflow
                </p>
                <p className="text-sm">Below is the sequenece disagram that explains the e-wallet payment type integration workflow.</p>
                <MermaidDiagram>{directWallet}</MermaidDiagram>
                <hr className='border border-[#ED2668]' />
                <p className="text-base mt-4 font-medium">
                    Web Payment workflow
                </p>
                <p className="text-sm">Below is the sequenece disagram that explains the web payment type integration workflow.</p>
                <MermaidDiagram>{directWeb}</MermaidDiagram>
                <hr className='border border-[#ED2668]' />
                <p className="text-base mt-4 font-medium">
                    QR Payment workflow
                </p>
                <p className="text-sm">Below is the sequenece disagram that explains the QR payment type integration workflow.</p>
                <MermaidDiagram>{directQR}</MermaidDiagram>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DirectAlert