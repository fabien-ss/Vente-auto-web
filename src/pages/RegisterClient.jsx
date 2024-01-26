import {useState} from 'react';
import React from 'react';
import '../assets/css/style.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css'; 
import { sendDataToApi } from '../fonction/fonction';

function RegisterClient() {
  const [state, setState] = useState({
    prenom: "",
    nom: "",
    email: "",
    password: "",
    validationMotDePasse: ""
  })

  const handleChange = (event) => {
    console.log(event);
    const data = event.target.value;
    setState({
      ...state,
       [event.target.name]: data
    })  
  }

  async function log() {
    console.log("Manomboka sign ", state);
    try {
      var data = await sendDataToApi("http://192.168.20.162:8080/authentification/signin", state, "POST");
      console.log(data);
    } catch (error) {
      alert(error.message);
    }
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
                    <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
                    <p class="text-center small">Enter your personal details to create account</p>
                  </div>

                  <form class="row g-3 needs-validation" novalidate action='login-client'>
                  <div class="col-12">
                      <label for="yourName" class="form-label">Name</label>
                      <input type="text" name="prenom" onChange={e => handleChange(e)} class="form-control" id="yourName" required/>
                      <div class="invalid-feedback">Please, enter your name!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourFirstName" class="form-label">First Name</label>
                      <input type="text" name="nom" onChange={e => handleChange(e)} class="form-control" id="yourFirstName" required/>
                      <div class="invalid-feedback">Please, enter your first name!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourBirthday" class="form-label">Birthday</label>
                      <input type="date" name="dateNaissance" onChange={e => handleChange(e)} class="form-control" id="yourBirthday" required/>
                      <div class="invalid-feedback">Please, enter your date of birth!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourEmail" class="form-label">Email</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" name="email" onChange={e => handleChange(e)} class="form-control" id="yourEmail" required/>
                        <div class="invalid-feedback">Please choose a username.</div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Password</label>
                      <input type="password" name="password" onChange={e => handleChange(e)} class="form-control" id="yourPassword" required/>
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourCheckedPassword" class="form-label">Check your password</label>
                      <input type="password" name="validationMotDePasse" onChange={e => handleChange(e)} class="form-control" id="yourCheckedPassword" required/>
                      <div class="invalid-feedback">Please enter your check password!</div>
                    </div>

                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="button" onClick={e=>log()}>Create Account</button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">Already have an account? <a href="login-client">Log in</a></p>
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