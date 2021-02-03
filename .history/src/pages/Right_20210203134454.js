import { Component } from "react";
import { Route } from 'react-router-dom';

import styled from 'styled-components';

import { line_1, line_3, rainbow, app_menu, app_aboutMe, all_portFolio, findObject } from '../_data/_Functions.jsx';


const RightDiv = styled.div`
    margin-left: 30vw;
    top: 0;

    header {
        display: flex;  
        position: fixed;
        z-index: 100;
        border-left: ${line_1};
        border-bottom: ${line_1};
        background-color: white;
        width: 70vw;
        height: 3.5em;

        button {
            font-size: 1.5em;
            font-weight: 500;
            width: 100%;
            text-align: center;
            letter-spacing: -.01em;
        }
        button:after { 
            content: "";
            position: absolute;
            width: 30%;
            height: .12em;
            left: 35%;
            right: 35%;
            top: 50%;
            bottom: 50%;
            visibility: hidden;
            background: ${rainbow};
        }
        button:hover:after { 
            visibility: visible;
        }
    }

    .rightContents {
        border-left: ${line_1};
        position: fixed;
        z-index: 50;
        width: 70vw;
        overflow: auto;
        margin-top: 3.5em;
        height: 100%;
    }
`;


class Right extends Component {
    render(){

        return(
            <RightDiv>
                <header>
                    <button>
                        Home
                    </button>
                </header>
                <div className="rightContents">
                </div>
            </RightDiv>
        )
    }
}

export default Right;
