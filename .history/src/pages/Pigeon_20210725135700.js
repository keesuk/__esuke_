import { useRef, createRef, useEffect } from "react";

import { numbering } from "../_data/_Functions.jsx";
import { portFolioContents, PigeonContents } from "../_data/_Data.jsx";

import pageModules from "../components/Main/PageModules.jsx";
import { MainLayout } from "../components/_Layout.jsx";
import { MainTitleDiv } from "../components/Main/Title.jsx";
import Footnote from "../components/Main/Footnote.jsx";
import FolioList from "../components/Main/FolioList.jsx";                                



const _Pigeon = () => {
    const { name, pageStyle, mark, title, category, color, logo, mainText, subText, image } = PigeonContents
    const { SubTitle, TitleBoxLogo, Remark, MainText, SubText, OuterImgBox, InnerImgBoxBackground, InnerImgBox, MarkBox, } = pageModules

    const scrollRef = useRef() 
    const styRefs = useRef([])
       
    styRefs.current = pageStyle.map(i => styRefs.current[i] = createRef())

    useEffect(() => {
        scrollRef.current.scrollTo(0, 0)
        console.log(scrollRef)
    }, [])
    
    return(
        <MainLayout>
            <MainTitleDiv
                ref={scrollRef}
                color={color["sub"]}
                TorB={color["TorB"]}
            >
                <div className="text">
                    <mark>{title}</mark><br/>
                    {category}
                </div>
            </MainTitleDiv> 
            <TitleBoxLogo 
                backGroundColor={color["main"]}
                logoTypeColor={"white"}
                logoBackColor={"black"}
                paddingTopBottom={"16"}
                logoWidth={"50"}
            >
                <div className="logoBox">
                    <div className="logo">
                        {logo}
                    </div>
                </div>
            </TitleBoxLogo>
            <MainText 
                ref={styRefs.current[0]}
                marginTop={"8"}
                marginBottom={"0"}
            >
                <div className="engContents">
                    <MarkBox
                        color={color["sub"]}
                    >
                        <span className="text">
                            {mark["0"]["title"]}
                            <span className="num">
                                {mark["0"]["num"]}
                            </span>
                        </span>
                        <div className="markBoxInner">
                            <span className="titleText">
                                {mark["0"]["title"]}/
                            </span>
                            <span className="engText">
                                {mark["0"]["textEng"]}
                            </span>
                            <span className="korText">
                                {mark["0"]["textKor"]}
                            </span>
                        </div>
                    </MarkBox> 
                    {mainText["0"]["eng"]}
                </div>
                <div 
                    className="korContents"
                    dangerouslySetInnerHTML={{
                        __html : 
                            numbering(mainText["0"]["kor"],
                            `<span class="korNum">`,
                            `</span>`
                    )}}
                />
            </MainText>
            <OuterImgBox 
                marginTop={"10"}
                width={"60"}
                height={"32"}
                LorR={"L"}
                outlineYorN={"Y"}
                filterYorN={"Y"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["0"]["img"]}/>
                    <Remark
                        marginTop={"0"}
                        marginBottom={"0"}
                        marginLeft={"0"}
                        marginRight={"0"}
                        LorR={"R"}
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
                    width={"80"}
                    height={"40"}
                    LorR={"L"}
                    marginTop={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["1"]["img"]}/>
                        <Remark
                            marginTop={".5"}
                            marginBottom={"0"}
                            marginLeft={"0"}
                            marginRight={"0"}
                            LorR={"R"}
                            lineHeight={"1.4"}
                            color={image["1"]["color"]}
                        >
                            <span className="remarkEng">{image["1"]["txtEng"]}</span>
                            <span className="remarkKor">{image["1"]["txtKor"]}</span>
                        </Remark> 
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
                        textColor={subText["0"]["color"]}
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

export default _Pigeon;