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
    const { SubTitle, Remark, MainText, SubText, OuterImgBox, InnerImgBoxBackground, InnerImgBox, InnerIphoneMockupBox } = pageModules

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
                marginTop={"5"}
                marginLeft={"10"}
                width={"94"}
                height={"36"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["3"]["img"]}/>
                </div>
            </OuterImgBox>
            <OuterImgBox 
                marginTop={"2"}
                marginLeft={"12"}
                width={"30"}
                height={"10"}
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
                marginTop={"0"}
                marginLeft={"0"}
                width={"40"}
                height={"60"}
                LorR={"R"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["1"]["img"]}/>
                </div>
            </OuterImgBox>
            <InnerImgBoxBackground 
                paddingTop={"5"}
                paddingBottom={"7"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"0"}
                marginBottom={"0"}
                color={"#d3e6cc"}
                ref={styRefs.current[1]}
            >
                <InnerImgBox 
                    width={"100"}
                    height={"40"}
                    LorR={"L"}
                    marginTop={"3"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["6"]["img"]}/>
                    </div>
                </InnerImgBox>
                <InnerImgBox 
                    width={"57"}
                    height={"30"}
                    LorR={"R"}
                    marginTop={"2"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["7"]["img"]}/>
                    </div>
                </InnerImgBox>
                <InnerImgBox 
                    width={"35"}
                    height={"30"}
                    LorR={"L"}
                    marginTop={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["8"]["img"]}/>
                    </div>
                </InnerImgBox>
                <InnerImgBox 
                    width={"77"}
                    height={"38"}
                    LorR={"L"}
                    marginTop={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["4"]["img"]}/>
                    </div>
                </InnerImgBox>
                <SubText
                        marginTop={"0"}  
                        marginBottom={"0"}  
                        marginLeft={"0"}  
                        marginRight={"0"}
                        textWidth={"40"}
                        LorR={"R"}
                        HorV={"H"}
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
                marginTop={"3"}
                marginLeft={"9"}
                width={"100"}
                height={"40"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["2"]["img"]}/>
                </div>
            </OuterImgBox>
            <OuterImgBox 
                marginTop={"5"}
                marginLeft={"18"}
                width={"34.5"}
                height={"20"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["10"]["img"]}/>
                </div>
            </OuterImgBox>
            <OuterImgBox 
                marginTop={"-20"}
                marginLeft={"9"}
                width={"54"}
                height={"30"}
                LorR={"R"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["11"]["img"]}/>
                </div>
            </OuterImgBox>
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"10"}
                width={"45"}
                height={"40"}
                LorR={"L"}
                outlineYorN={"Y"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["12"]["img"]}/>
                </div>
            </OuterImgBox>
            <MainText 
                ref={styRefs.current[2]}
                marginTop={"15"}
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
                marginTop={"3"}
                marginLeft={"8"}
                width={"60"}
                height={"15"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["13"]["img"]}/>
                </div>
            </OuterImgBox>
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"0"}
                width={"25"}
                height={"10"}
                LorR={"R"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["14"]["img"]}/>
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
                marginTop={"0"}
                marginLeft={"4"}
                width={"43"}
                height={"55"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["15"]["img"]}/>
                    <Remark
                        marginTop={"-3"}
                        marginBottom={"0"}
                        marginLeft={"6"}
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
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"10"}
                width={"90"}
                height={"50"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["16"]["img"]}/>
                    <Remark
                        marginTop={"1"}
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
                paddingBottom={"10"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"0"}
                marginBottom={"0"}
                color={"#FFE8DD"}
                ref={styRefs.current[3]}
            >
                <InnerIphoneMockupBox
                    width={"40"}
                    LorR={"L"}
                    marginTop={"3"}
                    marginLeft={"-3"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["17"]["img"]}/>
                    </div>
                </InnerIphoneMockupBox>
                <SubText
                        marginTop={"35"}  
                        marginBottom={"0"}  
                        marginLeft={"0"}  
                        marginRight={"0"}
                        textWidth={"80"}
                        LorR={"R"}
                        HorV={"V"}
                        textColor={"black"}
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
                    width={"85"}
                    height={"35"}
                    LorR={"L"}
                    marginTop={"5"}
                    marginLeft={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["18"]["img"]}/>
                    </div>
                </InnerImgBox>
                <InnerImgBox 
                    width={"65"}
                    height={"46"}
                    LorR={"L"}
                    marginTop={"0"}
                    marginLeft={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["19"]["img"]}/>
                    </div>
                </InnerImgBox>
                <InnerIphoneMockupBox
                    width={"40"}
                    LorR={"L"}
                    marginTop={"0"}
                    marginLeft={"-3"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["20"]["img"]}/>
                    </div>
                </InnerIphoneMockupBox>
                <SubText
                        marginTop={"32"}  
                        marginBottom={"0"}  
                        marginLeft={"0"}  
                        marginRight={"0"}
                        textWidth={"80"}
                        LorR={"R"}
                        HorV={"V"}
                        textColor={"black"}
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
                    width={"34"}
                    height={"2"}
                    LorR={"L"}
                    marginTop={"3"}
                    marginLeft={"4.5"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["22"]["img"]}/>
                    </div>
                </InnerImgBox>
                <InnerImgBox 
                    width={"100"}
                    height={"70"}
                    LorR={"R"}
                    marginTop={"0"}
                    marginLeft={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["21"]["img"]}/>
                    </div>
                </InnerImgBox>
                <SubText
                        marginTop={"10"}  
                        marginBottom={"0"}  
                        marginLeft={"0"}  
                        marginRight={"0"}
                        textWidth={"52"}
                        LorR={"L"}
                        HorV={"V"}
                        textColor={"black"}
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
                    width={"100"}
                    height={"10"}
                    LorR={"R"}
                    marginTop={"5"}
                    marginLeft={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["23"]["img"]}/>
                    </div>
                </InnerImgBox>
                <InnerIphoneMockupBox
                    width={"40"}
                    LorR={"R"}
                    marginTop={"-5"}
                    marginLeft={"0"}
                    marginRight={"7"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["25"]["img"]}/>
                    </div>
                </InnerIphoneMockupBox>
                <InnerImgBox 
                    width={"36.5"}
                    height={"60"}
                    LorR={"L"}
                    marginTop={"8"}
                    marginLeft={"3"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["24"]["img"]}/>
                    </div>
                </InnerImgBox>
                <InnerIphoneMockupBox
                    width={"40"}
                    LorR={"L"}
                    marginTop={"0"}
                    marginLeft={"-3"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["20"]["img"]}/>
                    </div>
                </InnerIphoneMockupBox>
                <SubText
                        marginTop={"32"}  
                        marginBottom={"0"}  
                        marginLeft={"0"}  
                        marginRight={"0"}
                        textWidth={"80"}
                        LorR={"R"}
                        HorV={"V"}
                        textColor={"black"}
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

export default _WeDel;