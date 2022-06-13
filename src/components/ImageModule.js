import ReactCursorPosition, { INTERACTIONS } from "react-cursor-position"
import { useState, useEffect, useRef} from "react"
import styled from "styled-components"

import { UseWindowSize } from "../_data/_Functions.jsx"     
import VerticalBrowserWhite from "../_data/img/_Source/VerticalBrowserWhite.png"
import VerticalBrowserDark from "../_data/img/_Source/VerticalBrowserDark.png"
import SquareBrowserWhite from "../_data/img/_Source/SquareBrwoserWhite.png"
import HorizontalBrowserWhite from "../_data/img/_Source/HorizontalBrwoserWhite.png"
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
    detectedEnvironment: {isMouseDetected},
    isPositionOutside, 
    position: {x, y},
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

    }, [isPositionOutside, isMouseDetected, isActive])

    return (
        <>
            <CursorDiv 
                mobile={isMouseDetected 
                    ? false 
                    : false
                }
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

    useEffect(() => {
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


const ImageImg = styled.img`
    ${({theme}) => theme.deskTop`
        object-fit: contain;
        height: 100%;
    `};
    ${({theme}) => theme.mobile`
        height: auto;
    `};
    width: 100%;
`
export const Image = ({image}) => {
    return (
        <ImageImg
            src={image}
            alt=""
        />
    )
}

// vertical 832 1392
// square 1392 1392
const BrowserMockupDiv  = styled.div`
    background-color: ${({isWhite}) => isWhite 
        ? "white" 
        : "black"
    };
    transform: translate(-50%, -50%);
    position: relative;
    height: 100%;
    width: 100%;
    left: 50%;
    top: 50%;

    .browser {
        background-image: url("${({shape, isWhite}) => isWhite
            ? 
                (shape === "horizontal" ? HorizontalBrowserWhite:
                (shape === "vertical" ? VerticalBrowserWhite:
                (shape === "square" ? SquareBrowserWhite
                : null)))
            : 
                (shape === "horizontal" ? "":
                (shape === "vertical" ? VerticalBrowserDark:
                (shape === "square" ? ""
                : null)))
        }");
        background-repeat: no-repeat;
        background-position: center; 
        background-size: contain;
        height: 100%;
        width: 100%;
    }

    .image {
        width: ${({shape}) => 
            shape === "horizontal" ? "100":
            (shape === "vertical" ? "40":
            (shape === "square" ? "100"
            : null)) 
        }%;
        position: absolute;
        margin: auto;
        z-index: -1;
        bottom: 0;
        right: 0;
        left: 0;
        top: 0;
    }  
`
export const BrowserImage = ({image, typeDetail}) => {
    
    return(
        <BrowserMockupDiv
            isWhite={typeDetail.isWhite}
            shape={typeDetail.shape}
        >
            <div className="browser"/>
            <img 
                src={image}
                className="image" 
                alt="" 
            />
        </BrowserMockupDiv>
    )
}