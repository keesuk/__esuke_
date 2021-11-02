import Layout from "../css/_Layout.jsx"
import styled from "styled-components"

const FooterDiv = styled.div`
    border-left: .15rem solid ${({theme}) => theme.colorObjs["cellEmptyTextColor"]};
    border-right: .15rem solid ${({theme}) => theme.colorObjs["cellEmptyTextColor"]};
    border-bottom: .15rem solid ${({theme}) => theme.colorObjs["cellEmptyTextColor"]};
    justify-content: center;
    width: 38%;
    margin-bottom: 5rem;
    padding: 2rem 0rem 2rem 5rem;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: flex;
`

const Footer = () => {
    return(
        <Layout>
            <FooterDiv/>
        </Layout>
    )
}

export default Footer