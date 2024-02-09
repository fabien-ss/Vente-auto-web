import React, {useState, useEffect, useCallback} from 'react';
import Card from './card/CardAnnonce'; 
import { API_URL } from '../../constante/constante';
import { sendGetRequest } from '../../fonction/fonction';

import Loading from "../../assets/loading.gif";

function ListeAnnonce() {
  const [isLoading, setIsLoading] = useState(false);
  const [annonce, setAnnonce] = useState();

  const fetchAnnonce = useCallback(async () => {
    setIsLoading(true);
    const url = API_URL + "/annonce/admin/10";
    const data = await sendGetRequest(url, {}, "GET");
    setAnnonce(data.data.pending);
    console.log("data ", data.data.pending);
    setIsLoading(false);
  },[]);

  useEffect(() => {
    fetchAnnonce();
  }, [fetchAnnonce]); 
  
  
  return (
    <div className="liste-annonce container" style={{marginTop: "2%", width: "100%", margin:"right"}}>
        {isLoading & <img src={Loading} alt="Loading" />}
          <h1>Liste des annonces</h1>
          {annonce?.map(annonce1 => (
            <Card annonce={annonce1} reload={fetchAnnonce}/>
            ))}
      </div>
  );
}

export default ListeAnnonce;