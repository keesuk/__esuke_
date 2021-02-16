import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import { FolioListDiv, ImgButton } from "../css/SContent.js";
import { findCategory } from "../_data/_Functions.jsx";


const FolioList = ({folioArr, category}) => {
    const gridRef = useRef()
    const folioList = findCategory(folioArr, category)

    useEffect(() => {
        console.log(gridRef.current)
    },[gridRef.current])
    
    return(
        <FolioListDiv ref={gridRef}>
            {folioList.map(v => 
                <NavLink 
                    className="link"
                    to={v["title"]}
                    key={v["title"]}
                >
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
            )}
        </FolioListDiv>
    )
}

export default FolioList;