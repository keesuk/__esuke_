import { Component } from "react";
import smoothscroll from 'smoothscroll-polyfill';
import styled from 'styled-components';
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from './Projects';

import { line_1, line_3, rainbow, app_menu, app_aboutMe, randomize } from './_Functions.jsx';

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
        margin-top: 3.5em;
        right: 0;
        float: right;
    }
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
const IndexContent = styled.div`
    width: 2em;
    height: 2em;
    background-color: ${props => props.color};
    
    &:hover {
        height: 4em;
        transition: all .2s ease;
    }
    div {
        right: 2em;
        padding-right: .5em;
        position: absolute;
        opacity: 0;
        text-align: center;
    }
    &:hover div {
        opacity: 1;
        transition: all .08s ease;
    }
`;


class App extends Component {
    state = { menu: {}, aboutMe: {}}

    componentDidMount(){
        this.menu()
        this.aboutMe()
    }

    menu(){
        const menu = {}
        
        app_menu.map(v => Object.assign(menu, {
            [v.title] : false
        }))
        this.setState({ menu : menu })
    }
    aboutMe(){
        const aboutMeObj = {}

        app_aboutMe.map(v =>
            Object.assign(aboutMeObj, {
                [app_aboutMe.indexOf(v)] : {
                    "value": app_aboutMe.indexOf(v),
                    "open" :false
            }})
        )
        this.setState({ aboutMe : aboutMeObj })
    }

    postItHandler(v){
        const bool = this.state.menu[v]
        const menuObj = this.state.menu
        const aboutMeObj = this.state.aboutMe
        
        if(v ==="AboutMe"){
            if(bool === true){
                for(let key in aboutMeObj){
                    aboutMeObj[key]["value"] = parseInt(key)
                    aboutMeObj[key]["open"] = false
                }
            }else{ 
                for(let key in aboutMeObj){
                    aboutMeObj[key]["open"] = true
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
        aboutMeObj[num]["open"] = false

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
        return(
            <>
                {this.state.menu["AboutMe"] 
                    ? app_aboutMe.map((v, i) => 
                        this.state.aboutMe[i]["open"] 
                        ? <AboutMe 
                            close={this.postItClose.bind(this)}
                            order={this.postItReorder.bind(this)}
                            value={this.state.aboutMe[i]["value"]} 
                            tape={v.tape}
                            width={v.width}
                            color={v.color}
                            content={v.content}
                            key={i}
                            num={i}/>
                        : null)
                    : null
                }
                {this.state.menu["Contact"] ? <Contact/> : null}
                <Right>
                    <header>
                        <button>Home</button>
                    </header>
                    <div className="rightContents"><Projects/></div>
                </Right>
                <Left>
                    {/* <div className="index">
                        <IndexContent color={'#999'}>
                            <div>contents</div>
                        </IndexContent>
                    </div> */}
                    <div className="menu">
                        {app_menu.map(v =>
                            <MenuDiv
                                left={v.left}
                                leftText={v.leftText}
                                height={v.height}
                                margin={v.margin}
                                marginText={v.marginText}
                                width={v.width}
                                key={v.title}
                            > 
                                <button 
                                    className={this.state.menu[v.title] ? "postItAfter": "postIt"}
                                    style={{backgroundColor: v.color}}
                                    onClick={()=> this.postItHandler(v.title)} 
                                >
                                    {this.state.menu[v.title] 
                                        ? <div className="close">Close All</div>
                                        : <div className="open">{v.title}</div>
                                    }
                                </button>
                            </MenuDiv>
                        )}
                    </div>
                </Left>
            </>
        )
    }
}

export default App;
