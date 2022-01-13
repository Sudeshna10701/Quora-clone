const mongoose = require("mongoose");

const url =
  "mongodb://Sudeshna10:Sudeshna10@cluster0-shard-00-00.j08e6.mongodb.net:27017,cluster0-shard-00-01.j08e6.mongodb.net:27017,cluster0-shard-00-02.j08e6.mongodb.net:27017/Quora-clone?ssl=true&replicaSet=atlas-13yorl-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};