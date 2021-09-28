import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useState, useEffect } from "react"
import styled from "styled-components"

import craft from "../../_data/img/_Source/craft.png"


const prfHeight = "196px"
const prfWidth = "325px"
const ratio = 1.5

const bottom = `calc(-${prfHeight} * ${ratio+.3})`
const height = `calc(${prfHeight} * ${ratio})`
const width = `calc(${prfWidth} * ${ratio})`


const ProfileButton = styled.button`
    bottom: ${({buttonOn}) => buttonOn 
        ? "0vw" 
        : bottom
    };
    height: ${height};
    width: ${width};
    box-shadow: .1rem .1rem .3rem rgba(0, 0, 0, .4);
    background-repeat: no-repeat;
    background-position: center;
    transition: bottom .5s ease;
    background-color: white;
    background-size: cover;
    position: absolute;
    z-index: 10;
    left: 16vw;

    &:active > .message { 
        transform: rotate(20deg);
    }

    .img {
        display: block;
        height: auto;
        width: 100%;
    }

    .message {
        opacity: ${({copy, buttonOn}) => copy 
            ? "1" 
            : "0"
        };
        background-image: url(${craft});
        box-shadow: .1rem .1rem .2rem rgba(0, 0, 0, .4);
        background-repeat: no-repeat;
        padding: 20px 25px 12px 25px;
        background-position: center; 
        border: 1.5px solid #A7844F;
        background-size: cover;
        position: absolute;
        border-left: none;
        border-top: none;
        font-size: 15px;
        color: white;
        right: 10px;
        top: 10px;
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

const Contact = ({prfFront, prfBack, mail, onContact}) => {

    const [hover, setHover] = useState(false)
    const [copied, setCopied] = useState(false)

    return (
        <CopyToClipboard 
            text={mail}
            onCopy={() => setCopied(true)}
        >
            <ProfileButton
                copy={copied}
                buttonOn={onContact}
                onClick={() => setHover(!hover)}
            >
                <div className="message">
                    <div className="paperclip"/>
                    mail's been copied<br/> 
                    to clipboard
                </div>
                {hover === false ? prfFront : prfBack}
            </ProfileButton>
        </CopyToClipboard>
    )
}

export default Contact;