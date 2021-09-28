import styled from "styled-components"
import { marking, numbering } from "../../_data/_Functions.jsx"  


const MainTextMarkBox = (color, colorWidth, colorSpeed) => `
    transition: all .1s, background-color .4s;
    background-color: transparent;
    display: inline-block;
    margin-right: .2rem;
    position: relative;
    user-select: none;

    .text {
        line-height: 1.6rem;
        font-weight: 700; 
        text-indent: 0;
        display: flex;

        .num {
            font-style: normal;
            margin-top: -.4rem;
            margin-left: .2rem;
            font-size: .8rem;
        }
    }
    .markBoxInner {
        @supports (backdrop-filter: none) {
            background-color: rgba(250, 250, 250, .3);  
            backdrop-filter: blur(.4rem);
        }
        box-shadow: .8rem .8rem .8rem rgba(0, 0, 0, .4);
        border-left: .06rem solid #aaaaaa;
        border-top: .06rem solid #aaaaaa;
        padding: 2rem 1rem 2rem 1.5rem;
        transform: translate(-50%, 0);
        pointer-events: none;
        border-radius: .5rem;
        text-indent: 1.5rem;
        transition: all .2s;
        position: absolute;
        margin-top: -1rem;
        grid-gap: .6rem;
        width: 13.5rem;
        display: grid;
        z-index: 1000;
        opacity: 0;
        left: 50%;

        .titleText {
            text-shadow: 
                -.045rem 0 #f5f5f5, 
                0 .045rem #f5f5f5, 
                .045rem 0 #f5f5f5, 
                0 -.045rem #f5f5f5;
            margin-bottom: .2rem;
            margin-left: 1.5rem;
            font-size: 1.5rem;
            text-indent: 0;
            color: #333333;
            &:before { 
                margin-left: -.7rem;
                content: "*";
            }
            &:after { 
                content: "/";
            }
        }
        .engText {
            letter-spacing: -.0035rem;
            line-height: 1.6rem;
            word-spacing: .1rem;
            font-weight: 400;
            font-size: 1rem;
            color: #444444;
        }
        .korText {
            font-family: 'MaruBuri-Regular', serif;
            letter-spacing: -.03rem;
            line-height: 1.55rem;
            word-spacing: .1rem;
            font-size: .75rem;
            font-weight: 400;
            color: #444444;
        }
    }
    &:before {
        background: linear-gradient(#ffffff, ${color});
        width: ${colorWidth/2}rem;
        transform: translate(-50%, 0);
        border-radius: 0 0 3rem 3rem;
        transition: all .1s;
        position: absolute;
        margin-top: .57rem;
        height: 3rem;
        z-index: 999;
        content: "";
        opacity: 0;
        left: 50%;
    }
    &:hover {
        background-color: ${color};
        transition: background-color .8s;

        .markBoxInner { 
            border-top-color: ${color};
            box-shadow: .15rem .15rem .15rem rgba(0, 0, 0, .4);
            transition: border-top 1s 0s, box-shadow .5s 0s;
            opacity: 1; 
        }
        :before {
            background: linear-gradient(#ffffff, ${color}, ${color});
            transition: all ease-out ${colorSpeed}s;
            width: ${colorWidth}rem;
            border-radius: 0 0 4rem 4rem;
            opacity: .3;
            height: 4rem;
        }
    }
`;

const MainTextDiv = styled.div`
    ${({theme}) => theme.mobile`
        margin-left: 12%;
        margin-right: 7%;
    `}
    margin-bottom: ${({marginBottom}) => marginBottom}%;
    margin-top: ${({marginTop}) => marginTop}%;
    line-height: 2.25rem;
    flex-direction: row;
    user-select: text;
    margin-left: 15%;
    margin-right: 5%;
    display: flex;
    gap: 4vw;

    .engContents {
        ${({theme}) => theme.mobile` width: 100%;`}
        font-family: ${({theme}) => theme.fontObjs["mainText"]["eng"]["fontFamily"]};
        font-weight: ${({theme}) => theme.fontObjs["mainText"]["eng"]["fontWeight"]};
        font-size: ${({theme}) => theme.fontObjs["mainText"]["eng"]["fontSize"]};
        word-spacing: .2rem;
        letter-spacing: -.026rem;
        width: 55%;
        text-indent: 2.5rem;

        &::selection { background-color: ${({theme}) => theme.colorObjs["mark"]};}
        mark {${({color, colorWidth, colorSpeed}) => MainTextMarkBox(color, colorWidth, colorSpeed)}}
    }
    .korContents {
        ${({theme}) => theme.mobile` display: none;`}
        font-family: ${({theme}) => theme.fontObjs["mainText"]["kor"]["fontFamily"]};
        font-weight: ${({theme}) => theme.fontObjs["mainText"]["kor"]["fontWeight"]};
        font-size: ${({theme}) => theme.fontObjs["mainText"]["kor"]["fontSize"]};
        letter-spacing: -.015rem;
        word-spacing: .16rem;
        text-align: justify;
        text-indent: 2rem;
        width: 31%;
        
        &::selection { background-color: ${({theme}) => theme.colorObjs["mark"]};}

        .korNum {
            font-family: ${({theme}) => theme.fontObjs["mainText"]["kor"]["num"]["fontFamily"]};
            font-weight: ${({theme}) => theme.fontObjs["mainText"]["kor"]["num"]["fontWeight"]};
            font-size: ${({theme}) => theme.fontObjs["mainText"]["kor"]["num"]["fontSize"]};

            &::selection { background-color: ${({theme}) => theme.colorObjs["mark"]};}
        }
    }
`;

const MainText = ({ marginTop, marginBottom, color, mainText, colorWidth, colorSpeed}) => {
    
    return(
        <MainTextDiv
            marginBottom={marginBottom}
            colorSpeed={colorSpeed}
            colorWidth={colorWidth}
            marginTop={marginTop}
            color={color}
        >
            <div 
                dangerouslySetInnerHTML={{__html: 
                    marking(
                        mainText["eng"],
                        mainText["mark"],
                        ["TITLE", "NUM", "ENG", "KOR"],
                        `<mark>
                            <span class="text">
                                TITLE <span class="num">NUM</span>
                            </span>
                            <div class="markBoxInner">
                                <span class="titleText">TITLE</span>
                                <span class="engText">ENG</span>
                                <span class="korText">KOR</span>
                            </div>
                        </mark>`
                )}}
                className="engContents"
            />
            <div 
                dangerouslySetInnerHTML={{__html: 
                    numbering(
                        mainText["kor"],
                        `<span class="korNum">`,
                        `</span>`
                )}}
                className="korContents"
            />
        </MainTextDiv>
    )
}

export default MainText