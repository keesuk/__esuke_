import { useRef, createRef, useEffect } from "react";
import { portFolioContents, WeDelContents } from "../_data/_Data.jsx";

import pageModules from "../components/Main/PageModules.jsx";
import { MainLayout } from "../components/_Layout.jsx";
import { MainTitleDiv } from "../components/Main/Title.jsx";
import LogoBox from "../components/Main/LogoBox.jsx";
import Footnote from "../components/Main/Footnote.jsx";
import FolioList from "../components/Main/FolioList.jsx"; 

import { marking, numbering } from "../_data/_Functions.jsx";    


const _WeDel = () => {
    const { name, pageStyle, title, category, color, logo, mainText, subText, image } = WeDelContents
    const { SubTitle, Remark, MainText, SubText, OuterImgBox, InnerImgBoxBackground, InnerImgBox } = pageModules

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
            {pageStyle.map((v, i) =>
                <Footnote 
                    el={styRefs.current[i]}
                    text={v}
                    key={i}
                    ord={i}
                />
            )}
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
                paddingTopBottom={"3"}
                paddingLeftRight={"30"}
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
                marginTop={"7"}
                marginLeft={"36"}
                width={"55"}
                height={"0"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["0"]["img"]}/>
                    <Remark
                        marginTop={"2"}
                        marginBottom={"0"}
                        marginLeft={"0"}
                        marginRight={"3"}
                        LorR={"R"}
                        lineHeight={"1.4"}
                        color={""}
                    >
                        <span className="remarkEng">{image["0"]["txtEng"]}</span>
                        <span className="remarkKor">{image["0"]["txtKor"]}</span>
                    </Remark>
                </div>
            </OuterImgBox>
            <OuterImgBox 
                marginTop={"-10"}
                marginLeft={"9"}
                width={"52"}
                height={"100"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["1"]["img"]}/>
                </div>
            </OuterImgBox>
            <InnerImgBoxBackground 
                paddingTop={"5"}
                paddingBottom={"13"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"0"}
                marginBottom={"0"}
                color={"#d3e6cc"}
                ref={styRefs.current[1]}
            >
                <InnerImgBox 
                    width={"95"}
                    height={"10"}
                    LorR={"R"}
                    marginTop={"5"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["5"]["img"]}/>
                    </div>
                </InnerImgBox>
                <InnerImgBox 
                    width={"85"}
                    height={"40"}
                    LorR={"R"}
                    marginTop={"10"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["6"]["img"]}/>
                    </div>
                </InnerImgBox>
                <SubText
                        marginTop={"8"}  
                        marginBottom={"0"}  
                        marginLeft={"0"}  
                        marginRight={"0"}
                        textWidth={"50"}
                        LorR={"L"}
                        HorV={"V"}
                        textColor={"black"}
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
            <OuterImgBox 
                marginTop={"5"}
                marginLeft={"9"}
                width={"100"}
                height={"70"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["2"]["img"]}/>
                </div>
            </OuterImgBox>
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

export default _WeDel;