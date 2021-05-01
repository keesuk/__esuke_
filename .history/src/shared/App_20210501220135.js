import { Component } from "react";
import styled from "styled-components";
import { textSizes  } from "../css/_Theme.jsx";
// import { Route } from "react-router-dom";

// import Index from "../components/Index"
// import Home from "../components/Home.js"
// import Menu from "../components/Menu"
// import Left from "../components/Left"

// import HomeContent from "../pages/HomeContent.js";
// import { all_portFolio  } from "../_data/_Data.jsx";

const A1 = styled.div`
    font-size: ${textSizes["A1"]}
`;

class App extends Component {
    render() {
        return (<>
            <A1>A1 TextA1 TextA1 TextA1 TextA1 TextA1 Text</A1>
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

