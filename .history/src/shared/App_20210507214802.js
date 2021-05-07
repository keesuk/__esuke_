import { Component } from "react";
import { Route } from "react-router-dom";

import Index from "../components/Index"
import Home from "../components/Home.js"
import Menu from "../components/Menu"
import Left from "../components/Left"

import HomeContent from "../pages/HomeContent.js";
import { all_portFolio  } from "../_data/_Data.jsx";

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
            <Route exact path="/" component={HomeContent}/>
            {all_portFolio.map(v => 
                <Route 
                    path={"/" + v["title"]} 
                    key={v["title"]} 
                    component={v["componentR"]}
                />
            )}
            <Route path="/" component={Left}/>
        </>)
    }
}

export default App;

