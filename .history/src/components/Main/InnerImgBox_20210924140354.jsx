import styled from "styled-components"

import VerticalBrowserWhite from "../../_data/img/_Source/VerticalBrowserWhite.png"
import HorizontalBrowserDark from "../../_data/img/_Source/HorizontalBrowserDark.png"
import Iphone from "../../_data/img/_Source/Iphone.png"
import { marking, numbering } from "../../_data/_Functions.jsx"  
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
    background-color: ${({color, theme}) => color 
        ? color
        : theme.colorObjs["InnerBackgroundColor"]
    };
`;

const ImgDiv = styled.div`
    ${({theme, height, marginLeft, marginTop}) => theme.deskTop`
        margin-left: ${marginLeft}vw;
        margin-top: ${marginTop}vw;
        height: ${height}vw;
    `}
    ${({theme, height, marginLeft, marginTop}) => theme.mobile`
        margin-left: ${marginLeft * theme.layoutRatio["ratio"]}vw;
        margin-top: ${marginTop * theme.layoutRatio["ratio"]}vw;
        height: ${height * theme.layoutRatio["ratio"]}vw;
    `}
    position: relative;

    .box {
        float: ${({isLeft}) => isLeft
            ? "left" 
            : "right"
        };
        width: ${({width}) => width}%;
        .img {
            display: block;
            height: auto;
            width: 100%;
        }
    }
`;
const IphoneMockupDiv = styled.div`
    ${({theme, width, marginTop, marginLeft, marginRight}) => theme.deskTop`
        margin-right: ${marginRight}vw;
        margin-left: ${marginLeft}vw;
        margin-top: ${marginTop}vw;
        height: ${width}vw;
    `}
    ${({theme, width, marginTop, marginLeft, marginRight}) => theme.mobile`
        margin-right: ${marginRight * theme.layoutRatio["ratio"]}vw;
        margin-left: ${marginLeft * theme.layoutRatio["ratio"]}vw;
        margin-top: ${marginTop * theme.layoutRatio["ratio"]}vw;
        height: ${width * theme.layoutRatio["ratio"]}vw;
    `}
    float: ${({isLeft}) => isLeft 
        ? "left" 
        : "right"
    };
    width: ${({width}) => width}%;
    position: relative;

    .box {
        background-image: url("${Iphone}");
        background-repeat: no-repeat;
        background-position: center; 
        background-size: cover;
        height: 100%;
        width: 115%;

        .img {
            border: .02rem solid #ccc;
            margin-right: 7%;
            margin-top: 21%;
            display: block;
            float: right;
            height: auto;
            width: 62%;
        }
    }
`;
const BrowserMockupDiv  = styled.div`
    ${({theme, width, isHorizon, marginRight, marginLeft, marginTop}) => theme.deskTop`
        height: ${!isHorizon 
            ? width/3
            : width
        }vw;
        margin-right: ${marginRight}vw;
        margin-left: ${marginLeft}vw;
        margin-top: ${marginTop}vw;
    `}
    ${({theme, width, isHorizon, marginRight, marginLeft, marginTop}) => theme.mobile`
        height: ${!isHorizon 
            ? width/3 * theme.layoutRatio["ratio"]
            : width * theme.layoutRatio["ratio"]
        }vw;
        margin-right: ${marginRight * theme.layoutRatio["ratio"]}vw;
        margin-left: ${marginLeft * theme.layoutRatio["ratio"]}vw;
        margin-top: ${marginTop * theme.layoutRatio["ratio"]}vw;
    `}
    float: ${({isLeft}) => isLeft
        ? "left" 
        : "right"
    };
    width: ${({width}) => width}%;
    position: relative;

    .box {
        background-image: url("${({isHorizon}) => isHorizon
            ? VerticalBrowserWhite 
            : HorizontalBrowserDark
        }");
        height: ${({isHorizon}) => isHorizon 
            ? "102" 
            : "110"
        }%;
        width: ${({isHorizon}) => isHorizon
            ? "110" 
            : "100"
        }%;
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;

        .img {
            margin-right: ${({isHorizon}) => isHorizon 
                ? "4.2" 
                : "2.9"
            }%;
            margin-top: ${({isHorizon}) => isHorizon 
                ? "9.1" 
                : "5.7"
            }%;
            width: ${({isHorizon}) => isHorizon 
                ? "86.2" 
                : "91.6"
            }%;
            display: block;
            height: auto;
            float: right;
        }  
    }
`;

const TextDiv = styled.div`
    flex-direction: ${({isHorizon}) => isHorizon
        ? "row" 
        : "column"
    };
    justify-content: ${({isLeft}) => isLeft 
        ? "flex-start" 
        : "flex-end"
    };
    margin-bottom: ${({marginBottom}) => marginBottom}%;
    margin-right: ${({marginRight}) => marginRight}%;
    margin-left: ${({marginLeft}) => marginLeft}%;
    margin-top: ${({marginTop}) => marginTop}%;
    color: ${({color}) => color};
    line-height: 1.8rem;
    vertical-align: top;
    text-indent: 2rem;
    user-select: text;
    display: flex;
    gap: 1.5vw;
    
    .titleContents {
        align-self: ${({isLeft, isHorizon}) => isLeft 
            ? "flex-start" 
            : (isHorizon 
                ? "flex-end" 
                : "flex-start"
        )};
        width: ${({width}) => width}%;
        flex-direction: row;
        margin-bottom: 1vw;
        display: flex;

        .eng {
            font-family: ${({theme}) => theme.fontObjs["subText"]["title"]["eng"]["fontFamily"]};
            font-weight: ${({theme}) => theme.fontObjs["subText"]["title"]["eng"]["fontWeight"]};
            font-size: ${({theme}) => theme.fontObjs["subText"]["title"]["eng"]["fontSize"]};
            letter-spacing: -.05rem;
            text-indent: 2rem;
            order: 1;

            &:after {
                margin-left: -.6rem; 
                font-weight: 400;
                content: " / ";
            }
        }
        .kor {
            font-weight: ${({theme}) => theme.fontObjs["subText"]["title"]["kor"]["fontWeight"]};
            font-family: ${({theme}) => theme.fontObjs["subText"]["title"]["kor"]["fontFamily"]};
            font-size: ${({theme}) => theme.fontObjs["subText"]["title"]["kor"]["fontSize"]};
            letter-spacing: -.1rem;
            margin-left: .2rem; 
            margin-top: .15rem;
            text-indent: 0;
            order: 2;
        }  
    }
    .engContents {
        ${({theme, width}) => theme.deskTop` 
            font-size: ${theme.fontObjs["subText"]["eng"]["fontSize"]};
            width: ${width}%;
            letter-spacing: -.035rem;
            word-spacing: -0.05rem;
            text-align: justify;
        `}
        ${({theme}) => theme.mobile` 
            letter-spacing: -.04rem;
            word-spacing: -0.05rem;
            line-height: 2rem;
            font-size: 1rem;
            width: 95%;
        `}
        font-family: ${({theme}) => theme.fontObjs["subText"]["eng"]["fontFamily"]};
        font-weight: ${({theme}) => theme.fontObjs["subText"]["eng"]["fontWeight"]};
        font-style: ${({theme}) => theme.fontObjs["subText"]["eng"]["fontStyle"]};
        align-self: ${({isLeft, isHorizon}) => isLeft 
            ? "flex-start" 
            : (!isHorizon 
                ? "flex-start"
                : "flex-end" 
        )};
        line-height: ${({isHorizon}) => isHorizon 
            ? "1.65rem"
            : null
        };
    }
    .korContents {
        ${({theme}) => theme.mobile` 
            display: none;
        `}
        font-family: ${({theme}) => theme.fontObjs["subText"]["kor"]["fontFamily"]};
        font-weight: ${({theme}) => theme.fontObjs["subText"]["kor"]["fontWeight"]};
        font-size: ${({theme}) => theme.fontObjs["subText"]["kor"]["fontSize"]};
        align-self: ${({isLeft, isHorizon}) => isLeft 
            ? "flex-start" 
            : (!isHorizon 
                ? "flex-start"
                : "flex-end" 
        )};
        width: ${({width, isHorizon}) => isHorizon
            ? width/1.6 
            : width
        }%;
        letter-spacing: -.015rem;
        word-spacing: .16rem;
        text-align: justify;

        .korNum {
            font-family: ${({theme}) => theme.fontObjs["subText"]["kor"]["num"]["fontFamily"]};
            font-weight: ${({theme}) => theme.fontObjs["subText"]["kor"]["num"]["fontWeight"]};
            font-size: ${({theme}) => theme.fontObjs["subText"]["kor"]["num"]["fontSize"]};
        }
    }

    .titleContents, .korContents, .engContents {
        &::selection {
            background-color: ${({theme}) => theme.colorObjs["mark"]};
            color: black;
        }
    }
`;

const BrowserImg = ({width, isLeft, marginTop, marginLeft, marginRight, image, isHorizon}) => {
    return(
        <BrowserMockupDiv
            marginRight={marginRight}
            marginLeft={marginLeft}
            isHorizon={isHorizon}
            marginTop={marginTop}
            isLeft={isLeft}
            width={width}
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