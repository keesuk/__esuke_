import { useRef, useEffect } from "react";

import { MainLayout } from "../components/_Layout.jsx";
import MainTitle from "../components/Main/MainTitle.jsx";
import FolioList from "../components/Main/FolioList.jsx";
import { welcomeMention, otherSiteLink } from "../_data/_Data.jsx";


const HomePage = () => {
    return(
        <MainLayout>
            <MainTitle
                color={"home"}
                isThin={false}
                title={welcomeMention}
                link={otherSiteLink}
            />
            <FolioList
                subTitle={null}
            />
        </MainLayout>
    )
}

export default HomePage;