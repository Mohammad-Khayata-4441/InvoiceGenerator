import { Box, FormControl, FormLabel, TextField, TextFieldProps } from '@mui/material'
import React, { FC } from 'react'
import { BiDollar } from 'react-icons/bi'
import { IconProps } from "@mui/material";

import { IconBaseProps } from 'react-icons'


interface Props {
    label?: string
    Icon: FC<IconBaseProps | IconProps>,

}

export default function PrefixedTextField({ label, Icon, ...rest }: Props & TextFieldProps) {
    return (
        <FormControl fullWidth className='w-full h-full'>
            {
                label && <FormLabel>{label}</FormLabel>
            }
            <Box display='flex' alignItems={'center'} >
                <Box display='flex' height={'100%'} alignItems='center' bgcolor={t => t.palette.divider} justifyContent='center' width={45}>
                    <Icon  ></Icon>
                </Box>
                <TextField {...rest}  ></TextField>
            </Box>
        </FormControl>)
}
