import React, { useState } from 'react';

import { useLanguage } from '../language/LanguageProvider';
import { useTranslate } from '../language/LanguageProvider';
import { LanguageType } from "../language/LanguageProvider";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faLanguage } from '@fortawesome/free-solid-svg-icons';

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

    const [cvActive, setCvActive] = useState<boolean>(false);
    const handleClickCv = () => {
        setCvActive(!cvActive);
    }
    const handleBlurCv = () => {
        setTimeout(() => {
            setCvActive(false);
        }, 100);
    }
    const handleTapEsc = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Escape") {
            setCvActive(false);
        }
    }

    return (
      <div className="TopNavbar" onKeyUp={(event) => handleTapEsc(event)}>
        <div className="navbar-group --row-flex-start">
            <div className="navbar-item">
                <a href="https://ataerena.github.io/portfolio/" className="navbar-link">
                    <FontAwesomeIcon icon={faHouse} style={{transform: "translateY(10%)"}} />
                    {t('navbar.home')}
                </a>
            </div>
        </div>

        <div className="navbar-group --row-flex-center" style={{fontSize: "1.2em", fontWeight: "bold"}}>            
            {t('navbar.portfolio')}
        </div>

        <div className="navbar-group --row-flex-end">
            <div className="navbar-item navbar-link navbar-link--no-hover" onBlur={handleBlurCv} tabIndex={0}>
                <span onClick={handleClickCv}>
                    {t('navbar.download_cv')}
                </span>

                {
                    cvActive ?
                    <div className="cv-buttons">
                        <a href="/portfolio/files/Ata_TR.pdf" download="Ozgecmis_AtaErenArslan.pdf" tabIndex={0}>
                            Türkçe
                        </a>
                        <a href="/portfolio/files/Ata_EN.pdf" download="Resume_AtaErenArslan.pdf" tabIndex={0}>
                            English
                        </a>
                    </div>
                    : null
                }
            </div>
            <div className="navbar-item navbar-link navbar-link--no-hover">
                <FontAwesomeIcon icon={faLanguage} style={{cursor: "default", transform: "translateY(15%)"}}/>
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