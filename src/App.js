import './App.css';
import React, { useState, useEffect } from 'react';
import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './theme';

import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
    const storedThemeMode = localStorage.getItem('themeMode') || 'dark';
    const [themeMode, setThemeMode] = useState(storedThemeMode);

    useEffect(() => {
        localStorage.setItem('themeMode', themeMode);
    }, [themeMode]);

    const toggleTheme = () => {
        setThemeMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
    };

    const activeTheme = themeMode === 'dark' ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={activeTheme}>
            <CssBaseline />
            <Box
                sx={{
                    minHeight: '100vh',
                    background: activeTheme.palette.custom?.gradientBackground || activeTheme.palette.background.default,
                    color: activeTheme.palette.text.primary,
                }}
            >
                <Navbar toggleTheme={toggleTheme} themeMode={themeMode} />
                <Home />
            </Box>
        </ThemeProvider>
    );
}

export default App;
