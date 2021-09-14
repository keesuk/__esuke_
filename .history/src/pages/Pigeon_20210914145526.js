import { useRef, createRef, useEffect } from "react";
import { portFolioContents, PigeonContents } from "../_data/_Data.jsx";

import pageModules from "../components/Main/PageModules.jsx";
import { MainLayout } from "../components/_Layout.jsx";
import LogoBox from "../components/Main/LogoBox.jsx";
import FolioList from "../components/Main/FolioList.jsx"; 
import MainText from "../components/Main/MainText.jsx";
import MainTitle from "../components/Main/MainTitle.jsx"; 
import Footnote from "../components/Main/Footnote.jsx"; 
import OuterImgBox from "../components/Main/OuterImgBox.jsx"; 

import { numbering } from "../_data/_Functions.jsx";    


const _Pigeon = () => {
    const { name, footnote, title, category, color, logo, mainText, subText, image, bottomText } = PigeonContents
    const { SubTitle, Remark, SubText, InnerImgBoxBackground, InnerImgBox } = pageModules

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
                paddingTopBottom={"13"}
                paddingLeftRight={"10"}
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
            {/* <OuterImgBox 
                marginTop={"10"}
                width={"35"}
                height={"20"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"Y"}
                image={image["7"]}
            /> */}
            <OuterImgBox 
                marginTop={"-32"}
                marginLeft={"26"}
                width={"54.7"}
                height={"50"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"Y"}
                image={image["8"]}
                remark={{
                    marginTop: "1",
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
                marginTop={"8"}
                detailTop={"1"}
                interval={"4"}
                text={footnote[1]}
            />
            <MainText 
                marginTop={"8"}
                marginBottom={"0"}
                mainText={mainText["1"]}
                color={color["sub"]}
            />
            <Footnote
                marginTop={"10"}
                detailTop={"2.5"}
                interval={"7"}
                text={footnote[2]}
            />
            <InnerImgBoxBackground 
                paddingTop={"13"}
                paddingBottom={"13"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"10"}
                marginBottom={"0"}
                color={"black"}
            >

                <InnerImgBox 
                    width={"50"}
                    height={"34.5"}
                    LorR={"R"}
                    marginTop={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["0"]}/>
                        <Remark
                            marginTop={".5"}
                            marginBottom={"0"}
                            marginLeft={"0"}
                            marginRight={"0"}
                            LorR={"L"}
                            lineHeight={"1.4"}
                            color={"white"}
                        >
                            <span className="remarkEng">{bottomText["1"]["txtEng"]}</span>
                            <span className="remarkKor">{bottomText["1"]["txtKor"]}</span>
                        </Remark>
                    </div>
                </InnerImgBox>
                    <InnerImgBox 
                        width={"80"}
                        height={"34.5"}
                        LorR={"L"}
                        marginTop={"0"}
                    >
                        <div className="box">
                            <img className="img" alt="" src={image["1"]}/>
                        </div>
                    </InnerImgBox>
                <InnerImgBox 
                    width={"80"}
                    height={"34.5"}
                    LorR={"L"}
                    marginTop={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["2"]}/>
                    </div>
                </InnerImgBox>
                <InnerImgBox 
                    width={"80"}
                    height={"34.5"}
                    LorR={"L"}
                    marginTop={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["3"]}/>
                    </div>
                </InnerImgBox>
                <InnerImgBox 
                    width={"80"}
                    height={"34.5"}
                    LorR={"L"}
                    marginTop={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["4"]}/>
                    </div>
                </InnerImgBox>
                <InnerImgBox 
                    width={"80"}
                    height={"34.5"}
                    LorR={"L"}
                    marginTop={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["5"]}/>
                    </div>
                </InnerImgBox>
                <InnerImgBox 
                    width={"80"}
                    height={"40"}
                    LorR={"L"}
                    marginTop={"0"}
                >
                    <div className="box">
                        <img className="img" alt="" src={image["6"]}/>
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