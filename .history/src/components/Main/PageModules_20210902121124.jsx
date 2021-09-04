import styled from "styled-components";
import theme from "../../css/_Theme.jsx"
import Iphone from "../../_data/img/_Source/Iphone.png";

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

const MainTextMarkBox = (color) => `
    user-select: none;
    display: inline-block;
    position: relative;
    margin-right: .2rem;
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
    .markBoxInner {
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
        .titleText {
            font-size: 1.4rem;
            margin-left: 1.2rem;
            margin-bottom: .2rem;
            color: #444444;
            text-shadow: -.045rem 0 #f5f5f5, 0 .045rem #f5f5f5, .045rem 0 #f5f5f5, 0 -.045rem #f5f5f5;
            &:before { 
                content: "*";
            }
        }
        .engText {
            font-size: 1rem;
            line-height: 1.6rem;
            font-weight: 400;
            letter-spacing: -.0035rem;
            word-spacing: .1rem;
            color: #454545;
        }
        .korText {
            font-family: 'MaruBuri-Regular', serif;
            font-size: .7rem;
            font-weight: 400;
            letter-spacing: -.04rem;
            word-spacing: .1rem;
            line-height: 1.55rem;
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
        background: linear-gradient(#ffffff, ${color});
        border-radius: 0 0 3rem 3rem;
        width: 3rem;
        height: 3rem;
        opacity: 0;
        transition: all .1s;
    }
    &:hover {
        background-color: ${color};
        transition: background-color .8s;
        .markBoxInner { 
            opacity: 1; 
            border-top-color: ${color};
            transition: border-top 1s 0s, box-shadow .5s 0s;
            box-shadow: .15rem .15rem .15rem rgba(0, 0, 0, .4);
        }
        :before {
            opacity: .6;
            border-radius: 0 0 5rem 5rem;
            background: linear-gradient(#ffffff, ${color}, ${color});
            width: 8.5rem;
            height: 4rem;
            transition: all ease-out 1.2s;
        }
    }
`;
const MainText = styled.div`
    user-select: text;
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

        mark {${({color}) => MainTextMarkBox(color)}}
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
    user-select: text;
    display: flex;
    gap: 2.5vw;
    flex-direction: ${({HorV}) => HorV === "H" ? "row" : "column"};
    justify-content: ${({LorR}) => LorR === "L" ? "flex-start" : "flex-end"};
    margin-left: ${({marginLeft}) => marginLeft}%;
    margin-right: ${({marginRight}) => marginRight}%;
    margin-top: ${({marginTop}) => marginTop}%;
    margin-bottom: ${({marginBottom}) => marginBottom}%;
    color: ${({textColor}) => textColor};
    line-height: 1.8rem;
    vertical-align: top;
    
    .titleContents {
        display: flex;
        flex-direction: row;
        width: ${({textWidth}) => textWidth}%;
        color: ${({color}) => color};
        align-self: ${({LorR, HorV}) => 
            LorR === "L" ? "flex-start" : (
            HorV === "V" ? "flex-end" : "flex-start"
        )};

        .eng {
            order: ${({LorR}) => LorR === "L" ? "2" : "1"};
            font-size: ${fontObjs["subText"]["title"]["eng"]["fontSize"]};
            font-family: ${fontObjs["subText"]["title"]["eng"]["fontFamily"]};
            font-weight: ${fontObjs["subText"]["title"]["eng"]["fontWeight"]};
            letter-spacing: -.05rem;
            &:after {
                content: " / ";
                margin-left: -.6rem; 
        }}
        .kor {
            order: ${({LorR}) => LorR === "L" ? "1" : "2"};
            font-size: ${fontObjs["subText"]["title"]["kor"]["fontSize"]};
            font-weight: ${fontObjs["subText"]["title"]["kor"]["fontWeight"]};
            font-family: ${fontObjs["subText"]["title"]["kor"]["fontFamily"]};
            letter-spacing: -.1rem;
            margin-left: .2rem; 
            margin-top: .15rem;
        }  
    }
    .engContents {
        font-size: ${fontObjs["subText"]["eng"]["fontSize"]};
        font-family: ${fontObjs["subText"]["eng"]["fontFamily"]};
        font-weight: ${fontObjs["subText"]["eng"]["fontWeight"]};
        font-style: ${fontObjs["subText"]["eng"]["fontStyle"]};
        align-self: ${({LorR, HorV}) => 
            LorR === "L" ? "flex-start" : (
            HorV === "V" ? "flex-end" : "flex-start"
        )};
        text-align: justify;
        word-spacing: -0.08rem;
        letter-spacing: -.0265rem;
        width: ${({textWidth}) => textWidth}%;
    }
    .korContents {
        font-size: ${fontObjs["subText"]["kor"]["fontSize"]};
        font-family: ${fontObjs["subText"]["kor"]["fontFamily"]};
        font-weight: ${fontObjs["subText"]["kor"]["fontWeight"]};
        align-self: ${({LorR, HorV}) => 
            LorR === "L" ? "flex-start" : (
            HorV === "V" ? "flex-end" : "flex-start"
        )};
        letter-spacing: -.015rem;
        word-spacing: .16rem;
        width: ${({textWidth}) => textWidth}%;
        text-align: justify;

        .korNum {
            font-size: ${fontObjs["subText"]["kor"]["num"]["fontSize"]};
            font-family: ${fontObjs["subText"]["kor"]["num"]["fontFamily"]};
            font-weight: ${fontObjs["subText"]["kor"]["num"]["fontWeight"]};
        }
    }
    .titleContents, .korContents, .engContents {
        &::selection {
            color: black;
            background-color: ${colorObjs["mark"]};
        }
    }
`;
const OuterImgBox = styled.div`
    height: ${({height}) => height}vw;
    margin-left: ${({marginLeft}) => marginLeft? marginLeft : "2.5"}vw;
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
            border: ${({outlineYorN}) => outlineYorN === "Y" ? lines["pageModulesOuterImgBoxLine"]: null};
            filter: ${({filterYorN}) => filterYorN === "Y" ? "brightness(97%)": null};
        }
    }
`;
const InnerImgBoxBackground = styled.div`
    margin-left: 2.5vw;
    background-color: ${props => props.default
        ? colorObjs["InnerBackgroundColor"]
        : props.color
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
    margin-left: ${({marginLeft}) => marginLeft}vw;
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
const InnerIphoneMockupBox = styled.div`
    height: ${({height}) => height}vw;
    margin-top: ${({marginTop}) => marginTop}vw;
    margin-left: ${({marginLeft}) => marginLeft}vw;
    position: relative;

    .box {
        width: ${({width}) => width}%;
        float: ${({LorR}) => LorR === "L" ? "left" : "right"};
        
        .iphone {
            width: 100%;
            height: 100%;
            background-image: url("${Iphone}");
            background-position: center; 
            background-repeat: no-repeat;
            background-size: cover;
            .img {
                display: block;
                height: auto;
                width: 100%;
            }
        }
    }
`;
const MarkBox = styled.mark`
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
    .markBoxInner {
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
        .titleText {
            font-size: 1.4rem;
            margin-left: 1.2rem;
            margin-bottom: .2rem;
            color: #444444;
            text-shadow: -.045rem 0 #f5f5f5, 0 .045rem #f5f5f5, .045rem 0 #f5f5f5, 0 -.045rem #f5f5f5;
            &:before { 
                content: "*";
            }
        }
        .engText {
            font-size: 1rem;
            line-height: 1.6rem;
            font-weight: 400;
            letter-spacing: -.0035rem;
            word-spacing: .1rem;
            color: #454545;
        }
        .korText {
            font-family: 'MaruBuri-Regular', serif;
            font-size: .7rem;
            font-weight: 400;
            letter-spacing: -.04rem;
            word-spacing: .1rem;
            line-height: 1.55rem;
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
        background: linear-gradient(#ffffff, ${({color}) => color});
        border-radius: 0 0 3rem 3rem;
        width: 3rem;
        height: 3rem;
        opacity: 0;
        transition: all .1s;
    }
    &:hover {
        background-color: ${({color}) => color};
        transition: background-color .8s;
        .markBoxInner { 
            opacity: 1; 
            border-top-color: ${({color}) => color};
            transition: border-top 1s 0s, box-shadow .5s 0s;
            box-shadow: .15rem .15rem .15rem rgba(0, 0, 0, .4);
        }
        :before {
            opacity: .6;
            border-radius: 0 0 5rem 5rem;
            background: linear-gradient(#ffffff, ${({color}) => color}, ${({color}) => color});
            width: 8.5rem;
            height: 4rem;
            transition: all ease-out 1.2s;
        }
    }
`;

const pageModules = {
    SubTitle,
    ImgButton,
    Remark,
    MainText,
    SubText,
    OuterImgBox,
    InnerImgBoxBackground,
    InnerImgBox,
    InnerIphoneMockupBox,
    MarkBox,
}

export default pageModules;