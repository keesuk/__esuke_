import { useState, useEffect, useRef} from "react";
import styled from "styled-components";
import { useWindowSize } from "../../_data/_Functions.jsx";                              
import ReactCursorPosition from "react-cursor-position";

const TitleBoxLogoDiv = styled.div`
    background-color: ${({backGroundColor}) => backGroundColor};
    margin-left: 2.5vw;
    margin-top: 2.5vw;
    width: calc(100%-2.5vw);
    padding: ${({paddingTopBottom}) => paddingTopBottom}% 4vw;
    transition: all .2s;

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
    transform: translate(${({cor}) => `${10}px, ${300}px`}) scale(1.0);
    opacity: ${({active}) => active === true ? "1" : "0"};
    background-color: white;
    clip-path: circle(4.4rem at center);
    pointer-events: none;
    transition: all .05s ease;
    transition-property: background-color, opacity, transform, width, height;
`;
const LogoMask = styled.div`
    pointer-events: auto;
    position: absolute;
    width: ${({width}) => width*3}px;
    height: ${({height}) => height*3}px;
    .logoType {
        fill: ${({logoTypeColor}) => logoTypeColor};
    }
`;

const TitleBoxLogo = ({
    position: {x, y}, 
    detectedEnvironment: {isMouseDetected, isTouchedDected},
    isActive,
    logo }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [clicked, setClicked] = useState(false)
    const [linkHovered, setLinkHovered] = useState(false)
    const [active, setActive] = useState(false)
    const [imgCor, setImgCor] = useState({})

    const imgRef = useRef()

    useEffect(() => {
        const cor = imgRef.current.getBoundingClientRect()
        setImgCor(cor)
    }, [])

    useEffect(() => {
        setPosition({ x: x, y: y })
    }, [x, y])

    return (
        <>
            <CursorDiv 
                active={isActive}
                cor={imgCor}
                style={{ left: `${position.x}px`, top: `${position.y}px`}}
            >
            </CursorDiv>
            <LogoMask
                width={imgCor.width}
                height={imgCor.height}
                style={{ transform: `translate(-${position.x}px, -${position.y}px)`}}
            >
                {logo}
            </LogoMask>
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
            <ReactCursorPosition style={{cursor: "none", pointerEvents: "none", padding: "20px"}}>
                <TitleBoxLogo logo={logo}/>
            </ReactCursorPosition>
        </TitleBoxLogoDiv>
    )
}

export default LogoBox;




    