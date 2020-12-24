import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm(){
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage('Your email is invalid');
            }
            else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required`);
                }
                else {
                    setErrorMessage('');
                }
            }
            console.log('errorMessage', errorMessage);
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})  
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

    return(
        <section className="m-4">
            <h1 className="my-4 text-center">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div class="row mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div class="row mb-3">
                    <label htmlFor="email" className="form-label">Email Address:</label>
                    <input type="email" className="form-control" name="email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div class="row mb-3">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea name="message" rows="5" className="form-control" defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" className="btn">Submit</button>
            </form>
        </section>
    )
};

export default ContactForm;