import React from "react"
import styled, { keyframes } from "styled-components"
import PropTypes from "prop-types"
import LazyLoad from "react-lazyload"


const loadingAnimation = keyframes`
    0% { background-color: #fff;}
    50% { background-color: #ccc;}
    100% { background-color: #fff;}
`
const Placeholder = styled.div`
    animation: ${loadingAnimation} 1s infinite;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
`
const StyledImage = styled.img`
    position: absolute;
    object-fit: cover;
    height: 100%;
    width: 100%;
    left: 0;
`

const LazyImage = ({ src, alt }) => {
    const refPlaceholder = React.useRef()

    const removePlaceholder = () => {
        refPlaceholder.current.remove()
    }
    console.log(src)
    return (
        <>
        <Placeholder ref={refPlaceholder}/>
        <LazyLoad>
            <StyledImage
                onError={removePlaceholder}
                onLoad={removePlaceholder}
                src={src}
                alt={alt}
            />
        </LazyLoad>
        </>
    )
}

export default LazyImage