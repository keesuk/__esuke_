import styled from "styled-components";

export const allDiv = {
    "LeftWidth" : "29",
    "RightWidth" : "71",
}

export const RightDiv = styled.div`
    width: ${allDiv["RightWidth"]}%;
    left: ${allDiv["LeftWidth"]}%;
    top: 3rem;
    padding-top: 3rem;
    background-color: #FFFFFF; 
    border-left: .2rem solid #000000;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
`;
export const LeftDiv = styled.div`
    width: ${allDiv["LeftWidth"]}%;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #EEEEEE;
    border-right: .2rem solid #000000;
    padding-top: 3rem; 
    position: fixed;
    overflow: auto;
    z-index: 0;
`;