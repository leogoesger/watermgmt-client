import * as React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.PureComponent {
    render() {
        return (
            <div style={{ position: "relative" }}>
                <img
                    width="100%"
                    style={{ minWidth: "1400px" }}
                    height="450px"
                    src="https://s3-us-west-1.amazonaws.com/funcflow/water_mgmt/header.jpg"
                    alt=""
                />
                <img
                    style={{ position: "absolute", left: 20, top: "20px" }}
                    height="100px"
                    src="https://s3-us-west-1.amazonaws.com/funcflow/resources/UC_ANR.png"
                    alt=""
                />
            </div>
        );
    }
}

export default Navbar;
