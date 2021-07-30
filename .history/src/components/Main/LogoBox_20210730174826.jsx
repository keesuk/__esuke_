import { useState, useEffect} from "react";
import styled from "styled-components";
import ReactCursorPosition from "react-cursor-position";

const TitleBoxLogoDiv = styled.div`
    background-color: ${({backGroundColor}) => backGroundColor};
    margin-left: 2.5vw;
    margin-top: 2.5vw;
    padding: ${({paddingTopBottom}) => paddingTopBottom}% 0%;
    transition: all .2s;
    position: relative;
    overflow-x: hidden;
    .logo {
        pointer-events: auto;
        padding: auto;
        width: calc(${({logoWidth}) => logoWidth}%);
        display: flex;
        margin: auto;
        .logoType {
            fill: ${({logoTypeColor}) => logoTypeColor};
        }
    }
    .logoMask {
        pointer-events: auto;
        width: 400%;
        display: flex;
        align-items: center;
        justify-content: center;
        .logoType {
            fill: ${({logoTypeColor}) => logoTypeColor};
        }
    }
    &:hover {
        background-color: ${({logoTypeColor}) => logoTypeColor};
        .logoType { 
            fill: ${({logoBackColor}) => logoBackColor};
    }}
`;

const CursorDiv = styled.div`
    position: absolute;
    z-index: 100000000;
    width: 9rem;
    height: 9rem;
    border-radius: 9rem;
    border: .4rem solid black;
    transform: translate(-4.5rem, 12rem) scale(1.0);
    opacity: ${({active}) => active === true ? "1" : "0"};
    pointer-events: none;
    transition: all .05s ease;
    transition-property: background-color, opacity, transform, width, height;
`;

const TitleBoxLogo = ({
    position: {x, y}, 
    detectedEnvironment: {isMouseDetected, isTouchedDected},
    isActive,
    props }) => {
    
    const { backGroundColor, logoTypeColor, logoBackColor, paddingTopBottom, logoWidth, logo, } = props

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [clicked, setClicked] = useState(false)
    const [linkHovered, setLinkHovered] = useState(false)
    
    useEffect(() => {
        setPosition({ x: x-50, y: y-50 })
    }, [x, y])

    return (
        <TitleBoxLogoDiv 
            backGroundColor={backGroundColor}
            logoTypeColor={logoTypeColor}
            logoBackColor={logoBackColor}
            paddingTopBottom={paddingTopBottom}
            logoWidth={logoWidth}
        >   
            <svg style={{position: "absolute", zIndex: "1", marginLeft: "auto", marginRight: "auto", left: "0", right: "0"}} className="logoMask">
                <circle id="circle-shadow" cx={x} cy={y} r="3%" style={{ fill: "#fff", zIndex: "100",strokeWidth: "5"}} />
                <defs>
                    <clipPath id="mask">
                        <circle id="mask-circle" cx={x} cy={y} r="3%" style={{fill: "#ffffff", zIndex: "100"}}/>
                    </clipPath>
                </defs>
                <g clip-path="url(#mask)">
                    {logo}
                </g>
            </svg>
            <svg className="logo">
                {logo}
            </svg>
        </TitleBoxLogoDiv>
    )
}

const LogoBox = (props) => {

    return (
        <ReactCursorPosition style={{cursor: "none", pointerEvents: "none"}}>
            <TitleBoxLogo props={props}/>
        </ReactCursorPosition>
    )
}

export default LogoBox;


