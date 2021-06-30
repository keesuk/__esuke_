import styled from "styled-components";
import theme from "./_Theme.jsx";

export const MainTitleDiv = styled.div`
    margin-left: 7%;
    margin-right: 18%;
    
    font-weight: ${theme.fontWeights["medium"]};
    font-family: ${theme.fontFamilys["engMono"]};
    line-height: 4.4rem;

    .text {
        font-size: ${theme.fontSizes["A1"]};
        letter-spacing: -.06rem;
        
        mark {
            background-color: ${colors["yellow"]};
            display: inline-block; 
            height: 1.4rem;
            line-height: 1.6rem;
            padding-top: -1rem;
    }}
    .link { 
        margin-top: 2rem; 
        margin-left: .2rem;
    }
`;
export const LinkA = styled.a`
    font-size: .9rem;
    font-weight: 500;
    letter-spacing: -.025rem;
    margin-right: 2rem;
    &:hover {
        background-image: 
            linear-gradient(transparent, transparent),
            linear-gradient(transparent, transparent),
            linear-gradient(to right, ${({color}) => color});
        background-repeat: no-repeat;
        background-position: 120%, 122%, 0 130%;
        background-size: 100% 1.5rem;
        color: white;
        z-index: 2;
    }
`;
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

export const ImgButtonDiv = styled.div`
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