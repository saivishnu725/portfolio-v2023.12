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


// Data stuff
// TODO: get data from a json file
// function that calculates age based on year of birth
let calculateAge = function (day, month, year) {
    let myBirthDate = new Date(year, month - 1, day),
        myBirthYear = myBirthDate.getFullYear(),
        myBirthMonth = myBirthDate.getMonth(),
        myBirthDay = myBirthDate.getDay();
    let currentDate = new Date(),
        currentYear = currentDate.getFullYear(),
        currentMonth = currentDate.getMonth(),
        currentDay = currentDate.getDay();
    let ageMonth = currentMonth - myBirthMonth;
    let ageDay = currentDay - myBirthDay;
    let age = currentYear - myBirthYear;
    if (ageMonth < 0 || (ageMonth == 0 && ageDay < 0)) {
        age = age - 1;
    }
    return age;
};
let current_age = calculateAge(27, 6, 2003);

// my current life status (study, work, etc.)
let life_status = "studying BCA at New Horizon College, Bangalore.";




// Routes

// GET: home page
app.get("/", function (req, res) {
    res.render("home", { current_age: current_age, status: life_status });
});

app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});