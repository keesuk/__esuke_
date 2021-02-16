import { useState, useEffect} from "react";
import classNames from "classnames";
import styled from "styled-components";


const CursorDiv = styled.div`
    top: 0;
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

const Cursor = (props) => {
    const {
      detectedEnvironment: {
        isMouseDetected = false,
        isTouchDetected = false
      } = {},
      elementDimensions: {
        width = 0,
        height = 0
      } = {},
      isActive = false,
      isPositionOutside = false,
      position: {
        x = 0,
        y = 0
      } = {}
    } = props

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