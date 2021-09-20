import styled from "styled-components";
import theme from "../../css/_Theme.jsx"
import Remark from "./Remark.jsx"

const OuterImgBoxDiv = styled.div`
    height: ${({height}) => height}rem;
    margin-left: ${({marginLeft}) => marginLeft? marginLeft : "2.5"}rem;
    margin-right: 2.5rem;
    margin-top: ${({marginTop}) => marginTop}rem;
    position: relative;
    .box {
        width: ${({width}) => width}%;
        float: ${({LorR}) => LorR === "L" ? "left" : "right"};
        .img {
            display: block;
            height: auto;
            width: 100%;
            border: ${({outlineYorN}) => outlineYorN === "Y" ? theme.lines["pageModulesOuterImgBoxLine"]: null};
            filter: ${({filterYorN}) => filterYorN === "Y" ? "brightness(97%)": null};
        }
    }
`;

const OuterImgBox = ({marginTop, marginLeft, width, height, LorR, outlineYorN, filterYorN, image, remark}) => {
    return(
        <OuterImgBoxDiv 
            marginTop={marginTop}
            marginLeft={marginLeft}
            width={width}
            height={height}
            LorR={LorR}
            outlineYorN={outlineYorN}
            filterYorN={filterYorN}
        >
            <div className="box">
                <img className="img" alt="" src={image}/>
                {remark === null 
                    ? null
                    : <Remark remark={remark}/>
                }
            </div>
        </OuterImgBoxDiv>
    )
}

export default OuterImgBox;