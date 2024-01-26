import React from "react";
import '../assets/css/style.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';

function ImgTop(props){

      return(
        <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={props.img} class="img-fluid rounded-start" alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{props.title}</h5>
                  <p class="card-text">{props.text}</p>
                </div>
                <div class="col-12" style={{marginLeft: "63%"}}>
                    <span style={{paddingRight: "2%"}}><a href='register_admin' > Details </a></span>
                    <button class="btn btn-primary" type="submit" >Add to cart</button>
                </div>
              </div>
            </div>
          </div>

    );
}

export default ImgTop;