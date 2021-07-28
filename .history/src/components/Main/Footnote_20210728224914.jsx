import { useLayoutEffect, useEffect, useRef, useState, useCallback} from "react";
import styled from "styled-components";


const FootnoteObjDiv = styled.div`
    font-size: .7rem;
    font-weight: 600;
    letter-spacing: -.01rem;
    white-space: nowrap;
    position: absolute;
    transition: all .2s ease;
    z-index: ${({order}) => 10-order+1};
    
    .notSticky {
        position: absolute;
        top: calc(${({top}) => top}px - 2.5rem);
        padding-right: 1rem;
        transform: rotate(-90deg);
        transform-origin: top left;
        opacity: ${({sticky}) => sticky === false ? "1" : "0"};
    }
    .sticky {
        position: fixed;
        top: 3rem;
        padding-right: 1rem;
        margin-top: ${({order}) => (order+0.2) * 4}rem;
        transform: rotate(-90deg);
        transform-origin: top left;
        display: ${({sticky}) => sticky === true ? "" : "none"};
        background-color: white;
        
        &:before {    
            content: "";
            display: block;
            width: 1rem;
            height: 2rem;
            margin-left: -1rem;
            position: absolute;
            z-index: -1;
            background-image: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
        }
    }
`;

const Footnote = ({el, text, ord, update}) => {
    const ref = useRef()
    const [elTop, setElTop] = useState(null)
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        const top = el.current.getBoundingClientRect().top
        setElTop(top)
    }, [])

    const intoEl = () => {
        el.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    } 

    useEffect(() => {
        const observer = new IntersectionObserver(callBack, options)
        
        if(ref.current) observer.observe(ref.current)
        return () => {if(ref.current) observer.unobserve(ref.current)}
        console.log("useeffect", sticky)
        
    }, [ref, update])

    const callBack = useCallback(([entry]) => {
        if(entry.isIntersecting || entry.boundingClientRect.top > 20) {setSticky(false)}
        else {setSticky(true)}

        console.log("call", ord, sticky)
    },[])
    const options = {
        root: null,
        rootMargin: "100px"
    }
    console.log("render", ord, sticky)
    return(
        <FootnoteObjDiv 
            top={elTop}
            order={ord}
            sticky={sticky}
        >
            <div 
                onClick={intoEl} 
                className="notSticky"
                ref={ref}
            >
                {text}
            </div>
            <div 
                onClick={intoEl} 
                className="sticky"
            >
                {text}
            </div>
        </FootnoteObjDiv>
)}

export default Footnote;