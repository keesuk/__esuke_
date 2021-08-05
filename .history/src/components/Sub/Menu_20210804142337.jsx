import { Component } from "react";
import styled from 'styled-components';

import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";

import { menuMenu, menuAboutMe } from '../../_data/_Data.jsx';
import theme from "../../css/_Theme.jsx";

const MenuDiv = styled.div`
    @media (max-width: 1900px){transform: scale(0.95, 0.95)};
    @media (max-width: 1750px){transform: scale(0.9, 0.9)};
    @media (max-width: 1400px){transform: scale(0.85, 0.85)};
    @media (max-width: 1150px){transform:scale(0.8, 0.8)}; 
    @media (max-width: 900px){transform: scale(0.75, 0.75)};
    @media (max-width: 750px){transform: scale(0.7, 0.7)};
    @media (max-width: 400px){transform: scale(0.65, 0.65)};
    
    transform-origin: bottom left;
    position: fixed;
    z-index: 1000;
    display: grid;
    grid-gap: 15px;
    margin-left: -30px;
    bottom: 3%;
`;
const MenuObj = styled.div`
    button {
        padding-left: 30px;
        width: 260px;
        height: 65px;
        border: ${({line})=> line};
        box-shadow: 5px 5px #000000;
        .open {
            font-weight: 400;
            font-size: 24px;
            width: 260px;
            letter-spacing: -1px;
            text-align: center;
            align-items: auto;
        }
        .close {
            position: absolute;
            color: #ffffff;
            z-index: 100;
            margin-left: ${({order}) => 
                order === 1 ? "101px" : 
                (order === 2 ? "15px" : null)};
            margin-top: ${({order}) => 
                order === 1 ? "-68px" : 
                (order === 2 ? "-150px" : null)
            };
            font-size: 13px;
            font-weight: 600;
            white-space: nowrap;
            transform: rotate(-90deg);
    }}
    .postIt {
        &:hover {
            text-decoration-line: line-through;
            text-decoration-thickness: 3.5px;
            box-shadow: 6px 6px 6px #999999;
        }
        &:active {
            text-decoration-line: line-through;
            text-decoration-thickness: 2px;
            box-shadow: 2px 2px 2px #666666;
    }}
    .postItAfter {
        width: ${({order}) => 
                order === 1 ? "102px" : 
                (order === 2 ? "16px" : null)
            };
        box-shadow: none;
        border-right: 0px;
        &:hover {
            box-shadow: -4px 3.5px 3.5px rgba(0, 0, 0, .5);
        }
        &:after {
            content: "";
            position: absolute;
            width: 68px;
            height: ${({order}) => 
                order === 1 ? "67px" : 
                (order === 2 ? "150px" : null)
            };
            left: ${({order}) => 
                order === 1 ? "134px" : 
                (order === 2 ? "48px" : null)
            };
            margin-top: ${({order}) => 
                order === 1 ? "-101px" : 
                (order === 2 ? "-184px" : null)
            };
            background-color: #000000;
        }
        &:hover:after {
            box-shadow: 0rem -.1rem .8rem rgba(0, 0, 0, .3);
        }
        &:before {
            content: "";
            position: absolute;
            left: ${({order}) => 
                order === 1 ? "134px" : 
                (order === 2 ? "48px" : null)
            };
            margin-top: -34px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 68px 68px 0 0;
            border-color: #000000 transparent transparent transparent;
    }}
`;

class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            menu: {}, 
            aboutMe: {},
            X: document.body.clientWidth-300,
            Y: 300
        }
        this.postItHandler = this.postItHandler.bind(this)
        this.postItClose = this.postItClose.bind(this)
        this.postItReorder = this.postItReorder.bind(this)
    }

    componentDidMount(){
        this._menu()
        this._aboutMe()
    }
    _menu(){
        const menuObj = {}
        
        menuMenu.map(v => Object.assign(menuObj, {
            [v.title] : false
        }))
        this.setState({ menu : menuObj })
    }
    _aboutMe(){
        const aboutMeObj = {}

        menuAboutMe.map(v => Object.assign(aboutMeObj, {
            [menuAboutMe.indexOf(v)] : {
                "zValue": menuAboutMe.indexOf(v),
                "bool" : false
        }}))
        this.setState({ aboutMe : aboutMeObj })
    }
    postItHandler(v){
        const bool = this.state.menu[v]
        const menuObj = this.state.menu
        const aboutMeObj = this.state.aboutMe
        
        if(v === "AboutMe"){
            if(bool === true){
                for(let key in aboutMeObj){
                    aboutMeObj[key]["zValue"] = parseInt(key)
                    aboutMeObj[key]["bool"] = false
            }}else{ 
                for(let key in aboutMeObj){
                    aboutMeObj[key]["bool"] = true    
        }}}
        menuObj[v] = !bool

        this.setState({
            menu : menuObj,
            aboutMe : aboutMeObj
        })
    }
    postItClose(num){
        const aboutMeObj = this.state.aboutMe
        aboutMeObj[num]["bool"] = false

        this.setState({ aboutMe : aboutMeObj })
    }
    postItReorder(num){
        const aboutMeObj = this.state.aboutMe
        const last = Object.keys(aboutMeObj).length-1

        for(let key in aboutMeObj) aboutMeObj[key]["zValue"]--

        aboutMeObj[num]["zValue"] = last
        this.setState({ aboutMe : aboutMeObj })
    }


    render(){
        const { menu, aboutMe, X, Y }  = this.state

        return(<>
            {menu["AboutMe"] 
                ? <> 
                    {menuAboutMe.map((v, i) => 
                        aboutMe[i]["bool"] 
                        ? <AboutMe 
                            X={X}
                            Y={Y}
                            close={this.postItClose}
                            order={this.postItReorder}
                            zValue={aboutMe[i]["zValue"]} 
                            img={v["img"]}
                            width={v["width"]}
                            color={v["color"]}
                            borColor={v["borColor"]}
                            content={v["content"]}
                            key={i}
                            num={i}/>
                        : null
                    )}
                    <div style={{
                        zIndex: "1000", 
                        right:0, 
                        top: 0, 
                        position: "absolute",
                        width: document.body.clientWidth-X, 
                        height: Y, 
                        borderRadius: Y,
                        border: "2px solid black",
                        backgroundColor: "rgba(0, 0, 0, 0.5)"
                    }}>
                        <div style={{
                            border: "2px solid black",
                            width: "50%",
                            height: "50%",
                            float: "left",
                            left: "50%",
                            borderRadius: "50%",
                        }}/>
                    </div>
                </>
                : null
            }
            {menu["Contact"] 
                ? <Contact/> 
                : null
            }
            <MenuDiv>
                {menuMenu.map(v =>
                    <MenuObj
                        key={v["title"]}
                        line={v["line"]}
                        order={v["order"]}
                    > 
                        <button 
                            onClick={()=> this.postItHandler(v["title"])}
                            className={menu[v["title"]] ? "postItAfter": "postIt"}
                            style={{backgroundColor: v["color"]}} 
                        >
                            {menu[v["title"]] 
                                ? <div className="close">Close All</div>
                                : <div className="open">{v["title"]}</div>
                            }
                        </button>
                    </MenuObj>
                )}
            </MenuDiv>
        </>)
    }
}

export default Menu;