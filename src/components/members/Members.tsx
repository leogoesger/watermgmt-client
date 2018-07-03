import { Card, CardContent, Typography } from "@material-ui/core/";
import * as React from "react";

interface IMember {
    name: string;
    image: string;
    title: string;
    description: string;
}

interface IProps {
    members: IMember[];
}

const Members: React.SFC<IProps> = ({ members }) => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
            }}
        >
            {members.map(member => (
                <Card
                    key={member.name}
                    style={{ width: "28%", margin: "10px auto" }}
                >
                    <img
                        src={member.image}
                        alt={member.name}
                        style={{ width: "100%" }}
                    />
                    <CardContent>
                        <Typography
                            style={{ fontSize: "18px", fontWeight: "bold" }}
                        >
                            {member.name}
                        </Typography>
                        <Typography component="p">{member.title}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Members;
