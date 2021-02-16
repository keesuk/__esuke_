import styled from "styled-components";
import { colors } from "../css/_Color.jsx"


export const FolioListDiv = styled.div`
    margin-top: ${({divMargin}) => divMargin.marginTop}%;
    margin-left: ${({divMargin}) => divMargin.marginLeft}%;
    margin-right: ${({divMargin}) => divMargin.marginRight}%;
    display: grid;

    grid-template-columns: repeat(${({grid}) => grid}, 1fr);
    grid-gap: 1rem;
    grid-auto-rows: minmax(5rem, auto);

    .cell {
        position: relative;
        width: 100%;
        border: .1rem solid #bbbbbb;
        box-shadow: 2px 2px 2px #777777;
    }
    .cellEmpty {
        position: relative;
        width: 100%;
        background-color: rgba(100, 100, 100, .1);
        border: .1rem dashed #bbbbbb;
        text-align: center;

        &:before {
            content: "✂";
            position: absolute;
            color: #bbbbbb;
            font-size: 1.7rem;
            margin-top: -.9rem;
            left: 45%;
        }

        div {
            position: absolute;
            font-size: .6rem;
            font-family: 'IBM Plex Mono', monospace;
            font-style: italic;
            bottom: 0;
        }
    }
    .img {
        width: 100%;
    }
    .content_text {
        font-size: .8rem;
        padding-top: .2rem;
        padding-left: 1rem;
        padding-bottom: 1.5rem;
        letter-spacing: -.05rem;
        font-weight: 400;

        strong {
            font-weight: 600;
            letter-spacing: -.03rem;
    }}
`;
FolioListDiv.defaultProps = {
    divMargin: {
        marginTop: "10",
        marginLeft: "3",
        marginRight: "5",
}}
export const ImgButton = styled.div`
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
export const TitleDiv = styled.div`
    margin-top: 5%;
    margin-left: 7%;
    margin-right: 18%;
    font-size: 2.6rem;
    letter-spacing: -.06rem;
    line-height: 4.4rem;
    color: #000000;

    mark {
        display: inline-block; 
        height: 1.4rem;
        line-height: 1.6rem;
        padding-top: -1rem;
        background-color: ${colors["hotPink"]};
    }
`;
export const TitlePicDiv = styled.div`
    pointer-events: none;
    background-color: ${({color}) => color};
    margin-left: 2.5vw;
    margin-top: 2.5vw;
    padding: 16% 13%;
    transition: all .2s;

    .logo {
        pointer-events: auto;
        width: 50vw;
        .logoType {
            fill: #ffffff;
    }}
    &:hover {
        background-color: #ffffff;
        .logoType { 
            fill: #000000; 
    }}
`;
export const ImgBox = styled.div`
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    margin-top: ${({marginTop}) => marginTop}vw;

    .img {
        width: auto;
        height: ${({height}) => height}rem;
        border: .05rem solid #999999;
    }
`;
export const MainText = styled.div`
    user-select: auto;
    display: inline-flex;
    margin-left: 15%;
    margin-right: 5%;
    margin-top: 5vw;

    div { margin: 0 4vw 0 0; }
    div:nth-child(2n) { margin-right: 0; }

    .engContents {
        font-family: 'Cormorant Garamond', serif;
        font-weight: 500;
        word-spacing: .2rem;
        width: 52%;
        line-height: 2.2rem;
        letter-spacing: -.025rem;
        font-size: 1.4rem;

        &::selection{
            background-color: ${colors["yellowGreen"]};
        }
    }
    .korContents {
        width: 35%;
        font-weight: 400;
        word-spacing: -.25rem;
        letter-spacing: -.25rem;
        line-height: 2.2rem;
        letter-spacing: 0rem;
        font-size: .95rem;
        text-align: justify;
        
        &::selection{
            background-color: ${colors["yellowGreen"]};
        }
    }
`;
export const BackgroundPicDiv = styled.div`
    background-color: ${({color}) => color};
    margin-top: ${({marginTop}) => marginTop}vw;
    margin-left: 2.5vw;
    width: calc(100%-2.5vw);
    padding: 16% 13%;

    .img {
        height: 30rem;
        width: auto;
    }
`;
export const Marks = styled.mark`
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
        font-family: 'IBM Plex Mono', monospace;
        font-style: italic;
        font-size: .8rem;
        text-align: center;
        border: .08rem solid #ffffff;
        border-top: .06rem solid #aaaaaa;
        border-left: .06rem solid #aaaaaa;
        border-radius: .5rem;
        padding: 8rem 1rem 2rem 1rem;
        width: 15rem;
        left: 50%;
        transform: translate(-50%, 0);
        margin-top: -1rem;
        display: block;
        position: absolute;
        box-shadow: .8rem .8rem .8rem rgba(0, 0, 0, .4);
        z-index: 1000;
        transition: all .2s;
        pointer-events: none;
        opacity: 0;
    }

    &:before {
        content: "";
        position: absolute;
        z-index: 999;
        margin-top: .57rem;
        left: 50%;
        transform: translate(-50%, 0);
        background: linear-gradient(#ffffff, ${colors["hotPink"]});
        border-radius: 0 0 3rem 3rem;
        width: 3rem;
        height: 3rem;
        opacity: 0;
        transition: all .1s;
    }

    &:hover {
        background-color: ${colors["hotPink"]};
        transition: background-color .8s;

        .marksIn { 
            opacity: 1; 
            border-top-color: ${colors["deepPink"]};
            transition: border-top 1s 0s, box-shadow .5s 0s;
            box-shadow: .15rem .15rem .15rem rgba(0, 0, 0, .4);
        }
        :before {
            opacity: .6;
            border-radius: 0 0 5rem 5rem;
            background: linear-gradient(#ffffff, ${colors["hotPink"]}, ${colors["deepPink"]});
            width: 8.5rem;
            height: 4rem;
            transition: all ease-out 1.2s;
        }
    }
`;