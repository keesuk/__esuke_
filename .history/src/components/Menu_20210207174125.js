import { Component } from "react";
import styled from 'styled-components';
import AboutMe from "../components/_AboutMe.jsx";
import Contact from "../components/_Contact.jsx";

import { line_3, menu_menu, menu_aboutMe } from '../_data/_Functions.jsx';

const MenuDiv = styled.div`
    @media (max-width: 1900px){transform: scale(.8, .8)};
    @media (max-width: 1400px){transform: scale(.8, .8)};
    @media (max-width: 900px){transform: scale(.7, .7)};
    @media (max-width: 400px){transform: scale(0.9, 0.9)};
    
    transform-origin: bottom left;
    position: fixed;
    z-index: 1000;
    display: grid;
    grid-gap: 15px;
    margin-left: -30px;
    bottom: 60px;
`;
const MenuObj = styled.div`
    button {
        padding-left: 30px;
        width: 260px;
        height: 65px;
        border: ${line_3};
        border-color: ${props => props.deepColor} ;
        box-shadow: 5px 5px black;

        .open {
            font-weight: 400;
            font-size: 24px;
            width: 260px;
            letter-spacing: -1px;
            text-align: center;
            align-items: auto;
        }
        .close {
            position: absolute;
            color: white;
            z-index: 100;
            margin-left: ${props => props.leftText};
            margin-top: ${props => props.marginText};
            font-size: 15px;
            font-weight: 600;
            white-space: nowrap;
            transform: rotate(-90deg);
    }}
    .postIt {
        &:hover {
            text-decoration-line: line-through;
            text-decoration-thickness: 3.5px;
            box-shadow: 6px 6px 6px #999;
        }
        &:active {
            text-decoration-line: line-through;
            text-decoration-thickness: 2px;
            box-shadow: 2px 2px 2px #666;
    }}
    .postItAfter {
        width: ${props => props.width};
        box-shadow: none;
        border-right: 0px;

        &:hover {
            box-shadow: -4px 3.5px 3.5px rgba(0, 0, 0, .5);
        }
        &:after {
            content: "";
            position: absolute;
            width: 68px;
            height: ${props => props.height};
            left: ${props => props.left};
            margin-top: ${props => props.margin};
            background-color: black;
        }
        &:hover:after {
            box-shadow: 0rem -.1rem .8rem rgba(0, 0, 0, .3);
        }
        &:before {
            content: "";
            position: absolute;
            left: ${props => props.left};
            margin-top: -34px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 68px 68px 0 0;
            border-color: black transparent transparent transparent;
    }}
`;

class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            menu: {}, 
            aboutMe: {},
        }
        this.postItHandler = this.postItHandler.bind(this)
        this.postItClose = this.postItClose.bind(this)
        this.postItReorder = this.postItReorder.bind(this)
    }

    componentDidMount(){
        this._menu()
        this._aboutMe()
    }
    _menu(){
        const menuObj = {}
        
        menu_menu.map(v => Object.assign(menuObj, {
            [v.title] : false
        }))
        this.setState({ menu : menuObj })
    }
    _aboutMe(){
        const aboutMeObj = {}

        menu_aboutMe.map(v => Object.assign(aboutMeObj, {
            [menu_aboutMe.indexOf(v)] : {
                "value": menu_aboutMe.indexOf(v),
                "bool" : false
        }}))
        this.setState({ aboutMe : aboutMeObj })
    }
    postItHandler(v){
        const bool = this.state.menu[v]
        const menuObj = this.state.menu
        const aboutMeObj = this.state.aboutMe
        
        if(v === "AboutMe"){
            if(bool === true){
                for(let key in aboutMeObj){
                    aboutMeObj[key]["value"] = parseInt(key)
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

        for(let key in aboutMeObj) aboutMeObj[key]["value"]--

        aboutMeObj[num]["value"] = last
        this.setState({ aboutMe : aboutMeObj })
    }


    render(){
        const { menu, aboutMe }  = this.state

        return(<>
            {menu["AboutMe"] 
                ? menu_aboutMe.map((v, i) => 
                    aboutMe[i]["bool"] 
                    ? <AboutMe 
                        close={this.postItClose}
                        order={this.postItReorder}
                        value={aboutMe[i]["value"]} 
                        tape={v["tape"]}
                        width={v["width"]}
                        color={v["color"]}
                        borColor={v["borColor"]}
                        content={v["content"]}
                        key={i}
                        num={i}/>
                    : null)
                : null
            }
            {menu["Contact"] 
                ? <Contact/> 
                : null
            }
            <MenuDiv>
                {menu_menu.map(v =>
                    <MenuObj
                        left={v["left"]}
                        leftText={v["leftText"]}
                        margin={v["margin"]}
                        marginText={v["marginText"]}
                        height={v["height"]}
                        width={v["width"]}
                        key={v["title"]}
                        deepColor={v["deepColor"]}
                    > 
                        <button 
                            onClick={()=> this.postItHandler(v["title"])}
                            className={menu[v["title"]] ? "postItAfter": "postIt"}
                            style={{backgroundColor: v["color"]}} 
                        >
                            {menu[v["title"]] 
                                ? <div className="close">Close All</div>
                                : <div className="open">{v["title"]}</div>
                            }
                        </button>
                    </MenuObj>
                )}
            </MenuDiv>
        </>)
    }
}

export default Menu;
