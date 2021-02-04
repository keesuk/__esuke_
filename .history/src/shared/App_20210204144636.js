import { Component } from "react";
import { Route } from "react-router-dom";
import Index from "../components/Index"
import Home from "../components/Home"
import Menu from "../components/Menu"
import Left from "../pages/Left"
import Right from "../pages/Right"


class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <Route path="/">
                        <Home/>
                        <Menu/>
                        <Index/>
                    </Route>
                </header>
                <Right/>
                <Left/>
            </div>
        )
    }
}

export default App;
