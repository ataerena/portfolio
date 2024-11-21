import React from 'react';

import RouteItem from '../components/RouteItem';
import ProjectItem from '../components/ProjectItem';

import "../App.scss";
import "../styles/Home.scss";

// images //

import graduationImg from "../assets/graduation.png";
import aottg2eeImg from "../assets/aottg2ee.png";
import { useTranslate } from '../language/LanguageProvider';

const Projects: React.FC = () => {
    const t = useTranslate();

    return (
        <div className="MainFrame">
            <h1 className="no-margin-span" style={{borderBottom: 0}}>
                {t('projects.misc.header')}
            </h1>

            <span className="no-margin-span border-bottom">
                {t('projects.misc.description')}
            </span>

            <ProjectItem
                header={t("projects.project_1.header")}
                img_path={graduationImg}
                documentation_link=""
                github_link="https://github.com/ataerena/bitirme"
                brief={t("projects.project_1.description")}
            />

            <ProjectItem
                header={t("projects.project_2.header")}
                img_path={aottg2eeImg}
                documentation_link=""
                github_link="https://github.com/ZippyStew45/Aottg2-EM"
                brief={t("projects.project_2.description")}
            />

            <ProjectItem
                header={t("projects.project_3.header")}
                img_path=""
                documentation_link="/projects/samurai-game"
                github_link="https://github.com/ataerena/2DSamuraiGame"
                brief={t("projects.project_3.description")}
            />

            <ProjectItem
                header={t("projects.project_4.header")}
                img_path=""
                documentation_link=""
                github_link="https://github.com/ataerena/Square_2D"
                brief={t("projects.project_4.description")}
            />

            <div className="navigation-segment">
              <div>
                <h2>
                  {t('navigation_menu.read_next')}
                </h2>
              </div>

              <div className="quick-navigation">
                <RouteItem name={t('navigation_menu.experience')} to="/work-experience" />
                <RouteItem name={t('navigation_menu.education')} to="/education" />
                <RouteItem name={t('navigation_menu.home')} to="/" />
              </div>
            </div>
        </div>
    );
}

export default Projects;