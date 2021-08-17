import { useRef, createRef, useEffect } from "react";

import { portFolioContents, SeoulContents } from "../_data/_Data.jsx";

import pageModules from "../components/Main/PageModules.jsx";
import { MainLayout } from "../components/_Layout.jsx";
import { MainTitleDiv } from "../components/Main/Title.jsx";
import LogoBox from "../components/Main/LogoBox.jsx";
import Footnote from "../components/Main/Footnote.jsx";
import FolioList from "../components/Main/FolioList.jsx";     

import { numbering } from "../_data/_Functions.jsx";                               


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
                logo={logo}
            />
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
                marginTop={"4"}
                marginLeft={"8"}
                width={"40"}
                height={"40"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                ref={styRefs.current[1]}
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
            <OuterImgBox 
                marginTop={"8"}
                marginLeft={"8"}
                width={"78"}
                height={"28"}
                LorR={"R"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["1"]["img"]}/>
                </div>
            </OuterImgBox>
            <OuterImgBox 
                marginTop={"5"}
                marginLeft={"23"}
                width={"76"}
                height={"20"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["2"]["img"]}/>
                </div>
            </OuterImgBox>
            <MainText 
                marginTop={"8"}
                marginBottom={"10"}
            >
                <div className="engContents">
                    <MarkBox
                        color={color["sub"]}
                    >
                        <span className="text">
                            {mark["1"]["title"]}
                            <span className="num">
                                {mark["1"]["num"]}
                            </span>
                        </span>
                        <div className="markBoxInner">
                            <span className="titleText">
                                {mark["1"]["title"]}/
                            </span>
                            <span className="engText">
                                {mark["1"]["textEng"]}
                            </span>
                            <span className="korText">
                                {mark["1"]["textKor"]}
                            </span>
                        </div>
                    </MarkBox> 
                    {mainText["1"]["eng"]}
                </div>
                <div 
                    className="korContents"
                    dangerouslySetInnerHTML={{
                        __html : 
                            numbering(mainText["1"]["kor"],
                            `<span class="korNum">`,
                            `</span>`
                    )}}
                />
            </MainText>
            <InnerImgBoxBackground 
                paddingTop={"13"}
                paddingBottom={"13"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"0"}
                marginBottom={"0"}
                color={image["imgBoxBack"]}
                ref={styRefs.current[2]}
            >
                <InnerImgBox 
                    width={"55"}
                    height={"40"}
                    LorR={"L"}
                    marginTop={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["3"]["img"]}/>
                    </div>
                </InnerImgBox>
                <SubText
                        marginTop={"0"}  
                        marginBottom={"15"}  
                        marginLeft={"0"}  
                        marginRight={"0"}
                        textWidth={"90"}
                        LorR={"R"}
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
                <InnerImgBox 
                    width={"60"}
                    height={"40"}
                    LorR={"L"}
                    marginTop={"-30"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["4"]["img"]}/>
                    </div>
                </InnerImgBox>
                <SubText
                        marginTop={"-10"}  
                        marginBottom={"0"}  
                        marginLeft={"0"}  
                        marginRight={"0"}
                        textWidth={"100"}
                        LorR={"R"}
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
                <InnerImgBox 
                    width={"60"}
                    height={"40"}
                    LorR={"L"}
                    marginTop={"-10"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["5"]["img"]}/>
                    </div>
                </InnerImgBox>
                <SubText
                        marginTop={"-10"}  
                        marginBottom={"0"}  
                        marginLeft={"0"}  
                        marginRight={"0"}
                        textWidth={"100"}
                        LorR={"R"}
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
                <InnerImgBox 
                    width={"60"}
                    height={"40"}
                    LorR={"L"}
                    marginTop={"-10"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["6"]["img"]}/>
                    </div>
                </InnerImgBox>
                <InnerImgBox 
                    width={"55"}
                    height={"50"}
                    LorR={"L"}
                    marginTop={"-5"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["7"]["img"]}/>
                    </div>
                </InnerImgBox>
                <SubText
                        marginTop={"-10"}  
                        marginBottom={"0"}  
                        marginLeft={"0"}  
                        marginRight={"0"}
                        textWidth={"90"}
                        LorR={"R"}
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
                marginLeft={"8"}
                width={"50"}
                height={"23"}
                LorR={"L"}
                outlineYorN={"Y"}
                filterYorN={"Y"}
                ref={styRefs.current[3]}
            >
                <div className="box">
                    <img className="img" alt="" src={image["8"]["img"]}/>
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
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"0"}
                width={"60"}
                height={"68"}
                LorR={"R"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["9"]["img"]}/>
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
            <MainText 
                marginTop={"0"}
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
                marginTop={"5"}
                marginLeft={"10"}
                width={"80"}
                height={"40"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["10"]["img"]}/>
                    <Remark
                        marginTop={"0"}
                        marginBottom={"0"}
                        marginLeft={"0"}
                        marginRight={"0"}
                        LorR={"R"}
                        lineHeight={"1.4"}
                        color={""}
                    >
                        <span className="remarkEng">{image["10"]["txtEng"]}</span>
                        <span className="remarkKor">{image["10"]["txtKor"]}</span>
                    </Remark>
                </div>
            </OuterImgBox>
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"0"}
                width={"60"}
                height={"30"}
                LorR={"R"}
                outlineYorN={"Y"}
                filterYorN={"Y"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["11"]["img"]}/>
                    <Remark
                        marginTop={"0"}
                        marginBottom={"0"}
                        marginLeft={"0"}
                        marginRight={"0"}
                        LorR={"R"}
                        lineHeight={"1.4"}
                        color={""}
                    >
                        <span className="remarkEng">{image["11"]["txtEng"]}</span>
                        <span className="remarkKor">{image["11"]["txtKor"]}</span>
                    </Remark>
                </div>
            </OuterImgBox>
            <MainText 
                marginTop={"0"}
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
                marginTop={"5"}
                marginLeft={"12"}
                width={"70"}
                height={"50"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["12"]["img"]}/>
                    <Remark
                        marginTop={"1"}
                        marginBottom={"0"}
                        marginLeft={"0"}
                        marginRight={"0"}
                        LorR={"R"}
                        lineHeight={"1.4"}
                        color={""}
                    >
                        <span className="remarkEng">{image["10"]["txtEng"]}</span>
                        <span className="remarkKor">{image["10"]["txtKor"]}</span>
                    </Remark>
                </div>
            </OuterImgBox>
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"8"}
                width={"80"}
                height={"62"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["13"]["img"]}/>
                    <Remark
                        marginTop={"0"}
                        marginBottom={"0"}
                        marginLeft={"0"}
                        marginRight={"0"}
                        LorR={"R"}
                        lineHeight={"1.4"}
                        color={""}
                    >
                        <span className="remarkEng">{image["13"]["txtEng"]}</span>
                        <span className="remarkKor">{image["13"]["txtKor"]}</span>
                    </Remark>
                </div>
            </OuterImgBox>
            <MainText 
                marginTop={"0"}
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
                marginTop={"5"}
                marginLeft={"0"}
                width={"60"}
                height={"60"}
                LorR={"R"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["14"]["img"]}/>
                    <Remark
                        marginTop={"0"}
                        marginBottom={"0"}
                        marginLeft={"0"}
                        marginRight={"0"}
                        LorR={"L"}
                        lineHeight={"1.4"}
                        color={""}
                    >
                        <span className="remarkEng">{image["14"]["txtEng"]}</span>
                        <span className="remarkKor">{image["14"]["txtKor"]}</span>
                    </Remark>
                </div>
            </OuterImgBox>
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"8"}
                width={"50"}
                height={"50"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["15"]["img"]}/>
                    <Remark
                        marginTop={"0"}
                        marginBottom={"0"}
                        marginLeft={"0"}
                        marginRight={"0"}
                        LorR={"L"}
                        lineHeight={"1.4"}
                        color={""}
                    >
                        <span className="remarkEng">{image["15"]["txtEng"]}</span>
                        <span className="remarkKor">{image["15"]["txtKor"]}</span>
                    </Remark>
                </div>
            </OuterImgBox>
            {/* <SubTitle
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
                }}/> */}
        </MainLayout>
    )
}

export default _Seoul;