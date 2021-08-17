import { useEffect, useRef } from "react";
import styled from "styled-components";
import theme from "../css/_Theme.jsx";

export const MainLayout = styled.div`
    left: ${theme.layoutRatio["sub"]}%;
    width: ${theme.layoutRatio["main"]-1}%;
    padding-top: 6rem;
    background-color: ${theme.colorObjs["mainLayoutBackColor"]}; 
    border-left: ${theme.lines["mainLayoutLine"]}; 
    position: relative;
    z-index: 2;
`;
export const SubLayout = styled.div`
    width: ${theme.layoutRatio["sub"]}%;
    left: 0;
    top: 0;
    right: ${theme.layoutRatio["sub"]}%;
    bottom: 0;
    background-color: ${theme.colorObjs["subLayoutBackColor"]}; 
    border-right: ${theme.lines["mainLayoutLine"]}; 
    position: fixed;
    overflow: auto;
    z-index: 0;
`;
