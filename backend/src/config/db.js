import mongoose, { Mongoose } from "mongoose"



export const connectDB=async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI)
    console.log("mongodb connected")
    } catch (error) {
        console.error("erroer in connecting to mongodb", error)
        process.exit(1)
    }
}