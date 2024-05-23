import mongoose from "mongoose";

const mongodbUri: any = process.env.MONGODB_URI;

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }

  try {
    await mongoose.connect(mongodbUri);
  } catch (error) {
    throw new Error("Error connecting to DB");
  }
};

export default connectDB;
