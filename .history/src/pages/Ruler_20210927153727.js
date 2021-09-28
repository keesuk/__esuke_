import { RulerContents } from "../_data/_Data.jsx";

import { MainLayout } from "../components/_Layout.jsx";
import MainTitle from "../components/Main/MainTitle.jsx";
import LogoBox from "../components/Main/LogoBox.jsx";
import Footnote from "../components/Main/Footnote.jsx";
import FolioList from "../components/Main/FolioList.jsx"; 
import MainText from "../components/Main/MainText.jsx";
import OuterImgBox from "../components/Main/OuterImgBox.jsx";  
import InnerImgBox from "../components/Main/InnerImgBox.jsx";                              


const _Ruler = () => {
    const { name, footnote, bottomText, title, category, color, logo, mainText, subText, image } = RulerContents
    
    return(
        <MainLayout>
            <MainTitle
                color={color["sub"]}
                category={category}
                isThin={true}
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
                colorWidth={"16"}
                colorSpeed={"1.2"}
                marginBottom={"0"}
                marginTop={"8"}
            />
            <MainText 
                mainText={mainText["1"]}
                color={color["sub"]}
                colorWidth={"16"}
                colorSpeed={"1.2"}
                marginBottom={"0"}
                marginTop={"0"}
            />
            <OuterImgBox 
                marginBottom={{deskTop: null, mobile: null}}
                marginRight={{deskTop: null, mobile: null}}
                marginLeft={{deskTop: null, mobile: "5"}}
                marginTop={{deskTop: "10", mobile: "20"}}
                height={{deskTop: "30",  mobile: "60"}}
                width={{deskTop: "70", mobile: "94"}}
                image={image["0"]}
                isOutline={true}
                isFilter={false}
                isLeft={true}
                remark={null}
            />
            <OuterImgBox 
                marginBottom={{deskTop: null, mobile: null}}
                marginRight={{deskTop: null, mobile: "2"}}
                marginLeft={{deskTop: null, mobile: "5"}}
                marginTop={{deskTop: "8", mobile: "10"}}
                height={{deskTop: "80",  mobile: "130"}}
                width={{deskTop: "75", mobile: "90"}}
                image={image["1"]}
                isOutline={false}
                isFilter={false}
                isLeft={false}
                remark={{
                    text: bottomText["0"],
                    marginBottom: "0",
                    marginRight: "3.5",
                    marginLeft: "0",
                    marginTop: "-0.5",
                    lineHeight: "0",
                    color: "black",
                    isLeft: false,
                }}
            />
            <Footnote
                marginTop={"10"}
                interval={"4.5"}
                text={footnote[1]}
            />
            <InnerImgBox
                paddingBottom={{deskTop: "10", mobile: "10"}}
                paddingRight={{deskTop: "5", mobile: "4"}}
                paddingLeft={{deskTop: "5", mobile: "4"}}
                paddingTop={{deskTop: "13", mobile: "0"}}
                marginBottom={{deskTop: "0", mobile: null}}
                marginTop={{deskTop: "0", mobile: "5"}}
                color={"black"}
                contents={[{
                        marginLeft: {deskTop: null, mobile: "2"},
                        marginTop: {deskTop: "0", mobile: "25"}, 
                        height: {deskTop: "39", mobile: "36"},
                        width: {deskTop: "90", mobile: "95"}, 
                        img: image["2"],
                        type: "Img", 
                        isLeft: true,  
                        remark: null
                    },{
                        marginLeft: {deskTop: null, mobile: "2"},
                        marginTop: {deskTop: "0", mobile: "25"}, 
                        height: {deskTop: "39", mobile: "36"},
                        width: {deskTop: "90", mobile: "95"}, 
                        img: image["3"],
                        type: "Img", 
                        isLeft: true,  
                        remark: null
                    },{
                        marginLeft: {deskTop: null, mobile: "2"},
                        marginTop: {deskTop: "0", mobile: "25"}, 
                        height: {deskTop: "39", mobile: "36"},
                        width: {deskTop: "90", mobile: "95"}, 
                        img: image["4"],
                        type: "Img", 
                        isLeft: true,  
                        remark: null
                    },{
                        marginLeft: {deskTop: null, mobile: "2"},
                        marginTop: {deskTop: "0", mobile: "25"}, 
                        height: {deskTop: "39", mobile: "36"},
                        width: {deskTop: "90", mobile: "95"}, 
                        img: image["5"],
                        type: "Img", 
                        isLeft: true,  
                        remark: null
                    },{
                        marginBottom: {deskTop: "5", mobile: "15"},
                        marginRight: {deskTop: "0", mobile: "5"},
                        marginLeft: {deskTop: "0", mobile: "5"},
                        marginTop: {deskTop: "10", mobile: "40"}, 
                        width: {deskTop: "50", mobile: "100"}, 
                        text: subText["0"],
                        type: "Text", 
                        isHorizon: false,
                        isLeft: false,
                        color: "white",
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

export default _Ruler;