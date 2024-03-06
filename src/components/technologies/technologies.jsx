import React from 'react';
import INFO from '../../data/user';
import "./styles/technologies.css";

const Technologies = () => {
    return (
        <div className="technologies-section">
            {INFO.technologies.map((tech, index) => (
                <div className="technology-badge" key={index}>
                    <img src={tech.badge} alt={tech.name} />
                </div>
            ))}
        </div>
    );
};

export default Technologies;

