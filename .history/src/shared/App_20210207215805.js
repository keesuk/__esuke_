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
    background-color: #FFF; 
    position: fixed;
    overflow: scroll;
    z-index: 2;
    top: 0;
    margin-top: 3.5%;
    height: 96.5%;
`;
const LeftDiv = styled.div`
    width: ${all_div["LWidth"]}%;
    left: 0;
    top: 0;
    background-color: #EEE;
    padding-top: 3.5%; 
    position: fixed;
    overflow: scroll;
    height: 100%;
`;

class App extends Component {
    render() {
        return (<>
            <header>
                <Route path="/">
                    <Home/>
                    <Menu/>
                    <Index/>
                </Route>
            </header>
            <RightDiv>
                <Route exact path="/" component={Projects}/>
                {all_portFolio.map(v => 
                <Route 
                    path={"/" + v["title"]} 
                    key={v["title"]} 
                    component={v["componentR"]}
                />)}
            </RightDiv>
            <LeftDiv>
                <Route path="/" component={Left}/>
            </LeftDiv>
        </>)
    }
}

export default App;
