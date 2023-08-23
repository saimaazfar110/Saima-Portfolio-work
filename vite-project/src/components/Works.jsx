import "./Workcardstyles.css";
import Workcard from "./Workcard";
import WorkCardData from "./Workcarddata";

import React from "react";

const Works = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {WorkCardData.map((val, ind) => {
                    return (
                        <Workcard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default Works;
