import express from "express";

const app = express();

//path
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// public folder
app.use(express.static("public"));

// use ejs
app.set("view engine", "ejs");

// get home page
app.get("/", function (req, res) {
    res.render("home");
});

app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});