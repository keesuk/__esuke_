import styled from "styled-components";
import theme from "../../css/_Theme.jsx";
import craft from "../../_data/img/_Source/craft.png";

export const TagIntro = styled.div`
    margin-top: 1rem;
    background-color: ${theme.colorObjs["subTagBackColor"]};
    justify-self: start;
    margin-left: 20%;
    width: 72%;
    padding: .1rem;
    border-radius: .5rem;
    position: relative;
    border: ${theme.lines["subTagLineBold"]};
    &:hover {
        border-color:  ${props => props.default
            ? theme.colorObjs["subTagBackColor"]
            : props.hoverColor
        };
        transform: rotate(${({rotate}) => rotate}deg);
    }

    &:before {
        content: "";
        display: block;
        padding-bottom: 108%;
        border-radius: .2rem;
        border: ${theme.lines["subTagLineLight"]};
    } 
    .tagContentExp {
        margin-left: 8%;
        margin-right: 9%;
        position: absolute;
        top: 1.1rem;
        bottom: .9rem;
    
        .eng {
            line-height: 1.4rem;
            letter-spacing: -0.03rem;
            word-spacing: 0.02rem;
            font-size: ${theme.fontObjs["subTag"]["introContentExp"]["eng"]["fontSize"]};  
            font-style: ${theme.fontObjs["subTag"]["introContentExp"]["eng"]["fontStyle"]};
            font-weight: ${theme.fontObjs["subTag"]["introContentExp"]["eng"]["fontWeight"]};
            font-family: ${theme.fontObjs["subTag"]["introContentExp"]["eng"]["fontFamily"]};
        }
        .kor {
            transition-delay: .15s;
            line-height: 1.4rem;
            padding-top: 2rem;
            padding-bottom: 1.2rem;
            padding-left: 1.2rem;
            padding-right: 1rem;
            margin-top: -10rem;
            background-image: url("${craft}");
            background-position: center; 
            background-repeat: no-repeat;
            background-size: cover;
            color: ${theme.colorObjs["subTagTranslateTextColor"]};
            border-bottom: ${theme.lines["subTagTranslateLine"]};
            border-right: ${theme.lines["subTagTranslateLine"]};
            font-size: ${theme.fontObjs["subTag"]["introContentExp"]["kor"]["fontSize"]};  
            font-style: ${theme.fontObjs["subTag"]["introContentExp"]["kor"]["fontStyle"]};
            font-weight: ${theme.fontObjs["subTag"]["introContentExp"]["kor"]["fontWeight"]};
            font-family: ${theme.fontObjs["subTag"]["introContentExp"]["kor"]["fontFamily"]};
            letter-spacing: -0.03rem;
            word-spacing: .16rem;
            border-radius: .15rem;
            visibility: hidden;
            transform: rotate(${({rotate}) => rotate*3}deg);
            transition: visibility .04s;

            &:before {
                content: "";
                display: block;
                position: absolute;
                top: -28%;
                left: 30%;
                margin: auto;
                background-color: ${theme.colorObjs["subTagTranslateTapeColor"]};
                transform: rotate(${({rotate}) => -rotate*2}deg);
                width: 16%;
                height: 40%;
            }
        }

        &:before {
            content: "date";
            display: block;
            position: absolute;
            bottom: 22%;
            width: 100%;
            height: 15%;
            color: ${theme.colorObjs["subTagLineColor"]};
            font-size: ${theme.fontObjs["subTag"]["introContentExp"]["down"]["fontSize"]};  
            font-weight: 500;
            line-height: 3.5rem;
            border-bottom: ${theme.lines["subTagLineLight"]};
        }
        &:after {
            content: "time";
            display: block;
            position: absolute;
            bottom: 7%;
            width: 100%;
            height: 15%;
            color: ${theme.colorObjs["subTagLineColor"]};
            font-size: ${theme.fontObjs["subTag"]["introContentExp"]["down"]["fontSize"]};  
            font-weight: 500;
            line-height: 3.5rem;
            border-bottom: ${theme.lines["subTagLineLight"]};
        }
    }
    &:hover:before, &:hover .tagContentExp:before, &:hover .tagContentExp:after {
        border-color: ${({hoverColor}) => hoverColor};
        color: ${({hoverColor}) => hoverColor};
    }
    &:hover .tagContentExp > .kor {
        visibility: visible;
    }
    .tagSubText {
        position: absolute;
        right: 7.5%;
        bottom: 26%;
        font-family: ${theme.fontObjs["subTag"]["introDate"]["fontFamily"]};
        font-size: ${theme.fontObjs["subTag"]["introDate"]["fontSize"]};
        font-weight: ${theme.fontObjs["subTag"]["introDate"]["fontWeight"]};
        letter-spacing: .05rem;
    }
`;
export const TagSticker = styled.div`
    top: ${({isHome}) => isHome === true ? "42" : "45"}%;
    left: 2%;
    position: fixed;
    z-index: 60;
    
    .checkOutTag {
        cursor: move;
        transform: rotate(-18deg); 
        padding: .4rem .25rem;
        background-color: white;
        white-space: nowrap;
        letter-spacing: -.03rem;
        font-size: ${theme.fontObjs["subTag"]["checkOutTag"]["fontSize"]};
        font-family: ${theme.fontObjs["subTag"]["checkOutTag"]["fontFamily"]};
        font-weight: ${theme.fontObjs["subTag"]["checkOutTag"]["fontWeight"]};
        box-shadow: .05rem .05rem .05rem rgba(0, 0, 0, .1);
        position: absolute;
        left: 1rem;
        z-index: 3;

        .up {
            border: ${theme.lines["subTagInLineBold"]};
            display: flex;
            justify-content: center;
            padding: 0 .4rem;
            margin-bottom: 3.5%;
            border-radius: 0 0 .6rem .6rem;
            box-sizing: border-box;
            font-weight: 400;
            
            &:before {
                content: "";
                border-top: ${theme.lines["subTagInLineLight"]};
                width: calc(100% - 0.5rem);
                top: 5%;
                display: block;
                position: absolute;
            }
        }
        .down {
            border: ${theme.lines["subTagInLineBold"]};
            display: flex;
            justify-content: center;
            border-radius: .6rem .6rem 0 0;
            font-weight: 800;
            
            &:before {
                content: "";
                border-bottom: ${theme.lines["subTagInLineLight"]};
                width: calc(100% - 0.5rem);
                bottom: 5%;
                display: block;
                position: absolute;
            }
        }
        &:before {
            content: "";
            bottom: 50%;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            width: calc(100% - 1.7rem);
            height: .01rem;
            background-color: ${theme.colorObjs["subTagLineColor"]};
            display: block;
            position: absolute;
        }
    }
    .stkBack {
        position: absolute;
        z-index: 1;
        margin-top: 3.5rem;
        padding-top: 2rem;
        padding-right: 1rem;
        padding-left: 1rem;
        padding-bottom: .5rem;
        background-color: ${theme.colorObjs["subStickerBackColor"]};
        border-bottom: ${theme.lines["subTagStkBackLineDark"]};
        border-right: ${theme.lines["subTagStkBackLineDark"]};
        display: flex;
        flex-direction: row;
        gap: .8rem;
    }
`;
export const TagStickerInner = styled.div`
    transition: all .2s;

    .stkCircle {
        background-color: ${({mainColor}) => mainColor};
        width: .6rem;
        height: .6rem;
        border-radius: .6rem;
        margin-bottom: .7rem;
        box-shadow: .02rem .02rem .001rem rgba(0, 0, 0, 0.1);

        &:after {
            content: "";
            width: 1.3rem;
            height: 1.3rem;
            position: absolute;
            margin: auto;
        }
    }
    .stkCircleOff {
        background-color: whtie;
        width: .6rem;
        height: .6rem;
        border-radius: .6rem;
        margin-bottom: .7rem;
        box-shadow: .02rem .02rem .001rem rgba(0, 0, 0, 0.1);

        &:after {
            content: "";
            width: 1.3rem;
            height: 1.3rem;
            position: absolute;
            margin: auto;
        }
    }
`;

export const TagAbout = styled.div`
    margin-top: 1rem;
    background-color: ${theme.colorObjs["subTagBackColor"]};
    justify-self: start;
    margin-left: 19%;
    width: 73%;
    padding: .1rem;
    border-radius: .5rem;
    position: relative;
    border: ${theme.lines["subTagLineBold"]};
    &:hover {
        color: ${theme.colorObjs["subTagTranslateTextColor"]};
        border: .25rem solid ${({hoverColor}) => hoverColor};
        transform: rotate(${({rotate}) => rotate}deg);
        background-image: url("${craft}");
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;
    }
    &:before {
        content: "";
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4.65rem;
        border-radius: .2rem;
        padding-bottom: 0rem;
        border: ${theme.lines["subTagLineLight"]};
    } 
    &:hover:before {
        border: .1rem solid ${({hoverColor}) => hoverColor};
        content: "${({content}) => content}";
        line-height: 1.3rem;
        padding-left: 1.3rem;
        padding-right: .6rem;
        letter-spacing: -.04rem;
        word-spacing: .035rem;
        font-size: ${theme.fontObjs["subTag"]["aboutContentExp"]["kor"]["fontSize"]};  
        font-weight: ${theme.fontObjs["subTag"]["aboutContentExp"]["kor"]["fontWeight"]};
        font-family: ${theme.fontObjs["subTag"]["aboutContentExp"]["kor"]["fontFamily"]};
    }  
    &:hover .tagContentExp {
        color: transparent;
    }
    .tagContentExp {
        margin-left: 13%;
        margin-right: 10%;
        position: absolute;
        top: .55rem;
        bottom: .5rem;
        line-height: 1.2rem;
        letter-spacing: -0.025rem;
        word-spacing: 0rem;
        font-size: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontSize"]};  
        font-weight: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontWeight"]};
        font-family: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontFamily"]};
        font-style: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontStyle"]};
        
        strong {
            margin-left: -9%;
            margin-right: 3%;
            font-weight: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["strong"]["fontWeight"]};
        }
    }
    .tagContentList {
        margin-left: 18%;
        position: absolute;
        top: 2.6rem;
        bottom: .5rem;
        line-height: 1.1rem;
        letter-spacing: -0.025rem;
        word-spacing: 0rem;
        white-space: nowrap;
        font-size: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontSize"]};  
        font-weight: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontWeight"]};
        font-family: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontFamily"]};
        font-style: ${theme.fontObjs["subTag"]["aboutContentExp"]["eng"]["fontStyle"]};

        strong {
            position: absolute;
            margin-top: -1.5rem;
            margin-left: auto;
            margin-right: auto;
            font-weight: ${theme.fontObjs["subTag"]["pageContentList"]["strong"]["fontWeight"]};
            font-size: ${theme.fontObjs["subTag"]["pageContentList"]["strong"]["fontSize"]};
        }
    }
`;