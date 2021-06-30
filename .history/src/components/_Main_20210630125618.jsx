import styled from "styled-components";
import theme from "../css/_Theme.jsx"

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