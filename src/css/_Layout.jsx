import styled from "styled-components"


const Layout = styled.div`
    ${({theme}) => theme.deskTop`
        margin-left: ${theme.layoutRatio["left"]}%;
        margin-right: ${theme.layoutRatio["right"]}%;
    `}
    ${({theme}) => theme.mobile`
        width: 100%;
    `}
    display: block;
    position: relative;
`

export default Layout