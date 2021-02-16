import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { all_portFolio } from "../_data/_Functions.jsx";

const FolioList = () => {
    return(
        <FolioListDiv>
            {all_portFolio.map(v => 
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