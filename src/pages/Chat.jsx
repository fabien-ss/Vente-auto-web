import React from 'react';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/css/Chat.css';


function Chat(){
    return(
        <main>
            <div class="card">
            <div class="card-body">
              <h5 class="card-title">General Form Elements</h5>

             
              <form>
                
                  <div class="row mb-3" >
                    <div class="col-sm-10">
                      <ul>
                        <li class="sender"><textarea class="form-control" ></textarea></li>
                        <li><i class="bx bxs-send" style={{fontSize: "30px"}}></i></li>
                      </ul>
                    </div>
                  </div>
                   
                
              </form>

            </div>
            </div>

        </main>
    );
}

export default Chat;