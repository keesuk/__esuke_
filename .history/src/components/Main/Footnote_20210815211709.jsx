import { useLayoutEffect, useEffect, useRef, useState, useCallback} from "react";
import { useWindowSize } from "../../_data/_Functions.jsx";
import styled from "styled-components";
import { useLocation } from "react-router-dom";


const FootnoteObjDiv = styled.div`
    font-size: .7rem;
    font-weight: 600;
    letter-spacing: -.01rem;
    white-space: nowrap;
    position: absolute;
    transition: all .2s ease;
    z-index: ${({order}) => 10 - order + 1};
    
    .notSticky {
        position: absolute;
        padding-right: 1rem;
        transform: rotate(-90deg);
        transform-origin: top left;
        top: calc(${({top}) => top}px - 2.5rem);
        opacity: ${({sticky}) => sticky === false ? "1" : "0"};
    }
    .sticky {
        position: fixed;
        top: 3rem;
        padding-right: 1rem;
        transform: rotate(-90deg);
        transform-origin: top left;
        background-color: white;
        margin-top: ${({order, txtLength}) => (order + 0.2) * 4 + (0.1 * txtLength)}rem;
        display: ${({sticky}) => sticky === true ? "" : "none"};
        
        &:before {    
            content: "";
            display: block;
            width: 1rem;
            height: 2rem;
            margin-left: -1rem;
            position: absolute;
            z-index: -1;
            background-image: linear-gradient(to right,
                rgba(255,255,255,0) 0%, 
                rgba(255,255,255,1) 100%)
            ;
        }
    }
`;

const options = {
    root: null,
    rootMargin: "100px"
}

const Footnote = ({ el, text, ord }) => {
    const ref = useRef()
    const height = useWindowSize().height
    const width = useWindowSize().width
    
    const [elTop, setElTop] = useState(null)
    const [sticky, setSticky] = useState(false)


    useEffect(() => {
        const top = el.current.getBoundingClientRect().top
        setElTop(top)

    }, [width, height, el.current])

    useEffect(() => {
        const observer = new IntersectionObserver(callBack, options)
        if(ref.current) observer.observe(ref.current)

        return () => {
            if(ref.current) observer.unobserve(ref.current)
        }
    }, [ref, el.current])

    const callBack = useCallback(([entry]) => {
        if(entry.isIntersecting || entry.boundingClientRect.top > 20) {
            setSticky(false)
        }else{
            setSticky(true)
        }
    },[])

    const intoEl = () => {
        el.current.scrollIntoView({
            behavior: "smooth", 
            block: "start", 
        })
    } 

    return(
        <FootnoteObjDiv 
            top={elTop}
            order={ord}
            txtLength={text.length}
            sticky={sticky}
        >
            <div 
                // onClick={intoEl} 
                className="notSticky"
                ref={ref}
            >
                {text}
            </div>
            <div 
                // onClick={intoEl} 
                className="sticky"
            >
                {text}
            </div>
        </FootnoteObjDiv>
    )
}

export default Footnote;