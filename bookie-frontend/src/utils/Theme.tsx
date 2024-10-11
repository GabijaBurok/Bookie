import { createTheme } from "@mui/material";

export const Theme = createTheme({
    palette: {
        primary: {
            main: '#D4A276',
            light: '#E7BC91',
            dark: '#BC8A5F',
            contrastText: '#392001'
        },
        secondary: {
            main: '#F3D5B5',
            contrastText: '#5c3e19'
        },
        info: {
            main: '#392001'
        },
        warning: {
            main: '#BC8A5F'
        }
    }
    });