import React from 'react';

import MilestoneItem from '../components/MilestoneItem';

import "../App.scss";
import "../styles/Home.scss";

const Experience: React.FC = () => {
    return (
    <div className="MainFrame">
      <h1>
        Experience
      </h1>

      <MilestoneItem
        header="InnoEM Consultancy Network"
        text="
          I joined InnoEM as an intern at the start of 2023 October. 
          Right after I joined, one of the staff members left and I was left as the sole frontend developer in the Sustainfinity project.
          So during my internship, I had a lot of oppornuties to grow my ability as a programmer and a frontend developer, especially using Vue.
          At the end of my internship, with mutual content, I've joined the team as a full-time staff member.
          After becoming a full-timer, I've started to slowly take on responsibilities on the backend development of the Sustainfinity project, which uses a stack of Node.js and PostgreSQL.
          I've gained knowledge server management, Git and Jira.
          As of writing this, I've been working at InnoEM for over a year now and I'm now comfortable working fullstack on a web application.
        "
      />

      <MilestoneItem
        header="Ulak Haberleşme"
        text="
          I've completed my internship of 72 work days at Ulak Haberleşme between July 2023 - October 2023.
          There, I worked on a side project that focused on creating a web based documentation application that needed to parse complex data into web pages.
          To achieve this, I used React for the interface and Python for parsing the data. 
          I've helped create an excel syntax that would determine links between all the complex data that I shared with the rest of the staff.
          At the end of my 72 days of internship, the project was near completed with only some polishing required.
        "
      />
    </div>
  );
}

export default Experience;