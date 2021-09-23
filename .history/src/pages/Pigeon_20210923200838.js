import React from "react";
import { PigeonContents } from "../_data/_Data.jsx";

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

    return(
        <MainLayout>
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
                logo={logo}
                paddingTopBottom={{
                    deskTop: "13",
                    mobile: "13",
                }}
                paddingLeftRight={{
                    deskTop: "10",
                    mobile: "10"
                }}
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
            <OuterImgBox 
                marginTop={"10"}
                width={"35"}
                height={"20"}
                isLeft={true}
                isOutline={false}
                isFilter={true}
                image={image["7"]}
                remark={null}
            />
            <OuterImgBox 
                marginTop={"-32"}
                marginLeft={"26"}
                width={"54.7"}
                height={"50"}
                isLeft={true}
                isOutline={false}
                isFilter={true}
                image={image["8"]}
                remark={{
                    marginTop: "1",
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
                marginTop={"8"}
                detailTop={"1"}
                interval={"4"}
                text={footnote[1]}
            />
            <MainText 
                marginTop={"8"}
                marginBottom={"0"}
                mainText={mainText["1"]}
            />
            <Footnote
                marginTop={"10"}
                interval={"9.2"}
                text={footnote[2]}
            />
            <InnerImgBox
                paddingTop={"13"}
                paddingBottom={"10"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"0"}
                marginBottom={"0"}
                color={"black"}
                contents={[{ 
                        type: "Img",
                        width: "50", 
                        height: "34.5", 
                        isLeft: false, 
                        marginTop: "0", 
                        img: image["0"],
                        remark: {
                            marginTop: ".5",
                            marginBottom: "0",
                            marginLeft: "0",
                            marginRight: "0",
                            isLeft: true,
                            lineHeight: "1.4",
                            color: "white",
                            text: bottomText["1"]
                    }},{
                        type: "Img", 
                        width: "90", 
                        height: "39", 
                        isLeft: true, 
                        marginTop: "0", 
                        img: image["1"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "90", 
                        height: "39", 
                        isLeft: true, 
                        marginTop: "0", 
                        img: image["2"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "90", 
                        height: "39", 
                        isLeft: true, 
                        marginTop: "0", 
                        img: image["3"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "90", 
                        height: "39", 
                        isLeft: true, 
                        marginTop: "0", 
                        img: image["4"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "90", 
                        height: "39", 
                        isLeft: true, 
                        marginTop: "0", 
                        img: image["5"],
                        remark: null
                    },{
                        type: "Img", 
                        width: "90", 
                        height: "45", 
                        isLeft: true, 
                        marginTop: "0", 
                        img: image["6"],
                        remark: null
                    },{
                        type: "Text", 
                        marginTop: "0", 
                        marginBottom: "5",
                        marginLeft: "0",
                        marginRight: "0",
                        width: "50",
                        isLeft: false,
                        isHorizon: false,
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