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
                category={category}
                isThin={false}
                title={title}
            />
            <LogoBox 
                paddingTopBottom={{deskTop: "13", mobile: "13"}}
                paddingLeftRight={{deskTop: "10", mobile: "0"}}
                backGroundColor={color["main"]}
                logo={logo}
            />
            <Footnote
                text={footnote[0]}
                marginTop={"8"}
                detailTop={"0"}
                interval={"0"}
            />
            <MainText 
                mainText={mainText["0"]}
                color={color["sub"]}
                colorWidth={"8.5"}
                colorSpeed={"1.2"}
                marginBottom={"0"}
                marginTop={"8"}
            />
            <OuterImgBox 
                marginBottom={{deskTop: null, mobile: null}}
                marginRight={{deskTop: null, mobile: null}}
                marginLeft={{deskTop: null, mobile: "30"}}
                marginTop={{deskTop: "10", mobile: "10"}}
                height={{deskTop: "35",  mobile: "60"}}
                width={{deskTop: "20", mobile: "50"}}
                image={image["7"]}
                isOutline={false}
                isFilter={true}
                isLeft={true}
                remark={null}
            />
            <OuterImgBox 
                marginBottom={{deskTop: null, mobile: null}}
                marginRight={{deskTop: null, mobile: null}}
                marginLeft={{deskTop: "26", mobile: "30"}}
                marginTop={{deskTop: "-32", mobile: "10"}}
                height={{deskTop: "50",  mobile: "60"}}
                width={{deskTop: "54.7", mobile: "50"}}
                image={image["8"]}
                isOutline={false}
                isFilter={true}
                isLeft={true}
                remark={{
                    text: bottomText["0"],
                    marginBottom: "0",
                    marginRight: "0",
                    marginLeft: "0",
                    marginTop: "1",
                    lineHeight: "1.4",
                    color: "black",
                    isLeft: false,
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
                paddingBottom={{deskTop: "10", mobile: null}}
                paddingRight={{deskTop: "5", mobile: null}}
                paddingLeft={{deskTop: "5", mobile: null}}
                paddingTop={{deskTop: "13", mobile: "20"}}
                marginBottom={{deskTop: "0", mobile: null}}
                marginTop={{deskTop: "0", mobile: "5"}}
                color={"black"}
                contents={[{ 
                        marginLeft: {deskTop: null, mobile: "5"},
                        marginTop: {deskTop: "0", mobile: "8"}, 
                        height: {deskTop: "34.5", mobile: "30"},
                        width: {deskTop: "50", mobile: "95"}, 
                        img: image["0"],
                        type: "Img",
                        isLeft: false, 
                        remark: {
                            text: bottomText["1"],
                            marginBottom: "0",
                            marginRight: "0",
                            marginLeft: "0",
                            marginTop: ".5",
                            lineHeight: "1.4",
                            color: "white",
                            isLeft: true,
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