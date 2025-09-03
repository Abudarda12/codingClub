import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("movnkeqk");
    if (state.succeeded) {
        return <p color='green'>Thanks for joining! <br />
            we'll get back to you soon. {name}</p>
            ;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Full Name
            </label>
            <input
                id="name"
                type="text"
                name="name"
            />
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            
            <label htmlFor="semester">
                Semester
            </label>
            <input
                id="semester"
                type="number"
                name="semester"
                min="1"
                max="8"
            />
            <ValidationError
                prefix="Semester"
                field="semester"
                errors={state.errors}
            />
            <label htmlFor="Branch">
                Branch
            </label>
            <input
                id="branch"
                type="text"
                name="branch"
            />
            <ValidationError
                prefix="Branch"
                field="branch"
                errors={state.errors}
            />
            <label htmlFor="phone">
                Phone Number
            </label>
            <input
                id="phone"
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
            />
            <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
            />
            <br /><br />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

export default ContactForm;