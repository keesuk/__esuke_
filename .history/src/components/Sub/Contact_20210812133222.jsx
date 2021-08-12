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
const bottom = `calc(-${prfHeight} * ${ratio+0.3})`

const ProfileButton = styled.button`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: white;
    box-shadow: .1rem .1rem .3rem rgba(0, 0, 0, .4);
    width: ${width};
    height: ${height};
    left: 16vw;
    transition: bottom .5s ease;
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
        border: 2px solid #A7844F;
        border-top: none;
        border-left: none;
        top: 10px;
        background-image: url(${craft});
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;
        color: white;
        font-size: 15px;
        box-shadow: .1rem .1rem .2rem rgba(0, 0, 0, .6);
    }

    .paperclip {
        box-sizing: border-box;
        display: block;
        top: -5%; 
        left: 50%;
        margin-top: -40px;
        margin-left: -19px;
        height: 80px;
        width: 34px;
        border: 2px groove #DDDDDD;
        border-radius: 0 0 90px 90px;
        border-top: none;
        position: absolute;
        transform: scale(0.8) rotate(20deg);
        box-shadow: .1rem .1rem .1rem rgba(0, 0, 0, .4);
    }
    .paperclip::before, .paperclip::after {
        content: "";
        position: absolute;
        border: 2px groove #DDDDDD;
    }
    .paperclip::before {
        left: 2px;
        height: 50px;
        width: 22px;
        border-bottom: none;
        border-top: none;
    }
    .paperclip::after {
        top: -30px;
        left: -2px;
        height: 30px;
        width: 26px;
        border-radius: 90px 90px 0 0;
        border-bottom: none;
        box-shadow: inset .1rem .1rem .1rem rgba(0, 0, 0, .4);
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
                            <div className="paperclip"/>
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