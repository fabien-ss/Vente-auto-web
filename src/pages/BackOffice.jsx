// BackOffice.jsx
import React from "react";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import { Routes, Route, Outlet } from "react-router-dom";
import ListeAnnonce from "../component/annonce/ListeAnnonce";
import Element from "../component/element/Element";
import Statistique from "../component/statistique/Statistique";
import RegisterAdmin from "./RegisterAdmin";
import { useEffect } from "react";

function BackOffice() {
  // Fonction pour vérifier la présence d'un token dans le localStorage
  const checkToken = () => {
    const token = localStorage.getItem("token"); // Remplacez "votreNomDeToken" par le nom réel de votre token

    if (!token) {
      // Rediriger vers la page de login si le token n'est pas présent
      window.location.href = "/"; // Remplacez "/login" par le chemin vers la page de login
    }
  };

  // ...

  // Dans votre composant, appelez la fonction dans le useEffect ou componentDidMount
  useEffect(() => {
    checkToken();
  }, []); // Vide le tableau de dépendances pour s'assurer que la vérification est effectuée une seule fois lors du montage du composant

  return (
    <>
      <Header />
      <SideBar />
      <div
        className="backoffice-content container"
        style={{ marginTop: "5%", marginLeft: "20%" }}
      >
        <Routes>
          <Route path="annonce" element={<ListeAnnonce />} />
          <Route path="element/*" element={<Element />} />
          <Route path="statistique" element={<Statistique />} />
          <Route path="ajouterAdmin" element={<RegisterAdmin />} />
          {/* Define other child routes here */}
          <Route index element={<ListeAnnonce />} /> {/* Default route */}
        </Routes>
      </div>
      <Outlet /> {/* This is where child routes will be rendered */}
    </>
  );
}

export default BackOffice;
