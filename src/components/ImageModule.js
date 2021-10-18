import ReactCursorPosition, { INTERACTIONS } from "react-cursor-position"
import { useState, useEffect, useRef} from "react"
import styled from "styled-components"

import { UseWindowSize } from "../_data/_Functions.jsx"     
import HorizontalBrowserDark from "../_data/img/_Source/HorizontalBrowserDark.png"
import VerticalBrowserWhite from "../_data/img/_Source/VerticalBrowserWhite.png"
import Iphone from "../_data/img/_Source/Iphone.png"


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
    z-index: 10;

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
        z-index: 20;
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
        z-index: 30;
        
        .logoType {
            fill: ${({logoTypeColor}) => logoTypeColor};
        }
    }
`

const LogoBox = ({
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

const LogoBoxDiv = styled.div`
    ${({theme, paddingLR, paddingTB}) => theme.deskTop`
        background-color: ${({color, hover}) => hover 
            ? "white" 
            : color
        };
        padding-bottom: ${paddingTB.deskTop}%;
        padding-right: ${paddingLR.deskTop}%;
        padding-left: ${paddingLR.deskTop}%;
        padding-top: ${paddingTB.deskTop}%;
    `}
    ${({theme, paddingLR, paddingTB}) => theme.mobile`
        padding-bottom: ${paddingTB.mobile}%;
        padding-right: ${paddingLR.mobile}%;
        padding-left: ${paddingLR.mobile}%;
        padding-top: ${paddingTB.mobile}%;
        margin-left: 0vw;
        
    `}
    transition: background-color .3s;
    position: relative;
    height: 100%;
    
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

export const LogoImage = ({ color, paddingTB, paddingLR, logo}) => {

    const [conCor, setConCor] = useState({})
    const [hover, setHover] = useState(false)
    const conRef = useRef()
    
    const windowSize = UseWindowSize()

    useEffect((event) => {
        const cor = conRef.current.getBoundingClientRect()
        setConCor(cor)

    }, [windowSize, hover])


    return (
        <LogoBoxDiv 
            paddingLR={paddingLR}
            paddingTB={paddingTB}
            color={color}
            hover={hover}
            ref={conRef}
        >   
            <ReactCursorPosition 
                activationInteractionMouse={INTERACTIONS.HOVER} 
                {...{ 
                    className: "cursorArea", 
                    onActivationChanged: ({isActive}) => setHover(isActive)
            }}>
                <LogoBox 
                    conCor={conCor}
                    logo={logo}
                />
            </ReactCursorPosition>
        </LogoBoxDiv>
    )
}


export const Image = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
`

const BrowserMockupDiv  = styled.div`
    ${({theme, width, marginTop, marginLeft, marginRight}) => theme.deskTop`
        margin-right: ${marginRight.deskTop}vw;
        margin-left: ${marginLeft.deskTop}vw;
        margin-top: ${marginTop.deskTop}vw;
        width: ${({width}) => width.deskTop}%;
        height: ${({isHorizon, width}) => isHorizon 
            ? width.deskTop / 3
            : width.deskTop
        }vw;
    `}
    ${({theme, width, marginTop, marginLeft, marginRight}) => theme.mobile`
        margin-right: ${marginRight.mobile}vw;
        margin-left: ${marginLeft.mobile}vw;
        margin-top: ${marginTop.mobile}vw;
        width: ${({width}) => width.mobile}%;
        height: ${({isHorizon, width}) => isHorizon 
            ? width.mobile / 3
            : width.mobile
        }vw;
    `}
    float: ${({isLeft}) => isLeft
        ? "left" 
        : "right"
    };
    position: relative;

    .box {
        ${({theme, isHorizon}) => theme.deskTop`
            height: ${isHorizon 
                ? "110"
                : "104" 
            }%;
            width: ${isHorizon
                ? "110" 
                : "111"
            }%;
        `}
        ${({theme, isHorizon}) => theme.mobile`
            height: ${isHorizon 
                ? "110"
                : "153" 
            }%;
            width: ${isHorizon
                ? "110" 
                : "99.5"
            }%;
        `}
        background-image: url("${({isHorizon}) => isHorizon
            ? HorizontalBrowserDark
            : VerticalBrowserWhite 
        }");
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;

        .img {
            margin-right: ${({isHorizon}) => isHorizon 
                ? "2.9"
                : "4.2" 
            }%;
            margin-top: ${({isHorizon}) => isHorizon 
                ? "5.7"
                : "8.9" 
            }%;
            width: ${({isHorizon}) => isHorizon 
                ? "91.6"
                : "86.2" 
            }%;
            display: block;
            height: auto;
            float: right;
        }  
    }
`
export const BrowserImage = ({width, isLeft, marginTop, marginLeft, marginRight, image, isHorizon}) => {
    
    return(
        <BrowserMockupDiv
            marginRight={marginRight}
            marginLeft={marginLeft}
            marginTop={marginTop}
            isHorizon={isHorizon}
            isLeft={isLeft}
            width={width}
        >
            <div className="box">
                <img 
                    src={image}
                    className="img" 
                    alt="" 
                />
            </div>
        </BrowserMockupDiv>
    )
}