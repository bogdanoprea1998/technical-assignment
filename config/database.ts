import mongoose from "mongoose";

mongoose.set("debug", true);
const mongodbUri: any = process.env.MONGODB_URI;

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }

  try {
    await mongoose.connect(mongodbUri);
    return true;
  } catch (error) {
    throw error;
  }
};

export default connectDB;
