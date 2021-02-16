import { Component } from "react";
import { Route } from "react-router-dom";

import Index from "../components/Index"
import Home from "../components/Home"
import Menu from "../components/Menu"
import Left from "../components/Left"

import styled from "styled-components";
import Projects from "../pages/_Projects.jsx";

import { line_1, all_portFolio, boardTexture, all_div, deepYellow } from "../_data/_Functions.jsx";

const RightDiv = styled.div`
    width: ${all_div["RWidth"]}%;
    left: ${all_div["LWidth"]}%;
    border-left: ${line_1};
    top: 3rem;
    bottom: 0;
    background-color: #FFF; 
    position: fixed;
    overflow: auto;
    z-index: 2;
`;
const LeftDiv = styled.div`
    width: ${all_div["LWidth"]}%;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #EEE;
    padding-top: 3rem; 
    position: fixed;
    overflow: auto;
    z-index: 0;
`;

class App extends Component {
    state = { scroll: false }

    reset() {this.setState(prev => ({ scroll : !prev.scroll}))}

    render() {
        console.log(this.state.scroll)
        return (<>
            <header>
                <Route path="/">
                    <Home/>
                    <Menu/>
                    <Index/>
                </Route>
            </header>
            <RightDiv onScroll={() => this.reset()}>
                <Route exact path="/" component={Projects}/>
                {all_portFolio.map(v => {
                    const CompR = v["componentR"]
                    return (
                        <Route 
                            path={"/" + v["title"]} 
                            key={v["title"]} 
                            component={() => <CompR scroll={this.state.scroll}/>}
                        />
                )})}
            </RightDiv>
            <LeftDiv>
                <Route path="/" component={Left}/>
            </LeftDiv>
        </>)
    }
}

export default App;

