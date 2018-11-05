import * as React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div
            style={{
                width: "100%",
                marginTop: "60px",
                height: "60px",
                background: "#424242",
                display: "flex",
                justifyContent: "space-around",
            }}
        >
            <div
                style={{
                    width: "80%",
                    display: "flex",
                    justifyContent: "space-around",
                    paddingTop: "22px",
                    fontFamily: "Helvetica",
                    color: "#cfcfcf",
                }}
            >
                <Link style={{ color: "#cfcfcf" }} to="/who-are-we">
                    Who are we?
                </Link>
                <Link style={{ color: "#cfcfcf" }} to="/what-are-cover-crops">
                    What are cover crops?
                </Link>
                <Link style={{ color: "#cfcfcf" }} to="/why-are-we-studying">
                    Why are we studying?
                </Link>
                <Link style={{ color: "#cfcfcf" }} to="/how-are-we-studying">
                    How are we studying?
                </Link>
                <Link style={{ color: "#cfcfcf" }} to="/what-are-we-learning">
                    What are we learning?
                </Link>
            </div>

            <div
                style={{
                    width: "20%",
                    background: "rgb(97, 97, 97)",
                    fontFamily: "Helvetica",
                    padding: "22px 0px 0px 10px",
                }}
            >
                <a
                    href="http://watermanagement.ucdavis.edu/"
                    style={{ color: "white" }}
                >
                    UCD Water Management Lab
                </a>
            </div>
        </div>
    );
};

export default Footer;
