import React from 'react';

import MilestoneItem from '../components/MilestoneItem';
import RouteItem from '../components/RouteItem';

import "../App.scss";
import "../styles/Home.scss";

const Education: React.FC = () => {
    return (
        <div className="MainFrame">
          <h1>
            Education
          </h1>

          <MilestoneItem
            header="Beşiktaş Atatürk Anadolu Lisesi - Highschool"
            subheader=""
            subheader2=""
            text="
                I went to BAAL from 2015 to 2019. I didn't do much that is worth mentioning here. We've won the school football tournament with my team, so I guess that's cool to mention.
            "
          />

          <MilestoneItem
            header="Marmara University, Mechatronics Engineering, Bachelor's"
            subheader=""
            subheader2=""
            text="
              I've graduated from the university with a GPA of 2.98 -not so great, I know- in January 2025. 
              During my time in university, I started to have a further growing interest in the area of software rather than traditional mechatronics practices like automation or embedded systems.
              So, I've spent a total of 144 business days of internship in my last year here and I've worked on web development during the entirety 
              of these training periods in order to reach the end goal of becoming a software developer.
            "
          />

          <div className="navigation-segment">
            <div>
              <h2>
                Read Next
              </h2>
            </div>

            <div className="quick-navigation">
              <RouteItem name="Work Experience" to="/work-experience" />
              <RouteItem name="Projects" to="/projects" />
              <RouteItem name="Home" to="/" />
              {/* <RouteItem name="Work Experience" to="/work-experience" /> */}
            </div>
          </div>
        </div>
    );
}

export default Education;