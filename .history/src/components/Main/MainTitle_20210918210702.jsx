import styled from "styled-components";
import theme from "../../css/_Theme.jsx"

const MainTitleDiv = styled.div`
    margin-left: 7%;
    margin-right: 18%;

    .text {
        @media all and (min-width:0px) and (max-width:1080px) {
            font-size: 1.5rem;
            line-height: 3.2rem;
        }
        @media all and (min-width:1081px) {
            font-size: ${theme.fontObjs["mainTitle"]["fontSize"]};
            line-height: 4.4rem;
        }
        font-weight: ${({color}) => color === "home"
            ? theme.fontObjs["mainTitle"]["fontWeight"]["home"]
            : theme.fontObjs["mainTitle"]["fontWeight"]["page"]
        };
        font-family: ${theme.fontObjs["mainTitle"]["fontFamily"]};
        letter-spacing: -0.06rem;
        
        .mark {
            font-weight: ${({color}) => color === "home"
                ? theme.fontObjs["mainTitle"]["mark"]["fontWeight"]["home"]
                : theme.fontObjs["mainTitle"]["mark"]["fontWeight"]["page"]
            };
            font-style: ${({color}) => color === "home"
                ? theme.fontObjs["mainTitle"]["mark"]["fontStyle"]["home"]
                : theme.fontObjs["mainTitle"]["mark"]["fontStyle"]["page"]
            };
            background-color: ${({color}) => color === "home" 
                ? theme.colorObjs["mark"] 
                : color
            };
            display: inline-block; 
            height: ${({TorB}) => TorB === "T" ? "0.25rem" : "1.4rem"};
            line-height: ${({TorB}) => TorB === "T" ? "0.1rem" : "1.6rem"};
        }
        .link {
            @media all and (min-width:0px) and (max-width:1080px) {
                margin-left: 0;
                margin-top: -3.8rem;
                display: none;
            }
            @media all and (min-width:1081px) {
            }
            margin-left: 16rem;
            margin-top: -3.8rem;
            margin-left: 16rem;
            margin-top: -3.8rem;
            display: flex;
            cursor: pointer;
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

const MainTitle = ({color, TorB, title, category, link}) => {
    return(
        <MainTitleDiv
            color={color}
            TorB={TorB}
        >
            {color === "home" 
                ?   <div className="text">
                        {title}
                        <span className="link">
                            {link.map(v =>
                                <LinkA 
                                    color={v["color"]} 
                                    href={v["link"]} 
                                    key={v["title"]}
                                    content={v["title"]}
                                >
                                    {v["title"]}
                                </LinkA>)
                            }
                        </span>
                    </div>
                :   <div className="text">
                        <div className="mark">{title}</div><br/>
                        {category}
                    </div>
            }

        </MainTitleDiv> 
    )
}

export default MainTitle;