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
let life_status = "studying BCA in Bangalore.";

// projects
let projects = [
    {
        name: "Man Page",
        description: "A custom implementation of the Man Page website created by Michael Kerrisk.",
        image: "man-page.png",
        readMoreLink: "man-page",
        codeURL: "https://github.com/saivishnu725/man_page/"
    },
    {
        name: "Attendance Management",
        description: "A website that will store the attendance information of my day to day college, and will display the percentage.",
        image: "attendance-web.png",
        readMoreLink: "attendance-web",
        codeURL: "https://github.com/saivishnu725/attendance-web"
    },
];

// blogs
let blogs = [
    {
        title: "Mr. Robot and the reason why people don't like it. (wrote this one ages ago. So, don't judge. xD)",
        description: "Just a small set of sentences about how Mr. Robot is mistaken to be something that it is not. ",
        link: "http://theunconcernedape.me/blogs/blog1.html",
    },
    {
        title: "Add a Directory to Path in ZSH (write this one for GeeksForGeeks 🤓 )",
        description: "Wrote an article in GeeksForGeeks and it got published. I am yet to write more.",
        link: "https://www.geeksforgeeks.org/add-a-directory-to-path-in-zsh/"
    }
];

// social links
let socials = {
    github: "https://github.com/saivishnu725",
    linkedin: "https://www.linkedin.com/in/saivishnu725",
    twitter: "https://twitter.com/saivishnu725",
    instagram: "https://www.instagram.com/_sai.vishnu_",
    reddit: "https://www.reddit.com/user/saivishnu725",
    gmail: "mailto:theunconcernedape@gmail.com",
    discord: "https://discordapp.com/users/627764789342371840"
};

// blog names
let availableTitle = [
    "title-1",
    "title-2",
    "title-3"
];

// Routes

// GET: home page
app.get("/", function (req, res) {
    res.render("home", {
        current_age: current_age,
        status: life_status,
        projects: projects,
        blogs: blogs,
        socials: socials
    });
});

// GET: blog's primary page
app.get("/blog", function (req, res) {
    res.render("blogs/blog");
});

// GET: blog pages
app.get("/blog/:title", function (req, res) {
    const requestedTitle = req.params.title;

    // if the page is available, open it. Or else, send a 404
    if (availableTitle.includes(requestedTitle)) {
        res.send(requestedTitle);
        // Open the page
        // res.render("blogs/" + requestedTitle);
    } else {
        //  open a 404 error page
        // TODO: create a todo page
        res.status(404).send(`404 Page Not Found` + `<br /> <a href='/'> Go back home </a>`);
    }
});

// GET: contact page
app.get("/contact", function (req, res) {
    res.render("contact", { socials: socials });
});

app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});
