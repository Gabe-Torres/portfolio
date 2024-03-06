import React from 'react';
import "./styles/exploring.css";

const Exploring = () => {
    const languages = [
        { name: 'Python', badge: "/python.svg", proficiency: 30 },
        { name: 'React', badge: "/react.svg", proficiency: 40 },
        { name: 'GraphQL', badge: "/graphql.svg", proficiency: 25 },
    ];

    return (
      <div className="exploring-section">
          <h2>Exploring</h2>
          <ul>
              {languages.map((language, index) => (
                  <li key={index}>
                      <img src={language.badge} alt={language.name} className="language-badge" />
                      <div className="meter">
                          <span style={{ width: `${language.proficiency}%` }}></span>
                      </div>
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default Exploring;


