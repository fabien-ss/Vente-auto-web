import React ,{ useEffect, useState } from "react";
import "./Modele.css";
import { sendGetRequest, sendDataToApi } from "../../fonction/fonction";
import { API_URL } from "../../constante/constante";

function Modele(){

    const [marque] = useState();
    const [listMarque, setListMarque] = useState([]);
    const [axe, setAxe] = useState([]);
    const [displayAxe, setDisplayAxe] = useState(false);
    
    useEffect(() => {
        async function fetchMarques() {
            const url = API_URL + "/marque";
            const data = await sendGetRequest(url, {}, "GET");
            setListMarque(data);
            const url_axe = API_URL + "/axe";
            const axe = await sendGetRequest(url_axe, {}, "GET");
            setAxe(axe.data.axes);
        }
        fetchMarques();
    }, []); // Supprimez listMarque des dépendances pour éviter une boucle infinie

    const showDisplayAxe = () =>{
        setDisplayAxe(true);
    }      

    const handleSubmit = async (event) => {
        event.preventDefault();
        const model = {
            marque: event.target.elements.idMarque.value,
            nom: event.target.elements.nomModele.value,
            axes: axe.map(a => {
                const checkedBoxes = Array.from(event.target.querySelectorAll(`input[name="${a.idAxe}"]:checked`)).map(box => box.value);
                return { idAxe: a.idAxe, axeValue: checkedBoxes };
            })
        };
        const url = API_URL + "/modele";
        const response = await sendDataToApi(url, model, "POST");
        alert(response.status);
        window.location.reload();
    }

    return(
        <div className="row">
            <h5 class="card-title">Nouveau modele</h5>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label>Marque</label>
                    <select className="form-select" name="idMarque" onChange={e => showDisplayAxe()} value={marque} >
                        <option value="">Sélectionnez une marque</option>
                        {listMarque.map((marque) => (
                            <option key={marque.idMarque} value={marque.idMarque}>
                                {marque.nom}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="row">
                    <label>Modele</label>
                    <input type="text" name="nomModele" className="form-control" />
                </div>
                {
                    displayAxe &&
                    <div className="row">
                        <h1>Laissez vide si information inutile</h1>
                        {axe.map((a, index) => (
                            <div className="card col-3 me-5" > 
                                <img class="card-img-top" alt="ok" src = "https://static.vecteezy.com/ti/vecteur-libre/p1/3555424-gear-settings-thin-line-symbol-cogwheel-icon-innovation-logo-vector-illustration-gratuit-vectoriel.jpg"/>
                                <div className="card-header">
                                    {a.nom}
                                    </div>
                                    <div className="card-body">
                                    <div className="card-title">
                                    </div>
                                    {a.axeValues.map((marque) => (
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value={marque.idValue} name={a.idAxe} id={`input-${a.nom}-${marque.idValue}`} />
                                            <label className="form-check-label" htmlFor={`input-${a.nom}-${marque.idValue}`}>
                                                {marque.label}
                                            </label>
 
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                }
                <button type="submit" className="btn btn-primary mt-5">Submit</button>
            </form>
        </div>
    )
}

export default Modele;