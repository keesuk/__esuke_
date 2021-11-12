import { getDate } from "../_data/_Functions.jsx"
import Layout from "../css/_Layout.jsx"
import styled from "styled-components"

const FooterDiv = styled.div`
    letter-spacing: -.04rem;
    word-spacing: -.05rem;
    margin-bottom: 1rem;
    position: relative;
    font-style: italic;
    font-weight: 500;
    margin-top: 20%;
    font-size: .8rem;
    color: #77D1E4;
    display: flex;
    justify-content: center;

    span {
        margin-right: .2rem;
        font-style: normal;
        font-size: .8rem;
    }
`

const Footer = () => {
    return(
        <Layout>
            <FooterDiv>
                {/* <span>&#9400;</span>Copyright {getDate().year}, Keesuk Lee. All Rights Reserved. */}
            </FooterDiv>
        </Layout>
    )
}

export default Footer