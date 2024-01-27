import React, { useEffect, useState } from 'react';
import Card from './card/CardAnnonce'; // Supposons que vous avez un composant Card pour afficher chaque annonce
import { sendGetRequest } from "../../fonction/fonction";
import { API_URL } from '../../constante/constante';
import AtomicSpinner from 'atomic-spinner';

function ListeAnnonce() {

  const [annonces, setAnnonce] = useState();

  useEffect(() => {
    fetchAnnonce();
  }, []); 
  
  async function fetchAnnonce() {
    const url = API_URL + "/annonce/admin/10";
    const data = await sendGetRequest(url, {}, "GET");
    setAnnonce(data.data.pending);
    console.log("data ", data.data.pending);
  }

  
  return (
    <div className="liste-annonce container" style={{marginTop: "5%", width: "100%", margin:"right"}}>
      <AtomicSpinner />
      {annonces?.map(annonce => (
        <Card annonce={annonce} reload={fetchAnnonce}/>
      ))}
    </div>
  );
}

export default ListeAnnonce;