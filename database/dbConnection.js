import mongoose from "mongoose";

export async function dbConnection() {
  try {
    await mongoose.connect(
      process.env.DB_URI
    );
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error while connecting to Database", error);
  }
}
