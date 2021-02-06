import { Component } from "react";
import { Route } from "react-router-dom";

import Index from "../components/Index"
import Home from "../components/Home"
import Menu from "../components/Menu"
import Left from "../components/Left"

import styled from "styled-components";
import Projects from "../pages/_Projects.jsx";

import { line_1, all_portFolio, app_Div } from "../_data/_Functions.jsx";

const RightDiv = styled.div`
    width: 70vw;
    margin-left: 30vw;
    z-index: 50;
    border-left: ${line_1};
    background-color: #FFF; 
    ${app_Div}
`;
const LeftDiv = styled.div`
    width: 30vw;
    z-index: 0;
    background-color: #EEE; 
    ${app_Div}
`;

class App extends Component {
    render() {
        return (<>
            <header>
                <Route path="/Home">
                    <Home/>
                    <Menu/>
                    <Route path="/:title" component={Index}/>
                </Route>
            </header>
            <RightDiv>
                <Route exact path="/Home" component={Projects}/>
                {all_portFolio.map(v => 
                <Route 
                    path={"/" + v["title"]} 
                    key={v["title"]} 
                    component={v["componentR"]}
                />)}
            </RightDiv>
            <LeftDiv>
                <Route path="/Home" component={Left}/>
            </LeftDiv>
        </>)
    }
}

export default App;
