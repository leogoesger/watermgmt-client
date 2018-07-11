const express = require("express");
const path = require("path");
const app = express();
const portNumber = 3000;
const sourceDir = "dist";

app.use(express.static(sourceDir));

// BrowserHistory setup
app.get("*", function(req, res) {
    res.sendFile("index.html", { root: __dirname + "/dist" });
});

app.listen(portNumber, () => {
    console.log(`Express web server started: http://localhost:${portNumber}`);
    console.log(`Serving content from /${sourceDir}/`);
});
