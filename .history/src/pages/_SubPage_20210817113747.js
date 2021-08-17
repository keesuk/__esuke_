import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link, Route, useLocation } from "react-router-dom";
import Draggable from "react-draggable"

import { SubLayout } from "../components/_Layout.jsx";
import { portFolioContents, subPageIntroTag } from "../_data/_Data.jsx";
import { TagIntro, TagSticker, TagStickerInner, TagAbout } from "../components/Sub/Tags.jsx";
import { getKeyByValue } from '../_data/_Functions.jsx';

import theme from "../css/_Theme.jsx";


const SubPageFrame = styled.div`
    margin-left: 6%;
    margin-right: 6%;
    margin-top: -2.2rem;
    display: grid;
    .title {
        width: 100%;
        font-weight: 500;
        font-size: 1.1rem;
        letter-spacing: -.02rem;
        margin-top: 2rem;
        padding-bottom: .8rem;
        margin-bottom: .6rem;
        border-bottom: ${theme.lines["subPageLine"]};
    }
`;

const Sub = () => {
    const location = useLocation().pathname.replace("/", "")
    const portArr = Object.values(portFolioContents)
    const [stkArr, setStkArr] = useState(portArr.map(() => new Array(10).fill(false)))
    
    const updateStkArr = (i, j) => {
        let newArr = [...stkArr]
        newArr[i][j] = !newArr[i][j]
        
        setStkArr(newArr)
    }

    return(
        <SubLayout>
            <SubPageFrame>
                <div className="title">
                    {location === "" ? "Intro" : "About"}
                </div>
                {location === "" 
                    ?   <TagIntro rotate={subPageIntroTag["rotate"]}>
                            <div className="tagContentExp">
                                <div className="eng">
                                    {subPageIntroTag["text"]["eng"]}
                                </div>
                                <div className="kor">
                                    {subPageIntroTag["text"]["kor"]}
                                </div>
                            </div>
                            <div className="tagSubText">
                                {subPageIntroTag["date"]}
                            </div>
                        </TagIntro>
                    :   Object.entries(getKeyByValue(portFolioContents, location)["tag"]).map(([k, v], i) => 
                            <TagAbout 
                                key={k}
                                content={v["kor"]}
                                rotate={-(i+1)*5}
                            >
                                {k === "Project Includes" 
                                    ? <div className="tagContentList">
                                        <strong>{k}</strong>{v}
                                    </div>
                                    : <div className="tagContentExp">
                                        <strong>{k}</strong>{v["eng"]}
                                    </div>
                                }
                            </TagAbout>
                        )
                }
                <Draggable>
                    <RemWrapper>
                    <TagSticker
                        isHome={location === "" ? true : false} 
                    >
                        <div className="checkOutTag">
                            <div className="up">
                                check out
                            </div>
                            <div className="down">
                                about
                            </div>
                        </div>
                        <div className="stkBack">
                            {portArr.map((v, i) => 
                                <TagStickerInner 
                                    key={i} 
                                    mainColor={v["mainColor"]}
                                >
                                    {stkArr[i].map((v, j) => 
                                        <div 
                                            key={j} 
                                            className={stkArr[i][j] === false ? "stkCircle" : "stkCircleOff"}
                                            onMouseOver={() => updateStkArr(i,j)}
                                            onMouseLeave={() => updateStkArr(i,j)}
                                        />
                                    )}
                                </TagStickerInner>
                            )}
                        </div>
                    </TagSticker>
                    </RemWrapper>
                </Draggable>
            </SubPageFrame>
        </SubLayout>
    )
}
export default Sub;

class RemWrapper extends React.Component {
    // PropTypes is not available in this environment, but here they are.
    // static propTypes = {
    //   style: PropTypes.shape({
    //     transform: PropTypes.string.isRequired
    //   }),
    //   children: PropTypes.node.isRequired,
    //   remBaseline: PropTypes.number,
    // }
  
    translateTransformToRem(transform, remBaseline = 16) {
      const convertedValues = transform.replace('translate(', '').replace(')', '')
        .split(',')
        .map(px => px.replace('px', ''))
        .map(px => parseInt(px, 10) / remBaseline)
        .map(x => `${x}rem`)
      const [x, y] = convertedValues
  
      return `translate(${x}, ${y})`
    }
  
    render() {
      const { children, remBaseline = 16, style } = this.props
      const child = React.Children.only(children)
  
      const editedStyle = {
        ...child.props.style,
        ...style,
        transform: this.translateTransformToRem(style.transform, remBaseline),
      }
  
      return React.cloneElement(child, {
         ...child.props,
         ...this.props,
         style: editedStyle
      })
    }
  }