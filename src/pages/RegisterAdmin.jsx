import React, { useState, useEffect } from 'react';
import '../assets/css/style.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css'; 
import { sendDataToApi } from '../fonction/fonction';
import { useNavigate } from 'react-router-dom';

function RegisterClient() {

  const navigate = useNavigate();
  const [state, setState] = useState({
    nom: "fabien",
    prenom: "abie",
    email: "fab@g.com",
    motDePasse: "1234"
})

  const handleChange = (event) => {
    console.log(event);
    const data = event.target.value;
    setState({
      ...state,
       [event.target.name]: data
    })  
  }

  useEffect(() => {
    console.log("state updated", state);
  }, [state]);

  const sendData = async (event) => {
    event.preventDefault();
    const response = await sendDataToApi('http://localhost:8080/admin/signin', state, 'POST');
    try{
      console.log("response", response);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.user);
      navigate("/back-office");
    }catch(Error){
      console.log("response", response);
      alert(response.data.error);
    }
    console.log("data ", response);
  }
    return(
        <main>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
            

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Create an Administrator Account</h5>
                    <p class="text-center small">Enter your personal details to create account</p>
                  </div>

                  <form class="row g-3 needs-validation" onSubmit={event => { sendData(event)}}>
                    <div class="col-12">
                      <label for="yourName" class="form-label">Name</label>
                      <input type="text" name="nom" onChange={e => handleChange(e)} class="form-control" id="yourName" required/>
                      <div class="invalid-feedback">Please, enter your name!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourFirstName" class="form-label">First Name</label>
                      <input type="text" name="prenom" onChange={e => handleChange(e)} class="form-control" id="yourFirstName" required/>
                      <div class="invalid-feedback">Please, enter your first name!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourEmail" class="form-label">Email</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="email" name="email" onChange={e => handleChange(e)} class="form-control" id="yourEmail" required/>
                        <div class="invalid-feedback">Please choose a username.</div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Password</label>
                      <input type="password" name="motDePasse" onChange={e => handleChange(e)} class="form-control" id="yourPassword" required/>
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>

                  
                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit">Create Account</button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">Already have an account? <a href="login-admin">Log in</a></p>
                    </div>
                  </form>

                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

    </div>
  </main>

    );
}

export default RegisterClient;