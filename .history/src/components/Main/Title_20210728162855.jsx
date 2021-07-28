import styled from "styled-components";
import theme from "../../css/_Theme.jsx"

export const MainTitleDiv = styled.div`
    margin-left: 7%;
    margin-right: 18%;

    .text {
        font-size: ${theme.fontObjs["mainTitle"]["fontSize"]};
        font-weight: ${props => props.default
            ? theme.fontObjs["mainTitle"]["fontWeight"]["home"]
            : theme.fontObjs["mainTitle"]["fontWeight"]["page"]
        };
        font-family: ${theme.fontObjs["mainTitle"]["fontFamily"]};
        line-height: 4.4rem;
        letter-spacing: ${props => props.default
                ? "-0.06rem"
                : "-0.07rem"
            };
        
        mark {
            font-weight: ${props => props.default
                ? theme.fontObjs["mainTitle"]["mark"]["fontWeight"]["home"]
                : theme.fontObjs["mainTitle"]["mark"]["fontWeight"]["page"]
            };
            font-style: ${props => props.default
                ? theme.fontObjs["mainTitle"]["mark"]["fontStyle"]["home"]
                : theme.fontObjs["mainTitle"]["mark"]["fontStyle"]["page"]
            };
            background-color: ${props => props.default 
                ? theme.colorObjs["mark"] 
                : props.color
            };
            display: inline-block; 
            height: ${({TorB}) => TorB === "T" ? "0.25rem" : "1.4rem"};
            line-height: ${({TorB}) => TorB === "T" ? "0.1rem" : "1.6rem"};
            padding-top: -1rem;
        }
        .link {
            margin-left: 1.8rem;
        }
    }
`;
export const LinkA = styled.a`
    font-size: ${theme.fontObjs["linkA"]["fontSize"]};
    font-weight: ${theme.fontObjs["linkA"]["fontWeight"]};
    font-family: ${theme.fontObjs["linkA"]["fontFamily"]};
    letter-spacing: -.025rem;
    margin-left: 1.8rem;

    &:after { 
        content: "";
        position: absolute;
        z-index: 1000;
        height: .15rem;
        width: 100%;
        top: 0;
        visibility: hidden;
        background: linear-gradient(to right, ${({color}) => color});
    }
    &:hover:after { 
        visibility: visible;
    }
`;