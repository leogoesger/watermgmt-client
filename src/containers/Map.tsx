import * as React from "react";
import { find, propEq } from "ramda";
import { Query } from "react-apollo";
import { getPointSource, ReactMap } from "react-mapbox-helper";
import { Dialog, DialogContent, Button } from "@material-ui/core";

import { CC_SITES_QUERY } from "../queries";
import { MAP_STYLE, MAP_LAYER } from "../components/map/mapStyle";

interface IProps {}

interface IState {
    dialogLocation: string;
    imageNumber: number;
}

interface IGeoSite {
    location: string;
    lng: string;
    lat: string;
    images: { url: string; name: string }[];
}

class Map extends React.PureComponent<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            dialogLocation: "",
            imageNumber: 0,
        };
    }

    onClick = location => {
        this.setState({ dialogLocation: location });
    };

    handleDialogClose = () => {
        this.setState({ dialogLocation: "" });
    };

    handleChangeImage = (geoSite: IGeoSite, num: number) => {
        const imageCounts = geoSite.images.length;
        if (this.state.imageNumber === imageCounts - 1 && num === 1) {
            this.setState({ imageNumber: 0 });
        } else if (this.state.imageNumber === 0 && num === -1) {
            this.setState({ imageNumber: imageCounts - 1 });
        } else {
            this.setState({ imageNumber: this.state.imageNumber + num });
        }
    };

    renderDialogContent = (geoSites: IGeoSite[]) => {
        if (!geoSites || !this.state.dialogLocation) {
            return null;
        }
        const geoSite = find(propEq("location", this.state.dialogLocation))(
            geoSites
        ) as IGeoSite;
        return (
            <div>
                <img
                    src={geoSite.images[this.state.imageNumber].url}
                    alt="Smiley face"
                    width="100%"
                />
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Button
                        color="primary"
                        onClick={() => this.handleChangeImage(geoSite, -1)}
                    >
                        Prev
                    </Button>
                    <Button
                        color="primary"
                        onClick={() => this.handleChangeImage(geoSite, 1)}
                    >
                        Next
                    </Button>
                </div>
            </div>
        );
    };

    render() {
        return (
            <Query query={CC_SITES_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return "Loading...";
                    if (error) return "Error...";

                    return (
                        <ReactMap
                            accessToken={
                                "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA"
                            }
                            sources={[
                                getPointSource(data.geoSites, {
                                    longitude: "lng",
                                    latitude: "lat",
                                    propertyKeys: ["location"],
                                }),
                            ]}
                            sourceIds={["pointData"]}
                            layers={[MAP_LAYER]}
                            hoverFeatureKey={"location"}
                            mapStyle={MAP_STYLE}
                            onClick={this.onClick}
                        >
                            <Dialog
                                open={Boolean(this.state.dialogLocation)}
                                onClose={this.handleDialogClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogContent style={{ padding: "0px" }}>
                                    {this.renderDialogContent(data.geoSites)}
                                </DialogContent>
                            </Dialog>
                        </ReactMap>
                    );
                }}
            </Query>
        );
    }
}

export default Map;
