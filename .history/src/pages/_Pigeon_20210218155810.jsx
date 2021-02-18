import { useRef, createRef } from "react";

import PageStyle from "../components/_PageStyle.jsx";
import FolioList from "../components/FolioList.js";

import { RightDiv } from "../css/SMainLayout.js";
import { numbering } from "../_data/_Functions.jsx";
import { all_portFolio, PigeonContents } from "../_data/_Data.jsx";
import { 
    TitleDiv, 
    TitleLogoBox, 
    MainText, 
    ImgBoxOut,
    SubTitle, 
    ImgBoxBackground, 
    ImgBoxIn, 
    Marks,
    Remark } from "../css/SContent.js";


const _Pigeon = () => {
    const { 
        name,
        pageStyle, 
        marks, 
        title, 
        category, 
        color, 
        logo, 
        text, 
        image } = PigeonContents

    const styRefs = useRef([])    
    styRefs.current = pageStyle.map(i => styRefs.current[i] = createRef())
    
    return(
        <RightDiv>
            {pageStyle.map((v, i) =>
                <PageStyle 
                    el={styRefs.current[i]}
                    text={v}
                    key={i}
                    ord={i}
                />)}
            <TitleDiv>
                <mark>{title}</mark><br/>
                {category}
            </TitleDiv> 
            <TitleLogoBox color={color["main"]}>
                <div className="logoBox">
                    <div className="logo">
                        {logo}
                    </div>
                </div>
            </TitleLogoBox>
            <MainText ref={styRefs.current[0]}>
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
            <ImgBoxOut 
                marginTop={"10"}
                marginBottom={"1"} 
                width={"60%"}
                height={"30"}
                unit={"vw"}
                LorR={"L"}
                borderColor={"#f1f1f1"}
                isWhite={true}
            >
                <div className="box">
                    <img className="img" alt="" src={image["0"]["img"]}/>
                    <Remark
                        margin={"0"}
                        LorR={"R"}
                        lineHeight={"1.4"}
                        unit={"rem"}
                        Color={"#222222"}
                    >
                        <span className="remarkEng">{image["0"]["txtEng"]}</span>
                        <span className="remarkKor">{image["0"]["txtKor"]}</span>
                    </Remark>
                </div>
            </ImgBoxOut>
            <ImgBoxBackground 
                color={"#000000"} 
                paddingTop={"13"}
                paddingBottom={"13"}
                paddingLeft={"5"}
                paddingRight={"5"}
                unit={"vw"}
                ref={styRefs.current[1]}
            >
                <ImgBoxIn height={"30"}>
                    <img className="img" alt="" src={image["1"]["img"]}/>
                </ImgBoxIn>
                <ImgBoxIn height={"30"}>
                    <img className="img" alt="" src={image["2"]["img"]}/>
                </ImgBoxIn>
                <ImgBoxIn height={"30"}>
                    <img className="img" alt="" src={image["3"]["img"]}/>
                </ImgBoxIn>
                <ImgBoxIn height={"30"}>
                    <img className="img" alt="" src={image["4"]["img"]}/>
                </ImgBoxIn>
                <ImgBoxIn height={"30"}>
                    <img className="img" alt="" src={image["5"]["img"]}/>
                </ImgBoxIn>
                <ImgBoxIn height={"30"}>
                    <img className="img" alt="" src={image["6"]["img"]}/>
                </ImgBoxIn>   
            </ImgBoxBackground>
            <SubTitle>
                <mark>see More</mark> :{category}
            </SubTitle>
            <FolioList
                folioArr={all_portFolio}
                category={category}
                name={name}
                divMargin={{
                    marginTop: "4",
                    marginLeft: "10",
                    marginRight: "5",
                }}/>
        </RightDiv>
    )
}

export default _Pigeon;

