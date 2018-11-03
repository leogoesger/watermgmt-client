import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SideBar from "./coverCrop/SideBar";
import HomeLayout from "./home/HomeLayout";
import { Login, Navbar, Signup } from "../containers";
import { Card } from "@material-ui/core/";

import How from "./coverCrop/how/How";
import What from "./coverCrop/what/What";
import WhatL from "./coverCrop/whatL/WhatL";
import Who from "./coverCrop/who/Who";
import Why from "./coverCrop/why/Why";

const App = () => (
    <Router>
        <div>
            <Navbar />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "100px auto",
                    width: "100%",
                    minWidth: "1400px",
                    position: "absolute",
                    top: "160px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        margin: "100px auto",
                        width: "1200px",
                    }}
                >
                    <Route path="*" component={SideBar} />
                    <div>
                        <Card style={{ width: "850px", padding: "26px" }}>
                            <Route exact path="/" component={Who} />
                            <Route path="/who-are-we" component={Who} />
                            <Route
                                path="/what-are-cover-crops"
                                component={What}
                            />
                            <Route
                                path="/why-are-we-studying"
                                component={Why}
                            />
                            <Route
                                path="/how-are-we-studying"
                                component={How}
                            />
                            <Route
                                path="/what-are-we-learning"
                                component={WhatL}
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </Router>
);

export default App;
