import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./coverCrop/Layout";
import HomeLayout from "./home/HomeLayout";

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={HomeLayout} />
            <Route path="/cover-crops" component={Layout} />
        </div>
    </Router>
);

export default App;
