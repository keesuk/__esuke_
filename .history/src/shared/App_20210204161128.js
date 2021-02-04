import { Component } from "react";
import { Route } from "react-router-dom";

import Index from "../components/Index"
import Home from "../components/Home"
import Menu from "../components/Menu"

import styled from "styled-components";
import Projects from "../pages/_Projects.jsx";

import { line_1, all_portFolio } from "../_data/_Functions.jsx";

const RightDiv = styled.div`
    position: fixed;
    overflow: scroll;
    height: 98%;
    width: 70vw;
    margin-left: 30vw;
    z-index: 50;
    padding-top: 10em;
    border-left: ${line_1};
    background-color: #FFF; 
`;
const LeftDiv = styled.div`
    position: fixed;
    overflow: scroll;
    height: 100vh;
    width: 30vw;
    z-index: 0;
    background-color: #EEE; 
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
                    component={v["component"]}
                />)}
            </RightDiv>
            <LeftDiv>
            </LeftDiv>
        </>)
    }
}

export default App;
