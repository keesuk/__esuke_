import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { FolioListDiv, ImgButton } from "../css/SContent.js";
import { findCategory } from "../_data/_Functions.jsx";
  
function getWindowSize(win) {
    const { innerWidth: width, innerHeight: height } = win
    return { width, height}
}
  
const FolioList = ({folioArr, category}) => {
    const folioList = findCategory(folioArr, category)
    const [windowSize, setWindowSize] = useState()
    const len = folioList.length

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(getWindowSize(window))
        }
        window.addEventListener('resize', handleResize)
        console.log(windowSize)
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