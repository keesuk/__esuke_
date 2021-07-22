import styled from "styled-components";
import theme from "../../css/_Theme.jsx"

const { 
    fontObjs, 
    colorObjs, 
    lines, 
    layoutRatio, } = theme

const SubTitle = styled.div`
    margin-top: ${({marginTop}) => marginTop}%;
    margin-left: ${({marginLeft}) => marginLeft}%;
    font-size: ${fontObjs["subTitle"]["fontSize"]};
    font-weight: ${fontObjs["subTitle"]["fontWeight"]};
    letter-spacing: -.02rem;
    mark {
        display: inline-block; 
        height: 1.4rem;
        line-height: 1.6rem;
        font-size: ${fontObjs["subTitle"]["mark"]["fontSize"]};
        letter-spacing: -.04rem;
        padding-top: -1rem;
        background-color: ${colorObjs["mark"]};
    }
`;
const ImgButton = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    &:after { 
        content: "";
        position: absolute;
        border-top: 0.25rem solid ${({color}) => color};
        height: 95%;
        width: 100%;
        transform: translateY(45%);
        visibility: hidden;
    }
    &:hover:after { 
        visibility: visible;
    }
`;
const TitleBoxLogo = styled.div`
    pointer-events: none;
    background-color: ${({backGroundColor}) => backGroundColor};
    margin-left: 2.5vw;
    margin-top: 2.5vw;
    padding: 16% 13%;
    transition: all .2s;
    .logo {
        pointer-events: auto;
        width: 50vw;
        .logoType {
            fill: ${({logoTypeColor}) => logoTypeColor};
    }}
    &:hover {
        background-color: ${({logoTypeColor}) => logoTypeColor};
        .logoType { 
            fill: ${({logoBackColor}) => logoBackColor};
    }}
`;

const Remark = styled.div`
    display: flex;
    line-height: ${({lineHeight}) => lineHeight}rem;
    flex-direction: ${({LorR}) => LorR === "L" 
        ? "row"
        : "row-reverse"
    };
    margin-top: ${({marginTop}) => marginTop}rem; 
    margin-bottom: ${({marginBottom}) => marginBottom}rem; 
    margin-left: ${({marginLeft}) => marginLeft}rem; 
    margin-right: ${({marginRight}) => marginRight}rem; 
    color: ${({color}) => color};
    .remarkEng {
        order: ${({LorR}) => LorR === "L" ? "1" : "2"};
        font-size: ${fontObjs["remark"]["eng"]["fontSize"]};
        font-family: ${fontObjs["remark"]["eng"]["fontFamily"]};
        font-weight: ${fontObjs["remark"]["eng"]["fontWeight"]};
        font-style: ${fontObjs["remark"]["eng"]["fontStyle"]};
        letter-spacing: -.002rem;
        &:after {
            content: " / ";
            margin-left: -.1rem; 
    }}
    .remarkKor {
        order: ${({LorR}) => LorR === "L" ? "2" : "1"};
        font-size: ${fontObjs["remark"]["kor"]["fontSize"]};
        font-family: ${fontObjs["remark"]["kor"]["fontFamily"]};
        letter-spacing: -.002rem;
        margin-left: .2rem; 
    }    
`;

const MainText = styled.div`
    user-select: auto;
    display: flex;
    flex-direction: row;
    margin-left: 15%;
    margin-right: 5%;
    margin-top: ${({marginTop}) => marginTop}%;
    margin-bottom: ${({marginBottom}) => marginBottom}%;
    line-height: 2.25rem;
    gap: 4vw;

    .engContents {
        font-size: ${fontObjs["mainText"]["eng"]["fontSize"]};
        font-family: ${fontObjs["mainText"]["eng"]["fontFamily"]};
        font-weight: ${fontObjs["mainText"]["eng"]["fontWeight"]};
        word-spacing: .2rem;
        letter-spacing: -.0265rem;
        width: 52%;
        &::selection {
            background-color: ${colorObjs["mark"]};
        }
    }
    .korContents {
        font-size: ${fontObjs["mainText"]["kor"]["fontSize"]};
        font-family: ${fontObjs["mainText"]["kor"]["fontFamily"]};
        font-weight: ${fontObjs["mainText"]["kor"]["fontWeight"]};
        letter-spacing: -.015rem;
        word-spacing: .16rem;
        width: 34%;
        text-align: justify;
        
        &::selection {
            background-color: ${colorObjs["mark"]};
        }
        .korNum {
        font-size: ${fontObjs["mainText"]["kor"]["num"]["fontSize"]};
        font-family: ${fontObjs["mainText"]["kor"]["num"]["fontFamily"]};
        font-weight: ${fontObjs["mainText"]["kor"]["num"]["fontWeight"]};
            &::selection {
                background-color: ${colorObjs["mark"]};
            }
        }
    }
`;
const SubText = styled.div`
    user-select: auto;
    display: flex;
    gap: 2.5vw;
    flex-direction: ${({HorV}) => HorV === "H" ? "row" : "column"};
    justify-content: ${({LorR}) => LorR === "L" ? "flex-start" : "flex-end"};
    margin-left: ${({marginLeft}) => marginLeft}%;
    margin-right: ${({marginRight}) => marginRight}%;
    margin-top: ${({marginTop}) => marginTop}%;
    margin-bottom: ${({marginBottom}) => marginBottom}%;
    color: ${({textColor}) => textColor};
    line-height: 2.1rem;
    
    

    .engContents {
        font-size: ${fontObjs["subText"]["eng"]["fontSize"]};
        font-family: ${fontObjs["subText"]["eng"]["fontFamily"]};
        font-weight: ${fontObjs["subText"]["eng"]["fontWeight"]};
        font-style: ${fontObjs["subText"]["eng"]["fontStyle"]};
        text-align: justify;
        word-spacing: 0rem;
        letter-spacing: -.0265rem;
        width: ${({textWidth}) => textWidth}%;
        &::selection {
            background-color: ${colorObjs["mark"]};
        }
    }
    .korContents {
        font-size: ${fontObjs["subText"]["kor"]["fontSize"]};
        font-family: ${fontObjs["subText"]["kor"]["fontFamily"]};
        font-weight: ${fontObjs["subText"]["kor"]["fontWeight"]};
        letter-spacing: -.015rem;
        word-spacing: .16rem;
        width: ${({textWidth}) => textWidth}%;
        text-align: justify;
        
        &::selection {
            background-color: ${colorObjs["mark"]};
        }
        .korNum {
        font-size: ${fontObjs["subText"]["kor"]["num"]["fontSize"]};
        font-family: ${fontObjs["subText"]["kor"]["num"]["fontFamily"]};
        font-weight: ${fontObjs["subText"]["kor"]["num"]["fontWeight"]};
            &::selection {
                background-color: ${colorObjs["mark"]};
            }
        }
    }
`;
const OuterImgBox = styled.div`
    height: ${({height}) => height}vw;
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    margin-top: ${({marginTop}) => marginTop}vw;
    position: relative;
    .box {
        width: ${({width}) => width}%;
        float: ${({LorR}) => LorR === "L" ? "left" : "right"};
        .img {
            display: block;
            height: auto;
            width: 100%;
            border: ${lines["pageModulesOuterImgBoxLine"]};
            filter: ${({brightnessFilter}) => brightnessFilter ? "brightness(97%)": null};
        }
    }
`;
const InnerImgBoxBackground = styled.div`
    margin-left: 2.5vw;
    background-color: ${props => props.default
        ? props.color
        : colorObjs["InnerBackgroundColor"]
    };
    width: calc(100%-2.5vw);
    margin-top: ${({marginTop}) => marginTop}vw;
    margin-bottom: ${({marginBottom}) => marginBottom}vw;
    padding-top: ${({paddingTop}) => paddingTop}vw;
    padding-left: ${({paddingLeft}) => paddingLeft}vw;
    padding-right: ${({paddingRight}) => paddingRight}vw;
    padding-bottom: ${({paddingBottom}) => paddingBottom}vw;

`;
const InnerImgBox = styled.div`
    height: ${({height}) => height}vw;
    margin-top: ${({marginTop}) => marginTop}vw;
    position: relative;
    .box {
        width: ${({width}) => width}%;
        float: ${({LorR}) => LorR === "L" ? "left" : "right"};
        .img {
            display: block;
            height: auto;
            width: 100%;
        }
    }
`;
const Marks = styled.div`
    user-select: none;
    display: inline-block;
    position: relative;
    margin-right: .8rem;
    background-color: transparent;
    transition: all .1s, background-color .4s;
    .text {
        display: flex;
        line-height: 1.6rem;
        font-weight: 700;
        font-style: italic;
        .num {
            margin-top: -.4rem;
            margin-left: .2rem;
            font-size: .8rem;
            font-style: normal;
        }
    }
    .marksIn {
        @supports (backdrop-filter: none) {
            backdrop-filter: blur(.4rem);
            background-color: rgba(250, 250, 250, .3);  
        }
        border: .08rem solid #ffffff;
        border-top: .06rem solid #aaaaaa;
        border-left: .06rem solid #aaaaaa;
        border-radius: .5rem;
        padding: 2rem 1rem 2rem 1.5rem;
        width: 13.5rem;
        left: 50%;
        transform: translate(-50%, 0);
        margin-top: -1rem;
        display: grid;
        position: absolute;
        box-shadow: .8rem .8rem .8rem rgba(0, 0, 0, .4);
        z-index: 1000;
        transition: all .2s;
        pointer-events: none;
        opacity: 0;
        grid-gap: .6rem;
        .marksInTitle {
            font-size: 1.3rem;
            margin-left: 1.2rem;
            margin-bottom: .2rem;
            color: #444444;
            text-shadow: -.045rem 0 #f5f5f5, 0 .045rem #f5f5f5, .045rem 0 #f5f5f5, 0 -.045rem #f5f5f5;
            &:before { 
                content: "*";
            }
        }
        .marksInEng {
            font-size: .85rem;
            line-height: 1.2rem;
            font-weight: 400;
            letter-spacing: -.0035rem;
            word-spacing: .1rem;
            color: #454545;
        }
        .marksInKor {
            font-family: 'MaruBuri-Regular', serif;
            font-size: .6rem;
            font-weight: 400;
            letter-spacing: -.025rem;
            line-height: 1.17rem;
            color: #3d3d3d;
        }
    }
    &:before {
        content: "";
        position: absolute;
        z-index: 999;
        margin-top: .57rem;
        left: 50%;
        transform: translate(-50%, 0);
        background: linear-gradient(#ffffff, ${colorObjs["pigeonColor"]});
        border-radius: 0 0 3rem 3rem;
        width: 3rem;
        height: 3rem;
        opacity: 0;
        transition: all .1s;
    }
    &:hover {
        background-color: ${colorObjs["pigeonColor"]};
        transition: background-color .8s;
        .marksIn { 
            opacity: 1; 
            border-top-color: ${colorObjs["pigeonColor"]};
            transition: border-top 1s 0s, box-shadow .5s 0s;
            box-shadow: .15rem .15rem .15rem rgba(0, 0, 0, .4);
        }
        :before {
            opacity: .6;
            border-radius: 0 0 5rem 5rem;
            background: linear-gradient(#ffffff, ${colorObjs["pigeonColor"]}, ${theme.colorObjs["pigeonColor"]});
            width: 8.5rem;
            height: 4rem;
            transition: all ease-out 1.2s;
        }
    }
`;

const pageModules = {
    SubTitle,
    ImgButton,
    TitleBoxLogo,
    Remark,
    MainText,
    SubText,
    OuterImgBox,
    InnerImgBoxBackground,
    InnerImgBox,
    Marks,
}

export default pageModules;