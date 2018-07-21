import { Typography } from "@material-ui/core/";
import * as React from "react";

const EconomyImage = require("../../../assets/images/ccEconomy.png");
const EconomyTable = require("../../../assets/images/ccEconTable.png");

const HowEcon: React.SFC = () => {
    return (
        <div style={{ padding: "40px 20px" }}>
            <Typography>
                The second goal of this project is to understand trade-offs
                associated with winter cover cropping under different degrees of
                water access and how these trade-offs affect the economic
                viability of agricultural operations.{" "}
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
                <img src={EconomyImage} alt="economy" width="70%" />
            </div>
            <ul style={{ listStyle: "unset", paddingLeft: "10px" }}>
                <li>
                    <Typography>
                        Data for a cost-benefit analysis was collected through
                        combination of farmer interviews (with both cover crop
                        adopters, non-adopters, and those "in-between"), a
                        literature review, and information collected through the
                        hydrologic field campaign.
                    </Typography>
                    <Typography
                        style={{ fontWeight: "bold", paddingTop: "20px" }}
                    >
                        Interview Excerpts:
                    </Typography>

                    <Typography
                        style={{
                            padding: "10px 60px 0px 30px",
                            fontStyle: "italic",
                        }}
                    >
                        - "It's a fine line of when am I going to save water
                        [with cover crops]. Most times it is negligent. It's
                        more about getting the organic matter, it will give me
                        more water penetration."
                    </Typography>
                    <Typography
                        style={{
                            padding: "30px 60px 20px 30px",
                            fontStyle: "italic",
                        }}
                    >
                        - "I do think over time cover crops will make an
                        operation more profitable. You'll incur less costs and
                        water. Better fertility, yield, and disease resistance."
                    </Typography>
                </li>

                <li>
                    <Typography>
                        These resources were used to monetize the following
                        costs and benefits associated with cover crop adoption,
                        adapted from{" "}
                        <a
                            style={{ textDecoration: "underline" }}
                            href="https://www.cambridge.org/core/journals/renewable-agriculture-and-food-systems/article/review-of-economic-considerations-for-cover-crops-as-a-conservation-practice/488B324AD119DDC661D5F4271035FC1B"
                            target="_blank"
                        >
                            Bergtold, et al (2017)
                        </a>.
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
                        <img src={EconomyTable} alt="economy" width="70%" />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default HowEcon;
