const express = require("express");
const router = express.Router();

router.get("/" , (req,res)=>{
    res.send("get for post");
});


router.get("/:id" , (req,res)=>{
    res.send("get for post id");
});

router.post("/" , (req,res)=>{
    res.send("post for post");
});

router.delete("/:id" , (req,res)=>{
    res.send("dlete for post id");
});

module.exports = router;