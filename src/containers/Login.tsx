import * as React from "react";
import { graphql, compose } from "react-apollo";

import { Layout } from "../components/login/";
import loginQuery from "../queries/login";

interface IProps {
    loginQuery: (
        obj: { variables: { email: string; password: string } }
    ) => Promise<any>;
    history: {
        push: (path: string) => void;
        location: {
            pathname: string;
        };
    };
}

const Login: React.SFC<IProps> = ({ loginQuery, history }) => {
    return <Layout loginQuery={loginQuery} history={history} />;
};

const enhancer = compose(
    graphql(loginQuery, {
        name: "loginQuery",
    })
);
export default enhancer(Login);
