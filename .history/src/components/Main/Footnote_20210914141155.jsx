import styled from "styled-components";
import theme from "../../css/_Theme.jsx"


const FootnoteObjDiv = styled.div`
    position: sticky; 
    top: ${({top}) => top}rem; 
    margin-top: ${({marginTop}) => marginTop}%;
    margin-left: -.5rem;
    font-size: .7rem;
    font-weight: 600;
    letter-spacing: -.01rem;
    white-space: nowrap;

    .footnote {
        position: absolute;
        width: 2rem;
        margin-top: -.5rem;
        transform: rotate(-90deg);
        transform-origin: right bottom;
    }
`;

const Footnote = ({marginTop, top, text}) => {
    return(
        <FootnoteObjDiv
            marginTop={marginTop}
            top={top}
        >
            <div className="footnote">
                {text}
            </div>
        </FootnoteObjDiv>
    )
}

export default Footnote;