import styled from "styled-components";
import theme from "../../css/_Theme.jsx"

const SubTitle = styled.div`
    margin-top: 15%;
    margin-left: 10%;
    font-size: ${theme.fontObjs["subTitle"]["fontSize"]};
    font-weight: ${theme.fontObjs["subTitle"]["fontWeight"]};
    letter-spacing: -.02rem;
    mark {
        display: inline-block; 
        height: 1.4rem;
        line-height: 1.6rem;
        font-size: ${theme.fontObjs["subTitle"]["mark"]["fontSize"]};
        letter-spacing: -.04rem;
        padding-top: -1rem;
        background-color: ${theme.colorObjs["mark"]};
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
        ? null 
        : "row-reverse"
    };
    margin: ${({margin}) => margin}; 
    color: ${theme.colorObjs["remarksTextColor"]};
    .remarkEng {
        order: ${({LorR}) => LorR === "L" ? "1" : "2"};
        font-size: .5rem;
        font-family: 'IBM Plex Mono', monospace;
        font-weight: 500;
        font-style: italic;
        letter-spacing: -.002rem;
        &:after {
            content: " / ";
            margin-left: -.1rem; 
    }}
    .remarkKor {
        order: ${({LorR}) => LorR === "L" ? "2" : "1"};
        font-size: .5rem;
        font-family: 'MaruBuri-Regular', serif;
        letter-spacing: -.002rem;
        margin-left: .2rem; 
    }    
`;

const MainText = styled.div`
    user-select: auto;
    display: inline-flex;
    margin-left: 15%;
    margin-right: 5%;
    margin-top: ${({marginTop}) => marginTop}%;
    margin-bottom: ${({marginBottom}) => marginBottom}%;
    line-height: 2.25rem;
    div { 
        margin: 0 4vw 0 0; 
    }
    div:nth-child(2n) { 
        margin-right: 0; 
    }
    .engContents {
        font-size: ${theme.fontObjs["mainText"]["eng"]["fontSize"]};
        font-family: ${theme.fontObjs["mainText"]["eng"]["fontFamily"]};
        font-weight: ${theme.fontObjs["mainText"]["eng"]["fontWeight"]};
        word-spacing: .2rem;
        letter-spacing: -.0265rem;
        width: 52%;
        &::selection{
            background-color: ${theme.colorObjs["mark"]};
        }
    }
    .korContents {
        font-size: ${theme.fontObjs["mainText"]["kor"]["fontSize"]};
        font-family: ${theme.fontObjs["mainText"]["kor"]["fontFamily"]};
        font-weight: ${theme.fontObjs["mainText"]["kor"]["fontWeight"]};
        letter-spacing: -.015rem;
        word-spacing: .16rem;
        width: 34%;
        text-align: justify;
        
        &::selection{
            background-color: ${theme.colorObjs["mark"]};
        }
        .korNum {
        font-size: ${theme.fontObjs["mainText"]["kor"]["num"]["fontSize"]};
        font-family: ${theme.fontObjs["mainText"]["kor"]["num"]["fontFamily"]};
        font-weight: ${theme.fontObjs["mainText"]["kor"]["num"]["fontWeight"]};
            &::selection{
                background-color: ${theme.colorObjs["mark"]};
            }
        }
    }
`;
const SubText = styled.div`
    user-select: auto;
    display: inline-flex;
    margin-left: ${({marginLeft}) => marginLeft}%;
    margin-right: ${({marginRight}) => marginRight}%;
    margin-top: ${({marginTop}) => marginTop}%;
    margin-bottom: ${({marginBottom}) => marginBottom}%;
    line-height: 2.25rem;
    div { 
        margin: 0 4vw 0 0; 
    }
    div:nth-child(2n) { 
        margin-right: 0; 
    }
    .engContents {
        font-size: ${theme.fontObjs["mainText"]["eng"]["fontSize"]};
        font-family: ${theme.fontObjs["mainText"]["eng"]["fontFamily"]};
        font-weight: ${theme.fontObjs["mainText"]["eng"]["fontWeight"]};
        word-spacing: .2rem;
        letter-spacing: -.0265rem;
        width: 52%;
        &::selection{
            background-color: ${theme.colorObjs["mark"]};
        }
    }
    .korContents {
        font-size: ${theme.fontObjs["mainText"]["kor"]["fontSize"]};
        font-family: ${theme.fontObjs["mainText"]["kor"]["fontFamily"]};
        font-weight: ${theme.fontObjs["mainText"]["kor"]["fontWeight"]};
        letter-spacing: -.015rem;
        word-spacing: .16rem;
        width: 34%;
        text-align: justify;
        
        &::selection{
            background-color: ${theme.colorObjs["mark"]};
        }
        .korNum {
        font-size: ${theme.fontObjs["mainText"]["kor"]["num"]["fontSize"]};
        font-family: ${theme.fontObjs["mainText"]["kor"]["num"]["fontFamily"]};
        font-weight: ${theme.fontObjs["mainText"]["kor"]["num"]["fontWeight"]};
            &::selection{
                background-color: ${theme.colorObjs["mark"]};
            }
        }
    }
`;
const OuterImgBox = styled.div`
    height: ${({height}) => height}vw;
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    margin-top: ${({marginTop}) => marginTop}vw;
    margin-bottom: ${({marginBottom}) => marginBottom}vw;
    position: relative;
    .box {
        width: ${({width}) => width}%;
        float: ${({LorR}) => LorR === "L" ? "left" : "right"};
        .img {
            display: block;
            height: auto;
            width: 100%;
            border: ${theme.lines["pageModulesOuterImgBoxLine"]};
            filter: ${({brightnessFilter}) => brightnessFilter ? "brightness(97%)": null};
        }
    }
`;

const InnerImgBoxBackground = styled.div`
    margin-left: 2.5vw;
    background-color: ${props => props.default
        ? props.color
        : theme.colorObjs["InnerBackgroundColor"]
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
    width: 100%;
    height: ${({height}) => height}vw;
    margin-bottom: ${({marginBottom}) => marginBottom}vw;
    margin-top: ${({marginTop}) => marginTop}vw;
    .img {
        float: ${({LorR}) => LorR === "L" ? "left" : "right"};
        height: 100%;
        width: auto;
    }
`;
const Marks = styled.mark`
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
    }}
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
            &:before { content: "*";
        }}
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
    }}
    &:before {
        content: "";
        position: absolute;
        z-index: 999;
        margin-top: .57rem;
        left: 50%;
        transform: translate(-50%, 0);
        background: linear-gradient(#ffffff, ${theme.colorObjs["pigeonColor"]});
        border-radius: 0 0 3rem 3rem;
        width: 3rem;
        height: 3rem;
        opacity: 0;
        transition: all .1s;
    }
    &:hover {
        background-color: ${theme.colorObjs["pigeonColor"]};
        transition: background-color .8s;
        .marksIn { 
            opacity: 1; 
            border-top-color: ${theme.colorObjs["pigeonColor"]};
            transition: border-top 1s 0s, box-shadow .5s 0s;
            box-shadow: .15rem .15rem .15rem rgba(0, 0, 0, .4);
        }
        :before {
            opacity: .6;
            border-radius: 0 0 5rem 5rem;
            background: linear-gradient(#ffffff, ${theme.colorObjs["pigeonColor"]}, ${theme.colorObjs["pigeonColor"]});
            width: 8.5rem;
            height: 4rem;
            transition: all ease-out 1.2s;
    }}
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