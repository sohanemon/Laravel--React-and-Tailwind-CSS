import React from "react";
import ReactDOM from "react-dom";

function Root() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body text-7xl">
                            I'm an example component!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Root;

if (document.getElementById("root")) {
    ReactDOM.render(<Root />, document.getElementById("root"));
}
