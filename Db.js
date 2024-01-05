const mongoose = require("mongoose");

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wng5cg8.mongodb.net/blog-app?retryWrites=true&w=majority`;

const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("connected to database successfully ");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
