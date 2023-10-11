import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        type: 'light', // Use a light theme
        primary: {
            main: '#484b6a', // Change primary color
        },
        secondary: {
            main: '#484b6a', // Change secondary color
        },
        background: {
            default: '#fafafa', // Off-black background color
            paper: '#e4e5f1', // You can also adjust paper color if needed
        },
    },
    // Customize other theme properties as needed
});

export const darkTheme = createTheme({
    palette: {
        type: 'dark', // Use a dark theme
        primary: {
            main: '#000000', // Change primary color
        },
        secondary: {
            main: '#fafafa', // Change secondary color
        },
        background: {
            default: '#161618', // Off-black background color
            paper: '#212124', // You can also adjust paper color if needed
        },
        text: {
            primary: '#fff', // White text color
        },
    },
    // Customize other theme properties as needed
});