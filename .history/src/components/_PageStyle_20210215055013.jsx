import { useLayoutEffect, useEffect, useRef, useState} from "react";
import styled from "styled-components";


const PageStyleObjDiv = styled.div`
    font-size: .47rem;
    font-weight: 600;
    letter-spacing: -.01rem;
    height: 2.5vw;
    width: 2.5vw;
    white-space: nowrap;
    position: absolute;

    .notSticky {
        width: inherit;
        height: inherit;
        position: absolute;
        top: calc(${props => props.top}px - 1.5rem);
        left: 0;
        transform: rotate(-90deg);
    }
    .sticky {
        width: inherit;
        height: inherit;
        position: fixed;
        top: 3.5rem;
        margin-top: ${props => (props.order) * 3}rem;
        transform: rotate(-90deg);
    }
`;

const PageStyle = ({el, text, ord}) => {
    const ref = useRef()
    const [elTop, setElTop] = useState(null)
    const [sticky, setSticky] = useState(false)

    const options = {
        root: null,
        rootMargin: "100px"
    }

    useEffect(() => {
        const top = el.current.getBoundingClientRect().top
        console.log(top)
        setElTop(top)
    }, [])

    useLayoutEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting || entry.boundingClientRect.top > 50) {
                setSticky(false)
            }else{
                setSticky(true)
            }
        }, options)
        
        if(ref.current) observer.observe(ref.current)
        return () => {if(ref.current) observer.unobserve(ref.current)}

    }, [ref])
    
    return(
        <PageStyleObjDiv 
            top={elTop}
            order={ord}
        >
            <div 
                onClick={()=> 
                    el.current.scrollIntoView({ 
                        behavior: "smooth",
                        top: 0
                    })} 
                className={sticky 
                    ? "sticky" 
                    : "notSticky"
            }>
                {text}
            </div>
            <div 
                ref={ref} 
                className="notSticky"
            />
        </PageStyleObjDiv>
)}

export default PageStyle;