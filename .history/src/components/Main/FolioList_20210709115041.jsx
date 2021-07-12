import { NavLink } from "react-router-dom";
import theme from "../../css/_Theme.jsx";
import styled from "styled-components";

import { findCategory, useWindowSize, shuffle, getGrid } from "../../_data/_Functions.jsx";
import { mentInEmptyCell } from "../../_data/_Data.jsx";

const FolioCellsDiv = styled.div`
    margin-top: ${({divMargin}) => divMargin.marginTop}%;
    margin-bottom: ${({divMargin}) => divMargin.marginBottom}%;
    margin-left: ${({divMargin}) => divMargin.marginLeft}%;
    margin-right: ${({divMargin}) => divMargin.marginRight}%;
    display: grid;
    grid-template-columns: repeat(${({grid}) => grid}, 1fr);
    grid-gap: .7rem;
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
    background-color: ${({category}) => category === "Branding" 
        ? "white" : ({backColor}) => backColor};

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

    ${({category}) => category === "Branding" 
        ? "margin-top: 0; margin-bottom: auto;"
        : (category === "Editorial" 
        ? "margin: auto;"
        : (category === "Poster"
        ? "object-fit: cover;"
        : (category === "UI/UX"
        ? "margin: auto;"
        : null)))
    }
`;
const FolioCellText = styled.div`
    position: absolute;
    color: ${({textColor}) => textColor};

    ${({category}) => category === "Branding" 
        ? `
        bottom: 4%;
        height: 1rem; 
        display: flex;
        justify-content: space-between;      

        .title {
            letter-spacing: -.055rem; 
            font-size: 1.1rem; //a6
            font-weight: 500; //500 
        }
        .category {
            margin-left: .45rem;
            letter-spacing: -.04rem; 
            font-size: 0.7rem; //a9
            font-weight: 400; //r
        }
        .year {
            display: none;
        }
        `
        : (category === "Editorial" 
        ? `
        bottom: 0;
        font-size: 0.7rem; //a9  
        font-weight: 500; //500 
        font-style: italic;  
        letter-spacing: -.02rem; 
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;

        .category {
            margin-left: .4rem;
        }
        .year {
            margin-left: .4rem;
            font-size: 0.7rem; //a9  
            font-weight: 300; //
        }
        `
        : (category === "Poster"
        ? `
        top: 2%;
        font-size: .9rem; //a9  
        font-weight: 600; //500 
        letter-spacing: -.01rem; 
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        font-family: 'Cormorant Garamond', serif;

        .category {
            margin-left: .3rem;
        }
        .year {
            margin-left: .3rem;
            font-weight: 300; //
            font-style: italic;  
        }
        `
        : (category === "UI/UX"
        ? `
        font-size: .9rem; //a9  

        .title {
        }
        .category {
        }
        .year {
            font-weight: 300; //
            font-style: italic;  
        }
        `
        : null)))
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
    const folioList = findCategory(folioArr, category, name)
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