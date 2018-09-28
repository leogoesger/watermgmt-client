import * as React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.PureComponent {
    render() {
        return (
            <div>
                <img
                    width="100%"
                    height="450px"
                    src="https://s3-us-west-1.amazonaws.com/funcflow/water_mgmt/header.jpg"
                    alt=""
                />
                {/* <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/cover-crops">Cover Crops</Link> */}
            </div>
        );
    }
}

export default Navbar;
