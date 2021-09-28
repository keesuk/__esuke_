import { OnvoyageContents } from "../_data/_Data.jsx";

import { MainLayout } from "../components/_Layout.jsx";

import OuterImgBox from "../components/Main/OuterImgBox.jsx";  
import InnerImgBox from "../components/Main/InnerImgBox.jsx";  
import MainTitle from "../components/Main/MainTitle.jsx";
import FolioList from "../components/Main/FolioList.jsx"; 
import Footnote from "../components/Main/Footnote.jsx";
import MainText from "../components/Main/MainText.jsx";
import LogoBox from "../components/Main/LogoBox.jsx";  


const _Onvoyage = () => {
    const { name, footnote, title, category, color, logo, mainText, subText, image } = OnvoyageContents
    
    return(
        <MainLayout>
            <MainTitle
                category={category}
                isThin={false}
                title={title}
                color={color["sub"]}
            />
            <LogoBox 
                backGroundColor={color["main"]}
                paddingTopBottom={{
                    deskTop: "14",
                    mobile: "13",
                }}
                paddingLeftRight={{
                    deskTop: "26",
                    mobile: "2"
                }}
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
                marginTop={"7"}
                marginLeft={"0"}
                width={"60"}
                height={"40"}
                isLeft={false}
                isOutline={false}
                isFilter={false}
                image={image["0"]}
                remark={null}
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
                        isLeft: true, 
                        marginTop: "8", 
                        marginLeft: "10", 
                        img: image["8"],
                        remark: null
                    },{
                        type: "Browser",
                        width: "100", 
                        isLeft: true, 
                        isHorizon: true,
                        marginTop: "8", 
                        marginLeft:"-2",
                        img: image["1"]
                    },{
                        type: "Browser",
                        width: "100", 
                        isLeft: false, 
                        isHorizon: true,
                        marginTop: "10", 
                        marginLeft:"0",
                        marginRight: "-2",
                        img: image["2"]
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