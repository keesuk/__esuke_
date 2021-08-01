import { useRef, createRef, useEffect } from "react";

import { numbering } from "../_data/_Functions.jsx";
import { portFolioContents, SeoulContents } from "../_data/_Data.jsx";

import pageModules from "../components/Main/PageModules.jsx";
import { MainLayout } from "../components/_Layout.jsx";
import { MainTitleDiv } from "../components/Main/Title.jsx";
import Footnote from "../components/Main/Footnote.jsx";
import FolioList from "../components/Main/FolioList.jsx";                                



const _Seoul = () => {
    const { name, pageStyle, mark, title, category, color, logo, mainText, subText, image } = SeoulContents
    const { SubTitle, Remark, MainText, SubText, OuterImgBox, InnerImgBoxBackground, InnerImgBox, MarkBox, } = pageModules

    
    const scrRef = useRef()
    const styRefs = useRef([])    

    styRefs.current = pageStyle.map(i => styRefs.current[i] = createRef())
    
    useEffect(() => {
        scrRef.current.scrollIntoView()
    }, [])

    return(
        <MainLayout
            ref={scrRef}
        >
            <MainTitleDiv
                color={color["sub"]}
                TorB={color["TorB"]}
            >
                <div className="text">
                    <mark>{title}</mark><br/>
                    {category}
                </div>
            </MainTitleDiv> 
            <LogoBox 
                backGroundColor={color["main"]}
                logoTypeColor={"white"}
                logoBackColor={"black"}
                paddingTopBottom={"13"}
                logo={logo}
            />
        </MainLayout>
    )
}

export default _Seoul;