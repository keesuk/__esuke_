import { useState } from "react";
import styled from "styled-components";

import theme from "../../css/_Theme.jsx";
import craft from "../../_data/img/craft.png"
import { CopyToClipboard } from 'react-copy-to-clipboard';

const prfWidth = "325px"
const prfHeight = "196px"
const ratio = 1.5

const width = `calc(${prfWidth} * ${ratio})`
const height = `calc(${prfHeight} * ${ratio})`
const bottom = `calc(-${prfHeight} * ${ratio+0.5})`

const ProfileButton = styled.button`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: white;
    box-shadow: .5rem .5rem 1rem rgba(0, 0, 0, .4);
    width: ${width};
    height: ${height};
    left: 16vw;
    transition: bottom .3s ease;
    position: absolute;
    z-index: 100000;
    bottom: ${({on}) => on === true ? "0vw" : bottom};

    .img {
        display: block;
        height: auto;
        width: 100%;
    }

    .message {
        position: absolute;
        padding: 25px;
        right: 10px;
        top: 10px;
        background-image: url(${craft});
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;
        color: white;
        font-size: 15px;

        .clip {
            position: absolute;
            width: 80px;
            height: 50px;
            background-color: skyblue;
            border-bottom: 5px solid #00aaff;
            border-right: 1px solid #00aadd;
            border-top: 2px solid #fff;
            border-left: 1px solid #fff;
            top: -30px;

            &:before {
                content: "";
                display: block;
                bottom: 0px;
                width: 100%;
                height: 30px;
                background: linear-gradient(rgba(255, 255, 255, 0.8) 5%, skyblue);
            }
        }
    }
`;

const Contact = ({prfFront, prfBack, mail, on}) => {

    const [hover, setHover] = useState(false)
    const [copied, setCopied] = useState(false)

    return (
        <CopyToClipboard 
            text={mail}
            onCopy={() => setCopied(true)}
        >
            <ProfileButton
                on={on}
                onClick={() => setHover(!hover)}
            >
                {copied === true 
                    ?   <div className="message">
                            <div className="clip"/>
                            mail copied to <br/> 
                            clipboard
                        </div>
                    :   null
                }
                <img 
                    className="img"
                    alt="" 
                    src={hover === false 
                        ? prfFront 
                        : prfBack
                }/>
            </ProfileButton>
        </CopyToClipboard>
    )
}

export default Contact;