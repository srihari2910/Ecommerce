// const productModel=require('../models/productModel');
const productModel=require('../models/productModel');


//logic for get  API- /api/v1/PRODUCT
exports.getproducts=async(req,res,next)=>{
         
   const products=await productModel.find({});

    res.json({
        success:true,
        products
    })
}


//logic for get single 
//getproduct API- /api/v1/PRODUCT/:ID
exports.getsingleproducts=async(req,res,next)=>{
    
 

 try
 {
            const product= await productModel.findById(req.params.id);
           

    res.json({
        success:true,
        product
    })

         }
         catch(error)
         {
            res.status(404).json({
                success:false,
                Message: error.Message
            })

         }
}