import React, { useState }  from "react";
import { sendDataToApi } from "../../fonction/fonction";

function Marque(){

    const [marque, setMarque] = useState("");

    async function uploadMarque(event){
        event.preventDefault();
        console.log("preparing to send data ", marque);
        const data = {
            "nom": marque
        };
        const response = await sendDataToApi('http://localhost:8080/marque', data, "POST");
        alert(response.status);
    }

    return(
        <>
            <div class="row">
                <h5 class="card-title">Nouvelle marque</h5>
                <form onSubmit={ e=> uploadMarque(e)}>
                    <div class="col-sm-10">
                        <label for="inputText" class="col-sm-12 col-form-label">Nom de la marque</label>
                        <input type="text" onChange={e => setMarque(e.target.value)} class="form-control" />
                    </div>
                    <div class="col-sm-10">
                        <input type="submit" class="btn btn-primary mt-3" />
                    </div>
                </form>
            </div>  
        </>
    )
}

export default Marque;
