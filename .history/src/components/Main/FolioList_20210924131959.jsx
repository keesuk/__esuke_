import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { findCategory, UseWindowSize, shuffle, getGrid } from "../../_data/_Functions.jsx";
import { portFolioContents, mentInEmptyCell } from "../../_data/_Data.jsx";


const FolioCellsDiv = styled.div`
    ${({theme}) => theme.deskTop`
        grid-gap: 1.2rem 1.4rem;
    `}
    ${({theme}) => theme.mobile`
        grid-gap: 1rem 1.2rem;
    `}
    grid-template-columns: repeat(${({grid}) => grid}, 1fr);
    padding-bottom: ${({marginBottom}) => marginBottom}%;
    padding-right: ${({marginRight}) => marginRight}%;
    padding-left: ${({marginLeft}) => marginLeft}%;
    padding-top: ${({marginTop}) => marginTop}%;
    grid-auto-rows: auto;
    display: grid;
`;
FolioCellsDiv.defaultProps = {
    marginTop: "10",
    marginBottom: "10",
    marginLeft: "3.5",
    marginRight: "6",
}

const FolioCell = styled.div`
    box-shadow: .1rem .1rem .1rem #777777;
    border: .15rem solid #ddd;
    padding-bottom: 30%;
    position: relative;
    cursor: pointer;
    width: 100%;
`;
const FolioCellWrap = styled.div`
    position: relative;
    display: flex;

    &:after { 
        border-top: 0.25rem solid ${({mainColor}) => mainColor};
        transform: translateY(40%);
        visibility: hidden;
        position: absolute;
        height: 130%;
        width: 100%;
        content: "";
    }
    &:hover:after { 
        visibility: visible;
    }
`;
const FolioCellImg = styled.img`
    margin-bottom: auto;
    margin-right: 0;
    margin-left: 0;
    margin-top: 0; 
    display: block;
    width: 100%;
`;
const FolioCellText = styled.div`
    position: absolute;
    margin-top: 130%;
    color: black;
    width: 100%;

    .category {
        ${({theme}) => theme.deskTop`
            font-size: .6rem; 
            bottom: 1.5rem;
        `}
        ${({theme}) => theme.mobile`
            font-size: .75rem; 
            bottom: 1.6rem;
            color: #333;
        `}
        letter-spacing: -.02rem;
        position: absolute;
        font-style: italic;
        font-weight: 400;
        left: .95rem;
    }
    .title {
        ${({theme}) => theme.deskTop`
            letter-spacing: -.03rem;
            word-spacing: -.18rem;
            font-size: 1rem; 
        `}
        ${({theme}) => theme.mobile`
            letter-spacing: -.04rem;
            word-spacing: -.15rem;
            font-size: 1.1rem; 
        `}
        font-style: italic;
        position: absolute;
        font-weight: 600;
        bottom: 0.5rem;
        left: 1rem;
    }
    .year {
        display: none;
    }
`;
const FolioCellEmpty = styled.div`
    ${({theme}) => theme.deskTop`
        border: ${theme.lines["cellEmptyLine"]};
    `}
    ${({theme}) => theme.mobile`
        border: ${theme.lines["cellEmptyLineMobile"]};
    `}
    background-color: ${({theme}) => theme.colorObjs["cellEmptyBackColor"]};
    position: relative;
    margin-left: 2%;
    margin-top: 2%;
    width: 97%;
    height: 96%;
    
    &:before {
        ${({theme}) => theme.deskTop`
            font-size: 1.8rem;
        `}
        ${({theme}) => theme.mobile`
            font-size: 2.4rem;
        `}
        color: ${({theme}) => theme.colorObjs["cellEmptyTextColor"]};
        position: absolute;
        margin-top: -.9rem;
        content: "✂";
        left: 45%;
    }
    .ment {
        ${({theme}) => theme.deskTop`
            font-weight: ${theme.fontObjs["cellEmpty"]["fontWeight"]};
            font-size: ${theme.fontObjs["cellEmpty"]["fontSize"]};
            bottom: 0;
        `}
        ${({theme}) => theme.mobile`
            letter-spacing: -.01rem;
            font-weight: 500;
            font-size: 1rem;
            bottom: .5rem;
            left: .95rem;
        `}
        font-family: ${({theme}) => theme.fontObjs["cellEmpty"]["fontFamily"]};
        font-style: ${({theme}) => theme.fontObjs["cellEmpty"]["fontStyle"]};
        color: ${({theme}) => theme.colorObjs["cellEmptyTextColor"]};
        white-space: nowrap;
        position: absolute;
        left: 10%;
    }
`;
const SubTitle = styled.div`
    font-weight: ${({theme}) => theme.fontObjs["subTitle"]["fontWeight"]};
    font-size: ${({theme}) => theme.fontObjs["subTitle"]["fontSize"]};
    margin-left: ${({marginLeft}) => marginLeft}%;
    margin-top: ${({marginTop}) => marginTop}%;
    letter-spacing: -.02rem;

    mark {
        font-size: ${({theme}) => theme.fontObjs["subTitle"]["mark"]["fontSize"]};
        background-color: ${({theme}) => theme.colorObjs["mark"]};
        letter-spacing: -.04rem;
        display: inline-block; 
        line-height: 1.6rem;
        padding-top: -1rem;
        height: 1.4rem;
    }
`;

const FolioList = ({ category, exceptionName, marginTop, marginBottom, marginLeft, marginRight, subTitle }) => {

    const folioList = findCategory(Object.values(portFolioContents), category, exceptionName)
    const grid = getGrid(UseWindowSize().width)
    const mentArr = shuffle(mentInEmptyCell)
    const length = folioList.length
    
    let num

    if(grid >= length)num =  grid-length
    if(grid < length)num = grid-(length%grid)

    const emArr = mentArr.slice(0, num)
    
    return(<>
        {subTitle === null ? null :
            <SubTitle
                marginTop={subTitle.marginTop}
                marginLeft={subTitle.marginLeft}
            >
                <mark>{subTitle.text}</mark> :{category}
            </SubTitle>
        }
        <FolioCellsDiv 
            grid={grid}
            marginTop={marginTop}
            marginLeft={marginLeft}
            marginBottom={marginBottom}
            marginRight={marginRight}
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
                ? emArr.map((v,i) =>
                    <FolioCellEmpty key={i}>
                        <div className="ment">{v}</div>
                    </FolioCellEmpty>)
                : null}
        </FolioCellsDiv>
    </>)
}
export default FolioList;