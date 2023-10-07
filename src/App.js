import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import { darkTheme, lightTheme } from './theme'; // Import your custom dark theme

import AppRoutes from './Routes';
import Navbar from './components/Navbar';

function App() {
    const storedThemeMode = localStorage.getItem('themeMode') || 'dark';
    const [themeMode, setThemeMode] = useState(storedThemeMode);

    useEffect(() => {
        // Store the selected theme mode in local storage
        localStorage.setItem('themeMode', themeMode);
    }, [themeMode]);

    const toggleTheme = () => {
        setThemeMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
    };

    return (
      <ThemeProvider theme={themeMode === 'dark' ? darkTheme : lightTheme}>
          <CssBaseline />
          <Router>
          <div className="App">
              <Navbar toggleTheme={toggleTheme} themeMode={themeMode}/>
              <main>
                  <AppRoutes />
              </main>
          </div>
          </Router>
      </ThemeProvider>
  );
}

export default App;
