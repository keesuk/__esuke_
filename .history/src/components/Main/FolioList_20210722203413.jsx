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
    grid-gap: 1rem 1.2rem;
    grid-auto-rows: auto;
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
    padding-bottom: 30%;
    border: .15rem solid #ddd;
    box-shadow: .1rem .1rem .1rem #777777;
`;
const FolioCellWrap = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 130%;

    &:after { 
        content: "";
        position: absolute;
        border-top: 0.25rem solid ${({mainColor}) => mainColor};
        width: 100%;
        height: 100%;
        transform: translateY(40%);
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
    margin-left: 0;
    margin-right: 0;
    margin-bottom: auto;
`;
const FolioCellText = styled.div`
    position: absolute;
    color: black;
    
    width: 100%;
    height: 100%;

    .category {
        font-size: .6rem; 
        font-weight: 400;
        font-style: italic;
        letter-spacing: -.02rem;
        position: absolute;
        bottom: 1.5rem;
        left: 1rem;
    }
    .title {
        font-size: 1rem; 
        font-weight: 600;
        font-style: italic;
        word-spacing: -.18rem;
        letter-spacing: -.03rem;
        position: absolute;
        bottom: 0.5rem;
        left: 1rem;
    }
    .year {
        display: none;
    }
`;
const FolioCellEmpty = styled.div`
    background-color: ${theme.colorObjs["cellEmptyBackColor"]};
    border: ${theme.lines["cellEmptyLine"]};
    position: relative;
    margin-left: 2%;
    margin-top: 2%;
    width: 97%;
    height: 96%;
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