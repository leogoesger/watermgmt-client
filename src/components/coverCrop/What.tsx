import { Dialog, Divider, Typography } from "@material-ui/core/";
import * as React from "react";
import { compose, withHandlers, withProps, withState } from "recompose";

const CoverCropImage = require("../../assets/images/coverCrop.jpg");
const AlmondImage = require("../../assets/images/almond.jpg");
const TomatoImage = require("../../assets/images/tomato.jpg");
const SorghumImage = require("../../assets/images/sorghum.jpg");

interface IProps {
    crops: {
        [index: string]: { description: string; image: any };
    };
    selectedItem: string;
    updateDialogItem: (d: string | null) => void;
}
const What: React.SFC<IProps> = ({ selectedItem, updateDialogItem, crops }) => (
    <div style={{ position: "relative" }}>
        <Typography variant="title">What are cover crops?</Typography>
        <Divider style={{ marginBottom: "16px" }} />
        <img
            src={CoverCropImage}
            alt="cover-crop"
            style={{ width: "100%", marginBottom: "20px" }}
        />

        <Typography
            style={{
                color: "white",
                fontSize: "28px",
                fontWeight: "bold",
                left: "30px",
                position: "absolute",
                top: "150px",
            }}
        >
            Plants grown on agriculture fields<br />
            <span style={{ marginLeft: "80px" }}>
                when they would otherwise be left fallow
            </span>
        </Typography>
        <Typography variant="body1">
            Growers can have winter, spring, or summer cover crops depending on
            their growing season. Example species are annual ryegrass,
            sudangrass, triticale, legume mix, brassicas and etc. Our research
            looks at winter cover cropping in both annual and perennial cropping
            systems in California. We are focused on crop systems with{" "}
            <a
                href="https://www.cdfa.ca.gov/Statistics/PDFs/2016-17AgReport.pdf"
                style={{ textDecoration: "underline", fontWeight: "bold" }}
            >
                a large spatial and economic footprint
            </a>{" "}
            our results can have a potentially large impact.
        </Typography>
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "40px auto",
                width: "100%",
            }}
        >
            {Object.keys(crops).map(key => (
                <div
                    key={key}
                    style={{ cursor: "pointer" }}
                    onClick={() => updateDialogItem(key)}
                >
                    <img
                        src={crops[key].image}
                        className="cover-crop-what-images"
                        alt={key}
                    />
                    <Typography
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Typography>
                </div>
            ))}
        </div>
        <Dialog
            open={Boolean(selectedItem)}
            onClose={() => updateDialogItem(null)}
        >
            {selectedItem ? (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        src={crops[selectedItem].image}
                        alt={selectedItem}
                        style={{ width: "300px", height: "300px" }}
                    />
                    <Typography variant="body1" style={{ padding: "20px" }}>
                        {crops[selectedItem].description}
                    </Typography>
                </div>
            ) : (
                ""
            )}
        </Dialog>
    </div>
);

const enhancer = compose(
    withState("selectedItem", "updateItem", null),
    withHandlers({
        updateDialogItem: ({ updateItem }) => (item: string) =>
            updateItem((n: string | null) => (n = item)),
    }),
    withProps({
        crops: {
            almond: {
                description:
                    "Almonds were ranked as the most valuable exported crop in California in 2016, valued at nearly $4.5 billion and covering almost 1 million acres.",
                image: AlmondImage,
            },
            sorghum: {
                description:
                    "Sorghum and garbanzo are drought tolerant crops, which have not been historically grown at large scales in California. We explored cover crops in these systems in anticipation of expanding acreages as farmers respond to increasingly expensive and scarce water supplies.",
                image: SorghumImage,
            },
            tomato: {
                description:
                    "Processing tomatoes are one of the most valuable crops in California and were valued at nearly $800 million in 2016. California's processed tomatoes account for over 90% of the U.S supply and nearly 50% of global supply. These farms cover over 250,000 acres throughout the state.",
                image: TomatoImage,
            },
        },
    })
);

export default enhancer(What);
