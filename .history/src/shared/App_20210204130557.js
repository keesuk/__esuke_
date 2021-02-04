import { Component } from "react";
import { Route } from "react-router-dom";
import Header from "../pages/Header"
import Left from "../pages/Left"
import Right from "../pages/Right"


class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={Header}/>
                <Route path="/" component={Right}/>
                <Route path="/" component={Left}/>
            </div>
        )
    }
}

export default App;
