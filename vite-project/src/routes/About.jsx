import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BeImg2 from "../components/BeImg2";
import Aboutcontainer from "../components/Aboutcontainer";

const About = () => {
    return (
        <div>
            <Navbar />
            <BeImg2 heading="ABOUT." text="I'm a friendly Front-End Developer." />
            <Aboutcontainer />
            <Footer />
        </div>
    );
};

export default About;