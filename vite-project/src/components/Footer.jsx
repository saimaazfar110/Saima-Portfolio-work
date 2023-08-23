import "./Footerstyles.css";

import React from "react";
import { FaFacebook, FaGithub, FaLinkedin  } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <h4>About the Company</h4>
                    <p>This is me Saima Azfar.<br></br>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                        Sit amet tellus cras adipiscing enim eu turpis.
                        Id donec ultrices tincidunt arcu non. Tristique nulla aliquet
                        enim tortor at auctor urna. </p>
                </div>
                <div className="Right">
                    <div className="Social Media">
                        <a href="">
                            < FaFacebook
                                size={21}
                                style={{
                                    color: "#000", marginRight:
                                        "1rem"
                                }}
                            />
                        </a>
                        <a href="">
                            <FaGithub
                                size={21}
                                style={{
                                    color: "#000", marginRight:
                                        "1rem"
                                }}
                            />
                        </a>

                        <a href="">
                            <FaLinkedin
                                size={21}
                                style={{
                                    color: "#000", marginRight:
                                        "1rem"
                                }}
                            />
                        </a>

                    </div>
                </div>
            </div>
        </div >
    )
};

export default Footer;