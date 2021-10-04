import { useState } from "react"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled from "styled-components"

import { menuContact } from '../../_data/_Data.jsx'
import craft from "../../_data/img/_Source/craft.png"


const prfHeight = "196px"
const prfWidth = "325px"
const ratio = 1.5

const bottom = `calc(-${prfHeight} * ${ratio+.3})`
const height = `calc(${prfHeight} * ${ratio})`
const width = `calc(${prfWidth} * ${ratio})`

const ProfileButton = styled.button`
    bottom: ${({buttonOn}) => buttonOn 
        ? "0" 
        : bottom
    };
    height: ${height};
    width: ${width};
    box-shadow: .1rem .1rem .4rem rgba(0, 0, 0, .5);
    background-repeat: no-repeat;
    background-position: center;
    transition: bottom .5s ease;
    background-color: white;
    background-size: cover;
    position: absolute;
    z-index: 10;
    left: -10vw;

    &:active > .message { 
        transform: rotate(20deg);
    }

    .img {
        display: block;
        height: auto;
        width: 100%;
    }

    .message {
        opacity: ${({copy}) => copy 
            ? "1" 
            : "0"
        };
        background-image: url(${craft});
        box-shadow: .05rem .05rem .2rem rgba(0, 0, 0, .4);
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
        box-shadow: .1rem .1rem .1rem rgba(0, 0, 0, .4);
        transform: scale(0.8) rotate(20deg);
        border-radius: 0 0 90px 90px;
        border: 2px groove #DDDDDD;
        box-sizing: border-box;
        position: absolute;
        margin-left: -19px;
        margin-top: -40px;
        border-top: none;
        display: block;
        height: 80px;
        width: 34px;
        left: 50%;
        top: -5%; 
    }
    .paperclip::before, .paperclip::after {
        border: 2px groove #DDDDDD;
        position: absolute;
        content: "";
    }
    .paperclip::before {
        border-bottom: none;
        border-top: none;
        height: 50px;
        width: 22px;
        left: 2px;
    }
    .paperclip::after {
        box-shadow: inset .1rem .1rem .1rem rgba(0, 0, 0, .4);
        border-radius: 90px 90px 0 0;
        border-bottom: none;
        height: 30px;
        width: 26px;
        left: -2px;
        top: -30px;
    }
`

const Contact = ({toggle}) => {
    const [copied, setCopied] = useState(false)
    const [hover, setHover] = useState(false)

    return (
        <CopyToClipboard 
            onCopy={() => setCopied(true)}
            text={menuContact.mail}
        >
            <ProfileButton
                onClick={() => setHover(!hover)}
                buttonOn={toggle}
                copy={copied}
            >
                <div className="message">
                    <div className="paperclip"/>
                        mail's been copied<br/> 
                        to clipboard
                </div>
                {hover 
                    ? menuContact.profile.back
                    : menuContact.profile.front
                }
            </ProfileButton>
        </CopyToClipboard>
    )
}

export default Contact