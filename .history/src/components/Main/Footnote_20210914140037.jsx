import styled from "styled-components";
import theme from "../../css/_Theme.jsx"


const FootnoteObjDiv = styled.div`
    position: sticky; 
    top: 0px; 
    margin-top: ${({marginTop}) => marginTop}%;
    margin-left: 0rem;
    font-size: .7rem;
    font-weight: 600;
    letter-spacing: -.01rem;
    white-space: nowrap;

    .footnote {
        position: absolute;
        transform: rotate(-90deg);
        transform-origin: right bottom;
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