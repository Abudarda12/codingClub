import React from 'react';
import "./event.css";

const events = [
    { title: "Idea Pitching", desc: "Present innovative solutions for real-life problem statements.", pdf: "/pdfs/idea-pitching.pdf" },
    { title: "Circuit Designing", desc: "Showcase your circuit building skills.", pdf: "/pdfs/circuit-designing.pdf" },
    { title: "Robo Sumo War", desc: "Compete with robots in a sumo-style showdown.", pdf: "/pdfs/robo-sumo-war.pdf" },
    { title: "Robo Race / Hurdle Mania", desc: "Speed and accuracy on an obstacle track.", pdf: "/pdfs/robo-race-hurdle-mania.pdf" },
    { title: "Website Designing", desc: "Design creative and functional websites.", pdf: "/pdfs/website-designing.pdf" },
    { title: "Treasure Hunt", desc: "Decode clues and find the hidden prize.", pdf: "/pdfs/treasure-hunt.pdf" },
    { title: "Technical Quiz", desc: "2 Rounds (20 Questions + Exciting Buzzer Round).", pdf: "/pdfs/technical-quiz.pdf" },
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
                    </div>
                ))}
            </div>
        </div>
    );
}