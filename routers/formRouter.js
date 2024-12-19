const { Router } = require("express");

const formRouter = Router();

formRouter.get("/", (req, res) => {
    res.render("form")
});


//
formRouter.post("/", (req, res)=>{
    console.log(req.body.name);
    req.app.locals.messages.push({ text: req.body.message, user: req.body.name, added: new Date() });
    res.redirect("/");
});

module.exports = formRouter;