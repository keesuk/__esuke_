import { useState } from "react";
import styled from "styled-components";

import theme from "../../css/_Theme.jsx";
import craft from "../../_data/img/craft.png"
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ProfileButton = styled.button`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: white;
    box-shadow: .5rem .5rem 1rem rgba(0, 0, 0, .5);
    width: calc(325px *1.5);
    height: calc(196px *1.5);
    left: 16vw;
    bottom: ${({on}) => on === true 
        ? "0vw" 
        : "calc(-196px *1.5)"
    };
    transition: bottom .3s ease;
    position: absolute;
    z-index: 100000;

    .img {
        display: block;
        height: auto;
        width: 100%;
    }

    .clip {
        position: absolute;
        padding: 20px;
        right: 10px;
        top: 10px;
        background-image: url(${craft});
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;
    }

    .clipText {
        color: white;
        font-size: 15px;
        margin: auto;
    }
`;

const Contact = ({prfFront, prfBack, mail, on}) => {

    const [hover, setHover] = useState(false)
    const [copied, setCopied] = useState(false)

    return (
        <CopyToClipboard 
            text={mail}
            onCopy={() => setCopied(true)}
        >
            <ProfileButton
                on={on}
                onClick={() => setHover(!hover)}
            >
                {copied === true 
                    ?   <div className="clip">
                            <div className="clipText">
                                mail copied to <br/> 
                                clipboard
                            </div>
                        </div>
                    :   null
                }
                <img 
                    className="img"
                    alt="" 
                    src={hover === false 
                        ? prfFront 
                        : prfBack
                    }
                />
            </ProfileButton>
        </CopyToClipboard>
    )
}

export default Contact;