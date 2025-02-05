import React from 'react'
import Layout from '../layout/layouts'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { error_codes } from '../direct/include/array/ErrorArray';
import ErrorAlert from '../../atomic/alert/ErrorAlert';

const Error = () => {
    return (
        <Layout>
            <div className="px-6 my-4">
                <div className="flex items-center">
                    <h3 className="text-2xl font-semibold mb-5">Error Codes<ErrorAlert /></h3>
                </div>
                <Table className="min-w-full text-xs sm:text-sm md:text-base">
                    <TableHeader>
                        <TableRow>
                            <TableHead>#</TableHead>
                            <TableHead>Error Code</TableHead>
                            <TableHead>Error Message</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {error_codes.map((error, index) => (
                            <React.Fragment key={index}>
                                {index === 0 || error.category !== error_codes[index - 1].category ? (
                                    <TableRow className="bg-gray-100 font-bold">
                                        <TableCell colSpan={4}>{error.category}</TableCell>
                                    </TableRow>
                                ) : null}
                                <TableRow>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{error.errorCode}</TableCell>
                                    <TableCell>{error.errorMessage}</TableCell>
                                    <TableCell>{error.description}</TableCell>
                                </TableRow>
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>

            </div>
        </Layout>
    )
}

export default Error