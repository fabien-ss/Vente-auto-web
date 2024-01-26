import React from 'react';
import Card from './card/CardAnnonce'; // Supposons que vous avez un composant Card pour afficher chaque annonce

const annonces = [
  { id: 1, title: 'Voiture A', description: 'Description de la voiture A', price: '20000€' },
  { id: 2, title: 'Voiture B', description: 'Description de la voiture B', price: '15000€' },
  { id: 3, title: 'Voiture C', description: 'Description de la voiture C', price: '25000€' },
  // Ajoutez plus d'annonces ici
];

function ListeAnnonce() {
  return (
    <div className="liste-annonce" style={{marginTop: "5%", width: "100%"}}>
      {annonces.map(annonce => (
        <Card key={annonce.id} title={annonce.title} description={annonce.description} price={annonce.price} />
      ))}
    </div>
  );
}

export default ListeAnnonce;