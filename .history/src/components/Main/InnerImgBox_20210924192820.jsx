import styled from "styled-components"

import { marking, numbering, UseWindowSize, isMobile } from "../../_data/_Functions.jsx"  
import Remark from "./Remark.jsx"

import HorizontalBrowserDark from "../../_data/img/_Source/HorizontalBrowserDark.png"
import VerticalBrowserWhite from "../../_data/img/_Source/VerticalBrowserWhite.png"
import Iphone from "../../_data/img/_Source/Iphone.png"


const BrowserMockupDiv  = styled.div`
    ${({theme, width, isHorizon, marginRight, marginLeft, marginTop}) => theme.deskTop`
        height: ${isHorizon 
            ? width / 3
            : width
        }vw;
        margin-right: ${marginRight}vw;
        margin-left: ${marginLeft}vw;
        margin-top: ${marginTop}vw;
    `}
    ${({theme, width, isHorizon, marginRight, marginLeft, marginTop}) => theme.mobile`
        height: ${isHorizon 
            ? width / 3 * theme.layoutRatio["ratio"]
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
        ${({theme, isHorizon}) => theme.deskTop`
            height: ${isHorizon 
                ? "110"
                : "102" 
            }%;
            width: ${isHorizon
                ? "110" 
                : "100"
            }%;
        `}
        ${({theme, isHorizon}) => theme.mobile`
            height: ${isHorizon 
                ? "110"
                : "106" 
            }%;
            width: ${isHorizon
                ? "110" 
                : "99.5"
            }%;
        `}
        background-image: url("${({isHorizon}) => isHorizon
            ? HorizontalBrowserDark
            : VerticalBrowserWhite 
        }");
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;

        .img {
            margin-right: ${({isHorizon}) => isHorizon 
                ? "2.9"
                : "4.2" 
            }%;
            margin-top: ${({isHorizon}) => isHorizon 
                ? "5.7"
                : "9.1" 
            }%;
            width: ${({isHorizon}) => isHorizon 
                ? "91.6"
                : "86.2" 
            }%;
            display: block;
            height: auto;
            float: right;
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
                <img 
                    src={image}
                    className="img" 
                    alt="" 
                />
            </div>
        </BrowserMockupDiv>
    )
}

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
const IphoneImg = ({width, isLeft, marginTop, marginLeft, marginRight, image}) => {
    return(
        <IphoneMockupDiv
            marginRight={marginRight}
            marginLeft={marginLeft}
            marginTop={marginTop}
            isLeft={isLeft}
            width={width}
        >
            <div className="box">
                <img 
                    src={image}
                    className="img" 
                    alt="" 
                />
            </div>
        </IphoneMockupDiv>
    )
}

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
const Img = ({marginTop, marginLeft, marginRight, width, height, isLeft, outlineYorN, filterYorN, image, remark}) => {
    return(
        <ImgDiv 
            marginRight={marginRight}
            marginLeft={marginLeft}
            marginTop={marginTop}
            height={height}
            isLeft={isLeft}
            width={width}
        >
            <div className="box">
                <img 
                    src={image}
                    className="img" 
                    alt="" 
                />
                {remark 
                    ? <Remark remark={remark}/> 
                    : null
                }
            </div>
        </ImgDiv>
    )
}

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
const Text = ({marginTop, marginBottom, marginLeft, marginRight, width, isLeft, isHorizon, color, text}) => {
    return(
        <TextDiv
                marginBottom={marginBottom}  
                marginRight={marginRight}
                marginLeft={marginLeft}  
                marginTop={marginTop}  
                isHorizon={isHorizon}
                isLeft={isLeft}
                width={width}
                color={color}
        >
            {text["title"] 
                ?   <div className="titleContents">
                        <div className="eng">{text["title"]["txtEng"]}</div>
                        <div className="kor">{text["title"]["txtKor"]}</div>
                    </div>
                :   null
            }
            <div className="engContents">
                {text["eng"]}
            </div>
            <div 
                dangerouslySetInnerHTML={{__html : 
                    numbering(text["kor"],
                    `<span class="korNum">`,
                    `</span>`
                )}}
                className="korContents"
            />
        </TextDiv>
    )
}

const InnerImgBoxDiv = styled.div`
    ${({theme}) => theme.mobile`
        width: calc(100%-${theme.layoutRatio["leftMargin"] * theme.layoutRatio["ratio"]}vw);
        margin-left: ${theme.layoutRatio["leftMargin"] * theme.layoutRatio["ratio"]}vw;
    `}
    ${({theme}) => theme.deskTop`
        width: calc(100%-${theme.layoutRatio["leftMargin"]}vw);
        margin-left: ${theme.layoutRatio["leftMargin"]}vw;
    `}
    margin-bottom: ${({marginBottom}) => marginBottom}vw;
    margin-top: ${({marginTop}) => marginTop}vw;
    padding-bottom: ${({paddingBottom}) => paddingBottom}vw;
    padding-right: ${({paddingRight}) => paddingRight}vw;
    padding-left: ${({paddingLeft}) => paddingLeft}vw;
    padding-top: ${({paddingTop}) => paddingTop}vw;
    background-color: ${({color, theme}) => color 
        ? color
        : theme.colorObjs["InnerBackgroundColor"]
    };
`;
const InnerImgBox = ({paddingTop, paddingRight, paddingLeft, paddingBottom, marginTop, marginBottom, color, contents}) => {

    return(
        <InnerImgBoxDiv 
            paddingBottom={isMobile(UseWindowSize(), paddingBottom)}
            marginBottom={isMobile(UseWindowSize(), marginBottom)}
            paddingRight={isMobile(UseWindowSize(), paddingRight)}
            paddingLeft={isMobile(UseWindowSize(), paddingLeft)}
            paddingTop={isMobile(UseWindowSize(), paddingTop)}
            marginTop={isMobile(UseWindowSize(), marginTop)}
            color={color}
        >
            {contents.map((v, i) => {
                let Component

                if(v.type === "Browser"){Component = BrowserImg}
                else if(v.type === "Iphone"){Component = IphoneImg}
                else if(v.type === "Text"){Component = Text}
                else if(v.type === "Img"){Component = Img}

                return(
                    <Component
                        marginBottom={isMobile(UseWindowSize(), v.marginBottom)}
                        marginRight={isMobile(UseWindowSize(), v.marginRight)}
                        marginLeft={isMobile(UseWindowSize(), v.marginLeft)}
                        marginTop={isMobile(UseWindowSize(), v.marginTop)}
                        height={isMobile(UseWindowSize(), v.height)}
                        width={isMobile(UseWindowSize(), v.width)}
                        isHorizon={v.isHorizon}
                        key={v.img+v.text+i}
                        isLeft={v.isLeft}
                        remark={v.remark}
                        color={v.color}
                        image={v.img}
                        text={v.text}
                    />
                )
            })}
        </InnerImgBoxDiv>
    )
}

export default InnerImgBox