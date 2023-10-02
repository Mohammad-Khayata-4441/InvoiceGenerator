import { Theme } from '@mui/material'
export const sharedThemeConfig: Partial<Theme> = {
    components: {

        MuiButton: {
            defaultProps: { variant: 'contained' },


            styleOverrides: {
                root: () => ({
                    height: 45,
                    boxShadow: 'none',
                })
            }
        },

        MuiOutlinedInput: {

            styleOverrides: {

                root: (t) => ({
                    borderRadius: 0,
                    backgroundColor: t.ownerState.variant === 'outlined' ? t.theme.palette.background.default : 'transparent',
                })
            }
        },
        MuiTextField: {
            defaultProps: {
                size: 'small'
            },

            styleOverrides: {
                root: t => ({
                    '& fieldset': {
                        borderColor: t.theme.palette.mode === 'light'? '#DCE6EA': t.theme.palette.divider , // Replace with yourdesired color
                        '&:hover': {
                            borderColor: t.theme.palette.mode === 'light'? '#DCE6EA': t.theme.palette.divider , // Replace with yourdesired color
                        },
                    },
                }),
            }

        },
        MuiFormLabel: {
            styleOverrides: {
                root: t => ({
                    color: t.theme.palette.mode === 'dark' ? t.theme.palette.secondary.light : t.theme.palette.secondary.main,
                    marginBottom: "2px",
                })
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {

                    fontFamily: 'lexend'
                }
            }
        },
        MuiAppBar: {
            defaultProps: {
                variant: 'outlined',
                elevation: 0,
            },
            styleOverrides: {

            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0,
                variant: 'outlined'
            },

        },

    },
    // typography: {
    //     fontFamily: ['"poppins"', '"almarai"'].join(","),
    //   } 
}