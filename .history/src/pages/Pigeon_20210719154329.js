import { useRef, createRef } from "react";

import { numbering } from "../_data/_Functions.jsx";
import { portFolioContents, PigeonContents } from "../_data/_Data.jsx";

import pageModules from "../components/Main/PageModules.jsx";
import { MainLayout } from "../components/_Layout.jsx";
import { MainTitleDiv } from "../components/Main/Title.jsx";
import Footnote from "../components/Main/Footnote.jsx";
import FolioList from "../components/Main/FolioList.jsx";                                



const _Pigeon = () => {
    const { name, pageStyle ,marks ,title ,category ,color ,logo ,text, image } = PigeonContents
    const { SubTitle, TitleBoxLogo, Remark, MainText, SubText, OuterImgBox, InnerImgBoxBackground, InnerImgBox, Marks, } = pageModules

    const styRefs = useRef([])    
    styRefs.current = pageStyle.map(i => styRefs.current[i] = createRef())
    
    return(
        <MainLayout>
            <MainTitleDiv
                color={color["sub"]}
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
                <div className="engContents" >
                    <Marks>
                        <span className="text">
                            {marks["0"]["title"]}
                            <span className="num">
                                {marks["0"]["num"]}
                            </span>
                        </span>
                        <div className="marksIn">
                            <span className="marksInTitle">
                                {marks["0"]["title"]}/
                            </span>
                            <span className="marksInEng">
                                {marks["0"]["textEng"]}
                            </span>
                            <span className="marksInKor">
                                {marks["0"]["textKor"]}
                            </span>
                        </div>
                    </Marks> 
                    {text["0"]["eng"]}
                </div>
                <div 
                    className="korContents"
                    dangerouslySetInnerHTML={{
                        __html : 
                            numbering(text["0"]["kor"],
                            `<span class="korNum">`,
                            `</span>`
                    )}}
                />
            </MainText>
            <OuterImgBox 
                marginTop={"10"}
                marginBottom={"1"} 
                width={"60"}
                height={"30"}
                LorR={"L"}
                brightnessFilter={true}
            >
                <div className="box">
                    <img className="img" alt="" src={image["0"]["img"]}/>
                    <Remark
                        margin={"0"}
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
                ref={styRefs.current[1]}
            >
                <InnerImgBox 
                    height={"30"}
                    LorR={"L"}
                    marginTop={"0"}
                    marginBottom={"1"}
                >
                    <img className="img" alt="" src={image["1"]["img"]}/>
                </InnerImgBox>
                <InnerImgBox 
                    height={"30"}
                    LorR={"L"}
                    marginTop={"0"}
                    marginBottom={"1"}
                >
                    <img className="img" alt="" src={image["2"]["img"]}/>
                </InnerImgBox>
                <InnerImgBox 
                    height={"30"}
                    LorR={"L"}
                    marginTop={"0"}
                    marginBottom={"1"}
                >
                    <img className="img" alt="" src={image["3"]["img"]}/>
                </InnerImgBox>
                <InnerImgBox 
                    height={"30"}
                    LorR={"L"}
                    marginTop={"0"}
                    marginBottom={"1"}
                >
                    <img className="img" alt="" src={image["4"]["img"]}/>
                </InnerImgBox>
                <InnerImgBox 
                    height={"30"}
                    LorR={"L"}
                    marginTop={"0"}
                    marginBottom={"1"}
                >
                    <img className="img" alt="" src={image["5"]["img"]}/>
                </InnerImgBox>
                <InnerImgBox 
                    height={"30"}
                    LorR={"L"}
                    marginTop={"0"}
                    marginBottom={"1"}
                >
                    <img className="img" alt="" src={image["6"]["img"]}/>
                </InnerImgBox>   
                <SubText
                    marginTop={"5"}  
                    marginBottom={"5"}  
                    marginLeft={"5"}  
                    marginRight={"5"}  
                >

                </SubText>
            </InnerImgBoxBackground>
            <SubTitle>
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
                }}/>
        </MainLayout>
    )
}

export default _Pigeon;