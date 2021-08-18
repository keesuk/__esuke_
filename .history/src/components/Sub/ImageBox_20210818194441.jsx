import { useState } from "react";
import styled from "styled-components";
import theme from "../../css/_Theme.jsx"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const { 
    fontObjs, 
    colorObjs, 
    lines, 
    layoutRatio, } = theme
    
const OuterImgBoxDiv = styled.div`
    height: ${({height}) => height}vw;
    margin-left: ${({marginLeft}) => marginLeft? marginLeft : "2.5"}vw;
    margin-right: 2.5vw;
    margin-top: ${({marginTop}) => marginTop}vw;
    position: relative;
    .box {
        width: ${({width}) => width}%;
        float: ${({LorR}) => LorR === "L" ? "left" : "right"};
        .img {
            display: block;
            height: auto;
            width: 100%;
            border: ${({outlineYorN}) => outlineYorN === "Y" ? lines["pageModulesOuterImgBoxLine"]: null};
            filter: ${({filterYorN}) => filterYorN === "Y" ? "brightness(97%)": null};
        }
    }
`;

const images = [
  '//placekitten.com/1500/500',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500',
];

export const LightboxExample = () => {
    const [photoIndex, setPhotoIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button type="button" onClick={() => setIsOpen(true)}>
                Open Lightbox
            </button>

            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length,
                    )}
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + images.length + 1) % images.length,
                    )}
                />
            )}
        </div>
    )
}
const InnerImgBoxBackgroundDiv = styled.div`
    margin-left: 2.5vw;
    background-color: ${props => props.default
        ? colorObjs["InnerBackgroundColor"]
        : props.color
    };
    width: calc(100%-2.5vw);
    margin-top: ${({marginTop}) => marginTop}vw;
    margin-bottom: ${({marginBottom}) => marginBottom}vw;
    padding-top: ${({paddingTop}) => paddingTop}vw;
    padding-left: ${({paddingLeft}) => paddingLeft}vw;
    padding-right: ${({paddingRight}) => paddingRight}vw;
    padding-bottom: ${({paddingBottom}) => paddingBottom}vw;

`;
const InnerImgBoxDiv = styled.div`
    height: ${({height}) => height}vw;
    margin-top: ${({marginTop}) => marginTop}vw;
    position: relative;
    .box {
        width: ${({width}) => width}%;
        float: ${({LorR}) => LorR === "L" ? "left" : "right"};
        .img {
            display: block;
            height: auto;
            width: 100%;
        }
    }
`;