import React from 'react';
import ScrollVelocity from './ScrollVelocity';
import ContactForm from './Form';
import Event from './Event';

import "./hero.css";
import { color } from 'framer-motion';

export default function Hero() {
    const velocity = 30; // Adjust the velocity as needed
    return (
        <div className="hero">
            <h1 id='heading'>TechYantra by Robotics Club</h1>
            <h3 className='subheading'>TechYantra 2025 is the annual tech and robotics fest of GEC Bholpur.
                A platform for students to explore, compete, and showcase their talent in robotics, coding, and innovation. Come solo or form a team—your ideas matter here.</h3>
            <br /><br />
            <div className="r-button">
                <a href="#form" > <button>Register Now</button> </a>
                <a href="#form" > <button>Contact Us</button> </a>
            </div>
            <br /> <br />

            <h2>🌟 Event Highlights</h2>

            <li> 🏛 Venue: GEC Bhojpur Campus</li>
            <li>👥 Participation: Individual or Team</li>
            <li>⚡ Last Date to Register: 09 September 2025</li>
            <li>📅 Event Date: 11-12 September 2025</li>
            <h2>📝 Who Can Apply?</h2>
            <p>All students from every semester are welcome to apply. Whether you’re a coding newbie or a tech whiz, we value your enthusiasm and fresh ideas!</p>

            <br /> <br />
            <ScrollVelocity
                texts={[
                    'Unleash Your Creativity!',
                    'Shape the Future of Tech!',
                    'Network with Innovators!',

                ]}
                velocity={velocity}
                className="custom-scroll-text"
            />
            <br /> <br />
            <Event />
            <br /> <br />

            <div className="form">
                <h2 id="form">Want to  Apply here!</h2>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScCWT209Cf7sCwgRyeJuaHWSqdtw8Tvs_YIEHyQbet_V2E4kA/viewform?embedded=true" width="100%" height="1400px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            <br /> <br />
            <div className="contact" id='contact'>
                <h2>📞 Contact Us</h2>
                <p>Email: <a href="abuardaansari66@gmail.com">abudardaansari66@gmail.com</a></p>
                <p>Phone: 6306057161</p>
                <p>Web Developent and Programming Contest </p>
                <b>Co-Ordinater - Abudarda Ansari</b>
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
                        <li>Saurav Singh - 7870918608</li>
                    </div>
                </div>
            </div>
        </div>



    );
}