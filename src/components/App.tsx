import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./coverCrop/Layout";
import HomeLayout from "./home/HomeLayout";
import { Login, Navbar, Signup } from "../containers";

const App = () => (
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={HomeLayout} />
            <Route path="/cover-crops" component={Layout} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
        </div>
    </Router>
);

export default App;
