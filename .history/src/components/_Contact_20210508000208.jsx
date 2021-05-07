import { redF } from "../css/_Color.jsx";
import { lines } from "../css/_Line.jsx";

const Contact = () => {

    const allStytle = {
        // backgroundImage: `url(${paperTexture})` ,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        border: lines["line_1"],
        width: "500px",
        height: "700px",
        padding: "10px",
        float: "left",
        position: "absolute",
        zIndex: 100000,
    }
        
    return (
        <div style={allStytle}></div>
    );
}


export default Contact;