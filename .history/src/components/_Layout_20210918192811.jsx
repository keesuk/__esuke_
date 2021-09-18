import { useEffect, useRef } from "react";
import styled from "styled-components";
import theme from "../css/_Theme.jsx";

export const MainLayout = styled.div`
    @media all and (min-width:0px) and (max-width:1080px) {
        left: -1%;
        width: 100%;
    }
    @media all and (min-width:1081px) {
        left: ${theme.layoutRatio["sub"]}%;
        width: ${theme.layoutRatio["main"]-1}%;
    }
    padding-top: 6rem;
    background-color: ${theme.colorObjs["mainLayoutBackColor"]}; 
    border-left: ${theme.lines["mainLayoutLine"]}; 
    border-right: none;
    position: relative;
    z-index: 2;
`;
export const SubLayout = styled.div`
    @media all and (min-width:0px) and (max-width:1080px) {
        width: 0%;
    }
    @media all and (min-width:1081px) {
        width: ${theme.layoutRatio["sub"]}%;
    }
    left: 0;
    top: 0;
    bottom: 0;
    background-color: ${theme.colorObjs["subLayoutBackColor"]}; 
    border-right: ${theme.lines["mainLayoutLine"]}; 
    position: fixed;
    z-index: 0;
`;
