var express = require('express');
var router = express.Router();

router.post('/uploadPhoto', function(req, res, next){
    uploadSingle(req, res, function(err, data){
        if(err){
            res.json(err)
        }
        else{
            res.json({msg: "File uploaded successfuly"})
        }
    })
})
module.exports = router;