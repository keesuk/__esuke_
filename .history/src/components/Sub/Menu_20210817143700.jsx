import { Component } from "react";
import styled from 'styled-components';

import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import Trash from "./Trash.jsx";

import { menuMenu, menuAboutMe, menuContact, menuButton } from '../../_data/_Data.jsx';
import theme from "../../css/_Theme.jsx";


const MenuDiv = styled.div`
    position: fixed;
    box-sizing: border-box;
    z-index: 1;
    margin-left: -4rem;
    width: 10rem;
    top: 3rem;
    left: ${theme.layoutRatio["sub"]}%;
    transition: all .2s;

    button {
        position: relative;
        padding: .2rem;
        width: 100%;
        background-color: white;
        box-sizing: border-box;
        box-shadow: 0rem 0rem .1rem rgba(0, 0, 0, .3);
        
        font-size: 1.5rem;
        font-weight: 400;
        white-space: nowrap;

        .open {
        }

        &:before {
            content: "${({content}) => content}";
            height: 1.rem;
            display: block;
            background-color: white;
            border: .15rem solid #FF5E45;
        }
    }

    &:hover {
        margin-left: -6rem;
    }
    &:active {
        margin-left: -5.5rem;
    }
`;
const value = 200

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
        const { menu, aboutMe, cor }  = this.state
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
            <Contact 
                prfFront={menuContact["front"]}
                prfBack={menuContact["back"]}
                mail={menuContact["mail"]}
                onContact={menu["Contact"] ? true : false}
            />
            <MenuDiv
                content={menu[menuButton["title"]] 
                    ? "close"
                    : ""
            }>
                <button 
                    onClick={()=> this.postItDouble(
                        menuButton["content"][0], 
                        menuButton["content"][1]
                )}>
                </button>
            </MenuDiv>
        </>)
    }
}

export default Menu;