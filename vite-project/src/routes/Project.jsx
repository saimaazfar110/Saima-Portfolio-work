import React from "react";

import Navbar from "../components/Navbar";
import BeImg2 from "../components/BeImg2";
import Footer from "../components/Footer";
import Works from "../components/Works";


function Project() {
    return (
        <div>
            <Navbar />
            <BeImg2 heading="PROJECT." text="Some of my most recent works" />
            <Works />
            <Footer />
        </div>
    );
}

export default Project;