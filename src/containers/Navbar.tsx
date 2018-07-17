import * as React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.PureComponent {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/cover-crops">Cover Crops</Link>
            </div>
        );
    }
}

export default Navbar;
