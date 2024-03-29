import styled from "styled-components";
import theme from "../../css/_Theme.jsx"


const FootnoteObjDiv = styled.div`
    position: sticky;  
    ${({theme}) => theme.deskTop`
        top: ${({interval}) => interval}rem; 
        margin-left: -0.05rem;
        font-size: .65rem;
    `}
    ${({theme}) => theme.mobile`
        top: ${({interval}) => parseInt(interval) + 9}rem; 
        margin-left: -0.2rem;
        font-size: .7rem;
        color: #333;
    `}
    margin-top: ${({marginTop}) => marginTop}%;
    font-weight: 600;
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