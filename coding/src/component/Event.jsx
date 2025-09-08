import React from 'react';
import "./event.css";
import { form } from 'framer-motion/client';

const events = [
    { title: "Idea Pitching", desc: "That crazy idea you once thought of, Maybe it's worth pitching!", pdf: "https://drive.google.com/file/d/16cYCwWZVgiuwnSDk9DoG2Yi2Fc7iZJFk/view?usp=drivesdk", form: "https://docs.google.com/forms/d/e/1FAIpQLSdHm-XGqxZ6hZa5HaoG3JWzk5oh--G2gZwtjLlkYHdCsDMkRg/viewform?usp=header",member:"Shobhit Rajan - 8252848748" },
    { title: "Circuit Designing", desc: "Showcase your circuit building skills.", pdf: "https://drive.google.com/file/d/17ZtEFOJONC48BGosL217Yp_aopIa1c23/view?usp=drivesdk",form:"https://docs.google.com/forms/d/e/1FAIpQLSdTmPzzuZqmLHsh_DMVw_QPr2nt8jcLsf_t28okf0GxAq1n8Q/viewform?usp=dialog",membar:"Shivam-6200892762" },
    { title: "Robo Sumo War", desc: "Compete with robots in a sumo-style showdown.", pdf: "https://drive.google.com/file/d/1732vLBhgdL3gVSupATBC25Z0Pnp6UYZ7/view?usp=drivesdk",form: "https://docs.google.com/forms/d/e/1FAIpQLSes5ENEZas-3hCjl0wqlfE9U_mQxshKQItOFgWyKcFw1ypizA/viewform",member:"Nand Swami - 7361974071" },
    { title: "Robo Race / Hurdle Mania", desc: "Speed and accuracy on an obstacle track.", pdf: "https://drive.google.com/file/d/16fA0ZNWZylgWUUp-U8DKWXLNqjd9B6al/view?usp=drivesdk",form: "https://docs.google.com/forms/d/e/1FAIpQLSf82xzkn7d6ysohMsFAAmyaiwmMiOIWOH88Ntyfeqvai6bjug/viewform?usp=sharing&ouid=10568440",member:"Abhijeet kr -9534349644" },
    { title: "Website Designing", desc: "Design creative and functional websites.", pdf: "https://drive.google.com/file/d/16Z_9153gLaTHdI1S2jv8CYopJABAu2fw/view?usp=drivesdk",form:"https://docs.google.com/forms/d/e/1FAIpQLSdvE8oWHYushYrMkP3d19zjZq1fHfDWERkTAiZmv7YCDYdaAQ/viewform?usp=header",member:"Aryan shivam - 8789127985" },
    { title: "Treasure Hunt", desc: "Decode clues and find the hidden prize.", pdf: "https://drive.google.com/file/d/16d4mSp6mPOjtZoKqvIu5tcwLj4Nh_JDC/view?usp=drivesdk", form: "https://forms.gle/JYTTYDC2zSaD77ML8",member:"Prashant - 9508633484" },
    { title: "Technical Quiz", desc: "2 Rounds (20 Questions + Exciting Buzzer Round).", pdf: "https://drive.google.com/file/d/16da-9qQNLH_eWGCa3EmZsYy7bFI2Joaa/view?usp=drivesdk",form:"https://docs.google.com/forms/d/e/1FAIpQLSdozatIS2wNJ-PyH0ELFD-LrfB60N0b9qnZgAieDwLoBgn5jQ/viewform?usp=dialog",member:"Vishal Kumar - 910219939" },
    { title: "Robo Soccer", desc: "Navigate your bot through a tricky Soccer.", pdf: "https://drive.google.com/file/d/16t9p6PIgeCp_4W1HRV7gkJiELcYJJPSC/view?usp=drivesdk",form:"https://docs.google.com/forms/d/e/1FAIpQLSf8w4c4KV1pWBc5fB9iI-GDkr0Qf-1lIQc_esrSv0ZfcLdx_A/viewform?usp=sharing&ouid=105684409600049133998",member:"Ravishankar kr-8292650394" }
];

export default function Event() {
    return (
        <div id='event' style={{ padding: "2rem" }}>
            <h1>Events</h1>
            <h3>
                This grand event will feature a series of exciting and knowledge-driven competitions designed to challenge your creativity, innovation, and technical skills:
            </h3>
            <br />
            <div className="event-cards-container">
                {events.map((ev, idx) => (
                    <div className="glass-card" key={idx}>
                        <h2>{ev.title}</h2>
                        <p>{ev.desc}</p>
                        <a
                            href={ev.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-btn"
                        >
                            View Details PDF
                        </a>
                        <a
                            href={ev.form}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-btn"
                        >
                            Participate Now
                        </a>
                        <p><strong>Contact:</strong> {ev.member}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}