import { useScrollYPosition } from "react-use-scroll-position"
import styled from "styled-components"
import { useState } from "react"

import { scrollTrigger } from "../_data/_Functions.jsx"
import Contact from "./Contact.js"
import AboutMe from "./AboutMe.js"


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
        top: 7rem;
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
        padding: .2rem .25rem;
        transition: all .2s;
        position: relative;
        width: 100%;

        .inner {
            ${({theme}) => theme.deskTop` 
                border: .2rem solid #F72D0D;
            `}
            ${({theme}) => theme.mobile` 
                border: .34rem solid #F72D0D;
            `}
            padding: .1rem .25rem;
            height: 2.3rem;
            display: block;

            &:before {
                border: .1rem solid #F72D0D;
                display: block;
                width: 100%;
                height: 92%;
                content: "";

            }

            &:after {
                color: ${({toggle}) => toggle 
                    ? "black" 
                    : "transparent"
                };
                letter-spacing: -.05rem;
                white-space: nowrap;
                position: absolute;
                font-style: italic;
                margin-top: -2rem;
                margin-left: 5rem;
                font-size: 1.2rem;
                font-weight: 600;
                content: "close";
                display: block;
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
        color: white;
        left: 16rem;
        top: .3rem;
    }
`


const Menu = () => {
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
            <Contact toggle={menu}/> 
            {/* <AboutMe toggle={menu} X={10} Y={10}/> */}
        </AreaDiv>
    </>)
}

export default Menu