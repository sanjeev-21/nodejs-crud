var express = require('express');
var router = express.Router();
const Person = require('../model/person')

router.post("/newData",(req, res, next)=>{
    let newData = new Person({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.email
    })
    newData.save((err, data)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json({msg:"Data saved successfully"})
        }
    })
})
router.get("/getData", (req, res, next)=>{
    Person.find(function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
})
router.put("/updateData/:id", (req, res, next)=>{
    Person.findOneAndUpdate({_id:req.params.id}),{
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            gender: req.body.gender
        }
    },
    function(err, result){
        if(err){
            res,json(err)
        }
        else{
            res.json({msg: "Data updated successfully!"})
        }
    }
})
router.delete("/deleteData/:id", (req, res,next)=>{
    Person.remove({_id:req.params.id}, function(err, result){
        if(err){
            res.json(err)
        }
        else{
            res.json({msg: "Data deleted successfully"})
        }
    })
})
module.exports = router;