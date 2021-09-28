import { OnvoyageContents } from "../_data/_Data.jsx"

import { MainLayout } from "../components/_Layout.jsx"

import OuterImgBox from "../components/Main/OuterImgBox.jsx"  
import InnerImgBox from "../components/Main/InnerImgBox.jsx"  
import MainTitle from "../components/Main/MainTitle.jsx"
import FolioList from "../components/Main/FolioList.jsx" 
import Footnote from "../components/Main/Footnote.jsx"
import MainText from "../components/Main/MainText.jsx"
import LogoBox from "../components/Main/LogoBox.jsx"  


const _Onvoyage = () => {
    const { name, footnote, title, category, color, logo, mainText, subText, image } = OnvoyageContents
    
    return(
        <MainLayout>
            <MainTitle
                color={color["sub"]}
                category={category}
                isThin={false}
                title={title}
            />
            <LogoBox 
                backGroundColor={color["main"]}
                paddingTopBottom={{deskTop: "14", mobile: "13"}}
                paddingLeftRight={{deskTop: "26", mobile: "6"}}
                logo={logo}
            />
            <Footnote
                marginTop={"8"}
                detailTop={"0"}
                interval={"0"}
                text={footnote[0]}
            />
            <MainText 
                mainText={mainText["0"]}
                color={color["sub"]}
                marginBottom={"0"}
                marginTop={"8"}
            />
            <OuterImgBox 
                marginBottom={{deskTop: null, mobile: null}}
                marginRight={{deskTop: null, mobile: "10"}}
                marginLeft={{deskTop: "0", mobile: "10"}}
                marginTop={{deskTop: "7", mobile: "15"}}
                height={{deskTop: "40",  mobile: "80"}}
                width={{deskTop: "60", mobile: "100"}}
                image={image["0"]}
                isOutline={false}
                isFilter={false}
                isLeft={false}
                remark={null}
            />
            <Footnote
                marginTop={"0"}
                interval={"4"}
                text={footnote[1]}
            />
            <InnerImgBox
                paddingBottom={{deskTop: "13", mobile: "10"}}
                paddingRight={{deskTop: "5", mobile: "2"}}
                paddingLeft={{deskTop: "5", mobile: "2"}}
                paddingTop={{deskTop: "5", mobile: "20"}}
                marginBottom={{deskTop: "0", mobile: null}}
                marginTop={{deskTop: "0", mobile: "0"}}
                color={"#242424"}
                contents={[{ 
                        marginBottom: {deskTop: null, mobile: null},
                        marginRight: {deskTop: null, mobile: "0"},
                        marginLeft: {deskTop: "10", mobile: "8"},
                        marginTop: {deskTop: "8", mobile: "3"}, 
                        height: {deskTop: "20", mobile: "40"},
                        width: {deskTop: "80", mobile: "90"}, 
                        img: image["8"],
                        type: "Img", 
                        isLeft: true, 
                        remark: null
                    },{
                        marginBottom: {deskTop: null, mobile: null},
                        marginRight: {deskTop: null, mobile: "0"},
                        marginLeft: {deskTop: "-2", mobile: "8"},
                        marginTop: {deskTop: "8", mobile: "3"}, 
                        height: {deskTop: null, mobile: null},
                        width: {deskTop: "100", mobile: "90"}, 
                        img: image["1"],
                        type: "Browser",
                        isHorizon: true,
                        isLeft: true, 
                    },{
                        marginBottom: {deskTop: null, mobile: null},
                        marginRight: {deskTop: "-2", mobile: "0"},
                        marginLeft: {deskTop: "2", mobile: "8"},
                        marginTop: {deskTop: "10", mobile: "3"}, 
                        height: {deskTop: null, mobile: null},
                        width: {deskTop: "100", mobile: "90"}, 
                        img: image["2"],
                        isHorizon: true,
                        isLeft: false, 
                        type: "Browser",
                }]}
            /> 
            {/* 
                    },{
                        type: "Browser",
                        width: "55", 
                        isLeft: true, 
                        isHorizon: true,
                        marginTop: "4", 
                        marginLeft:"-2",
                        marginRight: "",
                        img: image["3"]
                    },{
                        type: "Browser",
                        width: "55", 
                        isLeft: true, 
                        isHorizon: true,
                        marginTop: "0", 
                        marginLeft:"-2",
                        marginRight: "0",
                        img: image["5"]
                    },{
                        type: "Browser",
                        width: "55", 
                        isLeft: true, 
                        isHorizon: true,
                        marginTop: "0", 
                        marginLeft:"-2",
                        marginRight: "0",
                        img: image["4"]
                    },{
                        type: "Browser",
                        width: "100", 
                        isLeft: false, 
                        isHorizon: true,
                        marginTop: "10", 
                        marginLeft:"0",
                        marginRight: "-2",
                        img: image["6"]
                    },{
                        type: "Browser",
                        width: "55", 
                        isLeft: true, 
                        isHorizon: true,
                        marginTop: "4", 
                        marginLeft:"-2",
                        marginRight: "0",
                        img: image["9"]
                    },{
                        type: "Browser",
                        width: "55", 
                        isLeft: true, 
                        isHorizon: true,
                        marginTop: "0", 
                        marginLeft:"-2",
                        marginRight: "0",
                        img: image["7"]
                    },{
                        type: "Text", 
                        marginTop: "405", 
                        marginBottom: "0",
                        marginLeft: "0",
                        marginRight: "0",
                        width: "50",
                        isLeft: false,
                        isHorizon: false,
                        color: "white",
                        text: subText["0"]
                */}
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

export default _Onvoyage