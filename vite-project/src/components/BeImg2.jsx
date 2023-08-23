import "./BeImg2styles.css";

import React, { Component } from "react";

class BeImg2 extends Component {
    render() {

        return (
            <div className="be-img" >
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
};

export default BeImg2;