import { Colors } from "../css/_Color.jsx";
import { Lines } from "../css/_Line.jsx";

const Contact = () => {

    const allStytle = {
        backgroundImage: `url(${paperTexture})` ,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxShadow: `.5em .5em ${new Colors["redF"](.5)}`,
        border: Lines["line_1"],
        borderColor: new Colors["redF"](.5),
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