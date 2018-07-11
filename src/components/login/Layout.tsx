import * as React from "react";
import { TextField, Button } from "@material-ui/core";

interface IProps {
    login: (
        obj: { variables: { email: string; password: string } }
    ) => Promise<any>;
}

interface IStates {
    email: string;
    password: string;
}

class Layout extends React.PureComponent<IProps, IStates> {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    private onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: e.target.value });
    };

    private onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: e.target.value });
    };

    private loginHandler = (email, password) => {
        this.props
            .login({
                variables: {
                    email,
                    password,
                },
            })
            .then(({ data }) =>
                localStorage.setItem("watermgmtJwt", data.login.jwt)
            );
    };

    render() {
        const { email, password } = this.state;
        return (
            <div>
                Login Page
                <TextField
                    fullWidth
                    value={email}
                    onChange={this.onChangeEmail}
                />
                <TextField
                    fullWidth
                    value={password}
                    onChange={this.onChangePassword}
                />
                <Button
                    variant="flat"
                    onClick={() => this.loginHandler(email, password)}
                >
                    Submit
                </Button>
            </div>
        );
    }
}

export default Layout;
