import React from "react";
import "./stepOne.css"

function StepOne() {

    const [data, setData] = React.useState({
        name: "",
        email: "",
        phone: ""
    })

    function handleChange(event) {
        setData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
        console.log(data)
    }

    function handleSubmit(event) {
        event.preventDefault()

        setData({
            name: "",
            email: "",
            phone: ""
        })
    }
    return(
        <div>
            <h1 className="form-title">Personal info</h1>
            <p className="form-description">Please provide your name, email address and phone number.</p>
            <form className="form-input" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input className="input-box" type="text" name="name" placeholder="e.g Stephen King" value={data.name} onChange={handleChange}/>

                <label htmlFor="email">Email Address</label>
                <input className="input-box" type="email" name="email" placeholder="e.g stephenking@lorem.com" value={data.email} onChange={handleChange}/>

                <label htmlFor="phone">Phone Number</label>
                <input className="input-box" type="text" name="phone" placeholder="e.g +1 234 567 890" value={data.phone} onChange={handleChange}/>
            </form>
        </div>
    )
}

export default StepOne