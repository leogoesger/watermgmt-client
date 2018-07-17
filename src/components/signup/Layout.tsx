import * as React from "react";
import UserForm from "../shared/userAccount/UserForm";

interface IProps {
    history: {
        push: (path: string) => void;
        location: {
            pathname: string;
        };
    };
    signupQuery: (
        obj: { variables: { [index: string]: string } }
    ) => Promise<any>;
}

interface IParams {
    [index: string]: string;
}

const handleSubmit = signupQuery => (obj: IParams) =>
    signupQuery({
        variables: {
            name: obj.name,
            email: obj.email,
            password: obj.password,
        },
    });

const Layout: React.SFC<IProps> = ({ history, signupQuery }) => {
    return (
        <UserForm
            history={history}
            isSignupForm={true}
            handleSubmit={handleSubmit(signupQuery)}
        />
    );
};

export default Layout;
