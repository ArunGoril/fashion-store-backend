const { User } = require("../model/user");

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const doc = await user.save();
    res.status(201).json({_id:doc._id, email:doc.email, firstName:doc.firstName});
  } catch (err) {
    if (err.keyValue.email) {
        res.status(401).json({ message: "email already exist" });
    }
    res.status(400).json(err);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne(
      { email: req.body.email }
    );
    if (!user) {
      res.status(401).json({ message: "invalid credentials" });
    } else if (user?.password === req.body.password) {
      res.status(201).json({_id:user._id, email:user.email, firstName:user.firstName});
    } else {
      res.status(401).json({ message: "invalid credentials" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
