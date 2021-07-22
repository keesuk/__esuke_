import { NavLink } from "react-router-dom";
import theme from "../../css/_Theme.jsx";
import styled from "styled-components";

import { findCategory, useWindowSize, shuffle, getGrid } from "../../_data/_Functions.jsx";
import { mentInEmptyCell } from "../../_data/_Data.jsx";

const FolioCellsDiv = styled.div`
    padding-top: ${({divMargin}) => divMargin.marginTop}%;
    padding-bottom: ${({divMargin}) => divMargin.marginBottom}%;
    padding-left: ${({divMargin}) => divMargin.marginLeft}%;
    padding-right: ${({divMargin}) => divMargin.marginRight}%;
    display: grid;
    grid-template-columns: repeat(${({grid}) => grid}, 1fr);
    grid-gap: .8rem;
    grid-auto-rows: minmax(5rem, auto);
`;
FolioCellsDiv.defaultProps = {
    divMargin: {
        marginTop: "8",
        marginBottom: "10",
        marginLeft: "3.5",
        marginRight: "5",
}}

const FolioCell = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 25%;
    border-top: .1rem solid #ccc;
    border-left: .1rem solid #ccc;
    border-right: .1rem solid #999;
    border-bottom: .1rem solid #999;
    box-shadow: .1rem .1rem .1rem #777777;
`;
const FolioCellWrap = styled.div`
    position: relative;
    display: flex;
    width: 88%;
    margin-left: 6%;
    margin-right: 6%;
    margin-top: 6%;
    margin-bottom: 6%;
    height: 113%;

    &:after { 
        content: "";
        position: absolute;
        border-top: 0.25rem solid ${({mainColor}) => mainColor};
        width: 112%;
        margin-left: -6%;
        height: 50%;
        transform: translateY(100%);
        visibility: hidden;
    }
    &:hover:after { 
        visibility: visible;
    }
`;
const FolioCellImg = styled.img`
    width: 100%;
    display: block;
    
    margin-top: 0; 
    margin-bottom: auto;
`;
const FolioCellText = styled.div`
    position: absolute;
    color: black;
    
    width: 100%;
    height: 100%;

    .title {
        font-size: 1rem; 
        font-weight: 600;
        font-style: italic;
        word-spacing: -.18rem;
        letter-spacing: -.03rem;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .category {
        display: none;
    }
    .year {
        display: none;
    }
`;
const FolioCellEmpty = styled.div`
    background-color: ${theme.colorObjs["cellEmptyBackColor"]};
    border: ${theme.lines["cellEmptyLine"]};
    position: relative;
    left: 2.5%;
    top: 2.5%;
    width: 95.5%;
    height: 95.5%;
    &:before {
        color: ${theme.colorObjs["cellEmptyTextColor"]};
        content: "✂";
        font-size: 1.8rem;
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
`;

const FolioList = ({folioArr, category, divMargin, name}) => {
    const folioList = findCategory(Object.values(folioArr), category, name)
    const length = folioList.length
    const mentArr = shuffle(mentInEmptyCell)
    const grid = getGrid(useWindowSize().width)
    
    let num

    if(grid >= length)num =  grid-length
    if(grid < length)num = grid-(length%grid)

    const emArr = mentArr.slice(0, num)
    
    return(
        <FolioCellsDiv 
            divMargin={divMargin}
            grid={grid}
        >
            {folioList.map(v => 
                <FolioCell key={v["title"]}>
                    <NavLink to={v["title"]}>
                    <FolioCellWrap
                        category={v["category"]}
                        mainColor={v["mainColor"]}
                        backColor={v["backColor"]}
                    >
                        <FolioCellImg
                            category={v["category"]}
                            src={v["img"]} 
                            alt={""}
                        />
                        <FolioCellText
                            category={v["category"]}
                            textColor={v["textColor"]}
                        >
                            <div className="title">{v["title"]}</div> 
                            <div className="category">{v["category"]}</div>
                            <div className="year">{v["year"]}</div>
                        </FolioCellText>
                    </FolioCellWrap>
                    </NavLink>
                </FolioCell>)}
            {emArr !== Array(0) 
                ? emArr.map(v =>
                    <FolioCellEmpty key={v}>
                        <div className="ment">{v}</div>
                    </FolioCellEmpty>)
                : null}
        </FolioCellsDiv>
    )
}
export default FolioList;