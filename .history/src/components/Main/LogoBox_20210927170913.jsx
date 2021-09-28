import { useState, useEffect, useRef} from "react"
import styled from "styled-components"
import media from "../../css/_Media.jsx"
import { UseWindowSize, isMobile } from "../../_data/_Functions.jsx"                              
import ReactCursorPosition, { INTERACTIONS } from "react-cursor-position"


const deskTopCor = 18
const mobileCor = 80
const ratio = 3

const CursorDiv = styled.div`
    transform: translate(${({cor, mobile}) => `
        ${cor.left - deskTopCor}px, 
        ${cor.top - (mobile 
            ? mobileCor 
            : deskTopCor)}px
    `});
    opacity: ${({active}) => active 
        ? "1" 
        : "0"
    };
    clip-path: circle(4.4rem at left top);
    transition: opacity .03s ease;
    pointer-events: none;
    position: absolute;
    z-index: 1;

    &:after {
        border: .4rem solid black;
        background-color: white;
        border-radius: 8rem;
        position: absolute;
        display: flex;
        left: -4.4rem;
        top: -4.4rem;
        height: 8rem;
        width: 8rem;
        content: "";
        z-index: 2;
    }
    .logoMask {
        ${({theme}) => theme.deskTop`
            margin-top: 0;
        `}
        ${({theme}) => theme.mobile`
            margin-top: 4.4rem;
        `}
        height: ${({height}) => height * ratio}px;
        width: ${({width}) => width * ratio}px;
        margin-left: 4.4rem;
        position: absolute;
        z-index: 3;
        
        .logoType {
            fill: ${({logoTypeColor}) => logoTypeColor};
        }
    }
`

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
            if(!isPositionOutside) setActive(true)
            else setActive(false)
        }else setActive(false) 

    }, [isPositionOutside, isMouseDetected, isTouchDetected, isActive])

    return (
        <>
            <CursorDiv 
                mobile={isTouchDetected 
                    ? true 
                    : (isMouseDetected 
                        ? false 
                        : false
                )}
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
                    style={{transform: `translate(
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
    ${({theme}) => theme.deskTop`
        background-color: ${({backGroundColor, hover}) => hover 
            ? "white" 
            : backGroundColor
        };
        padding-bottom: ${({paddingTopBottom}) => paddingTopBottom.deskTop}%;
        padding-right: ${({paddingLeftRight}) => paddingLeftRight.deskTop}%;
        padding-left: ${({paddingLeftRight}) => paddingLeftRight.deskTop}%;
        padding-top: ${({paddingTopBottom}) => paddingTopBottom.deskTop}%;
        margin-left: ${theme.layoutRatio["leftMargin"]}vw;
        margin-top: ${theme.layoutRatio["leftMargin"]}vw;
    `}
    ${({theme, hover, backGroundColor}) => theme.mobile`
        padding-left: calc(${({paddingLeftRight}) => paddingLeftRight.mobile}% + 3.5vw);
        padding-bottom: ${({paddingTopBottom}) => paddingTopBottom.mobile}%;
        padding-right: ${({paddingLeftRight}) => paddingLeftRight.mobile}%;
        padding-top: ${({paddingTopBottom}) => paddingTopBottom.mobile}%;
        margin-top: ${theme.layoutRatio["leftMargin"] * theme.layoutRatio["ratio"]}vw;
        margin-left: 0vw;
        
        &:before {
            left: ${theme.layoutRatio["leftMargin"] * theme.layoutRatio["ratio"]}vw;
            background-color: ${hover 
                ? "white" 
                : backGroundColor
            };
            transition: background-color .3s;
            position: absolute;
            display: block;
            height: 100%;
            width: 100%;
            content: "";
            z-index: -1;
            top: 0;
        }
    `}
    transition: background-color .3s;
    position: relative;
    overflow-x: clip;

    .cursorArea {
        padding: 20px;
        cursor: none; 
    }

    .logoOrigin {
        .logoType {
            fill: ${({hover}) => hover 
                ? "black" 
                : "white"
            };
        }
    }
`

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
            paddingTopBottom={paddingTopBottom}
            paddingLeftRight={paddingLeftRight}
            backGroundColor={backGroundColor}
            hover={hover}
            ref={conRef}
        >   
            <ReactCursorPosition 
                activationInteractionMouse={INTERACTIONS.HOVER} 
                activationInteractionTouch={INTERACTIONS.TOUCH}
                {...{ 
                    className: "cursorArea", 
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

export default LogoBox




    
    