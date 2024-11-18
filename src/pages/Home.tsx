import React from 'react';

import "../App.scss";
import "../styles/Home.scss";

const Home: React.FC = () => {
    return (
      <div className="Home">
        <div className="greetings">
          <h1>
            Hello! 
          </h1>
          <h2>
            My name is Ata and welcome to my portfolio!
          </h2>
        </div>

        <div className="who-i-am">
          <h3>
            Who I am
          </h3>
          <span>
            My full name is Ata Eren Arslan. I am a 23-year-old mechatronics engineering graduate from the University of Marmara.
            I currently work as a fullstack web developer but programming is also amongst my few set of hobbies which include working out, football and video games.
          </span>

          <h3>
            What is this page
          </h3>
          <span>
            This page is simply a hub that I can use to display my work in programming. 
            From here, you will be able to view all of my relevant experience in programming and my professional journey.
          </span>
        </div>
      </div>
    );
  }
  
  export default Home;