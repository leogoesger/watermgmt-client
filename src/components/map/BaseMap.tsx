import * as React from "react";
import ReactMapGL from "react-map-gl";

interface IState {
    viewport: any;
}
class BaseMap extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            viewport: {
                height: 400,
                latitude: 37.7577,
                longitude: -122.4376,
                width: 750,
                zoom: 8,
            },
        };
    }

    public render() {
        return (
            <div style={{ margin: "20px auto" }}>
                <ReactMapGL
                    mapStyle="mapbox://styles/mapbox/light-v9"
                    mapboxApiAccessToken="pk.eyJ1IjoibGVvZ29lc2dlciIsImEiOiJjamU3dDEwZDkwNmJ5MnhwaHM1MjlydG8xIn0.UcVFjCvl3PTPI8jiOnPbYA"
                    {...this.state.viewport}
                    onViewportChange={viewport => this.setState({ viewport })}
                />
            </div>
        );
    }
}

export default BaseMap;
