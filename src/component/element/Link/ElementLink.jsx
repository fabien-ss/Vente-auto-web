import React from "react";

import '../../../assets/css/style.css';
import '../../../assets/vendor/bootstrap/css/bootstrap.min.css';
import './ElementLink.css';
import { Link } from "react-router-dom";

function ElementLink(){
    return(
        <div class="container text-center">
            <div class="row">
                <div class="col-4">
                    <Link to="marque" className="nav-link">
                        <button type="button" class="btn btn-primary">Ajouter nouvelle marque</button>
                    </Link>
                </div>
                <div class="col-4">
                    <Link to="modele" className="nav-link">
                        <button type="button" class="btn btn-primary">Ajouter des modeles</button>
                    </Link>
                </div>
                <div class="col-4">
                    <Link to="specification" className="nav-link">
                        <button type="button" class="btn btn-primary">Spécification voiture</button>
                    </Link>  
                </div>
            </div>
        </div>
    )
}

export default ElementLink;