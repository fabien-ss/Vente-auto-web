import React from 'react';
import Card from './card/CardAnnonce'; 

function ListeAnnonce({annonces, fetchAnnonce}) {
  
  return (
    <div className="liste-annonce container" style={{marginTop: "5%", width: "100%", margin:"right"}}>
      {annonces?.map(annonce => (
        <Card annonce={annonce} reload={fetchAnnonce}/>
      ))}
    </div>
  );
}

export default ListeAnnonce;