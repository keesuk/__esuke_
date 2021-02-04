import { Component } from "react";
import { Route } from "react-router-dom";
import Header from "../pages/Header"
import Left from "../pages/Left"
import Right from "../pages/Right"


class App extends Component {
    render() {
        return (
            <div>
                <Route path="/:title" component={Header}/>
                <Left path="/:title"/>
                <Right path="/:title"/>
            </div>
        )
    }
}

export default App;
