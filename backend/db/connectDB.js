import mongoose from "mongoose";
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected To MongoDB");
    } catch (error) {
        console.log("Error connecting to Mongodb", error.message);
    }
};
export default connectDB;