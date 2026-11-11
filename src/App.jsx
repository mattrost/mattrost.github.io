import './App.css';
import React, { useState, useEffect } from 'react';
import { CssBaseline, Box } from '@mui/material';
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
          backgroundColor: 'background.default',
          backgroundImage: activeTheme.palette.custom?.gradientBackground || 'none',
          color: 'text.primary',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
      >
        <Navbar toggleTheme={toggleTheme} themeMode={themeMode} />
        <Home />
      </Box>
    </ThemeProvider>
  );
}

export default App;