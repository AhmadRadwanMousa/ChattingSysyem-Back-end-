const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const database = process.env.MONGOLAB_URI;
async function main() {
  mongoose
    .connect(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
}

module.exports = { main };
