const express = require('express')
const app = express()
const path = require("node:path");

//template engine configuration
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const port = 3000


//mock database
app.locals.messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

//import routers
const indexRouter = require("./routers/indexRouter");
const formRouter  = require("./routers/formRouter");
const messageRouter  = require("./routers/messageRouter");


//to parse form data to req.body
app.use(express.urlencoded({ extended: true }));

//use routers
app.use("/", indexRouter);
app.use("/new", formRouter);
app.use("/message", messageRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})