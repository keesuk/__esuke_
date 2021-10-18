import styled from 'styled-components'

const TrashDiv = styled.div`
    top: ${({toggle, width}) => toggle
        ? "10"
        : "-300"
    }px; 
    border-radius: ${({radius}) => radius}px;
    height: ${({height}) => height}px; 
    width: ${({width}) => width}px; 
    box-shadow: 2px 2px 2px #666666;
    transition: top .5s ease;
    border: 2px solid black;
    background-color: white;
    position: absolute;
    z-index: 1000;
    left: 58vw; 
    
    &:after {
        transform: translate(-50%,-50%);
        border: 1px solid black;
        background-color: white;
        border-radius: 85%;
        position: absolute;
        display: block;
        content: "";
        width: 85%;
        height: 85%;
        z-index: 1;
        left: 50%;
        top: 50%;
    }

    .trashInner {
        transform: translate(-50%,-50%);
        border: 1px solid black;
        background-color: black;
        border-radius: 70%;
        position: absolute;
        height: 70%;
        width: 70%;
        z-index: 2;
        left: 50%;
        top: 50%;

        &:after {
            transform: translate(-50%,-50%);
            border: 1px solid white;
            background-color: black;
            border-radius: 80%;
            position: absolute;
            display: block;
            content: "";
            height: 80%;
            width: 80%;
            z-index: 3;
            left: 50%;
            top: 50%;
        }
    }

    .trashInnerInner {
        transform: translate(-50%,-50%);
        border: 1px solid white;
        background-color: blue;
        border-radius: 80%;
        position: absolute;
        height: 80%;
        width: 80%;
        z-index: 4;
        left: 50%;
        top: 50%;

        &:after {
            transform: translate(-50%,-50%);
            border: 1px solid white;
            background-color: red;
            border-radius: 75%;
            position: absolute;
            display: block;
            content: "";
            height: 75%;
            width: 75%;
            z-index: 5;
            left: 50%;
            top: 50%;
        }
    }

    .trashInnerInnerInner {
        transform: translate(-50%,-50%);
        background-color: yellow;
        border: 1px solid black;
        border-radius: 50%;
        position: absolute;
        height: 50%;
        width: 50%;
        z-index: 6;
        left: 50%;
        top: 50%;

        &:after {

            transform: translate(-50%,-50%);
            background-color: yellow;
            border: 1px solid black;
            border-radius: 50%;
            position: absolute;
            display: block;
            content: "";
            height: 50%;
            width: 50%;
            z-index: 7;
            left: 50%;
            top: 50%;
        }
    }

    .trashPoint {
        transform: translate(-50%,-50%);
        background-color: black;
        border: 1px solid black;
        border-radius: 100%;
        position: absolute;
        height: 1%;
        width: 1%;
        z-index: 8;
        left: 50%;
        top: 50%;
    }
`
const Trash = ({width, height, radius, toggle}) => {
    
    return(
        <TrashDiv
            height={height}
            radius={radius}
            toggle={toggle}
            width={width}
        >
            <div className="trashInner">
                <div className="trashInnerInner">
                    <div className="trashInnerInnerInner">
                    </div>
                </div>
            </div>
        </TrashDiv>
    )
}
export default Trash