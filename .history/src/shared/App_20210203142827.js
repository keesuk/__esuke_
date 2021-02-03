import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Left from "../pages/Left"
import Right from "../pages/Right"


class App extends Component {
    render() {
        return (<>
            <Route exact path="/" component={Left}/>
            <Switch>
            </Switch>
        </>)
    }
}

export default App;
