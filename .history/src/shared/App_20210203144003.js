import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home"


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Switch>
                </Switch>
            </div>
        )
    }
}

export default App;
