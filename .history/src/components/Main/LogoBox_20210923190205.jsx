import { useState, useEffect, useRef} from "react";
import styled from "styled-components";
import theme from "../../css/_Theme.jsx";
import media from "../../css/_Media.jsx";
import { UseWindowSize, isMobile } from "../../_data/_Functions.jsx";                              
import ReactCursorPosition, { INTERACTIONS } from "react-cursor-position";


const value = theme.layoutRatio["ratio"]
const marginLayout = theme.layoutRatio["leftMargin"]
const ratio = 3
const deskTopCor = 18

const CursorDiv = styled.div`
    position: absolute;
    z-index: 20;
    transform: translate(${({cor}) => `${cor.left - deskTopCor}px, ${cor.top - deskTopCor}px`}) scale(1.0);
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
        width: ${({width}) => width * ratio}px;
        height: ${({height}) => height * ratio}px;
        .logoType {
            fill: ${({logoTypeColor}) => logoTypeColor};
        }
    }
`;

const TitleBoxLogo = ({
    position: {x, y},
    isActive,
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
        
        if(isActive){
            if(!isPositionOutside) setActive(true)
            else setActive(false)
        }else setActive(false) 

    }, [x, y, isPositionOutside, isActive])

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
                        -${position.x * ratio}px, 
                        -${position.y * ratio}px)`
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
    background-color: ${({backGroundColor, hover}) => hover ? "white" : backGroundColor};
    transition: all .2s;
    position: relative;
    overflow: hidden;

    &:after { 
    ${({hover}) => hover ? `
        transition-delay: .2s;
        pointer-events: none;
        content: "";
        display: block;
        top: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 100;
        background: linear-gradient(180deg, rgba(255,255,255,1) 1%, rgba(255,255,255,0) 5% 10%, rgba(255,255,255,0) 90% 95%, rgba(255,255,255,1) 99% 100%);
    ` : null}}

    .cursor {
        cursor: none; 
        padding: 20px;
    }
    .logoOrigin {
        .logoType {fill: ${({hover}) => hover ? "black" : "white"};}
    }
`;

const LogoBox = ({ backGroundColor, paddingTopBottom, paddingLeftRight, logo}) => {

    const [conCor, setConCor] = useState({})
    const [hover, setHover] = useState(false)
    const conRef = useRef()

    useEffect((event) => {
        const cor = conRef.current.getBoundingClientRect()
        setConCor(cor)

    }, [UseWindowSize(), conCor.top || conCor.left < 0])


    return (
        <TitleBoxLogoDiv 
            ref={conRef}
            backGroundColor={backGroundColor}
            hover={hover}
            paddingTopBottom={isMobile(UseWindowSize(), paddingTopBottom)}
            paddingLeftRight={isMobile(UseWindowSize(), paddingLeftRight)}
        >   
            <ReactCursorPosition 
                activationInteractionTouch={INTERACTIONS.TOUCH}
                {...{ 
                    className: "cursor", 
                    onActivationChanged: ({isActive}) => setHover(isActive)
            }}>
                <TitleBoxLogo 
                    logo={logo}
                    conCor={conCor}
                />
            </ReactCursorPosition>
        </TitleBoxLogoDiv>
    )
}

export default LogoBox;




    
    