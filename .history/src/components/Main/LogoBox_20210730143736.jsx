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
        padding: 5%;
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
    logo }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [clicked, setClicked] = useState(false)
    const [linkHovered, setLinkHovered] = useState(false)

    useEffect(() => {
        setPosition({ x: x, y: y })
    }, [x, y])

    return (
        <TitleBoxLogoDiv 
            backGroundColor={"hotpink"}
            logoTypeColor={"white"}
            logoBackColor={"black"}
            paddingTopBottom={"8"}
            logoWidth={"80"}
        >   
            <svg className="logo">
                <g clip-path="url(#mask)">
                    {logo}
                </g>
                <circle id="circle-shadow" cx="50%" cy="50%" r="8%" style={{stroke: "#000", fill: "transparent", strokeWidth: "5"}} />
            </svg>
        </TitleBoxLogoDiv>
    )
}

const LogoBox = ({ logo }) => {

    return (
        <ReactCursorPosition style={{cursor: "none", pointerEvents: "none"}}>
            <TitleBoxLogo logo={logo}/>
        </ReactCursorPosition>
    )
}

export default LogoBox;


// <defs>
//                 <clipPath id="mask">
//                     <circle id="mask-circle" cx="50%" cy="50%" r="8%" style={{fill: "#ffffff"}}/>
//                 </clipPath>
//             </defs>