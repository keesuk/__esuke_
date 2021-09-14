import { useRef, useEffect } from "react";
import { PigeonContents } from "../_data/_Data.jsx";

import pageModules from "../components/Main/PageModules.jsx";
import { MainLayout } from "../components/_Layout.jsx";

import LogoBox from "../components/Main/LogoBox.jsx";
import FolioList from "../components/Main/FolioList.jsx"; 
import MainText from "../components/Main/MainText.jsx";
import MainTitle from "../components/Main/MainTitle.jsx"; 
import Footnote from "../components/Main/Footnote.jsx"; 
import OuterImgBox from "../components/Main/OuterImgBox.jsx";  
import InnerImgBox from "../components/Main/InnerImgBox.jsx";  


const _Pigeon = () => {
    const { name, footnote, title, category, color, logo, mainText, subText, image, bottomText } = PigeonContents
    const { SubTitle } = pageModules

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
            <OuterImgBox 
                marginTop={"10"}
                marginLeft={""}
                width={"35"}
                height={"20"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"Y"}
                image={image["7"]}
                remark={null}
            />
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
            <InnerImgBox
                paddingTop={"13"}
                paddingBottom={"13"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"10"}
                marginBottom={"0"}
                color={"black"}
                contents={[{ 
                        type: "Img",
                        width: "50", 
                        height: "34.5", 
                        LorR: "R", 
                        marginTop: "0", 
                        img: image["0"],
                        remark: {
                            marginTop: ".5",
                            marginBottom: "0",
                            marginLeft: "0",
                            marginRight: "0",
                            LorR: "L",
                            lineHeight: "1.4",
                            color: "white",
                            text: bottomText["1"]
                    }},{
                        type: "Img", 
                        width: "90", 
                        height: "39", 
                        LorR: "L", 
                        marginTop: "0", 
                        img: image["1"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "90", 
                        height: "39", 
                        LorR: "L", 
                        marginTop: "0", 
                        img: image["2"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "90", 
                        height: "39", 
                        LorR: "L", 
                        marginTop: "0", 
                        img: image["3"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "90", 
                        height: "39", 
                        LorR: "L", 
                        marginTop: "0", 
                        img: image["4"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "90", 
                        height: "39", 
                        LorR: "L", 
                        marginTop: "0", 
                        img: image["5"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "90", 
                        height: "45", 
                        LorR: "L", 
                        marginTop: "0", 
                        img: image["6"],
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

export default _Pigeon;