import styled from "styled-components";
import theme from "../../css/_Theme.jsx"


const FootnoteObjDiv = styled.div`
    position: sticky;  
    ${({theme}) => theme.deskTop`
        top: ${({interval}) => interval}rem; 
    `}
    ${({theme}) => theme.mobile`
        top: ${({interval}) => interval + 9}rem; 
    `}
    margin-left: -0.05rem;
    font-size: .65rem;
    font-weight: 600;
    letter-spacing: 0rem;
    white-space: nowrap;

    .footnote {
        position: absolute;
        width: 1.7rem;
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