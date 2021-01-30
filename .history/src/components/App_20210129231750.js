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
            Object.assign(obj, {[v.title] : true})
        )
        this.setState({menu : obj})
    }

    postItHandler(v){
        const bool = !this.state.menu[v]
        this.setState({menu : {[v] : bool}})
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
                            <button 
                                className={this.state.menu[v.title] ? "postItAfter": "postIt"}
                                style={{backgroundColor: v.color}}
                                onClick={()=> this.postItHandler(v.title)} 
                                key={v.title}
                            >
                                {this.state.menu[v.title] ? null : <div>{v.title}</div>}
                            </button>
                        )}
                    </div>
                </Left>
            </>
        )
    }
}


export default App;
