import * as React from "react";
import UserForm from "../shared/userAccount/UserForm";

interface IProps {
    history: {
        push: (path: string) => void;
        location: {
            pathname: string;
        };
    };
    loginQuery: (
        obj: { variables: { [index: string]: string } }
    ) => Promise<any>;
}

interface IParams {
    [index: string]: string;
}

const handleSubmit = loginQuery => (obj: IParams) =>
    loginQuery({
        variables: {
            email: obj.email,
            password: obj.password,
        },
    });

const Layout: React.SFC<IProps> = ({ history, loginQuery }) => {
    return (
        <UserForm
            history={history}
            isSignupForm={false}
            handleSubmit={handleSubmit(loginQuery)}
        />
    );
};

export default Layout;
