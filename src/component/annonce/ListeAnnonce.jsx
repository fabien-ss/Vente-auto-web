import React from 'react';
import Card from './card/CardAnnonce'; 

function ListeAnnonce({fetchAnnonce}) {
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
      {annonces?.map(annonce => (
        <Card annonce={annonce} reload={fetchAnnonce}/>
      ))}
    </div>
  );
}

export default ListeAnnonce;