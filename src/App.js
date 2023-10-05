import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './Routes';

import Navbar from './components/Navbar';

function App() {
  return (
      <Router>
      <div className="App">
          <Navbar />
          <main>
              <AppRoutes />
          </main>
      </div>
      </Router>
  );
}

export default App;
