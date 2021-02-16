import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { FolioListDiv, ImgButton } from "../css/SContent.js";
import { findCategory, getWindowSize } from "../_data/_Functions.jsx";

  

const FolioList = ({folioArr, category}) => {
    const folioList = findCategory(folioArr, category)
    const len = folioList.length

    useEffect(() => {
        const handleResize = (win) => {
            console.log(getWindowSize(win))
        }
        
        window.addEventListener('resize', handleResize(window))
        return () => window.removeEventListener('resize', handleResize)
    }, []);

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
            <div className="cellBack"/>
        </FolioListDiv>
    )
}

export default FolioList;