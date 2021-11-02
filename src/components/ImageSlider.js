import { LogoImage, BrowserImage, Image } from "./ImageModule"
import { useState, useEffect } from "react"
import styled from "styled-components"


const Container = styled.div`
    height: ${({height}) => height}rem;
    box-sizing: border-box;
    margin-bottom: .5rem;
    padding-bottom: 1.5rem;
    transition: all .1s;
    margin-top: 8%;
    width: 100%;
    
    &:after {
        left: ${({total, current}) => 98/total * current}%;
        color: ${({theme, isText}) =>  isText 
            ? "#000"
            : theme.colorObjs["cellEmptyTextColor"]
        };
        transform: scaleX(${({isRight}) => isRight 
            ? "1" 
            : "-1"
        });
        transition: left .4s ease;
        margin-top: .15rem;
        position: absolute;
        font-size: 2.7rem;
        display: flex;
        content: "✂";
    }

    .cell {
        position: relative;
        overflow-Y: clip;
        height: 100%;
        width: 100%;
             
        button {
            height: ${({isLogo}) => isLogo 
                ? "30"
                : "100"
            }%;
            width: ${({isLogo}) => isLogo 
                ? "40"
                : "50"
            }%;
            position: absolute;
            display: block;
            z-index: 10;
            bottom: 0;
        }

        .next {
            cursor: e-resize;
            right: 0;
        }
        .prev {
            cursor: w-resize;
            left: 0;
        }
    }
`
const SlideDiv = styled.div`
    display: ${({active}) => active 
        ? ""
        : "none"
    };
    position: absolute;
    height: 100%;
    width: 100%;
`

const ImageSlider = ({isText, imageArr, height}) => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [logoSec, setLogoSec] = useState(false)
    const [isRight, setIsRight] = useState(true)

    const found = imageArr.findIndex(v => v.type === "logo")
    const totalSlide = imageArr.length-1

    
    const nextSlide = () => {
        if (currentSlide >= totalSlide) setCurrentSlide(0)
        else setCurrentSlide(currentSlide + 1)

        setIsRight(true)
    }
    
    const prevSlide = () => {
        if (currentSlide === 0) setCurrentSlide(totalSlide)
        else setCurrentSlide(currentSlide - 1)

        setIsRight(false)
    }


    useEffect(() => {
        if(currentSlide === found) setLogoSec(true)
        else setLogoSec(false)

    }, [currentSlide, found])


    return (
        <Container
            current={currentSlide}
            total={totalSlide}
            isRight={isRight}
            isLogo={logoSec}
            height={height}
            isText={isText}
        >
            <div className="cell">
                <button onClick={prevSlide} className="prev"/>
                <button onClick={nextSlide} className="next"/>
                {imageArr.map((v, i) => {
                    let Component
                    
                    if(v.type === "logo") Component = LogoImage
                    else if(v.type === "browser") Component = BrowserImage
                    else Component = Image

                    return (
                        <SlideDiv
                            active={currentSlide === i 
                                ? true 
                                : false
                            }
                            key={v.image || v.logo}
                        >
                            <Component 
                                paddingLR={v.paddingLR}
                                paddingTB={v.paddingTB}
                                image={v.image} 
                                color={v.color}
                                logo={v.logo}
                            />
                        </SlideDiv>
                    )
                })}
            </div>
        </Container>
    )
}

export default ImageSlider