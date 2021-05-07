import { useLayoutEffect, useEffect, useRef, useState, useCallback} from "react";
import styled from "styled-components";


const PageStyleObjDiv = styled.div`
    font-size: .47rem;
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
        top: calc(${({top}) => top}px - 1.5rem);
        left: 0;
        transform: rotate(-90deg);
    }
    .sticky {
        width: inherit;
        height: inherit;
        position: fixed;
        top: 3.5rem;
        margin-top: ${({order}) => (order) * 3}rem;
        transform: rotate(-90deg);
    }
`;

const PageStyle = ({el, text, ord}) => {
    const ref = useRef()
    const [elTop, setElTop] = useState(null)

    useEffect(() => {
        const top = el.current.getBoundingClientRect().top
        setElTop(top)
    }, [])

    const intoEl = () => {
        el.current.scrollIntoView({ behavior: "smooth"})
    } 

    return(
        <PageStyleObjDiv 
            top={elTop}
            order={ord}
        >
            <div 
                onClick={intoEl} 
                className="sticky"
            >
                {text}
            </div>
        </PageStyleObjDiv>
)}

export default PageStyle;