import gql from "graphql-tag";

export default gql`
    query FetchSong {
        songs {
            id
        }
    }
`;
