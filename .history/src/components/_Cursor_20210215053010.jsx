import { useState, useEffect} from "react";
import classNames from "classnames";
import styled, { ThemeProvider } from "styled-components";


const CursorDiv = styled.div`
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
        elementDimensions:{width, height}
    }) => {

    const [position, setPosition] = useState({ x: 0, y: 0})
    const [clicked, setClicked] = useState(false)
    const [linkHovered, setLinkHovered] = useState(false)
    const [hidden, setHidden] = useState(false) 

    useEffect(() => {
        addEventListeners()
        handleLinkHoverEvents()
        return ()=> removeEventListeners()
    }, [])

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove)
        document.addEventListener("mouseenter", onMouseEnter)
        document.addEventListener("mouseleave", onMouseLeave)
        document.addEventListener("mousedown", onMouseDown)
        document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove)
        document.removeEventListener("mouseenter", onMouseEnter)
        document.removeEventListener("mouseleave", onMouseLeave)
        document.removeEventListener("mousedown", onMouseDown)
        document.removeEventListener("mouseup", onMouseUp)
    }
    const onMouseMove = (e) => {
        setPosition({ x: x y: y })
        
    }
    const onMouseDown = () => {
        setClicked(true)
    }
    const onMouseUp = () => {
        setClicked(false)
    }
    const onMouseLeave = () => {
        setHidden(true)
    }
    const onMouseEnter = () => {
        setHidden(false)
    }

    const handleLinkHoverEvents = () => {
        document.querySelectorAll("a").forEach((el) => {
            el.addEventListener("mouseover", () => setLinkHovered(true))
            el.addEventListener("mouseout", () => setLinkHovered(false))
        })
    }

    const cursorClasses = classNames("cursor", {
        "cursorClicked" : clicked,
        "cursorHidden" : hidden,
        "cursorLinkHovered" : linkHovered
    })

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