import * as React from "react";
import { Typography } from "@material-ui/core";

const Soil1 = require("../../../assets/images/ccSoil.png");
const Soil2 = require("../../../assets/images/ccSoil2.png");

const SoilMoisture: React.SFC = () => {
    return (
        <ul style={{ listStyle: "unset", padding: "30px" }}>
            <li>
                <Typography>
                    One of our field sites is a 20-year long experiment
                    comparing the management implications of cover crops and
                    conservation tillage on fields in Five Points, CA. After 2
                    years of data collection and analysis, we see that cover
                    crops do not change the soil water content (SWC) but appear
                    to have a "drying effect" at the end of the season. This
                    hypothesis will be tested in the upcoming winter season.
                </Typography>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        height: "250px",
                        margin: "20px auto",
                    }}
                >
                    <img src={Soil1} alt="economy" width="70%" />
                </div>
            </li>
            <li>
                <Typography>
                    Data from this long-term experimental field allows us to
                    compare the implications of two conservation agricultural
                    practices - cover cropping and conservation tillage -
                    against their traditional alternatives. We find that fields
                    that have been managed with winter cover crops and
                    conservation tillage for 20 years have higher SWC at certain
                    points in the winter than fields that are left fallow in the
                    winter and managed with standard tillage, but on average the
                    two treatments are not statistically different. This result
                    leads to the hypothesis that a grower can still receive the
                    numerous benefits of winter cover crops and conservation
                    tillage without significantly depleting the SWC of their
                    fields, which will be tested in the upcoming winter season.
                </Typography>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        height: "300px",
                        margin: "20px auto",
                    }}
                >
                    <img src={Soil2} alt="economy" width="70%" />
                </div>
            </li>
            <li>
                <Typography>
                    Next steps: Soil moisture data from our other 11 sites will
                    be analyzed in a multi-factor model to predict the
                    hydrologic implications of winter cover crops for different
                    cover crop types, management systems, and regions of the
                    Central Valley.
                </Typography>
            </li>
        </ul>
    );
};

export default SoilMoisture;
