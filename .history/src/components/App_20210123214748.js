import Header from './Header'
import LeftHeader from './LeftHeader'
import smoothscroll from 'smoothscroll-polyfill';
import Cursor from './Cursor';


function App() {
    smoothscroll.polyfill()

    return (
        <div
            className="App">
            <Header/>
            <LeftHeader/>
        </div>
    );
}

export default App;
