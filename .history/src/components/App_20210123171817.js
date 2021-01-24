import Header from './Header'
import LeftHeader from './LeftHeader'
import smoothscroll from 'smoothscroll-polyfill';


function App() {
    smoothscroll.polyfill()

    return (
        <div className="App">
            <Header/>
            <LeftHeader/>
        </div>
    );
}

export default App;
