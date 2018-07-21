import * as React from "react";
import { Typography } from "@material-ui/core";

const Year1 = require("../../../assets/images/ccEconomicsYear1.png");
const Year15 = require("../../../assets/images/ccEconomicsYear15.png");
const Compare = require("../../../assets/images/ccEconomicsCompare.png");
const EconTable = require("../../../assets/images/ccEconomicsTable.png");

const Economics: React.SFC = () => {
    return (
        <ul style={{ listStyle: "unset", padding: "30px" }}>
            <li>
                <Typography>
                    Our research shows that the cumulative costs and benefits
                    should be considered when considering the long-term impact
                    of cover crops on the change in operational revenue.
                </Typography>
            </li>
            <li>
                <Typography>
                    The distribution of costs and benefits changes throughout
                    the years, and the costs outweigh the benefits by the 15th
                    year of cover cropping. However, the annual picture does not
                    tell the full story.
                </Typography>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        width: "100%",
                        height: "300px",
                        margin: "20px 100px",
                    }}
                >
                    <img src={Year1} alt="economy" width="70%" />
                    <img src={Year15} alt="economy" width="70%" />
                </div>
            </li>
            <li>
                <Typography>Next Steps:</Typography>
                <ul style={{ listStyle: "circle", paddingLeft: "40px" }}>
                    <li>
                        <Typography>
                            Both tomato and almond production systems will be
                            analyzed separately to develop cash-flow models of
                            incorporating winter cover crops into standard
                            operations. We will identify the most conservative
                            point of return as the year when the lowest
                            cumulative benefits outweigh the highest cumulative
                            costs.
                        </Typography>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                width: "80%",
                                height: "340px",
                                margin: "20px auto",
                            }}
                        >
                            <img src={Compare} alt="economy" width="70%" />
                        </div>
                    </li>
                    <li>
                        <Typography>
                            Using the cash-flow models, eight different
                            scenarios of hydrologic and agronomic changes will
                            be explored to understand the economic impact of
                            cover crop water use and climate change.
                        </Typography>
                        <div
                            style={{
                                width: "900px",
                                margin: "20px auto",
                            }}
                        >
                            <img src={EconTable} alt="economy" width="70%" />
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    );
};

export default Economics;
