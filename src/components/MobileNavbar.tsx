import React, { useState } from 'react';

import { useLanguage } from '../language/LanguageProvider';
import { useTranslate } from '../language/LanguageProvider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import "../App.scss";
import "../styles/MobileNavbar.scss";
import { faLinkedin, faInstagram, faDiscord, faSteam, faSpotify, faGithub } from '@fortawesome/free-brands-svg-icons';

const MobileNavbar: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const t = useTranslate();

    const [menuActive, setMenuActive] = useState<boolean>(false);
    const handleClickMenu = ():void => {
        setMenuActive(!menuActive);
    }

    return (
      <div className="MobileNavbar">
        <div className="navbar-item">
            <a href="https://ataerena.github.io/portfolio/" className="navbar-link">
                <FontAwesomeIcon icon={faHouse} />
            </a>
        </div>

        <div className="navbar-item" onClick={handleClickMenu}>
            <FontAwesomeIcon icon={faBars} />
        </div>

        {
            menuActive ?
            <div className="app-menu">
                <FontAwesomeIcon icon={faBars} className="collapse-btn" onClick={() => setMenuActive(false)}/>

                <div className="menu-group">
                    <h4>
                        {t('navbar.language')}
                    </h4>
                    <div onClick={() => setLanguage("tr")} className={`menu-item ${language === "tr" ? "selected-language" : null}`}>
                        Türkçe
                    </div>
                    <div onClick={() => setLanguage("en")} className={`menu-item ${language === "en" ? "selected-language" : null}`}>
                        English            
                    </div>
                </div>

                <div className="menu-group">
                    <h4>
                        {t('navbar.download_cv')}
                    </h4>
                    <a style={{paddingTop: ".5em"}} href="/portfolio/files/Ata_TR.pdf" download="Ozgecmis_AtaErenArslan.pdf" tabIndex={0}>
                        Türkçe
                    </a>
                    <a style={{paddingTop: ".5em"}} href="/portfolio/files/Ata_EN.pdf" download="Resume_AtaErenArslan.pdf" tabIndex={0}>
                        English
                    </a>
                </div>

                <div className="menu-group">
                    
                    <h4>
                        {t('contact.contact&socials')}
                    </h4>

                    <div className="contact-item --row-flex-start">
                        <div>
                            <a href="https://www.linkedin.com/in/ata-eren-arslan-401504270/" target="_blank">
                                LinkedIn
                            </a>
                        </div>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>

                    <div className="contact-item --row-flex-start">
                        <div>
                            <a href="mailto:ataerena599@gmail.com">
                                ataerena599@gmail.com
                            </a>
                        </div>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>

                    <div className="contact-item --row-flex-start">
                        <div>
                            <a href="https://github.com/ataerena" target="_blank">
                                GitHub
                            </a>
                        </div>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>

                    <div className="contact-item --row-flex-start">
                        <div>
                            <a className="contact-item-no-hover">
                                ataerena
                            </a>
                        </div>
                        <FontAwesomeIcon icon={faDiscord} />
                    </div>

                    <div className="contact-item --row-flex-start">
                        <div>
                            <a href="https://steamcommunity.com/id/ataerena/" target="_blank">
                                Steam
                            </a>
                        </div>
                        <FontAwesomeIcon icon={faSteam} />
                    </div>

                    <div className="contact-item --row-flex-start">
                        <div>
                            <a href="https://www.instagram.com/ataerena/" target="_blank">
                                Instagram
                            </a>
                        </div>
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>

                    <div className="contact-item --row-flex-start">
                        <div>
                            <a href="https://open.spotify.com/user/impassable599?si=92444844d4794d02" target="_blank">
                                Spotify
                            </a>
                        </div>
                        <FontAwesomeIcon icon={faSpotify} />
                    </div>
                </div>
            </div>
            : null
        }
        
      </div>
    );
  }
  
  export default MobileNavbar;