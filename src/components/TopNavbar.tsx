import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useLanguage } from '../language/LanguageProvider';
import { useTranslate } from '../language/LanguageProvider';
import { LanguageType } from "../language/LanguageProvider";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import "../App.scss";
import "../styles/TopNavbar.scss";

interface ILanguages {
    text: string;
    value: LanguageType;
}

const TopNavbar: React.FC = () => {
    const languages: ILanguages[] = [
        {text: "English", value: "en"},
        {text: "Türkçe", value: "tr"}
    ];

    const { language, setLanguage } = useLanguage();
    const t = useTranslate();

    const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLang = e.target.value;
        const foundLanguage = languages.find(x => x.value === selectedLang)?.value;
        setLanguage(foundLanguage || "en");
    }

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

        <div className="navbar-group --row-flex-center" style={{fontSize: "1.2em", fontWeight: "bold"}}>            
            {t('navbar.portfolio')}
        </div>

        <div className="navbar-group --row-flex-end">
            <div className="navbar-item navbar-link">
                {t('navbar.download_cv')}
            </div>
            <div className="navbar-item navbar-link">
                
                <FontAwesomeIcon icon={faLanguage} />
                {
                    <select value={language} id="language-select" onChange={handleChangeLanguage}>
                        {
                            languages.map(item => {
                                return (
                                    <option key={item.value} value={item.value}>
                                        {item.text}
                                    </option>
                                )
                            })
                        }
                    </select>
                }
            </div>
        </div>
      </div>
    );
  }
  
  export default TopNavbar;