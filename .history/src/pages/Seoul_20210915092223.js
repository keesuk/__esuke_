import { useRef, useEffect } from "react";
import { SeoulContents } from "../_data/_Data.jsx";                            

import { MainLayout } from "../components/_Layout.jsx";

import MainTitle from "../components/Main/MainTitle.jsx";
import LogoBox from "../components/Main/LogoBox.jsx";
import Footnote from "../components/Main/Footnote.jsx";
import FolioList from "../components/Main/FolioList.jsx"; 
import MainText from "../components/Main/MainText.jsx";
import OuterImgBox from "../components/Main/OuterImgBox.jsx";  
import InnerImgBox from "../components/Main/InnerImgBox.jsx";   

const _Seoul = () => {
    const { name, footnote, bottomText, mark, title, category, color, logo, mainText, subText, image } = SeoulContents

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
                paddingTopBottom={"7"}
                paddingLeftRight={"12"}
                logo={logo}
            />
            <Footnote
                marginTop={"8"}
                detailTop={"0"}
                interval={"0"}
                text={footnote[0]}
            />
            <MainText 
                marginTop={"8"}
                marginBottom={"0"}
                mainText={mainText["0"]}
                color={color["sub"]}
            />
            <OuterImgBox 
                marginTop={"8"}
                marginLeft={"8"}
                width={"78"}
                height={"28"}
                LorR={"R"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["1"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={"5"}
                marginLeft={"22"}
                width={"77"}
                height={"25"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["2"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={"4"}
                marginLeft={"8"}
                width={"50"}
                height={"60"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["0"]}
                remark={{
                    marginTop: "0",
                    marginBottom: "0",
                    marginLeft: "0",
                    marginRight: "0",
                    LorR: "R",
                    lineHeight: "1.4",
                    color: "black",
                    text: bottomText["0"]
                }}
            />
            <Footnote
                marginTop={"0"}
                detailTop={"2.5"}
                interval={"7"}
                text={footnote[2]}
            />
            <InnerImgBox
                paddingTop={"10"}
                paddingBottom={"13"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"0"}
                marginBottom={"0"}
                color={"black"}
                contents={[{ 
                        type: "Img", 
                        width: "90", 
                        height: "39", 
                        LorR: "L", 
                        marginTop: "0", 
                        img: image["1"],
                        remark: null
                    },{
                        type: "Text", 
                        marginTop: "0", 
                        marginBottom: "5",
                        marginLeft: "0",
                        marginRight: "0",
                        width: "40",
                        LorR: "R",
                        HorV: "H",
                        color: "white",
                        text: subText["0"]
                }]}
            />

            <InnerImgBoxBackground 
                paddingTop={"10"}
                paddingBottom={"13"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"0"}
                marginBottom={"0"}
                color={image["imgBoxBack"]}
                ref={styRefs.current[2]}
            >
                <InnerVerticalBrowserMockupBox
                    width={"38"}
                    LorR={"L"}
                    marginTop={"3"}
                    marginLeft={"1"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["3"]["img"]}/>
                    </div>
                </InnerVerticalBrowserMockupBox>
                <SubText
                        marginTop={"32"}  
                        marginBottom={"10"}  
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
                
                <InnerVerticalBrowserMockupBox
                    width={"38"}
                    LorR={"L"}
                    marginTop={"5"}
                    marginLeft={"1"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["4"]["img"]}/>
                    </div>
                </InnerVerticalBrowserMockupBox>
                <SubText
                        marginTop={"45"}  
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
                    width={"100"}
                    height={"20"}
                    LorR={"L"}
                    marginTop={"8"}
                    marginLeft={"15"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["5"]["img"]}/>
                    </div>
                </InnerImgBox>
                <InnerImgBox 
                    width={"90"}
                    height={"50"}
                    LorR={"L"}
                    marginTop={"5"}
                    marginLeft={"3.2"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["6"]["img"]}/>
                    </div>
                </InnerImgBox>
                <InnerVerticalBrowserMockupBox
                    width={"38"}
                    LorR={"L"}
                    marginTop={"-44"}
                    marginLeft={"1"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["16"]["img"]}/>
                    </div>
                </InnerVerticalBrowserMockupBox>
                <SubText
                        marginTop={"0"}  
                        marginBottom={"0"}  
                        marginLeft={"0"}  
                        marginRight={"0"}
                        textWidth={"48"}
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
                    width={"65"}
                    height={"65"}
                    LorR={"L"}
                    marginTop={"8"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["7"]["img"]}/>
                    </div>
                </InnerImgBox>
            </InnerImgBoxBackground>
            <OuterImgBox 
                marginTop={"8"}
                marginLeft={"10"}
                width={"54"}
                height={"26"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"Y"}
            >
                <div 
                    className="box"
                    ref={styRefs.current[3]}
                >
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
                marginLeft={"28"}
                width={"84"}
                height={"26"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["2"]["img"]}/>
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
                marginTop={"10"}
                marginLeft={"17"}
                width={"50"}
                height={"50"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
            >
                <div className="box">
                    <img className="img" alt="" src={image["15"]["img"]}/>
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

export default _Seoul;