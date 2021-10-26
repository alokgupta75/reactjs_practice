import React from "react";
import web from "../src/Image/index.png"
import Common from "./Common";

const Home = () => {
    return (
        <>
           <Common
           name="Grow Your Business With "
            imgsrc={web}
            visit="/contact"
            btname="Get Started"
             />
        </>
    )
};

export default Home;