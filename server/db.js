import mongoose from 'mongoose';

const connectDB = async ()=>{
    try {
       const db = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${db.connection.host}`);
        
    } catch (error) {

        console.error(`Error: ${error.message}`);
        process.exit(1);
        
    }

}

export default connectDB;

// mongodb+srv://trysangam:<password>@cluster1.2bssf.mongodb.net/<databse name>