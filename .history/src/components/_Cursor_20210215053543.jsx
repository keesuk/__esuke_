import { useState, useEffect} from "react";
import classNames from "classnames";
import styled, { ThemeProvider } from "styled-components";


const CursorDiv = styled.div`
margin: 0;
padding: 0;
    position: absolute;
    z-index: 100000000;
    width: 40px;
    height: 40px;
    border: 2px solid #000000;
    border-radius: 100%;
    transform: ${({theme}) => theme.scale};
    pointer-events: none;
    transition: all 150ms ease;
    transition-property: background-color, opacity, transform, mix-blend-mode;
`;
CursorDiv.defaultProps = { 
    theme: {
        scale: "scale(1.0)"
}}

const Cursor = ({
        position:{x, y}, 
        detectedEnvironment:{isMouseDetected, isTouchedDected},
        isActive,
    }) => {

    const [position, setPosition] = useState({ x: 0, y: 0})
    const [clicked, setClicked] = useState(false)
    const [linkHovered, setLinkHovered] = useState(false)
    const [hidden, setHidden] = useState(false) 

    useEffect(() => {
        cursorMove()
    }, [x, y])

    const cursorMove = () => {
        console.log(x, y)
        setPosition({ x: x, y: y })
    }
    

    const theme = {
        scale: "scale(1.2)"
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