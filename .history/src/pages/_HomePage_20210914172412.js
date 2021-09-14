import { useRef, useEffect } from "react";

import { MainLayout } from "../components/_Layout.jsx";
import MainTitle from "../components/Main/MainTitle.jsx";
import FolioList from "../components/Main/FolioList.jsx";
import { welcomeMention, otherSiteLink } from "../_data/_Data.jsx";


const HomePage = () => {
    const scrRef = useRef()
    
    useEffect(() => {
        scrRef.current.scrollIntoView()
    }, [])

    return(
        <MainLayout
            ref={scrRef}
        >
            <MainTitle
                color={"home"}
                TorB={"B"}
                title={welcomeMention}
                link={otherSiteLink}
            />
            <FolioList/>
        </MainLayout>
    )
}

export default HomePage;