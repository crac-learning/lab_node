``; // Connection file for MongoDB database
import mongoose from "mongoose";

export default async (path: string) => {
  return mongoose.connect(path);
};
