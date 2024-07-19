import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/merndb');
        console.log('MongoDB connected...');
    } catch (error) {
        console.log(error);
    }
}
