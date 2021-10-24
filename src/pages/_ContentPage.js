import ImageSlider from "../components/ImageSlider.js"
import MainTextBox from "../components/MainText.js"
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
        margin-top: 12%;
    `}
    ${({theme}) => theme.mobile`
        margin-top: 5%;
        width: 100%;
    `}
    position: relative;

    .bottomText {
        ${({theme}) => theme.mobile` 
            letter-spacing: -.065rem;
            word-spacing: -.18rem;
            line-height: 1.85rem;
            font-size: 1.2rem;
            margin-left: 2%;
            width: 97%;
        `}
        ${({theme}) => theme.deskTop` 
            letter-spacing: -.03rem;
            word-spacing: -.02rem;
            line-height: 1.3rem;
            font-size: 1rem;
        `}
        color: ${({theme, isText}) =>  isText 
            ? "#000"
            : theme.colorObjs["cellEmptyTextColor"]
        };
        transition: all .2s;
        margin-top: 1.3rem;
        font-style: italic;
        font-weight: 700;
        cursor: pointer;

        .title {
            margin-right: 1rem;
        }
        .sub {
            ${({theme}) => theme.mobile` 
                letter-spacing: -.07rem;
                word-spacing: -.08rem;
                font-size: 1.1rem; 
            `}
            ${({theme}) => theme.deskTop` 
                letter-spacing: -.045rem;
                word-spacing: -.1rem;
                font-size: .85rem;
            `}
            font-weight: 400;
        }
    }
`

const ContentPage = ({content}) => {
    const [isText, setIsText] = useState(false)
    
    return(
        <Layout>
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
                <div 
                    onClick={()=> setIsText(!isText)}
                    className="bottomText"
                >
                    <span className="title">{content.title}</span>
                    <span className="sub">{content.assign["eng"]}</span>
                </div>
            </Container>
            <MainTextBox
                text={content.mainText}
                color={content.keyColor}
                colorWidth={"8"}
                colorSpeed={"1"}
                isText={isText}
            />
        </Layout>
    )
}

export default ContentPage