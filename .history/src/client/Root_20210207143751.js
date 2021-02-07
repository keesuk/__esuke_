import React, { useRef, useState, useEffect, debounce } from "react";
import { BrowserRouter } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';
import App from "../shared/App";





const Root = () => {
    const game_outerDOMNode = useRef(null)
    const rootElement = document.documentElement

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window
        return {
            width,
            height,
        }
    }

    const [gameDimensions, setGameDimensions] = useState({ width: 0, height: 0})

    useEffect(() => {
        function adjustScreen() {
            const game_outer = game_outerDOMNode.current
            const ratioHeight = 1 / 1.78
            const ratioWidth = 1.78
            const { width: vw, height: vh } = getWindowDimensions()

            const width = (vw > vh)
                ? (vh * ratioWidth <= vw)
                    ? (vh * ratioWidth)
                    : (vw)
                : (vh * ratioHeight <= vw)
                    ? (vh * ratioHeight)
                    : (vw)

            const height = (vw > vh)
                ? (vw * ratioHeight <= vh)
                    ? (vw * ratioHeight)
                    : (vh)
                : (vw * ratioWidth <= vh)
                    ? (vw * ratioWidth)
                    : (vh)

            const longestSide = height > width ? height : width
            const fontSize = longestSide/37.5  // my calculated global base size

            setGameDimensions({ width, height })
            rootElement.style.fontSize = `${fontSize}px`
        }
        const debouncedResizeHandler = debounce(200, () => {
            adjustScreen()
        })
        adjustScreen()
        window.addEventListener('resize', debouncedResizeHandler)
        return () => window.removeEventListener('resize', debouncedResizeHandler)
    }, [rootElement.style.fontSize])

    smoothscroll.polyfill()

    const { width: gameWidth, height: gameHeight } = gameDimensions

    return (
        <div 
            className="game__outer" 
            ref={game_outerDOMNode} 
            style={{ width: gameWidth, height: gameHeight }}
        >
            <div className="game__inner">
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Root;