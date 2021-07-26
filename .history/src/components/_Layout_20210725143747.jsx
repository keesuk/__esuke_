import { useEffect, useRef } from "react";
import styled from "styled-components";
import theme from "../css/_Theme.jsx";

const MainLayoutDiv = styled.div`
    left: ${theme.layoutRatio["sub"]}%;
    width: ${theme.layoutRatio["main"]-1}%;
    top: 0;
    bottom: 0;
    padding-top: 6rem;
    background-color: ${theme.colorObjs["mainLayoutBackColor"]}; 
    border-left: ${theme.lines["mainLayoutLine"]}; 
    position: relative;
    z-index: 2;
`;
export const MainLayout = () => {
    const scrRef = useRef()

    useEffect(() => {
        scrRef.current.scrollIntoView() 
    }, [])

    return (
        <MainLayoutDiv ref={scrRef}>
        </MainLayoutDiv>
    )
}
export const SubLayout = styled.div`
    width: ${theme.layoutRatio["sub"]}%;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: ${theme.colorObjs["subLayoutBackColor"]}; 
    padding-top: 3rem; 
    position: fixed;
    overflow: auto;
    z-index: 0;
`;