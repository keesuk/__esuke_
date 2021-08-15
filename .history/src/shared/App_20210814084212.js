import { Component, useEffect } from "react";
import { Route, history } from "react-router-dom";

import Index from "../components/Sub/Index.jsx"
import Home from "../components/Main/Home.jsx"
import Menu from "../components/Sub/Menu.jsx"

import SubPage from "../pages/_SubPage"
import HomePage from "../pages/_HomePage";

import { portFolioContents } from "../_data/_Data.jsx";


class App extends Component {
    render() {
        return (<>
            <Route path="/">
                <Home/>
                <Menu/>
                <Index/>
            </Route>
            <Route exact path="/" component={HomePage}/>
            {Object.values(portFolioContents).map(v => 
                <Route 
                    component={() => {
                        useEffect(() => history.goBack(), []);
                        return v["componentR"];
                    }}
                    path={"/"+ v["title"]} 
                    key={v["title"]} 
                />
            )}
            <Route path="/" component={SubPage}/>
        </>)
    }
}

export default App;

