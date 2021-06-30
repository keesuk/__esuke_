import styled from "styled-components";

import FolioList from "../components/FolioList.js";
import { all_portFolio } from "../_data/_Data.jsx";

import { RightDiv } from "../css/SMainLayout.js";
import { colors } from "../css/_Color.jsx";
import { welcomeMention, otherLink } from "../_data/_Data.jsx";


const HomePage = () => {
    return(
        <RightDiv>
            <IntroduceDiv>
                <div className="text">
                    {introDiv_introduce}
                </div>
                <div className="link">
                    {projects_link.map(v =>
                        <ALink 
                            color={v["color"]} 
                            href={v["link"]} 
                            key={v["title"]}
                        >
                            {v["title"]}
                        </ALink>
                    )}
                </div>  
            </IntroduceDiv>
            <FolioList 
                folioArr={all_portFolio}
            />
        </RightDiv>
    )
}

export default HomePage;