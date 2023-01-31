import React from "react";
import "./stepFour.css"
import { priceContext } from "./index";

function StepFour() {

    const {setStepNumber, plan, addOn, paymentPeriod} = React.useContext(priceContext)
    const [planType, setPlanType] = React.useState("")
    const [total, setTotal] = React.useState(0)

    React.useEffect(() => {
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

            let temp = 0

            if(addOn.firstAddOn) {
                temp = temp + 1
            }

            if(addOn.secondAddOn) {
                temp = temp + 2
            }

            if(addOn.thirdAddOn) {
                temp = temp + 2
            }

            setTotal(temp + plan)
        }

        calculatePlan()
    })
    
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
                    <p className="plan-price">{`$${plan}/mo`}</p>
                </div>
                <hr/>
                {addOn.firstAddOn && <div className="add-on-summary">
                    <p className="add-on-title-summary">Online Service</p>
                    <p className="add-on-price">+$1/mo</p>
                </div>}
                {addOn.secondAddOn && <div className="add-on-summary">
                    <p className="add-on-title-summary">Larger storage</p>
                    <p className="add-on-price">+$2/mo</p>
                </div>}
                {addOn.thirdAddOn && <div className="add-on-summary">
                    <p className="add-on-title-summary">Customizable Profile</p>
                    <p className="add-on-price">+$2/mo</p>
                </div>}
            </div>
            <div className="plan-total">
                <p className="total-title">Total(per month)</p>
                <p className="total-price">{`+$${total}/mo`}</p>
            </div>
        </div>
    )
}

export default StepFour