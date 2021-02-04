import { Component } from "react";
import Header from "../pages/Header"
import Left from "../pages/Left"
import Right from "../pages/Right"


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Left/>
                <Right/>
            </div>
        )
    }
}

export default App;
