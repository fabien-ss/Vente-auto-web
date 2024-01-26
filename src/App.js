import React from 'react';
import './assets/css/App.css';
import LoginClient from './pages/LoginClient';
import LoginAdmin from './pages/LoginAdmin';
import RegisterClient from './pages/RegisterClient';
import RegisterAdmin from './pages/RegisterAdmin';
import BackOffice from './pages/BackOffice';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontOffice from './pages/FrontOffice';
import Chat from './pages/Chat';

function App() {  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="login-client" element={<LoginClient />}/>
        <Route path="register-client" element={<RegisterClient />} />
        <Route path="/" element={<LoginClient />}/>
        <Route path="login-admin" element={<LoginAdmin />}/>
        <Route path="register-admin" element={<RegisterAdmin />} />
        <Route path="back-office" element={<BackOffice />} />
        <Route path="front-office" element={< FrontOffice />} />
        <Route path="chat" element={< Chat />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
