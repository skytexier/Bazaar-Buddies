const router = require("express").Router();
const {User} = require("../../../server/models/User.js");
const loginCheck = require("../../../server/utils/loginCheck");

router.get("/login", async (req,res)=>{
    if(req.session.logged_in){
        res.status(400).redirect("/");
    }
    else{
        res.render("login", {
            sess:req.session,
        });
    }
});

module.exports = router;