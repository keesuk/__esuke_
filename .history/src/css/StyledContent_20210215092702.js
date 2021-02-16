import styled from "styled-components";

export const all_div = {
    "LWidth" : "29",
    "RWidth" : "71",
}
export const RightDiv = styled.div`
    width: ${all_div["RWidth"]}%;
    left: ${all_div["LWidth"]}%;
    border-left: .2rem solid black;
    top: 3rem;
    bottom: 0;
    background-color: #FFF; 
    position: fixed;
    overflow: auto;
    z-index: 2;
`;
export const LeftDiv = styled.div`
    width: ${all_div["LWidth"]}%;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #EEE;
    padding-top: 3rem; 
    position: fixed;
    overflow: auto;
    z-index: 0;
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
    background-color: ${props => props.color};
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
    margin-top: ${props => props.marginTop}vw;

    .img {
        width: auto;
        height: ${props => props.height}rem;
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
    background-color: ${props => props.color};
    margin-top: ${props => props.marginTop}vw;
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