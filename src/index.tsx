import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { MuiThemeProvider } from "@material-ui/core/styles";
import ApolloClient from "apollo-boost";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import "./styles/styles.css";
import App from "./components/App";
import Theme from "./styles/Theme";

const rootEl = document.getElementById("root");
const client = new ApolloClient({ uri: "http://localhost:5000/api/graphql" });

const Root: React.SFC = () => (
    <AppContainer>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <MuiThemeProvider theme={Theme}>
                    <App />
                </MuiThemeProvider>
            </BrowserRouter>
        </ApolloProvider>
    </AppContainer>
);

render(<Root />, rootEl);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
    module.hot.accept("./components/App", () => {
        const NewApp = require("./components/App").default;

        render(
            <AppContainer>
                <ApolloProvider client={client}>
                    <BrowserRouter>
                        <MuiThemeProvider theme={Theme}>
                            <NewApp />
                        </MuiThemeProvider>
                    </BrowserRouter>
                </ApolloProvider>
            </AppContainer>,
            rootEl
        );
    });
}
