import React from "react";
import "./step.css"

function Step(props) {

    const stepStyle = {
        backgroundColor: props.current === props.number || props.stepno === 5 ? "hsl(206, 94%, 87%)" : "transparent",
        color: props.current === props.number || props.stepno === 5 ? "hsl(213, 96%, 18%)" : "white"
    }
    return(
        <div className="step">
            <div className="step-number" style={stepStyle}>{props.number}</div>
            <div>
                <p className="step-title">{props.step}</p>
                <p className="step-detail">{props.title}</p>
            </div>
        </div>
    )
}

export default Step