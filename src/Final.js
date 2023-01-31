import React from "react";
import checkmark from "./images/icon-thank-you.svg"
import "./final.css"

function Final() {
    return(
        <div className="final-container">
            <img src={checkmark} alt="checkmark" />
            <h1 className="form-title">Thank you!</h1>
            <p className="form-description">Thanks for confirming your subscription! We hope you have<br/> fun using our platform. If you ever need support, please feel<br/> free to email us at support@loremgaming.com</p>
        </div>
    )
}

export default Final