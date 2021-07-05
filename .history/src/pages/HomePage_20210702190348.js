import { portFolioContents } from "../_data/_Data.jsx";

import { MainLayout } from "../components/_Layout.jsx";
import { MainTitleDiv, LinkA } from "../components/_Main.jsx";
import FolioList from "../components/Main/FolioList.jsx";
import { welcomeMention, otherSiteLink } from "../_data/_Data.jsx";


const HomePage = () => {
    return(
        <MainLayout>
            <MainTitleDiv default>
                <div className="text">
                    {welcomeMention}
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