const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// Middleware to set CORS headers

// app.options("*",cors(
//     {
//     origin:function(origin,callback){
//         return callback(null,true);
//     },
//     optionsSuccessStatus:200,
//     credentials:true,
//     }
// ))



  
  // Enable CORS with custom options
  app.use(cors());
  
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://zeeshanzia1270:1234@cluster0.drjympm.mongodb.net/")
.then(console.log("Databse Connected")).catch((err)=>{
    console.log(err);
})
// Routes
const authRouter = require('./routes/user');
app.use( authRouter);


app.get('/',(req,res)=>{
    res.json("Hello")
})
// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
