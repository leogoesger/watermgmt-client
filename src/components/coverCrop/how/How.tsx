import {
    AppBar,
    Card,
    Divider,
    Tab,
    Tabs,
    Typography,
} from "@material-ui/core/";
import * as React from "react";

import HowEcon from "./HowEcon";
import HowHydro from "./HowHydro";

interface IState {
    tabValue: number;
}

class How extends React.PureComponent<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            tabValue: 0,
        };
    }

    public handleChange(v: number) {
        this.setState({ tabValue: v });
    }

    public render() {
        return (
            <div>
                <Typography variant="title">
                    How are we studying them?
                </Typography>
                <Divider style={{ marginBottom: "16px" }} />
                <Typography>
                    Our research uses mixed-methods to study the multiple
                    factors at play in cover crop adoption.
                </Typography>
                <Card style={{ marginTop: "20px" }}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={this.state.tabValue}
                            onChange={(_, v) => this.handleChange(v)}
                            fullWidth
                            indicatorColor="primary"
                        >
                            <Tab label="Hydrology" />
                            <Tab label="Economy" />
                        </Tabs>
                    </AppBar>
                    {this.state.tabValue === 0 ? <HowHydro /> : <HowEcon />}
                </Card>
            </div>
        );
    }
}

export default How;
