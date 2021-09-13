import { useRef, createRef, useEffect } from "react";
import { portFolioContents, OnvoyageContents } from "../_data/_Data.jsx";

import pageModules from "../components/Main/PageModules.jsx";
import { MainLayout } from "../components/_Layout.jsx";
import { MainTitleDiv } from "../components/Main/Title.jsx";
import LogoBox from "../components/Main/LogoBox.jsx";
import Footnote from "../components/Main/Footnote.jsx";
import FolioList from "../components/Main/FolioList.jsx"; 

import { marking, numbering } from "../_data/_Functions.jsx";    


const _Onvoyage = () => {
    const { name, pageStyle, title, category, color, logo, mainText, subText, image } = OnvoyageContents
    const { SubTitle, Remark, MainText, SubText, OuterImgBox, InnerImgBoxBackground, InnerImgBox, InnerHorizontalBrowserMockupBox } = pageModules

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
                paddingTopBottom={"14"}
                paddingLeftRight={"26"}
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
                marginTop={"4"}
                marginLeft={"0"}
                width={"60"}
                height={"45"}
                LorR={"R"}
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
                paddingTop={"5"}
                paddingBottom={"13"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"0"}
                marginBottom={"0"}
                color={"#242424"}
                ref={styRefs.current[1]}
            >
                <InnerHorizontalBrowserMockupBox
                    width={"100"}
                    LorR={"L"}
                    marginTop={"8"}
                    marginLeft={"-2"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["1"]["img"]}/>
                    </div>
                </InnerHorizontalBrowserMockupBox>
                <SubText
                        marginTop={"80"}  
                        marginBottom={"0"}  
                        marginLeft={"0"}  
                        marginRight={"0"}
                        textWidth={"60"}
                        LorR={"R"}
                        HorV={"V"}
                        textColor={"white"}
                >
                    <div className="titleContents">
                        <div className="eng">{subText["0"]["title"]["txtEng"]}</div>
                        <div className="kor">{subText["0"]["title"]["txtKor"]}</div>
                    </div>
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
                <InnerHorizontalBrowserMockupBox
                    width={"70"}
                    LorR={"R"}
                    marginTop={"2"}
                    marginLeft={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["2"]["img"]}/>
                    </div>
                </InnerHorizontalBrowserMockupBox>
                <InnerHorizontalBrowserMockupBox
                    width={"70"}
                    LorR={"R"}
                    marginTop={"2"}
                    marginLeft={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["3"]["img"]}/>
                    </div>
                </InnerHorizontalBrowserMockupBox>
                <InnerHorizontalBrowserMockupBox
                    width={"70"}
                    LorR={"R"}
                    marginTop={"2"}
                    marginLeft={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["4"]["img"]}/>
                    </div>
                </InnerHorizontalBrowserMockupBox>
                <SubText
                        marginTop={"100"}  
                        marginBottom={"0"}  
                        marginLeft={"0"}  
                        marginRight={"0"}
                        textWidth={"60"}
                        LorR={"R"}
                        HorV={"V"}
                        textColor={"white"}
                >
                    <div className="titleContents">
                        <div className="eng">{subText["0"]["title"]["txtEng"]}</div>
                        <div className="kor">{subText["0"]["title"]["txtKor"]}</div>
                    </div>
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
                <InnerImgBox 
                    width={"80"}
                    height={"28"}
                    LorR={"R"}
                    marginTop={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["5"]["img"]}/>
                        <Remark
                            marginTop={"0"}
                            marginBottom={"0"}
                            marginLeft={"0"}
                            marginRight={"0"}
                            LorR={"L"}
                            lineHeight={"1.4"}
                            color={"white"}
                        >
                            <span className="remarkEng">{image["0"]["txtEng"]}</span>
                            <span className="remarkKor">{image["0"]["txtKor"]}</span>
                        </Remark>
                    </div>
                </InnerImgBox>
                <SubText
                        marginTop={"8"}  
                        marginBottom={"0"}  
                        marginLeft={"20"}  
                        marginRight={"0"}
                        textWidth={"65"}
                        LorR={"L"}
                        HorV={"V"}
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

                <InnerImgBox 
                    width={"80"}
                    height={"28"}
                    LorR={"L"}
                    marginTop={"12"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["6"]["img"]}/>
                    </div>
                </InnerImgBox>
                <InnerImgBox 
                    width={"80"}
                    height={"28"}
                    LorR={"L"}
                    marginTop={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["7"]["img"]}/>
                        <Remark
                            marginTop={"0"}
                            marginBottom={"0"}
                            marginLeft={"0"}
                            marginRight={"0"}
                            LorR={"L"}
                            lineHeight={"1.4"}
                            color={"white"}
                        >
                            <span className="remarkEng">{image["0"]["txtEng"]}</span>
                            <span className="remarkKor">{image["0"]["txtKor"]}</span>
                        </Remark>
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

export default _Onvoyage;