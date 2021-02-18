import { useLayoutEffect, useEffect, useRef, useState, useCallback} from "react";
import { Sticky } from 'react-sticky';
import styled from "styled-components";


const PageStyleObjDiv = styled.div`
    font-size: .47rem;
    font-weight: 600;
    letter-spacing: -.01rem;
    height: 2.5vw;
    width: 2.5vw;
    white-space: nowrap;

    .sticky {
        width: inherit;
        height: inherit;
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
        <Sticky>
            {({
                style,
                isSticky,
                wasSticky,
                distanceFromTop,
                distanceFromBottom,
                calculatedHeight
            }) => (
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
            </PageStyleObjDiv>)}
        </Sticky>
)}

export default PageStyle;