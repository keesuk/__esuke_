import { useRef, createRef, useEffect } from "react";
import { portFolioContents, GakkaContents } from "../_data/_Data.jsx";

import pageModules from "../components/Main/PageModules.jsx";
import { MainLayout } from "../components/_Layout.jsx";
import { MainTitleDiv } from "../components/Main/Title.jsx";
import LogoBox from "../components/Main/LogoBox.jsx";
import Footnote from "../components/Main/Footnote.jsx";
import FolioList from "../components/Main/FolioList.jsx"; 

import { marking, numbering } from "../_data/_Functions.jsx";    


const _Gakka = () => {
    const { name, pageStyle, title, category, color, logo, mainText, subText, image } = GakkaContents
    const { SubTitle, Remark, MainText, SubText, OuterImgBox, InnerImgBoxBackground, InnerImgBox } = pageModules

    const scrRef = useRef()
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
                paddingTopBottom={"9"}
                paddingLeftRight={"23"}
                logo={logo}
            />
            <MainText 
                marginTop={"8"}
                marginBottom={"0"}
                color={color["sub"]}
            >
                <div 
                    className="engContents"
                    dangerouslySetInnerHTML={{
                        __html : marking(
                            mainText["0"]["eng"],
                            mainText["0"]["mark"]["title"],
                            `<mark>
                                <span class="text">
                                    ${mainText["0"]["mark"]["title"]} <span class="num">${mainText["0"]["mark"]["num"]}</span>
                                </span>
                                <div class="markBoxInner">
                                    <span class="titleText">${mainText["0"]["mark"]["title"]}/</span>
                                    <span class="engText">${mainText["0"]["mark"]["textEng"]}</span>
                                    <span class="korText">${mainText["0"]["mark"]["textKor"]}</span>
                                </div>
                            </mark>`
                    )}}
                />
                <div 
                    className="korContents"
                    dangerouslySetInnerHTML={{
                        __html : numbering(
                            mainText["0"]["kor"],
                            `<span class="korNum">`,
                            `</span>`
                    )}}
                />
            </MainText>
            <OuterImgBox 
                marginTop={"7"}
                marginLeft={"10"}
                width={"60"}
                height={"40"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["0"]["img"]}/>
                </div>
            </OuterImgBox>
            <OuterImgBox 
                marginTop={"2"}
                marginLeft={"0"}
                width={"40"}
                height={"45"}
                LorR={"R"}
                outlineYorN={"Y"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["1"]["img"]}/>
                    <img className="img" alt="" src={image["2"]["img"]}/>
                </div>
            </OuterImgBox>
        </MainLayout>
    )
}

export default _Gakka;