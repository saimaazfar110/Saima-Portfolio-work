import "./BeImgstyles.css";

import React from "react";
import IntroImg from "../assets/123.jpg";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const BeImg = () => {

    return (
        <div className="be">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p>HI, I'M A <br></br>

                    <TypeAnimation
                        repeat={Infinity}
                        wrapper="b"
                        sequence={[
                            'WEB DEVELOPER ',
                            1000,
                            'GRAPHIC DESIGNER',
                            1000,
                        ]}
                    />
                </p>
                <h1> Stack Mern Developer </h1>
                <div>
                    <Link to="/proect" className="button-27">Projects</Link>
                    <Link to="/contact" className="button-27 ">Contact</Link>
                </div>
            </div>
        </div>
    )
};

export default BeImg;
