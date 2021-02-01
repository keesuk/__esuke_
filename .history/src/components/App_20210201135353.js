import { Component } from "react";
import smoothscroll from 'smoothscroll-polyfill';
import styled from 'styled-components';
import Projects from './Projects';

import { line_1, line_3, rainbow, app_menu } from './_Functions.jsx';


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
                        {app_menu.map((v, i) =>
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
