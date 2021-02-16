import { NavLink } from "react-router-dom";

import { FolioListDiv, ImgButton } from "../css/SContent.js";
import { findCategory, useWindowSize, shuffle } from "../_data/_Functions.jsx";
import { mentInEmptyCell } from "../_data/_Data.jsx";


function getGrid(width) {
    if(width >= 0 && width < 1024)return 2
    else if(width >= 1024 && width < 1500)return 3
    else if(width >= 1500)return 4
}


const FolioList = ({folioArr, category, divMargin}) => {
    const folioList = findCategory(folioArr, category)
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
                        <ImgButton color={v["color"]}/>
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
                ? emArr.map((v, i) =>
                    <div
                        className="cellEmpty"
                        key={i}
                    >
                        {v}
                    </div>)
                : null}
        </FolioListDiv>
    )
}

export default FolioList;