import { useState, useEffect, useRef} from "react";
import styled from "styled-components";
import theme from "../../css/_Theme.jsx";
import media from "../../css/_Media.jsx";
import { UseWindowSize, isMobile } from "../../_data/_Functions.jsx";                              
import ReactCursorPosition, { INTERACTIONS } from "react-cursor-position";


const marginLayout = theme.layoutRatio["leftMargin"]
const value = theme.layoutRatio["ratio"]
const deskTopCor = 18
const ratio = 3

const CursorDiv = styled.div`
    transform: translate(${({cor}) => `${cor.left - deskTopCor}px, ${cor.top - deskTopCor}px`});
    opacity: ${({active}) => active 
        ? "1" 
        : "0"
    };
    transition-property: background-color, opacity;
    clip-path: circle(4.4rem at left top);
    transition: all .05s ease;
    background-color: white;
    pointer-events: none;
    position: absolute;
    z-index: 20;

    &:after {
        border: .4rem solid black;
        background-color: white;
        border-radius: 8rem;
        position: absolute;
        content: "";
        display: flex;
        z-index: 1000;
        left: -4.4rem;
        top: -4.4rem;
        width: 8rem;
        height: 8rem;
    }
    .logoMask {
        height: ${({height}) => height * ratio}px;
        width: ${({width}) => width * ratio}px;
        pointer-events: none;
        position: absolute;
        z-index: 10000;
        
        .logoType {
            fill: ${({logoTypeColor}) => logoTypeColor};
        }
    }
`;

const TitleBoxLogo = ({
    detectedEnvironment: {isMouseDetected, isTouchDetected},
    position: {x, y},
    isPositionOutside, 
    isActive,
    conCor,
    logo }) => {

    const [glassCor, setGlassCor] = useState({})
    const [imgCor, setImgCor] = useState({})
    const [active, setActive] = useState(false)
    
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
        if(isActive){
            setActive(true)
        }else setActive(false) 

    }, [isPositionOutside, isMouseDetected, isTouchDetected, isActive])

    return (
        <>
            <CursorDiv 
                style={{ 
                    left: `${x}px`, 
                    top: `${y}px`
                }}
                height={imgCor.height}
                width={imgCor.width}
                left={imgCor.left}
                top={imgCor.top}
                active={active}
                cor={glassCor}
            >
                <div 
                    style={{ transform: `translate(
                        -${x * ratio}px, 
                        -${y * ratio}px)`
                    }}
                    className="logoMask"
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
    ${({theme, hover, backGroundColor}) => theme.mobile`
        padding-left: ${({paddingLeftRight}) => paddingLeftRight + 4}%;
        padding-bottom: ${({paddingTopBottom}) => paddingTopBottom}%;
        padding-right: ${({paddingLeftRight}) => paddingLeftRight}%;
        padding-top: ${({paddingTopBottom}) => paddingTopBottom}%;
        margin-top: ${marginLayout * value}vw;
        margin-left: 0vw;
        
        &:before {
            left: ${marginLayout * value}vw;
            background-color: ${hover 
                ? "white" 
                : backGroundColor
            };
            transition: all .2s;
            position: absolute;
            display: block;
            height: 100%;
            width: 100%;
            content: "";
            z-index: -1;
            top: 0;
        }
    `}
    ${({theme}) => theme.deskTop`
        background-color: ${({backGroundColor, hover}) => hover ? "white" : backGroundColor};
        padding-bottom: ${({paddingTopBottom}) => paddingTopBottom}%;
        padding-right: ${({paddingLeftRight}) => paddingLeftRight}%;
        padding-left: ${({paddingLeftRight}) => paddingLeftRight}%;
        padding-top: ${({paddingTopBottom}) => paddingTopBottom}%;
        margin-left: ${marginLayout}vw;
        margin-top: ${marginLayout}vw;
    `}
    transition: all .2s;
    position: relative;
    overflow-x: clip;

    .cursor {
        cursor: none; 
        padding: 20px;
    }

    .logoOrigin {
        .logoType {
            fill: ${({hover}) => hover 
                ? "black" 
                : "white"
            };
        }
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
            paddingTopBottom={isMobile(UseWindowSize(), paddingTopBottom)}
            paddingLeftRight={isMobile(UseWindowSize(), paddingLeftRight)}
            backGroundColor={backGroundColor}
            hover={hover}
            ref={conRef}
        >   
            <ReactCursorPosition 
                activationInteractionMouse={INTERACTIONS.HOVER} 
                activationInteractionTouch={INTERACTIONS.TOUCH}
                {...{ 
                    className: "cursor", 
                    onActivationChanged: ({isActive}) => setHover(isActive)
            }}>
                <TitleBoxLogo 
                    conCor={conCor}
                    logo={logo}
                />
            </ReactCursorPosition>
        </TitleBoxLogoDiv>
    )
}

export default LogoBox;




    
    