import React, { ReactNode } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer } from '@mui/material';

interface HeadsType<T> {
    key: keyof T;
    title: string;
    customRenderer?: (value: T) => React.ReactNode; // New property for custom rendering
    // Add more properties if needed
}

type Actions = "delete" | "export" | "create" | "details" | "edit";

interface Props<DT> {
    data: DT[] | undefined;
    heads: HeadsType<DT>[];
    dataReducer?: "client" | "server";
    isLoading?: boolean;
    actions?: Actions[];
    selectable?: boolean;
    details?: boolean;
    tableCardPrepend?: React.ReactNode,
    
}

export default function CrudTable<DT>(props: Props<DT>) {
    return (
        <Paper elevation={3}>
            {props.tableCardPrepend}
            <TableContainer>

            <Table >
                <TableHead sx={{ background: theme => theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.light}}>
                    <TableRow >
                        {props.heads.map((head) => (
                            <TableCell key={head.key as string}>
                                {head.title}
                            </TableCell>
                        ))}
                     </TableRow>
                </TableHead>
                <TableBody>
                    {props.data?.map((row, rowIndex) => (
                        <TableRow hover key={rowIndex}>
                            {props.heads.map((h) => (
                                <TableCell key={h.key as string}>
                                    {h.customRenderer
                                        ? h.customRenderer(row)
                                        : renderCellContent(row[h.key])}
                                </TableCell>
                         
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>

        </Paper>
    );
}

// Helper function to render cell content based on the data type
function renderCellContent(content: any): React.ReactNode {
    if (typeof content === 'string' || typeof content === 'number') {
        return content;
    } else if (React.isValidElement(content)) {
        return content;
    } else {
        return JSON.stringify(content);
    }
}