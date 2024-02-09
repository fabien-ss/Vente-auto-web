import React, { useState, useEffect, useCallback }  from "react";
import { sendDataToApi, sendGetRequest } from "../../fonction/fonction";
import { API_URL } from "../../constante/constante";

function Marque(){

    const [listeMarques, setListMarques] = useState([{}]);

    const [marque, setMarque] = useState("");

    async function uploadMarque(event){
        event.preventDefault();
        console.log("preparing to send data ", marque);
        const data = {
            "nom": marque
        };
        const url = API_URL + "/marque";
        console.log("api url ", url);
        const response = await sendDataToApi(url, data, "POST");
        console.log("response ", response);
        alert("Success! ",response);

      //  window.location.reload();
    }

    const fetchMarque = useCallback(async () => {
        const url = API_URL + "/marque";
        const response = await sendGetRequest(url, {}, "GET");
        console.log("response ", response);
        //setListMarques(response);
        setListMarques(response);
      },[]);

    useEffect(() => {
        fetchMarque();
    }, [fetchMarque]);

    return(
        <>
            <div class="row">
                <div className="col-12"></div>
                <h5 class="card-title">Nouvelle marque</h5>
                <form onSubmit={ e=> uploadMarque(e)}>
                    <div class="col-sm-10">
                        <label for="inputText" class="col-sm-12 col-form-label">Nom de la marque</label>
                        <input type="text" value={marque} onChange={e => setMarque(e.target.value)} class="form-control" />
                    </div>
                    <div class="col-sm-10">
                        <input type="submit" class="btn btn-primary mt-3" />
                    </div>
                </form>
                <div className="col-12" style={{}}>
                    <table className="table table-stripped">
                        <tr>
                            <th>Id</th>
                            <th>Nom</th>
                            <th>Action</th>
                        </tr>
                        {listeMarques?.map(e => (
                            <tr>
                                <td>{e.idMarque}</td>
                                <td>{e.nom}</td>
                                <td>Modifier</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>  
        </>
    )
}

export default Marque;
