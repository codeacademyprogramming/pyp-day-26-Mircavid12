const mongoose = require('mongoose');

const URI = "mongodb+srv://dbRoom:12345@cluster0.xhkvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB =async()=>{
    await mongoose.connect(URI,{useUnifiedTopology:true,useNewUrlParser:true});
    console.log('DB Connected...');
    
}

module.exports = connectDB;