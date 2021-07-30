import { useState, useEffect} from "react";
import styled from "styled-components";

const TitleBoxLogo = styled.svg`
    background-color: ${({backGroundColor}) => backGroundColor};
    margin-left: 2.5vw;
    margin-top: 2.5vw;
    padding: ${({paddingTopBottom}) => paddingTopBottom}% 8%;
    transition: all .2s;
    .logo {
        padding: 5%;
        pointer-events: auto;
        width: ${({logoWidth}) => logoWidth}vw;
        margin: auto;
        .logoType {
            fill: ${({logoTypeColor}) => logoTypeColor};
    }}
    &:hover {
        background-color: ${({logoTypeColor}) => logoTypeColor};
        .logoType { 
            fill: ${({logoBackColor}) => logoBackColor};
    }}
`;

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
        <TitleBoxLogo 
            backGroundColor={"pink"}
            logoTypeColor={"black"}
            logoBackColor={"black"}
            paddingTopBottom={"13"}
            logoWidth={"100"}
        >
                <g clip-path="url(#mask)" className="logo">
                    {logo}
                </g>
                <circle id="circle-shadow" cx="50%" cy="50%" r="8%" style={{stroke: "#000", fill: "transparent", strokeWidth: "5"}} />
        </TitleBoxLogo>
    )
}

export default Cursor;


// <defs>
//                 <clipPath id="mask">
//                     <circle id="mask-circle" cx="50%" cy="50%" r="8%" style={{fill: "#ffffff"}}/>
//                 </clipPath>
//             </defs>