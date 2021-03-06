import { Component } from "react";
import smoothscroll from 'smoothscroll-polyfill';
import styled from 'styled-components';
import Projects from './Projects';

import { line_1, rainbow, app_menu } from './_Functions.jsx';


class App extends Component {
    state = {
        menu: {}
    }

    componentDidMount(){
        const obj = {}
        app_menu.map(v =>
            Object.assign(obj, {[v.title] : false})
        )
        this.setState({menu : obj})
    }

    postItHandler(v){
        const bool = !this.state.menu[v]
        const obj = this.state.menu
        Object.assign(obj, {[v] : bool})
        this.setState({menu : obj})
    }

    render(){
        smoothscroll.polyfill()
        return(
            <>
                {app_menu.map(v => 
                    this.state.menu[v.title] 
                        ? v.component 
                        : null
                )}
                <Right>
                    <header>
                        <button>Home</button>
                    </header>
                    <div className="rightContents"><Projects/></div>
                </Right>
                <Left>
                    <div className="index">
                        <IndexContent color={'#999'}>
                            <div>contents</div>
                        </IndexContent>
                    </div>
                    <div className="menu">
                        {app_menu.map(v =>
                            <MenuDiv
                                left={v.left}
                                height={v.height}
                                margin={v.margin}
                                width={v.width}
                                key={v.title}
                            > 
                                <button 
                                    className={this.state.menu[v.title] ? "postItAfter": "postIt"}
                                    style={{backgroundColor: v.color}}
                                    onClick={()=> this.postItHandler(v.title)} 
                                >
                                    {this.state.menu[v.title] 
                                        ? null 
                                        : <div className="ment">{v.title}</div>
                                    }
                                </button>
                                <div className="close">Close All</div>
                            </MenuDiv>
                        )}
                    </div>
                </Left>
            </>
        )
    }
}


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
            font-size: 1.3em;
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
    width: 30vw;
    height: 100vh;
    top: 0;
    background-color: #EEE; 
    overflow: hidden;

    .index {
        margin-top: 3.6em;
        right: 0;
        float: right;
    }

    .menu {
        position: fixed;
        display: grid;
        grid-gap: 1rem;
        margin-left: -2em;
        bottom: 4em;
    }
`;
const MenuDiv = styled.div`
    button {
        padding-left: 2em;
        width: 11em;
        height: 2.5em;
        border: .1em solid black;
        box-shadow: .3em .3em black;
    }
    .ment {
        font-weight: 400;
        font-size: .9em;
        letter-spacing: -.05em;
        text-align: center;
        align-items: auto;
    }
    .close {
        position: absolute;
        color: white;
        margin-left: 6.5em;
        margin-top: -9em;
        font-size: .5em;
        font-weight: 600;
        transform: rotate(-90deg);
    }
    .postIt:hover {
        text-decoration-line: line-through;
        text-decoration-thickness: .15em;
        box-shadow: .4em .4em .4em #999;
    }
    .postIt:active {
        text-decoration-line: line-through;
        text-decoration-thickness: .15em;
        box-shadow: .2em .2em .2em #666;
    }
    .postItAfter {
        width: ${props => props.width};
        box-shadow: none;

        &:after {
            content: "";
            position: absolute;
            width: 2.7em;
            height: ${props => props.height};
            left: ${props => props.left};
            margin-top: ${props => props.margin};
            background-color: black;
        }
        &:before {
            content: "";
            position: absolute;
            left: ${props => props.left};
            margin-top: -1.3em;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 2.71em 2.71em 0 0;
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

export default App;
