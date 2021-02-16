import { useState, useEffect} from "react";
import styled, { ThemeProvider } from "styled-components";


const CursorDiv = styled.div`
    position: absolute;
    z-index: 100000000;
    width: 70px;
    height: 40px;
    background-color: #000000;
    transform: translate(-25px, 40px) ${({theme}) => theme.scale};
    opacity: ${({theme}) => theme.opacity};
    pointer-events: none;
    transition: all .2s ease;
    transition-property: background-color, opacity, transform;
`;
const normal = { 
    scale: "scale(1.0)",
    opacity: "1"
}

const magnifying = {
    scale: "scale(5.0)"
}
const hide = {
    opacity: "0",
}

const Cursor = ({
        position: {x, y}, 
        detectedEnvironment: {isMouseDetected, isTouchedDected},
        isActive,
        scrolled
    }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [clicked, setClicked] = useState(false)
    const [linkHovered, setLinkHovered] = useState(false)

    useEffect(() => {
        setPosition({ x: x, y: y })
        
    }, [x, y])

    return (
        <ThemeProvider theme={
            scrolled || !isActive ? hide : normal
        }>
            <CursorDiv
                style={{ left: `${position.x}px`, top: `${position.y}px`}}
            />
        </ThemeProvider>
    )
}

export default Cursor;