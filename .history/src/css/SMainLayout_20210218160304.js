import styled, { ThemeProvider } from "styled-components";

export const allDiv = {
    "LeftWidth" : "29",
    "RightWidth" : "71",
}

export const RightDiv = styled.div`
    width: ${allDiv["RightWidth"]}%;
    left: ${allDiv["LeftWidth"]}%;
    padding-top: 3rem;
    background-color: #FFFFFF; 
    position: relative;
    z-index: 2;
`;
export const LeftDiv = styled.div`
    width: ${allDiv["LeftWidth"]}%;
    left: 0;
    top: 0;
    bottom: 0;
    border-right: 0.17
    background-color: #EEEEEE;
    padding-top: 3rem; 
    position: fixed;
    overflow: auto;
    z-index: 0;
`;