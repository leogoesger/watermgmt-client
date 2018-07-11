import * as React from "react";
import { graphql, compose } from "react-apollo";

import Layout from "../components/login/Layout";
import loginQuery from "../queries/login";

interface IProps {
    loginQuery: (
        obj: { variables: { email: string; password: string } }
    ) => Promise<any>;
}

const Login: React.SFC<IProps> = ({ loginQuery }) => {
    return <Layout login={loginQuery} />;
};

const enhancer = compose(
    graphql(loginQuery, {
        name: "loginQuery",
    })
);
export default enhancer(Login);
