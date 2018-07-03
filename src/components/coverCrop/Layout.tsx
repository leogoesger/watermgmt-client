import { Card } from "@material-ui/core/";
import * as React from "react";
import { Route } from "react-router-dom";

import How from "./How";
import SideBar from "./SideBar";
import What from "./What";
import WhatL from "./WhatL";
import Who from "./Who";
import Why from "./Why";

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
                width: "1200px",
            }}
        >
            <SideBar match={props.match} history={props.history} />
            <div>
                <Card style={{ width: "850px", padding: "26px" }}>
                    <Route exact path="/cover-crops/" component={Who} />
                    <Route path="/cover-crops/who-are-we" component={Who} />
                    <Route
                        path="/cover-crops/what-are-cover-crops"
                        component={What}
                    />
                    <Route
                        path="/cover-crops/why-are-we-studying"
                        component={Why}
                    />
                    <Route
                        path="/cover-crops/how-are-we-studying"
                        component={How}
                    />
                    <Route
                        path="/cover-crops/what-are-we-learning"
                        component={WhatL}
                    />
                </Card>
            </div>
        </div>
    );
};

export default Layout;
