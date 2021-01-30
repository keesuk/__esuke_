import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme } from '@material-ui/core/styles';

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
