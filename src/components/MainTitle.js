import styled from "styled-components"

import { marking } from "../_data/_Functions.jsx"


const MainTitleDiv = styled.div`
    ${({theme}) => theme.mobile`
        margin-bottom: 10%;
        margin-right: 7%;
        margin-left: 7%;
        margin-top: 15%;
    `}
    margin-bottom: 20%;
    margin-right: 20%;

    .text {
        ${({theme}) => theme.mobile`
            letter-spacing: -0.12rem;
            line-height: 3.9rem;
            font-size: 2.4rem;
        `}
        font-weight: ${({theme, color}) => color === "home"
            ? theme.fontObjs["mainTitle"]["fontWeight"]["home"]
            : theme.fontObjs["mainTitle"]["fontWeight"]["page"]
        };
        font-family: ${({theme}) => theme.fontObjs["mainTitle"]["fontFamily"]};
        font-size: ${({theme}) => theme.fontObjs["mainTitle"]["fontSize"]};
        letter-spacing: -0.06rem;
        line-height: 5rem;

        .mark {
            background: linear-gradient(to top, transparent 45%, 
                ${({color, isThin, theme}) => isThin 
                    ? "transparent" 
                    : (color === "home" 
                        ? theme.colorObjs["mark"] 
                        : color
                )} 45% 85%, transparent 85%
            );
            color: ${({color, isThin, theme}) => isThin
                ? (color === "home" 
                    ? theme.colorObjs["mark"] 
                    : color)
                : "transparent" 
            };
            text-decoration: ${({isThin}) => isThin 
                ? "line-through" 
                : "none"
            };

            .titleText {
                font-weight: ${({color, theme}) => color === "home"
                    ? theme.fontObjs["mainTitle"]["mark"]["fontWeight"]["home"]
                    : theme.fontObjs["mainTitle"]["mark"]["fontWeight"]["page"]
                };
                font-style: ${({color, theme}) => color === "home"
                    ? theme.fontObjs["mainTitle"]["mark"]["fontStyle"]["home"]
                    : theme.fontObjs["mainTitle"]["mark"]["fontStyle"]["page"]
                };
                white-space: ${({color}) => color === "home"
                    ? "nowrap"
                    : ""
                };
                color: black;
            }
        }
        
        .category {
            ${({theme}) => theme.deskTop`
                letter-spacing: -0.1rem;
            `}
            ${({theme}) => theme.mobile`
                letter-spacing: -.05rem;
                font-size: 1.1rem;
                line-height: 0;
            `}
        }
    }
`

const MainTitleBox = ({color, isThin, text, category, link}) => {
    
    return(
        <MainTitleDiv
            isThin={isThin}
            color={color}
        >
            <div 
                dangerouslySetInnerHTML={{__html: 
                    marking(
                        text.text,
                        text.mark,
                        ["TITLE"],
                        `<span class="mark"><span class="titleText">TITLE</span></span>`
                )}}
                className="text"
            />

        </MainTitleDiv> 
    )
}

export default MainTitleBox