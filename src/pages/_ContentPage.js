import { portFolioContents } from "../_data/_Data.jsx"
import ImageSlider from "../components/ImageSlider.js"
import BottomTitle from "../components/BottomTitle.js"
import MainText from "../components/MainText.js"
import Layout from "../css/_Layout.jsx"
import styled from "styled-components"
import { useState } from "react"
import { Link, useLocation, Route } from "react-router-dom"


const Container = styled.div`
    ${({theme, width, isLeft}) => theme.deskTop`
        margin-right: ${isLeft 
            ? ""
            : "0"
        };
        margin-left: ${isLeft 
            ? ""
            : "auto"
        };
        width: ${width}%;
        margin-top: 12%;
    `}
    ${({theme}) => theme.mobile`
        margin-top: 5%;
        width: 100%;
    `}
    position: relative;
`

const ContentModule = ({content}) => {
    const [isText, setIsText] = useState(false)
    
    const textHover = () => {
        setIsText(!isText)
    }
    return(<>
        <Container 
            isLeft={content.isLeft}
            width={content.width}
            isText={isText}
        >
            <ImageSlider
                imageArr={content.image}
                height={content.height}
                isText={isText}
            />
            <BottomTitle
                textHover={textHover}
                title={content.title}
                sub={content.assign}
                isText={isText}
            />
        </Container>
        <MainText
            color={content.keyColor}
            text={content.mainText}
            colorWidth={"8"}
            colorSpeed={"1"}
            isText={isText}
        />
    </>)
}

const pagePer = 4
const NumBox = styled.div`
    margin-top: 10%;
    display: flex;
    gap: 1.2rem;

    .num {
        border-top: .12rem solid ${({theme}) => theme.colorObjs["cellEmptyLineColor"]};
        color: ${({theme}) => theme.colorObjs["cellEmptyTextColor"]};
        font-size: 1.4rem;
        font-weight: 600;
        cursor: pointer;
    }
`
const Number = styled.div`
`

const ContentPage = () => {
    let pageNum = parseInt(useLocation().pathname.slice(1))
    let portArr = []
    let perArr = []

    for(const [i, v] of portFolioContents.entries()){
        if(i % pagePer === 0 && i !== 0){
            portArr.push(perArr)
            perArr = []
            perArr.push(v)
        }else if (i === portFolioContents.length - 1) {
            perArr.push(v)
            portArr.push(perArr)
        }else{
            perArr.push(v)
        }
    }

    if(isNaN(pageNum))pageNum = 0
    

    return(
        <Layout>
            <Route path={pageNum}>
                {portArr[pageNum].map((v) => 
                    <ContentModule
                        key={v.title}
                        content={v}
                    />
                )}
            </Route>
            <NumBox>
                {portArr.map((v, i) => 
                    <Number
                        numNow={pageNum}
                    >
                        <Link 
                            className="num"
                            to={"/" + i}
                        >
                            {i+1}
                        </Link>
                    </Number>
                )}
            </NumBox>
        </Layout>
    )
}

export default ContentPage