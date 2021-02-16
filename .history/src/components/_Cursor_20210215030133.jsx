import { useState, useEffect } from "react";
import classNames from "classnames";
import styled from "styled-components";


const CursorDiv = styled.div`
    .cursor {
        width: 40px;
        height: 40px;
        border: 2px solid #000000;
        border-radius: 100%;
        transform: translate(0%, 0%);
        pointer-events: none;
        transition: all 150ms ease;
        transition-property: background-color, opacity, transform, mix-blend-mode;
        position: absolute;
        z-index: 100000000;
        mix-blend-mode: difference;
    }

    .cursorHidden {
        opacity: 0;
    }
    .cursorLinkHovered {
        transform: translate(0%, 0%) scale(1.25);
        backgorund-color: #000000;
    }
    .cursorClicked {
        transform: translate(0%, 0%) scale(.9);
        backgorund-color: #000000;
    }
`;

const Cursor = () => {
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
        console.log(e)
        setPosition({ x: e.clientX-500, y: e.clientY })
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

    return (
        <CursorDiv>
            <div
                className={cursorClasses}
                style={{ left: `${position.x}px`, top: `${position.y}px`}}
            /> 
        </CursorDiv>
    )
}

export default Cursor;