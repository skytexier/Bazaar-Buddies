const router = require("express").Router();
const {User} = require("../models/User.js")
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
    try{
        const userData = await User.findOne({
            where: {username: req.body.username},
        });

        if(!userData){
            res
                .status(400)
                .json({message: "Incorrect email or password, please try again"});
            return;
        }

        const passwordTest = await userData.checkPassword(req.body.password);

        if(!pwTest){
            res.status(400).json({
                message: "Incorrect username or password. Password failed hash check.",
            });
            return;
        }

        req.session.save(() => {
            req.session.username = req.body.username;
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json({user: userData});
        });
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});

router.post("/signout", async (req, res) => {
    if(req.session.logged_in){
        req.session.destroy(() =>{
            res.status(204).end();
        });
    }
    else{
        res.status(404).end();
    }
});

module.exports = router;