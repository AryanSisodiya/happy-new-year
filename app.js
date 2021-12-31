const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 80;

app.use("/static", express.static("static"));
app.use(express.urlencoded());

app.set("view engine", "pug");

app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.status(200).render("index.pug");
});

app.get('*', (req, res) => {
    res.status(200).render('index.pug');
})

app.listen(port, () => {
    console.log(`Website has been successfully started on port ${port}`);
});
