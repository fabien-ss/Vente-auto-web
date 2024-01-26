// App.js
import React from 'react';
import './assets/css/App.css';
import LoginAdmin from './pages/LoginAdmin';
import RegisterAdmin from './pages/RegisterAdmin';
import BackOffice from './pages/BackOffice';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAdmin />} />
        <Route path="/register-admin" element={<RegisterAdmin />} />
        <Route path="/back-office/*" element={<BackOffice />} />
        {/* The "/*" is important to indicate that BackOffice has nested routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;