import { useRef, useEffect } from "react";
import { OnvoyageContents } from "../_data/_Data.jsx";

import { MainLayout } from "../components/_Layout.jsx";

import MainTitle from "../components/Main/MainTitle.jsx";
import LogoBox from "../components/Main/LogoBox.jsx";
import Footnote from "../components/Main/Footnote.jsx";
import FolioList from "../components/Main/FolioList.jsx"; 
import MainText from "../components/Main/MainText.jsx";
import OuterImgBox from "../components/Main/OuterImgBox.jsx";  
import InnerImgBox from "../components/Main/InnerImgBox.jsx";    


const _Onvoyage = () => {
    const { name, footnote, title, bottomText, category, color, logo, mainText, subText, image } = OnvoyageContents

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
                paddingTopBottom={"14"}
                paddingLeftRight={"26"}
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
                marginTop={"4"}
                marginLeft={"0"}
                width={"60"}
                height={"45"}
                LorR={"R"}
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
                    color: "black",
                    text: bottomText["0"]
                }}
            />
            <Footnote
                marginTop={"0"}
                interval={"4"}
                text={footnote[1]}
            />
            <InnerImgBox
                paddingTop={"5"}
                paddingBottom={"13"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"0"}
                marginBottom={"0"}
                color={"#242424"}
                contents={[{ 
                        type: "Img", 
                        width: "80", 
                        height: "20", 
                        LorR: "L", 
                        marginTop: "8", 
                        marginLeft: "10", 
                        img: image["8"],
                        remark: null
                    },{
                        type: "Browser",
                        width: "100", 
                        LorR: "L", 
                        HorV: "H",
                        marginTop: "8", 
                        marginLeft:"-2",
                        img: image["1"]
                    },{
                        type: "Browser",
                        width: "100", 
                        LorR: "R", 
                        HorV: "H",
                        marginTop: "10", 
                        marginLeft:"0",
                        marginRight: "-2",
                        img: image["2"]
                    },{
                        type: "Browser",
                        width: "60", 
                        LorR: "L", 
                        HorV: "H",
                        marginTop: "3", 
                        marginLeft:"-2",
                        marginRight: "",
                        img: image["3"]
                    },{
                        type: "Browser",
                        width: "60", 
                        LorR: "L", 
                        HorV: "H",
                        marginTop: "-5", 
                        marginLeft:"0",
                        marginRight: "0",
                        img: image["5"]
                    },{
                        type: "Browser",
                        width: "60", 
                        LorR: "L", 
                        HorV: "H",
                        marginTop: "-5", 
                        marginLeft:"2",
                        marginRight: "0",
                        img: image["4"]
                    },{
                        type: "Browser",
                        width: "100", 
                        LorR: "R", 
                        HorV: "H",
                        marginTop: "10", 
                        marginLeft:"0",
                        marginRight: "-2",
                        img: image["6"]
                    },{
                        type: "Browser",
                        width: "60", 
                        LorR: "L", 
                        HorV: "H",
                        marginTop: "3", 
                        marginLeft:"-2",
                        marginRight: "0",
                        img: image["9"]
                    },{
                        type: "Browser",
                        width: "60", 
                        LorR: "L", 
                        HorV: "H",
                        marginTop: "-5", 
                        marginLeft:"0",
                        marginRight: "0",
                        img: image["7"]
                    },{
                        type: "Text", 
                        marginTop: "400", 
                        marginBottom: "0",
                        marginLeft: "20",
                        marginRight: "0",
                        width: "60",
                        LorR: "L",
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

export default _Onvoyage;