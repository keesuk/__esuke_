import { Component } from "react";
import styled from 'styled-components';

import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import Trash from "./Trash.jsx";

import { menuMenu, menuAboutMe, menuContact, menuButton } from '../../_data/_Data.jsx';
import theme from "../../css/_Theme.jsx";

import { scrollTrigger } from "../../_data/_Functions";


const value = 200

const MenuDiv = styled.div`
    ${({theme}) => theme.deskTop`
        left: ${theme.layoutRatio["sub"]}%;
        z-index: 1;
        top: 3rem;
    `}
    ${({theme, scroll}) => theme.mobile` 
        ${scroll 
            ? "left: 3rem;" 
            : "left: 1.6rem;"
        };
        transform-origin: left top;
        transform: scaleX(-1);
        transition: all .2s;
        z-index: 1000000;
        top: 4.5rem;
    `}
    box-sizing: border-box;
    color: transparent;
    position: fixed;
    width: 8rem;

    button {
        ${({theme}) => theme.deskTop` 
            box-shadow: 0rem 0rem .15rem rgba(0, 0, 0, .5);
        `}
        ${({theme, scroll}) => theme.mobile` 
            ${scroll 
                ? "box-shadow: -0.2rem 0.2rem .5rem rgba(0, 0, 0, .4);" 
                : "box-shadow: 0rem 0rem .2rem rgba(0, 0, 0, .4);"
            };
        `}
        margin-left: ${({active}) => active 
            ? "-6" 
            : "-4"
        }rem;
        background-color: white;
        box-sizing: border-box;
        transition: all .2s;
        position: relative;
        padding: .2rem;
        width: 120%;

        .inner {
            ${({theme}) => theme.deskTop` 
                border: .3rem double #F72D0D;
                padding-left: 1rem;
                height: 1.2rem;
            `}
            ${({theme}) => theme.mobile` 
                border: .35rem double #F72D0D;
                padding-left: 4rem;
                height: 1.8rem;
            `}
            color: ${({active}) => active 
                ? "black" 
                : "white"
            };
            background-color: white;
            padding-bottom: .3rem;
            display: block;

            .text {
                ${({theme}) => theme.mobile` 
                    transform-origin: left;
                    transform: scaleX(-1); 
                `}
                letter-spacing: -.05rem;
                white-space: nowrap;
                font-style: italic;
                font-size: 1.2rem;
                font-weight: 600;
            }
        }
    }

    ${({theme}) => theme.deskTop`
        &:hover button {
            box-shadow: .1rem .1rem .15rem rgba(0, 0, 0, .3);
            margin-left: -6.5rem;
        }
        &:active button {
            box-shadow: .1rem .1rem .15rem rgba(0, 0, 0, .3);
            margin-left: -5rem;
            color: black;

            &:before {
                color: black;
            }
        }
        &:hover .hoverOn {
            padding: .2rem .15rem .2rem .15rem;
            background-color: black;
            position: absolute;
            line-height: 1rem;
            font-size: 1.2rem;
            right: 15.5rem;
            display: block;
            color: white;
            top: .3rem;
        }
    `}
    ${({theme}) => theme.mobile`
        &:active button {
            box-shadow: .1rem .1rem .15rem rgba(0, 0, 0, .3);
            margin-left: -6.5rem;
        }
    `}
`;

class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            menu: {}, 
            aboutMe: {},
            cor: {}
        }
        this.postItHandler = this.postItHandler.bind(this)
        this.postItDouble = this.postItDouble.bind(this)
        this.postItReorder = this.postItReorder.bind(this)
        this.postItClose = this.postItClose.bind(this)
    }

    componentDidMount(){
        this._menu()
        this._aboutMe()

        this.setState({ cor : {
            clientWidth : document.body.clientWidth,
            X: document.body.clientWidth-value,
            Y: value
        }})
    }

    componentDidUpdate(){
        const width = document.body.clientWidth

        if(this.state.cor.clientWidth !== width){
            this.setState({ cor : {
                clientWidth : width,
                X: document.body.clientWidth-value,
                Y: value
            }})
        }
    }

    _menu(){
        const menuObj = {}
        
        menuMenu.map(v => Object.assign(menuObj, {
            [v.title] : false
        }))
        this.setState({ menu : menuObj })
    }
    _aboutMe(){
        const aboutMeObj = {}

        menuAboutMe.map(v => Object.assign(aboutMeObj, {
            [menuAboutMe.indexOf(v)] : {
                "zValue": menuAboutMe.indexOf(v),
                "bool" : false
        }}))
        this.setState({ aboutMe : aboutMeObj })
    }
    postItDouble(about, contact){
        this.postItHandler(about)
        this.postItHandler(contact)    
    }
    postItHandler(v){
        const bool = this.state.menu[v]
        const menuObj = this.state.menu
        const aboutMeObj = this.state.aboutMe
        
        if(v === "About"){
            if(bool === true){
                for(let key in aboutMeObj){
                    aboutMeObj[key]["zValue"] = parseInt(key)
                    aboutMeObj[key]["bool"] = false
            }}else{ 
                for(let key in aboutMeObj){
                    aboutMeObj[key]["bool"] = true    
        }}}
        menuObj[v] = !bool

        this.setState({
            menu : menuObj,
            aboutMe : aboutMeObj
        })
    }
    postItClose(num){
        const aboutMeObj = this.state.aboutMe
        aboutMeObj[num]["bool"] = false

        this.setState({ aboutMe : aboutMeObj })
    }
    postItReorder(num){
        const aboutMeObj = this.state.aboutMe
        const last = Object.keys(aboutMeObj).length-1

        for(let key in aboutMeObj) aboutMeObj[key]["zValue"]--

        aboutMeObj[num]["zValue"] = last
        this.setState({ aboutMe : aboutMeObj })
    }

    render(){
        const { menu, aboutMe, cor, active }  = this.state
        const { X, Y } = cor

        return(<>
            {menu["About"] 
                ?   <> 
                    {menuAboutMe.map((v, i) => aboutMe[i]["bool"] 
                        ? <AboutMe 
                            X={X}
                            Y={Y}
                            close={this.postItClose}
                            order={this.postItReorder}
                            zValue={aboutMe[i]["zValue"]} 
                            img={v["img"]}
                            width={v["width"]}
                            color={v["color"]}
                            borColor={v["borColor"]}
                            content={v["content"]}
                            key={i}
                            num={i}
                        />
                        : null
                    )}
                    <Trash
                        width={document.body.clientWidth-X}
                        height={Y} 
                        radius={Y}
                    >
                        <div className="trashInner">
                            <div className="trashInnerInner">
                                <div className="trashInnerInnerInner">
                                </div>
                            </div>
                        </div>
                    </Trash>
                    </>
                :   null}
            <MenuDiv
                active={menu[menuButton["title"]] ? true : false}
                scroll={scrollTrigger(this.props.scroll, 200)}
            >
                <button 
                    onClick={()=> this.postItDouble(
                        menuButton["content"][0], 
                        menuButton["content"][1]
                )}>
                    <div className="inner">
                        <div className="text">
                        close
                        </div>
                    </div>
                </button>
                <div className="hoverOn">
                    About
                </div>
            </MenuDiv>
        </>)
    }
}

export default Menu;


            // <Contact 
            //     prfFront={menuContact["front"]}
            //     prfBack={menuContact["back"]}
            //     mail={menuContact["mail"]}
            //     onContact={menu["Contact"] ? true : false}
            // />