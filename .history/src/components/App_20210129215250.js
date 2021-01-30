import { Component } from "react";
import smoothscroll from 'smoothscroll-polyfill';
import styled from 'styled-components';
import Projects from './Projects';
import { 
    line_1,
    rainbow, 
    app_menu } from './_Functions.jsx';

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
    
        button {
            padding-left: 2em;
            width: 11em;
            height: 2.5em;
            border: .1em solid black;
            box-shadow: .3em .3em black;

            div {
                font-weight: 400;
                font-size: .9em;
                letter-spacing: -.05em;
                text-align: center;
                align-items: auto;
            }
        }
        .postIt:hover {
            text-decoration-line: line-through;
            text-decoration-thickness: .15em;
            box-shadow: .6em .6em .6em #999;
        }
        .postIt:active {
            text-decoration-line: line-through;
            text-decoration-thickness: .15em;
            box-shadow: .2em .2em .2em #666;
        }
        .postItAfter {
            width: 5em;
            box-shadow: .2em .2em .2em #666;
    
            &:after {
                content: "";
                position: absolute;
                width: 2.5em;
                height: 5em;
                background-color: black;
                left: 5em;
            }
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
    state = {
        menu: {}
    }

    componentDidMount(){
        const obj = {}

        app_menu.map(v =>
            Object.assign(obj, {[v.id] : true})
        )
        this.setState({menu : obj})
    }

    postItHandler(i){
        const bool = !this.state.menu[i]
        this.setState({menu : {[i] : bool}})
    }

    render(){
        smoothscroll.polyfill()
        return(
            <>
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
                        {app_menu.map((v, i) => 
                            <button 
                                className={this.state.menu[i] ? "postItAfter": "postIt"}
                                style={{backgroundColor: v.color}}
                                onClick={()=> this.postItHandler(i)} 
                                key={v.title}
                            >
                                {this.state.menu[i] ? null
                                    : <div>{v.title}</div>
                                }
                            </button>
                        )}
                    </div>
                </Left>
            </>
        )
    }
}
export default App;
