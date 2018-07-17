import * as React from "react";
import { Query } from "react-apollo";

import { MAP_STYLE } from "../components/map/mapStyle";
import { CC_SITES_QUERY } from "../queries";
import BaseMap from "../components/map/BaseMap";

interface IProps {}

const getSourceData = geoSites => {
    const geoPoints = geoSites.map(site => ({
        type: "Feature",
        geometry: { type: "Point", coordinates: [site.lat, site.lng] },
        properites: { location: site.location },
    }));

    return {
        data: { type: "FeatureCollection", features: geoPoints },
        type: "geojson",
    };
};

const Map: React.SFC<IProps> = () => (
    <Query query={CC_SITES_QUERY}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return "Error...";
            return (
                <BaseMap
                    pointSource={getSourceData(data.geoSites)}
                    mapStyle={MAP_STYLE}
                />
            );
        }}
    </Query>
);

export default Map;
