import React from "react"
import { Route, HashRouter as Router } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import smoothscroll from "smoothscroll-polyfill"

import Home from "./components/Home.js"
import Menu from "./components/Menu.js"

import ContentPage from "./pages/_ContentPage.js"
import FooterPage from "./pages/_FooterPage.js"
import HomePage from "./pages/_HomePage.js"

import { portFolioContents } from "./_data/_Data.jsx"
import { ScrollToTop } from "./_data/_Functions"
import theme from "./css/_Theme.jsx"
import media from "./css/_Media.jsx"
import "./app.css"


const App = () => {
    smoothscroll.polyfill()

    return (
        <ThemeProvider theme={{...theme, ...media}}>
            <Router basename="/">
                <ScrollToTop/>
                <Route path="/">
                    <Home />
                    <Menu />
                </Route>
                <Route component={HomePage} exact path="/"/>
                <Route path="/"/>
                    {portFolioContents.map((v) => 
                        <ContentPage
                            key={v.title}
                            content={v}
                        />
                    )}
                <Route component={FooterPage} path="/"/>
            </Router>
        </ThemeProvider>
    )
}

export default App