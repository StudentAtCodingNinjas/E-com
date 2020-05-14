const mongoose = require('mongoose');

const Product = require('../models/product');

//Action to add products
module.exports.addProduct = function(req,res){
    
    Product.create(req.body, function(err, product){
        if(err){
            console.error(err);
            return  res.redirect('/')
        }
        return  res.json({product})
    });
};



// Action for get products
module.exports.getProducts = function(req,res){
  Product.find({},function(err, products){
    if(err){
      console.log(err);
      return  res.redirect('/');
    }
    return  res.json({data:{
      products: products
    }});
  });
};


//To Update product
module.exports.updateProduct = function(req,res){
    const qty = parseInt(req.query.number);
    Product.findByIdAndUpdate(req.params.id, {$inc:{quantity:qty}},{new:true}, function(err, newProduct){
      if(err){
        console.error("Error",err);
        return res.redirect("/");
      }
        
        return res.json({data:{
            product: newProduct,
            message: "updated succesfully"
        }});
        
    });  
};


//To delete a product
module.exports.deleteProduct = function(req, res) {
    Product.findByIdAndRemove(req.params.id, function(err) {
      if (err){
        console.error("Error in Deleting Product",err);
        return res.redirect("/");
      }else{
        return res.json({data:{message:"product deleted"}});
      }
    });
};