const express = require("express");
const router = express.Router();

// index - users
router.get("/" , (req,res) =>{
    res.send("get for users");
});

router.get("//:id" , (req,res) =>{
    res.send("get for users id");
});

router.post("/" , (req,res) =>{
    res.send("post for users");
});

router.delete("/:_id" , (req,res) =>{
    res.send("delete for users");
});

module.exports = router;
