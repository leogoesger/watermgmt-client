import { Button, Typography } from "@material-ui/core/";
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
            <div style={{ marginTop: "10px" }}>
                <Typography>Alyssa DeVincentis</Typography>
                <Typography>ajdevincentis at ucdavis.edu</Typography>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "10px auto",
                    }}
                >
                    <div />
                    <Button
                        onClick={this.props.updateDialogStatus}
                        variant="contained"
                        color="primary"
                        autoFocus
                    >
                        Close
                    </Button>
                </div>
            </div>
        );
    }
}

export default ContactForm;
