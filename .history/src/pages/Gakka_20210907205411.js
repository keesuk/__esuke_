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
                paddingTopBottom={"8"}
                paddingLeftRight={"23"}
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
                    <img className="img" alt="" src={image["10"]["img"]}/>
                </div>
            </OuterImgBox>
            <OuterImgBox 
                marginTop={"4"}
                marginLeft={"8"}
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
            <InnerImgBoxBackground 
                paddingTop={"5"}
                paddingBottom={"5"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"10"}
                marginBottom={"0"}
                color={"#b5855b"}
                ref={styRefs.current[1]}
            >
                <InnerImgBox 
                    width={"80"}
                    height={"35"}
                    LorR={"L"}
                    marginTop={"5"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["3"]["img"]}/>
                    </div>
                </InnerImgBox>
                <InnerImgBox 
                    width={"80"}
                    height={"30"}
                    LorR={"R"}
                    marginTop={"5"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["4"]["img"]}/>
                    </div>
                </InnerImgBox>
                <InnerImgBox 
                    width={"70"}
                    height={"40"}
                    LorR={"L"}
                    marginTop={"5"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["5"]["img"]}/>
                    </div>
                </InnerImgBox>
                <SubText
                        marginTop={"0"}  
                        marginBottom={"5"}  
                        marginLeft={"0"}  
                        marginRight={"0"}
                        textWidth={"40"}
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
            <OuterImgBox 
                marginTop={"3"}
                marginLeft={"10"}
                width={"92"}
                height={"40"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["6"]["img"]}/>
                </div>
            </OuterImgBox>
            <OuterImgBox 
                marginTop={"4"}
                marginLeft={"0"}
                width={"38"}
                height={"45"}
                LorR={"R"}
                outlineYorN={"Y"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["1"]["img"]}/>
                </div>
            </OuterImgBox>
            <OuterImgBox 
                marginTop={"-23"}
                marginLeft={"14"}
                width={"49"}
                height={"45"}
                LorR={"L"}
                outlineYorN={"Y"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["2"]["img"]}/>
                </div>
            </OuterImgBox>
            <MainText 
                ref={styRefs.current[2]}
                marginTop={"10"}
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
            <InnerImgBoxBackground 
                paddingTop={"2"}
                paddingBottom={"5"}
                paddingLeft={"5"}
                paddingRight={"0"}
                marginTop={"5"}
                marginBottom={"0"}
                color={"#EAE7E0"}
                ref={styRefs.current[3]}
            >
                <InnerImgBox 
                    width={"100"}
                    height={"60"}
                    LorR={"L"}
                    marginTop={"5"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["8"]["img"]}/>
                    </div>
                </InnerImgBox>
                <SubText
                    marginTop={"0"}  
                    marginBottom={"5"}  
                    marginLeft={"10"}  
                    marginRight={"10"}
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
                marginTop={"5"}
                marginLeft={"10"}
                width={"70"}
                height={"35"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["12"]["img"]}/>
                </div>
            </OuterImgBox>
            <OuterImgBox 
                marginTop={"5"}
                marginLeft={"10"}
                width={"70"}
                height={"50"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["9"]["img"]}/>
                </div>
            </OuterImgBox>
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"10"}
                width={"49"}
                height={"45"}
                LorR={"L"}
                outlineYorN={"Y"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["7"]["img"]}/>
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

export default _Gakka;