import { Component } from "react";
import { Route } from "react-router-dom";


class App extends Component {
    render() {
        return (<>
            <header>
                <Route path="/"/>
            </header>
            <Route exact path="/" component={}/>
            {all_portFolio.map(v => 
            <Route 
                path={"/" + v["title"]} 
                key={v["title"]} 
                component={v[""]}
            />)}
            <Route path="/" component={}/>
        </>)
    }
}

export default App;

