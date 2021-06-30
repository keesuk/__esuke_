import styled from "styled-components";

import FolioList from "../components/FolioList.js";
import { portFolioContents } from "../_data/_Data.jsx";

import { MainLayout } from "../css/SMainLayout.js";
import { welcomeMention, otherSiteLink } from "../_data/_Data.jsx";


const HomePage = () => {
    return(
        <MainLayout>
            <IntroduceDiv>
                <div className="text">
                    {welcomeMention}
                </div>
                <div className="link">
                    {otherSiteLink.map(v =>
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
                folioArr={portFolioContents}
            />
        </MainLayout>
    )
}

export default HomePage;