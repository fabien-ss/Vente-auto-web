import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../assets/css/style.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
function logout() {
  // Effacer le contenu du localStorage
  localStorage.clear();

  // Rediriger vers la page d'accueil ou une autre page après la déconnexion
  // Remplacez '"/"' par le chemin vers la page vers laquelle vous souhaitez rediriger
  window.location.href = "/";
}
function SideBar() {
  const [showCount, setShowCount] = useState(true);
  useEffect(() => {
    setShowCount(true);
  }, [setShowCount]);

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link
            to="/back-office/annonce"
            className="nav-link"
            onClick={(e) => setShowCount(!showCount)}
          >
            <i className="bi bi-grid"></i>
            <span>Annonces</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/back-office/statistique" className="nav-link">
            <i className="bi bi-boxes"></i>
            <span>Statistiques</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/back-office/element" className="nav-link">
            <i className="bi bi-boxes"></i>
            <span>Element</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/back-office/ajouterAdmin" className="nav-link">
            <i className="bi bi-boxes"></i>
            <span>Ajouter un nouvel administrateur</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={logout}>
            <i className=""></i>
            <span>Logout</span>
          </Link>
        </li>
        {/* Add more navigation items here */}
      </ul>
    </aside>
  );
}

export default SideBar;
