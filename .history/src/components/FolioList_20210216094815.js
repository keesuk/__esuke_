import { NavLink } from "react-router-dom";

import { FolioListDiv, ImgButton } from "../css/SContent.js";
import { findCategory } from "../_data/_Functions.jsx";


const FolioList = ({folioArr, category}) => {

    const folioList = findCategory(folioArr, category)

    return(
        <FolioListDiv>
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