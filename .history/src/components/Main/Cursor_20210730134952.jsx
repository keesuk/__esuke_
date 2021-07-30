import { useState, useEffect} from "react";
import styled from "styled-components";
import pageModules from "./PageModules.jsx";

const { TitleBoxLogo } = pageModules

const Cursor = ({
        position: {x, y}, 
        detectedEnvironment: {isMouseDetected, isTouchedDected},
        isActive,
        logo
    }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [clicked, setClicked] = useState(false)
    const [linkHovered, setLinkHovered] = useState(false)

    useEffect(() => {
        setPosition({ x: x, y: y })
    }, [x, y])

    return (
        <svg xmlns="http://www.w3.org/2000/svg">
                <TitleBoxLogo 
                    backGroundColor={"pink"}
                    logoTypeColor={"white"}
                    logoBackColor={"black"}
                    paddingTopBottom={"13"}
                    logoWidth={"50"}
                >
                    <div className="logoBox">
                        <div className="logo">
                            {logo}
                        </div>
                    </div>
                </TitleBoxLogo>
            <g clip-path="url(#mask)">
                <rect width="100%" height="100%" fill="#fff"/>
                {logo}
            </g>
            <circle id="circle-shadow" cx="50%" cy="50%" r="8%" style={{stroke: "#000", fill: "transparent", strokeWidth: "5"}} />
        </svg>
    )
}

export default Cursor;


// <defs>
//                 <clipPath id="mask">
//                     <circle id="mask-circle" cx="50%" cy="50%" r="8%" style={{fill: "#ffffff"}}/>
//                 </clipPath>
//             </defs>