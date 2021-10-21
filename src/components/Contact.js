import { useEffect, useState } from "react"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled from "styled-components"

import { menuContact } from "../_data/_Data.jsx"
import { UseWindowSize } from "../_data/_Functions.jsx"
import craft from "../_data/img/_Source/craft.png"


const prfHeight = 10
const prfWidth = 17
const criteria = 2490
const ratio = 1.8

const bottom = `calc(-${prfHeight}rem * ${ratio+.3})`
const height = `calc(${prfHeight}rem * ${ratio})`
const width = `calc(${prfWidth}rem * ${ratio})`

const ProfileButton = styled.button`
    bottom: ${({buttonOn}) => buttonOn 
        ? "0" 
        : bottom
    };
    height: ${height};
    width: ${width};
    box-shadow: .3rem .2rem 1rem rgba(0, 0, 0, .3);
    background-repeat: no-repeat;
    background-position: center;
    transition: bottom .5s ease;
    transform: translateX(-50%);
    background-color: white;
    background-size: cover;
    position: absolute;
    z-index: 10;
    left: 50%;

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
        box-shadow: .05rem .05rem .2rem rgba(0, 0, 0, .2);
        padding: 1.2rem 1rem .8rem 1rem;
        background-repeat: no-repeat;
        background-position: center; 
        border: .1rem solid #A7844F;
        letter-spacing: -.02rem;
        background-size: cover;
        line-height: 1.25rem; 
        position: absolute;
        border-left: none;
        border-top: none;
        font-size: .85rem;
        color: #fefefe;
        right: 10px;
        top: 10px;
    }

    .paperclip {
        transform: scale(${({size}) => size}) rotate(20deg);
        box-shadow: .1rem .1rem .1rem rgba(0, 0, 0, .2);
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
        top: -32px;
    }
`

const Contact = ({toggle}) => {
    const winWidth = UseWindowSize().width

    const [copied, setCopied] = useState(false)
    const [hover, setHover] = useState(false)
    const [size, setSize] = useState(1)

    useEffect(() => {
        setSize(winWidth/criteria)
    }, [winWidth])

    useEffect(() => {
        setCopied(false)
        setHover(false)
    }, [toggle === false])

    return (
        <CopyToClipboard 
            onCopy={() => setCopied(true)}
            text={menuContact.mail}
        >
            <ProfileButton
                onClick={() => setHover(!hover)}
                buttonOn={toggle}
                size={size}
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