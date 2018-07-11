import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./coverCrop/Layout";
import HomeLayout from "./home/HomeLayout";
import Login from "../containers/Login";

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={HomeLayout} />
            <Route path="/cover-crops" component={Layout} />
            <Route path="/login" component={Login} />
        </div>
    </Router>
);

export default App;
