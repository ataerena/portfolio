import React from 'react';
import "../styles/Contact.scss";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faInstagram, faLinkedin, faSpotify, faSteam } from '@fortawesome/free-brands-svg-icons';
import { useTranslate } from '../language/LanguageProvider';

const Contact: React.FC = () => {
    const t = useTranslate();

    return (
      <div className="Contact">
        <h2 className="no-margin-span">
            {t('contact.contact&socials')}
        </h2>

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
                ataerena
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
    );
  }
  
  export default Contact;