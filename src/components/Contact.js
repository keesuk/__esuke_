import { useScrollYPosition } from "react-use-scroll-position"
import React, { useState, useEffect } from "react"
import styled from 'styled-components'

import { scrollTrigger } from "../_data/_Functions"
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { contact } from "../_data/_Data.jsx"
import { UseWindowSize } from "../_data/_Functions.jsx"
import craft from "../_data/img/_Source/craft.png"


const criteria = 2000
const prfHeight = 10
const prfWidth = 17
const ratio = 1.9

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
        padding: 1.4rem 1.2rem .8rem 1.2rem;
        background-repeat: no-repeat;
        background-position: center; 
        border: .1rem solid #A7844F;
        letter-spacing: -.02rem;
        background-size: cover;
        line-height: 1.5rem; 
        position: absolute;
        border-left: none;
        border-top: none;
        font-size: .9rem;
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

const ProfileCard = ({toggle}) => {
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
    }, [toggle])

    return (
        <CopyToClipboard 
            onCopy={() => setCopied(true)}
            text={contact.mail}
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
                    ? contact.profile.back
                    : contact.profile.front
                }
            </ProfileButton>
        </CopyToClipboard>
    )
}

const AreaDiv = styled.div`
    position: fixed;
    z-index: 20;
    bottom: 0;
    right: 0;
    left: 0;
`
const MenuButton = styled.div`
    ${({theme}) => theme.deskTop`
        left: -4.2rem;
        top: 5rem;

        &:hover button {
            box-shadow: .1rem .1rem .4rem rgba(0, 0, 0, .3);
            margin-left: 1.5rem;
        }

        &:hover .hoverOn {
            display: block;
        }
    `}
    ${({theme, scroll}) => theme.mobile` 
        left: ${scroll 
            ? "-5" 
            : "-7.5"
        }rem;
        bottom: 5.5rem;
    `}
    transition: all .2s;
    position: fixed;
    width: 13rem;
    z-index: 100;

    button {
        ${({theme}) => theme.deskTop` 
            box-shadow: 0rem 0rem .15rem rgba(0, 0, 0, .6);
        `}
        ${({theme, scroll}) => theme.mobile` 
            box-shadow: ${scroll 
                ? "-0.2rem 0.2rem .5rem rgba(0, 0, 0, .4)" 
                : "0rem 0rem .2rem rgba(0, 0, 0, .4)"
            };
        `}
        margin-left: ${({toggle}) => toggle 
            ? "1.5" 
            : "0"
        }rem;
        background-color: white;
        box-sizing: border-box;
        transition: all .2s;
        position: relative;
        padding: .2rem;
        width: 100%;

        .inner {
            ${({theme}) => theme.deskTop` 
                border: .3rem double #F72D0D;
                height: 1.8rem;
            `}
            ${({theme}) => theme.mobile` 
                border: .34rem double #F72D0D;
                height: 1.8rem;
            `}
            padding-bottom: .3rem;
            display: block;

            &:after {
                color: ${({toggle}) => toggle 
                    ? "black" 
                    : "transparent"
                };
                letter-spacing: -.05rem;
                margin-right: 1rem;
                white-space: nowrap;
                font-style: italic;
                font-size: 1.2rem;
                font-weight: 600;
                content: "close";
                display: block;
                float: right;
            }
        }
    }

    &:active button {
        box-shadow: .02rem .02rem .2rem rgba(0, 0, 0, .6);
        margin-left: 1rem;
    }

    .hoverOn {
        padding: .2rem .15rem .2rem .15rem;
        background-color: black;
        position: absolute;
        line-height: 1rem;
        font-size: 1.2rem;
        display: none;
        left: 16rem;
        color: white;
        top: .3rem;
    }
`


const Contact = () => {
    const [menu, setMenu] = useState(false)
    const scroll = useScrollYPosition()

    const toggle = () => { setMenu(!menu) }

    return(<>
        <MenuButton
            scroll={scrollTrigger(scroll, 200)}
            toggle={menu}
        >
            <button onClick={() => toggle()}>
                <div className="inner"/>
            </button>
            <div className="hoverOn">
                Contact
            </div>
        </MenuButton>
        <AreaDiv>
            <ProfileCard toggle={menu}/> 
        </AreaDiv>
    </>)
}

export default Contact