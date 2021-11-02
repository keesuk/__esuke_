import { Link, useLocation, Route, Switch} from "react-router-dom"
import { portFolioContents } from "../_data/_Data.jsx"
import ImageSlider from "../components/ImageSlider.js"
import BottomTitle from "../components/BottomTitle.js"
import MainText from "../components/MainText.js"
import Layout from "../css/_Layout.jsx"
import styled from "styled-components"
import { useState } from "react"


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
        margin-top: 14%;
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

const pagePer = 5
const NumBox = styled.div`
    border: .15rem solid ${({theme}) => theme.colorObjs["cellEmptyTextColor"]};
    border-bottom: .1rem solid ${({theme}) => theme.colorObjs["cellEmptyTextColor"]};
    justify-content: center;
    width: 38%;
    padding: .8rem 0rem .8rem 5rem;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    margin-top: 25%;
    display: flex;
    gap: 1.2rem;

    &:before {
        content: "0";
        display: flex;
        color: ${({theme}) => theme.colorObjs["cellEmptyTextColor"]};
        border-right: .1rem solid ${({theme}) => theme.colorObjs["cellEmptyTextColor"]};
        position: absolute;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
        width: 15%;
        font-weight: 600;
        height: 102%;   
        left: -.1%;
        z-index: -1;
        background-color: #C2F4FF;
    }

`
const Number = styled.div`
    background-color: ${({numNow}) => numNow 
        ? "black"
        : "transparent"
    };
    color: ${({theme, numNow}) => numNow
        ? "black"
        : theme.colorObjs["cellEmptyTextColor"]
    };
    border: .1rem solid ${({theme}) => theme.colorObjs["cellEmptyTextColor"]};
    line-height: 2.5rem;
    border-radius: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
`

const ContentPage = () => {
    let pageNum = parseInt(useLocation().pathname.slice(1))
    let portArr = []
    let perArr = []

    if(isNaN(pageNum))pageNum = 0
    
    for(const [i, v] of portFolioContents.entries()){
        if(i % pagePer === 0 && i !== 0){
            portArr.push(perArr)
            perArr = []
            perArr.push(v)
        }else{ 
            perArr.push(v)
        }
        if(i === portFolioContents.length -1){
            portArr.push(perArr)
        }
    }
    
    let extraArr = new Array(9-portArr.length).fill(0)


    return(
        <Layout>
            <Route path={pageNum === 0 
                ? "/"
                : "/" + pageNum
            }>
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
                        numNow={pageNum === i 
                            ? true 
                            : false
                        }
                        key={i}
                    >
                        <Link to={i === 0 
                            ? "/" 
                            : "/" + i
                        }>
                            {i+1}
                        </Link>
                    </Number>
                )}
                {extraArr.map((v, i)=> 
                    <Number>
                        -
                    </Number>
                )}
            </NumBox>
        </Layout>
    )
}

export default ContentPage