import styled from "styled-components"
import { marking } from "../../_data/_Functions.jsx"

const MainTitleDiv = styled.div`
    margin-left: 7%;
    margin-right: 14%;

    .text {
        .category {
            font-size: 2rem;
            letter-spacing: -.07rem;
        }
        
        ${({theme}) => theme.mobile`
            font-size: 2.2rem;
            line-height: 3.5rem;
            letter-spacing: -0.1rem;

            .category {
                font-size: 1.1rem;
                letter-spacing: -.05rem;
                line-height: 0;
            }
        `}

        line-height: 4.4rem;
        letter-spacing: -0.06rem;
        font-size: ${theme.fontObjs["mainTitle"]["fontSize"]};
        font-family: ${theme.fontObjs["mainTitle"]["fontFamily"]};
        font-weight: ${({color}) => color === "home"
            ? theme.fontObjs["mainTitle"]["fontWeight"]["home"]
            : theme.fontObjs["mainTitle"]["fontWeight"]["page"]
        };
        
        .mark {
            text-decoration: ${({isThin}) => isThin 
                ? "line-through" 
                : "none"
            };
            background: linear-gradient(to top, 
                transparent 45%, 
                ${({color, isThin}) => isThin 
                    ? "transparent" 
                    : (color === "home" 
                        ? theme.colorObjs["mark"] 
                        : color
                )} 45% 85%, 
                transparent 85%
            );
            color: ${({color, isThin}) => isThin
                ? (color === "home" 
                    ? theme.colorObjs["mark"] 
                    : color)
                : "transparent" 
            };

            .titleText {
                font-weight: ${({color}) => color === "home"
                    ? theme.fontObjs["mainTitle"]["mark"]["fontWeight"]["home"]
                    : theme.fontObjs["mainTitle"]["mark"]["fontWeight"]["page"]
                };
                font-style: ${({color}) => color === "home"
                    ? theme.fontObjs["mainTitle"]["mark"]["fontStyle"]["home"]
                    : theme.fontObjs["mainTitle"]["mark"]["fontStyle"]["page"]
                };
                color: black;
            }
        }
    }
`;
const LinkA = styled.a`
    font-size: ${theme.fontObjs["linkA"]["fontSize"]};
    font-weight: ${theme.fontObjs["linkA"]["fontWeight"]};
    font-family: ${theme.fontObjs["linkA"]["fontFamily"]};
    letter-spacing: -.025rem;
    margin-left: 1.8rem;
    cursor: pointer;

    &:after { 
        content: "${({content}) => content}";
        position: absolute;
        height: .2rem;
        margin-top: -2.2rem;
        color: transparent;
        visibility: hidden;
        display: block;
        background-image: linear-gradient(to right, ${({color}) => color});
        background-repeat: no-repeat;
        background-position: 120%, 122%, 0 10%;
        background-size: 100% 10px;
    }
    &:hover:after { 
        visibility: visible;
    }
`;

const MainTitle = ({color, isThin, title, category, link}) => {
    return(
        <MainTitleDiv
            isThin={isThin}
            color={color}
        >
            {color === "home" 
                ? <div 
                        dangerouslySetInnerHTML={{__html: 
                            marking(
                                title["title"],
                                title["mark"],
                                ["TITLE"],
                                `<span class="mark"><span class="titleText">TITLE</span></span>`
                        )}}
                        className="text"
                    />
                :   <div className="text">
                        <span className="mark">
                            <span className="titleText">
                                {title}:
                            </span>
                        </span><br/>
                        <span className="category">
                            {category}
                        </span>
                    </div>
            }

        </MainTitleDiv> 
    )
}

export default MainTitle;