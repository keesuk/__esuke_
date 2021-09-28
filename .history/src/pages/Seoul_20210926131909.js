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
                marginTop={{deskTop: "8", mobile: "10"}}
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
                marginTop={{deskTop: "5", mobile: "8"}}
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
                height={{deskTop: "60",  mobile: "170"}}
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
                    marginTop: "0",
                    lineHeight: "1.4",
                    color: "black",
                    isLeft: false,
                }}
            />
            <Footnote
                marginTop={"6.7"}
                detailTop={"0"}
                interval={"4"}
                text={footnote[2]}
            />
            <InnerImgBox
                paddingBottom={{deskTop: "13", mobile: null}}
                paddingRight={{deskTop: "5", mobile: null}}
                paddingLeft={{deskTop: "5", mobile: null}}
                paddingTop={{deskTop: "10", mobile: "20"}}
                marginBottom={{deskTop: "0", mobile: null}}
                marginTop={{deskTop: "5", mobile: "5"}}
                color={"#eeeeee"}
                contents={[{ 
                    marginBottom: {deskTop: null, mobile: null},
                    marginRight: {deskTop: "4", mobile: "0"},
                    marginLeft: {deskTop: "1", mobile: "8"},
                    marginTop: {deskTop: "3", mobile: "3"}, 
                    height: {deskTop: null, mobile: null},
                    width: {deskTop: "38", mobile: "78"}, 
                    img: image["3"],
                    type: "Browser",
                    isHorizon: false,
                    isLeft: true, 
                },{
                    marginBottom: {deskTop: "10", mobile: "20"},
                    marginRight: {deskTop: null, mobile: null},
                    marginLeft: {deskTop: "8", mobile: "8"},
                    marginTop: {deskTop: "35", mobile: "135"}, 
                    width: {deskTop: "75", mobile: "100"}, 
                    text: subText["0"],
                    type: "Text", 
                    isHorizon: false,
                    isLeft: false,
                    color: "black",
                },{
                    marginBottom: {deskTop: null, mobile: null},
                    marginRight: {deskTop: "4", mobile: "0"},
                    marginLeft: {deskTop: "1", mobile: "8"},
                    marginTop: {deskTop: "3", mobile: "3"}, 
                    height: {deskTop: null, mobile: null},
                    width: {deskTop: "38", mobile: "78"}, 
                    img: image["4"],
                    type: "Browser",
                    isHorizon: false,
                    isLeft: true, 
                },{
                    marginBottom: {deskTop: "10", mobile: "5"},
                    marginRight: {deskTop: "4", mobile: null},
                    marginLeft: {deskTop: "0", mobile: "8"},
                    marginTop: {deskTop: "35", mobile: "155"}, 
                    width: {deskTop: "75", mobile: "100"}, 
                    text: subText["1"],
                    type: "Text",
                    isHorizon: false,
                    isLeft: false,
                    color: "black",
                },{
                    marginLeft: {deskTop: "15", mobile: "5"},
                    marginTop: {deskTop: "8", mobile: "8"}, 
                    height: {deskTop: "20", mobile: "40"},
                    width: {deskTop: "100", mobile: "95"}, 
                    img: image["5"],
                    type: "Img", 
                    isLeft: true, 
                    remark: null
                },{
                    marginLeft: {deskTop: "3.2", mobile: "3"},
                    marginTop: {deskTop: "5", mobile: "0"}, 
                    height: {deskTop: "50", mobile: "40"},
                    width: {deskTop: "90", mobile: "110"}, 
                    img: image["6"],
                    type: "Img", 
                    isLeft: true, 
                    remark: null
                },{
                    marginBottom: {deskTop: null, mobile: null},
                    marginRight: {deskTop: null, mobile: null},
                    marginLeft: {deskTop: "1", mobile: "2"},
                    marginTop: {deskTop: "-44", mobile: "-70"}, 
                    height: {deskTop: null, mobile: null},
                    width: {deskTop: "38", mobile: "70"}, 
                    img: image["16"],
                    type: "Browser",
                    isHorizon: false,
                    isLeft: true, 
                },{
                    marginBottom: {deskTop: "0", mobile: "15"},
                    marginRight: {deskTop: "4", mobile: null},
                    marginLeft: {deskTop: "0", mobile: "8"},
                    marginTop: {deskTop: "0", mobile: "90"}, 
                    width: {deskTop: "45", mobile: "100"}, 
                    text: subText["2"],
                    type: "Text", 
                    isHorizon: false,
                    isLeft: false,
                    color: "black",
                },{
                    marginLeft: {deskTop: "2", mobile: "12"},
                    marginTop: {deskTop: "-30", mobile: "8"}, 
                    height: {deskTop: "65", mobile: "150"},
                    width: {deskTop: "40", mobile: "75"}, 
                    img: image["7"],
                    type: "Img", 
                    isLeft: true, 
                    remark: null
                }]}
            />
            <Footnote
                marginTop={"24"}
                detailTop={"0"}
                interval={"8.5"}
                text={footnote[3]}
            />
            <OuterImgBox 
                marginBottom={{deskTop: null, mobile: null}}
                marginRight={{deskTop: null, mobile: null}}
                marginLeft={{deskTop: "10", mobile: "6"}}
                marginTop={{deskTop: "15", mobile: "0"}}
                height={{deskTop: "26",  mobile: "60"}}
                width={{deskTop: "54", mobile: "70"}}
                image={image["8"]}
                isOutline={false}
                isFilter={true}
                isLeft={true}
                remark={{
                    text: bottomText["1"],
                    marginBottom: null,
                    marginRight: null,
                    marginLeft: null,
                    marginTop: ".5",
                    isLeft: false,
                    lineHeight: "1.4",
                    color: null,
                }}
            />
            <MainText 
                marginTop={"5"}
                marginBottom={null}
                mainText={mainText["3"]}
                color={color["sub"]}
            />
            <OuterImgBox 
                marginBottom={{deskTop: null, mobile: null}}
                marginRight={{deskTop: "10", mobile: "3"}}
                marginLeft={{deskTop: "0", mobile: "0"}}
                marginTop={{deskTop: "10", mobile: "10"}}
                height={{deskTop: "15",  mobile: "30"}}
                width={{deskTop: "70", mobile: "88"}}
                image={image["10"]}
                isOutline={false}
                isFilter={false}
                isLeft={false}
                remark={null}
            />
            {/* 
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