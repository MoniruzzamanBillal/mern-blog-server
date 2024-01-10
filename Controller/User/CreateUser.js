const mongoose = require("mongoose");
const userSchema = require("../../Schema/User/UserSchema");
const userModel = new mongoose.model("User", userSchema);

const createUser = async (req, res) => {
  try {
    const reqData = req.body;
    // const reqData = { email: "abc@debugger.com" };

    await new userModel(reqData).save();

    res.send({ message: "user created successfully s" });

    console.log("data in create user route   = ", reqData);
    res.send({ reqData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: " there is a problem in server " });
  }
};

module.exports = createUser;
