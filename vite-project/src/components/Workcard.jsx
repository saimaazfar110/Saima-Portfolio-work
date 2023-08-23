import "./Workcardstyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

const Workcard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="image" />
            <h2 className="project-title">{props.title}</h2>
            <div className="-debetails">
                <p>{props.text}</p>
                <div className="pro-buttons-27">
                    <NavLink to={props.view}
                        className="button-27">
                        VIEW
                    </NavLink>
                    <NavLink to="url.com"
                        className="button-27">
                        SOURCE
                    </NavLink>
                </div>
            </div>
        </div>
    )
};

export default Workcard;
