import styled from "styled-components";
import theme from "../css/_Theme.jsx"


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
        background-color: rgba(200, 200, 200, .25);
        border: .1rem dashed #bbbbbb;

        &:before {
            content: "✂";
            position: absolute;
            color: #bbbbbb;
            font-size: 1.7rem;
            margin-top: -.9rem;
            left: 45%;
        }
        .ment {
            position: absolute;
            left: 10%;
            color: #999999;
            white-space: nowrap;
            font-size: .6rem;
            font-weight: 600;
            font-family: 'IBM Plex Mono', monospace;
            font-style: italic;
            bottom: 0;
    }}
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
        marginLeft: "3.5",
        marginRight: "5",
}}

export const SubTitle = styled.div`
    margin-top: 15%;
    margin-left: 10%;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: -.02rem;
    color: #000000;

    mark {
        display: inline-block; 
        height: 1.4rem;
        line-height: 1.6rem;
        font-size: 1.7rem;
        font-weight: 500;
        letter-spacing: -.04rem;
        padding-top: -1rem;
        background-color: ${theme.colors["yellow"]};
    }
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
    margin-left: 7%;
    margin-right: 18%;
    font-size: 2.6rem;
    font-weight: 400;
    letter-spacing: -.06rem;
    line-height: 4.4rem;
    color: #000000;

    mark {
        display: inline-block; 
        height: 1.4rem;
        line-height: 1.6rem;
        padding-top: -1rem;
        background-color: ${theme.colors["hotPink"]};
    }
`;
export const TitleLogoBox = styled.div`
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

export const Remark = styled.div`
    display: flex;
    line-height: ${({lineHeight, unit}) => lineHeight + unit};
    ${({LorR}) => LorR === "L" 
        ? null 
        : "flex-direction: row-reverse;"
    }
    margin: ${({margin}) => margin}; 
    color: ${({color}) => color};

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
Remark.defaultProps = {
    LorR : "L",
    margin : "0",
    color : "#111111",
}

export const MainText = styled.div`
    user-select: auto;
    display: inline-flex;
    margin-left: 15%;
    margin-right: 5%;
    margin-top: 5vw;
    line-height: 2.25rem;

    div { margin: 0 4vw 0 0; }
    div:nth-child(2n) { margin-right: 0; }

    .engContents {
        font-family: 'Cormorant Garamond', serif;
        font-weight: 500;
        word-spacing: .2rem;
        width: 52%;
        letter-spacing: -.0265rem;
        font-size: 1.4rem;

        &::selection{
            background-color: ${theme.colors["yellowGreen"]};
    }}
    .korContents {
        width: 34%;
        font-weight: 300;
        letter-spacing: -.25rem;
        letter-spacing: -.015rem;
        word-spacing: .16rem;
        font-size: .9rem;
        text-align: justify;
        font-family: 'Gothic A1', sans-serif;
        
        &::selection{
            background-color: ${theme.colors["yellowGreen"]};
        }

        .korNum {
            font-family: 'Cormorant Garamond', serif;
            font-weight: 300;
            font-size: 1.2rem;

            &::selection{
                background-color: ${theme.colors["yellowGreen"]};
    }}}
`;
export const ImgBoxOut = styled.div`
    height: ${({height, unit}) => height + unit};
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    margin-top: ${({marginTop, unit}) => marginTop + unit};
    margin-bottom: ${({marginBottom, unit}) => marginBottom + unit};
    position: relative;

    .box {
        width: ${({width}) => width};
        float: ${({LorR}) => LorR === "L" ? "left" : "right"};

        .img {
            display: block;
            height: auto;
            width: 100%;
            border: .05rem solid ${({borderColor}) => borderColor};
            ${({isWhite}) => isWhite ? "filter: brightness(97%);": null}
    }}
`;
ImgBoxOut.defaultProps = {
    isWhite : false,
    LorR : "L",
}
export const ImgBoxBackground = styled.div`
    margin-left: 2.5vw;
    background-color: ${({color}) => color};
    width: calc(100%-2.5vw - ${({marginRight, unit}) => marginRight + unit});
    margin-top: ${({marginTop, unit}) => marginTop + unit};
    margin-right: ${({marginRight, unit}) => marginRight + unit};
    padding-top: ${({paddingTop, unit}) => paddingTop + unit};
    padding-left: ${({paddingLeft, unit}) => paddingLeft + unit};
    padding-right: ${({paddingRight, unit}) => paddingRight + unit};
    padding-bottom: ${({paddingBottom, unit}) => paddingBottom + unit};
`;
ImgBoxBackground.defaultProps = {
    marginRight: "0",
    marginTop: "0"
}
export const ImgBoxIn = styled.div`
    width: 100%;
    height: ${({height, unit}) => height + unit};
    margin-bottom: ${({marginBottom, unit}) => marginBottom + unit};

    .img {
        float: ${({LorR}) => LorR === "L" ? "left" : "right"};
        height: 100%;
        width: auto;
    }
`;
ImgBoxIn.defaultProps = {
    unit: "rem",
    marginBottom: "1",
    LorR : "L"
}
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
    }}
`;