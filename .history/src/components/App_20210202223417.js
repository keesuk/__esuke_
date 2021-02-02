import { Component } from "react";
import smoothscroll from 'smoothscroll-polyfill';
import styled from 'styled-components';
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from './Projects';

import { line_1, line_3, rainbow, app_menu, app_aboutMe, all_portFolio, findObject } from './_Functions.jsx';


const Right = styled.div`
    margin-left: 30vw;
    top: 0;

    header {
        display: flex;  
        position: fixed;
        z-index: 100;
        border-left: ${line_1};
        border-bottom: ${line_1};
        background-color: white;
        width: 70vw;
        height: 3.5em;

        button {
            font-size: 1.5em;
            font-weight: 500;
            width: 100%;
            text-align: center;
            letter-spacing: -.01em;
        }
        button:after { 
            content: "";
            position: absolute;
            width: 30%;
            height: .12em;
            left: 35%;
            right: 35%;
            top: 50%;
            bottom: 50%;
            visibility: hidden;
            background: ${rainbow};
        }
        button:hover:after { 
            visibility: visible;
        }
    }

    .rightContents {
        border-left: ${line_1};
        margin-top: 3.5em;
        position: fixed;
        z-index: 50;
        width: 66vw;
        overflow: auto;
        padding-left: 2vw;
        padding-right: 2vw;
        height: 100%;
    }
`;
const Left = styled.div`
    position: fixed;
    z-index: 100;
    width: 30vw;
    height: 100vh;
    top: 0;
    background-color: #EEE; 
    overflow: hidden;

    .index {
        @media all and (min-width:0px) and (max-width:1080px) {transform: scale(0.8, 0.8);}
        @media all and (min-width:1081px) {transform: scale(1, 1);}
        transform-origin: top right;
        transition: all .2s ;
        position: absolute;
        z-index: 100;
        width: 35px;
        height: 50vh;
        margin-top: 3.5em;
        right: 0;
        float: right;
    }
    &:hover .index {
        @media all and (min-width:0px) and (max-width:1080px) {transform: scale(1.2, 1.2);}
        @media all and (min-width:1081px) {transform: scale(1.4, 1.4);}
    }
    .menu {
        position: fixed;
        display: grid;
        grid-gap: 15px;
        margin-left: -30px;
        bottom: 60px;
    }
`;
const IndexContent = styled.button`
    width: 40px;
    height: 35px;
    float: right;
    padding: 0;
    white-space: nowrap;
    transition: all .2s ease;
    background-color: ${props => props.color};
    
    &:hover {
        width: 105px;
    }
    .img {
        opacity: 1;
        margin-left: 50px;
        border: 2.5px solid ${props => props.color};
        width: 30px;
        height: 30px;
    }
    .title {
        right: 120px;
        margin-top: -35px;
        position: absolute;
        opacity: 0;
    }
    &:hover .title {
        opacity: 1;
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


class App extends Component {
    state = {
        menu: {}, 
        aboutMe: {},
        portFolio: {},
    }

    componentDidMount(){
        this._menu()
        this._portFolio()
        this._aboutMe()
    }


    _menu(){
        const menuObj = {}
        
        app_menu.map(v => Object.assign(menuObj, {
            [v.title] : false
        }))
        this.setState({ menu : menuObj })
    }

    _portFolio(){
        const portFolioObj = {}

        all_portFolio.map(v => Object.assign(portFolioObj, {
            [v.title] : {
                "bool" : false,
                "component" : v.component
            }
        }))
        Object.assign(portFolioObj, {
            "Home": {
                "bool" : true,
                "component" : Projects(this.portFolioClick)
            }
        })
        this.setState({ portFolio : portFolioObj })
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

    portFolioClick(v){
        console.log(v)
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
                }
            }else{ 
                for(let key in aboutMeObj){
                    aboutMeObj[key]["bool"] = true    
                }
            }
        }
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
        smoothscroll.polyfill()
        const { menu, aboutMe, portFolio }  = this.state
        const truePortFolio = findObject(Object.values(portFolio), true)

        return(<>
            {menu["AboutMe"] 
                ? app_aboutMe.map((v, i) => 
                    aboutMe[i]["bool"] 
                    ? <AboutMe 
                        close={this.postItClose.bind(this)}
                        order={this.postItReorder.bind(this)}
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
            <Right>
                <header>
                    <button>Home</button>
                </header>
                <div className="rightContents">
                    {truePortFolio && truePortFolio["component"]}
                </div>
            </Right>
            <Left>
                <div className="index">
                    {all_portFolio.map(v => 
                        <IndexContent 
                            onClick={() => this.portFolioClick.bind(this)}
                            color={v["color"]}
                            key={v["title"]}
                        >
                            <img className="img" src={v["img"]} alt={""}/>
                            <div className="title">{v["title"]}</div>
                        </IndexContent>
                    )}
                </div>
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
            </Left>
        </>)
    }
}

export default App;
