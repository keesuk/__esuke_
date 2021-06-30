import styled from "styled-components";
import theme from "./_Theme.jsx";

export const RightDiv = styled.div`
    left: ${theme.layoutRatio["sub"]}%;
    width: ${theme.layoutRatio["main"]}%;
    top: 3rem;
    padding-top: 3rem;
    background-color: ${theme.colorObjs["mainLayoutBackgColor"]}; 
    border-left: ${theme.lines["mainLayoutLine"]}; 
    box-sizing: border-box;
    position: relative;
    z-index: 2;
`;
export const LeftDiv = styled.div`
    width: ${theme.layoutRatio["sub"]}%;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: ${theme.colorObjs["subLayoutBackgColor"]}; 
    border-right: ${theme.lines["mainLayoutLine"]}; 
    padding-top: 3rem; 
    position: fixed;
    overflow: auto;
    z-index: 0;
`;