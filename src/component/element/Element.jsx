import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import ElementLink from "./Link/ElementLink";

import '../../assets/css/style.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import Marque from "./Marque";
import Modele from "./Modele";
import Specification from "./Specification";


function Element(){
    return(
        <div className="row">
            <h1>Element Option</h1>
            <ElementLink />
                <div className="row">
                    <Routes>
                        <Route path="marque" element={<Marque />} />
                        <Route path="modele" element={<Modele />} />
                        <Route path="specification" element={<Specification />} />
                    </Routes>
                </div>
            <Outlet />
        </div>
    )
}

export default Element;