const { Router } = require("express");

const messageRouter = Router();


messageRouter.get("/", (req, res) => {
    console.log(req.query.position);
    let messages = req.app.locals.messages;
    res.render('message', {message: messages[req.query.position].text})
});

module.exports = messageRouter;