import styled from "styled-components";

import { portFolioContents } from "../_data/_Data.jsx";

import { MainLayout } from "../componenets/_Layout.jsx";
import { MainTitleDiv, LinkA } from "../componenets/_Main.jsx";
import { welcomeMention, otherSiteLink } from "../_data/_Data.jsx";


const HomePage = () => {
    return(
        <MainLayout>
            <MainTitleDiv>
                <div className="text">
                    {welcomeMention}
                </div>
                <div className="link">
                    {otherSiteLink.map(v =>
                        <LinkA 
                            color={v["color"]} 
                            href={v["link"]} 
                            key={v["title"]}
                        >
                            {v["title"]}
                        </LinkA>
                    )}
                </div>  
            </MainTitleDiv>
            <FolioList 
                folioArr={portFolioContents}
            />
        </MainLayout>
    )
}

export default HomePage;