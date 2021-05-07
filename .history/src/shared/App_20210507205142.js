import { Component } from "react";
import { textSizes  } from "../css/_Typo.jsx";
// import { Route } from "react-router-dom";

// import Index from "../components/Index"
// import Home from "../components/Home.js"
// import Menu from "../components/Menu"
// import Left from "../components/Left"

// import HomeContent from "../pages/HomeContent.js";
// import { all_portFolio  } from "../_data/_Data.jsx";

class App extends Component {
    render() {
        return (<>
            <A1>A1 TextA1 TextA1 TextA1 TextA1 TextA1 TextA1 TextA1 TextA1 TextA1 TextA1 TextA1 Text</A1>
            <A2>A2 TextA2 TextA2 TextA2 TextA2 TextA2 TextA2 TextA2 TextA2 TextA2 TextA2 TextA2 Text</A2>
            <A3>A3 TextA3 TextA3 TextA3 TextA3 TextA3 TextA3 TextA3 TextA3 TextA3 TextA3 TextA3 Text</A3>
            <A4>A4 TextA4 TextA4 TextA4 TextA4 TextA4 TextA4 TextA4 TextA4 TextA4 TextA4 TextA4 Text</A4>
            <A5>A5 TextA5 TextA5 TextA5 TextA5 TextA5 TextA5 TextA5 TextA5 TextA5 TextA5 TextA5 Text</A5>
            <A6>A6 TextA6 TextA6 TextA6 TextA6 TextA6 TextA6 TextA6 TextA6 TextA6 TextA6 TextA6 Text</A6>
            <A7>A7 TextA7 TextA7 TextA7 TextA7 TextA7 TextA7 TextA7 TextA7 TextA7 TextA7 TextA7 Text</A7>
            <A8>A8 TextA8 TextA8 TextA8 TextA8 TextA8 TextA8 TextA8 TextA8 TextA8 TextA8 TextA8 Text</A8>
            <A9>A9 TextA9 TextA9 TextA9 TextA9 TextA9 TextA9 TextA9 TextA9 TextA9 TextA9 TextA9 Text</A9>
            <A10>A10 TextA10 TextA10 TextA10 TextA10 TextA10 TextA10 TextA10 TextA10 TextA10 TextA10 TextA10 Text</A10>
            <A11>A11 TextA11 TextA11 TextA11 TextA11 TextA11 TextA11 TextA11 TextA11 TextA11 TextA11 TextA11 Text</A11>
            {/* <header>
                <Route path="/">
                    <Home/>
                    <Menu/>
                    <Index/>
                </Route>
            </header>
            <Route exact path="/" component={HomeContent}/>
            {all_portFolio.map(v => 
                <Route 
                    path={"/" + v["title"]} 
                    key={v["title"]} 
                    component={v["componentR"]}
                />
            )}
            <Route path="/" component={Left}/> */}
        </>)
    }
}

export default App;

