import { NavLink } from "react-router-dom";

import { FolioListDiv, ImgButtonDiv } from "../css/SContent.js";
import { findCategory, useWindowSize, shuffle, getGrid } from "../_data/_Functions.jsx";
import { mentInEmptyCell } from "../_data/_Data.jsx";


export const FolioList = ({folioArr, category, divMargin, name}) => {
    const folioList = findCategory(folioArr, category, name)
    const length = folioList.length
    const mentArr = shuffle(mentInEmptyCell)
    const grid = getGrid(useWindowSize().width)
    
    let num

    if(grid >= length)num =  grid-length
    if(grid < length)num = grid-(length%grid)

    const emArr = mentArr.slice(0, num)
    
    return(
        <FolioListDiv 
            divMargin={divMargin}
            grid={grid}
        >
            {folioList.map(v => 
                <div 
                    className="cell" 
                    key={v["title"]}
                >
                    <NavLink to={v["title"]}>
                        <ImgButtonDiv color={v["color"]}/>
                        <img 
                            className="img" 
                            src={v["img"]} 
                            alt={""}/>
                        <div className="content_text">
                            <strong>{v["title"]}</strong> {v["category"]}
                        </div>
                    </NavLink>
                </div>)}
            {emArr !== Array(0) 
                ? emArr.map(v =>
                    <div
                        className="cellEmpty"
                        key={v}
                    >
                        <div className="ment">{v}</div>
                    </div>)
                : null}
        </FolioListDiv>
    )
}