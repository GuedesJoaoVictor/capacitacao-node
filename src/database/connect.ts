import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.0qesj.mongodb.net/database?retryWrites=true&w=majority&appName=CursoNodeJS`
    )
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err: Error) => {
      throw err;
    });
};

export default connectDB;
