import { Component } from "react";
import { Route } from "react-router-dom";
import Index from "../components/Index"
import Home from "../components/Home"
import Menu from "../components/Menu"

import styled from "styled-components";
import Projects from "../pages/_Projects.jsx";

import { line_1, all_portFolio } from "../_data/_Functions.jsx";

const RightDiv = styled.div`
    margin-left: 30vw;
    border-left: ${line_1};
    position: fixed;
    z-index: 50;
    width: 70vw;
    overflow: auto;
    margin-top: 3.5em;
    height: 100%;
`;
const LeftDiv = styled.div`
    position: fixed;
    border-right: ${line_1};
    z-index: 0;
    width: 30vw;
    height: 100vh;
    background-color: #EEE; 
    overflow: hidden;
`;

class App extends Component {
    render() {
        return (
            <div>
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
                <LeftDiv/>
            </div>
        )
    }
}

export default App;
