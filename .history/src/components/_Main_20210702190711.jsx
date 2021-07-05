import styled from "styled-components";
import theme from "../css/_Theme.jsx"

export const MainTitleDiv = styled.div`
    margin-left: 7%;
    margin-right: 18%;

    .text {
        font-size: ${theme.fontObjs["mainTitle"]["fontSize"]};
        font-weight: ${theme.fontObjs["mainTitle"]["fontWeight"]};
        font-family: ${theme.fontObjs["mainTitle"]["fontFamily"]};
        line-height: 4.4rem;
        letter-spacing: -.06rem;
        
        mark {
            background-color: ${props => props.default 
                ? theme.colorObjs["mark"] 
                : props.color};
            display: inline-block; 
            height: 1.4rem;
            line-height: 1.6rem;
            padding-top: -1rem;
        }
    }
    .link {
        margin-left: 2rem;
    }
`;
export const LinkA = styled.a`
    font-size: ${theme.fontObjs["linkA"]["fontSize"]};
    font-weight: ${theme.fontObjs["linkA"]["fontWeight"]};
    font-family: ${theme.fontObjs["linkA"]["fontFamily"]};
    letter-spacing: -.025rem;
    margin-left: 2rem;

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