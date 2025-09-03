import React from 'react';
import ScrollVelocity from './ScrollVelocity';
import ContactForm from './Form';

import "./hero.css";
import { color } from 'framer-motion';

export default function Hero() {
    const velocity = 30; // Adjust the velocity as needed
    return (
        <div className="hero"> 
            <h1 id='heading'>techYantra by Robotics Club</h1>
            <h2>🚀Join the Innovation Revolution</h2>
            <h3>Be the face of your <b>Semester</b></h3>
            <p>We’re looking for passionate students from each semester to join our organizing team as volunteers. This is your chance to take part in building something big!</p>
            <a href="#form" className="r-button"> <button>Register Now</button> </a>
            <br /> <br />
            
            <h2>🌟 Why Volunteer?</h2>
            <ul>
                <li>🎯 Gain leadership & team experience</li>
                <li>🤝 Network with industry experts</li>
                <li>💡 Learn new skills & technologies</li>
                <li>🏆 Earn certificates & swag</li>
                <li>🌐 Be part of a vibrant tech community</li>

            </ul>


            <ScrollVelocity
                texts={[
                    'Unleash Your Creativity!',
                    'Shape the Future of Tech!',
                    'Network with Innovators!',

                ]}
                velocity={velocity}
                className="custom-scroll-text"
            />

       <h2>📝 Who Can Apply?</h2>
         <p>All students from every semester are welcome to apply. Whether you’re a coding newbie or a tech whiz, we value your enthusiasm and fresh ideas!</p>
        <p>Ready to make an impact? Fill out the form below to apply as a volunteer and be part of something amazing!</p>
        <p>For any queries, reach out to us at <a href="mailto:abudardaansari66@gmail.com"></a> or contact us through our social media channels.</p>


        <div className="form">
            <h2 id="form">Volunteer Registration Form</h2>
            <ContactForm />

        </div>
        </div>



    );
}