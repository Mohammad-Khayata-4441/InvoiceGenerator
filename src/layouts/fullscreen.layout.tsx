import { Box, CssBaseline } from '@mui/material'
import React, { PropsWithChildren } from 'react'

export default function FullScreenLayout({ children }: PropsWithChildren) {
    return (
        <Box component="main" sx={{ flexGrow: 1, position: "relative", px: '24px', pb: 2, mb: { xs: '100px', md: 0 } }}>
                  <CssBaseline />

            {children}
        </Box>
    )

}
