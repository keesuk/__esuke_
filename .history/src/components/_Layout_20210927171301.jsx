import styled from "styled-components"


export const MainLayout = styled.div`
    ${({theme}) => theme.deskTop`
        border-left: ${theme.lines["mainLayoutLine"]}; 
        width: ${theme.layoutRatio["main"]}%;
        left: ${theme.layoutRatio["sub"]}%;
        padding-top: 6rem;
        z-index: 2;
    `}
    ${({theme}) => theme.mobile`
        padding-top: 4rem;
        width: 100%;
        z-index: 0;
        left: 0%;
    `}
    background-color: ${({theme}) => theme.colorObjs["mainLayoutBackColor"]}; 
    position: relative;
`
export const SubLayout = styled.div`
    ${({theme}) => theme.deskTop`
        background-color: ${theme.colorObjs["subLayoutBackColor"]}; 
        border-right: ${theme.lines["mainLayoutLine"]}; 
        width: ${theme.layoutRatio["sub"]}%;
        position: fixed;
        z-index: 0;
        bottom: 0;
        left: 0;
        top: 0;
    `}
    ${({theme}) => theme.mobile`
        background-color: white; 
        position: relative;
        width: 100%;
        z-index: 1;
    `}
`