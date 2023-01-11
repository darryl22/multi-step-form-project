import React from "react";
import "./step.css"

function Step(props) {
    return(
        <div className="step">
            <div className="step-number">{props.number}</div>
            <div>
                <p className="step-title">{props.step}</p>
                <p className="step-detail">{props.title}</p>
            </div>
        </div>
    )
}

export default Step