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
    const { name, footnote, bottomText, title, category, color, logo, mainText, subText, image } = SeoulContents

    return(
        <MainLayout>
            <MainTitle
                color={color["sub"]}
                category={category}
                isThin={true}
                title={title}
            />
            <LogoBox 
                paddingTopBottom={{deskTop: "7", mobile: "7",}}
                paddingLeftRight={{deskTop: "12", mobile: "0"}}
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
                marginBottom={"0"}
                marginTop={"8"}
            />
            <OuterImgBox 
                marginBottom={{deskTop: null, mobile: null}}
                marginRight={{deskTop: null, mobile: "3"}}
                marginLeft={{deskTop: "8", mobile: null}}
                marginTop={{deskTop: "8", mobile: "8"}}
                height={{deskTop: "28",  mobile: "60"}}
                width={{deskTop: "78", mobile: "96"}}
                image={image["1"]}
                isOutline={false}
                isFilter={false}
                isLeft={false}
                remark={null}
            />
            <OuterImgBox 
                marginBottom={{deskTop: null, mobile: null}}
                marginRight={{deskTop: null, mobile: "10"}}
                marginLeft={{deskTop: "22", mobile: "10"}}
                marginTop={{deskTop: "5", mobile: "4"}}
                height={{deskTop: "25",  mobile: "60"}}
                width={{deskTop: "77", mobile: "92"}}
                image={image["2"]}
                isOutline={false}
                isFilter={false}
                isLeft={true}
                remark={null}
            />
            <OuterImgBox 
                marginBottom={{deskTop: null, mobile: null}}
                marginRight={{deskTop: null, mobile: null}}
                marginLeft={{deskTop: "8", mobile: "6"}}
                marginTop={{deskTop: "4", mobile: "5"}}
                height={{deskTop: "60",  mobile: "150"}}
                width={{deskTop: "50", mobile: "92"}}
                image={image["0"]}
                isOutline={false}
                isFilter={false}
                isLeft={true}
                remark={{
                    text: bottomText["0"],
                    marginBottom: "0",
                    marginRight: "2.5",
                    marginLeft: "0",
                    marginTop: "-1",
                    lineHeight: "1.4",
                    color: "black",
                    isLeft: false,
                }}
            />
            <Footnote
                marginTop={"6.7"}
                detailTop={"0"}
                interval={"3.5"}
                text={footnote[2]}
            />
            <InnerImgBox
                paddingBottom={{deskTop: "13", mobile: null}}
                paddingRight={{deskTop: "5", mobile: null}}
                paddingLeft={{deskTop: "5", mobile: null}}
                paddingTop={{deskTop: "10", mobile: "100"}}
                marginBottom={{deskTop: "0", mobile: null}}
                marginTop={{deskTop: "5", mobile: "10"}}
                color={"#eeeeee"}
                contents={[{ 
                    marginBottom: {deskTop: null, mobile: null},
                    marginRight: {deskTop: "0", mobile: "0"},
                    marginTop: {deskTop: "3", mobile: "3"}, 
                    marginLeft: {deskTop: "1", mobile: "1"},
                    height: {deskTop: null, mobile: null},
                    width: {deskTop: "38", mobile: "70"}, 
                    img: image["3"],
                    type: "Browser",
                    isHorizon: false,
                    isLeft: true, 
                // },{
                    // marginBottom: {deskTop: "10", mobile: null},
                    // marginRight: {deskTop: "4", mobile: null},
                    // marginTop: {deskTop: "35", mobile: null}, 
                    // marginLeft: {deskTop: "0", mobile: null},
                    // width: {deskTop: "75", mobile: "100"}, 
                    // text: subText["0"],
                    // type: "Text", 
                    // isHorizon: false,
                    // isLeft: false,
                    // color: "black",
                // },{
                //     marginBottom: {deskTop: null, mobile: null},
                //     marginRight: {deskTop: "0", mobile: null},
                //     marginTop: {deskTop: "7", mobile: null}, 
                //     marginLeft: {deskTop: "1", mobile: null},
                //     height: {deskTop: null, mobile: null},
                //     width: {deskTop: "38", mobile: null}, 
                //     img: image["4"],
                //     type: "Browser",
                //     isHorizon: false,
                //     isLeft: true, 
                }]}
            />
            {/* 
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
                    marginTop: null,
                    marginBottom: null,
                    marginLeft: null,
                    marginRight: null,
                    isLeft: false,
                    lineHeight: "1.4",
                    color: null,
                    text: bottomText["1"]
                }}
            />
            <MainText 
                marginTop={"5"}
                marginBottom={null}
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
                    marginBottom: null,
                    marginLeft: null,
                    marginRight: null,
                    isLeft: false,
                    lineHeight: "1.4",
                    color: null,
                    text: bottomText["0"]
                }}
            />
            <MainText 
                marginTop={"5"}
                marginBottom={null}
                mainText={mainText["4"]}
                color={color["sub"]}
            />
            <MainText 
                marginTop={"0"}
                marginBottom={null}
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
            /> */}
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