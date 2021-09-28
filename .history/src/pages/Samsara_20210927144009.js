import { SamsaraContents } from "../_data/_Data.jsx";

import { MainLayout } from "../components/_Layout.jsx";

import OuterImgBox from "../components/Main/OuterImgBox.jsx";  
import InnerImgBox from "../components/Main/InnerImgBox.jsx"; 
import MainTitle from "../components/Main/MainTitle.jsx";
import FolioList from "../components/Main/FolioList.jsx"; 
import Footnote from "../components/Main/Footnote.jsx";
import MainText from "../components/Main/MainText.jsx"; 
import LogoBox from "../components/Main/LogoBox.jsx"; 


const _Samsara = () => {
    const { name, footnote, title, category, color, logo, mainText, image, bottomText } = SamsaraContents

    return(
        <MainLayout>
            <MainTitle
                color={color["sub"]}
                category={category}
                isThin={false}
                title={title}
            />
            <LogoBox 
                paddingTopBottom={{deskTop: "5", mobile: "2"}}
                paddingLeftRight={{deskTop: "32", mobile: "25"}}
                backGroundColor={color["main"]}
                logo={logo}
            />
            <Footnote
                text={footnote[0]}
                marginTop={"8"}
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
            <MainText 
                mainText={mainText["1"]}
                marginBottom={"0"}
                marginTop={"0"}
            />
            <OuterImgBox 
                marginLeft={{deskTop: "37", mobile: "15"}}
                marginTop={{deskTop: "5", mobile: "10"}}
                height={{deskTop: "40",  mobile: "100"}}
                width={{deskTop: "80", mobile: "75"}}
                image={image["0"]}
                isOutline={false}
                isFilter={false}
                isLeft={true}
                remark={{
                    text: bottomText["0"],
                    marginBottom: "0",
                    marginRight: "0",
                    marginLeft: "0",
                    marginTop: "0",
                    lineHeight: "1.4",
                    color: "",
                    isLeft: true,
                }}
            />
            <Footnote
                text={footnote[1]}
                marginTop={"9.5"}
                interval={"4"}
            />
            <InnerImgBox
                paddingBottom={{deskTop: "5", mobile: "10"}}
                paddingRight={{deskTop: "5", mobile: "4"}}
                paddingLeft={{deskTop: "5", mobile: "4"}}
                paddingTop={{deskTop: "10", mobile: "20"}}
                marginBottom={{deskTop: "0", mobile: null}}
                marginTop={{deskTop: "5", mobile: "5"}}
                color={"black"}
                contents={[{ 
                        marginLeft: {deskTop: null, mobile: "2"},
                        marginTop: {deskTop: "0", mobile: "5"}, 
                        height: {deskTop: "60", mobile: "100"},
                        width: {deskTop: "65", mobile: "90"}, 
                        img: image["1"],
                        type: "Img",
                        isLeft: true, 
                        remark: {
                            marginTop: "0",
                            marginBottom: "0",
                            marginLeft: "0",
                            marginRight: "0",
                            isLeft: false,
                            lineHeight: "1.4",
                            color: "white",
                            text: bottomText["1"]
                    }},{
                        type: "Img",
                        width: "65", 
                        height: "60", 
                        isLeft: true, 
                        marginTop: "0", 
                        img: image["2"],
                        remark: {
                            marginTop: "0",
                            marginBottom: "0",
                            marginLeft: "0",
                            marginRight: "0",
                            isLeft: false,
                            lineHeight: "1.4",
                            color: "white",
                            text: bottomText["2"]
                    }},{
                        type: "Img",    
                        width: "65", 
                        height: "60", 
                        isLeft: true, 
                        marginTop: "0", 
                        img: image["3"],
                        remark: {
                            marginTop: "0",
                            marginBottom: "0",
                            marginLeft: "0",
                            marginRight: "0",
                            isLeft: false,
                            lineHeight: "1.4",
                            color: "white",
                            text: bottomText["3"]
                }}]}
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

export default _Samsara;