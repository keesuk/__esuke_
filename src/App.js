import React from "react"
import { Route, HashRouter as Router } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import smoothscroll from "smoothscroll-polyfill"

import Home from "./components/Home.js"
import Contact from "./components/Contact.js"

import ContentPage from "./pages/_ContentPage.js"
import FooterPage from "./pages/_FooterPage.js"
import HomePage from "./pages/_HomePage.js"

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
                    <Contact />
                </Route>
                <Route component={HomePage} exact path="/"/>
                <Route component={ContentPage} path="/"/>
                <Route component={FooterPage} path="/"/>
            </Router>
        </ThemeProvider>
    )
}

export default App