const Emma = require("../assets/images/emma.jpg");
const Harry = require("../assets/images/harry.jpg");
const Rupert = require("../assets/images/rupert.jpg");

const Money = require("../assets/icons/money.png");
const Water = require("../assets/icons/water.png");
const Weight = require("../assets/icons/weight.png");

export const teamMembers = [
    {
        description: "some description",
        image: Emma,
        name: "Alyssa DeVincentis",
        title: "PhD Candidate in Hydrologic Sciences",
    },
    {
        description: "some description",
        image: Harry,
        name: "Sloane Rice",
        title: "Junior Specialist",
    },
    {
        description: "some description",
        image: Rupert,
        name: "Anna Gomes",
        title: "Undergraduate research assistant",
    },
    {
        description: "some description",
        image:
            "https://s3-us-west-1.amazonaws.com/funcflow/resources/default.png",
        name: "Amber Leavitt",
        title: "Undergraduate research assistant",
    },
    {
        description: "some description",
        image:
            "https://s3-us-west-1.amazonaws.com/funcflow/resources/default.png",
        name: "Jeffrey Mitchell",
        title: "UCE Specialist in Plant Sciences",
    },
    {
        description: "some description",
        image:
            "https://s3-us-west-1.amazonaws.com/funcflow/resources/default.png",
        name: "Sam Sandoval",
        title: "UCE Specialist in Water Management",
    },
    {
        description: "some description",
        image:
            "https://s3-us-west-1.amazonaws.com/funcflow/resources/default.png",
        name: "Daniele Zaccaria",
        title: "UCE Specialist in Irrigation",
    },
    {
        description: "some description",
        image:
            "https://s3-us-west-1.amazonaws.com/funcflow/resources/default.png",
        name: "Dan Munk",
        title: "UCE Farm Advisor in Fresno County",
    },
    {
        description: "some description",
        image:
            "https://s3-us-west-1.amazonaws.com/funcflow/resources/default.png",
        name: "Khaled Bali",
        title: "UCE Specialist in Irrigation Water Management",
    },
    {
        description: "some description",
        image:
            "https://s3-us-west-1.amazonaws.com/funcflow/resources/default.png",
        name: "Tapan Patak",
        title: "UCE Specialist in Climate Adaptation in Agriculture",
    },
    {
        description: "some description",
        image:
            "https://s3-us-west-1.amazonaws.com/funcflow/resources/default.png",
        name: "Many long-time local farmer",
        title: "private sector, and NRCS partners",
    },
];

export const coverCropSlideImages = [
    {
        description: "some description",
        imageUrl:
            "https://images.unsplash.com/photo-1468253926858-331ac6e1e97f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=578819556edaf9ed46f7a8ffb1003d46&auto=format&fit=crop&w=1650&q=80",
    },
    {
        description: "some description",
        imageUrl:
            "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de99acd648201793f9ec55f60180abb4&auto=format&fit=crop&w=1650&q=80",
    },
    {
        description: "some description",
        imageUrl:
            "https://images.unsplash.com/9/fields.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f0344bcf84bbf01755de972617c47935&auto=format&fit=crop&w=2254&q=80",
    },
];

export const coverCropWhyImages = [
    {
        description:
            "Specialty crops are produced in unique, high input systems.",
        image: Money,
        name: "High Input",
    },
    {
        description:
            "Farmers must balance trade-offs between competing interests.",
        image: Weight,
        name: "Balance",
    },
    {
        description: "Their hydrologic and economic impact is unknown.",
        image: Water,
        name: "Hydrologic",
    },
];

interface IInputOut {
    [index: string]: {
        frequency?: string;
        instrumentation?: string;
        method: string;
        name: string;
    };
}

export const coverCropHowInputOutput = <IInputOut>{
    evapotranspiration: {
        frequency: "Half-hourly",
        instrumentation: "Tule and Surface renewal litestation",
        method:
            "Energy balance RN = H + LE + G + S where RN is net radiation, H is sensible heat flux, LE is latent heat flux, G is ground heat flex and S is soil storage.",
        name: "Evapotranspiration",
    },
    groundWaterRecharge: {
        method: "Calculation of the residual",
        name: "Groundwater recharge",
    },
    precipitation: {
        frequency: "Daily",
        instrumentation: "Tipping bucket rain gauges",
        method: "Retrieve data from CIMIS weather stations",
        name: "Precipitation",
    },
    runoff: {
        method: "SCS Runoff Curve Number",
        name: "Runoff",
    },
    soilWaterStorage: {
        frequency: "Weekly",
        instrumentation: "Neutron probe readings",
        method: "Radioactive decay and gravimetric water content",
        name: "Soil-water storage",
    },
};
