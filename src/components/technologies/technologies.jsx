import React from 'react';
import "./styles/technologies.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Technologies = () => {
  return (
    <div className="carousel-container" style={{ width: "35%" }}>
    <Carousel 
        showThumbs={false} 
        autoPlay={true} 
        infiniteLoop={true}
        interval={2000}
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        swipeable={true}


    >
        <div>
            <img src="ruby-rails.svg" alt="Ruby on Rails" className="tech-badge" />
        </div>
        <div>
            <img src="ruby.svg" alt="Ruby" className="tech-badge" />
        </div>
        <div>
            <img src="git.svg" alt="git" className="tech-badge" />
        </div>
        <div>
            <img src="github.svg" alt="github" className="tech-badge" />
        </div>
        <div>
            <img src="postgresql.svg" alt="postgresql" className="tech-badge" />
        </div>
        <div>
            <img src="postman.svg" alt="postman" className="tech-badge" />
        </div>
        <div>
            <img src="heroku.svg" alt="heroku" className="tech-badge" />
        </div>
        <div>
            <img src="circle-ci.svg" alt="circleci" className="tech-badge" />
        </div>
        <div>
            <img src="html.svg" alt="html" className="tech-badge" />
        </div>
        <div>
            <img src="markdown.svg" alt="markdown" className="tech-badge" />
        </div>
        <div>
            <img src="css.svg" alt="css" className="tech-badge" />
        </div>
        {/* Add more technology icons */}
    </Carousel>
    </div>
);
};
export default Technologies;

