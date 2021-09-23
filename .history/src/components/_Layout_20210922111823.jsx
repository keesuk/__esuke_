import { useEffect, useRef } from "react";
import styled from "styled-components";

export const MainLayout = styled.div`
    ${({theme}) => theme.mobile`
        left: 0%;
        width: 100%;
        padding-top: 4rem;
        z-index: 0;
    `}
    ${({theme}) => theme.deskTop`
        left: ${theme.layoutRatio["sub"]}%;
        width: ${theme.layoutRatio["main"]}%;
        border-left: ${theme.lines["mainLayoutLine"]}; 
        padding-top: 6rem;
        height: 100%;
        z-index: 2;
    `}
    background-color: ${({theme}) => theme.colorObjs["mainLayoutBackColor"]}; 
    position: relative;
`;
export const SubLayout = styled.div`
    ${({theme}) => theme.mobile`
        width: 100%;
        position: relative;
        background-color: white; 
        z-index: 1;
    `}
    ${({theme}) => theme.deskTop`
        left: 0;
        top: 0;
        bottom: 0;
        width: ${theme.layoutRatio["sub"]}%;
        position: fixed;
        background-color: ${theme.colorObjs["subLayoutBackColor"]}; 
        z-index: 0;
    `}
`;