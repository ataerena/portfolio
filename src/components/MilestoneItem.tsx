import React from "react";
import "../styles/Home.scss";

interface IMilestoneItem {
    header: string;
    subheader: string;
    subheader2: string;
    text: string;
}

const MileStoneItem: React.FC<IMilestoneItem> = ({header,subheader, subheader2, text}) => {
    return (
        <div className="milestone-item">
            <h3>
              {header}
            </h3>
            {
              subheader ?
              <h4 className="--row-flex-start">
                {subheader} {subheader2 ? <h5>- {subheader2}</h5> : null}
              </h4>
              : null
            }
            <span>
              {text}
            </span>
        </div>
    );
}

export default MileStoneItem;