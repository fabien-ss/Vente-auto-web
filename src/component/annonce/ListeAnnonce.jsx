import React, {useState, useEffect} from 'react';
import Card from './card/CardAnnonce'; 
import { API_URL } from '../../constante/constante';
import { sendGetRequest } from '../../fonction/fonction';

function ListeAnnonce() {
  const [annonce, setAnnonce] = useState();

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
      {annonce?.map(annonce1 => (
        <Card annonce={annonce1} reload={fetchAnnonce}/>
      ))}
    </div>
  );
}

export default ListeAnnonce;