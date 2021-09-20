import { useState, useEffect, useRef} from "react";
import styled from "styled-components";
import theme from "../../css/_Theme.jsx";
import { useWindowSize } from "../../_data/_Functions.jsx";                              
import ReactCursorPosition from "react-cursor-position";


const CursorDiv = styled.div`
    position: absolute;
    z-index: 100000000;
    transform: translate(${({cor}) => `${cor.left-18}px, ${cor.top-18}px`}) scale(1.0);
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
    conCor,
    logo }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [clicked, setClicked] = useState(false)
    const [linkHovered, setLinkHovered] = useState(false)
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

        if(isActive === true) {
            if(x > 0 && y > 0){
                if(imgCor.width > x && imgCor.height > y) {
                    setActive(true)
                }else setActive(false)
            }else setActive(false)    
        }else if(isActive === false){
            setActive(false)   
        }

    }, [x, y, isActive])

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
    background-color: ${({backGroundColor}) => backGroundColor};
    padding: ${({paddingTopBottom}) => paddingTopBottom}% ${({paddingLeftRight}) => paddingLeftRight}%;
    margin-top: ${theme.layoutRatio["leftMargin"]}vw;
    margin-left: 2.5vw;
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

const LogoBox = ({ 
    backGroundColor, 
    logoTypeColor, 
    logoBackColor, 
    paddingTopBottom, 
    paddingLeftRight, 
    logo,
    update}) => {

    const [conCor, setConCor] = useState({})
    const [winSize, setWinSize] = useState()
    const conRef = useRef()

    useEffect(() => {
        const cor = conRef.current.getBoundingClientRect()
        setConCor(cor)
        setWinSize(useWindowSize().width)
        console.log(winSize)

    }, [useWindowSize(), conCor.top || conCor.left < 0])

    return (
        <TitleBoxLogoDiv 
            ref={conRef}
            backGroundColor={backGroundColor}
            logoTypeColor={logoTypeColor}
            logoBackColor={logoBackColor}
            paddingTopBottom={paddingTopBottom}
            paddingLeftRight={paddingLeftRight}
        >   
            <ReactCursorPosition 
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




    
    