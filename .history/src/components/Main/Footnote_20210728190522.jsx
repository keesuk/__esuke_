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
        top: ${({top}) => top}px;
        left: 0;
        transform: rotate(-90deg);
    }
    .sticky {
        width: inherit;
        height: inherit;
        position: fixed;
        top: 2rem;
        margin-top: ${({order}) => (order) * 3}rem;
        transform: rotate(-90deg);
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


    const callBack = useCallback(([entry]) => {
        if(entry.isIntersecting || entry.boundingClientRect.top < 0) setSticky(false)
        else setSticky(true)
    },[])
    const options = {
        root: null,
        rootMargin: "100px"
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callBack, options)
        
        if(ref.current) observer.observe(ref.current)
        return () => {if(ref.current) observer.unobserve(ref.current)}
        
    }, [ref])

    console.log(sticky)
    return(
        <FootnoteObjDiv 
            top={elTop}
            order={ord}
        >
            <div 
                onClick={intoEl} 
                className={sticky === false ? "notSticky" : "sticky"}
                ref={ref}
            >
                {text}
            </div>
        </FootnoteObjDiv>
)}

export default Footnote;