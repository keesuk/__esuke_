import { useState } from "react";
import Draggable from "react-draggable"

import theme from "../../css/_Theme.jsx";
import craft from "../../_data/img/craft.png"
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = ({prfFront, prfBack, mail}) => {

    const [hover, setHover] = useState(false)
    const [copied, setCopied] = useState(false)

    const allStyle = {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "white",
        boxShadow: `.5rem .5rem 1rem rgba(0, 0, 0, .5)`,
        width: "calc(325px *1.5)",
        height: "calc(196px *1.5)",
        left: "16vw",
        bottom: "-30vw",
        transitionDelay: ".15s",
        transition: "bottom .04s",
        position: "absolute",
        zIndex: "100000",
    }

    const imgStyle = {
        display: "block",
        height: "auto",
        width: "100%",
    }

    const clipStyle = {
        width: "130px",
        height: "80px",
        position: "absolute",
        padding: "0px 10px",
        right: "10px",
        top: "10px",
        backgroundImage: `url("${craft}")`,
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    const clipTextStyle = {
        color: "white",
        fontSize: "15px",
        textAlign: "center",
        display: "inline-block",
        verticalAlign: "middle",
    }

    return (
        <CopyToClipboard 
            text={mail}
            onCopy={() => setCopied(true)}
        >
            <button 
                style={allStyle}
                onClick={() => setHover(!hover)}
            >
                {copied === true 
                    ?   <div style={clipStyle}>
                            <div style={clipTextStyle}>
                                mail copied to <br/> 
                                clipboard
                            </div>
                        </div>
                    :   null
                }
                <img 
                    style={imgStyle} 
                    alt="" 
                    src={hover === false 
                        ? prfFront 
                        : prfBack
                    }
                />
            </button>
        </CopyToClipboard>
    )
}

export default Contact;