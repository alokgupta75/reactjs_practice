import React from "react";
import Common from "./Common";
import web from "../src/Image/hero-img.png"

const About =() =>{
    return (
        <>
        <Common name="Welcome to About Page Of"
            imgsrc={web}
            visit="/contact"
            btname="Contact Now"

         />
        </>
    )
};

export default About;