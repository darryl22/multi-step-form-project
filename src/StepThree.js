import React from "react";
import "./stepThree.css"
import { priceContext } from "./index";

function StepThree() {

    const {setAddOn} = React.useContext(priceContext)
    const [one, setOne] = React.useState(false)
    const [two, setTwo] = React.useState(false)
    const [three, setThree] = React.useState(false)

    function calculateTotal(num) {
        if (num === 1) {
            setOne(prev => !prev)
        }
        else if (num === 2) {
            setTwo(prev => !prev)
        } 
        else if (num === 3) {
            setThree(prev => !prev)
        }

        setAddOn({
            firstAddOn: one,
            secondAddOn: two,
            thirdAddOn: three
        })
    }

    return(
        <div>
            <h1 className="form-title">Pick add-ons</h1>
            <p className="form-description">Add-ons help enhance your gaming experience.</p>
            <div className="add-on" style={{backgroundColor: one ? "hsl(217, 100%, 97%)" : "white"}}>
                <div className="inner">
                    <input type="checkbox" checked={one} onChange={() => calculateTotal(1)}/>
                    <div>
                        <p className="add-on-title">Online Service</p>
                        <p className="add-on-desc">Access to multiplayer games</p>
                    </div>
                </div>
                <p className="price">+$1/mo</p>
            </div>
            <div className="add-on" style={{backgroundColor: two ? "hsl(217, 100%, 97%)" : "white"}}>
                <div className="inner">
                    <input type="checkbox" checked={two} onChange={() => calculateTotal(2)}/>
                    <div>
                        <p className="add-on-title">Larger storage</p>
                        <p className="add-on-desc">Extra 1TB of cloud save</p>
                    </div>
                </div>
                <p className="price">+$2/mo</p>
            </div>
            <div className="add-on" style={{backgroundColor: three ? "hsl(217, 100%, 97%)" : "white"}}>
                <div className="inner">
                    <input type="checkbox" checked={three} onChange={() => calculateTotal(3)}/>
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