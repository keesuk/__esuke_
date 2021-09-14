import styled from "styled-components";
import theme from "../../css/_Theme.jsx"


const FootnoteObjDiv = styled.div`
    position: sticky; 
    top: 0px; 
    margin-top: ${({marginTop}) => marginTop}%;
    margin-left: 2rem;
    font-size: .7rem;
    font-weight: 600;
    letter-spacing: -.01rem;
    white-space: nowrap;

    .footnote {
        position: absolute;
        transform: rotate(-90deg) scale(-1, 0);
        transform-origin: left top;
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