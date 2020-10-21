const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "public")));

//Global variables
app.locals.author = "George Benjamin";
app.locals.email = "msdcconnect@gmail.com"

app.get("/", (req, res) =>{
    res.render("index", {
        steps: ["This is my awesome express app",
        "This is my awesome express app",
        "This is my awesome express app",],
        title:"How to build an octocat. Wow! We've come a long way!"
    })
});

app.get("/about", (req, res) =>{
    res.render("about", {
        title:"Let me tell you a little bit about Express",
        features:[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
        ]
    })
})

app.get("/contact", (req, res) =>{
    res.render("contact", {
        title:"Wanna talk? Send a mail!"
    });
})

app.use((req, res) =>{
    res.send("Page not found");
});

http.createServer(app).listen(process.env.PORT || 3000);
