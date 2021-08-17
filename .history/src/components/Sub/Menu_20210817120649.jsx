import { Component } from "react";
import styled from 'styled-components';

import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";

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
        position: relative;
        padding: .6rem;
        width: 100%;
        font-size: .8rem;
        font-weight: 300;
        -webkit-filter: drop-shadow(0rem 0rem .04rem rgba(0,0,0,0.5));
        background-color: white;
        background: radial-gradient(
            transparent 0rem, 
            transparent .12rem, 
            white .12rem,
            white
        );
        background-size: .4rem .4rem;
        background-position: -4.2rem -4.2rem;
        box-sizing: border-box;
        color: #4DC2DC;
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
const Trash = styled.div`
    z-index: 1000;
    right: 20px; 
    top: 20px; 
    position: absolute;
    width: ${({width}) => width}px; 
    height: ${({height}) => height}px; 
    border-radius: ${({radius}) => radius}px;
    border: 2px solid black;
    background-color: white;
    box-shadow: 2px 2px 2px #666666;
    
    &:after {
        content: "";
        display: block;
        border: 1px solid black;
        width: 85%;
        height: 85%;
        border-radius: 85%;
        position: absolute;
        z-index: 1;
        background-color: white;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }

    .trashInner {
        border: 1px solid black;
        width: 70%;
        height: 70%;
        border-radius: 70%;
        position: absolute;
        z-index: 2;
        background-color: black;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);

        &:after {
            content: "";
            display: block;
            border: 1px solid white;
            width: 80%;
            height: 80%;
            border-radius: 80%;
            position: absolute;
            z-index: 3;
            background-color: black;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }

    .trashInnerInner {
        border: 1px solid white;
        width: 80%;
        height: 80%;
        border-radius: 80%;
        position: absolute;
        z-index: 4;
        background-color: blue;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);

        &:after {
            content: "";
            display: block;
            border: 1px solid white;
            width: 75%;
            height: 75%;
            border-radius: 75%;
            position: absolute;
            z-index: 5;
            background-color: red;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }

    .trashInnerInnerInner {
        border: 1px solid black;
        width: 50%;
        height: 50%;
        border-radius: 50%;
        position: absolute;
        z-index: 6;
        background-color: yellow;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);

        &:after {
            content: "";
            display: block;
            border: 1px solid black;
            width: 50%;
            height: 50%;
            border-radius: 50%;
            position: absolute;
            z-index: 7;
            background-color: yellow;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }

    .trashPoint {
        border: 1px solid black;
        width: 1%;
        height: 1%;
        border-radius: 100%;
        position: absolute;
        z-index: 8;
        background-color: black;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
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
                        : <div className="open">{menuButton["title"]}</div>
                    }
                </button>
            </MenuDiv>
        </>)
    }
}

export default Menu;