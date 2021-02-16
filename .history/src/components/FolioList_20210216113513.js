import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import { FolioListDiv, ImgButton } from "../css/SContent.js";
import { findCategory } from "../_data/_Functions.jsx";


const FolioList = ({folioArr, category}) => {
    const folioList = findCategory(folioArr, category)

    return(
        <FolioListDiv>
            {folioList.map(v => 
            <div 
                className="cell" 
                key={v["title"]}
            >
                <NavLink to={v["title"]}>
                    <ImgButton color={v["color"]}/>
                    <img 
                        className="img" 
                        src={v["img"]} 
                        alt={""} 
                    />
                    <div className="content_text">
                        <strong>{v["title"]}</strong> {v["category"]}
                    </div>
                </NavLink>
            </div>)}
            <div className="cell"/>
        </FolioListDiv>
    )
}

export default FolioList;