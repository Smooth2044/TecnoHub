import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Tecnohub');
        console.log ('DB is connected')
    }   catch (error) {
        console.log(error)
    }
}