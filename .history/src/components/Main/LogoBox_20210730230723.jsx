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
    clip-path: circle(4.4rem at center);
    pointer-events: none;
    transition: all .05s ease;
    transition-property: background-color, opacity, transform, width, height;
`;
const LogoMask = styled.div`
    pointer-events: auto;
    width: 100vw;
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
        console.log(x, y)
        console.log(imgCor.width, imgCor.height)

        if(isActive === true) { 
            if(0 > x || x > imgCor.width-20) setActive(false)
            else if (0 > y || y > imgCor.height-20) setActive(false)
            else setActive(true)
        }else if (isActive !== true) { 
            setActive(false)
        }
    }, [x, y])

    return (
        <>
            <CursorDiv 
                active={active}
                style={{ left: `${position.x}px`, top: `${position.y}px`}}
            >
                <LogoMask
                    style={{ transform: `translate(-${position.x*2}px, -${position.y*2}px)`}}
                >
                    {logo}
                </LogoMask>
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
            <ReactCursorPosition style={{cursor: "none", pointerEvents: "none"}}>
        <TitleBoxLogoDiv 
            backGroundColor={backGroundColor}
            logoTypeColor={logoTypeColor}
            logoBackColor={logoBackColor}
            paddingTopBottom={paddingTopBottom}
            logoWidth={logoWidth}
        >   
                <TitleBoxLogo logo={logo}/>
        </TitleBoxLogoDiv>
            </ReactCursorPosition>
    )
}

export default LogoBox;


