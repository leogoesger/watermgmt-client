import { AppBar, Card, Tab, Tabs } from "@material-ui/core/";
import * as React from "react";

import Economics from "./Economics";
import Evapotranspiration from "./Evapotranspiration";
import SoilMoisture from "./SoilMoisture";

interface IState {
    tabValue: number;
}

class WhatLTabs extends React.PureComponent<{}, IState> {
    constructor(props) {
        super(props);
        this.state = {
            tabValue: 0,
        };
    }

    handleChange(v: number) {
        this.setState({ tabValue: v });
    }

    renderTabItem() {
        switch (this.state.tabValue) {
            case 0:
                return <Economics />;
            case 1:
                return <SoilMoisture />;
            case 2:
                return <Evapotranspiration />;
            default:
                return <Economics />;
        }
    }

    render() {
        return (
            <Card style={{ marginTop: "20px" }}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.tabValue}
                        onChange={(_, v) => this.handleChange(v)}
                        fullWidth
                        indicatorColor="primary"
                    >
                        <Tab label="Economics" />
                        <Tab label="Soil moisture" />
                        <Tab label="Evapotranspiration" />
                    </Tabs>
                </AppBar>
                {this.renderTabItem()}
            </Card>
        );
    }
}

export default WhatLTabs;
