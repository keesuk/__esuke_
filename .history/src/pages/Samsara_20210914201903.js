import { useRef, createRef, useEffect } from "react";
import { portFolioContents, SamsaraContents } from "../_data/_Data.jsx";

import pageModules from "../components/Main/PageModules.jsx";
import { MainLayout } from "../components/_Layout.jsx";
import MainTitle from "../components/Main/MainTitle.jsx";
import LogoBox from "../components/Main/LogoBox.jsx";
import Footnote from "../components/Main/Footnote.jsx";
import FolioList from "../components/Main/FolioList.jsx"; 

import { marking, numbering } from "../_data/_Functions.jsx";    


const _Samsara = () => {
    const { name, footnote, title, category, color, logo, mainText, subText, image } = SamsaraContents

    const scrRef = useRef()
    
    useEffect(() => {
        scrRef.current.scrollIntoView()
    }, [])
    
    return(
        <MainLayout
            ref={scrRef}
        >
            <MainTitle
                color={color["sub"]}
                TorB={color["TorB"]}
                title={title}
                category={category}
            />
            <LogoBox 
                backGroundColor={color["main"]}
                logoTypeColor={"white"}
                logoBackColor={"black"}
                paddingTopBottom={"5"}
                paddingLeftRight={"32"}
                logo={logo}
            />
            <MainText 
                ref={styRefs.current[0]}
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
                marginTop={"8"}
                marginLeft={"30"}
                width={"80"}
                height={"50"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["0"]["img"]}/>
                    <Remark
                        marginTop={"0"}
                        marginBottom={"0"}
                        marginLeft={"0"}
                        marginRight={"0"}
                        LorR={"L"}
                        lineHeight={"1.4"}
                        color={""}
                    >
                        <span className="remarkEng">{image["0"]["txtEng"]}</span>
                        <span className="remarkKor">{image["0"]["txtKor"]}</span>
                    </Remark>
                </div>
            </OuterImgBox>
            <InnerImgBoxBackground 
                paddingTop={"13"}
                paddingBottom={"13"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"0"}
                marginBottom={"0"}
                color={image["imgBoxBack"]}
                ref={styRefs.current[1]}
            >
                <InnerImgBox 
                    width={"70"}
                    height={"60"}
                    LorR={"L"}
                    marginTop={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["1"]["img"]}/>
                        <Remark
                            marginTop={"0"}
                            marginBottom={"0"}
                            marginLeft={"0"}
                            marginRight={"0"}
                            LorR={"R"}
                            lineHeight={"1.4"}
                            color={"white"}
                        >
                            <span className="remarkEng">{image["0"]["txtEng"]}</span>
                            <span className="remarkKor">{image["0"]["txtKor"]}</span>
                        </Remark>
                    </div>
                </InnerImgBox>
                <InnerImgBox 
                    width={"70"}
                    height={"60"}
                    LorR={"L"}
                    marginTop={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["2"]["img"]}/>
                        <Remark
                            marginTop={"0"}
                            marginBottom={"0"}
                            marginLeft={"0"}
                            marginRight={"0"}
                            LorR={"R"}
                            lineHeight={"1.4"}
                            color={"white"}
                        >
                            <span className="remarkEng">{image["0"]["txtEng"]}</span>
                            <span className="remarkKor">{image["0"]["txtKor"]}</span>
                        </Remark>
                    </div>
                </InnerImgBox>
                <InnerImgBox 
                    width={"70"}
                    height={"60"}
                    LorR={"L"}
                    marginTop={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["3"]["img"]}/>
                        <Remark
                            marginTop={"0"}
                            marginBottom={"0"}
                            marginLeft={"0"}
                            marginRight={"0"}
                            LorR={"R"}
                            lineHeight={"1.4"}
                            color={"white"}
                        >
                            <span className="remarkEng">{image["0"]["txtEng"]}</span>
                            <span className="remarkKor">{image["0"]["txtKor"]}</span>
                        </Remark>
                    </div>
                </InnerImgBox>
                <SubText
                        marginTop={"5"}  
                        marginBottom={"3"}  
                        marginLeft={"0"}  
                        marginRight={"0"}
                        textWidth={"35"}
                        LorR={"R"}
                        HorV={"H"}
                        textColor={"white"}
                >
                    <div className="engContents" >
                        {subText["0"]["eng"]}
                    </div>
                    <div 
                        className="korContents"
                        dangerouslySetInnerHTML={{
                            __html : 
                                numbering(subText["0"]["kor"],
                                `<span class="korNum">`,
                                `</span>`
                        )}}
                    />
                </SubText>
            </InnerImgBoxBackground>
            <SubTitle
                marginTop={"10"}
                marginLeft={"10"}
            >
                <mark>see More</mark> :{category}
            </SubTitle>
            <FolioList
                folioArr={portFolioContents}
                category={category}
                name={name}
                divMargin={{
                    marginTop: "4",
                    marginLeft: "10",
                    marginRight: "5",
                    marginBottom: "5",
                }}/>
        </MainLayout>
    )
}

export default _Samsara;