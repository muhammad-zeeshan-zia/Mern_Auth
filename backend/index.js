const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors(
    {
        origin:"*",
        methods:["POST","GET"],
        credentials:true,
    }
));
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://zeeshanzia1270:1234@cluster0.tquxb7h.mongodb.net/');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

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
