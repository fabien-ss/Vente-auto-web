// BackOffice.jsx
import React from 'react';
import Header from '../component/Header';
import SideBar from '../component/SideBar';
import { Routes, Route, Outlet } from "react-router-dom";
import LoginClient from './LoginAdmin';
import ListeAnnonce from '../component/annonce/ListeAnnonce';

function BackOffice() {
    return (
        <>
            <Header />
            <SideBar />
            <div className="backoffice-content">
                <Routes>
                    <Route path="annonce" element={<ListeAnnonce/>} />
                    <Route path="inventory" element={<h1>Hello2</h1>} />
                    <Route path="profile" element={<h1>Hello3</h1>} />
                    <Route path="faq" element={<h1>Hello4</h1>} />
                    {/* Define other child routes here */}
                    <Route index element={<h1>Hello5</h1>} /> {/* Default route */}
                </Routes>
            </div>
            <Outlet /> {/* This is where child routes will be rendered */}
        </>
    );
}

export default BackOffice;