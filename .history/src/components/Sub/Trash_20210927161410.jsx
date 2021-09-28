import styled from 'styled-components';

const Trash = styled.div`
    border-radius: ${({radius}) => radius}px;
    height: ${({height}) => height}px; 
    width: ${({width}) => width}px; 
    box-shadow: 2px 2px 2px #666666;
    border: 2px solid black;
    background-color: white;
    position: absolute;
    z-index: 1000;
    right: 20px; 
    top: 20px; 
    
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
        border: 1px solid white;
        width: 80%;
        height: 80%;
        border-radius: 80%;
        position: absolute;
        z-index: 4;
        background-color: blue;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);

        &:after {
            content: "";
            display: block;
            border: 1px solid white;
            width: 75%;
            height: 75%;
            border-radius: 75%;
            position: absolute;
            z-index: 5;
            background-color: red;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }

    .trashInnerInnerInner {
        border: 1px solid black;
        width: 50%;
        height: 50%;
        border-radius: 50%;
        position: absolute;
        z-index: 6;
        background-color: yellow;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);

        &:after {
            content: "";
            display: block;
            border: 1px solid black;
            width: 50%;
            height: 50%;
            border-radius: 50%;
            position: absolute;
            z-index: 7;
            background-color: yellow;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }

    .trashPoint {
        border: 1px solid black;
        width: 1%;
        height: 1%;
        border-radius: 100%;
        position: absolute;
        z-index: 8;
        background-color: black;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
`;

export default Trash