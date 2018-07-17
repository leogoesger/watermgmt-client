import gql from "graphql-tag";

export default gql`
    {
        geoSites {
            location
            lat
            lng
            images {
                name
                url
            }
        }
    }
`;
