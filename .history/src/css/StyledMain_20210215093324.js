import styled, { ThemeProvider } from "styled-components";

const allDiv = {
    "LeftWidth" : "29",
    "RightWidth" : "71",
}

export const RightDiv = styled.div`
    width: ${allDiv["RightWidth"]}%;
    left: ${allDiv["LeftWidth"]}%;
    border-left: .2rem solid black;
    top: 3rem;
    bottom: 0;
    background-color: #FFF; 
    position: fixed;
    overflow: auto;
    z-index: 2;
`;
export const LeftDiv = styled.div`
    width: ${allDiv["LeftWidth"]}%;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #EEE;
    padding-top: 3rem; 
    position: fixed;
    overflow: auto;
    z-index: 0;
`;
export const LeftInDiv = styled.div`
    margin-left: 6%;
    margin-right: 6%;
    margin-top: -2.2rem;
    display: grid;

    .title {
        width: 100%;
        font-weight: 500;
        font-size: 1.1rem;
        letter-spacing: -.02rem;
        margin-top: 2rem;
        padding-bottom: .8rem;
        margin-bottom: .6rem;
        border-bottom: .1rem dashed black;
    }
`;
export const StickerDiv = styled.div`
    margin-top: 1rem;
    background-color: #fafafa;
    justify-self: start;
    margin-left: 20%;
    width: 72%;
    padding: .1rem;
    border-radius: .5rem;
    position: relative;
    border: .22rem solid orangered;

    &:before {
        content: "";
        display: block;
        height: 4.6rem;
        border-radius: .2rem;
        border: .1rem solid orangered;
    } 
    &:hover {
        border: .22rem solid ${props => props.hoverColor};
        transform: rotate(${props => props.rotate}deg);
        z-index: 100;
    }
    &:hover:before {
        border: .1rem solid ${props => props.hoverColor};
    }  

    .stkContentExp {
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
    .stkContentList {
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
export const FolioListDiv = styled.div` 
    margin-top: 10%;
    margin-left: 3%;
    margin-right: 5%;
    display: grid;
    
    @media all and (min-width:0px) and (max-width:1023px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        grid-auto-rows: minmax(5rem, auto);
    }
    @media all and (min-width:1024px) and (max-width:1500px){
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        grid-auto-rows: minmax(5rem, auto);
    }
    @media all and (min-width:1501px){
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1rem;
        grid-auto-rows: minmax(5rem, auto);
    }

    .link {
        position: relative;
        width: 100%;
        border: .1rem solid #bbb;
        box-shadow: 2px 2px 2px #777;
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
    color: black;

    mark {
        display: inline-block; 
        height: 1.4rem;
        line-height: 1.6rem;
        padding-top: -1rem;
        background-color: hotpink;
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
            fill: white;
    }}
    &:hover {
        background-color: white;
        .logoType { 
            fill: black; 
    }}
`;
export const ImgBox = styled.div`
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    margin-top: ${({marginTop}) => marginTop}vw;

    .img {
        width: auto;
        height: ${({height}) => height}rem;
        border: .05rem solid #999;
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
            background-color: #c9ff2f;
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
            background-color: #c9ff2f;
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
        border: .08rem solid white;
        border-top: .06rem solid #aaa;
        border-left: .06rem solid #aaa;
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
        background: linear-gradient(white, hotpink);
        border-radius: 0 0 3rem 3rem;
        width: 3rem;
        height: 3rem;
        opacity: 0;
        transition: all .1s;
    }

    &:hover {
        background-color: hotpink;
        transition: background-color .8s;

        .marksIn { 
            opacity: 1; 
            border-top-color: #ee2267;
            transition: border-top 1s 0s, box-shadow .5s 0s;
            box-shadow: .15rem .15rem .15rem rgba(0, 0, 0, .4);
        }
        :before {
            opacity: .6;
            border-radius: 0 0 5rem 5rem;
            background: linear-gradient(#fff, hotpink, #ee4499);
            width: 8.5rem;
            height: 4rem;
            transition: all ease-out 1.2s;
        }
    }
`;