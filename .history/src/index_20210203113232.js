import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from 'client/Root';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme } from '@material-ui/core/styles';


createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: '"Noto Sans KR"'
    }
});

ReactDOM.render(<Root />, document.getElementById('root'));
reportWebVitals();
