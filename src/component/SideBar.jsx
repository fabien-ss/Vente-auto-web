import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/style.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';

function SideBar() {
    return (
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
                <Link to="/back-office/annonce" className="nav-link">
                    <i className="bi bi-grid"></i>
                    <span>Annonces</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="inventory" className="nav-link">
                    <i className="bi bi-boxes"></i>
                    <span>Inventory</span>
                </Link>
            </li>
            {/* Add more navigation items here */}
        </ul>
      </aside>  
    );
}

export default SideBar;