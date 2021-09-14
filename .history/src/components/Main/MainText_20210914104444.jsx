import styled from "styled-components";
import theme from "../../css/_Theme.jsx"
import Iphone from "../../_data/img/_Source/Iphone.png";
import VerticalBrowserWhite from "../../_data/img/_Source/VerticalBrowserWhite.png";
import HorizontalBrowserDark from "../../_data/img/_Source/HorizontalBrowserDark.png";
import { marking, numbering } from "../../_data/_Functions.jsx";   

const { 
    fontObjs, 
    colorObjs, 
    lines, 
    layoutRatio, } = theme

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

const MainText = ({marginTop, marginBottom, color, mainText}) => {
    return(
        <MainTextDiv
            marginTop={"8"}
            marginBottom={"0"}
            color={color["sub"]}
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