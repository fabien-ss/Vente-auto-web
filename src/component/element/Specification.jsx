import React, { useState } from "react";
import { sendDataToApi } from "../../fonction/fonction";
import { API_URL } from "../../constante/constante";


function Specification(){
    const [name, setName] = useState('');
    const [details, setDetails] = useState([ '' ]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDetailChange = (index, event) => {
        const values = [...details];
        values[index] = event.target.value;
        setDetails(values);
    };

    const addDetailField = () => {
        setDetails([...details, '']);
    };

    const submitForm = async (event) => {
        event.preventDefault();
        const data = {
            "name": name,
            "details": details
        };
        console.log("data ",data);
        const url = API_URL + "/axe";
        const response = await sendDataToApi(url, data, "POST");
       //s alert(response.status);
        await alert(response.data.message);
    }

    return(
        <div className="container mt-5">
            <form onSubmit={e => submitForm(e)}>
                <h2 className="mb-4">
                    Nouvelle SPecification Voiture
                </h2>
                <input type="text" className="form-control mb-3" value={name} onChange={handleNameChange} placeholder="Enter name" />
                {details.map((detail, index) => (
                    <input type="text" className="form-control mb-3" value={detail} onChange={(event) => handleDetailChange(index, event)} placeholder={`Detail ${index + 1}`} />
                ))}
                <div className="d-flex">
                    <button className="btn btn-primary col-3 me-3" type="button" onClick={addDetailField}>
                        +
                    </button>
                    <button type="submit" className="btn btn-primary" >Valider</button>
                </div>
            </form>
        </div>
    )
}

export default Specification;