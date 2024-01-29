// BackOffice.jsx
import React from 'react';
import Header from '../component/Header';
import SideBar from '../component/SideBar';
import { Routes, Route, Outlet } from "react-router-dom";
import ListeAnnonce from '../component/annonce/ListeAnnonce';
import Element from '../component/element/Element';
import Statistique from '../component/statistique/Statistique';
import RegisterAdmin from './RegisterAdmin';

function BackOffice() {
    
    return (
        <>
            <Header />
            <SideBar />
            <div className="backoffice-content container" style={{marginTop: "5%", marginLeft: "20%"}}>
                <Routes>
                    <Route path="annonce" element={<ListeAnnonce />} />
                    <Route path="element/*" element={<Element />} />
                    <Route path="statistique" element={<Statistique />} />
                    <Route path="ajouterAdmin" element={<RegisterAdmin />} />
                    {/* Define other child routes here */}
                    <Route index element={<h1>Hello5</h1>} /> {/* Default route */}
                </Routes>
            </div>
            <Outlet /> {/* This is where child routes will be rendered */}
        </>
    );
}

export default BackOffice;