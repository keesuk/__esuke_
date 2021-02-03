import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Left from "../pages/Left"


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Left}/>
                <Switch>
                </Switch>
            </div>
        );
    }
}

export default App;
