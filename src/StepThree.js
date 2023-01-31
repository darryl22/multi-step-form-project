import React from "react";
import "./stepThree.css"
import { priceContext } from "./index";

function StepThree() {

    const {addOn, setAddOn} = React.useContext(priceContext)

    return(
        <div>
            <h1 className="form-title">Pick add-ons</h1>
            <p className="form-description">Add-ons help enhance your gaming experience.</p>
            <div className="add-on" style={{backgroundColor: addOn.firstAddOn ? "hsl(217, 100%, 97%)" : "white"}}>
                <div className="inner">
                    <input type="checkbox" checked={addOn.firstAddOn} onChange={() => setAddOn(prev => {
                        return {
                            ...prev,
                            firstAddOn: !prev.firstAddOn
                        }
                    })}/>
                    <div>
                        <p className="add-on-title">Online Service</p>
                        <p className="add-on-desc">Access to multiplayer games</p>
                    </div>
                </div>
                <p className="price">+$1/mo</p>
            </div>
            <div className="add-on" style={{backgroundColor: addOn.secondAddOn ? "hsl(217, 100%, 97%)" : "white"}}>
                <div className="inner">
                    <input type="checkbox" checked={addOn.secondAddOn} onChange={() => setAddOn(prev => {
                        return {
                            ...prev,
                            secondAddOn: !prev.secondAddOn
                        }
                    })}/>
                    <div>
                        <p className="add-on-title">Larger storage</p>
                        <p className="add-on-desc">Extra 1TB of cloud save</p>
                    </div>
                </div>
                <p className="price">+$2/mo</p>
            </div>
            <div className="add-on" style={{backgroundColor: addOn.thirdAddOn ? "hsl(217, 100%, 97%)" : "white"}}>
                <div className="inner">
                    <input type="checkbox" checked={addOn.thirdAddOn} onChange={() => setAddOn(prev => {
                        return {
                            ...prev,
                            thirdAddOn: !prev.thirdAddOn
                        }
                    })}/>
                    <div>
                        <p className="add-on-title">Customizable Profile</p>
                        <p className="add-on-desc">Custom theme on your profile</p>
                    </div>
                </div>
                <p className="price">+$2/mo</p>
            </div>
        </div>
    )
}

export default StepThree