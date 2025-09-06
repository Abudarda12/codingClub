import React from 'react';
import "./event.css";
import { form } from 'framer-motion/client';

const events = [
    { title: "Idea Pitching", desc: "That crazy idea you once thought of, Maybe it's worth pitching!", pdf: "https://drive.google.com/file/d/16cYCwWZVgiuwnSDk9DoG2Yi2Fc7iZJFk/view?usp=drivesdk", form: "https://docs.google.com/forms/d/e/1FAIpQLSdHm-XGqxZ6hZa5HaoG3JWzk5oh--G2gZwtjLlkYHdCsDMkRg/viewform?usp=header" },
    { title: "Circuit Designing", desc: "Showcase your circuit building skills.", pdf: "/pdfs/circuit-designing.pdf" },
    { title: "Robo Sumo War", desc: "Compete with robots in a sumo-style showdown.", pdf: "/pdfs/robo-sumo-war.pdf" },
    { title: "Robo Race / Hurdle Mania", desc: "Speed and accuracy on an obstacle track.", pdf: "/pdfs/robo-race-hurdle-mania.pdf" },
    { title: "Website Designing", desc: "Design creative and functional websites.", pdf: "https://drive.google.com/file/d/16Z_9153gLaTHdI1S2jv8CYopJABAu2fw/view?usp=drivesdk" },
    { title: "Treasure Hunt", desc: "Decode clues and find the hidden prize.", pdf: "https://drive.google.com/file/d/16d4mSp6mPOjtZoKqvIu5tcwLj4Nh_JDC/view?usp=drivesdk", form: "https://docs.google.com/forms/d/e/1FAIpQLScnU6m8bX4Hjv2Yk3rYk7k3bFqv5c8F5gKX0g/viewform?usp=header" },
    { title: "Technical Quiz", desc: "2 Rounds (20 Questions + Exciting Buzzer Round).", pdf: "https://drive.google.com/file/d/16da-9qQNLH_eWGCa3EmZsYy7bFI2Joaa/view?usp=drivesdk" },
    { title: "Robo Soccer", desc: "Navigate your bot through a tricky Soccer.", pdf: "/pdfs/robo-soccer.pdf" }
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
                    </div>
                ))}
            </div>
        </div>
    );
}