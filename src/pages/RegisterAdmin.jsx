import {useState} from 'react';
import React from 'react';
import '../assets/css/style.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css'; 

function RegisterClient() {
  const [state, setState] = useState({
    name: "",
    first_name: "",
    birthday: "",
    email: "",
    password: "",
    password_check: ""
  })

  const handleChange = (event) => {
    console.log(event);
    const data = event.target.value;
    setState({
      ...state,
       [event.target.name]: data
    })  
  }

  const sendData = () => {
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
                    <h5 class="card-title text-center pb-0 fs-4">Create an Administrator Account</h5>
                    <p class="text-center small">Enter your personal details to create account</p>
                  </div>

                  <form class="row g-3 needs-validation" novalidate action='login-admin'>
                    <div class="col-12">
                      <label for="yourName" class="form-label">Name</label>
                      <input type="text" name="name" onChange={e => handleChange(e)} class="form-control" id="yourName" required/>
                      <div class="invalid-feedback">Please, enter your name!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourFirstName" class="form-label">First Name</label>
                      <input type="text" name="first_name" onChange={e => handleChange(e)} class="form-control" id="yourFirstName" required/>
                      <div class="invalid-feedback">Please, enter your first name!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourBirthday" class="form-label">Birthday</label>
                      <input type="date" name="birthday" onChange={e => handleChange(e)} class="form-control" id="yourBirthday" required/>
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
                      <input type="password" name="password_check" onChange={e => handleChange(e)} class="form-control" id="yourCheckedPassword" required/>
                      <div class="invalid-feedback">Please enter your check password!</div>
                    </div>

                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit" onClick={sendData}>Create Account</button>
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