const express = require ('express');
const app =express();
const dotenv=require('dotenv');
const path = require('path');
const cors = require('cros');
const connectDatabase = require('./config/connectDatabase');


dotenv.config({path: path.join(__dirname,'config','config.env')})

const products= require('./routes/product');
const orders= require('./routes/order');



connectDatabase();


// middleware open
app.use(cors());
app.use(express.json()) ;
app.use(cors());
// middleware close
app.use('/api/v1/',products);
app.use('/api/v1/',orders);

app.listen(process.env.PORT,()=>{                            
        console.log(`sever is listeing to port ${process.env.PORT} in  ${process.env.NODE_ENV}`) 
    })







