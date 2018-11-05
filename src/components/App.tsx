import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SideBar from "./coverCrop/SideBar";
import { Navbar } from "../containers";
import { Card } from "@material-ui/core/";

import How from "./coverCrop/how/How";
import What from "./coverCrop/what/What";
import WhatL from "./coverCrop/whatL/WhatL";
import Who from "./coverCrop/who/Who";
import Why from "./coverCrop/why/Why";
import Footer from "./footer/Footer";

const App = () => (
    <Router>
        <div
            style={{
                position: "relative",
                minWidth: "1400px",
            }}
        >
            <Navbar />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                    minWidth: "1400px",
                    top: "160px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        margin: "-140px auto 0px auto",
                        width: "1200px",
                        zIndex: 9,
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
            <Footer />
        </div>
    </Router>
);

export default App;
