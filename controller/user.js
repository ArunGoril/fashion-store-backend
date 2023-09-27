const { User } = require("../model/user");

// fetch looged in user
exports.fetchUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById  (id, "firstName email _id addresses");
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

// user data update
exports.updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};
