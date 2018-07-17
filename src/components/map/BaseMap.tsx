import * as React from "react";
import { CSSProperties } from "../../../node_modules/@material-ui/core/styles/withStyles";
import * as mapboxgl from "mapbox-gl";

interface IState {
    x: number;
    y: number;
    feature: string;
}

interface IProps {
    pointSource: any;
    mapStyle: any;
}

Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set(
    "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA"
);

class BaseMap extends React.Component<IProps, IState> {
    map: any;
    mapContainer: any;

    constructor(props) {
        super(props);
        this.state = {
            feature: null,
            x: 0,
            y: 0,
        };
    }

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: this.props.mapStyle,
            center: [-79.38, 43.65],
            zoom: 12.5,
        });

        if (this.props.pointSource) {
            this.map.on("load", () =>
                this.map.addSource("pointData", this.props.pointSource)
            );
        }

        this.map.on("mousemove", e => {
            const features = this.map.queryRenderedFeatures(e.point);
            if (features.length > 0) {
                this.setState({
                    x: e.point.x,
                    y: e.point.y,
                    feature: features[0].properties.type,
                });
            }
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    public render() {
        const style: CSSProperties = {
            height: "300px",
            width: "100%",
        };

        const { x, y, feature } = this.state;
        return (
            <div style={{ position: "relative" }}>
                <div style={style} ref={el => (this.mapContainer = el)} />
                {feature && (
                    <div
                        className="tooltip"
                        style={{ position: "absolute", left: x, top: y }}
                    >
                        <div>{feature}</div>
                    </div>
                )}
            </div>
        );
    }
}

export default BaseMap;
