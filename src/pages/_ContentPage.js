import ImageSlider from "../components/ImageSlider.js"
import BottomTitle from "../components/BottomTitle.js"
import MainText from "../components/MainText.js"
import Layout from "../css/_Layout.jsx"
import styled from "styled-components"
import { useState } from "react"



const Container = styled.div`
    ${({theme, width, isLeft}) => theme.deskTop`
        ${isLeft 
            ? "margin-right: null; margin-left: null;"
            : "margin-right: 0; margin-left: auto;"
        }
        width: ${width}%;
        margin-top: 12.5%;
    `}
    ${({theme}) => theme.mobile`
        margin-top: 5%;
        width: 100%;
    `}
    position: relative;
`

const ContentPage = ({content}) => {
    const [isText, setIsText] = useState(false)
    
    const textHover = () => {
        setIsText(!isText)
    }

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
        </Layout>
    )
}
export default ContentPage