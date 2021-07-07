import { NavLink } from "react-router-dom";
import theme from "../../css/_Theme.jsx";
import styled from "styled-components";

import { findCategory, useWindowSize, shuffle, getGrid } from "../../_data/_Functions.jsx";
import { mentInEmptyCell } from "../../_data/_Data.jsx";

const FolioListDiv = styled.div`
    margin-top: ${({divMargin}) => divMargin.marginTop}%;
    margin-bottom: ${({divMargin}) => divMargin.marginBottom}%;
    margin-left: ${({divMargin}) => divMargin.marginLeft}%;
    margin-right: ${({divMargin}) => divMargin.marginRight}%;
    display: grid;
    grid-template-columns: repeat(${({grid}) => grid}, 1fr);
    grid-gap: .7rem;
    grid-auto-rows: minmax(5rem, auto);
`;
FolioListDiv.defaultProps = {
    divMargin: {
        marginTop: "10",
        marginBottom: "10",
        marginLeft: "3.5",
        marginRight: "5",
}}

const FolioCell = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 25%;
    -webkit-filter: drop-shadow(.12rem .1rem .12rem rgba(0,0,0,0.6));
    background-color: white;
    background: radial-gradient(
        transparent 0rem, 
        transparent .15rem, 
        white .15rem,
        white
    );
    background-size: .4rem .4rem;
    background-position: -4.2rem -4.2rem;

    &:before {
        content: "";
        position: absolute;
        background-color: white;
        z-index: -1;
        top: .1rem;
        bottom: .1rem;
        left: .2rem;
        right: .08rem;
    }

    .cellWrap {
        position: relative;
        width: 88%;
        margin-left: 6%;
        margin-right: 6%;
        margin-top: 6%;
        margin-bottom: 6%;
        height: 113%;
        background-color: ${({backColor}) => backColor};

        &:after { 
            content: "";
            position: absolute;
            border-top: 0.25rem solid ${({mainColor}) => mainColor};
            width: 112%;
            margin-left: -6%;
            height: 25%;
            transform: translateY(-100%);
            visibility: hidden;
        }
        &:hover:after { 
            visibility: visible;
        }

        .cellWrapInside {
            display: flex;
            
            .img {  
                display: block;
                margin: auto;
                width: 100%;
            }
            .content_text {
                position: absolute;
                top: 0;
                font-size: ${theme.fontObjs["cell"]["fontSize"]};
                font-weight: ${theme.fontObjs["cell"]["fontWeight"]};
                font-family: ${theme.fontObjs["cell"]["fontFamily"]};
                letter-spacing: -.05rem;

                strong {
                    font-weight: ${theme.fontObjs["cell"]["strong"]["fontWeight"]};
                    letter-spacing: -.03rem;
            }}
        }
    }
`;
const FolioCellEmpty = styled.div`
    background-color: ${theme.colorObjs["cellEmptyBackColor"]};
    border: ${theme.lines["cellEmptyLine"]};
    position: relative;
    left: 2%;
    top: 2%;
    width: 96%;
    height: 95%;
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
                <FolioCell
                    key={v["title"]}
                    category={v["category"]}
                    mainColor={v["mainColor"]}
                    backColor={v["backColor"]}
                >
                    <NavLink to={v["title"]}>
                        <div className="cellWrap">
                            <div className="cellWrapInside">
                                <img 
                                    className="img" 
                                    src={v["img"]} 
                                    alt={""}/>
                                <div className="content_text">
                                    <strong>{v["title"]}</strong> {v["category"]}
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </FolioCell>)}
            {emArr !== Array(0) 
                ? emArr.map(v =>
                    <FolioCellEmpty
                        key={v}
                    >
                        <div className="ment">{v}</div>
                    </FolioCellEmpty>)
                : null}
        </FolioListDiv>
    )
}
export default FolioList;