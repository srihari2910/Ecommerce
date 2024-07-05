const mongoose=require('mongoose');
 const productSchema =new mongoose.Schema
 ({
        name:String,
        price:String,
        description:String,
         ratings:String,
image:[
    {
        image:String
    }
],
categroy:String,
seller:String,
stock:String,
numofreviews:String,
createAt:Date



 }); 

 const productModel=mongoose.model('product', productSchema);
 module.exports=productModel;
 
//  module.exports =productModel;