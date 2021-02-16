import { useState, useEffect} from "react";
import styled, { ThemeProvider } from "styled-components";


const CursorDiv = styled.div`
    position: absolute;
    z-index: 100000000;
    width: 40px;
    height: 40px;
    border: 2px solid #000000;
    border-radius: 100%;
    transform: translate(-40px, 40px) ${({theme}) => theme.scale};
    opacity: ${({theme}) => theme.opacity};
    pointer-events: none;
    transition: all .5s ease;
    transition-property: background-color, opacity, transform, mix-blend-mode;
`;
CursorDiv.defaultProps = { 
    theme: {
        scale: "scale(1.0)",
        opacity: "1"
}}

const Cursor = ({
        position: {x, y}, 
        detectedEnvironment: {isMouseDetected, isTouchedDected},
        isActive,
    }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [clicked, setClicked] = useState(false)
    const [linkHovered, setLinkHovered] = useState(false)
    const [hidden, setHidden] = useState(false) 

    useEffect(() => {
        setPosition({ x: x, y: y })
    }, [x, y])
    

    const theme = {
        scale: "scale(1.0)"
    }

    return (
        <ThemeProvider theme={theme}>
            <CursorDiv
                style={{ left: `${position.x}px`, top: `${position.y}px`}}
            />
        </ThemeProvider>
    )
}

export default Cursor;