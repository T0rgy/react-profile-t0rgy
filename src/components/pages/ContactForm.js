import React, { useState } from "react";
import "../styles/ContactForm.css";
import { validateEmail } from "../utils/helpers";

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        console.log('Submit Form', formState);
      }
    };
  
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
      }
    };

    return(
        <div className="container">
            <h2 style={{marginBottom: 20, fontSize: 40}}>Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label style={{fontSize: 30}} htmlFor="name">Name:</label>
                    <input className="inputStyling" id="name" name="Name" type="text" placeholder="Name" defaultValue={name} onBlur={handleChange}></input> 
                </div>
                <div>
                    <label style={{fontSize: 30}} htmlFor="email">Email:</label>
                    <input className="inputStyling" id="email" name="Email" type="email" placeholder="Email" defaultValue={email} onBlur={handleChange}></input>    
                </div>
                <div>
                    <label style={{fontSize: 30}} htmlFor="message">Message:</label>
                    <textarea className="inputStyling" id="message" name="
                    Message" placeholder="Message" defaultValue={message} style={{height:300}} onBlur={handleChange}></textarea>                    
                </div>
                <button data-testid="button" className="button" type="submit">Submit</button>

                {errorMessage && (
                    <div>
                        <p style={{margin: 20, color: "red"}}className="error-text">{errorMessage}</p>
                    </div>
                )}
            </form>
        </div>
    )
}

export default ContactForm;