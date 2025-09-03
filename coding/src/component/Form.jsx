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
                Full Name:
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
            <br /><br />
            <label htmlFor="email">
                Email Address:
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
            <br /><br />
            <label htmlFor="phone">
                Phone Number:
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
            <label htmlFor="semester">
                Semester:
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
            <br /><br />
            <label htmlFor="Branch">
                Branch:
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
            <br /><br />
            <label htmlFor="event">
                Event Interested In volunteering for:
            </label>
            <input
                id="event"
                type="text"
                name="event"
            />
            <ValidationError
                prefix="event"
                field="event"
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