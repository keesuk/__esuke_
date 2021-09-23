import { useState, useEffect, useRef} from "react";
import styled from "styled-components";
import theme from "../../css/_Theme.jsx";
import media from "../../css/_Media.jsx";
import { UseWindowSize, isMobile } from "../../_data/_Functions.jsx";                              
import ReactCursorPosition, { INTERACTIONS } from "react-cursor-position";


const value = theme.layoutRatio["ratio"]
const marginLayout = theme.layoutRatio["leftMargin"]

const CursorDiv = styled.div`
    position: absolute;
    z-index: 100000000;
    transform: translate(${({cor}) => `${cor.left-18}px, ${cor.top-18}px`}) scale(1.0);
    opacity: ${({active}) => active 
        ? "1" 
        : "0"
    };
    background-color: white;
    clip-path: circle(4.4rem at left top);
    pointer-events: none;
    transition: all .05s ease;
    transition-property: background-color, opacity, transform, width, height;

    &:after {
        content: "";
        display: flex;
        position: absolute;
        z-index: 1000;
        left: -4.4rem;
        top: -4.4rem;
        background-color: white;
        width: 8rem;
        height: 8rem;
        border-radius: 8rem;
        border: .4rem solid black;
    }
    .logoMask {
        pointer-events: auto;
        position: absolute;
        z-index: 10000;
        width: ${({width}) => width*3}px;
        height: ${({height}) => height*3}px;
        .logoType {
            fill: ${({logoTypeColor}) => logoTypeColor};
        }
    }
`;

const TitleBoxLogo = ({
    position: {x, y},
    isPositionOutside, 
    detectedEnvironment: {isMouseDetected, isTouchDetected},
    conCor,
    logo }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [active, setActive] = useState(false)
    const [imgCor, setImgCor] = useState({})
    const [glassCor, setGlassCor] = useState({})
    
    const imgRef = useRef()

    useEffect(() => {
        const cor = imgRef.current.getBoundingClientRect()
        setImgCor(cor)
        
        setGlassCor({
            left: cor.left - conCor.left,
            top: cor.top - conCor.top,
        })
    }, [conCor])

    useEffect(() => {
        setPosition({ x: x, y: y })
        
        if(!isPositionOutside || isTouchDetected) setActive(true)
        else setActive(false)  

    }, [x, y, isPositionOutside, isTouchDetected])

    return (
        <>
            <CursorDiv 
                active={active}
                cor={glassCor}
                style={{ 
                    left: `${position.x}px`, 
                    top: `${position.y}px`
                }}
                width={imgCor.width}
                height={imgCor.height}
                left={imgCor.left}
                top={imgCor.top}
            >
                <div 
                    className="logoMask"
                    style={{ transform: `translate(
                        -${position.x*3}px, 
                        -${position.y*3}px)`
                    }}
                >
                    {logo}
                </div>
            </CursorDiv>
            <div 
                className="logoOrigin"
                ref={imgRef}
            >
                {logo}
            </div>
        </>
    )
}

const TitleBoxLogoDiv = styled.div`
    ${media.mobile`
        margin-left: ${marginLayout * value}vw;
        margin-top: ${marginLayout * value}vw;
    `}
    ${media.deskTop`
        margin-top: ${marginLayout}vw;
        margin-left: ${marginLayout}vw;
    `}
    padding: ${({paddingTopBottom, paddingLeftRight}) => paddingTopBottom + "%" +  paddingLeftRight + "%" };
    background-color: ${({backGroundColor}) => backGroundColor};
    transition: all .2s;
    position: relative;
    overflow: hidden;
    .logoOrigin {
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

const LogoBox = ({ backGroundColor, logoTypeColor, logoBackColor, paddingTopBottom, paddingLeftRight, logo}) => {

    const [conCor, setConCor] = useState({})
    const conRef = useRef()

    useEffect(() => {
        const cor = conRef.current.getBoundingClientRect()
        setConCor(cor)

    }, [UseWindowSize(), conCor.top || conCor.left < 0])

    return (
        <TitleBoxLogoDiv 
            ref={conRef}
            backGroundColor={backGroundColor}
            logoTypeColor={logoTypeColor}
            logoBackColor={logoBackColor}
            paddingTopBottom={isMobile(UseWindowSize(), paddingTopBottom)}
            paddingLeftRight={isMobile(UseWindowSize(), paddingLeftRight)}
        >   
            <ReactCursorPosition 
                activationInteractionTouch={INTERACTIONS.TOUCH}
                activationInteractionMouse={INTERACTIONS.HOVER}
                style={{
                    cursor: "none", 
                    pointerEvents: "none", 
                    padding: "20px"
                }}
            >
                <TitleBoxLogo 
                    logo={logo}
                    conCor={conCor}
                />
            </ReactCursorPosition>
        </TitleBoxLogoDiv>
    )
}

export default LogoBox;




    
    