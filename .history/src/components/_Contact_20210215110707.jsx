import { redF } from "../css/_Color.jsx";
import { lines } from "../css/_Line.jsx";

const Contact = () => {

    const allStytle = {
        // backgroundImage: `url(${paperTexture})` ,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxShadow: `.5em .5em ${redF(.5)}`,
        border: lines["line_1"],
        borderColor: redF(.5),
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