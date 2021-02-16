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
    const width = useWindowSize().width

    const cellEmArr = () => {
        const grid = grid(width)
        const len = folioList.length

        return new Array(len/grid)
    }
    
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
            {cellEmArr.map(i =>
                <div
                    className=".cellEmpty"
                    key={i}
                />
            )}
        </FolioListDiv>
    )
}

export default FolioList;