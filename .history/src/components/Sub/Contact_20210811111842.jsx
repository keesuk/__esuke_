import { useState } from "react";
import Draggable from "react-draggable"

import theme from "../../css/_Theme.jsx";
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
        bottom: "0vw",
        position: "absolute",
        zIndex: 100000,
    }

    const imgStyle = {
        display: "block",
        height: "auto",
        width: "100%",
    }

    const clipStyle = {
        width: "20px",
        height: "20px",
        backgroundColor: "black",
    }

    return (
        <>
            <div style={clipStyle}>
                mail copied to clipboard
            </div>
            <CopyToClipboard 
                text={mail}
                onCopy={() => setCopied(true)}
            >
                <button 
                    style={allStyle}
                    onClick={() => setHover(!hover)}
                >
                    <img 
                        style={imgStyle} 
                        alt="" 
                        src={hover === false ? prfFront : prfBack}
                    />
                </button>
            </CopyToClipboard>
        </>
    )
}

export default Contact;