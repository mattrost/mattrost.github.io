import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#484b6a' },
        secondary: { main: '#484b6a' },
        background: {
            default: '#f5f5f5',
            paper: '#e4e5f1',
        },
        custom: {
            gradientBackground: 'linear-gradient(135deg, #f0f4ff 0%, #a1a9ff 40%, #7179e0 75%, #484b6a 100%)',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#ffffff' },
        secondary: { main: '#90caf9' },
        background: { default: '#121212', paper: '#1e1e1e' },
        text: { primary: '#ffffff', secondary: '#ccc' },
        custom: {
            gradientBackground: 'linear-gradient(135deg, #0d0d0d 0%, #121212 40%, #1a237e 80%, #000000 100%)',
            linkColor: '#90caf9',
        },
    },
});
