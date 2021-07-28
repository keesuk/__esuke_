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

    .sticky {
        width: inherit;
        height: inherit;
        position: sticky;
        z-index: 1000;
        top: 0;
        left: 30%;
    }
`;

const Footnote = ({el, text, ord}) => {
    const ref = useRef()
    const [elTop, setElTop] = useState(null)

    useEffect(() => {
        const top = el.current.getBoundingClientRect().top
        setElTop(top)
    }, [])

    const intoEl = () => {
        el.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    } 

    return(
        <FootnoteObjDiv 
            top={elTop}
            order={ord}
        >
            <div 
                onClick={intoEl} 
                className="sticky"
            >
                {text}
            </div>
        </FootnoteObjDiv>
)}

export default Footnote;