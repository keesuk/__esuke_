import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { FolioListDiv, ImgButton } from "../css/SContent.js";
import { findCategory, getWindowSize } from "../_data/_Functions.jsx";

  

const FolioList = ({folioArr, category}) => {
    const folioList = findCategory(folioArr, category)
    const [cellEmpty, setCellEmpty] = useState([])
    const [grid, setGrid ] = useState() 

    useEffect(() => {
        const handleResize = (win) => {
            const size = getWindowSize(win).width

            if(size >= 0 && size < 1024)setGrid(2)
            else if(size >= 1024 && size < 1500)setGrid(3)
            else if(size >= 1500)setGrid(4)

        }
        window.addEventListener('resize', handleResize(window))
        return () => window.removeEventListener('resize', handleResize)
    }, [])

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