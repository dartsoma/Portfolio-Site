import React, { useState } from 'react';
	import "./Tab.css";

    function Tab ({ globalTab} ) {


    return (

    <>

    <div className="tabs">
            {globalTab === 0 && (
            <div className="home">


            </div>
            )}

            {globalTab === 1 && (
            <div className="models">

            

            </div>
            )}

            {globalTab === 2 && (
            <div className="projects">

            

            </div>
            )}

            {globalTab === 4 && (
            <div className="contact">

            

            </div>
            )}

            {globalTab === 3 && (
            <div className="faq">

            

            </div>
            )}

    </div>

    </>
   

    );
    }

    export default Tab;
