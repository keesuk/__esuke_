import { Component } from "react";
import { Route, HashRouter as Router } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';

import Index from "../components/Sub/Index.jsx"
import Home from "../components/Sub/Home.jsx"
import Menu from "../components/Sub/Menu.jsx"

import SubPage from "../pages/_SubPage"
import HomePage from "../pages/_HomePage";

import { portFolioContents } from "../_data/_Data.jsx";
import { ScrollToTop, GetScrollPosition } from "../_data/_Functions";
import { ThemeProvider } from "styled-components";
import theme from "../css/_Theme.jsx";
import media from "../css/_Media.jsx";



class App extends Component {
    state = { scrollPos : GetScrollPosition()}

    render() {
        smoothscroll.polyfill()

        return (
            <ThemeProvider theme={{...theme, ...media}}>
            <Router basename="/">
                <ScrollToTop/>
                <Route path="/">
                    <Home scrollPos={this.state.scrollPos}/>
                    <Menu scrollPos={this.state.scrollPos}/>
                    <Index/>
                </Route>
                <Route path="/" component={SubPage}/>
                <Route exact path="/" component={HomePage}/>
                {Object.values(portFolioContents).map(v => 
                    <Route 
                        path={"/"+v["title"]} 
                        key={v["title"]} 
                        component={v["componentR"]}
                    />
                )}
            </Router>
            </ThemeProvider>
        )
    }
}

export default App;

