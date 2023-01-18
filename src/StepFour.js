import React from "react";
import "./stepFour.css"
import { priceContext } from "./index";

function StepFour() {

    const {setStepNumber, plan, addOn, paymentPeriod} = React.useContext(priceContext)
    const [planType, setPlanType] = React.useState("")
    
    function calculatePlan() {
        if (plan === 9 || plan === 90) {
            setPlanType("arcade")
        }
        else if (plan === 12 || plan === 120) {
            setPlanType("advanced")
        }
        else if (plan === 15 || plan === 150) {
            setPlanType("pro")
        }
    }

    React.useEffect(() => {
        calculatePlan()
    }, [])
    return(
        <div>
            <h1 className="form-title">Finishing up</h1>
            <p className="form-description">Double-check everything looks OK before confirming.</p>
            <div className="blue-container">
                <div className="plan-summary">
                    <div>
                        <p className="summary-title">{`${planType} (${paymentPeriod})`}</p>
                        <button className="plan-change" onClick={() => setStepNumber(2)}>Change</button>
                    </div>
                    <p className="plan-price">$9/mo</p>
                </div>
                <hr/>
                <div className="add-on-summary">
                    <p className="add-on-title-summary">Online Service</p>
                    <p className="add-on-price">+$1/mo</p>
                </div>
                <div className="add-on-summary">
                    <p className="add-on-title-summary">Larger storage</p>
                    <p className="add-on-price">+$2/mo</p>
                </div>
            </div>
            <div className="plan-total">
                <p className="total-title">Total(per month)</p>
                <p className="total-price">+$12/mo</p>
            </div>
        </div>
    )
}

export default StepFour