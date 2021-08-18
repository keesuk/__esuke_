import { useState } from "react";
import styled from "styled-components";
import theme from "../../css/_Theme.jsx";

const { 
    fontObjs, 
    colorObjs, 
    lines, 
    layoutRatio, } = theme
    
const OuterImgBoxDiv = styled.div`
    height: ${({height}) => height}vw;
    margin-left: ${({marginLeft}) => marginLeft? marginLeft : "2.5"}vw;
    margin-right: 2.5vw;
    margin-top: ${({marginTop}) => marginTop}vw;
    position: relative;
    .box {
        width: ${({width}) => width}%;
        float: ${({LorR}) => LorR === "L" ? "left" : "right"};
        .img {
            display: block;
            height: auto;
            width: 100%;
            border: ${({outlineYorN}) => outlineYorN === "Y" ? lines["pageModulesOuterImgBoxLine"]: null};
            filter: ${({filterYorN}) => filterYorN === "Y" ? "brightness(97%)": null};
        }
    }
`;

const InnerImgBoxBackgroundDiv = styled.div`
    margin-left: 2.5vw;
    background-color: ${props => props.default
        ? colorObjs["InnerBackgroundColor"]
        : props.color
    };
    width: calc(100%-2.5vw);
    margin-top: ${({marginTop}) => marginTop}vw;
    margin-bottom: ${({marginBottom}) => marginBottom}vw;
    padding-top: ${({paddingTop}) => paddingTop}vw;
    padding-left: ${({paddingLeft}) => paddingLeft}vw;
    padding-right: ${({paddingRight}) => paddingRight}vw;
    padding-bottom: ${({paddingBottom}) => paddingBottom}vw;

`;
const InnerImgBoxDiv = styled.div`
    height: ${({height}) => height}vw;
    margin-top: ${({marginTop}) => marginTop}vw;
    position: relative;
    .box {
        width: ${({width}) => width}%;
        float: ${({LorR}) => LorR === "L" ? "left" : "right"};
        .img {
            display: block;
            height: auto;
            width: 100%;
        }
    }
`;