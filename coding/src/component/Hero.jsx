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
            <br /> <br />
            <div className="contact" id='contact'>
                <h2>📞 Contact Us</h2>
                <p>Email: <a href="mailto:techyantra@gmail.com">techyantra@gmail.com</a></p>
                <p>Phone: +91-1234567890</p>
                <div className="member">
                    <div className="prof">
                        <h3>Prof. Incharge</h3>
                        <li>Prof. Pallavi</li>
                        <li>Dr. Sanjeev Kumar Sajjan</li>
                        <li>Prof. Surbhi Sakshi</li>
                        <li>Prof. Jitendra Kumar</li>
                    </div>
                    <div className="coordinator">
                        <h3>Student Coordinators</h3>
                        <li>Vishal Kumar - 910219939</li>
                        <li>Rishabh Jain - 7361974071</li>
                        <li>Ritik Gupta - 7870918608</li>
                        <li>Shobhit Rajan - 8252848748</li>
                    </div>
                </div>
            </div>
        </div>



    );
}