import styled from "styled-components";
import theme from "../../css/_Theme.jsx"
import { marking, numbering } from "../../_data/_Functions.jsx";  

const { 
    fontObjs, 
    colorObjs, 
    lines, 
    layoutRatio, } = theme

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
            opacity: .8;
            border-radius: 0 0 5rem 5rem;
            background: linear-gradient(#ffffff, ${color}, ${color});
            width: 100%;
            height: 4rem;
            transition: all ease-out 1.2s;
        }
    }
`;
const MainTextDiv = styled.div`
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
        letter-spacing: -.026rem;
        width: 55%;
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
        width: 31%;
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

const MainText = ({ marginTop, marginBottom, color, mainText}) => {
    
    return(
        <MainTextDiv
            marginTop={marginTop}
            marginBottom={marginBottom}
            color={color}
        >
            <div 
                className="engContents"
                dangerouslySetInnerHTML={{
                    __html : marking(
                        mainText["eng"],
                        mainText["mark"]["title"],
                        `<mark>
                            <span class="text">
                                ${mainText["mark"]["title"]} <span class="num">${mainText["mark"]["num"]}</span>
                            </span>
                            <div class="markBoxInner">
                                <span class="titleText">${mainText["mark"]["title"]}/</span>
                                <span class="engText">${mainText["mark"]["textEng"]}</span>
                                <span class="korText">${mainText["mark"]["textKor"]}</span>
                            </div>
                        </mark>`
                )}}
            />
            <div 
                className="korContents"
                dangerouslySetInnerHTML={{
                    __html : numbering(
                        mainText["kor"],
                        `<span class="korNum">`,
                        `</span>`
                )}}
            />
        </MainTextDiv>
    )
}

export default MainText;