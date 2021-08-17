import { Component } from "react";
import styled from 'styled-components';

import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import Trash from "./Trash.jsx";

import { menuMenu, menuAboutMe, menuContact, menuButton } from '../../_data/_Data.jsx';
import theme from "../../css/_Theme.jsx";


const MenuDiv = styled.div`
    height: 0rem;
    position: fixed;
    box-sizing: border-box;
    z-index: 1;
    margin-left: -4rem;
    width: 10rem;
    top: ${theme.layoutRatio["topMargin"]}%;
    left: ${theme.layoutRatio["sub"]}%;
    transition: all .2s;

    button {
        font-size: 2rem;
        }
        .open {
        }
        .close {
    }}
    .postIt {
        &:hover {
        }
        &:active {
    }}
    .postItAfter {
        &:hover {
        }
        &:after {
        }
        &:hover:after {
        }
        &:before {
    }}
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
            <MenuDiv>
                <button 
                    onClick={()=> this.postItDouble(
                        menuButton["content"][0], 
                        menuButton["content"][1]
                    )}
                    className={menu[menuButton["title"]] ? "postItAfter": "postIt"}
                    style={{backgroundColor: menuButton["color"]}} 
                >
                    {menu[menuButton["title"]] 
                        ? <div className="close">Close All</div>
                        : <div className="open">❋❋❋❋❋❋❋</div>
                    }
                </button>
            </MenuDiv>
        </>)
    }
}

export default Menu;