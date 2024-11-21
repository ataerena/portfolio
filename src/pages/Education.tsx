import React from 'react';

import MilestoneItem from '../components/MilestoneItem';
import RouteItem from '../components/RouteItem';

import "../App.scss";
import "../styles/Home.scss";
import { useTranslate } from '../language/LanguageProvider';

const Education: React.FC = () => {
    const t = useTranslate();

    return (
        <div className="MainFrame">
          <h1>
            {t('education.header')}
          </h1>

          <MilestoneItem
            header={t('education.education_1.header')}
            subheader=""
            subheader2=""
            text={t('education.education_1.text')}
          />

          <MilestoneItem
            header={t('education.education_2.header')}
            subheader=""
            subheader2=""
            text={t('education.education_2.text')}
          />

          <div className="navigation-segment">
            <div>
              <h2>
                {t('navigation_menu.read_next')}
              </h2>
            </div>

            <div className="quick-navigation">
              <RouteItem name={t('navigation_menu.experience')} to="/work-experience" />
              <RouteItem name={t('navigation_menu.projects')} to="/projects" />
              <RouteItem name={t('navigation_menu.home')} to="/" />
            </div>
          </div>
        </div>
    );
}

export default Education;