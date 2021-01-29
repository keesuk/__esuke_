import { Component } from "react";
import smoothscroll from 'smoothscroll-polyfill';
import styled from 'styled-components';
import { colorList, randomize, line_1 } from './_Functions.jsx';
import Projects from './Projects';
import Contact from './Contact';
import AboutMe from './AboutMe';

const Right = styled.div`
    margin-left: 30vw;
    top: 0;
`;
const TopHeaderBox = styled.header`
    display: flex; 
    position: fixed;
    z-index: 100;
    border-left: ${line_1};
    border-bottom: ${line_1};
    background-color: white;
    width: 70vw;
    height: 3.5em;

    &:after { 
        position: absolute;
        background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet);
        height: 2em;
        width: 10em;
        visibility: hidden;
        display: block;
    }
    &:hover:after { 
        visibility: visible;
    }
`;
const TopButton = styled.button`
    font-size: 1.3em;
    font-weight: 500;
    width: 100%;
    text-align: center;
    letter-spacing: -.01em;
`;
const RightContents = styled.div`
    border-left: ${line_1};
    margin-top: 3.5em;
    position: fixed;
    z-index: 50;
    width: 66vw;
    overflow: auto;
    padding-left: 2vw;
    padding-right: 2vw;
    height: 100%;
`;
const Left = styled.div`
    position: fixed;
    width: 30vw;
    height: 100vh;
    top: 0;
    background-color: #EEE; 
    overflow: hidden;
`;
const Index = styled.div`
    margin-top: 3.6em;
    right: 0;
    float: right;
`;
const IndexContent = styled.div`
    width: 2em;
    height: 2em;
    background-color: ${props => props.color};
    
    &:hover {
        height: 4em;
        transition: all .2s ease;
    }
    .text {
        right: 2em;
        padding-right: .5em;
        position: absolute;
        opacity: 0;
        text-align: center;
    }
    &:hover .text {
        opacity: 1;
        transition: all .08s ease;
    }
`;
const Menu = styled.div`
    position: fixed;
    bottom: 5em;
    margin-left: -2em;

    .postIt {
        font-weight: 400;
        letter-spacing: -.05em;
        text-align: center;
        width: 10em;
        padding-top: .7em;
        padding-bottom: .7em;
        padding-left: 2em;
        margin-top: 1.5em;
        border: .09em solid black;
        box-shadow: .3em .3em black;
        
        &:hover {
            text-decoration-line: line-through;
            text-decoration-thickness: .15em;
            text-decoration-color: black;
            box-shadow: .6em .6em .6em grey;
            transition: all .02s ease;
        }
    }
`;

class App extends Component {
    state = {
        hoverColor: null
    }

    Hover(){
        this.setState({hoverColor: randomize(colorList)})
    }

    render(){
        smoothscroll.polyfill()
        const hoverColor = this.state.hoverColor

        return(
            <div>
                {/* <AboutMe/> */}
                <Right>
                    <TopHeaderBox
                        hoverColor={hoverColor}
                        onMouseOver={() => this.Hover()}
                    >
                        <TopButton>
                            Home
                        </TopButton>
                    </TopHeaderBox>
                    <RightContents>
                        {Projects()}
                        {Contact()}
                    </RightContents>
                </Right>
                <Left>
                    <Index>
                        <IndexContent color={'#999'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={'#555'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={'#333'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={'#444'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={'#999'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={'#666'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={'#888'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={'#555'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={'#333'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                        <IndexContent color={'#777'}>
                            <span className='text'>contents</span>
                        </IndexContent>
                    </Index>
                    <Menu>
                        <div 
                            className="postIt"
                            style={{backgroundColor: "#ffff22"}}
                        >
                            About Me
                        </div>
                        <div 
                            className="postIt"
                            style={{backgroundColor: "hotpink"}}
                        >
                            Contact
                        </div>
                    </Menu>
                </Left>
            </div>
        )
    }
}
export default App;
