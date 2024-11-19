import React from "react";
import "../styles/Home.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface IProjectItem {
    header: string;
    img_path: string;
    brief: string;
    page_link: string;
    github_link: string;
}

const ProjectItem: React.FC<IProjectItem> = ({header, img_path, brief, page_link, github_link}) => {
    const img_alt_text = `${header} sample image`; //TODO: add language on 'sample image'

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
                        View repository
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
                page_link !== "" ?
                <Link to={page_link} className="--row-flex-start">
                    Read more
                    <FontAwesomeIcon icon={faArrowRight} />
                </Link>
                : null
            }
        </div>
    );
}

export default ProjectItem;