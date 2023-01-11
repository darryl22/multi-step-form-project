import React from "react"
import ReactDOM from 'react-dom/client'
import "./main.css"
import Step from "./Step"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"

function Page() {
    return(
        <div className="main-container">
            <div className="active-steps">
                <Step
                    number = {1}
                    step = "STEP 1"
                    title = "YOUR INFO"
                />
                <Step
                    number = {2}
                    step = "STEP 2"
                    title = "SELECT PLAN"
                />
                <Step
                    number = {3}
                    step = "STEP 3"
                    title = "ADD-ONS"
                />
                <Step
                    number = {4}
                    step = "STEP 4"
                    title = "SUMMARY"
                />
            </div>
            <div className="form-content">
                <div>
                    <h1 className="form-title">Select your Plan</h1>
                    <p className="form-description">Please provide your name, email adress and phone number</p>
                    <StepTwo/>
                </div>
                <button className="page-button">Next Step</button>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page/>)