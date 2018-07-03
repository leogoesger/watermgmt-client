import { Dialog, Divider, Typography } from "@material-ui/core/";
import * as React from "react";
import { compose, withHandlers, withState } from "recompose";

import { coverCropWhyImages } from "../../utils/CC_constants";

const PreviousResearch = () => (
    <div style={{ padding: "10px 20px" }}>
        <ul style={{ listStyle: "circle" }}>
            <li>
                <Typography>
                    Focused on their soil health benefits: prevent erosion,
                    reduce nutrient losses, penetrate compacted soils, aid in
                    weed management, promote soil microbial diversity, sequester
                    carbon, form soil aggregates, fix nitrogen, add organic
                    matter, etc.
                </Typography>
            </li>
            <li>
                <Typography>Mostly within grain production systems</Typography>
            </li>

            <li>
                <Typography>
                    Generally only address income changes in the short term.
                </Typography>
            </li>
            <li>
                <Typography>
                    California-specific and water-related information has not
                    been updated in decades
                </Typography>
            </li>
            <li>
                <Typography>
                    Does not account for the changing climate or address
                    multiple specialty crop production systems.
                </Typography>
            </li>
        </ul>
    </div>
);
interface IInfo {
    description: string;
    image: any;
    name: string;
}

interface IProps {
    dialogInfo?: IInfo;
    updateDialogInfo: (info?: IInfo | null) => void;
}

const Why: React.SFC<IProps> = ({ dialogInfo, updateDialogInfo }) => (
    <div>
        <Typography variant="title">Why are we studying them?</Typography>
        <Divider style={{ marginBottom: "16px" }} />
        <div style={{ padding: "10px" }}>
            <ul style={{ listStyle: "disc" }}>
                <li>
                    <Typography>
                        <span style={{ fontWeight: "bold" }}>
                            Water resources in California are increasingly
                            unreliable
                        </span>{" "}
                        as the frequency, timing, and location of precipitation
                        change. This has big implications for irrigated
                        agriculture throughout the state.
                    </Typography>
                </li>
                <li>
                    <Typography>
                        <span style={{ fontWeight: "bold" }}>
                            Sustainable agriculture requires demand-side water
                            management
                        </span>{" "}
                        to reduce pressures on water supplies. There are
                        capacity limits to water supply augmentation in
                        California, which are exacerbated by changing climate
                        patterns.
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Retention of winter precipitation is key to sustainable
                        agricultural water management, and cover crops may help
                        farmers 'keep the water where it falls' but{" "}
                        <span style={{ fontWeight: "bold" }}>
                            adoption in California is low
                        </span>{" "}
                        due to several concerns
                    </Typography>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            margin: "40px 0",
                        }}
                    >
                        {coverCropWhyImages.map(img => (
                            <div
                                key={img.name}
                                style={{ cursor: "pointer" }}
                                onClick={() => updateDialogInfo(img)}
                            >
                                <img src={img.image} alt={img.name} />
                                <Typography
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        paddingTop: "5px",
                                    }}
                                >
                                    {img.name}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </li>
                <li>
                    <Typography>
                        Previous research in cover crops is limited in scope:
                    </Typography>
                    {PreviousResearch()}
                </li>
            </ul>
        </div>
        <Dialog
            open={Boolean(dialogInfo)}
            onClose={() => updateDialogInfo(null)}
        >
            {dialogInfo ? (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        src={dialogInfo.image}
                        alt={dialogInfo.name}
                        style={{
                            height: "130px",
                            padding: "20px",
                            width: "130px",
                        }}
                    />
                    <Typography
                        variant="body1"
                        style={{ padding: "50px 20px" }}
                    >
                        {dialogInfo.description}
                    </Typography>
                </div>
            ) : (
                ""
            )}
        </Dialog>
    </div>
);

const enhancer = compose(
    withState("dialogInfo", "updateDialog", null),
    withHandlers({
        updateDialogInfo: ({ updateDialog }) => (info: IInfo | null) =>
            updateDialog((n: IInfo | null) => (n = info)),
    })
);
export default enhancer(Why);
