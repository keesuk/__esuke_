import { useRef,  useEffect } from "react";
import { WeDelContents } from "../_data/_Data.jsx";

import { MainLayout } from "../components/_Layout.jsx";
import MainTitle from "../components/Main/MainTitle.jsx";
import LogoBox from "../components/Main/LogoBox.jsx";
import Footnote from "../components/Main/Footnote.jsx";
import FolioList from "../components/Main/FolioList.jsx"; 
import MainText from "../components/Main/MainText.jsx";
import OuterImgBox from "../components/Main/OuterImgBox.jsx";  
import InnerImgBox from "../components/Main/InnerImgBox.jsx"; 


const _WeDel = () => {
    const { name, footnote, title, category, color, logo, mainText, subText, bottomText, image } = WeDelContents

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
                paddingTopBottom={"5"}
                paddingLeftRight={"32"}
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
                colorWidth={"8.5"}
                colorSpeed={"1.2"}
            />
            <MainText 
                marginTop={"0"}
                marginBottom={"0"}
                mainText={mainText["1"]}
                color={color["sub"]}
                colorWidth={"8.5"}
                colorSpeed={"1.2"}
            />
            <OuterImgBox 
                marginTop={"5"}
                marginLeft={"7"}
                width={"95"}
                height={"38"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["3"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={"2"}
                marginLeft={"12"}
                width={"30"}
                height={"10"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["0"]}
                remark={{
                    marginTop: "2",
                    marginBottom: "0",
                    marginLeft: "0",
                    marginRight: "3",
                    LorR: "R",
                    lineHeight: "1.4",
                    color: "black",
                    text: bottomText["0"]
                }}
            />
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"0"}
                width={"43"}
                height={"62"}
                LorR={"R"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["1"]}
                remark={null}
            />
            <Footnote
                marginTop={"0"}
                detailTop={"1.8"}
                interval={"3"}
                text={footnote[1]}
            />
            <MainText 
                marginTop={"0"}
                marginBottom={"8"}
                mainText={mainText["2"]}
                color={color["sub"]}
                colorWidth={"8.5"}
                colorSpeed={"1.2"}
            />
            <Footnote
                marginTop={"0"}
                detailTop={"0"}
                interval={"8.5"}
                text={footnote[2]}
            />
            <InnerImgBox
                paddingTop={"5"}
                paddingBottom={"5"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"0"}
                marginBottom={"0"}
                color={"#d3e6cc"}
                contents={[{ 
                        type: "Img",
                        width: "100", 
                        height: "40", 
                        LorR: "R", 
                        marginTop: "3", 
                        img: image["6"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "57", 
                        height: "30", 
                        LorR: "R", 
                        marginTop: "2", 
                        img: image["7"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "35", 
                        height: "30", 
                        LorR: "L", 
                        marginTop: "0", 
                        img: image["8"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "77", 
                        height: "36", 
                        LorR: "L", 
                        marginTop: "0", 
                        img: image["4"],
                        remark: null
                    },{
                        type: "Text", 
                        marginTop: "0", 
                        marginBottom: "0",
                        marginLeft: "0",
                        marginRight: "0",
                        width: "50",
                        LorR: "R",
                        HorV: "V",
                        color: "black",
                        text: subText["0"]
                }]}
            />
            <OuterImgBox 
                marginTop={"3"}
                marginLeft={"9"}
                width={"100"}
                height={"40"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["2"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={"5"}
                marginLeft={"18"}
                width={"34.5"}
                height={"20"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["10"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={"-20"}
                marginLeft={"9"}
                width={"54"}
                height={"30"}
                LorR={"R"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["11"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"10"}
                width={"45"}
                height={"40"}
                LorR={"L"}
                outlineYorN={"Y"}
                filterYorN={"N"}
                image={image["12"]}
                remark={null}
            />

            <Footnote
                marginTop={"12"}
                detailTop={"0"}
                interval={"11.8"}
                text={footnote[3]}
            />
            <MainText 
                marginTop={"12"}
                marginBottom={"0"}
                mainText={mainText["3"]}
                color={color["sub"]}
            />
            <OuterImgBox 
                marginTop={"5"}
                marginLeft={"8"}
                width={"60"}
                height={"15"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["13"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"0"}
                width={"25"}
                height={"10"}
                LorR={"R"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["14"]}
                remark={{
                    marginTop: "2",
                    marginBottom: "0",
                    marginLeft: "0",
                    marginRight: "3",
                    LorR: "R",
                    lineHeight: "1.4",
                    color: "black",
                    text: bottomText["1"]
                }}
            />
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"4"}
                width={"43"}
                height={"55"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["15"]}
                remark={{
                    marginTop: "-3",
                    marginBottom: "0",
                    marginLeft: "6",
                    marginRight: "0",
                    LorR: "L",
                    lineHeight: "1.4",
                    color: "black",
                    text: bottomText["2"]
                }}
            />
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"10"}
                width={"90"}
                height={"50"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["16"]}
                remark={{
                    marginTop: ".4",
                    marginBottom: "0",
                    marginLeft: "0",
                    marginRight: "0",
                    LorR: "L",
                    lineHeight: "1.4",
                    color: "black",
                    text: bottomText["3"]
                }}
            />
            <Footnote
                marginTop={"0"}
                detailTop={"0"}
                interval={"15.5"}
                text={footnote[4]}
            />
            <InnerImgBox
                paddingTop={"5"}
                paddingBottom={"10"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"0"}
                marginBottom={"0"}
                color={"#FFE8DD"}
                contents={[{ 
                        type: "Iphone",
                        width: "40", 
                        LorR: "L", 
                        marginTop: "3", 
                        marginLeft: "-3", 
                        img: image["17"],
                        remark: null
                    },{
                        type: "Text", 
                        marginTop: "35", 
                        marginBottom: "0",
                        marginLeft: "0",
                        marginRight: "0",
                        width: "80",
                        LorR: "R",
                        HorV: "V",
                        color: "black",
                        text: subText["1"]
                    },{
                        type: "Img", 
                        width: "85", 
                        height: "35", 
                        LorR: "L", 
                        marginTop: "5", 
                        marginLeft: "0", 
                        img: image["18"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "65", 
                        height: "46", 
                        LorR: "L", 
                        marginTop: "0", 
                        marginLeft: "0", 
                        img: image["19"],
                        remark: null
                    },{
                        type: "Iphone",
                        width: "40", 
                        LorR: "L", 
                        marginTop: "0", 
                        marginLeft: "-3", 
                        img: image["20"],
                        remark: null
                    },{
                        type: "Text", 
                        marginTop: "32", 
                        marginBottom: "0",
                        marginLeft: "0",
                        marginRight: "0",
                        width: "80",
                        LorR: "R",
                        HorV: "V",
                        color: "black",
                        text: subText["2"]
                    },{
                        type: "Img", 
                        width: "34", 
                        height: "2", 
                        LorR: "L", 
                        marginTop: "3", 
                        marginLeft: "4.5", 
                        img: image["22"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "100", 
                        height: "70", 
                        LorR: "R", 
                        marginTop: "0", 
                        marginLeft: "0", 
                        img: image["21"],
                        remark: null
                    },{
                        type: "Text", 
                        marginTop: "10", 
                        marginBottom: "0",
                        marginLeft: "0",
                        marginRight: "0",
                        width: "52",
                        LorR: "L",
                        HorV: "V",
                        color: "black",
                        text: subText["3"]
                    },{
                        type: "Img", 
                        width: "100", 
                        height: "10", 
                        LorR: "L", 
                        marginTop: "5", 
                        marginLeft: "0", 
                        img: image["23"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "45", 
                        height: "40", 
                        LorR: "L", 
                        marginTop: "6", 
                        marginLeft: "15", 
                        img: image["24"],
                        remark: null
                    },{
                        type: "Iphone",
                        width: "40", 
                        LorR: "R", 
                        marginTop: "-54", 
                        marginLeft: "0",  
                        marginRight: "5", 
                        img: image["25"],
                        remark: null
                    },{
                        type: "Iphone",
                        width: "40", 
                        LorR: "L", 
                        marginTop: "8", 
                        marginLeft: "-3", 
                        img: image["26"],
                        remark: null
                    },{
                        type: "Text", 
                        marginTop: "28", 
                        marginBottom: "0",
                        marginLeft: "0",
                        marginRight: "0",
                        width: "80",
                        LorR: "R",
                        HorV: "V",
                        color: "black",
                        text: subText["4"]
                    },{
                        type: "Img", 
                        width: "55", 
                        height: "20", 
                        LorR: "L", 
                        marginTop: "8", 
                        marginLeft: "27.5", 
                        img: image["27"],
                        remark: null
                }]}
            />
            <OuterImgBox 
                marginTop={"5"}
                marginLeft={"20"}
                width={"90"}
                height={"27"}
                LorR={"R"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["28"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"0"}
                width={"40"}
                height={"40"}
                LorR={"R"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["29"]}
                remark={{
                    marginTop: "1",
                    marginBottom: "0",
                    marginLeft: "0",
                    marginRight: "0",
                    LorR: "L",
                    lineHeight: "1.4",
                    color: "black",
                    text: bottomText["0"]
                }}
            />
            <FolioList
                category={category}
                exceptionName={name}
                marginTop={"4"}
                marginLeft={"10"}
                marginRight={"5"}
                marginBottom={"5"}
                subTitle={{
                    text:"see More",
                    marginTop: "10",
                    marginLeft: "10"
                }}
            />
        </MainLayout>
    )
}

export default _WeDel;