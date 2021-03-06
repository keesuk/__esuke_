import styled from "styled-components";
import theme from "./_Theme.jsx";

export const IntroduceDiv = styled.div`
    margin-left: 7%;
    margin-right: 18%;
    font-weight: 500;
    line-height: 4.4rem;
    .text {
        font-size: 2.6rem;
        letter-spacing: -.06rem;
        
        mark {
            display: inline-block; 
            height: 1.4rem;
            line-height: 1.6rem;
            padding-top: -1rem;
            background-color: ${colors["yellow"]};
    }}
    .link { 
        margin-top: 2rem; 
        margin-left: .2rem;
    }
`;
export const ALink = styled.a`
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