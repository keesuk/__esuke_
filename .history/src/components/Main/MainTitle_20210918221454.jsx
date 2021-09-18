import styled from "styled-components";
import theme from "../../css/_Theme.jsx"

const MainTitleDiv = styled.div`
    margin-left: 7%;
    margin-right: 18%;

    .text {
        @media all and (min-width:0px) and (max-width:1080px) {
            font-size: 2.2rem;
            line-height: 3.2rem;

            .category {
                font-size: 1.1rem;
                letter-spacing: -.05rem;
                line-height: 4rem;
            }
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
        
        .line {
            display: inline-block;
            text-decoration: ${({TorB}) => TorB === "T" ? "line-through" : "none"};
            background-color: ${({color, TorB}) => TorB === "T" 
                ? "" 
                : (color === "home" 
                    ? theme.colorObjs["mark"] 
                    : color
            )};
            color: ${({color, TorB}) => TorB === "B" 
                ? "" 
                : (color === "home" 
                    ? theme.colorObjs["mark"] 
                    : color
            )};

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

// display: inline-block; 
// height: ${({TorB}) => TorB === "T" ? "0.25rem" : "1.4rem"};
// line-height: ${({TorB}) => TorB === "T" ? "0.1rem" : "1.6rem"};

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
                        <span className="line">
                            <span className="titleText">
                                {title}
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