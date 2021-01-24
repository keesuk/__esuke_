import Header from './Header'
import LeftHeader from './LeftHeader'
import smoothscroll from 'smoothscroll-polyfill';
import load from '../img/load.svg'


function App() {
    smoothscroll.polyfill()

    return (
        <div
            style={{ cursor: `url(${load}),2 2 auto`}} 
            className="App">
            <Header/>
            <LeftHeader/>
        </div>
    );
}

export default App;
