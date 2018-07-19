export const MAP_STYLE = require("../../static/mapStyle.json");
export const MAP_LAYER = {
    id: "pointData",
    source: "pointData",
    type: "circle",
    interactive: true,
    minzoom: 5,
    layout: {
        visibility: "visible",
    },
    paint: {
        "circle-radius": {
            base: 3,
            stops: [[5, 3.5], [7, 5.5]],
        },
        "circle-stroke-color": "#fafafa",
        "circle-stroke-width": 1,
        "circle-color": "#03a9f4",
    },
};
