import { useEffect, useRef } from "react";
import styled from "styled-components";
import theme from "../css/_Theme.jsx";

export const MainLayout = styled.div`
    ${({theme}) => theme.mobile`
        left: 0%;
        width: 100%;
    `}
    ${({theme}) => theme.deskTop`
        left: ${theme.layoutRatio["sub"]}%;
        width: ${theme.layoutRatio["main"]-1}%;
        border-left: ${theme.lines["mainLayoutLine"]}; 
    `}
    padding-top: 6rem;
    background-color: ${theme.colorObjs["mainLayoutBackColor"]}; 
    position: relative;
    z-index: 2;
`;
export const SubLayout = styled.div`
    ${({theme}) => theme.mobile`
        left: 0%;
        width: 100%;
    `}
    ${({theme}) => theme.deskTop`
        left: ${theme.layoutRatio["sub"]}%;
        width: ${theme.layoutRatio["main"]-1}%;
        border-left: ${theme.lines["mainLayoutLine"]}; 
        width: ${theme.layoutRatio["sub"]}%;
        top: 0;
        bottom: 0;
    `}
    background-color: ${theme.colorObjs["subLayoutBackColor"]}; 
    border-right: ${theme.lines["mainLayoutLine"]}; 
    position: fixed;
    z-index: 0;
`;
