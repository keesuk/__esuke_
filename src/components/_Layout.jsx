import styled from "styled-components"


const Layout = styled.div`
    ${({theme}) => theme.deskTop`
        width: ${theme.layoutRatio["main"]}%;
        margin-right: auto;
        margin-left: auto;
    `}
    ${({theme}) => theme.mobile`
        padding-top: 4rem;
        width: 100%;
        z-index: 0;
        left: 0%;
    `}
    position: relative;
`
export const SubLayout = styled.div`
    ${({theme}) => theme.deskTop`
        height: 10rem;
        margin-top: 2rem;
        margin-left: 17rem;
        z-index: 1;
    `}
    ${({theme}) => theme.mobile`
        background-color: white; 
        position: relative;
        width: 100%;
        z-index: 1;
    `}
`

export default Layout