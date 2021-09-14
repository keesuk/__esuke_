
const InnerImgBoxBackground = styled.div`
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
const InnerImgBox = styled.div`
    height: ${({height}) => height}vw;
    margin-top: ${({marginTop}) => marginTop}vw;
    margin-left: ${({marginLeft}) => marginLeft}vw;
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
const InnerIphoneMockupBox = styled.div`
    height: ${({width}) => width}vw;
    width: ${({width}) => width}%;
    margin-top: ${({marginTop}) => marginTop}vw;
    margin-left: ${({marginLeft}) => marginLeft}vw;
    margin-right: ${({marginRight}) => marginRight}vw;
    float: ${({LorR}) => LorR === "L" ? "left" : "right"};
    position: relative;

    .box {
        width: 115%;
        height: 100%;
        background-image: url("${Iphone}");
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;
        .img {
            display: block;
            height: auto;
            width: 62%;
            float: right;
            margin-top: 21%;
            margin-right: 7%;
            border: .02rem solid #ccc;
        }
    }
`;
const InnerVerticalBrowserMockupBox  = styled.div`
    height: ${({width}) => width}vw;
    width: ${({width}) => width}%;
    margin-top: ${({marginTop}) => marginTop}vw;
    margin-left: ${({marginLeft}) => marginLeft}vw;
    margin-right: ${({marginRight}) => marginRight}vw;
    float: ${({LorR}) => LorR === "L" ? "left" : "right"};
    position: relative;

    .box {
        width: 110%;
        height: 102%;
        background-image: url("${VerticalBrowserWhite}");
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;
        .img {
            display: block;
            height: auto;
            width: 86.2%;
            float: right;
            margin-top: 9.1%;
            margin-right: 4.2%;
        }  
    }
`;
const InnerHorizontalBrowserMockupBox = styled.div`
    width: ${({width}) => width}%;
    height: ${({width}) => width/3}vw;
    margin-top: ${({marginTop}) => marginTop}vw;
    margin-left: ${({marginLeft}) => marginLeft}vw;
    margin-right: ${({marginRight}) => marginRight}vw;
    float: ${({LorR}) => LorR === "L" ? "left" : "right"};
    position: relative;

    .box {
        width: 100%;
        height: 110%;
        background-image: url("${HorizontalBrowserDark}");
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;
        .img {
            display: block;
            height: auto;
            width: 91.6%;
            float: right;
            margin-top: 5.7%;
            margin-right: 2.9%;
        }  
    }
`;