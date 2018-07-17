import * as React from "react";
import { graphql, compose } from "react-apollo";

import { Layout } from "../components/signup";
import signupQuery from "../queries/signup";

interface IProps {
    signupQuery: (
        obj: { variables: { email: string; password: string; name: string } }
    ) => Promise<any>;
    history: {
        push: (path: string) => void;
        location: {
            pathname: string;
        };
    };
}

const Signup: React.SFC<IProps> = ({ signupQuery, history }) => {
    return <Layout signupQuery={signupQuery} history={history} />;
};

const enhancer = compose(
    graphql(signupQuery, {
        name: "signupQuery",
    })
);
export default enhancer(Signup);
