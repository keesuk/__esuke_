import { Component } from "react";
import styled from 'styled-components';
import AboutMe from "../components/_AboutMe.jsx";
import Contact from "../components/_Contact.jsx";

import { line_1, line_3, rainbow, app_menu, app_aboutMe, all_portFolio, findObject } from '../_data/_Functions.jsx';

const LeftDiv = styled.div`
    position: fixed;
    border-right: ${line_1};
    z-index: 100;
    width: 30vw;
    height: 100vh;
    top: 0;
    background-color: #EEE; 
    overflow: hidden;
    
    .menu {
        position: fixed;
        display: grid;
        grid-gap: 15px;
        margin-left: -30px;
        bottom: 60px;
    }
`;
const MenuDiv = styled.div`
    button {
        padding-left: 30px;
        width: 210px;
        height: 54px;
        border: ${line_3};
        box-shadow: 5px 5px black;

        .open {
            font-weight: 400;
            font-size: 21px;
            width: 210px;
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
            font-size: 12px;
            font-weight: 600;
            white-space: nowrap;
            transform: rotate(-90deg);
        }
    }
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
        }
    }
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
            width: 58px;
            height: ${props => props.height};
            left: ${props => props.left};
            margin-top: ${props => props.margin};
            background-color: black;
        }
        &:hover:after {
            box-shadow: 0em -.1em .8em rgba(0, 0, 0, .3);
        }
        &:before {
            content: "";
            position: absolute;
            left: ${props => props.left};
            margin-top: -29px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 58px 58px 0 0;
            border-color: black transparent transparent transparent;
        }
    }
`;

class Left extends Component {
    constructor(props){
        super(props)
        this.state = {
            menu: {}, 
            aboutMe: {},
            portFolio: {},
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
        
        app_menu.map(v => Object.assign(menuObj, {
            [v.title] : false
        }))
        this.setState({ menu : menuObj })
    }
    _aboutMe(){
        const aboutMeObj = {}

        app_aboutMe.map(v => Object.assign(aboutMeObj, {
            [app_aboutMe.indexOf(v)] : {
                "value": app_aboutMe.indexOf(v),
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
                ? app_aboutMe.map((v, i) => 
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
            <LeftDiv>
                <div className="menu">
                    {app_menu.map(v =>
                        <MenuDiv
                            left={v["left"]}
                            leftText={v["leftText"]}
                            margin={v["margin"]}
                            marginText={v["marginText"]}
                            height={v["height"]}
                            width={v["width"]}
                            key={v["title"]}
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
                        </MenuDiv>
                    )}
                </div>
            </LeftDiv>
        </>)
    }
}

export default Left;
