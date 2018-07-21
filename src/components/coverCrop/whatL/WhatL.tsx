import { Divider, Typography } from "@material-ui/core/";
import * as React from "react";

import WhatLTabs from "./WhatLTabs";

const WhatL = () => (
    <div>
        <Typography variant="title">What are we learning?</Typography>
        <Divider style={{ marginBottom: "16px" }} />
        <ul style={{ padding: "20px 40px", listStyleType: "unset" }}>
            <li>
                <Typography>
                    Sustainable agricultural water management in a changing
                    climate requires an understanding of water management from a
                    range of temporal and spatial scales, across climates, and
                    between production systems. This research explores cover
                    crops, which are one strategy of demand-side water
                    management in California.
                </Typography>
            </li>
            <li>
                <Typography>
                    Farmer needs inform the design of this physical
                    science-based experiment, which will lead to adaptable
                    solutions for water scarcity challenges. This research
                    intends to help farmers with access to varying economic and
                    hydrologic resources meet sustainability goals in a changing
                    climate.
                </Typography>
            </li>
            <li>
                <Typography>Some of our preliminary results</Typography>
                <WhatLTabs />
            </li>
        </ul>
    </div>
);

export default WhatL;
