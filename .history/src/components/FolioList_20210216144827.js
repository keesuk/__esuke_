import { useCallback, useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { FolioListDiv, ImgButton } from "../css/SContent.js";
import { findCategory, useWindowSize } from "../_data/_Functions.jsx";



function grid(width) {
    if(width >= 0 && width < 1024)return 2
    else if(width >= 1024 && width < 1500)return 3
    else if(width >= 1500)return 4
}


const FolioList = ({folioArr, category}) => {
    const folioList = findCategory(folioArr, category)
    const length = folioList.length
    const width = useWindowSize().width

    const emArr = new Array(parseInt(length/grid(width)))
    console.log(emArr)
    
    return(
        <FolioListDiv grid={grid(width)}>
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
            <div
                    className="cellEmpty"
                    key={i}
                />
            {/* {.map(i =>
                <div
                    className="cellEmpty"
                    key={i}
                />
            )} */}
        </FolioListDiv>
    )
}

export default FolioList;