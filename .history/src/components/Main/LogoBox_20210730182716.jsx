import { useState, useEffect, useRef} from "react";
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
        padding: 3%;
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
    props,cor }) => {
    
    const { backGroundColor, logoTypeColor, logoBackColor, paddingTopBottom, logoWidth, logo, } = props

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [clicked, setClicked] = useState(false)
    const [linkHovered, setLinkHovered] = useState(false)
    
    const imgRef = useRef()

    useEffect(() => {
        let img = imgRef.current
        
        let bounds = img.getBoundingClientRect()

        let xx = cor.width - bounds.left
        let yy = cor.height - bounds.top
        // console.log(xx, yy)

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


