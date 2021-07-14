const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        // mongodb connection
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        
        console.log(`MongoDB Connected: ${con.connection.host} `)

    }catch(err){
        console.log(`Error in Connecting to MongoDB`);
        process.exit(1);

    }
}

module.exports = connectDB