import { NavLink } from "react-router-dom";

import { FolioListDiv, ImgButton } from "../css/SContent.js";


const FolioList = ({folioList}) => {
    return(
        <FolioListDiv>
            {folioList !== undefined ? folioList.map(v => 
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
            ): null}
        </FolioListDiv>
    )
}

export default FolioList;