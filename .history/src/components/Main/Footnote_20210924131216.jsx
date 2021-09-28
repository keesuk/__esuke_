import styled from "styled-components";


const FootnoteObjDiv = styled.div`
    ${({theme}) => theme.deskTop`
        top: ${({interval}) => interval}rem; 
        margin-left: -0.05rem;
    `}
    ${({theme}) => theme.mobile`
        top: ${({interval}) => parseInt(interval) + 9}rem; 
        margin-left: -0.3rem;
    `}
    margin-top: ${({marginTop}) => marginTop}%;
    text-transform: uppercase;
    white-space: nowrap;
    font-size: .65rem;
    position: sticky;  
    font-weight: 600;

    .footnote {
        margin-top: ${({detailTop}) => detailTop}rem;
        transform-origin: right bottom;
        transform: rotate(-90deg);
        position: absolute;
        width: 1.7rem;
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