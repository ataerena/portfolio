import React from "react";
import "../styles/Home.scss";

interface IMilestoneItem {
    header: string;
    text: string;
}

const MileStoneItem: React.FC<IMilestoneItem> = ({header, text}) => {
    return (
        <div>
            <h3>
              {header}
            </h3>
            <span>
              {text}
            </span>
        </div>
    );
}

export default MileStoneItem;