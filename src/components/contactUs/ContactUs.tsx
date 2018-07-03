import { Button, Dialog, DialogContent, Typography } from "@material-ui/core/";
import * as React from "react";
import { compose, withHandlers, withState } from "recompose";
import ContactForm from "./ContactForm";

interface IProps {
    open: boolean;
    updateDialogStatus: () => void;
}
const ContactUs: React.SFC<IProps> = ({ open, updateDialogStatus }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                margin: "20px auto",
            }}
        >
            <Button
                onClick={updateDialogStatus}
                variant="contained"
                color="primary"
                style={{ width: "20%" }}
            >
                Contact Us
            </Button>
            <Dialog open={open} onClose={updateDialogStatus}>
                <Typography
                    variant="title"
                    style={{
                        color: "#616161",
                        fontSize: "26px",
                        paddingLeft: "20px",
                    }}
                >
                    Thank You!
                </Typography>
                <Typography style={{ marginLeft: "24px" }}>
                    Fill out the forum, and we will get back to you shortly!
                </Typography>
                <DialogContent>
                    <ContactForm
                        onSubmit={() => console.log("submitting")}
                        updateDialogStatus={updateDialogStatus}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
};

const enhancer = compose(
    withState("open", "updateStatus", false),
    withHandlers({
        updateDialogStatus: ({ updateStatus }) => () =>
            updateStatus((status: boolean) => !status),
    })
);
export default enhancer(ContactUs);
