import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        type: 'light', // Use a light theme
        primary: {
            main: '#2196F3', // Change primary color
        },
        secondary: {
            main: '#FF5722', // Change secondary color
        },
    },
    // Customize other theme properties as needed
});

export const darkTheme = createTheme({
    palette: {
        type: 'dark', // Use a dark theme
        primary: {
            main: '#121212', // Change primary color
        },
        secondary: {
            main: '#614051', // Change secondary color
        },
        background: {
            default: '#514', // Off-black background color
            paper: '#222', // You can also adjust paper color if needed
        },
        text: {
            primary: '#fff', // White text color
        },
    },
    // Customize other theme properties as needed
});