const express = require("express");
require("./db/conn");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res)=>{
    res.send("I am Omkar Patil");
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})