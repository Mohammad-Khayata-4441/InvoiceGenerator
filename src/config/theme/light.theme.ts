import { createTheme } from '@mui/material'
import { sharedThemeConfig } from './sharedThemeConfig';
export const lightTheme = createTheme({
    ...sharedThemeConfig,
    palette: {
        mode: 'light',
        primary: {
            main: '#34C2F4',
            contrastText: "#fff"
        },
        secondary: {
            main: "#00323F",
            light:'#EDF6F9'
        },
        background: {
            default: '#f9f9f9',
            paper: '#ffffff',
        },
        divider: '#DCE6EA',

        text: {
            primary: "#2f2f2f",
            secondary: "#777777"
        },

    },
 


});
