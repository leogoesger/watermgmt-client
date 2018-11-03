import { Card, Divider, List, ListItem, Typography } from "@material-ui/core/";
import * as React from "react";

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

const SideBar: React.SFC<IProps> = ({ history, match }) => {
    const path = "who-are-we" as any;
    return (
        <Card style={{ width: "250px", height: "254px" }}>
            <List component="nav" style={{ padding: "0px" }}>
                <ListItem button onClick={() => history.push(`/who-are-we`)}>
                    <Typography
                        style={
                            path === "who-are-we"
                                ? { fontWeight: "bold" }
                                : undefined
                        }
                    >
                        Who are we?
                    </Typography>
                </ListItem>
                <Divider />

                <ListItem
                    button
                    onClick={() => history.push(`/what-are-cover-crops`)}
                >
                    <Typography
                        style={
                            path === "what-are-cover-crops"
                                ? { fontWeight: "bold" }
                                : undefined
                        }
                    >
                        What are cover crops?
                    </Typography>
                </ListItem>
                <Divider />

                <ListItem
                    button
                    onClick={() => history.push(`/why-are-we-studying`)}
                >
                    <Typography
                        style={
                            path === "why-are-we-studying"
                                ? { fontWeight: "bold" }
                                : undefined
                        }
                    >
                        Why are we studying?
                    </Typography>
                </ListItem>
                <Divider />

                <ListItem
                    button
                    onClick={() => history.push(`/how-are-we-studying`)}
                >
                    <Typography
                        style={
                            path === "how-are-we-studying"
                                ? { fontWeight: "bold" }
                                : undefined
                        }
                    >
                        How are we studying?
                    </Typography>
                </ListItem>
                <Divider />

                <ListItem
                    button
                    onClick={() => history.push(`/what-are-we-learning`)}
                >
                    <Typography
                        style={
                            path === "what-are-we-learning"
                                ? { fontWeight: "bold" }
                                : undefined
                        }
                    >
                        What are we learning?
                    </Typography>
                </ListItem>
            </List>
        </Card>
    );
};

export default SideBar;
