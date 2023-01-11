import React from "react";
import "./stepTwo.css"
import arcade from "./images/icon-arcade.svg"
import advanced from "./images/icon-advanced.svg"
import pro from "./images/icon-pro.svg"

function StepTwo() {
    return(
        <div>
            <div className="plan-container">
                <div className="plan plan-one">
                    <img src={arcade} alt="arcade"/>
                    <p>Arcade</p>
                    <p>$9/mo</p>
                </div>
                <div className="plan plan-two">
                    <img src={advanced} alt="advanced"/>
                    <p>Advanced</p>
                    <p>$12/mo</p>
                </div>
                <div className="plan plan-three">
                    <img src={pro} alt="pro"/>
                    <p>Pro</p>
                    <p>$15/mo</p>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default StepTwo