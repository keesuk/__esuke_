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
                detailTop={"1"}
                interval={"3.5"}
                text={footnote[1]}
            />
            <MainText 
                marginTop={"0"}
                marginBottom={"0"}
                mainText={mainText["1"]}
                color={color["sub"]}
            />
            <MainText 
                marginTop={"0"}
                marginBottom={"0"}
                mainText={mainText["2"]}
                color={color["sub"]}
            />
            <Footnote
                marginTop={"6.7"}
                detailTop={"0"}
                interval={"8.2"}
                text={footnote[2]}
            />
            <InnerImgBox
                paddingTop={"10"}
                paddingBottom={"13"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"5"}
                marginBottom={"0"}
                color={"#eeeeee"}
                contents={[{ 
                        type: "Browser",
                        width: "38", 
                        LorR: "L", 
                        HorV: "V",
                        marginTop: "3", 
                        marginLeft:"1",
                        marginRight: "0",
                        img: image["3"]
                    },{
                        type: "Text", 
                        marginTop: "32", 
                        marginBottom: "10",
                        marginLeft: "0",
                        marginRight: "4",
                        width: "75",
                        LorR: "R",
                        HorV: "V",
                        color: "black",
                        text: subText["0"]
                    },{
                        type: "Browser",
                        width: "38", 
                        LorR: "L", 
                        HorV: "V",
                        marginTop: "7", 
                        marginLeft:"1",
                        marginRight: "0",
                        img: image["4"]
                    },{
                        type: "Text", 
                        marginTop: "34", 
                        marginBottom: "0",
                        marginLeft: "0",
                        marginRight: "4",
                        width: "75",
                        LorR: "R",
                        HorV: "V",
                        color: "black",
                        text: subText["1"]
                    },{
                        type: "Img", 
                        width: "100", 
                        height: "20", 
                        LorR: "L", 
                        marginTop: "8", 
                        marginLeft: "15", 
                        img: image["5"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "90", 
                        height: "50", 
                        LorR: "L", 
                        marginTop: "5", 
                        marginLeft: "3.2", 
                        img: image["6"],
                        remark: null
                    },{
                        type: "Browser",
                        width: "38", 
                        LorR: "L", 
                        HorV: "V",
                        marginTop: "-44", 
                        marginLeft:"1",
                        marginRight: "0",
                        img: image["16"]
                    },{
                        type: "Text", 
                        marginTop: "0", 
                        marginBottom: "0",
                        marginLeft: "0",
                        marginRight: "4",
                        width: "45",
                        LorR: "R",
                        HorV: "V",
                        color: "black",
                        text: subText["2"]
                    },{
                        type: "Img", 
                        width: "65", 
                        height: "65", 
                        LorR: "L", 
                        marginTop: "8", 
                        marginLeft: "", 
                        img: image["7"],
                        remark: null
                }]}
            />
            <Footnote
                marginTop={"12"}
                detailTop={"0"}
                interval={"12.5"}
                text={footnote[3]}
            />
            <OuterImgBox 
                marginTop={"8"}
                marginLeft={"10"}
                width={"54"}
                height={"26"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"Y"}
                image={image["8"]}
                remark={{
                    marginTop: "",
                    marginBottom: "",
                    marginLeft: "",
                    marginRight: "",
                    LorR: "R",
                    lineHeight: "1.4",
                    color: "",
                    text: bottomText["0"]
                }}
            />
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"10"}
                width={"80"}
                height={"40"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["10"]}
                remark={{
                    marginTop: "",
                    marginBottom: "",
                    marginLeft: "",
                    marginRight: "",
                    LorR: "R",
                    lineHeight: "1.4",
                    color: "",
                    text: bottomText["0"]
                }}
            />
            <MainText 
                marginTop={""}
                marginBottom={""}
                mainText={mainText["0"]}
                color={color["sub"]}
            />
            <OuterImgBox 
                marginTop={"5"}
                marginLeft={"28"}
                width={"84"}
                height={"26"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["2"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"8"}
                width={"82"}
                height={"62"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["13"]}
                remark={{
                    marginTop: "",
                    marginBottom: "",
                    marginLeft: "",
                    marginRight: "",
                    LorR: "R",
                    lineHeight: "1.4",
                    color: "",
                    text: bottomText["0"]
                }}
            />
            <MainText 
                marginTop={""}
                marginBottom={""}
                mainText={mainText["0"]}
                color={color["sub"]}
            />
            <OuterImgBox 
                marginTop={"5"}
                marginLeft={"28"}
                width={"84"}
                height={"26"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["2"]}
                remark={null}
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

export default _Seoul;