import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../pages/Header"
import Left from "../pages/Left"


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Header}/>
                <Left/>
            </div>
        )
    }
}

export default App;
