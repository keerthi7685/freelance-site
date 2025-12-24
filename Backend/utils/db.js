import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in your .env file");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      // Optional but recommended for clarity:
      serverSelectionTimeoutMS: 10000, // wait 10s instead of failing immediately
    });

    console.log("✅ MongoDB Connected Successfully");

  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    console.error(error);  // prints full error for debugging
    process.exit(1);       // stop server if DB fails
  }
};

export default connectDB;
