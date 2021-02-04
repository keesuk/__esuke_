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
    margin-left: 30vw;
    width: 70vw;
    height: 100%;
    z-index: 50;
    border-left: ${line_1};
    overflow: hidden;
    margin-top: 3.5em;
`;
const LeftDiv = styled.div`
    position: fixed;
    width: 30vw;
    height: 100vh;
    z-index: 0;
    border-right: ${line_1};
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
