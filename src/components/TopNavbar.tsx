import React from 'react';
import { Link } from 'react-router-dom';

import { useLanguage } from '../language/LanguageProvider';
import { useTranslate } from '../language/LanguageProvider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import "../App.scss";
import "../styles/TopNavbar.scss";

const TopNavbar: React.FC = () => {
    const { setLanguage } = useLanguage();
    const t = useTranslate();

    return (
      <div className="TopNavbar">
        <div className="navbar-group --row-flex-start">
            <div className="navbar-item">
                <a href="/" className="navbar-link">
                    <FontAwesomeIcon icon={faHouse} />
                    {t('navbar.home')}
                </a>
            </div>
        </div>

        <div className="navbar-group --row-flex-center">            
            Portfolio
        </div>

        <div className="navbar-group --row-flex-end">
            <div className="navbar-item navbar-link">
                {t('navbar.download_cv')}
            </div>
            <div className="navbar-item navbar-link">
                <FontAwesomeIcon icon={faLanguage} />
                {t('navbar.language')}
            </div>
        </div>
      </div>
    );
  }
  
  export default TopNavbar;