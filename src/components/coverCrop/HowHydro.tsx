const TimeLine = require("../../assets/images/ccTimeline.png");

import { Button, Dialog, Typography } from "@material-ui/core/";
import * as React from "react";
import { compose, withHandlers, withState } from "recompose";

import { ArrowForward } from "@material-ui/icons";
import { coverCropHowInputOutput } from "../../utils/CC_constants";
import BaseMap from "../map/BaseMap";

interface IItem {
    frequency?: string;
    instrumentation?: string;
    method: string;
    name: string;
}
interface IProps {
    selectedItem: IItem;
    updateDialogItem: (item?: IItem | null) => void;
}
const HowHydro: React.SFC<IProps> = ({ selectedItem, updateDialogItem }) => {
    return (
        <div style={{ padding: "40px 20px" }}>
            <Typography>
                The first goal of this project is to understand how cover crops
                affect agricultural water budgets from November to May in
                California's Central Valley. This data will help us determine if
                and under what conditions cover crops help keep precipitation in
                the root zone or move it deeper down the soil profile.{" "}
            </Typography>
            <ul style={{ padding: "20px 40px", listStyleType: "circle" }}>
                <li>
                    <Typography>
                        We are collecting or calculating values for each
                        component of the{" "}
                        <span style={{ fontWeight: "bold" }}>water budget</span>.
                    </Typography>
                    <div
                        style={{
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "#81c784",
                                borderRadius: "10px",
                                height: "200px",
                                margin: "20px auto",
                                width: "200px",
                            }}
                        />
                        <ArrowForward
                            style={{
                                color: "#00bcd4",
                                height: "50px",
                                left: "200px",
                                position: "absolute",
                                top: "64px",
                                width: "50px",
                            }}
                        />
                        <ArrowForward
                            style={{
                                color: "#00bcd4",
                                height: "50px",
                                position: "absolute",
                                right: "200px",
                                top: "64px",
                                width: "50px",
                            }}
                        />

                        <Button
                            color="primary"
                            variant="outlined"
                            style={{
                                position: "absolute",
                                right: "560px",
                                top: "70px",
                            }}
                            onClick={() =>
                                updateDialogItem(
                                    coverCropHowInputOutput.precipitation
                                )
                            }
                        >
                            {coverCropHowInputOutput.precipitation.name}
                        </Button>
                        <Button
                            color="primary"
                            variant="outlined"
                            style={{
                                left: "560px",
                                position: "absolute",
                                top: "10px",
                            }}
                            onClick={() =>
                                updateDialogItem(
                                    coverCropHowInputOutput.evapotranspiration
                                )
                            }
                        >
                            {coverCropHowInputOutput.evapotranspiration.name}
                        </Button>
                        <Button
                            color="primary"
                            variant="outlined"
                            style={{
                                left: "560px",
                                position: "absolute",
                                top: "70px",
                            }}
                            onClick={() =>
                                updateDialogItem(
                                    coverCropHowInputOutput.groundWaterRecharge
                                )
                            }
                        >
                            {coverCropHowInputOutput.groundWaterRecharge.name}
                        </Button>
                        <Button
                            color="primary"
                            variant="outlined"
                            style={{
                                left: "560px",
                                position: "absolute",
                                top: "150px",
                            }}
                            onClick={() =>
                                updateDialogItem(coverCropHowInputOutput.runoff)
                            }
                        >
                            {coverCropHowInputOutput.runoff.name}
                        </Button>
                        <Button
                            color="primary"
                            variant="outlined"
                            style={{
                                color: "white",
                                position: "absolute",
                                right: "270px",
                                top: "70px",
                            }}
                            onClick={() =>
                                updateDialogItem(
                                    coverCropHowInputOutput.soilWaterStorage
                                )
                            }
                        >
                            {coverCropHowInputOutput.soilWaterStorage.name}
                        </Button>
                    </div>
                </li>
                <li>
                    <Typography>
                        Data is being collected through an on-going field
                        campaign at farms that cover a broad climate gradient,
                        represent the diversity of operations within the Central
                        Valley, and operate a typical management system that
                        includes winter cover crops.
                    </Typography>
                    <BaseMap />
                </li>

                <li>
                    <Typography>
                        We work with experimental farms and growers that include
                        cover cropping as part of their annual cropping system
                        described with the following timeline, adapted from
                        <a
                            href="https://www.tandfonline.com/doi/abs/10.1300/J144v08n01_04"
                            style={{
                                fontWeight: "bold",
                                textDecoration: "underline",
                            }}
                        >
                            {" "}
                            Sarrantonio & Gallandt (2003)
                        </a>.
                    </Typography>
                    <img
                        src={TimeLine}
                        alt="timeline"
                        style={{ width: "80%", margin: "20px 0px 20px 80px" }}
                    />
                </li>
            </ul>
            <Dialog
                open={Boolean(selectedItem)}
                onClose={() => updateDialogItem(null)}
            >
                {selectedItem ? (
                    <div
                        style={{
                            height: "200px",
                            padding: "20px",
                            width: "500px",
                        }}
                    >
                        <Typography variant="title">
                            {selectedItem.name}
                        </Typography>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>Method</span>:{" "}
                            {selectedItem.method ? selectedItem.method : null}
                        </Typography>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>
                                Frequency
                            </span>:{" "}
                            {selectedItem.frequency
                                ? selectedItem.frequency
                                : null}
                        </Typography>
                        <Typography>
                            <span style={{ fontWeight: "bold" }}>
                                Instrumentation
                            </span>:{" "}
                            {selectedItem.instrumentation
                                ? selectedItem.instrumentation
                                : null}
                        </Typography>
                    </div>
                ) : (
                    ""
                )}
            </Dialog>
        </div>
    );
};

const enhancer = compose(
    withState("selectedItem", "updateItem", null),
    withHandlers({
        updateDialogItem: ({ updateItem }) => (item: IItem | null) =>
            updateItem((n: IItem | null) => (n = item)),
    })
);

export default enhancer(HowHydro);
