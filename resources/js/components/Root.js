import React from "react";
import ReactDOM from "react-dom";
import Body from "./Body/Body";
import Foot from "./Foot/Foot";
import Head from "./Head/Head";

function Root() {
    return (
        <div className="container">
            <Head />
            <Body />
            <Foot />
        </div>
    );
}

export default Root;

if (document.getElementById("root")) {
    ReactDOM.render(<Root />, document.getElementById("root"));
}
