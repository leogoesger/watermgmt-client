import { Card, Divider, List, ListItem, Typography } from "@material-ui/core/";
import * as React from "react";

interface IProps {
    match: {
        path: string;
    };
    history: {
        push: (path: string) => void;
        location: {
            pathname: string;
        };
    };
}

const SideBar: React.SFC<IProps> = ({ history, match }) => {
    const path = history.location.pathname.split("/")[2] || "who-are-we";
    return (
        <Card style={{ width: "250px", height: "254px" }}>
            <List component="nav" style={{ padding: "0px" }}>
                <ListItem
                    button
                    onClick={() => history.push(`${match.path}/who-are-we`)}
                >
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
                    onClick={() =>
                        history.push(`${match.path}/what-are-cover-crops`)
                    }
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
                    onClick={() =>
                        history.push(`${match.path}/why-are-we-studying`)
                    }
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
                    onClick={() =>
                        history.push(`${match.path}/how-are-we-studying`)
                    }
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
                    onClick={() =>
                        history.push(`${match.path}/what-are-we-learning`)
                    }
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
