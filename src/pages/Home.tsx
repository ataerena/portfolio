import React from 'react';

import RouteItem from '../components/RouteItem';

import "../App.scss";
import "../styles/Home.scss";
import { useTranslate } from '../language/LanguageProvider';

const Home: React.FC = () => {
    const t = useTranslate();

    return (
      <div className="MainFrame">
        <div className="greetings">
          <h1>
            {t('home.hello')}
          </h1>
          <h2>
            {t('home.welcome')}
          </h2>
        </div>

        <div className="who-i-am">
          <h3>
            {t('home.who_i_am')}
          </h3>
          <span>
            {t('home.who_i_am_desc')}
          </span>

          <h3>
            {t('home.this_page_is')}
          </h3>
          <span>
            {t('home.this_page_is_desc')}
          </span>
        </div>

        <div className="navigation-segment">
          <div>
            <h2>
              {t('navigation_menu.quick_navigation')}
            </h2>
          </div>

          <div className="quick-navigation">
            <RouteItem name={t('navigation_menu.education')} to="/education" />
            <RouteItem name={t('navigation_menu.experience')} to="/work-experience" />
            <RouteItem name={t('navigation_menu.projects')} to="/projects" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;