const mongoose = require("mongoose");
const userSchema = require("../../Schema/User/UserSchema");
const userModel = new mongoose.model("User", userSchema);

const createUser = async (req, res) => {
  try {
    const reqData = req.body;

    const result = await userModel.find(reqData);

    console.log(result.length);

    if (result.length > 0) {
      return res.send({ message: "user already exist " });
    }

    await new userModel(reqData).save();

    res.send({ message: "user created successfully s" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: " there is a problem in server " });
  }
};

module.exports = createUser;
