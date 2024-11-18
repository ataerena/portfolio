import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


interface IRouteItem {
    name: string;
    to: string
}

const RouteItem: React.FC<IRouteItem> = ({name, to}) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(to);
    }

    return (
        <div className="route-item" onClick={handleNavigate}>
            <Link to={to}>
                {name}
                <FontAwesomeIcon icon={faArrowRight} />
            </Link>
        </div>
    );
}

export default RouteItem;