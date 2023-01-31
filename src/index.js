import React from "react"
import ReactDOM from 'react-dom/client'
import "./main.css"
import Step from "./Step"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import StepFour from "./StepFour"
import Final from "./Final"

export const priceContext = React.createContext()

function Page() {

    const [stepNumber, setStepNumber] = React.useState(1)
    const [plan, setPlan] = React.useState(0)
    const [paymentPeriod, setPaymentPeriod] = React.useState("")
    const [addOn, setAddOn] = React.useState({
        firstAddOn: false,
        secondAddOn: false,
        thirdAddOn: false
    })

    function nextStep() {
        if (stepNumber < 5) {
            setStepNumber(prev => prev + 1)
        }
    }

    function prevStep() {
        if (stepNumber > 1) {
            setStepNumber(prev => prev - 1)
        }
    }
    return(
        <div className="main-container">
            <div className="active-steps">
                <Step
                    current = {stepNumber}
                    number = {1}
                    step = "STEP 1"
                    title = "YOUR INFO"
                />
                <Step
                    current = {stepNumber}
                    number = {2}
                    step = "STEP 2"
                    title = "SELECT PLAN"
                />
                <Step
                    current = {stepNumber}
                    number = {3}
                    step = "STEP 3"
                    title = "ADD-ONS"
                />
                <Step
                    current = {stepNumber}
                    number = {4}
                    step = "STEP 4"
                    title = "SUMMARY"
                    stepno = {stepNumber}
                />
            </div>
            <div className="form-content">
                <div>
                    <priceContext.Provider value={{plan, setPlan, addOn, setAddOn, setStepNumber, paymentPeriod, setPaymentPeriod}}>
                        {stepNumber === 1 && <StepOne/>}
                        {stepNumber === 2 && <StepTwo/>}
                        {stepNumber === 3 && <StepThree/>}
                        {stepNumber === 4 && <StepFour/>}
                        {stepNumber === 5 && <Final/>}
                    </priceContext.Provider>
                </div>
                <div className="buttons-container">
                    {stepNumber !== 1 && <button className="page-back" onClick={prevStep}>Go Back</button>}
                    <button className="page-button" onClick={nextStep}>{stepNumber < 4 ? "Next Step" : "Confirm"}</button>
                </div>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page/>)