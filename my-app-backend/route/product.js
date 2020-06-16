var express = require('express');
var router = express.Router();
const Product = require('../model/product')

router.post("/newItem", (req,res, next ) => {
    console.log('req',req.body)
    let newProduct = new Product({
        itemName: req.body.itemName,
        price: req.body.price,
        quantity: req.body.quantity,
        sellerName: req.body.sellerName
    })
    newProduct.save((err, product) => {
        if(err)
            res.json({ error: err });
        else{
             res.json({ msg: "Product saved success fullly!!" });
        }
    })
})
router.get("/getItems", (req, res) => {
    Product.find(function(err, item){
        if(err){
            res.json(err)
        }
        else{
            res.json(item)
        }
    })
})
router.put("/updateItem/:id", (req, res, next) => {
    Product.findOneAndUpdate({_id: req.params.id},{
        $set: {
            itemName: req.body.itemName,
            price: req.body.price,
            quantity: req.body.quantity,
            sellerName: req.body.sellerName
        }
    },
    function(err, result){
        if(err){
            res.json(err)
        }
        else{
            res.json({ msg: "Data updated successfullly!!" })
        }
    }
    )
})
router.delete("/deleteItem/:id", (req, res, next) => {
    Product.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err)
        }
        else{
            res.json({msg: "Item deleted Successfully"})
        }
    })
})
module.exports = router;