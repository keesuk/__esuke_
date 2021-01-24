import Header from './Header'
import LeftHeader from './LeftHeader'
import smoothscroll from 'smoothscroll-polyfill';


function App() {
    smoothscroll.polyfill()

    return (
        <div
            style={{ cursor: 'url(img/load.png), auto'}} 
            className="App">
            <Header/>
            <LeftHeader/>
        </div>
    );
}

export default App;
