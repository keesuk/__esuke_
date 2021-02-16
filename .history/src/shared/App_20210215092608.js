import { Component } from "react";
import { Route } from "react-router-dom";

import Index from "../components/Index"
import Home from "../components/Home"
import Menu from "../components/Menu"
import Left from "../components/Left"

import styled from "styled-components";
import Projects from "../pages/_Projects.jsx";

import { line_1, all_portFolio, boardTexture, all_div, deepYellow } from "../_data/_Functions.jsx";


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
            <Route exact path="/" component={Projects}/>
            {all_portFolio.map(v => 
                <Route 
                    path={"/" + v["title"]} 
                    key={v["title"]} 
                    component={v["componentR"]}
                />
            )}
            <LeftDiv>
                <Route path="/" component={Left}/>
            </LeftDiv>
        </>)
    }
}

export default App;

