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
                isThin={false}
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
                isLeft={false}
                isOutline={false}
                isFilter={false}
                image={image["1"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={"5"}
                marginLeft={"22"}
                width={"77"}
                height={"25"}
                isLeft={true}
                isOutline={false}
                isFilter={false}
                image={image["2"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={"4"}
                marginLeft={"8"}
                width={"50"}
                height={"60"}
                isLeft={true}
                isOutline={false}
                isFilter={false}
                image={image["0"]}
                remark={{
                    marginTop: "0",
                    marginBottom: "0",
                    marginLeft: "0",
                    marginRight: "0",
                    isLeft: false,
                    lineHeight: "1.4",
                    color: "black",
                    text: bottomText["0"]
                }}
            />
            <Footnote
                marginTop={"6.7"}
                detailTop={"0"}
                interval={"3.5"}
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
                        isLeft: true, 
                        isHorizon: false,
                        marginTop: "3", 
                        marginLeft:"1",
                        marginRight: "0",
                        img: image["3"]
                    },{
                        type: "Text", 
                        marginTop: "35", 
                        marginBottom: "10",
                        marginLeft: "0",
                        marginRight: "4",
                        width: "75",
                        isLeft: false,
                        isHorizon: false,
                        color: "black",
                        text: subText["0"]
                    },{
                        type: "Browser",
                        width: "38", 
                        isLeft: true, 
                        isHorizon: false,
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
                        isLeft: false,
                        isHorizon: false,
                        color: "black",
                        text: subText["1"]
                    },{
                        type: "Img", 
                        width: "100", 
                        height: "20", 
                        isLeft: true, 
                        marginTop: "8", 
                        marginLeft: "15", 
                        img: image["5"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "90", 
                        height: "50", 
                        isLeft: true, 
                        marginTop: "5", 
                        marginLeft: "3.2", 
                        img: image["6"],
                        remark: null
                    },{
                        type: "Browser",
                        width: "38", 
                        isLeft: true, 
                        isHorizon: false,
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
                        isLeft: false,
                        isHorizon: false,
                        color: "black",
                        text: subText["2"]
                    },{
                        type: "Img", 
                        width: "40", 
                        height: "65", 
                        isLeft: true, 
                        marginTop: "-30", 
                        marginLeft: "2", 
                        img: image["7"],
                        remark: null
                }]}
            />
            <Footnote
                marginTop={"24"}
                detailTop={"0"}
                interval={"7.6"}
                text={footnote[3]}
            />
            <OuterImgBox 
                marginTop={"15"}
                marginLeft={"10"}
                width={"54"}
                height={"26"}
                isLeft={true}
                isOutline={false}
                isFilter={"Y"}
                image={image["8"]}
                remark={{
                    marginTop: "",
                    marginBottom: "",
                    marginLeft: "",
                    marginRight: "",
                    isLeft: false,
                    lineHeight: "1.4",
                    color: "",
                    text: bottomText["1"]
                }}
            />
            <MainText 
                marginTop={"5"}
                marginBottom={""}
                mainText={mainText["3"]}
                color={color["sub"]}
            />
            <OuterImgBox 
                marginTop={"10"}
                marginLeft={"0"}
                marginRight={"10"}
                width={"70"}
                height={"15"}
                isLeft={false}
                isOutline={false}
                isFilter={false}
                image={image["10"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={"0"}
                marginLeft={"6"}
                width={"76"}
                height={"60"}
                isLeft={true}
                isOutline={false}
                isFilter={false}
                image={image["13"]}
                remark={{
                    marginTop: "1",
                    marginBottom: "",
                    marginLeft: "",
                    marginRight: "",
                    isLeft: false,
                    lineHeight: "1.4",
                    color: "",
                    text: bottomText["0"]
                }}
            />
            <MainText 
                marginTop={"5"}
                marginBottom={""}
                mainText={mainText["4"]}
                color={color["sub"]}
            />
            <MainText 
                marginTop={"0"}
                marginBottom={""}
                mainText={mainText["5"]}
                color={color["sub"]}
            />
            <OuterImgBox 
                marginTop={"2"}
                marginLeft={"10"}
                width={"35"}
                height={"35"}
                isLeft={true}
                isOutline={false}
                isFilter={false}
                image={image["15"]}
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