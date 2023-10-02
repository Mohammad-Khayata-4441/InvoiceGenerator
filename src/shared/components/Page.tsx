import React, { PropsWithChildren, ReactNode, ReactElement } from 'react'
import { Box, Typography } from '@mui/material'
interface Props {
    title: string,
    appendTitle?: ReactElement,
    actions?: ReactNode
}
export default function Page({ title, actions, children, appendTitle }: PropsWithChildren<Props>) {
    return (
        <div>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>

                <Box display='flex' alignItems='center' gap={2} className="navigation">
                    <Typography fontSize={'24px'} fontWeight={'bold'} variant='h1'>
                        {title}
                    </Typography>
                    {appendTitle}
                </Box>


                <div className="actions">
                    {actions ? actions : <></>}
                </div>


            </Box>
            <Box mt={2}>

                {children}
            </Box>

        </div>
    )
}
