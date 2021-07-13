import styled from "styled-components";
import theme from "../../css/_Theme.jsx"

export const TagIntro = styled.div`
    margin-top: 1rem;
    background-color: ${theme.colorObjs["subTagBackColor"]};
    justify-self: start;
    margin-left: 20%;
    width: 72%;
    padding: .1rem;
    border-radius: .5rem;
    position: relative;
    border: ${theme.lines["subTagLineBold"]};
    &:hover {
        border-color: ${({hoverColor}) => hoverColor};
        transform: rotate(${({rotate}) => rotate}deg);
    }

    &:before {
        content: "";
        display: block;
        padding-bottom: 110%;
        border-radius: .2rem;
        border: ${theme.lines["subTagLineLight"]};
    } 
    .tagContentExp {
        margin-left: 7%;
        margin-right: 8%;
        position: absolute;
        top: .8rem;
        bottom: .8rem;
        line-height: 1rem;
        font-size: .6rem;
        font-style: italic;
        font-weight: 400;
        
        strong {
            margin-left: -5%;
            margin-right: 3%;
            font-weight: 600;
            font-size: .6rem;
            font-family: 'IBM Plex Mono', monospace;
        }
        &:before {
            content: "date";
            display: block;
            position: absolute;
            bottom: 25%;
            width: 100%;
            height: 15%;
            color: ${theme.colorObjs["subTagLineColor"]};
            line-height: 3.7rem;
            border-bottom: ${theme.lines["subTagLineLight"]};
        }
        &:after {
            content: "sign";
            display: block;
            position: absolute;
            bottom: 10%;
            width: 100%;
            height: 15%;
            color: ${theme.colorObjs["subTagLineColor"]};
            line-height: 3.7rem;
            border-bottom: ${theme.lines["subTagLineLight"]};
        }
    }
    &:hover:before, &:hover .tagContentExp:before, &:hover .tagContentExp:after {
        border-color: ${({hoverColor}) => hoverColor};
        color: ${({hoverColor}) => hoverColor};
    }
    .tagSubText {
        position: absolute;
        right: 7%;
        bottom: 28%;
        font-family: ${theme.fontObjs["subTagIntroDate"]["fontFamily"]};
        font-size: 1.3rem;
        font-weight: 200;
        letter-spacing: .05rem;
    }
`;
export const TagSticker = styled.div`
    position: absolute;
    top: 30%;
    left: 12%;
    padding: .4rem .25rem;
    background-color: white;
    white-space: nowrap;
    font-size: .8rem;
    letter-spacing: -.03rem;
    font-weight: 500;
    transform: rotate(-25deg);

    .up {
        border: ${theme.lines["subTagInLineBold"]};
        display: flex;
        justify-content: center;
        padding: 0 .4rem;
        margin-bottom: 3.5%;
        border-radius: 0 0 .6rem .6rem;
        box-sizing: border-box;
        
        &:before {
            content: "";
            border-top: ${theme.lines["subTagInLineLight"]};
            width: calc(100% - 0.5rem);
            top: 6%;
            display: block;
            position: absolute;
        }
    }
    .down {
        border: ${theme.lines["subTagInLineBold"]};
        display: flex;
        justify-content: center;
        border-radius: .6rem .6rem 0 0;
        
        &:before {
            content: "";
            border-bottom: ${theme.lines["subTagInLineLight"]};
            width: calc(100% - 0.5rem);
            bottom: 6%;
            display: block;
            position: absolute;
        }
    }
    &:before {
        content: "";
        bottom: 50%;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: calc(100% - 1.7rem);
        height: .01rem;
        background-color: ${theme.colorObjs["subTagLineColor"]};
        display: block;
        position: absolute;
    }
    .stkBack {
        width: 100%;
        height: 20%;
        background-color: 100%;
    }
`;

export const TagAbout = styled.div`
    margin-top: 1rem;
    background-color: ${theme.colorObjs["subTagBackColor"]};
    justify-self: start;
    margin-left: 20%;
    width: 72%;
    padding: .1rem;
    border-radius: .5rem;
    position: relative;
    border: ${theme.lines["subTagLineBold"]};
    &:before {
        content: "";
        display: block;
        height: 4.6rem;
        border-radius: .2rem;
        border: ${theme.lines["subTagLineLight"]};
    } 
    &:hover {
        border: .22rem solid ${({hoverColor}) => hoverColor};
        transform: rotate(${({rotate}) => rotate}deg);
        z-index: 100;
    }
    &:hover:before {
        border: .1rem solid ${({hoverColor}) => hoverColor};
    }  
    .tagContentExp {
        margin-left: 10%;
        margin-right: 10%;
        position: absolute;
        top: .5rem;
        bottom: .5rem;
        line-height: 1rem;
        font-size: .6rem;
        font-style: italic;
        font-weight: 400;
        strong {
            margin-left: -5%;
            margin-right: 3%;
            font-weight: 600;
            font-size: .6rem;
            font-family: 'IBM Plex Mono', monospace;
        }
    }
    .tagContentList {
        margin-left: 20%;
        position: absolute;
        top: .5rem;
        bottom: .5rem;
        line-height: 1rem;
        font-style: italic;
        font-weight: 500;
        strong {
            margin-left: -5%;
            margin-right: 3%;
            font-weight: 600;
            font-size: 1rem;
            font-family: 'IBM Plex Mono', monospace;
        }
    }
`;