import React from "react";
import "./stepTwo.css"
import arcade from "./images/icon-arcade.svg"
import advanced from "./images/icon-advanced.svg"
import pro from "./images/icon-pro.svg"

import { priceContext } from "./index";

function StepTwo() {

    const {plan, setPlan, setPaymentPeriod} = React.useContext(priceContext)
    const [slider, setSlider] = React.useState(true)

    function handlePlan(amount) {
        if (slider) {
            setPlan(amount)
        }else {
            setPlan(amount * 10)
        }
        setPaymentPeriod(slider ? "monthly" : "yearly")
    }

    const sliderStyle = {
        justifyContent: slider ? "flex-start" : "flex-end",
    }

    const text = {
        color: slider ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"
    }

    const textTwo = {
        color: slider ? "hsl(231, 11%, 63%)" : "hsl(213, 96%, 18%)"
    }

    function toggleSlider() {
        setSlider(prev => !prev)
        setPlan(0)
    }
    return(
        <div>
            <h1 className="form-title">Select your plan</h1>
            <p className="form-description">You have the option of monthly or yearly billing.</p>
            <div className="plan-container">
                <div className="plan plan-one" onClick={() => handlePlan(9)} style={{backgroundColor: plan === 9 || plan === 90 ? "hsl(217, 100%, 97%)" : "white"}}>
                    <img src={arcade} alt="arcade"/>
                    <div>
                        <p className="first">Arcade</p>
                        <p className="second">{slider ? "$9/mo" : "$90/yr"}</p>
                        {slider && <p className="third">2 months free</p>}
                    </div>
                </div>
                <div className="plan plan-two" onClick={() => handlePlan(12)} style={{backgroundColor: plan === 12 || plan === 120 ? "hsl(217, 100%, 97%)" : "white"}}>
                    <img src={advanced} alt="advanced"/>
                    <div>
                        <p className="first">Advanced</p>
                        <p className="second">{slider ? "$12/mo" : "$120/yr"}</p>
                        {slider && <p className="third">2 months free</p>}
                    </div>
                </div>
                <div className="plan plan-three" onClick={() => handlePlan(15)} style={{backgroundColor: plan === 15 || plan === 150 ? "hsl(217, 100%, 97%)" : "white"}}>
                    <img src={pro} alt="pro"/>
                    <div>
                        <p className="first">Pro</p>
                        <p className="second">{slider ? "$15/mo" : "$150/yr"}</p>
                        {slider && <p className="third">2 months free</p>}
                    </div>
                </div>
            </div>

            <div className="month-year">
                <p style={text}>monthly</p>
                <div className="slider" onClick={toggleSlider} style={sliderStyle}>
                    <div className="slider-ball"></div>
                </div>
                <p style={textTwo}>yearly</p>
            </div>
        </div>
    )
}

export default StepTwo