import styled from "styled-components";

import { portFolioContents } from "../_data/_Data.jsx";

import { MainLayout } from "../components/_Layout.jxs";
import { MainTitleDiv, LinkA } from "../components/_Main.jxs";
import FolioList from "../components/Main/FolioList.jsx";
import { welcomeMention, otherSiteLink } from "../_data/_Data.jsx";


const HomePage = () => {
    console.log(MainLayout)
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