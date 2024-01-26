import React from 'react';
import Header from '../component/Header';
import SideBar from '../component/SideBar';
import TestChart from '../component/TestChart';

function BackOffice(){
    return(
        <>
            <Header></Header>
            <SideBar></SideBar>
            <main id="main" class="main">
                <TestChart></TestChart>
            </main>
        </>
    );
}

export default BackOffice;