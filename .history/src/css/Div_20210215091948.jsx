import styled from "styled-components";

export const all_div = {
    "LWidth" : "29",
    "RWidth" : "71",
}
export const RightDiv = styled.div`
    width: 71%;
    left: 29%;
    border-left: .2rem solid black;
    top: 3rem;
    bottom: 0;
    background-color: #FFF; 
    position: fixed;
    overflow: auto;
    z-index: 2;
`;