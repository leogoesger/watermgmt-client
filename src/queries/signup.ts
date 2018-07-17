import gql from "graphql-tag";

export default gql`
    mutation Signup($email: String, $password: String, $name: String) {
        signUp(email: $email, password: $password, name: $name) {
            email
            jwt
        }
    }
`;
