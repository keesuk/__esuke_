import { NavLink } from "react-router-dom";
import theme from "../../css/_Theme.jsx";
import styled from "styled-components";

import { findCategory, useWindowSize, shuffle, getGrid } from "../../_data/_Functions.jsx";
import { mentInEmptyCell } from "../../_data/_Data.jsx";

const FolioListDiv = styled.div`
    margin-top: ${({divMargin}) => divMargin.marginTop}%;
    margin-left: ${({divMargin}) => divMargin.marginLeft}%;
    margin-right: ${({divMargin}) => divMargin.marginRight}%;
    display: grid;
    grid-template-columns: repeat(${({grid}) => grid}, 1fr);
    grid-gap: 1rem;
    grid-auto-rows: minmax(5rem, auto);
    .cell {
        position: relative;
        width: 100%;
        -webkit-filter: drop-shadow(0rem 0rem .3rem rgba(0,0,0,0.5));
        background-color: white;
        border: 5px solid white;
        border-image: repeating-radial-gradient(
            transparent 0px, 
            transparent 4px, 
            white 4px,
            white
        );
    }
    
    .cellEmpty {
        background-color: ${theme.colorObjs["cellEmptyBackColor"]};
        border: ${theme.lines["cellEmptyLine"]};
        position: relative;
        width: 100%;
        &:before {
            color: ${theme.colorObjs["cellEmptyTextColor"]};
            content: "✂";
            font-size: 1.7rem;
            position: absolute;
            margin-top: -.9rem;
            left: 45%;
        }
        .ment {
            color: ${theme.colorObjs["cellEmptyTextColor"]};
            font-size: ${theme.fontObjs["cellEmpty"]["fontSize"]};
            font-weight: ${theme.fontObjs["cellEmpty"]["fontWeight"]};
            font-family: ${theme.fontObjs["cellEmpty"]["fontFamily"]};
            font-style: ${theme.fontObjs["cellEmpty"]["fontStyle"]};
            position: absolute;
            left: 10%;
            white-space: nowrap;
            bottom: 0;
        }
    }
    .img {
        width: 90%;
    }
    .content_text {
        font-size: ${theme.fontObjs["cell"]["fontSize"]};
        font-weight: ${theme.fontObjs["cell"]["fontWeight"]};
        font-family: ${theme.fontObjs["cell"]["fontFamily"]};
        padding-top: .2rem;
        padding-left: 1rem;
        padding-bottom: 1.5rem;
        letter-spacing: -.05rem;
        strong {
            font-weight: ${theme.fontObjs["cell"]["strong"]["fontWeight"]};
            letter-spacing: -.03rem;
        }
    }
`;
FolioListDiv.defaultProps = {
    divMargin: {
        marginTop: "10",
        marginLeft: "3.5",
        marginRight: "5",
}}
const ImgButtonDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    &:after { 
        content: "";
        position: absolute;
        border-top: 0.25rem solid ${({color}) => color};
        height: 95%;
        width: 100%;
        transform: translateY(45%);
        visibility: hidden;
    }
    &:hover:after { 
        visibility: visible;
    }
`;

const FolioList = ({folioArr, category, divMargin, name}) => {
    const folioList = findCategory(folioArr, category, name)
    const length = folioList.length
    const mentArr = shuffle(mentInEmptyCell)
    const grid = getGrid(useWindowSize().width)
    
    let num

    if(grid >= length)num =  grid-length
    if(grid < length)num = grid-(length%grid)

    const emArr = mentArr.slice(0, num)
    
    return(
        <FolioListDiv 
            divMargin={divMargin}
            grid={grid}
        >
            {folioList.map(v => 
                <div 
                    className="cell" 
                    key={v["title"]}
                >
                    <NavLink to={v["title"]}>
                        <ImgButtonDiv color={v["color"]}/>
                        <img 
                            className="img" 
                            src={v["img"]} 
                            alt={""}/>
                        <div className="content_text">
                            <strong>{v["title"]}</strong> {v["category"]}
                        </div>
                    </NavLink>
                </div>)}
            {emArr !== Array(0) 
                ? emArr.map(v =>
                    <div
                        className="cellEmpty"
                        key={v}
                    >
                        <div className="ment">{v}</div>
                    </div>)
                : null}
        </FolioListDiv>
    )
}
export default FolioList;