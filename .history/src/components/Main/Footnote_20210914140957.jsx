import styled from "styled-components";
import theme from "../../css/_Theme.jsx"


const FootnoteObjDiv = styled.div`
    position: sticky; 
    top: ${({order}) => order * 10}px; 
    margin-top: ${({marginTop}) => marginTop}%;
    margin-left: -1.2rem;
    font-size: .7rem;
    font-weight: 600;
    letter-spacing: -.01rem;
    white-space: nowrap;

    .footnote {
        position: absolute;
        margin-top: -.5rem;
        transform: rotate(90deg) scaleX(-1);
        transform-origin: left bottom;
    }
`;

const Footnote = ({marginTop, order, text}) => {
    return(
        <FootnoteObjDiv
            marginTop={marginTop}
            order={order}
        >
            <div className="footnote">
                {text}
            </div>
        </FootnoteObjDiv>
    )
}

export default Footnote;