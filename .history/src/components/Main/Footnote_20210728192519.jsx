import { useLayoutEffect, useEffect, useRef, useState, useCallback} from "react";
import styled from "styled-components";


const FootnoteObjDiv = styled.div`
    font-size: .7rem;
    font-weight: 600;
    letter-spacing: -.01rem;
    height: 2.5vw;
    width: 2.5vw;
    white-space: nowrap;
    position: absolute;
    transition: all .2s ease;
    
    .notSticky {
        width: inherit;
        height: inherit;
        position: absolute;
        top: calc(${({top}) => top}px - 6rem);
        left: 0;
        transform: rotate(-90deg);
        opacity: ${({sticky}) => sticky === false ? "1" : "0"};
    }
    .sticky {
        width: inherit;
        height: inherit;
        position: fixed;
        top: 2rem;
        margin-top: ${({order}) => (order) * 3}rem;
        transform: rotate(-90deg);
        display: ${({sticky}) => sticky === true ? "" : "none"};
    }
`;

const Footnote = ({el, text, ord}) => {
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
        
    }, [ref])

    const callBack = useCallback(([entry]) => {
        if(entry.isIntersecting || entry.boundingClientRect.top > 10) {
            setSticky(false)
        }
        else {
            setSticky(true)
        }
    },[])
    const options = {
        root: null,
        rootMargin: "100px"
    }
    
    console.log(sticky)
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