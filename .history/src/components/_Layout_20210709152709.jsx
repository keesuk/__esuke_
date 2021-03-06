import styled from "styled-components";
import theme from "../css/_Theme.jsx";

export const MainLayout = styled.div`
    width: ${theme.layoutRatio["main"]}%;
    top: 0;
    bottom: 0;
    padding-top: 6rem;
    background-color: ${theme.colorObjs["mainLayoutBackgColor"]}; 
    position: relative;
    z-index: 2;
`;
export const SubLayout = styled.div`
    width: ${theme.layoutRatio["sub"]}%;
    box-sizing: border-box;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: ${theme.colorObjs["subLayoutBackColor"]}; 
    border-right: ${theme.lines["mainLayoutLine"]}; 
    padding-top: 3rem; 
    position: fixed;
    overflow: auto;
    z-index: 0;
`;