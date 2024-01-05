const getBlog = async (req, res) => {
  try {
    res.send({ message: "get all blogs " });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getBlog;
