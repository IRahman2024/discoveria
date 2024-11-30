import mongoose from "mongoose";
const uri = process.env.Mongo_Uri;
const dbConnected = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }
  try {
    await mongoose.connect(uri);
    console.log("Mongodb Connected Successfully");
    return true;
  } catch (error) {
    console.log(error.message);
  }
};
export default dbConnected;
