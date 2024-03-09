import React from 'react';
import "./styles/exploring.css";
import { CSSTransition } from 'react-transition-group';


const Exploring = () => {
    const languages = [
        { name: 'Python', badge: "/python.svg", proficiency: 35 },
        { name: 'React', badge: "/react.svg", proficiency: 35 },
        { name: 'Tailwind css', badge: "/tailwindcss.svg", proficiency: 15 },
    ];

    return (
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade">

    <div className="exploring-section">
        <h2>Exploring</h2>
        <ul>
            {languages.map((language, index) => (
                <li key={index}>
                    <img src={language.badge} alt={language.name} className="language-badge" />
                    <div className="meter">
                        <span style={{ width: `${language.proficiency}%`, backgroundColor: 'rgb(0,255,0)' }}></span>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    </CSSTransition>

);
};

export default Exploring;


