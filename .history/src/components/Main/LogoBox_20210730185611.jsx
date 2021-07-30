import { useState, useEffect, useRef} from "react";
import styled from "styled-components";
import { useWindowSize } from "../../_data/_Functions.jsx";                              
import ReactCursorPosition from "react-cursor-position";

const TitleBoxLogoDiv = styled.div`
    background-color: ${({backGroundColor}) => backGroundColor};
    margin-left: 2.5vw;
    margin-top: 2.5vw;
    padding: ${({paddingTopBottom}) => paddingTopBottom}% 3%;
    transition: all .2s;
    .logo {
        pointer-events: auto;
        width: calc(${({logoWidth}) => logoWidth}%);
        display: flex;
        margin: auto;
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
    width: 9rem;
    height: 9rem;
    border-radius: 9rem;
    border: .4rem solid black;
    transform: translate(0rem, 20rem) scale(1.0);
    opacity: ${({active}) => active === true ? "1" : "0"};
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
    
    const imgRef = useRef()
    const { width, height } = useWindowSize()

    useEffect(() => {
        let img = imgRef.current
        
        let bounds = img.getBoundingClientRect()
        
        let xx = bounds.width - x
        let yy = bounds.height - y
        
        console.log("bou", bounds.width, bounds.height)
        console.log("cur", x, y)

        setPosition({ x: x, y: y })
    }, [x, y])

    return (
        <>
            <CursorDiv 
                active={isActive}
                style={{ left: `${position.x}px`, top: `${position.y}px`}}
            />
            <svg 
                className="logo"
                ref={imgRef}
            >
                {logo}
            </svg>
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


