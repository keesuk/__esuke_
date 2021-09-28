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
                marginTop={"0"}
                marginBottom={"0"}
                mainText={mainText["1"]}
            />
            <OuterImgBox 
                marginTop={"5"}
                marginLeft={"37"}
                width={"80"}
                height={"40"}
                isLeft={true}
                isOutline={false}
                isFilter={false}
                image={image["0"]}
                remark={{
                    marginTop: "0",
                    marginBottom: "0",
                    marginLeft: "0",
                    marginRight: "0",
                    isLeft: true,
                    lineHeight: "1.4",
                    color: "",
                    text: bottomText["0"]
                }}
            />
            <Footnote
                marginTop={"9.5"}
                interval={"4"}
                text={footnote[1]}
            />
            <InnerImgBox
                paddingTop={"10"}
                paddingBottom={"5"}
                paddingLeft={"5"}
                paddingRight={"5"}
                marginTop={"5"}
                marginBottom={"0"}
                color={"black"}
                contents={[{ 
                        type: "Img",
                        width: "65", 
                        height: "60", 
                        isLeft: true, 
                        marginTop: "0", 
                        img: image["1"],
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