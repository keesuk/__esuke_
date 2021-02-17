import { useCallback, useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { FolioListDiv, ImgButton } from "../css/SContent.js";
import { findCategory, useWindowSize } from "../_data/_Functions.jsx";



function getGrid(width) {
    if(width >= 0 && width < 1024)return 2
    else if(width >= 1024 && width < 1500)return 3
    else if(width >= 1500)return 4
}


const FolioList = ({folioArr, category}) => {
    const folioList = findCategory(folioArr, category)
    const length = folioList.length
    console.log(length)
    const grid = getGrid(useWindowSize().width)
    console.log(grid)

    const emArr = new Array(()=>{
        if(grid > length)return grid-length
        else if(grid < length)return grid-(length%grid)
        else return null
    }).fill("*")
    
    console.log(emArr)
    return(
        <FolioListDiv grid={grid}>
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
            {emArr !==[] ? emArr.map(index =>
                <div
                    className="cellEmpty"
                    key={index}
                />
            ): null}
        </FolioListDiv>
    )
}

export default FolioList;