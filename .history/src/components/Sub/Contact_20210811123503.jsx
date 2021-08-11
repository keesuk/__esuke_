import { useState } from "react";
import styled from "styled-components";

import theme from "../../css/_Theme.jsx";
import craft from "../../_data/img/craft.png"
import { CopyToClipboard } from 'react-copy-to-clipboard';


const width = `calc(325px * ${1.5})`
const height = `calc(-196px * ${1.5})`

const ProfileButton = styled.button`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: white;
    box-shadow: .5rem .5rem 1rem rgba(0, 0, 0, .5);
    width: ${width};
    height: ${height};;
    left: 16vw;
    transition: bottom .3s ease;
    position: absolute;
    z-index: 100000;
    bottom: ${({on}) => on === true 
        ? "0vw" 
        : `${height}`
    };

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
        color: white;
        font-size: 15px;
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
                            mail copied to <br/> 
                            clipboard
                        </div>
                    :   null
                }
                <img 
                    className="img"
                    alt="" 
                    src={hover === false 
                        ? prfFront 
                        : prfBack
                }/>
            </ProfileButton>
        </CopyToClipboard>
    )
}

export default Contact;