import React, {useState} from "react";
import { sendDataToApi } from "../../../fonction/fonction";
import { API_URL } from "../../../constante/constante";
function CardAnnonce({ annonce, reload }) 
{
  const [showPopup] = useState(false);
  const [idAnnonce] = useState();
  // const [etat] = useState();
 
  const handleClick = async () => {
     const data = {
      "idAnnonce": idAnnonce,
      "etat": 20
     };
     const url = API_URL + "/annonce/admin";
     console.log("url: " + url);
     console.log("data ",data);
     await sendDataToApi(url,data, "PUT");
     reload();
  };

  // const handleChange = (event) => {
  //   setIdAnnonce(annonce.idAnnonce);
  //   setEtat(event.target.value);
  // }
 
  return (
     <div className="card">
          
           <img className="card-img-top" src={"data:image/png;base64,"+annonce.photoSet[0]?.fieldBytes} alt="" />
         
         <div className="card-body">
             <h5 className="card-title">Description: {annonce.description}</h5>
             <p className="card-text">Annonce: {annonce.annee}</p>
             <p className="card-text">Kilometrage: {annonce.kilometrage}</p>
              <label>Etat</label>
             
              <div className="row">
                <div className="col-6">
                  <button className="btn btn-primary" type="button" onClick={e => {handleClick()}}>Valider</button>

                </div>
              </div>
         </div>
         {showPopup && (
           <div className="modal" tabIndex="-1" role="dialog">
             <div className="modal-dialog" role="document">
               <div className="modal-content">
                 <div className="modal-header">
                  <h5 className="modal-title">Images</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                  </button>
                 </div>
                 <div className="modal-body">
                  {annonce.photoSet.map((photo, index) =>(
                     <img key={index} className="img-fluid" src={"data:image/png;base64,"+photo.fieldBytes} alt="" />
                   ))}
                 </div>
                 <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                 </div>
               </div>
             </div>
           </div>
         )}
     </div>
  );
 }
 
 export default CardAnnonce;
 