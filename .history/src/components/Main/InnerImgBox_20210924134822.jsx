import styled from "styled-components"

import VerticalBrowserWhite from "../../_data/img/_Source/VerticalBrowserWhite.png"
import HorizontalBrowserDark from "../../_data/img/_Source/HorizontalBrowserDark.png"
import Iphone from "../../_data/img/_Source/Iphone.png"
import { marking, numbering} from "../../_data/_Functions.jsx"  
import Remark from "./Remark.jsx"


const InnerImgBoxDiv = styled.div`
    ${({theme, marginBottom, marginTop, paddingBottom, paddingRight, paddingLeft, paddingTop}) => theme.deskTop`
        width: calc(100%-${theme.layoutRatio["leftMargin"]}vw);
        margin-left: ${theme.layoutRatio["leftMargin"]}vw;
        margin-bottom: ${marginBottom}vw;
        margin-top: ${marginTop}vw;
        padding-bottom: ${paddingBottom}vw;
        padding-right: ${paddingRight}vw;
        padding-left: ${paddingLeft}vw;
        padding-top: ${paddingTop}vw;
    `}
    ${({theme, marginBottom, marginTop, paddingBottom, paddingRight, paddingLeft, paddingTop}) => theme.mobile`
        width: calc(100%-${theme.layoutRatio["leftMargin"] * theme.layoutRatio["ratio"]}vw);
        margin-left: ${theme.layoutRatio["leftMargin"] * theme.layoutRatio["ratio"]}vw;
        margin-bottom: ${marginBottom * theme.layoutRatio["ratio"]}vw;
        margin-top: ${marginTop * theme.layoutRatio["ratio"]}vw;
        padding-bottom: ${paddingBottom * theme.layoutRatio["ratio"]}vw;
        padding-right: ${paddingRight * theme.layoutRatio["ratio"]}vw;
        padding-left: ${paddingLeft * theme.layoutRatio["ratio"]}vw;
        padding-top: ${paddingTop * theme.layoutRatio["ratio"]}vw;
    `}
    background-color: ${({color}) => color};
`;
InnerImgBoxDiv.defaultProps = {
    color: theme.colorObjs["InnerBackgroundColor"]
}
const ImgDiv = styled.div`
    ${({theme, height, marginLeft, marginTop}) => theme.mobile`
        margin-left: ${marginLeft * theme.layoutRatio["ratio"]}vw;
        margin-top: ${marginTop * theme.layoutRatio["ratio"]}vw;
        height: ${height * theme.layoutRatio["ratio"]}vw;
    `}
    ${({theme, height, marginLeft, marginTop}) => theme.deskTop`
        margin-left: ${marginLeft}vw;
        margin-top: ${marginTop}vw;
        height: ${height}vw;
    `}
    position: relative;
    .box {
        width: ${({width}) => width}%;
        float: ${({isLeft}) => isLeft
            ? "left" 
            : "right"
        };
        .img {
            display: block;
            height: auto;
            width: 100%;
        }
    }
`;
const IphoneMockupDiv = styled.div`
    ${({theme}) => theme.mobile`
        height: ${({width}) => width * theme.layoutRatio["ratio"]}vw;
        margin-top: ${({marginTop}) => marginTop * theme.layoutRatio["ratio"]}vw;
        margin-left: ${({marginLeft}) => marginLeft * theme.layoutRatio["ratio"]}vw;
        margin-right: ${({marginRight}) => marginRight * theme.layoutRatio["ratio"]}vw;
    `}
    height: ${({width}) => width}vw;
    width: ${({width}) => width}%;
    margin-top: ${({marginTop}) => marginTop}vw;
    margin-left: ${({marginLeft}) => marginLeft}vw;
    margin-right: ${({marginRight}) => marginRight}vw;
    float: ${({isLeft}) => isLeft 
        ? "left" 
        : "right"
    };
    position: relative;

    .box {
        width: 115%;
        height: 100%;
        background-image: url("${Iphone}");
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;
        .img {
            display: block;
            height: auto;
            width: 62%;
            float: right;
            margin-top: 21%;
            margin-right: 7%;
            border: .02rem solid #ccc;
        }
    }
`;
const BrowserMockupDiv  = styled.div`
    ${({theme}) => theme.mobile`
        height: ${({width, isHorizon}) => isHorizon 
            ? width * theme.layoutRatio["ratio"]
            : width/3 * theme.layoutRatio["ratio"]
        }vw;
        margin-top: ${({marginTop}) => marginTop * theme.layoutRatio["ratio"]}vw;
        margin-left: ${({marginLeft}) => marginLeft * theme.layoutRatio["ratio"]}vw;
        margin-right: ${({marginRight}) => marginRight * theme.layoutRatio["ratio"]}vw;
    `}
    width: ${({width}) => width}%;
    height: ${({width, isHorizon}) => isHorizon 
        ? width 
        : width/3
    }vw;
    margin-top: ${({marginTop}) => marginTop}vw;
    margin-left: ${({marginLeft}) => marginLeft}vw;
    margin-right: ${({marginRight}) => marginRight}vw;
    float: ${({isLeft}) => isLeft
        ? "left" 
        : "right"
    };
    position: relative;

    .box {
        width: ${({isHorizon}) => isHorizon
            ? "110" 
            : "100"
        }%;
        height: ${({isHorizon}) => isHorizon 
            ? "102" 
            : "110"
        }%;
        background-image: url("${({isHorizon}) => isHorizon
            ? VerticalBrowserWhite 
            : HorizontalBrowserDark
        }");
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;
        .img {
            display: block;
            height: auto;
            width: ${({isHorizon}) => isHorizon 
                ? "86.2" 
                : "91.6"
            }%;
            float: right;
            margin-top: ${({isHorizon}) => isHorizon 
                ? "9.1" 
                : "5.7"
            }%;
            margin-right: ${({isHorizon}) => isHorizon 
                ? "4.2" 
                : "2.9"
            }%;
        }  
    }
`;

const TextDiv = styled.div`
    user-select: text;
    display: flex;
    gap: 1.5vw;
    flex-direction: ${({isHorizon}) => isHorizon
        ? "row" 
        : "column"
    };
    justify-content: ${({isLeft}) => isLeft 
        ? "flex-start" 
        : "flex-end"
    };
    margin-left: ${({marginLeft}) => marginLeft}%;
    margin-right: ${({marginRight}) => marginRight}%;
    margin-top: ${({marginTop}) => marginTop}%;
    margin-bottom: ${({marginBottom}) => marginBottom}%;
    color: ${({color}) => color};
    line-height: 1.8rem;
    vertical-align: top;
    text-indent: 2rem;
    
    .titleContents {
        display: flex;
        margin-bottom: 1vw;
        flex-direction: row;
        width: ${({width}) => width}%;
        align-self: ${({isLeft, isHorizon}) => 
            isLeft 
                ? "flex-start" 
                :(isHorizon 
                    ? "flex-end" 
                    : "flex-start"
        )};

        .eng {
            order: 1;
            font-size: ${theme.fontObjs["subText"]["title"]["eng"]["fontSize"]};
            font-family: ${theme.fontObjs["subText"]["title"]["eng"]["fontFamily"]};
            font-weight: ${theme.fontObjs["subText"]["title"]["eng"]["fontWeight"]};
            letter-spacing: -.05rem;
            text-indent: 2rem;
            &:after {
                content: " / ";
                font-weight: 200;
                margin-left: -.6rem; 
                font-weight: 400;
        }}
        .kor {
            order: 2;
            font-size: ${theme.fontObjs["subText"]["title"]["kor"]["fontSize"]};
            font-weight: ${theme.fontObjs["subText"]["title"]["kor"]["fontWeight"]};
            font-family: ${theme.fontObjs["subText"]["title"]["kor"]["fontFamily"]};
            letter-spacing: -.1rem;
            margin-left: .2rem; 
            margin-top: .15rem;
            text-indent: 0;
        }  
    }
    .engContents {
        ${({theme}) => theme.mobile` 
            width: 95%;
            font-size: 1rem;
            word-spacing: -0.05rem;
            letter-spacing: -.04rem;
            line-height: 2rem;
        `}
        ${({theme}) => theme.deskTop` 
            width: ${({width}) => width}%;
            font-size: ${theme.fontObjs["subText"]["eng"]["fontSize"]};
            word-spacing: -0.05rem;
            letter-spacing: -.035rem;
            text-align: justify;
        `}
        font-family: ${theme.fontObjs["subText"]["eng"]["fontFamily"]};
        font-weight: ${theme.fontObjs["subText"]["eng"]["fontWeight"]};
        font-style: ${theme.fontObjs["subText"]["eng"]["fontStyle"]};
        align-self: ${({isLeft, isHorizon}) => 
            isLeft 
                ? "flex-start" 
                : (isHorizon 
                    ? "flex-end" 
                    : "flex-start"
        )};
        ${({isHorizon}) => isHorizon 
            ? "line-height: 1.65rem;" 
            : null
        }
    }
    .korContents {
        ${({theme}) => theme.mobile` display: none;`}
        font-size: ${theme.fontObjs["subText"]["kor"]["fontSize"]};
        font-family: ${theme.fontObjs["subText"]["kor"]["fontFamily"]};
        font-weight: ${theme.fontObjs["subText"]["kor"]["fontWeight"]};
        align-self: ${({isLeft, isHorizon}) => 
            isLeft 
                ? "flex-start" 
                : (isHorizon 
                    ? "flex-end" 
                    : "flex-start"
        )};
        letter-spacing: -.015rem;
        word-spacing: .16rem;
        width: ${({width, isHorizon}) => isHorizon === "H" ? width/1.6 : width}%;
        text-align: justify;

        .korNum {
            font-size: ${theme.fontObjs["subText"]["kor"]["num"]["fontSize"]};
            font-family: ${theme.fontObjs["subText"]["kor"]["num"]["fontFamily"]};
            font-weight: ${theme.fontObjs["subText"]["kor"]["num"]["fontWeight"]};
        }
    }
    .titleContents, .korContents, .engContents {
        &::selection {
            color: black;
            background-color: ${theme.colorObjs["mark"]};
        }
    }
`;

const BrowserImg = ({width, isLeft, marginTop, marginLeft, marginRight, image, isHorizon}) => {
    return(
        <BrowserMockupDiv
            width={width}
            isLeft={isLeft}
            isHorizon={isHorizon}
            marginTop={marginTop}
            marginLeft={marginLeft}
            marginRight={marginRight}
        >
            <div className="box">
                <img className="img" alt="" src={image}/>
            </div>
        </BrowserMockupDiv>
    )
}
const IphoneImg = ({width, isLeft, marginTop, marginLeft, marginRight, image}) => {
    return(
        <IphoneMockupDiv
            width={width}
            isLeft={isLeft}
            marginTop={marginTop}
            marginLeft={marginLeft}
            marginRight={marginRight}
        >
            <div className="box">
                <img className="img" alt="" src={image}/>
            </div>
        </IphoneMockupDiv>
    )
}
const Text = ({marginTop, marginBottom, marginLeft, marginRight, width, isLeft, isHorizon, color, text}) => {
    return(
        <TextDiv
                marginTop={marginTop}  
                marginBottom={marginBottom}  
                marginLeft={marginLeft}  
                marginRight={marginRight}
                width={width}
                isLeft={isLeft}
                isHorizon={isHorizon}
                color={color}
        >
            {text["title"] ?
                <div className="titleContents">
                    <div className="eng">{text["title"]["txtEng"]}</div>
                    <div className="kor">{text["title"]["txtKor"]}</div>
                </div>
                : null
            }
            <div className="engContents">
                {text["eng"]}
            </div>
            <div 
                className="korContents"
                dangerouslySetInnerHTML={{
                    __html : 
                        numbering(text["kor"],
                        `<span class="korNum">`,
                        `</span>`
                )}}
            />
        </TextDiv>
    )
}
const Img = ({marginTop, marginLeft, marginRight, width, height, isLeft, outlineYorN, filterYorN, image, remark}) => {
    return(
        <ImgDiv 
            width={width}
            height={height}
            isLeft={isLeft}
            marginTop={marginTop}
            marginLeft={marginLeft}
            marginRight={marginRight}
        >
            <div className="box">
                <img className="img" alt="" src={image}/>
                {remark ? <Remark remark={remark}/> : null}
            </div>
        </ImgDiv>
    )
}

const InnerImgBox = ({paddingTop, paddingRight, paddingLeft, paddingBottom, marginTop, marginBottom, color, contents}) => {

    return(
        <InnerImgBoxDiv 
            paddingTop={paddingTop}
            paddingBottom={paddingBottom}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            marginTop={marginTop}
            marginBottom={marginBottom}
            color={color}
        >
            {contents.map((v, i) => {
                let Component

                if(v.type === "Img"){Component = Img}
                else if(v.type === "Iphone"){Component = IphoneImg}
                else if(v.type === "Browser"){Component = BrowserImg}
                else if(v.type === "Text"){Component = Text}

                return(
                    <Component
                        width={v.width}
                        height={v.height}
                        isLeft={v.isLeft}
                        marginTop={v.marginTop}
                        marginBottom={v.marginBottom}
                        marginLeft={v.marginLeft}
                        marginRight={v.marginRight}
                        image={v.img}
                        text={v.text}
                        remark={v.remark}
                        isHorizon={v.isHorizon}
                        color={v.color}
                        key={v.img + v.text}
                    />
                )
            })}
        </InnerImgBoxDiv>
    )
}

export default InnerImgBox;