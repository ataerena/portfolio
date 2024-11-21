import React from 'react';

import MilestoneItem from '../components/MilestoneItem';
import RouteItem from '../components/RouteItem';

import "../App.scss";
import "../styles/Home.scss";
import { useTranslate } from '../language/LanguageProvider';

const Experience: React.FC = () => {
    const t = useTranslate();

    return (
    <div className="MainFrame">
      <h1>
        {t('experience.header')}
      </h1>

      <MilestoneItem
        header={t('experience.experience_1.header')}
        subheader={t('experience.experience_1.subheader')}
        subheader2={t('experience.experience_1.subheader2')}
        text={t('experience.experience_1.text')}
      />

      <MilestoneItem
        header={t('experience.experience_2.header')}
        subheader={t('experience.experience_2.subheader')}
        subheader2={t('experience.experience_2.subheader2')}
        text={t('experience.experience_2.text')}
      />

      <div className="navigation-segment">
          <div>
            <h2>
              {t('navigation_menu.read_next')}
            </h2>
          </div>

          <div className="quick-navigation">
            <RouteItem name={t('navigation_menu.projects')} to="/projects" />
            <RouteItem name={t('navigation_menu.education')} to="/education" />
            <RouteItem name={t('navigation_menu.home')} to="/" />
          </div>
        </div>
    </div>
  );
}

export default Experience;