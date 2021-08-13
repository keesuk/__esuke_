import { useState, useEffect, useRef} from "react";
import styled from "styled-components";
import { useWindowSize } from "../../_data/_Functions.jsx";                              
import ReactCursorPosition from "react-cursor-position";


const CursorDiv = styled.div`
    position: absolute;
    z-index: 100000000;
    transform: translate(${({cor}) => `${4.5}rem, ${8}rem`}) scale(1.0);
    opacity: ${({active}) => active === true ? "1" : "0"};
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
    detectedEnvironment: {isMouseDetected, isTouchedDected},
    isActive,
    conRef,
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
        console.log(x, t)
        if(isActive === true) {
            if(x > 0 && y > 0) setActive(true)
            else setActive(false)   
        }else if(isActive === false) {
            setActive(false)   
        }

    }, [x, y])

    return (
        <>
            <CursorDiv 
                active={active}
                cor={imgCor}
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
    background-color: ${({backGroundColor}) => backGroundColor};
    padding: ${({paddingTopBottom}) => paddingTopBottom}% 10%;
    margin-left: 2.5vw;
    margin-top: 2.5vw;
    width: calc(100%-2.5vw);
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

const LogoBox = ({ backGroundColor, logoTypeColor, logoBackColor, paddingTopBottom, logo, }) => {
    const conRef = useRef()

    return (
        <TitleBoxLogoDiv 
            ref={conRef}
            backGroundColor={backGroundColor}
            logoTypeColor={logoTypeColor}
            logoBackColor={logoBackColor}
            paddingTopBottom={paddingTopBottom}
        >   
            <ReactCursorPosition 
                style={{
                    cursor: "none", 
                    pointerEvents: "none", 
                    padding: "20px"
                }}
            >
                <TitleBoxLogo 
                    con={conRef} 
                    logo={logo}
                />
            </ReactCursorPosition>
        </TitleBoxLogoDiv>
    )
}

export default LogoBox;




    
    