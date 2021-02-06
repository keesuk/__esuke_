import { Component } from "react";
import { Route } from "react-router-dom";

import Index from "../components/Index"
import Home from "../components/Home"
import Menu from "../components/Menu"
import Left from "../components/Left"

import styled from "styled-components";
import Projects from "../pages/_Projects.jsx";

import { line_1, all_portFolio, boardTexture } from "../_data/_Functions.jsx";

const RightDiv = styled.div`
    width: 70vw;
    margin-left: 30vw;
    z-index: 50;
    border-left: ${line_1};
    background-color: #FFF; 
    padding-top: 9vh;
    position: fixed;
    overflow: scroll;
    height: 88vh;
`;
const FooterDiv = styled.div`
    width: 70vw;
    margin-left: 30vw;
    height: 3vh;
    background-image: url(${boardTexture});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
const LeftDiv = styled.div`
    width: 30vw;
    z-index: 0;
    background-color: #EEE;
    padding-top: 6.5vh; 
    position: fixed;
    overflow: scroll;
    height: 93.5vh;
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
            <FooterDiv/>
            <LeftDiv>
                <Route path="/" component={Left}/>
            </LeftDiv>
        </>)
    }
}

export default App;
