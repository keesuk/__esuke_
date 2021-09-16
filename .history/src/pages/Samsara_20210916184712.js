import { useRef, useEffect } from "react";
import { SamsaraContents } from "../_data/_Data.jsx";

import { MainLayout } from "../components/_Layout.jsx";

import MainTitle from "../components/Main/MainTitle.jsx";
import LogoBox from "../components/Main/LogoBox.jsx";
import Footnote from "../components/Main/Footnote.jsx";
import FolioList from "../components/Main/FolioList.jsx"; 
import MainText from "../components/Main/MainText.jsx";
import OuterImgBox from "../components/Main/OuterImgBox.jsx";  
import InnerImgBox from "../components/Main/InnerImgBox.jsx";   


const _Samsara = () => {
    const { name, footnote, title, category, color, logo, mainText, subText, image, bottomText } = SamsaraContents

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
                marginLeft={"30"}
                width={"80"}
                height={"50"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["0"]}
                remark={{
                    marginTop: "0",
                    marginBottom: "0",
                    marginLeft: "0",
                    marginRight: "0",
                    LorR: "L",
                    lineHeight: "1.4",
                    color: "",
                    text: bottomText["0"]
                }}
            />
            <Footnote
                marginTop={"9.5"}
                interval={"4"}
                text={footnote[1]}
            />
            <InnerImgBox
                paddingTop={"5"}
                paddingBottom={"5"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"5"}
                marginBottom={"0"}
                color={"black"}
                contents={[{ 
                        type: "Img",
                        width: "70", 
                        height: "60", 
                        LorR: "L", 
                        marginTop: "0", 
                        img: image["1"],
                        remark: {
                            marginTop: "0",
                            marginBottom: "0",
                            marginLeft: "0",
                            marginRight: "0",
                            LorR: "R",
                            lineHeight: "1.4",
                            color: "white",
                            text: bottomText["0"]
                        }},{
                        type: "Text", 
                        marginTop: "5", 
                        marginBottom: "5",
                        marginLeft: "0",
                        marginRight: "0",
                        width: "50",
                        LorR: "R",
                        HorV: "V",
                        color: "white",
                        text: subText["0"]         
                }]}
            />
            <Footnote
                marginTop={"9.5"}
                interval={"8"}
                text={footnote[2]}
            />
            <InnerImgBox
                paddingTop={"13"}
                paddingBottom={"8"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"5"}
                marginBottom={"0"}
                color={"black"}
                contents={[{ 
                        type: "Img",
                        width: "70", 
                        height: "60", 
                        LorR: "L", 
                        marginTop: "0", 
                        img: image["2"],
                        remark: {
                            marginTop: "0",
                            marginBottom: "0",
                            marginLeft: "0",
                            marginRight: "0",
                            LorR: "R",
                            lineHeight: "1.4",
                            color: "white",
                            text: bottomText["0"]
                        }},{
                        type: "Text", 
                        marginTop: "10", 
                        marginBottom: "5",
                        marginLeft: "0",
                        marginRight: "0",
                        width: "50",
                        LorR: "R",
                        HorV: "V",
                        color: "white",
                        text: subText["0"]         
                }]}
            />
            <Footnote
                marginTop={"9.5"}
                interval={"12"}
                text={footnote[3]}
            />
            <InnerImgBox
                paddingTop={"13"}
                paddingBottom={"8"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"5"}
                marginBottom={"0"}
                color={"black"}
                contents={[{ 
                        type: "Img",
                        width: "70", 
                        height: "60", 
                        LorR: "L", 
                        marginTop: "0", 
                        img: image["3"],
                        remark: {
                            marginTop: "0",
                            marginBottom: "0",
                            marginLeft: "0",
                            marginRight: "0",
                            LorR: "R",
                            lineHeight: "1.4",
                            color: "white",
                            text: bottomText["0"]
                        }},{
                        type: "Text", 
                        marginTop: "10", 
                        marginBottom: "5",
                        marginLeft: "0",
                        marginRight: "0",
                        width: "50",
                        LorR: "R",
                        HorV: "V",
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

export default _Samsara;