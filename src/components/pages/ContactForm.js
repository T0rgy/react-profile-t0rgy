import React, { useState } from "react";
import "../styles/ContactForm.css";
import {validateEmail} from "../utils/helpers";

function ContactForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const inputChange = (e) => {
        const inputType = e.target.name;
        const inputValue = e.target.value;

        if(inputType === "name") {
            setName(inputValue);
        }else if(inputType === "email") {
            setEmail(inputValue);
        }else if(inputType === "message") {
            setMessage(inputValue);
        }
    }

    const blurInput = (e) => {

        e.preventDefault();
        const inputType = e.target.name;

        setTimeout(() => {
            if(name === "" && inputType ==="name") {
                setError(true);
                setErrorMessage("Name field is required!");
                return;
            }else if(!validateEmail(email) && inputType === "email") {
                setError(true);
                setErrorMessage("Invalid email!");
                return;
            }else if(message === "" && inputType === "message") {
                setError(true);
                setErrorMessage("Message field is required!");
                return;
            }
        }, 1000)
        
    }

    const submit = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setMessage("");
        setSubmitted(true);
    }

    return(
        <div className="container">
            <form>
                <h2 style={{marginBottom: 20, fontSize: 40}}>Contact Me</h2>
                <label style={{fontSize: 20}} htmlFor="name">Name:</label>
                <input className="inputStyling" id="name" name="name" type="text" placeholder="Name" value={name} onChange={inputChange} onBlur={blurInput}></input>
                <label style={{fontSize: 20}} htmlFor="email" value={email}>Email:</label>
                <input className="inputStyling" id="email" name="email" type="text" placeholder="Email" onChange={inputChange} onBlur={blurInput}></input>
                <label style={{fontSize: 20}} htmlFor="message">Message:</label>
                <textarea className="inputStyling" id="message" name="message" placeholder="Message" value={message} style={{height:300}} onChange={inputChange} onBlur={blurInput}></textarea>
                <button className="button" type="submit" onClick={submit}>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;