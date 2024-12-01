const mongoose = require("mongoose");

const mongoDbUrl =
  "mongodb+srv://mogilimanikanta5555:Qwerty2307@cluster0.y17vn.mongodb.net/RazorMart?retryWrites=true&w=majority&appName=Cluster0";
const connectDb = () => {
  mongoose
    .connect(mongoDbUrl)
    .then(() => console.log("mongodb connected successfully"))
    .catch((error) => console.log("error in connecting", error));
};

module.exports = { connectDb };
