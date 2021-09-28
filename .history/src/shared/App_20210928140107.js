import React from "react";
import { useScrollYPosition } from "react-use-scroll-position";
import { Route, HashRouter as Router } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";

import Index from "../components/Sub/Index.jsx";
import Home from "../components/Sub/Home.jsx";
import Menu from "../components/Sub/Menu.jsx";

import HomePage from "../pages/_HomePage";
import SubPage from "../pages/_SubPage";
import ContentPage from "../pages/_ContentPage";

import { portFolioContents } from "../_data/_Data.jsx";
import { ScrollToTop } from "../_data/_Functions";
import { ThemeProvider } from "styled-components";
import theme from "../css/_Theme.jsx";
import media from "../css/_Media.jsx";



const App = () => {
    const scroll = useScrollYPosition()
    smoothscroll.polyfill()

    return (
        <ThemeProvider theme={{...theme, ...media}}>
            <Router basename="/">
                <ScrollToTop/>
                <Route path="/">
                    <Home scroll={scroll}/>
                    <Menu scroll={scroll}/>
                    <Index/>
                </Route>
                <Route component={SubPage} path="/"/>
                <Route component={HomePage} exact path="/"/>
                {portFolioContents.map(v => 
                    <Route 
                        component={ContentPage(v.component, v.name, v.category)}
                        path={"/" + v.name} 
                        key={v.name} 
                    />
                )}
            </Router>
        </ThemeProvider>
    );
};

export default App;

