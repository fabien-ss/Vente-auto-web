import React, { useState, useEffect } from 'react';
import '../assets/css/style.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import { sendDataToApi } from '../fonction/fonction';
// Avant
// import { useHistory } from 'react-router-dom';

// Après
import { useNavigate } from 'react-router-dom';

function LoginClient() {

  const navigate = useNavigate();
    const [state, setState] = useState({
      email: "",
      motDePasse: ""
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

    async function sendData(event){
      event.preventDefault();
      console.log("preparing to send data");
      const response = await sendDataToApi('http://localhost:8080/admin/login', state, 'POST');
      try{
        console.log("response", response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.user);
        navigate("/back-office");
      }catch(Error){
        console.log("response", response);
        alert(response.data.error);
      }
      console.log("data ", state);
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
                        <h5 class="card-title text-center pb-0 fs-4">Login as Administrator</h5>
                        <p class="text-center small">Enter your email & password to login</p>
                      </div>
    
                      <form onSubmit={(event) => sendData(event)}>
    
                        <div class="col-12">
                          <label for="yourUsername" class="form-label">Email</label>
                          <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="email" name="email" onChange={e => handleChange(e)} class="form-control" id="yourUsername" required/>
                            <div class="invalid-feedback">Please enter your email.</div>
                          </div>
                        </div>
    
                        <div class="col-12">
                          <label for="yourPassword" class="form-label">Password</label>
                          <input type="password" name="motDePasse" onChange={e => handleChange(e)} class="form-control" id="yourPassword" required/>
                          <div class="invalid-feedback">Please enter your password!</div>
                        </div>
    
                        <div class="col-12">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                            <label class="form-check-label" for="rememberMe">Remember me</label>
                          </div>
                        </div>
                        <div class="col-12">
                          <button class="btn btn-primary w-100" type="submit">Login</button>
                        </div>
                        <div class="col-12">
                          <p class="small mb-0">Don't have account? <a href='register-admin' > Create an account here </a></p>
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

export default LoginClient;