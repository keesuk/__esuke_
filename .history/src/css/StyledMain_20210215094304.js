import styled, { ThemeProvider } from "styled-components";

const allDiv = {
    "LeftWidth" : "29",
    "RightWidth" : "71",
}

export const RightDiv = styled.div`
    width: ${allDiv["RightWidth"]}%;
    left: ${allDiv["LeftWidth"]}%;
    border-left: .2rem solid black;
    top: 3rem;
    bottom: 0;
    background-color: #FFF; 
    position: fixed;
    overflow: auto;
    z-index: 2;
`;
export const LeftDiv = styled.div`
    width: ${allDiv["LeftWidth"]}%;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #EEE;
    padding-top: 3rem; 
    position: fixed;
    overflow: auto;
    z-index: 0;
`;