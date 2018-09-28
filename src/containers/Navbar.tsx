import * as React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.PureComponent {
    render() {
        return (
            <div>
                <img
                    width="100%"
                    style={{ minWidth: "1400px" }}
                    height="450px"
                    src="https://s3-us-west-1.amazonaws.com/funcflow/water_mgmt/header.jpg"
                    alt=""
                />
            </div>
        );
    }
}

export default Navbar;
