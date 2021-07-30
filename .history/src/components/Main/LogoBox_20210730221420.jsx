import { useState, useEffect, useRef} from "react";
import styled from "styled-components";
import { useWindowSize } from "../../_data/_Functions.jsx";                              
import ReactCursorPosition from "react-cursor-position";

const TitleBoxLogoDiv = styled.div`
    background-color: ${({backGroundColor}) => backGroundColor};
    margin-left: 2.5vw;
    margin-top: 2.5vw;
    width: calc(100%-2.5vw);
    padding: ${({paddingTopBottom}) => paddingTopBottom}% 10%;
    transition: all .2s;
    
    .logoMask {
        pointer-events: auto;
        display: flex;
        margin: auto;
        width: 400%;
        .logoType {
            transform: translate(${({x}) => x}px, ${({y}) => y}px);
            fill: ${({logoTypeColor}) => logoTypeColor};
    }}
    .logo {
        pointer-events: auto;
        .logoType {
            fill: ${({logoTypeColor}) => logoTypeColor};
    }}
    &:hover {
        background-color: ${({logoTypeColor}) => logoTypeColor};
        .logoType { 
            fill: ${({logoBackColor}) => logoBackColor};
    }}
`;

const CursorDiv = styled.div`
    position: absolute;
    z-index: 100000000;
    width: 8rem;
    height: 8rem;
    border-radius: 8rem;
    border: .4rem solid black;
    transform: translate(${({cor}) => `${5}rem, ${22}rem`}) scale(1.0);
    opacity: ${({active}) => active === true ? "1" : "0"};
    background-color: white;
    clip-path: circle(60px at center);
    pointer-events: none;
    transition: all .05s ease;
    transition-property: background-color, opacity, transform, width, height;
`;

const TitleBoxLogo = ({
    position: {x, y}, 
    detectedEnvironment: {isMouseDetected, isTouchedDected},
    isActive,
    logo }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [clicked, setClicked] = useState(false)
    const [linkHovered, setLinkHovered] = useState(false)
    const [imgCor, setImgCor] = useState({})

    const imgRef = useRef()

    useEffect(() => {
        setPosition({ x: x, y: y })
    }, [x, y])

    return (
        <>
            <CursorDiv 
                active={isActive}
                style={{ left: `${position.x}px`, top: `${position.y}px`}}
            >
                <div className="logoMask">
                    {logo}
                </div>
            </CursorDiv>
            <div 
                className="logo"
                ref={imgRef}
            >
                {logo}
            </div>
        </>
    )
}

const LogoBox = ({ backGroundColor, logoTypeColor, logoBackColor, paddingTopBottom, logoWidth, logo, }) => {

    return (
        <TitleBoxLogoDiv 
            backGroundColor={backGroundColor}
            logoTypeColor={logoTypeColor}
            logoBackColor={logoBackColor}
            paddingTopBottom={paddingTopBottom}
            logoWidth={logoWidth}
        >   
            <ReactCursorPosition style={{cursor: "none", pointerEvents: "none"}}>
                <TitleBoxLogo logo={logo}/>
            </ReactCursorPosition>
        </TitleBoxLogoDiv>
    )
}

export default LogoBox;


