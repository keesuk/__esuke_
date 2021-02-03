import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../pages/Header"


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Header}/>
                <Switch>
                </Switch>
            </div>
        )
    }
}

export default App;
