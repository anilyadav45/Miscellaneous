const express = require("express");
const app = express();
const port = 3040;

// app.get("/register", (req, res) => {
//     let { email, password } = req.query; //this means the data we submit in FrontEnd is gone to url that is req so it'll take from there
//     res.send(`standard GET response The email you provide is : ${email} and password is : ${password}`);
// })
//these two lines are crucial for making encoded data and 2nd line for handling json data 

app.use(express.urlencoded({ extended: true })); //this method make that data encoded this is middleware this is for data coming from form what about json format dat so one more line is 
app.use(express.json()); //this is for if json format data is there both lines are needed
app.post("/register", (req, res) => {
    // console.log(req.body); //it will show undefined this data will not  print we have to use standard code for making coded data to encoded
    res.send("standard POST response");

})


app.listen(port, () => {
    console.log(`app is listening on the port ${port}`);
})