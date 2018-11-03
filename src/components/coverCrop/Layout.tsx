import { Card } from "@material-ui/core/";
import * as React from "react";
import { Route } from "react-router-dom";

import How from "./how/How";
import SideBar from "./SideBar";
import What from "./what/What";
import WhatL from "./whatL/WhatL";
import Who from "./who/Who";
import Why from "./why/Why";

interface IProps {
    history: {
        push: (path: string) => void;
        location: {
            pathname: string;
        };
    };
    match: {
        path: string;
    };
}

const Layout: React.SFC<IProps> = props => {
    return (
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
                <SideBar match={props.match} history={props.history} />
                <div>
                    <Card style={{ width: "850px", padding: "26px" }}>
                        <Route exact path="/" component={Who} />
                        <Route path="/who-are-we" component={Who} />
                        <Route path="/what-are-cover-crops" component={What} />
                        <Route path="/why-are-we-studying" component={Why} />
                        <Route path="/how-are-we-studying" component={How} />
                        <Route path="/what-are-we-learning" component={WhatL} />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Layout;
