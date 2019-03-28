const express = require("express");
const router = express.Router();
const Book = require("../bin/models/book")

//The comments for setting up routes can be found in clientrouter.js

//This will mostly go over how to:
// GET data from mongoose
// UPDATE data from mongoose
// CREATE data in mongoose 
// and DELETE data in mongoose. 

// We use the following HTTP methods 
// GET - get the data
// POST - create the data
// PUT - update the data
// DELETE - delete the data.

router.route("/")
.all((req,res,next)=>{
    console.log("[Book Action]","Got book action")
    next();
})
.get((req,res,next)=>{
    console.log("[Book Action]","Get Books")
    Book.find({}).exec()
    .then(books=>{
        console.log("[Book Action]","Got Books")
        res.json(books)
    })
    .catch(err=>{
        console.log("[Book Action]","Error getting books")
    })
})
.post((req,res,next)=>{
    console.log("[Book Action]","Get Books")

})
.put((req,res,next)=>{
    console.log("[Book Action]","Update Books")

})
.delete((req,res,next)=>{
    console.log("[Book Action]","Delete Books")
})

module.exports = router;