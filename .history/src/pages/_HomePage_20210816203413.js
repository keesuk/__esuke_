import { useRef, useEffect } from "react";
import { portFolioContents } from "../_data/_Data.jsx";

import { MainLayout } from "../components/_Layout.jsx";
import { MainTitleDiv, LinkA } from "../components/Main/Title.jsx";
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
            <MainTitleDiv default>
                <div className="text">
                    {welcomeMention}
                    <span className="link">
                        {otherSiteLink.map(v =>
                            <LinkA 
                                color={v["color"]} 
                                href={v["link"]} 
                                key={v["title"]}
                                content={v["title"]}
                            >
                                {v["title"]}
                            </LinkA>)
                        }
                    </span>
                </div>
            </MainTitleDiv>
            <FolioList 
                divMargin={{
                    marginTop : "12",
                    marginBottom : "10",
                    marginLeft : "3.5",
                    marginRight : "5"
                }}
                folioArr={portFolioContents}
            />
        </MainLayout>
    )
}

export default HomePage;