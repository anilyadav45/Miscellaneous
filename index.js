const express = require("express");
const app = express();
const port = 3040;

app.get("/register", (req, res) => {
    let { email, password } = req.query; //this means the data we submit in FrontEnd is gone to url that is req so it'll take from there
    res.send(`standard GET response The email you provide is : ${email} and password is : ${password}`);
})

app.post("/register", (req, res) => {
    res.send("standard POST response");

})

app.listen(port, () => {
    console.log(`app is listening on the port ${port}`);
})