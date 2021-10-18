import React from "react"
import { useScrollYPosition } from "react-use-scroll-position"
import { Route, HashRouter as Router } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import smoothscroll from "smoothscroll-polyfill"

import Home from "./components/Home.js"
import Menu from "./components/Menu.js"

import ContentPage from "./pages/_ContentPage.js"
import HomePage from "./pages/_HomePage.js"

import { portFolioContents } from "./_data/_Data.jsx"
import { ScrollToTop } from "./_data/_Functions"
import theme from "./css/_Theme.jsx"
import media from "./css/_Media.jsx"
import "./app.css"


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
                </Route>
                <Route component={HomePage} exact path="/"/>
                <Route path="/">
                    {portFolioContents.map((v, i) => 
                        <ContentPage
                            content={v}
                            key={i}
                        />
                    )}
                </Route>
            </Router>
        </ThemeProvider>
    )
}

export default App

