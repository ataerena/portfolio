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
                <Link to="/" className="navbar-link">
                    <FontAwesomeIcon icon={faHouse} />
                    {t('navbar.home')}
                </Link>
            </div>
        </div>

        <div className="navbar-group --row-flex-center">            
            --page name--
        </div>

        <div className="navbar-group --row-flex-end">
            <div className="navbar-item">
                <a className="navbar-link" href="https://github.com/ataerena" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            <div className="navbar-item">
                <a className="navbar-link" href="https://www.linkedin.com/in/ata-eren-arslan-401504270/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
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