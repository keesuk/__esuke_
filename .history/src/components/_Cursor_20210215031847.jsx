import { useState, useEffect, useCallback } from "react";
import { useSpring, animated as a, interpolate } from 'react-spring'
import classNames from "classnames";
import styled from "styled-components";


const CursorDiv = styled.div`
    margin: 0;
    top: 0;
    width: 100%;
    padding: 0;
    height: 100%;
    bottom: 0;
    position: absolute;
    z-index: 1000000;

    .cursor {
        margin:0;
        padding: 0;
        width: 40px;
        height: 40px;
        border: 2px solid #000000;
        border-radius: 100%;
        transform: translate(0%, 0%);
        pointer-events: none;
        transition: all 150ms ease;
        transition-property: background-color, opacity, transform, mix-blend-mode;
        mix-blend-mode: difference;
        position: absolute;
        z-index: 100000000;
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
    const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))
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
        setPosition({ x: e.pageX, y: e.pageY })
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

    const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), [])

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
                onScroll={onScroll}
                style={{ left: `${position.x}px`, top: `${position.y}px`}}
            /> 
        </CursorDiv>
    )
}

export default Cursor;