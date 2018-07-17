import * as React from "react";
import { TextField, Button } from "@material-ui/core";

interface IProps {
    handleSubmit: (obj: { [index: string]: string }) => Promise<any>;

    history: {
        push: (path: string) => void;
        location: {
            pathname: string;
        };
    };
    isSignupForm: Boolean;
}

interface IStates {
    [index: string]: string;
}

class UserForm extends React.PureComponent<IProps, IStates> {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            verifyPassword: "",
            name: "",
        };
    }

    private onChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: string
    ) => {
        this.setState({ [field]: e.target.value });
    };

    private handleSubmit = async userInfo => {
        const { isSignupForm } = this.props;

        try {
            const { data } = await this.props.handleSubmit(userInfo);
            localStorage.setItem(
                "watermgmtJwt",
                isSignupForm ? data.signUp.jwt : data.login.jwt
            );
            this.props.history.push("/");
        } catch (e) {
            throw e;
        }
    };

    public render() {
        const { email, password, name, verifyPassword } = this.state;
        const { isSignupForm } = this.props;
        return (
            <div>
                {isSignupForm && (
                    <TextField
                        fullWidth
                        value={name}
                        label="Name"
                        onChange={e => this.onChange(e, "name")}
                    />
                )}
                <TextField
                    fullWidth
                    value={email}
                    label="email"
                    onChange={e => this.onChange(e, "email")}
                />
                <TextField
                    fullWidth
                    value={password}
                    label="password"
                    type="password"
                    onChange={e => this.onChange(e, "password")}
                />
                {isSignupForm && (
                    <TextField
                        fullWidth
                        label="password"
                        value={verifyPassword}
                        type="password"
                        onChange={e => this.onChange(e, "verifyPassword")}
                    />
                )}
                <Button
                    variant="flat"
                    onClick={() => this.handleSubmit(this.state)}
                >
                    Submit
                </Button>
            </div>
        );
    }
}

export default UserForm;
