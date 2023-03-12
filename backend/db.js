const mongoose = require("mongoose");
require("dotenv").config;

mongoose.connect(
  "mongodb+srv://Shruthi_11:shruthi2003@testing.rcoxf.mongodb.net/pizzaHome",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

db.on("connected", () => {
  console.log("db connected");
});
db.on("error", () => {
  console.log("db error");
});
