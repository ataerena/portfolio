import React from "react";
import "../styles/Home.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslate } from "../language/LanguageProvider";

interface IProjectItem {
    header: string;
    img_path: string;
    brief: string;
    documentation_link: string;
    github_link: string;
}

const ProjectItem: React.FC<IProjectItem> = ({header, img_path, brief, documentation_link, github_link}) => {
    const t = useTranslate();
    const img_alt_text = `${header} ${t('projects.misc.sample_img')}`;

    return (
        <div className="project-item border-bottom">
            <div className="top-section">
                <h2 className="no-margin-span">
                    {header}
                </h2>
                {
                    github_link !== "" ?
                    <Link to={github_link} target="_blank" className="--row-flex-start">
                        <FontAwesomeIcon icon={faGithub} style={{paddingRight: ".5em"}}/>
                        {t('projects.misc.repository')}
                    </Link>
                    : null
                }
            </div>

            {
                img_path !== "" ?
                <img src={img_path} alt={img_alt_text} />
                : null
            }

            <span>
                {brief}
            </span>

            {
                documentation_link !== "" ?
                <a href="/porfolio/files/SamuraiGameDocumentation.pdf" download="Samurai_Game_Documentation.pdf" className="--row-flex-start">
                    <FontAwesomeIcon icon={faFilePdf} />
                    {t('projects.misc.documentation')}
                </a>
                : null
            }
        </div>
    );
}

export default ProjectItem;