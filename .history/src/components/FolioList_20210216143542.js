import { useCallback, useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { FolioListDiv, ImgButton } from "../css/SContent.js";
import { findCategory, useWindowSize } from "../_data/_Functions.jsx";


const FolioList = ({folioArr, category}) => {
    const folioList = findCategory(folioArr, category)
    const width = useWindowSize().width

    const [grid, setGrid ] = useState()

    const getGrid = () => {
        if(width >= 0 && width < 1024)setGrid(2)
        else if(width >= 1024 && width < 1500)setGrid(3)
        else if(width >= 1500)setGrid(4)
    }

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

        </FolioListDiv>
    )
}

export default FolioList;