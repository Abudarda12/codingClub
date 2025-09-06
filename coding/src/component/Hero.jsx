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
                <a href="#event" > <button>Register Now</button> </a>
                <a href="#contact" > <button>Contact Us</button> </a>
            </div>
            <br /> <br />

            <h2 className='event-highlight'> Event Highlights</h2>

            <div className="highlight">
                <li>Venue: GEC Bholpur Campus</li>
                <li>Dates: 11–12 September 2025</li>
                <li>Participation: Solo or Team</li>
                <li>Registration closes: 9 September 2025</li>
            </div>
            <br />
            <h2>Who Can Join?</h2>
            <p>Open to all students, across all semesters and branches. No prior experience required—just enthusiasm and curiosity.</p>

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

            
            <br /> <br />
            <div className="contact" id='contact'>
                <h2>📞 Contact Us</h2>
                <p>Email: <a href="gecbhojpur@gmail.com">gecbhojpur@gmail.com</a></p>
                <p>Phone: 6182-222140
                </p>
                <p>Robotics Club</p>
      
                <div className="member">
                    <div className="prof">
                        <h3>Prof. Incharge</h3>
                        <li>Prof. Pallavi</li>
                        <li>Dr. Sanjeev Kumar</li>
                        <li>Prof. Surbhi Sakshi</li>
                        <li>Prof. Jitendra Kumar</li>
                    </div>
                    <div className="coordinator">
                        <h3>Student Coordinators</h3>
                        <li>Nand Swami - 7361974071</li>
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