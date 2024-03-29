import { useEffect, useState, useCallback } from "react"
import Draggable from "react-draggable"
import styled from "styled-components"

import { menuAboutMe } from "../_data/_Data.jsx"

  
const PostIt = styled.div`
    box-shadow: ${({hover, drag}) => hover
        ? (drag 
            ? ".3rem .3rem 1.2rem rgba(0, 0, 0, .3)"
            : ".3rem .3rem 1.1rem rgba(0, 0, 0, .4)")
        : ".2rem .2rem .9rem rgba(0, 0, 0, .5)"
    };
    z-index: ${({drag, zValue}) => drag 
        ? "100000"
        : `${zValue}00`
    };
    display: ${({isOn}) => isOn 
        ? ""
        : "none"
    };
    cursor: ${({drag}) => drag 
        ? "grabbing" 
        : "grab"
    };
    border-left: ${({theme}) => theme.lines["postItContentLine"]} rgba(255, 255, 255, 0.3);
    border-top: ${({theme}) => theme.lines["postItContentLine"]} rgba(255, 255, 255, 0.3);
    animation-duration: .${({num}) => num}s;
    background-color: ${({color}) => color};
    height: ${({width}) => width}vw;
    width: ${({width}) => width}vw;
    animation-iteration-count: 1;
    animation-name: effect;
    position: absolute;
    padding: 1rem;
    float: right;
    bottom: 30vh;
    left: 2vw;
`  

const AboutMeObj = ({ num, zValue, isOn, order, image, width, close, color, content, X, Y}) => {
    
    const [zIndex, setZIndex] = useState(0)
    const [hover, setHover] = useState(false)
    const [drag, setDrag] = useState(false)

    const xy = num * 45 + 50
    const x = image !== null ? xy : xy + 100
    const y = image !== null ? xy : xy + 200

    useEffect(() => {
        setZIndex(zValue)

    }, [zValue])


    const stopDrag = () => {
        setDrag(false)
    }
    const startDrag = () => {
        setDrag(true)
        order(num)
    }

    return (
        <Draggable 
            defaultPosition={{ x: x, y: y}}
            onStart={startDrag}
            onStop={stopDrag}
        >
            <PostIt 
                onMouseLeave={() => setHover(false)}
                onMouseEnter={() => setHover(true)}
                zValue={zIndex}
                hover={hover}
                drag={drag}
                color={color}
                width={width}
                isOn={isOn}
                num={num}
            > 
                {content}
            </PostIt>
        </Draggable>
    )
}


const AboutMe = ({ toggle, X, Y }) => {
    const [aboutMe, setAboutMe] = useState({})


    useEffect(() => {
        const aboutMeObj = {}
    
        menuAboutMe.map(v => Object.assign(aboutMeObj, {
            [menuAboutMe.indexOf(v)] : {
                zValue: menuAboutMe.indexOf(v),
                isOn : true
        }}))
        setAboutMe(aboutMeObj)
        
    }, [toggle])


    const postItReorder = useCallback((num) => {
        const aboutMeObj = {...aboutMe}

        for(let key in aboutMeObj){
            aboutMeObj[key].zValue--
        }
        aboutMeObj[num].zValue = Object.keys(aboutMeObj).length-1
        setAboutMe(aboutMeObj)

    }, [aboutMe])


    return(
        toggle
        ?   menuAboutMe.map((v, i) => 
                <AboutMeObj
                    order={postItReorder}
                    zValue={aboutMe[i].zValue} 
                    isOn={aboutMe[i].isOn} 
                    content={v.content}
                    key={v.content+i}
                    width={v.width}
                    color={v.color}
                    image={v.image}
                    num={i}
                    X={X}
                    Y={Y}
                />
            )
        : null
    )
}

export default AboutMe