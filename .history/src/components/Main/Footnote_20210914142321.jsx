import styled from "styled-components";
import theme from "../../css/_Theme.jsx"


const FootnoteObjDiv = styled.div`
    position: sticky; 
    top: ${({interval}) => interval}rem; 
    margin-top: ${({marginTop}) => marginTop}%;
    margin-left: -.5rem;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Cormorant Garamond', serif;
    letter-spacing: -.01rem;
    white-space: nowrap;

    .footnote {
        position: absolute;
        width: 2rem;
        margin-top: ${({detailTop}) => detailTop}rem;
        transform: rotate(-90deg);
        transform-origin: right bottom;
    }
`;

const Footnote = ({marginTop, detailTop, interval, text}) => {
    return(
        <FootnoteObjDiv
            marginTop={marginTop}
            detailTop={detailTop}
            interval={interval}
        >
            <div className="footnote">
                {text}
            </div>
        </FootnoteObjDiv>
    )
}

export default Footnote;