import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme } from '@material-ui/core/styles';

var scale = 'scale(1)';
document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
 document.body.style.msTransform =   scale;       // IE 9
 document.body.style.transform = scale;     // General
 
createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: '"Noto Sans KR"'
    }
});

ReactDOM.render(
        <App />,
    document.getElementById('root')
);

reportWebVitals();
