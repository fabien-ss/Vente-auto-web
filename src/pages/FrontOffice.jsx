import React from "react";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import ImgLeft from "../component/ImgLeft";
import Card from '../assets/img/card.jpg';

function FrontOffice(){
    const items = [];
  for (let index = 0; index < 10; index++) {
      items.push(<ImgLeft img={Card} title="ok" text="ok" />);
  };
    return(
        <>
            <Header></Header>
            <SideBar></SideBar>
            <main id="main" class="main">
                <section class="section">
                    <div class="row">
                        <div class="col-lg-6">
                            {items}
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}

export default FrontOffice;