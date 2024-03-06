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
    >
        <div>
            <img src="ruby-rails.svg" alt="Ruby on Rails" />
        </div>
        <div>
            <img src="ruby.svg" alt="Ruby" />
        </div>
        <div>
            <img src="git.svg" alt="git" />
        </div>
        <div>
            <img src="github.svg" alt="github" />
        </div>
        <div>
            <img src="postgresql.svg" alt="postgresql" />
        </div>
        <div>
            <img src="postman.svg" alt="postman" />
        </div>
        <div>
            <img src="heroku.svg" alt="heroku" />
        </div>
        <div>
            <img src="circle-ci.svg" alt="circleci" />
        </div>
        <div>
            <img src="html.svg" alt="html" />
        </div>
        <div>
            <img src="markdown.svg" alt="markdown" />
        </div>
        <div>
            <img src="css.svg" alt="css" />
        </div>
        {/* Add more technology icons */}
    </Carousel>
    </div>
);
};
export default Technologies;

