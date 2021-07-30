import { useState, useEffect} from "react";
import styled from "styled-components";
import ReactCursorPosition from "react-cursor-position";

const TitleBoxLogoDiv = styled.div`
    background-color: ${({backGroundColor}) => backGroundColor};
    margin-left: 2.5vw;
    margin-top: 2.5vw;
    padding: ${({paddingTopBottom}) => paddingTopBottom}% 0%;
    transition: all .2s;
    .logo {
        pointer-events: auto;
        padding: auto;
        width: calc(${({logoWidth}) => logoWidth}%);
        display: flex;
        margin: auto;
        .logoType {
            width: 19%;
            fill: ${({logoTypeColor}) => logoTypeColor};
    }}
    &:hover {
        background-color: ${({logoTypeColor}) => logoTypeColor};
        .logoType { 
            fill: ${({logoBackColor}) => logoBackColor};
    }}
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
        setPosition({ x: x, y: y })
    }, [x, y])

    return (
        <TitleBoxLogoDiv 
            backGroundColor={backGroundColor}
            logoTypeColor={logoTypeColor}
            logoBackColor={logoBackColor}
            paddingTopBottom={paddingTopBottom}
            logoWidth={logoWidth}
        >   
            <svg style={{position: "absolute", zIndex: "1", 
  left: "0", 
  right: "0", 
  marginLeft: "auto", 
  marginRight: "auto",
  width: "200%" }} className="logo">
                <defs>
                    <clipPath id="mask">
                        <circle id="mask-circle" cx={x-30} cy={y-30} r="10%" style={{fill: "#ffffff"}}/>
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


// <circle id="circle-shadow" cx={x} cy={y} r="10%" style={{stroke: "#000", fill: "transparent", strokeWidth: "5"}} />