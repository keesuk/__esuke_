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