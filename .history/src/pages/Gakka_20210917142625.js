import { useRef, createRef, useEffect } from "react";
import { GakkaContents } from "../_data/_Data.jsx";
 
import { MainLayout } from "../components/_Layout.jsx";

import MainTitle from "../components/Main/MainTitle.jsx";
import LogoBox from "../components/Main/LogoBox.jsx";
import Footnote from "../components/Main/Footnote.jsx";
import FolioList from "../components/Main/FolioList.jsx"; 
import MainText from "../components/Main/MainText.jsx";
import OuterImgBox from "../components/Main/OuterImgBox.jsx";  
import InnerImgBox from "../components/Main/InnerImgBox.jsx";    


const _Gakka = () => {
    const { name, footnote, bottomText, title, category, color, logo, mainText, subText, image } = GakkaContents

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
                paddingTopBottom={"8"}
                paddingLeftRight={"23"}
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
            <MainText 
                marginTop={""}
                marginBottom={"0"}
                mainText={mainText["1"]}
                color={color["sub"]}
                colorWidth={"8.5"}
                colorSpeed={"1.2"}
            />
            <OuterImgBox 
                marginTop={"5"}
                marginLeft={"10"}
                width={"92"}
                height={"36"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["10"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"4"}
                width={"55"}
                height={"38"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["0"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"0"}
                width={"50"}
                height={"30"}
                LorR={"R"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["13"]}
                remark={null}
            />
            <Footnote
                marginTop={"8"}
                detailTop={"1"}
                interval={"0"}
                text={footnote[1]}
            />
            <MainText 
                marginTop={"8"}
                marginBottom={"0"}
                mainText={mainText["0"]}
                color={color["sub"]}
            />
            <Footnote
                marginTop={"14"}
                detailTop={"0"}
                interval={"3.5"}
                text={footnote[2]}
            />
            <InnerImgBox
                paddingTop={"5"}
                paddingBottom={"5"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"10"}
                marginBottom={"0"}
                color={"#b5855b"}
                contents={[{ 
                        type: "Img", 
                        width: "80", 
                        height: "35", 
                        LorR: "L", 
                        marginTop: "5", 
                        img: image["3"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "80", 
                        height: "35", 
                        LorR: "R", 
                        marginTop: "5", 
                        img: image["4"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "70", 
                        height: "40", 
                        LorR: "L", 
                        marginTop: "0", 
                        img: image["5"],
                        remark: null
                    },{
                        type: "Text", 
                        marginTop: "0", 
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
            <OuterImgBox 
                marginTop={"3"}
                marginLeft={"10"}
                width={"92"}
                height={"40"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["6"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={"4"}
                marginLeft={"0"}
                width={"38"}
                height={"45"}
                LorR={"R"}
                outlineYorN={"Y"}
                filterYorN={"N"}
                image={image["1"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={"-23"}
                marginLeft={"14"}
                width={"49"}
                height={"45"}
                LorR={"L"}
                outlineYorN={"Y"}
                filterYorN={"N"}
                image={image["2"]}
                remark={null}
            />
            <Footnote
                marginTop={"8"}
                detailTop={"0"}
                interval={"0"}
                text={footnote[2]}
            />
            <MainText 
                marginTop={"10"}
                marginBottom={"0"}
                mainText={mainText["0"]}
                color={color["sub"]}
            />
            <InnerImgBox
                paddingTop={"2"}
                paddingBottom={"8"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"10"}
                marginBottom={""}
                color={"#EAE7E0"}
                contents={[{ 
                        type: "Img", 
                        width: "100", 
                        height: "55", 
                        LorR: "L", 
                        marginTop: "5", 
                        img: image["8"],
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
                marginTop={"5"}
                marginLeft={"10"}
                width={"100"}
                height={"30"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["12"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={"5"}
                marginLeft={"10"}
                width={"70"}
                height={"40"}
                LorR={"L"}
                outlineYorN={"N"}
                filterYorN={"N"}
                image={image["9"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={""}
                marginLeft={"10"}
                width={"49"}
                height={"45"}
                LorR={"L"}
                outlineYorN={"Y"}
                filterYorN={"N"}
                image={image["7"]}
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

export default _Gakka;