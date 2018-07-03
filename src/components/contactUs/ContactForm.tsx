import { Button, TextField } from "@material-ui/core/";
import * as React from "react";

interface IStates {
    email: string;
    message: string;
    name: string;
}
interface IProps {
    onSubmit: () => void;
    updateDialogStatus: () => void;
}

class ContactForm extends React.PureComponent<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            email: "",
            message: "",
            name: "",
        };
    }

    public handleChange(field: string, e: any) {
        this.setState({ [field]: e.target.value } as IStates);
    }

    public render() {
        return (
            <div>
                <TextField
                    id="name"
                    label="Name"
                    value={this.state.name}
                    onChange={e => this.handleChange("name", e)}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    id="email"
                    label="Email"
                    value={this.state.email}
                    onChange={e => this.handleChange("email", e)}
                    margin="normal"
                    fullWidth
                />
                <TextField
                    id="message"
                    label="Message"
                    multiline
                    rows="8"
                    value={this.state.message}
                    onChange={e => this.handleChange("message", e)}
                    margin="normal"
                    fullWidth
                />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "10px auto",
                    }}
                >
                    <Button
                        onClick={this.props.updateDialogStatus}
                        color="primary"
                    >
                        Discard
                    </Button>
                    <Button
                        onClick={this.props.onSubmit}
                        variant="contained"
                        color="primary"
                        autoFocus
                    >
                        Submit
                    </Button>
                </div>
            </div>
        );
    }
}

export default ContactForm;
