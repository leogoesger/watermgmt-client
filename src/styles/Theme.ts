import { blue } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            body1: { fontSize: "18px", color: "#616161" },
            subheading: {
                color: "#424242",
                fontSize: "18px",
                fontWeight: "bold",
                margin: "20px 0 20px 0",
            },
            title: {
                color: "#424242",
                fontSize: "24px",
                fontWeight: "bold",
                margin: "20px 0 20px 0",
            },
        },
    },
    palette: {
        primary: { main: blue[500] }, // Purple and green play nicely together.
        secondary: { main: "#11cb5f" }, // This is just green.A700 as hex.
    },
});

export default theme;
