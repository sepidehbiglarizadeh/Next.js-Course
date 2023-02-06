import mongoose from "mongoose";

const connection = {};

function dbConnect() {
  // if (connection.isConnected) {
  //   return;
  // }

  // const db = await mongoose.connect(`${process.env.MONGO_URI}`, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });

  // connection.isConnected = db.connections[0].readyState;

  // __________________________________________________________________

  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully..."))
    .catch(() => console.log("Could not connect...!"));
}

export default dbConnect;
